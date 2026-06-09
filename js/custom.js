// Social-logo
let swiper = new Swiper(".social-logo-main", {
  slidesPerView: "auto",
  spaceBetween: 60,
  loop: true,
  speed: 4000,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },
});


// IT management and 24/7 support for your business
$(document).ready(function () {
  $(".tab-btn").click(function (e) {
    e.preventDefault();
    let tabId = $(this).data("tab");
    $(".tab-btn").removeClass("active");
    $(this).addClass("active");
    $(".tabbing-desc").removeClass("active").hide();
    $("#" + tabId)
      .css("display", "flex")
      .hide()
      .fadeIn(200)
      .addClass("active");
  });
});


// Hear it from our customers
var customerSwiper = new Swiper(".our-customer-right", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  navigation: {
    prevEl: ".customer-prev-btn",
    nextEl: ".customer-next-btn",
  },
});


// Your true IT superpowers, unlocked
var verticalswiper = new Swiper(".superpower-btm", {
  direction: "vertical",
  slidesPerView: 1,
  // mousewheel: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});


// Free IT resources
var resourcesSwiper = new Swiper(".reasources-btm", {
  slidesPerView: 3,
  spaceBetween: 32,
  autoHeight: true,
  loop: true,
  navigation: {
    prevEl: ".reasources-prev",
    nextEl: ".reasources-next",
  },
});

// FAQ
$(".faq-ans").hide();
$(".faq-qa.active .faq-ans").show();
$(".faq-qa.active .faq-arrow").addClass("active");

$(".faq-arrow").on("click", function (e) {
  e.stopPropagation();
  let parent = $(this).closest(".faq-qa");
  $(".faq-qa").not(parent).removeClass("active").find(".faq-ans").slideUp();
  $(".faq-arrow").not(this).removeClass("active");

  parent.toggleClass("active");
  parent.find(".faq-ans").slideToggle();
  $(this).toggleClass("active");
});


// Curious about pricing?
$(document).ready(function () {
  $(".step").removeClass("active-step");
  $(".step").first().addClass("active-step");

  $(".about-step-content").hide();
  $(".about-step-content").first().show();
  $(".step").click(function () {
    let index = $(this).index();
    $(".step").removeClass("active-step");
    $(this).addClass("active-step");

    $(".about-step-content").hide();
    $(".about-step-content").eq(index).fadeIn(200);
  });
});
