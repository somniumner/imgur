var https = require("https");

var options = {
  protocol:"https:",
  host:"api.imgur.com",
  path:"/3/gallery/hot/viral/page/0/",
  headers:{"Authorization" : "Client-ID 2bd92301396781b"}
}

var req = https.request(options, function(response) {
  var str = '';
  response.on('data', function (chunk) {
    str += chunk;
  });
  response.on('end', function () {
    console.log(str);
  });
});

req.end();  