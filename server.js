var http = require('http');

var server = http.createServer(function(req, res){
  console.log("hey your server is running!")
  res.write("Hi Hackavan");
  res.end();
});

server.listen(3000);