const passport = require('passport');
const UserService = require('../user')
const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use(new GoogleStrategy(
    {
        clientID: process.env.GOOGLE_OAUTH_TEST_APP_CLIENT_ID,
        clientSecret: process.env.GOOGLE_OAUTH_TEST_APP_CLIENT_SECRET,
        callbackURL: process.env.GOOGLE_OAUTH_CALLBACK_URL,
        scope: ['email']
    },
async (accessToken, refreshToken, profile, done) => {
  const id = profile.id;
  const email = profile.emails[0].value;
  const firstName = profile.name.givenName;
  const lastName = profile.name.familyName;
  const profilePhoto = profile.photos[0].value;
  const accessToken = profile.accessToken.value;
  const refreshToken = profile.refreshToken.value;
  const source = "google";

  const currentUser = await UserService.getUserByEmail({
    email,
  });

  if (!currentUser) {
    const newUser = await UserService.addGoogleUser({
      id,
      email,
      firstName,
      lastName,
      profilePhoto,
      accessToken,
      refreshToken,
      source
    });
    return done(null, newUser);
  }

  if (currentUser.source != "google") {
    //return error
    return done(null, false, {
      message: `You have previously signed up with a different signin method`,
    });
  }

  currentUser.lastVisited = new Date();
  return done(null, currentUser);
}
)
);