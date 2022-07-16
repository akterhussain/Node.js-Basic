var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://akterhussain:YJtHJeTei5qfQP0T@cluster0.nud2y.mongodb.net/?retryWrites=true&w=majority";

MongoClient.connect(url, function(error, myMongoClient){
    if(error){
        console.log('Connection falid');
    } else{
        console.log('connection successfull');
        deleteData(myMongoClient);
    }
});

function deleteData(myMongoClient){
    var myDatabase = myMongoClient.db('demo');
    var myCollection = myDatabase.collection('list');
    var delData = {Name:'Moni Akter'};
    myCollection.deleteOne(delData, function(error){
        if(error){
            console.log('Data delete falid');
        } else{
            console.log('Data delete successfull');
        }
    });
}