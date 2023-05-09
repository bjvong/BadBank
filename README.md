# BadBank

Welcome to the Bad Bank!

A React Express MongoDB Node SPA banking application. Users can create an account locally or authenticate using google to deposit or withdraw money with a balance stored in a database.

HOW TO RUN (USER):
https://bad-bank-bjvd.herokuapp.com

HOW TO RUN (DEV):
npm Install dependencies.
add .env variables:
    GOOGLE_OAUTH_CALLBACK_URL="YOURCALLBACKURL"
    GOOGLE_OAUTH_TEST_APP_CLIENT_ID="YOURGOOGLEAUTHCLIENTID"
    GOOGLE_OAUTH_TEST_APP_CLIENT_SECRET="YOURGOOGLEAUTHCLIENTSECRET"
    MONGO_URI="YOURMONGODBCONNECTIONURI"
    PORT=PORTFORLOCALDEV
npm start

API DOCUMENTATION:
/api/allUsers
will show all users just by first name and their current balance.


Screenshot:
https://imgur.com/a/BFAAz04

Tech used:
React.js
Node.js
MongoDB/Mongoose
Express
Passport Auth
Bcrypt
CORS
Heroku


Features:
Google Oauth sign in.
Create accounts and login using database.
Make Deposits and Withdrawals from balance of logged in account.

Future Features:
Conversion from SPA to full React app.
Improvement to user login and registraion validation and the responses to it.
Transaction 


MIT License

Copyright (c) 2023 Beau VonGunten

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.