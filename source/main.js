var http = require('http');
var URL = require('url');
var server = http.createServer(function(req, res){
    var myUrl = "https://www.facebook.com/search/top?q=jaima%20nur";
    var urlObj = URL.parse(myUrl, true);
    var myHostname = urlObj.host;
    var myPathname = urlObj.pathname;
    var mySearchname = urlObj.search;

    res.writeHead(200, {'Content-type':'text/html'})
    res.write(
        "This is host name: "+ myHostname + "</br>" +
        "This is Path name: "+ myPathname + "</br>" +
        "This is Search name: "+ mySearchname
    );
    res.end();
});

server.listen(5050);
console.log("Server successfully run");