export default {
  async fetch(request, env, ctx) {
    // Handle CORS preflight requests
    if (request.method === "OPTIONS") {
      return new Response(null, {
        status: 200,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "POST, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type",
          "Access-Control-Max-Age": "86400",
        },
      });
    }

    // Only allow POST requests for signup
    if (request.method !== "POST") {
      return new Response(JSON.stringify({ error: "Method not allowed" }), {
        status: 405,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      });
    }

    try {
      // Parse the request body
      const body = await request.json();
      const { email } = body;

      // Validate email
      if (!email || !isValidEmail(email)) {
        return new Response(
          JSON.stringify({ error: "Valid email is required" }),
          {
            status: 400,
            headers: {
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "*",
            },
          },
        );
      }

      // Prepare the payload for Beehiiv
      const beehiivPayload = {
        email: email.toLowerCase().trim(),
        reactivate_existing: false,
        send_welcome_email: true,
        utm_source: "website",
        utm_medium: "signup_form",
        utm_campaign: "newsletter_signup",
      };

      // Make request to Beehiiv API
      const beehiivResponse = await fetch(
        `https://api.beehiiv.com/v2/publications/${env.BEEHIIV_PUBLICATION_ID}/subscriptions`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${env.BEEHIIV_API_KEY}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(beehiivPayload),
        },
      );

      const beehiivData = await beehiivResponse.json();

      // Handle Beehiiv response
      if (beehiivResponse.ok) {
        // Log successful signup (optional)
        console.log("Newsletter signup successful:", {
          email,
          timestamp: new Date().toISOString(),
        });

        return new Response(
          JSON.stringify({
            success: true,
            message: "Successfully subscribed to newsletter!",
            subscriber_id: beehiivData.data?.id,
          }),
          {
            status: 200,
            headers: {
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "*",
            },
          },
        );
      } else {
        // Handle specific Beehiiv errors
        let errorMessage = "Failed to subscribe to newsletter";

        if (beehiivResponse.status === 400) {
          if (beehiivData.errors && beehiivData.errors.length > 0) {
            const error = beehiivData.errors[0];
            if (error.code === "email_already_subscribed") {
              errorMessage =
                "This email is already subscribed to our newsletter";
            } else {
              errorMessage = error.message || errorMessage;
            }
          }
        } else if (beehiivResponse.status === 401) {
          errorMessage = "Authentication failed";
        } else if (beehiivResponse.status === 429) {
          errorMessage = "Too many requests. Please try again later.";
        }

        console.error("Beehiiv API error:", {
          status: beehiivResponse.status,
          error: beehiivData,
          email: email,
        });

        return new Response(
          JSON.stringify({
            success: false,
            error: errorMessage,
          }),
          {
            status: beehiivResponse.status === 429 ? 429 : 400,
            headers: {
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "*",
            },
          },
        );
      }
    } catch (error) {
      console.error("Worker error:", error);

      return new Response(
        JSON.stringify({
          success: false,
          error: "Internal server error",
        }),
        {
          status: 500,
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
        },
      );
    }
  },
};

// Email validation helper function
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
