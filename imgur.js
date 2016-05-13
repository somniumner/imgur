var https = require("https");
var mongo = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/imgur';

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
    var myObject = JSON.parse(str);
    console.log(myObject);
  });
});
req.end();

    mongo.connect(url,function(err,db){
      if (err) throw err;
      db.collection('image').save(req.myObject, function(err, records) {
        if (err) throw err;
        console.log("record added");
		db.close()
  })
})