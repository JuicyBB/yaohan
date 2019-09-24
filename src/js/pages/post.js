$(function() {
  var PAGE_NUMBER = 1,
    PAGE_SIZE = 2,
    TRUNCATE_MAX_HEIGHT = 160;

  /**
   * =======================
   * Read More
   * =======================
   */
  var untruncate = function() {
    var card = $(this)
      .parents(".card")
      .find(".card-text.truncated-text");
    card.removeClass("truncated-text");
    $(this).addClass('hide');
  };

  function bindCard(card) {
    var current = card.find(".card-text");
    // truncate if more than max height
    if (current.height() > TRUNCATE_MAX_HEIGHT) {
      current.addClass("truncated-text");
      card.find(".more-link")
        .removeClass('hide');
    } else {
      // hide more link if less than max height
      card.find(".more-link")
        .addClass('hide');
    }

    card.find(".more-link").bind('click', untruncate);
  }

  function generateCard(post) {
    var card = $('.card-tmpl').clone().removeClass('hide card-tmpl'),
      date = new Date(post.date);

    card.attr('id', post.id);
    card.find('.card-img-top').attr('src', post.jetpack_featured_media_url)
        .attr('alt', post.title.rendered);
    card.find('.card-title').html(post.title.rendered);
    card.find('.card-text').html(post.content.rendered);
    card.find('.card-date').html('Posted on ' + date.toDateString());
    card.appendTo('.card-wrapper');
    bindCard(card);
  }

  function loadPage() {
    var WP_URL = 'https://public-api.wordpress.com/wp/v2/sites/yaohanblog.data.blog/posts?per_page=' + PAGE_SIZE +'&page=' + PAGE_NUMBER;
    
    if ($('#promotions-page').length > 0) WP_URL += '&tags=17437';
    else WP_URL += '&tags_exclude=17437';

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          var data = JSON.parse(xhr.response);

          data.forEach(function(post, index) {
            if ($('#' + post.id).length == 0) {
              generateCard(post);
              if (data.length < PAGE_SIZE) $('#load_more').hide();
            }
          });
        } else if (this.readyState == 4) {
          $('#load_more').hide();
        }
    };
    xhr.open("GET", WP_URL, true);
    xhr.send();
    PAGE_NUMBER++;
  }

  function loadSticky() {
    var WP_STICKY_URL = 'https://public-api.wordpress.com/wp/v2/sites/yaohanblog.data.blog/posts?sticky=true';

    if ($('#promotions-page').length > 0) WP_STICKY_URL += '&tags=17437';
    else WP_STICKY_URL += '&tags_exclude=17437';

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          var data = JSON.parse(xhr.response);

          data.forEach(function(post, index) {
            generateCard(post);
          });

          loadPage();
        }
    };
    xhr.open("GET", WP_STICKY_URL, true);
    xhr.send();
  }

  loadSticky();

  $('#load_more').click(function() {
    loadPage();
  });
});