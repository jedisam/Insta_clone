const express = require ('express');
const route = express.Router ();
const User = require ('../models/users');
const bcrypt = require ('bcryptjs');

route.get ('/', (req, res) => {
  console.log ('Hey');
  res.json ("Hey There This is signup's backpage!");
});

route.post ('/', (req, res) => {
  console.log (req.body);
  let username = req.body.username;
  let password = req.body.password;

  let newUser = User ({
    username,
    password,
  });
  bcrypt.genSalt (10, (err, salt) => {
    bcrypt.hash (newUser.password, salt, (err, hash) => {
      if (err) {
        console.log (err);
      } else {
        newUser.password = hash;
        newUser.save (err => {
          if (err) {
            console.log (err);
            return;
          } else {
            res.json ('registered from Server!');
          }
        });
      }
    });
  });
});

module.exports = route;
