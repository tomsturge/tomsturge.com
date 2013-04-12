$(document).ready(function() {

	var workbox = '.slide'
	  
	$(workbox).click(function (){
	  $(this).find(".hover-box").stop().fadeIn('fast').delay(5000).fadeOut('fast');
	});

});