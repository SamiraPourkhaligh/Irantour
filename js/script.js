// Show and hide menu button
let navbar = document.querySelector("header .navbar");

document.querySelector("#menu-btn").onclick = () => {
  navbar.classList.add("active");
};
document.querySelector("#nav-close").onclick = () => {
  navbar.classList.remove("active");
};

// Show and hide search form
let searchForm = document.querySelector(".search-form");

document.querySelector("#search-btn").onclick = () => {
  searchForm.classList.add("active");
};
document.querySelector("#search-close").onclick = () => {
  searchForm.classList.remove("active");
};

window.onscroll = () => {
  navbar.classList.remove("active");

  // Change navbar background
  if (window.scrollY > 10) {
    document.querySelector(".header").classList.add("active");
  } else {
    document.querySelector(".header").classList.remove("active");
  }
};

window.onload = () => {
  if (window.scrollY > 10) {
    document.querySelector(".header").classList.add("active");
  } else {
    document.querySelector(".header").classList.remove("active");
  }
};

// swiper slide for hom section
var swiper = new Swiper(".home-slider", {
  loop: true,
  grabCursor: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// swiper slide for product section
var swiper = new Swiper(".product-slider", {
  loop: true,
  grabCursor: true,
  spaceBetween: 20,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    480: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
    1440: {
      slidesPerView: 5,
    },
  },
});

// swiper slide for review section
var swiper = new Swiper(".review-slider", {
  loop: true,
  grabCursor: true,
  spaceBetween: 20,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    480: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1640: {
      slidesPerView: 4,
    },
  },
});

// swiper slide for blogs section
var swiper = new Swiper(".blogs-slider", {
  loop: true,
  grabCursor: true,
  spaceBetween: 20,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
    1640: {
      slidesPerView: 4,
    },
  },
});
