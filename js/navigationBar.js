$(document).ready(function(){

    $('.menu-wrap > li').mouseenter(function(){
        $(this).children('.sub-menu').slideDown();
        $('.white-box').slideDown();
        $('#globalnav-curtain').fadeIn();
        // if(){}
        
    });
    $('.menu-wrap > li').mouseleave(function(){
        $(this).children('.sub-menu').slideUp();
        $('.white-box').slideUp();
        $('#globalnav-curtain').fadeOut();

    });
});