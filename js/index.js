function drawCafe() {
  $("#cafe-image").append('<img src="/img/cafe.jpg" id="app" alt="CafeConnect"/>');
  reDrawCafe();
}

function reDrawCafe() {
  if ($(window).width() > 1000) {
    $("#app").height($("#falling").height());

    $(window).resize(function () {
      $("#app").height($("#falling").height());
    });
  }
}

$(window).load(function () {
  drawCafe();
  $(window).resize(function () {
    reDrawCafe();
  });
});

$(document).ready(
  function () {
    $('.cafe-info').matchHeight({
      byRow: true
    });
  });
$(document).ready(
  function () {
    $('.flex-info').matchHeight({
      byRow: true
    });
  });