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
