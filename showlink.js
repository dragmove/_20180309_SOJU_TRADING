var client = require('cheerio-httpcli');

var url = 'http://jpub.tistory.com';

var param = {};

client.fetch(url, param, function(error, $, res) {
  if(error) {
    console.log('error:', error);
    return;
  }

  $('a').each(function(idx) {
    var text = $(this).text();
    var href = $(this).attr('href');

    console.log(text + ':' + href);
  });
});