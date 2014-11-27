require.config({
    "baseUrl": "assets/js",
    "paths": {
      "jquery": "//ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min"
    }
});

define(["jquery"], function($) {
    require(["helper/global"])
});
