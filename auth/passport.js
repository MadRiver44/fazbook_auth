/*
  this file contains two functions to Serialize and Deserialize information
  Serialization takes user info and transforms it into something (a new format) that the
  computer can store in session memory. Deserialization is the reverse, take a session
  format and convert it back into a json object that we can use.
*/

const passport = require('passport');
//1. '.' go out of this file 2'.' go out of this folder 3. go into folder db 4. go into models 5. go into idex.js
const models = require('../db/models/index');


// what is done(null, user.id)
module.exports = () => {
  passport.serializeUser((user, done) => {
    done(null, user.id)
  });
// what is done(null, user)
  passport.deserializeUser((id, done) => {
    models.User.findById(id)
      .then((user) => {
        done(null, user);
      })
      .catch((err) => {
        done(err, null);
      });
  });
};
