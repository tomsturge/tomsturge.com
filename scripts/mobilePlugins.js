$(document).ready(function() {
  
  $('body').scrollTop(1);
  
  var workBox = '.slide'

  $(workBox).click(function (){
  $(this).find(".hoverBox").stop().fadeIn('fast')
                         .delay(5000).fadeOut('fast');
  });

});

