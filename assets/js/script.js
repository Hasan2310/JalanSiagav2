    var swiper = new Swiper('.swiper-container', {
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
            slidesPerView: 2, // Tampilkan 2 slide per view untuk lebar >= 640px
        },
        // Ketika lebar layar >= 768px
        768: {
            slidesPerView: 4, // Tampilkan 3 slide per view untuk lebar >= 768px
        },
        // Ketika lebar layar >= 1024px
        1024: {
            slidesPerView: 4, // Tampilkan 4 slide per view untuk lebar >= 1024px
        }
    }
    });

    function highlightCenterCard() {
      // Hapus highlight dari semua kartu
      document.querySelectorAll('.swiper-slide .card').forEach(function (card) {
          card.classList.remove('highlight');
      });

      // Tambahkan highlight ke kartu tengah
      const slides = document.querySelectorAll('.swiper-slide');
      const middleIndex = Math.floor(slides.length / 2);
      const centerCard = slides[middleIndex].querySelector('.card');
      if (centerCard) {
          centerCard.classList.add('highlight');
      }
  }

document.getElementById("menu-btn").addEventListener("click", function () {
    const mobileMenu = document.getElementById("mobile-menu");
    mobileMenu.classList.toggle("hidden");
});

