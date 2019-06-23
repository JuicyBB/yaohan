$(function() {
  document.getElementById('contactFrame').addEventListener('load', function() { 
    // Contact form success
    console.log('frame load');
  });
});

/**
 * =======================
 * Contact Form
 * =======================
 */
$(function() {
  $.validate({
    form: "#contactForm",
    errorMessageClass: "invalid-feedback",
    errorElementClass: "invalid",
  });
});
