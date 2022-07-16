var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://akterhussain:YJtHJeTei5qfQP0T@cluster0.nud2y.mongodb.net/?retryWrites=true&w=majority";

MongoClient.connect(url, function(error, myMongoClient){
    if(error){
        console.log('Connection falid');
    } else{
        console.log('connection successfull');
        insertData(myMongoClient);
    }
});

function insertData(myMongoClient){
    var myDatabase = myMongoClient.db('demo');
    var myCollection = myDatabase.collection('list');
    var myData = {Name:'Akter Hussain', Address:'Dhampti', Mobile:'01783943225', Role:'Admin'};
    myCollection.insertOne(myData, function(error){
        if(error){
            console.log('Data insert falid');
        } else{
            console.log('Data insert successfull');
        }
    });
}