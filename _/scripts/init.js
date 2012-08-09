$(document).ready(function() {

  $(".lettering").lettering();

  $('.curtains').curtain({
    scrollSpeed: 450,
    controls: '.menu',
    curtainLinks: '.curtain-links'
  });

  var nav = 'nav ul';
  
/* 
  $(nav + ' a').click(function() {
    $(nav).children().removeClass('active');
    $(this).parent().addClass('active');
  });
*/


});

