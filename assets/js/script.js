    var swiper = new Swiper('.swiper-container', {
      slidesPerView: 4,
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
    });

    function highlightCenterCard() {
      // Remove the highlight from all cards
      document.querySelectorAll('.swiper-slide .card').forEach(function (card) {
        card.classList.remove('highlight');
      });

      // Add the highlight to the center card
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

