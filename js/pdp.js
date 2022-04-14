$(".d__product__img-container").slick({
  vertical: true,
  draggable: true,
  verticalSwiping: true,
  infinite: true,
  slideToShow: 1,
  slideToScroll: 1,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        vertical: false,
        verticalSwiping: false,
        horizontalSwiping: true,
        swipe: true,
      },
    },
  ],
});