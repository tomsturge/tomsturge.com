import AOS from "aos";

export function aosInit() {
  AOS.init({
    easing: "ease-out-cubic",
    once: true,
  });
}
