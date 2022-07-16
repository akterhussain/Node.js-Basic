var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://akterhussain:YJtHJeTei5qfQP0T@cluster0.nud2y.mongodb.net/?retryWrites=true&w=majority";

MongoClient.connect(url, function(error){
    if(error){
        console.log('Connection falid');
    } else{
        console.log('connection successfull');
    }
});