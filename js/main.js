$(window).on("load", function() {
    $(".open").fadeOut(700);
});

$(document).ready(function (){
    let wEl = $(".portfolio__item").width();
    if ($(window).width() < 768) {
		$(".portfolio__item").css("height", wEl);
	}
    
    $(".menu__btn").click(function (e) {
        e.preventDefault();
        $(".menu__list").slideToggle(300);
    });
    
    $(window).resize(function() {
        let wElR = $(".portfolio__item").width();
        if($(window).width() < 768) {
            $(".portfolio__item").css("height", wElR);
        }
    });

    new WOW().init();   

    $('.count').each(function () {
        $(this).prop('Counter',0).delay(2000).animate({
         Counter: $(this).attr("count-num")
         }, {
          duration: 1500,
          easing: 'swing',
          step: function (now) {
             $(this).text(Math.ceil(now));
          }
         });
     });

     $("a[href^='#']").click(function(e){
        e.preventDefault();
                var _href = $(this).attr("href");
                $("html, body").animate({scrollTop: $(_href).offset().top+"px"}, 1000);
                return false;
        });
});