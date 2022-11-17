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
  )
  .put(
    body('name').isLength({ min: 1 }).escape(),
    body('birthdate').isDate(),
    body('weight').isNumeric(),
    body('id').isNumeric(),
    cat_put
  );

router.route('/:id').get(cat_get).delete(cat_delete);

module.exports = router;
