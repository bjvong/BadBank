const { MongoClient } = require("mongodb");
const uri = 'mongodb://mongodb+srv://bjvong:secret123@bad-bank-bjv.iyiafcn.mongodb.net/?retryWrites=true&w=majority';



async function createUser( name, email, password){
    const client = new MongoClient(uri);
    try{
        await client.connect();
        const dbName = 'myProject';
        const db = client.db(dbName);
        var collection = db.collection('users');
        var doc = {name, email, password, balance: 0};
        collection.insertOne(doc, {w:1}, function(err, result) {
            console.log('Data inserted');
        });
    }catch (e) {
        console.error(e);
    }

}

async function all(){
    const dbName = 'myProject';
    const collection = 'users';
    const client = new MongoClient(uri);
    try{
    await client.connect();
    const databasesList = client.db(dbName).collection(collection).find();
    const results = await databasesList.toArray();
    return(results);
    }catch (e) {
        console.error(e);
    }
    
};


module.exports = {createUser,all};
 
