$(document).ready(function() {

  $('.curtains').curtain({
    scrollSpeed: 450,
    controls: '.menu',
    curtainLinks: '.curtain-links',
    enableKeys: false
  });

  $('.introBox').cycle({
    fx: 'fade' // choose your transition type, ex: fade, scrollUp, shuffle, etc...
  });
  
  var workBox = '.workShowcase li'
  
  $(workBox).hover(function (){
    $(this).children("div").stop().fadeIn('fast');
  },
  function (){
    $(this).children("div").stop().fadeOut('fast');
  });
    
});

