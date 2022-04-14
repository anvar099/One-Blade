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