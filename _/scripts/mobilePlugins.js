$(document).ready(function() {

  var workBox = '.slide'

  $(workBox).click(function (){
  $(this).find(".hoverBox").stop().fadeIn('fast')
                         .delay(5000).fadeOut('fast');
  });

});

