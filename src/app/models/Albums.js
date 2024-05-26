const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Albums = new Schema({
    tile: {type: String, maxLenght: 255},
    description: {type: String, maxLenght: 600},
    img:{type: String, maxLenght: 255},
    createdAt: {type: Date, default: Date.now},
    updatedAt: {type: Date, default: Date.now},
  });

module.exports = mongoose.model('Albums', Albums);