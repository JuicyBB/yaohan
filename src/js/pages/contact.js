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

  $("#contactForm").submit(function(e) {
    $('.alert').addClass('d-none');

    e.preventDefault();
    $.ajax({
      url: "https://epk-api.herokuapp.com/api/yaohan/email",
      method: "POST",
      data: $(this).serialize(),
      success: function() {
        $('.alert-success').removeClass('d-none');
        $('#contactForm').addClass('d-none');
        $("html, body").animate({ scrollTop: "0px" });
      },
      error: function() {
        $('.alert-danger').removeClass('d-none');
        $("html, body").animate({ scrollTop: "0px" });
      }
    });
  });
});
