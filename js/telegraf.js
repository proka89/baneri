$(document).ready(function() {
  $('.main-category').bind('click', function(e) {
    e.preventDefault();
  });
})

$(document).ready(function() {

  var listCon = $('.list-container');
  var navArrow = $('.navigation-arrow');
  var hide = $('.hide');

  $(".menu-icon").on("click", function() {

    $(".menu").toggleClass("clicked");
    $(".telegraf-main").toggleClass("opacity-main");
    // resetuje meni
    $(listCon).siblings().find(hide).removeClass('show');
    $(listCon).siblings().find(navArrow).removeClass('navigation-arrow-active');
    $("html, body").toggleClass("content-scrool");

  });

  $(navArrow).on("click", function() {
    $(this).closest('li').find('ul').toggleClass("show");
    // zatvara ostale pod-menije
    $(this).closest(listCon).siblings().find(hide).removeClass('show');

    $(this).toggleClass("navigation-arrow-active");
    // resetuje navigacionu strelicu
    $(this).closest(listCon).siblings().find(navArrow).removeClass('navigation-arrow-active');
  });
});