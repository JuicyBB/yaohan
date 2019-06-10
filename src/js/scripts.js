/**
 * =======================
 * Navigation
 * =======================
 */
(function() {
  var navIsOpen = false;
  $("#main_menu").on("shown.bs.collapse", function() {
    $("body").removeClass("nav-collapsing");
  });
  $("#main_menu").on("show.bs.collapse", function() {
    navIsOpen = true;
    $("body").addClass("nav-collapsing nav-show");
  });
  $("#main_menu").on("hidden.bs.collapse", function() {
    $("body").removeClass("nav-show nav-collapsing");
  });
  $("#main_menu").on("hide.bs.collapse", function() {
    navIsOpen = false;
    $("body")
      .addClass("nav-collapsing")
      .removeClass("nav-show");
  });
  $(".nav-overlay").on("click", function(e) {
    if (navIsOpen) {
      $("#main_menu").collapse("toggle");
    }
  });

  if (location.href.indexOf('/en/') > -1 ) {
    $('.site-en').addClass('active');
  } else {
    $('.site-cn').addClass('active');
  }

  $('.site-en').click(function() {
    location.href = location.pathname.replace('/cn/', '/en/');
  });

  $('.site-cn').click(function() {
    location.href = location.pathname.replace('/en/', '/cn/');
  });
})();

/**
 * =======================
 * Read More
 * =======================
 */
(function() {
  $(document).ready(function() {
    var maxHeight = 150;

    $("#news_blog .card").each(function() {
      var current = $(this).find(".card-text");
      // truncate if more than max height
      if (current.height() > maxHeight) {
        current.addClass("truncated-text");
      } else {
        // remove more link if less than max height
        current
          .parents(".card")
          .find(".more-link")
          .remove();
      }
    });

    var untruncate = function() {
      var card = $(this)
        .parents(".card")
        .find(".card-text.truncated-text");
      card.removeClass("truncated-text");
      $(this).unbind("click", untruncate);
      $(this).remove();
    };

    $(".more-link").bind("click", untruncate);
  });
})();

/**
 * =======================
 * Contact Form
 * =======================
 */
(function() {
  $.validate({
    form: "#contactForm",
    errorMessageClass: "invalid-feedback",
    errorElementClass: "invalid",
  });
})();
