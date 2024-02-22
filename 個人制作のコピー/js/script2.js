$(function(){
    $(".menu-trigger").click(function(){
        $(this).toggleClass("active");
        $("nav ul.sp").slideToggle(300);
    });
});
$(function(){
    $(".bxslider").bxSlider({
        'auto':true,
        'mode':'fade',
        'controls':false,
        'pager':false,
    });
});