$(function() {

  // Blog
  var WP_URL = 'https://public-api.wordpress.com/wp/v2/sites/yaohanblog.data.blog/posts?per_page=1';

  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var data = JSON.parse(xhr.response);
        date = new Date(data[0].date);
        $('.blog .title').html(data[0].title.rendered);
        $('.blog img').attr('src', data[0].jetpack_featured_media_url)
                      .attr('alt', data[0].title.rendered);
        $('.blog .date').html(date.toDateString());
        $('.blog .excerpt').html(data[0].excerpt.rendered);
      }
  };
  xhr.open("GET", WP_URL, true);
  xhr.send();

  // Hero Image
  $('#hero_crossfade').carousel({
    interval: 4000,
    pause: false,
  });
});