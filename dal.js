// const { MongoClient } = require("mongodb");
// const uri = 'mongodb+srv://bjvong:secret123@bad-bank-bjv.iyiafcn.mongodb.net/?retryWrites=true&w=majority';
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

require("./src/config/google");
require("./src/config/local");
require("./src/config/passport");


const port = process.env.PORT || 8050;
const db = process.env.MONGO_URI;
mongoose.connect(db);

async function createUser( name, email, password){
    const hashedPassword = await bcrypt.hash(password, 10)
    try {
        await UserService.addLocalUser({
          id: uuid.v4(),
          email,
          firstName: name,
          lastName: name,
          password: hashedPassword
        })
      } catch (e) {
        req.flash("error", "Error creating a new account. Try a different login method.");
        res.redirect("/CreateAccount")
      }
    
      res.redirect("/")
    }



// async function all(){
//     const dbName = 'myProject';
//     const collection = 'users';
//     const client = new MongoClient(uri);
//     try{
//     await client.connect();
//     const databasesList = client.db(dbName).collection(collection).find();
//     const results = await databasesList.toArray();
//     return(results);
//     }catch (e) {
//         console.error(e);
//     }
    
// };


// module.exports = {createUser,all};

module.exports = {createUser};
 
