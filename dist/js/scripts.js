/*!
 * epikode v1.0.0: Epikode website
 * (c) 2019 
 * ISC License
 * http://github.com/your-username/project
 */

/**
 * =======================
 * Navigation
 * =======================
 */
(function() {
  $(document).on("click", (function(e) {
    console.log("test");
    var menu_opened = $("#main_menu").hasClass("show");
    if (
      !$(e.target).closest("#main_menu").length &&
      !$(e.target).is("#main_menu") &&
      menu_opened === true
    ) {
      $("#main_menu").collapse("toggle");
    }
  }));

  if (location.href.indexOf('/en/') > -1 ) {
    $('.site-en').addClass('active');
  } else {
    $('.site-cn').addClass('active');
  }

  $('.site-en').click((function() {
    location.href = location.pathname.replace('/cn/', '/en/');
  }));

  $('.site-cn').click((function() {
    location.href = location.pathname.replace('/en/', '/cn/');
  }));
})();

/**
 * =======================
 * Read More
 * =======================
 */
(function() {
  $(document).ready((function() {
    var maxHeight = 150;

    $("#news_blog .card").each((function() {
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
    }));

    var untruncate = function() {
      var card = $(this)
        .parents(".card")
        .find(".card-text.truncated-text");
      card.removeClass("truncated-text");
      $(this).unbind("click", untruncate);
      $(this).remove();
    };

    $(".more-link").bind("click", untruncate);
  }));
})();
