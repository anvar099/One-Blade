$(".video__carousel").slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
});

function toggleMobileMenu(menu) {
  menu.classList.toggle("open");
}