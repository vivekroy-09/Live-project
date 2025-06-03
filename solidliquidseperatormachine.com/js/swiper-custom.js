    var swiper = new Swiper("#main_slider", { slidesPerView: 1, spaceBetween: 0, effect: "fade", autoplay: { delay: 6000, disableOnInteraction: false } });
var swiper = new Swiper("#life_slider", { slidesPerView: 1, spaceBetween: 0, speed: 1000, autoplay: { delay: 4000, disableOnInteraction: false }, pagination: { el: ".swiper-pagination" } });
var swiper = new Swiper("#client_slider", {
    slidesPerView: 1,
    spaceBetween: 0,
    effect: "fade",
    speed: 1000,
    autoplay: { delay: 4000, disableOnInteraction: false },
    navigation: { nextEl: ".swiper-button-next.client_nav", prevEl: ".swiper-button-prev.client_nav" },
});
var swiper = new Swiper("#event_slider", { slidesPerView: 1, spaceBetween: 40, speed: 1000, autoplay: { delay: 4000, disableOnInteraction: false }, pagination: { el: ".swiper-pagination", clickable: true } });
var swiper = new Swiper("#solution_slider", {
    slidesPerView: 1,
    spaceBetween: 0,
    centeredSlides: true,
    loop: true,
    autoplay: { delay: 4000, disableOnInteraction: false },
    speed: 1000,
    navigation: { nextEl: ".swiper-button-next.sol_nav", prevEl: ".swiper-button-prev.sol_nav" },
    breakpoints: { 640: { slidesPerView: 1 }, 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } },
});
var swiper = new Swiper("#blog_slider", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: { delay: 4000, disableOnInteraction: false },
    speed: 1000,
    navigation: { nextEl: ".swiper-button-next.blog_nav", prevEl: ".swiper-button-prev.blog_nav" },
    breakpoints: { 640: { slidesPerView: 1 }, 768: { slidesPerView: 2 }, 1024: { slidesPerView: 2 } },
});
var swiper = new Swiper("#team_slider", {
    slidesPerView: 1,
    spaceBetween: 30,
    autoplay: { delay: 4000, disableOnInteraction: false },
    speed: 1000,
    navigation: { nextEl: ".swiper-button-next.team_nav", prevEl: ".swiper-button-prev.team_nav" },
    breakpoints: { 640: { slidesPerView: 1 }, 768: { slidesPerView: 3 }, 1024: { slidesPerView: 4 } },
});
var swiper = new Swiper("#award_slider", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: { delay: 4000, disableOnInteraction: false },
    speed: 1000,
    navigation: { nextEl: ".swiper-button-next.award_nav", prevEl: ".swiper-button-prev.award_nav" },
    breakpoints: { 640: { slidesPerView: 1 }, 768: { slidesPerView: 3 }, 1024: { slidesPerView: 4 } },
});
var swiper = new Swiper("#success_slider", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: { delay: 4000, disableOnInteraction: false },
    speed: 1000,
    navigation: { nextEl: ".swiper-button-next.success_nav", prevEl: ".swiper-button-prev.success_nav" },
    breakpoints: { 640: { slidesPerView: 1 }, 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } },
});
var swiper = new Swiper("#partner_slider", {
    slidesPerView: 2,
    spaceBetween: 30,
    loop: true,
    autoplay: { delay: 2500, disableOnInteraction: false },
    speed: 1000,
    navigation: { nextEl: ".swiper-button-next.partner_nav", prevEl: ".swiper-button-prev.partner_nav" },
    breakpoints: { 640: { slidesPerView: 2 }, 768: { slidesPerView: 4 }, 1024: { slidesPerView: 6 } },
});
var quote_thumbs = new Swiper("#quote_slide", {
    loop: true,
    spaceBetween: 20,
    slidesPerView: "2",
    slideToClickedSlide: true,
    breakpoints: { 640: { slidesPerView: 2 }, 768: { slidesPerView: 3 }, 1024: { slidesPerView: 5 } },
    navigation: { nextEl: ".swiper-button-next.quote_nav", prevEl: ".swiper-button-prev.quote_nav" },
});
var quote_slider_main = new Swiper("#quote_thumb", { loop: true, spaceBetween: 0 });
quote_thumbs.controller.control = quote_slider_main;
quote_slider_main.controller.control = quote_thumbs;
var swiper = new Swiper("#service_slider", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: { delay: 4000, disableOnInteraction: false },
    speed: 1000,
    navigation: { nextEl: ".swiper-button-next.service_nav", prevEl: ".swiper-button-prev.service_nav" },
    breakpoints: { 640: { slidesPerView: 1 }, 768: { slidesPerView: 2 }, 1024: { slidesPerView: 4 } },
});