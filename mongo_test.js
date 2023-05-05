const { MongoClient } = require('mongodb');
const uri = 'mongodb+srv://bjvong:secret123@bad-bank-bjv.iyiafcn.mongodb.net/?retryWrites=true&w=majority';

async function main(){
    /**
     * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
     * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
     */
   // Connection URL with the database name

 

    const client = new MongoClient(uri);
 
    try {
        // Connect to the MongoDB cluster
        await client.connect();
        console.log("Connected successfully to server");

		const dbName = 'myProject';
        const db = client.db(dbName);

        var name = 'user' + Math.floor(Math.random()*10000);
        var email = name + 'mit.edu';

        var collection = db.collection('customers');
        var doc = {name, email};
        collection.insertOne(doc, {w:1}, function( err, result) {
            console.log('Document insert');
        });
        // Make the appropriate DB calls
        await  listDatabases(client);
 
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
}

main().catch(console.error);

async function listDatabases(client){
    databasesList = await client.db().admin().listDatabases();
 
    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};
 