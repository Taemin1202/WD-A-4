$(function(){
    $(".main li , .sub_bg").mouseover(function(){
        $(".sub , .sub_bg").stop().slideDown();
    })/* main li mouseover */

    $(".main li , .sub_bg").mouseout(function(){
        $(".sub , .sub_bg").stop().slideUp();
    })/* main li mouseout */

    $(".fade li").eq(0).siblings().hide();

    var n = 0;

    setInterval(function(){
        // $(".fade li").eq(n).fadeOut();
        if(n == 2){
            n = 0;
        }
        else{
            n++;
        }
        // console.log(n);
        $(".fade li").eq(n).fadeIn().siblings().fadeOut();
    }, 2500);
})