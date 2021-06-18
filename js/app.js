$(function() {

  var logoNavWrap = $("#logo-nav-wrap"),
    introH = $("#logo-nav-wrap").innerHeight(),
    scrollOffset = $(window).scrollTop();

  /* Fixed Header */
  checkScroll(scrollOffset);

  $(window).on("scroll", function() {

    scrollOffset = $(this).scrollTop();
    checkScroll(scrollOffset);

  });

  function checkScroll(scrollOffset) {
    if ( scrollOffset >= introH ) {
      logoNavWrap.addClass("fixed");
    } else {
      logoNavWrap.removeClass("fixed");
    }
  };

  /* Menu nav toggle */
  $("#nav-toggle").on("click", function(event){
    event.preventDefault();

    $(this).toggleClass("active");
    $("#nav").toggleClass("active");
  });

});

/* Slick Slider */
$("[data-slider]").slick({
    infinite: true,
    fade: false,
    slidesToShow: 1,
    slidesToScroll: 1,
});

/* Tabs */
(function($) {
  $(function() {

    $('ul.tabs__caption').on('click', 'li:not(.active)', function() {
      $(this)
        .addClass('active').siblings().removeClass('active')
        .closest('div.tabs').find('div.tabs-content').removeClass('active').eq($(this).index()).addClass('active');
    });

  });
})(jQuery);

/* Testimonials Slider */
$(document).ready(function(){
  $('.bxslider').bxSlider({
    pager: false,
    responsive: false,
    slideWidth: 600,
    slideMargin: 10
  });
});
