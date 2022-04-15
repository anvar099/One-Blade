$(".video__carousel").slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
});

function toggleMobileMenu(menu) {
  menu.classList.toggle("open");
}

const cart = document.querySelector(".m__cart");
const btn = document.querySelector("#m__cart-btn");
const cartClose = document.querySelector("#m__cart-close");

const toggleNav = () => {
  cart.classList.toggle("m__card-open");
};
btn.addEventListener("click", toggleNav);
cartClose.addEventListener("click", toggleNav);