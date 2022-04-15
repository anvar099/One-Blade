$("#m__plus__number-1").click(function () {
  changeValue1(1);
});
$("#m__minus__number-1").click(function () {
  changeValue1(-1);
});


function changeValue1(val) {
  var container = $(".m__value-1");
  var current = parseInt(container.html(), 10);

  container.html(Math.max(0, current + val).toString());
}

$("#m__plus__number-2").click(function () {
  changeValue1(1);
});
$("#m__minus__number-2").click(function () {
  changeValue1(-1);
});

function changeValue1(val) {
  var container = $(".m__value-2");
  var current = parseInt(container.html(), 10);

  container.html(Math.max(0, current + val).toString());
}