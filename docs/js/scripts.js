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

  // Nav overlay
  $(".nav-overlay").on("click", (function(e) {
    if (navIsOpen) {
      $("#main_menu").collapse("toggle");
    }
  }));

  // Translation
  if (location.href.indexOf("/cn/") > -1) {
    $(".site-cn").addClass("active");
  } else {
    $(".site-en").addClass("active");
  }

  $(".site-en").click((function() {
    location.href = location.pathname.replace("/cn/", "/");
  }));

  $(".site-cn").click((function() {
    var p = location.pathname;
    var index = location.pathname.lastIndexOf('/');
    location.href = p.substring(0,index)+'/cn/'+p.substring(index+1);
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
