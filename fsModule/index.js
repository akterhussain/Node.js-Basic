var fs = require('fs');
var http = require('http');

var server = http.createServer(function(req, res){
    if(req.url=="/"){

        let result = fs.existsSync("name.txt");
        if(result){
            res.end('Worked successfully');
        }
        else{
            res.end('File not found');
        }

    }     
});

server.listen(4040);
console.log("Server successfully run");