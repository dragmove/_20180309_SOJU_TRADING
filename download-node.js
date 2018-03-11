var url = 'http://finance.naver.com/sise/sise_deal_rank_iframe.nhn?sosok=01&investor_gubun=9000&type=buy';

var savePath = 'test.html';

var client = require('cheerio-httpcli');
var fs = require('fs');

var param = {};

var outFile = fs.createWriteStream(savePath);

client.fetch(url, param, 'euc-kr', function(error, $, res) {
  if(error) {
    console.log('error:', error);
    return;
  }

  var body = $.html();

  fs.writeFile(savePath, body, (err) => {
    if (err) throw err;

    console.log('The file has been saved!');
  });
});

/*
var http = require('http');

http.get(url, function(res) {
  res.pipe(outFile);

  res.on('end', function(res) {
    outFile.close();

    console.log('end');
  });
});
*/