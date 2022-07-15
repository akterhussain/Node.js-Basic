var fs = require('fs');
var http = require('http');

var server = http.createServer(function(req, res){
    if(req.url=="/"){

        let error= fs.unlinkSync("demoUpdate.txt")
        if(error){
            res.writeHead(200, {'Content-type':'text/html'});
            res.write("File Delete Fail");
            res.end();
        }
        else{
            res.writeHead(200, {'Content-type':'text/html'});
            res.write("File Delete success with Sync method");
            res.end();
        }
    }     
});

server.listen(4040);
console.log("Server successfully run");