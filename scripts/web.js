var request = require(['request']),
    cheerio = require(['cheerio']);

var url = "https://kboteditor.kro.kr/";
 

request(url, function (err, res, html) {
    if (!err) {
        var $ = cheerio.load(html);
    }
})
