$(function () {
  'use strict'

  $('[data-toggle="offcanvas"]').on('click', function () {
    $('.offcanvas-collapse').toggleClass('open')
  })
})

$(".scroll-next").click(function() {
  var cls = $(this).closest(".section").next().offset().top;
  $("html, body").animate({scrollTop: cls}, "slow");
});




