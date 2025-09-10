// JavaScript Document
$(document).ready(function(){
    $(window).scroll(function(){
        if($(this).scrollTop() > 220){
            $('#top').fadeIn();
        }else{
            $('#top').fadeOut();
        }
    });
    $('#top').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 100);
        return false;
    });
});