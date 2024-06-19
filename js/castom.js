$(document).ready(function () {
  $(".slider_carousel").owlCarousel({
    items: 1,
    loop: true,
    autoplay: true,
    autoplayTimeout: 4000,
    smartSpeed: 1500,
    nav: true,
    navText: [
      '<i class="fa-solid fa-angle-left"></i>',
      '<i class="fa-solid fa-angle-right"></i>',
    ],
  });
});
$(document).ready(function () {
  $(".story_carousel").owlCarousel({
    items: 2,
    loop: false,
    autoplay: false,
    autoplayTimeout: 4000,
    smartSpeed: 1500,
    responsive: {
      0: {
        items: 1,
      },
      992: {
        items: 2,
      },
    },
  });
});
$(document).ready(function () {
  $(".client_carousel").owlCarousel({
    items: 2,
    loop: true,
    autoplay: true,
    autoplayTimeout: 4000,
    smartSpeed: 1500,
    responsive: {
      0: {
        items:1,
      },
      768: {
        items:2,
      },
    },
  });
});
// wow js
new WOW().init();

// mixitup
var mixer = mixitup('.filter');

