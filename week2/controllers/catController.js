'use strict';
const {cats} = require('../models/catModel');
const cat_list_get = (req, res) => {
    res.json(cats);
};

module.exports = {cat_list_get};
