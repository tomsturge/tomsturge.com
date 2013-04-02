$(document).ready(function() {

  var workBox = '.slide'

  $(workBox).hover(function() {
    $(this).find(".hoverBox").stop().fadeIn('fast');
  }, function() {
    $(this).find(".hoverBox").stop().fadeOut('fast');
  });

});