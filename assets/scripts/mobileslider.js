$(document).ready(function() {
		
	var workbox = '.slide'

	$(workbox).hover(function() {
	  $(this).find(".hover-box").stop().fadeIn('fast');
	}, function() {
	  $(this).find(".hover-box").stop().fadeOut('fast');
	});

});