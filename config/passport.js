const GoogleStrategy = require('passport-google-oauth20').Strategy

const userRepository = require('../repositories/userRepository')

module.exports = function (passport) {
  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: '/auth/google/callback',
      },
      async (accessToken, refreshToken, profile, done) => {
        const email = profile && profile._json && profile._json.email ? profile._json.email : null
        const newUser = {
          email,
          googleId: profile.id,
          name: profile.displayName,
        }
        try {
          const { user, created } = await userRepository.findOrCreateGoogleUser(profile.id, newUser)
          done(null, user)
        } catch (err) {
          console.error(err, null)
        }
      }
    )
  )

  passport.serializeUser((user, done) => {
    done(null, user)
  })

  passport.deserializeUser(async (u, done) => {
    const user = await userRepository.getUserByGoogleId(u.googleId)
    done(null, user)
  })
}