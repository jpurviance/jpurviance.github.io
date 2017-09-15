function drawCafe() {
  $("#cafe-image").append('<img src="/img/cafe.jpg" id="app" alt="CafeConnect"/>');
  $("#stackcents-mlh-wrapper").append('<img src="/img/stackcentsmlh.png" id="stackcents-awards" alt="MLH Awards"/>')
  reDrawCafe();
}

function reDrawCafe() { // todo remanme is hack
  if ($(window).width() > 1000) {
    $("#app").height($("#falling").height());
    $("#stackcents-awards").height($("#stackcents-home").height());

    $(window).resize(function () {
      $("#app").height($("#falling").height());
      $("#stackcents-awards").height($("#stackcents-home").height());
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

$(document).ready(
  function () {
    $('.stackcents-info').matchHeight({
      byRow: true
    });
  });