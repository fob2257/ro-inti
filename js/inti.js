$(function(){
    new WOW().init();
})

$(function(){
    $("a.smooth-scroll").click(function(event){
        event.preventDefault();
        // get/return id if they were clicked
        var section = $(this).attr("href");
        $('html, body').animate({
            scrollTop:$(section).offset().top - 60
        },1250, "easeInOutExpo");
    });
});

$(function () {
    $('#inicio-btn a').hover(() => {
        $('#inicio-btn i').addClass('animated bounce');
    }, () => {
        $('#inicio-btn i').removeClass('animated bounce');
    });

    $('#nosotros #mision').hover(() => {
        $('#nosotros #mision #content-box-inner').addClass('zoom-in');
    }, () => {
        $('#nosotros #mision #content-box-inner').removeClass('zoom-in');
    });
    $('#nosotros #vision').hover(() => {
        $('#nosotros #vision #content-box-inner').addClass('zoom-in');
    }, () => {
        $('#nosotros #vision #content-box-inner').removeClass('zoom-in');
    });
    $('#nosotros #valores').hover(() => {
        $('#nosotros #valores #content-box-inner').addClass('zoom-in');
    }, () => {
        $('#nosotros #valores #content-box-inner').removeClass('zoom-in');
    });
});

$(document).ready(function(){
    $('#i-flip, #ii-flip').flip({
        "trigger" : "hover",
    })

    $('#alianzas .slick').slick({
        dots: true,
        accessibility: false,
        arrows: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000,
        centerMode: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
    });
});
