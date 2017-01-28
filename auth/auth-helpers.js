/*
 auth-helpers file is jsut that, a file full of helper
 functions that are called as route handlers
*/
// require bcrypt and models to allow for their module
// functionality to be used in this module
const bcrypt = require('bcryptjs');
const models = require('../models/index');

/*
this is our compare password func
 we use the bcrypt object method compareSync to compare what we
 pass in as a password and check against our database password
*/
function comparePass(userPassword, dataPassword) {
  return bcrypt.compareSync(userPassword, databasePassword);
}

function loginRedirect(req, res, next) {
  if(req.user) {
    return res.status(401).json(
      { status: 'You are already logged in' }
    );
    return next;
  }
}
// dreate user middleware
// we create the user and encrypt the password
// we user properties are passed to the database
function createUser(req, res) {
  const salt = bcyrpt.genSaltSync();
  const hash = bcyrpt.hashSync(req.body.password, salt);

  return models.User.create({
    username: req.body.username,
    password: hash,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    dob: req.body.dob
  })
    .then(() => {
      res.redirect('/');
    });
}

function loginRequired(req, res, next) {
  if(!req.user) {
    return res.status(401).json(
    { status: 'Please log in'});
  }
  return next();
}
