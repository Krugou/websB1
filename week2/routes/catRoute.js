'use strict';

const express = require('express');
const router = express.Router();
const {cat_list_get} = require('../controllers/catController');
router.get('/', cat_list_get);
router.post('/', (req, res) => {
  res.send('From this endpoint you can add cats.');
});
router.put('/', (req, res) => {
  res.send('From this endpoint you can edit cats.');
});
router.delete('/', (req, res) => {
  res.send('From this endpoint you can remove cats.');
});
router.get('/:id', (req, res) => {
  res.send('you requested a cat whose id is ' + req.params.id);
});


module.exports = router;