

$(function(){
    $(".menu-trigger").click(function(){
        $(this).toggleClass("active");
        $("nav ul.sp").slideToggle(300);
    });
});

if(window.matchMedia("(max-width: 640px)").matches){
}else{ 
    $(function(){
        $(".js a").click(function(){
    
            $("body").append('<div id="bg">');
            $("body").append('<div id="photo">');
    
            $("#bg").hide();
            $("#photo").hide();
    
            $("#photo").html("<img>");
            $("#photo img").attr("src",$(this).attr("href"));
    
            $("#photo img").attr("width",481);
            $("#photo img").attr("height",439);
            $("#photo img").attr("alt","photo");
    
            $("#bg").fadeIn();
            $("#photo").fadeIn();
    
            $("#bg").click(function(){
                $(this).fadeOut();
                $("#photo").fadeOut();
            });
    
            $("#bg").click(function(){
                $(this).fadeOut(function(){
                    $(this).remove();
                });
                $("#photo").fadeOut(function(){
                    $(this).remove();
                });
            });
    
            return false;
        });
    });
}


$(function () {
    $(window).scroll(function () {
      const windowHeight = $(window).height();
      const scroll = $(window).scrollTop();
  
      $('.element').each(function () {
        const targetPosition = $(this).offset().top;
        if (scroll > targetPosition - windowHeight + 100) {
          $(this).addClass("is-fadein");
        }
      });
    });
  });

  $(function () {
    var parallaxContent = $("#parallax");
    var parallaxNum = parallaxContent.offset().top;
    var parallaxFactor = 0.5;
    var windowHeight = $(window).height();
    var scrollYStart = parallaxNum - windowHeight;
    $(window).on('scroll', function () {
        var scrollY = $(this).scrollTop();
        if (scrollY > scrollYStart) {
            parallaxContent.css('background-position-y', (scrollY - parallaxNum) * parallaxFactor + 'px');
        } 
    });
});

