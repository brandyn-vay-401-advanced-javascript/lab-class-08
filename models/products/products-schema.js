'use strict';

const mongoose = require('mongoose');

const products = mongoose.Schema({
  name:{type: String, require:true},
  description:{type: String, require: true}
});

module.exports = mongoose.model('products ', products);