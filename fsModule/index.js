var fs = require('fs');
var http = require('http');

var server = http.createServer(function(req, res){
    if(req.url=="/"){
        fs.writeFile("demo.txt", "Hello Bangladesh", function(error){
            if(error){
                res.writeHead(200, {'Content-type':'text/html'});
                res.write("File Write Fail");
                res.end();
            }
            else{
                res.writeHead(200, {'Content-type':'text/html'});
                res.write("File Write Success");
                res.end();
            }
        })
    }     
});

server.listen(4040);
console.log("Server successfully run");