'use strict';
const express = require('express');
const multer = require('multer');
const { body } = require('express-validator');
const upload = multer({ dest: 'uploads/' });
const {
  cat_list_get,
  cat_get,
  cat_post,
  cat_put,
  cat_delete,
} = require('../controllers/catController');
const router = express.Router();

router
  .route('/')
  .get(cat_list_get)
  .post(
    upload.single('cat'),
    body('name').isLength({ min: 1 }).escape(),
    body('birthdate').isDate(),
    body('weight').isNumeric(),

    cat_post
  );

router
  .route('/:id') 
  .get(cat_get) // get cat by id
  .delete(cat_delete) // delete cat by id
  .put( // update cat by id
    body('name').isLength({ min: 1 }).escape(),
    body('birthdate').isDate(),
    body('weight').isNumeric(),
    body('id').isNumeric(),
    cat_put
  );

module.exports = router;
