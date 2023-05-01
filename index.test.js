const { MongoClient } = require("mongodb");
const uri = 'mongodb://127.0.0.1:27017';

describe("insert", () => {
let connection;
let db;

beforeAll(async () => {
    connection = await MongoClient.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    db = connection.db('myProject');
  });

  afterAll(async () => {
    await connection.close();
  });

it('should insert a doc into collection', async() =>{
    const someUserId = Math.floor(Math.random() * 1000000);
    var users = db.collection('users');
    const mockUser = {_id: someUserId, name: 'John'};
    await users.insertOne(mockUser);
    const insertedUser = await users.findOne({_id: someUserId});
    expect(insertedUser).toEqual(mockUser);
    });

});

