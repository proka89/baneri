$(document).ready(function() {
  // Main menu filter 
  var click = {
    first: false,
    second: false
  };
  var className1, className2;
  var item = $(".banner-content div.item");
  $('.filterOptions li a').click(function() {
    click.first = true;
    $('.filterOptions li').removeClass('active');
    $(this).parent().addClass('active');

    className1 = $(this).attr('class');

    $(item).hide();
    if (click.second == true) {
      $(item).filter('.' + className1 + '.' + className2).show();

    } else {
      $(item).filter('.' + className1).show();
    }
  });

  $('.filterOptions2 li a').click(function() {
    $('.filterOptions2 li').removeClass('active');
    $(this).parent().addClass('active');
    click.second = true;
    className2 = $(this).attr('class');
    $(item).hide();
    if (click.first == true) {
      $(item).filter('.' + className1 + '.' + className2).show();

    } else {
      $(item).filter('.' + className2).show();
    }
  });
  // Main menu filter end

  // Hamburger menu, showing and hiding plus overlay over the main body
  $(".hamburger-menu-icon").on('click', function() {
    $(".banner-vertical-nav").toggleClass("show-hide-vertical-nav");
    $(".banner-main").toggleClass('overlay-color');
  });

});

// Info card show and hide
$(window).load(function() {

  $('.info').click(function() {

    $(this).parents().siblings('.card').addClass('show-card');

  });

  $('.info-close').click(function() {
    $(this).parents().parents().parents().removeClass('show-card');
  });

  $('a.close').click(function(e) {
    e.preventDefault();
  });

  $('.close').click(function() {

    $(this).parents().parents().removeClass('show-card');

  });

});