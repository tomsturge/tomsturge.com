$(document).ready(function(){

    $('.main-nav > a').click(function(e){
        e.preventDefault();

        $(".main-nav").toggleClass("menu-open");
        $(".container").toggleClass("menu-open");
    });
});

$(window).scroll(function(){

    var scrollTop = $(window).scrollTop();
    var isTop = (scrollTop > 25);

    $('.main-nav').css('background-color',
                      (isTop) ? 'rgba(0,0,0,.2)' : 'rgba(0,0,0,.65)');

    if(isTop){ $('.main-nav').addClass('notTop'); } else { $('.main-nav').removeClass('notTop'); }

});

$(window).resize(function() {
    if ($(window).width() > 1000) {
        $(".main-nav").removeClass("menu-open");
        $(".container").removeClass("menu-open");
    }
});