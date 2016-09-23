$(document).ready(function(){
    $("#mainbut").hover(function () {
            $(this).css("opacity", "1.0");
    });
    $("#mainbut").mouseleave(function () {
            $(this).css("opacity", "0.7");
    });
    $("#aboutbut").hover(function () {
            $(this).css("opacity", "1.0");
    });
    $("#aboutbut").mouseleave(function () {
            $(this).css("opacity", "0.7");
    });
    $("#educationbut").hover(function () {
            $(this).css("opacity", "1.0");
    });
    $("#educationbut").mouseleave(function () {
            $(this).css("opacity", "0.7");
    });
    $("#skillbut").hover(function () {
            $(this).css("opacity", "1.0");
    });
    $("#skillbut").mouseleave(function () {
            $(this).css("opacity", "0.7");
    });
    $("#honorbut").hover(function () {
            $(this).css("opacity", "1.0");
    });
    $("#honorbut").mouseleave(function () {
            $(this).css("opacity", "0.7");
    });
    $("#projectbut").hover(function () {
            $(this).css("opacity", "1.0");
    });
    $("#projectbut").mouseleave(function () {
            $(this).css("opacity", "0.7");
    });
    $("#mainbut").click(function () {
        $('html, body').animate({
            scrollTop: $("#main").offset().top
        }, 1000); 
    });
    $("#aboutbut").click(function () {
        $('html, body').animate({
            scrollTop: $("#about").offset().top
        }, 1000); 
    });
    $("#educationbut").click(function () {
        $('html, body').animate({
            scrollTop: $("#education").offset().top
        }, 1000); 
    });
    $("#skillbut").click(function () {
        $('html, body').animate({
            scrollTop: $("#skills").offset().top
        }, 1000); 
    });
    $("#honorbut").click(function () {
        $('html, body').animate({
            scrollTop: $("#honors").offset().top
        }, 1000); 
    });
    $("#projectbut").click(function () {
        $('html, body').animate({
            scrollTop: $("#projects").offset().top
        }, 1000); 
    });
        
});


function eduScroll(tab) {
    $("#"+tab).slideToggle();
}