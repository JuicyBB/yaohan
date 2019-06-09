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
})();
