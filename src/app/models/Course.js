const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Course = new Schema({
    name: {type: String, maxLenght: 255, required: true},
    description: {type: String, maxLenght: 600},
    videoId: {type: String, maxLenght: 255, required: true},
    img:{type: String, maxLenght: 255},
 }, {
      timestamps: true,
});

module.exports = mongoose.model('Course', Course);