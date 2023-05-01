const { MongoClient } = require("mongodb");
const uri = 'mongodb://127.0.0.1:27017';

describe("Client", () => {
  beforeAll(async () => {
    const client = new MongoClient(uri);
        await client.connect();
  });

  afterAll(async () => {
    const client = new MongoClient(uri);
    await client.close();
  });

it('should insert a doc into collection', async() =>{
    const client = new MongoClient(uri);
    const dbName = 'myProject';
    const db = client.db(dbName);
    var users = db.collection('users');
    const mockUser = {_id: 'some-user-id3', name: 'John'};
    await users.insertOne(mockUser);
    const insertedUser = await users.findOne({_id: 'some-user-id3'});
    expect(insertedUser).toEqual(mockUser);
    });

});

