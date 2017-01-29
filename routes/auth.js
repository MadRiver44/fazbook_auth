const express = require('express');
const router = express.Router();

const authHelpers = require('../auth/auth-helpers');
const passport = require('../auth/local');

// on this route '/register' callback is authHelpers module method loginRedirect
router.get('/register', authHelpers.loginRedirect, (req, res) => {
  res.render('auth/register');
});

// when user posts,

router.post('/register', (req, res, next) => {
  return authHelpers.createUser(req, res)
    .then((response) => {
      console.log('registration successful');
    })
      .catch((err) =>{
        res.status(500).json(
          {status: 'error'}
          );
      });
});

// route to login
router.get('/login', authHelpers.loginRedirect, (req, res) => {
  res.render('auth/login'); // the response is render this view if resolved
});

router.post('/login', passport.authenticate('local', {
  successRedirect: '/user',
  failureRedirect: '/auth/login',
  failureFlash: true
  })
);

router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

module.exports = router;
