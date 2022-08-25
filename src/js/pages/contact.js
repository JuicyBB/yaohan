/**
 * =======================
 * Contact Form
 * =======================
 */
var onloadCallback = function() {
    grecaptcha.render('captcha', {
    'sitekey' : '6LdCsKoUAAAAAKy_wrsGGQP6ulTqOdO1578JzRJh'
  });
};

 $(function() {

  // Wake API
  $.get("https://epikode-api.uw.r.appspot.com/");

  $.validate({
    form: "#contactForm",
    errorMessageClass: "invalid-feedback",
    errorElementClass: "invalid",
  });

  $("#contactForm").submit(function(e) {
    e.preventDefault();

    if (grecaptcha.getResponse().length > 0) {
      $('.alert').addClass('d-none');
      $('#loadingButton').removeClass('d-none');
      $('#submitButton').addClass('d-none');

      $.ajax({
        url: "https://epikode-api.uw.r.appspot.com/api/yaohan/email",
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
          $('#loadingButton').addClass('d-none');
          $('#submitButton').removeClass('d-none');
        }
      });
    } else {
      $('#captcha div:first').css('border', '1px solid red');
    }
  });
});
