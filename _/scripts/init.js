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

  $('.introBox').cycle({
    fx: 'fade' // choose your transition type, ex: fade, scrollUp, shuffle, etc...
  });

  $('header h2').cycle ({
    timeout: 6000,
    before: function(){
      $(this).parent().find('a.current').removeClass('current');
    },
    after: function(){
      $(this).addClass('current');
    }
  });

});

