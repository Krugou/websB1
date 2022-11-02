'use strict';

const express = require('express');
const multer = require('multer');
const upload = multer({ dest: './uploads/' });
const router = express.Router();
const {cat_list_get, cat_get,cat_post} = require('../controllers/catController');
router.get('/', cat_list_get);
router.post('/', upload.single('cat'), cat_post);
router.put('/', (req, res) => {
  res.send('From this endpoint you can edit cats.');
});
router.delete('/', (req, res) => {
  res.send('From this endpoint you can remove cats.');
});
router.get('/:id', cat_get);


module.exports = router;