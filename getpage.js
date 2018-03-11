var client = require('cheerio-httpcli');

var url = 'http://finance.naver.com/sise/sise_deal_rank.nhn';

var param = {};

client.fetch(url, param, function(error, $, res) {
  if(error) {
    console.log('error:', error);
    return;
  }

  var body = $.html();
  console.log('body :', body);
});