$(document).ready(function(){

    // Add mobile menu listener
    $('.main-nav > a').click(function(e){
        e.preventDefault();

        $(".main-nav").toggleClass("menu-open");
        $(".container").toggleClass("menu-open");
    });

    // Reading time calculator
    var regex = /\s+/gi;
        word = $("section#post-content > div").text().trim().replace(regex, ' ').split(' ').length,
        length = word / 60,
        time = Math.round(length).toFixed(0);

    $('<p class="post--length">'+time+' min</p>').insertAfter('#post-single .page__intro time');
});

$(window).scroll(function(){

    // Scroll down menu
    var scrollTop = $(window).scrollTop();
    var isTop = (scrollTop > 25);

    if(isTop){ $('.main-nav').addClass('notTop'); } else { $('.main-nav').removeClass('notTop'); }
});

$(window).resize(function() {

    // Get rid of the mobile menu class when the browser window is width enough
    if ($(window).width() > 1000) {
        $(".main-nav").removeClass("menu-open");
        $(".container").removeClass("menu-open");
    }
});
