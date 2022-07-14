var fs = require('fs');
var http = require('http');

var server = http.createServer(function(req, res){
    if(req.url="/"){
        //asy
        let myData = fs.readFileSync('home.html');
        res.writeHead(200, {'Content-type':'text/html'});
        res.write(myData);
        res.end();
    }
});

server.listen(4040);
console.log("Server successfully run");