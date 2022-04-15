$(".d__product__img-container").slick({
  vertical: true,
  draggable: true,
  verticalSwiping: true,
  infinite: true,
  slideToShow: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  infinite: true,
  slideToScroll: 1,
  arrows: false,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        vertical: false,
        verticalSwiping: false,
        dots: true,
        horizontalSwiping: true,
        swipe: true,
      },
    },
  ],
});

const cart = document.querySelector(".m__cart");
const btn = document.querySelector("#m__cart-btn");
const cartClose = document.querySelector("#m__cart-close");

const toggleNav = () => {
  cart.classList.toggle("m__card-open");
};
btn.addEventListener("click", toggleNav);
cartClose.addEventListener("click", toggleNav);

