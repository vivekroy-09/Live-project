////
function openNav() {
  document.getElementById("myNav").style.display = "block";
}

function closeNav() {
  document.getElementById("myNav").style.display = "none";
}

//ziehharmonika//
$(document).ready(function() {
$('.ziehharmonika').ziehharmonika({
collapsible: true
});
});


// Top //
$(function(){$.fn.scrollToTop=function(){$(this).hide().removeAttr("href");if($(window).scrollTop()!="0"){$(this).fadeIn("slow")}var scrollDiv=$(this);$(window).scroll(function(){if($(window).scrollTop()=="0"){$(scrollDiv).fadeOut("slow")}else{$(scrollDiv).fadeIn("slow")}});$(this).click(function(){$("html, body").animate({scrollTop:0},"slow")})}});     
$(function(){
$("#toTop").scrollToTop();
});


//slider-item//
$('.slider-item').slick({
dots: true,
arrows: true,
infinite: true,
autoplay: true,
draggable: true,
lazyLoad: 'progressive',
autoplaySpeed: 3000,
slidesToShow: 1,
slidesToScroll: 1
});
// menu //
$(document).ready(function () {
ma5menu({ menu: ".site-menu", activeClass: "active", footer: "#ma5menu-tools", position: "left", closeOnBodyClick: !0 });
});

// $(".product-home").slick({
//     dots: !0,
//     infinite: !0,
//     slidesToShow: 4,
//     slidesToScroll: 1,
//     autoplay: !0,
//     arrows: !1,
//     autoplaySpeed: 2e3,
//     pauseOnHover: !0,
//     responsive: [
//         { breakpoint: 991, settings: { slidesToShow: 3, slidesToScroll: 1 } },
//         { breakpoint: 768, settings: { slidesToShow: 2, slidesToScroll: 1 } },
//         { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } },
//     ],
// }),
//     $(".related-product").slick({
//         dots: !0,
//         infinite: !0,
//         slidesToShow: 3,
//         slidesToScroll: 1,
//         autoplay: !0,
//         arrows: !1,
//         autoplaySpeed: 2e3,
//         pauseOnHover: !0,
//         responsive: [
//             { breakpoint: 991, settings: { slidesToShow: 3, slidesToScroll: 1 } },
//             { breakpoint: 768, settings: { slidesToShow: 2, slidesToScroll: 1 } },
//             { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } },
//         ],
//     }),
//     $(".certificate_owl").slick({
//         dots: !0,
//         infinite: !0,
//         slidesToShow: 2,
//         slidesToScroll: 1,
//         autoplay: !0,
//         arrows: !1,
//         autoplaySpeed: 2e3,
//         pauseOnHover: !0,
//         responsive: [
//             { breakpoint: 991, settings: { slidesToShow: 2, slidesToScroll: 1 } },
//             { breakpoint: 768, settings: { slidesToShow: 2, slidesToScroll: 1 } },
//             { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } },
//         ],
//     }),
//     $(document).ready(function () {
//         jQuery(window).scroll(function () {
//             jQuery(window).scrollTop();
//             -0 < jQuery(window).scrollTop() && jQuery(".sticky").addClass("fixed"), jQuery(window).scrollTop() < 50 && jQuery(".sticky").removeClass("fixed");
//         });
//     }),

//     $(function () {
//         $("#toTop").scrollToTop();
//     }),
//     $(document).ready(function () {
//         var t;
//         (t = jQuery)(".tab ul.tabs").addClass("active").find("> li:eq(0)").addClass("current"),
//             t(".tab ul.tabs li a").click(function (o) {
//                 var e = t(this).closest(".tab"),
//                     s = t(this).closest("li").index();
//                 e.find("ul.tabs > li").removeClass("current"),
//                     t(this).closest("li").addClass("current"),
//                     e
//                         .find(".tab_content")
//                         .find("div.tabs_item")
//                         .not("div.tabs_item:eq(" + s + ")")
//                         .slideUp(),
//                     e
//                         .find(".tab_content")
//                         .find("div.tabs_item:eq(" + s + ")")
//                         .slideDown(),
//                     o.preventDefault();
//             });
//     }),
//     $(document).ready(function () {
//         ma5menu({ menu: ".site-menu", activeClass: "active", footer: "#ma5menu-tools", position: "left", closeOnBodyClick: !0 });
//     });