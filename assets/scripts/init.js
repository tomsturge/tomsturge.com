$(document).ready(function() {
  
  var workBox = '.slide'

  Modernizr.load([{
    test: 1025 > window.screen.width,
    yep: 
      $(workBox).click(function (){
        $(this).find(".hoverBox").stop().fadeIn('fast').delay(5000).fadeOut('fast');
      });,
    nope: 
      $(workBox).hover(function() {
        $(this).find(".hoverBox").stop().fadeIn('fast');
      }, function() {
        $(this).find(".hoverBox").stop().fadeOut('fast');
      });
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

