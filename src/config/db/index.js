const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/f8_education_dev', {
            // useNewUrlParser: true,
            // useUnifiedTopoLogy: true
        });
        console.log('Connect Sucessfully!!');
    }catch(error){
        console.log('Connect Fail!!');
    }
}

module.exports = { connect };