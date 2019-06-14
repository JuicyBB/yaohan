/*!
 * epikode v1.0.0: Epikode website
 * (c) 2019 
 * ISC License
 * http://github.com/your-username/project
 */

$((function() {
  var WP_URL = 'https://public-api.wordpress.com/wp/v2/sites/yaohanblog.data.blog/posts?per_page=1';

  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        var data = JSON.parse(xhr.response);
        $('.blog .title').html(data[0].title.rendered);
        $('.blog img').attr('src', data[0].jetpack_featured_media_url);
        $('.blog .excerpt').html(data[0].excerpt.rendered);
      }
  };
  xhr.open("GET", WP_URL, true);
  xhr.send();
}));