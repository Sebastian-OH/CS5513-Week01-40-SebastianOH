//This is a comment
/*this is a multi
Line comment*/
let myhttp = require("http");

let myServer = myhttp.createServer(
  function(myRequest, myResponse) {
    console.log(myRequest.url);

    myResponse.writeHead(200, {"Content-Type": "text/plain"});
    myResponse.end("Hello World!");
  }
);

myServer.listen(8080, "0.0.0.0");
console.log("server has started");