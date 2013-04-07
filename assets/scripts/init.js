$(document).ready(function() {

  $('.introBox').cycle({
    fx: 'fade'
  });


  Modernizr.load([{
    test: 1025 > window.screen.width
  , yep: "assets/scripts/mobilePlugins.js"
  , nope: "assets/scripts/desktopPlugins.js"
  }]);

  $('.workSlider').iosSlider({
    snapToChildren: true,
    scrollbar: true,
    scrollbarHide: false,
    desktopClickDrag: true,
    scrollbarDrag: true,
    scrollbarLocation: 'bottom',
    scrollbarHeight: '10px',
    scrollbarBackground: '#fff',
    scrollbarBorderRadius: '0',
    scrollbarOpacity: '1'
  });

});

