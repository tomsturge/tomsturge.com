$(document).ready(function() {

  $('.curtains').curtain({
    scrollSpeed: 450,
    controls: '.menu',
    curtainLinks: '.curtain-links'
  });

  $('.introBox').cycle({
    fx: 'fade' // choose your transition type, ex: fade, scrollUp, shuffle, etc...
  });

});

