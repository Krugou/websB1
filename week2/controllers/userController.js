'use strict';
// userController
const { getUser, getAllUsers } = require('../models/userModel');

const user_list_get = async (req, res) => {
  res.json(await getAllUsers());
};


const user_get = async (req, res) => {
  const user = await getUser(req.params.id);
  delete user.password;
  if (user.length > 0) {
    console.log('käyttäjä', user);
    res.json(user.pop());
  } else {
    res.send('errorr');
  }
};

const user_post = async (req, res) => {
  console.log('user post', req.body);
  const data = [req.body.name, req.body.email, req.body.passwd];
  const result = await addUser(data);
  if (result.affectedRows > 0) {
    res.json({
      message: 'user added',
      user_id: result.insertId,
    });
  } else {
    res.send('errorr');
  }
};
module.exports = {
  user_list_get,
  user_get,
  user_post,
};