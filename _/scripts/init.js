$(document).ready(function() {

  $('.curtains').curtain({
    scrollSpeed: 450,
    controls: '.menu',
    curtainLinks: '.curtain-links',
    enableKeys: false
  });

  $('.introBox').cycle({
    fx: 'fade'
  });
  
  var workBox = '.slide'
  
  $(workBox).click(function (){
    $(this).find(".hoverBox").fadeIn('fast')
                             .delay(5000).fadeOut('fast');
  });
  
  $('.workSlider').iosSlider({
    snapToChildren: true,
    scrollbar: true,
    scrollbarHide: false,
    desktopClickDrag: true,
    scrollbarDrag: true,
    scrollbarLocation: 'bottom',
    scrollbarHeight: '10px', 
    scrollbarBackground: '#518058',
    scrollbarBorderRadius: '0',
    scrollbarOpacity: '0.6'
  });
  
  
});

