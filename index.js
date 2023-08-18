//This is a comment
/*this is a multi
Line comment*/
let myhttp = require("http");

let myServer = myhttp.createServer(
  function(myRequest, myResponse) {
    console.log(myRequest.url);
    let secretText;
    let secretHeading;
    if (myRequest.url === "/secret") {
      secretHeading = "<h1>Enjoy the Treasure</h1>"
      secretText = "<p>the treasure is located at 33.8111° N, 117.9220° W</p>";
    }
    else {
      secretHeading = "<h1>Welcome to this NORMAL PAGE</h1>"
      secretText = "<p>Nothing secret here, I promise</p>";
    }
    myResponse.writeHead(200, {"Content-Type": "text/plain"});
    myResponse.write(secretHeading);
    myResponse.write(secretText);
    myResponse.end();
  }
);

myServer.listen(8080, "0.0.0.0");
console.log("server has started");