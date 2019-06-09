/**
 * =======================
 * Navigation
 * =======================
 */
(function() {
  $(document).on("click", function(e) {
    console.log("test");
    var menu_opened = $("#main_menu").hasClass("show");
    if (
      !$(e.target).closest("#main_menu").length &&
      !$(e.target).is("#main_menu") &&
      menu_opened === true
    ) {
      $("#main_menu").collapse("toggle");
    }
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
