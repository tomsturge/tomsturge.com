$(document).ready(function() {

  $('.introBox').cycle({
    fx: 'fade'
  });


  Modernizr.load([{
    test: 1025 > window.screen.width
  , yep: "scripts/mobilePlugins.js"
  , nope: "scripts/desktopPlugins.js"
  }]);

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

  $('a.scroll').live('click',function(e){
    e.preventDefault();
    var target = $(this).attr('href');
    $.scrollTo(target,{'onAfter':function(){
      window.location.hash=target},'duration':500,
    });
  });


  var newWindowHeight = $(window).height();
  $(".cover").css("min-height", newWindowHeight );


  $(window).bind("resize", resizeWindow);
  function resizeWindow( e ) {
    var newWindowHeight = $(window).height();
    $(".cover").css("min-height", newWindowHeight );
  }



});

