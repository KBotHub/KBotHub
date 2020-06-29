var request = require('request'),
    cheerio = require('cheerio');

var url = "http://codenamu.org/blog/";
 

request(url, function (err, res, html) {
    if (!err) {
        var $ = cheerio.load(html);
    }
})
