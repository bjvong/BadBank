require("dotenv").config();
const mongoose = require("mongoose");
const request = require("supertest");
const UserService = require("./src/user");


beforeEach(async () => {
  await mongoose.connect(process.env.MONGO_URI);
});


afterAll(async () => {
  await mongoose.connection.close();
});

describe("GET /account/all", () => {
  it("should return all users", async () => {
  const res = await UserService.getUsers();
  expect(res.body.length).toBeGreaterThan(0);
    });
  });

// it('should insert a doc into collection', async() =>{
//     someUserId = Math.floor(Math.random() * 1000000);
//     var users = db.collection('users');
//     const mockUser = {_id: someUserId, name: 'John'};
//     await users.insertOne(mockUser);
//     const insertedUser = await users.findOne({_id: someUserId});
//     expect(insertedUser).toEqual(mockUser);
//     });

// it('should delete the doc it just inserted', async() =>{
//     var users = db.collection('users');
//     const deleteUser = {_id: someUserId, name: 'John'};
//     await users.findOneAndRemove(deleteUser);
//     const deletedUser = await users.findOne({_id: someUserId});
//     expect(!deletedUser);


// });

// });

