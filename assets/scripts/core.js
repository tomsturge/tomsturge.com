$(window).load(function(){
  
  $('#loaded').delay(1000).animate({
    opacity: 1
  },500);
  
  $('.main-nav').delay(1500).animate({
    opacity: 1,
    top: '0'     
  }, 1000);
});