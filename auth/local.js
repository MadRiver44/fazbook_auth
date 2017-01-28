/*
  local strategy refers to the authentication scheme we'll
  employ.
*/

const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const init = require('./passport');
const models = require('../db/models/index');
const authHelpers = require('../auth/auth-helpers') // ? right path??

const options = {}

init();

// passport middleware
passport.use(new LocalStrategy(options, (username, password, done) => {
  // check to see if username exists, using sequelize method findAll
  // go into the column username and find the name passed
  models.User.findAll({
    where: {
      username
    }
  })
    // check if user actually exists
    .then((user) => {
      if (user[0] === undefined) {
        return done(null, false);
      }
    // then if that user exists, check the password passed in under that user
    // to the one that is in the database
      if(!authHelpers.comparePass(password, user[0].dataValues.password)) {
        return done(null, false);
      }else {
        return done(null, user[0].dataValues);
      }
    })
      .catch((err) => {
        return done(err);
      });
}))

module.exports = passport;
