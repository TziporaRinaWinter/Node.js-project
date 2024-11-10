const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb+srv://rina:w123@cluster0.ezdkrwp.mongodb.net/nodejs_project');
        console.log('connected to db..');
    } catch (error) {
        console.log(error);
        throw new Error('Error connecting to db. please try later...');
    }
}

module.exports = { connect };
