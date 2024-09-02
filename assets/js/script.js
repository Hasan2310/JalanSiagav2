AOS.init();

var swiper = new Swiper(".swiper-container", {
  slidesPerView: 1,
  spaceBetween: 30,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  allowTouchMove: false, // Disable touch/drag interaction
  on: {
    slideChange: function () {
      highlightCenterCard();
    },
    init: function () {
      highlightCenterCard();
    },
  },
  breakpoints: {
    // Ketika lebar layar >= 640px
    640: {
      slidesPerView: 4, // Tampilkan 2 slide per view untuk lebar >= 640px
    },
    // Ketika lebar layar >= 768px
    768: {
      slidesPerView: 4, // Tampilkan 3 slide per view untuk lebar >= 768px
    },
    // Ketika lebar layar >= 1024px
    1024: {
      slidesPerView: 4, // Tampilkan 4 slide per view untuk lebar >= 1024px
    },
  },
});

function highlightCenterCard() {
  // Hapus highlight dari semua kartu
  document.querySelectorAll(".swiper-slide .card").forEach(function (card) {
    card.classList.remove("highlight");
  });

  // Tambahkan highlight ke kartu tengah
  const slides = document.querySelectorAll(".swiper-slide");
  const middleIndex = Math.floor(slides.length / 2);
  const centerCard = slides[middleIndex].querySelector(".card");
  if (centerCard) {
    centerCard.classList.add("highlight");
  }
}

document.getElementById("menu-btn").addEventListener("click", function () {
  const mobileMenu = document.getElementById("mobile-menu");
  mobileMenu.classList.toggle("hidden");
});

window.addEventListener("load", function () {
  setTimeout(function () {
    document.getElementById("loading-screen").classList.add("fade-out", "img");
    setTimeout(function () {
      document.getElementById("loading-screen").style.display = "none";
      document.getElementById("content").classList.remove("opacity-0");
    }, 500); // Delay untuk fade-out selesai (2 detik)
  }, 3000); // 5000 ms = 5 detik
});

document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll("section");

  // Add click event listener to nav links
  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      // Remove 'active' class from all nav links
      navLinks.forEach((btn) => btn.classList.remove("active"));

      // Add 'active' class to clicked link
      this.classList.add("active");

      // Scroll smoothly to the target section
      const targetId = this.getAttribute("data-target");
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop,
          behavior: "smooth",
        });
      }
    });
  });

  // Highlight active link on scroll
  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (pageYOffset >= sectionTop - sectionHeight / 2) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("data-target") === current) {
        link.classList.add("active");
      }
    });
  });
});
