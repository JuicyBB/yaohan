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
$((function() {
  var navIsOpen = false;
  $("#main_menu").on("shown.bs.collapse", (function() {
    $("body").removeClass("nav-collapsing");
  }));
  $("#main_menu").on("show.bs.collapse", (function() {
    navIsOpen = true;
    $("body").addClass("nav-collapsing nav-show");
  }));
  $("#main_menu").on("hidden.bs.collapse", (function() {
    $("body").removeClass("nav-show nav-collapsing");
  }));
  $("#main_menu").on("hide.bs.collapse", (function() {
    navIsOpen = false;
    $("body")
      .addClass("nav-collapsing")
      .removeClass("nav-show");
  }));
  $(".nav-overlay").on("click", (function(e) {
    if (navIsOpen) {
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
}));

/**
 * =======================
 * Contact Form
 * =======================
 */
$((function() {
  $.validate({
    form: "#contactForm",
    errorMessageClass: "invalid-feedback",
    errorElementClass: "invalid",
  });
}));
