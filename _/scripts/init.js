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
  
  $(workBox).hover(function (){
    $(this).find(".hoverBox").stop().fadeIn('fast');
  },
  function (){
    $(this).find(".hoverBox").stop().fadeOut('fast');
  });
  
  $('.workSlider').iosSlider({
    snapToChildren: true,
    scrollbar: true,
    scrollbarHide: false,
    desktopClickDrag: true,
    scrollbarDrag: true,
    scrollbarLocation: 'bottom',
    scrollbarHeight: '15px', 
    scrollbarBackground: '#609768',
    scrollbarBorderRadius: '0',
    scrollbarOpacity: '1'
  }); // #518058'
  
  
});

