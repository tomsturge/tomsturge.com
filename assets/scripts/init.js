$(document).ready(function() {
  
  Modernizr.load([{
    test: 1025 > window.screen.width,
    yep: '/assets/scripts/desktopslider.js',
    nope: '/assets/scripts/mobileslider.js'
  }]);
  
  /*
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
  */

});

