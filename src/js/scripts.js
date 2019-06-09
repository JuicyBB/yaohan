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
