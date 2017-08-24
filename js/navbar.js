$(function () {
    $(".navbar-collapse ul li a").on("click touch", function () {
        $(".navbar-toggle").click();
    });
    // Cierra navbar al hacer click/touch
});

$(function(){    
    $(window).scroll(function(){
        if($(this).scrollTop() < 100){
               //hide
            $("nav").removeClass("inti-top-nav");
            $('.navbar-header img').removeClass('display-logo');
            $("#back-to-top").fadeOut();            
        }else{
               //show
            $("nav").addClass("inti-top-nav");
            $('.navbar-header img').addClass('display-logo');
            $("#back-to-top").fadeIn();
        }
    });    
});