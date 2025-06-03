$(document).ready(function () {
ma5menu({ menu: ".site-menu", activeClass: "active", footer: "#ma5menu-tools", position: "left", closeOnBodyClick: !0 });
});


// Top //
$(function(){$.fn.scrollToTop=function(){$(this).hide().removeAttr("href");if($(window).scrollTop()!="0"){$(this).fadeIn("slow")}var scrollDiv=$(this);$(window).scroll(function(){if($(window).scrollTop()=="0"){$(scrollDiv).fadeOut("slow")}else{$(scrollDiv).fadeIn("slow")}});$(this).click(function(){$("html, body").animate({scrollTop:0},"slow")})}});     
$(function(){
$("#toTop").scrollToTop();
});

//ziehharmonika//
$(document).ready(function() {
$('.ziehharmonika').ziehharmonika({
collapsible: true
});
});