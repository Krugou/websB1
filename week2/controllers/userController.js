'use strict';
const { users, getuser } = require('../models/userModel');
const user_list_get = (req, res) => {
  res.json(users);
};
const user_get = (req, res) => {
  const user = getuser(req.params.id);
  console.log('käyttäjä ', user);
  res.json(user);
};

module.exports = { user_list_get, user_get };
