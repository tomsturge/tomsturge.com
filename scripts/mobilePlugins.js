$(document).ready(function() {
  
  window.addEventListener("load",function() {
    // Set a timeout...
    setTimeout(function(){
      // Hide the address bar!
      window.scrollTo(0, 1);
    }, 0);
  });
  
  var workBox = '.slide'

  $(workBox).click(function (){
  $(this).find(".hoverBox").stop().fadeIn('fast')
                         .delay(5000).fadeOut('fast');
  });

});

