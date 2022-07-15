var fs = require('fs');
var http = require('http');

var server = http.createServer(function(req, res){
    if(req.url=="/"){
        let error= fs.writeFileSync("demo.txt", "Hello Bangladesh")
        if(error){
            res.writeHead(200, {'Content-type':'text/html'});
            res.write("File Write Fail");
            res.end();
        }
        else{
            res.writeHead(200, {'Content-type':'text/html'});
            res.write("File Write Success with syn method");
            res.end();
        }
    }     
});

server.listen(4040);
console.log("Server successfully run");