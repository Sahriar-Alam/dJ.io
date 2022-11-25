//slider active
(function ($) {
  "use strict";
  $(document).on("ready", function () {
    $(".header_slider").slick({
      dots: true,
      arrows: false,
      infinite: true,
      autoplay: true,
      vertical: false,
      verticalSwiping: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    });
  });
})(jQuery);
