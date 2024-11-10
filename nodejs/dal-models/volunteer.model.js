const mongoose = require('mongoose');

const volunteerSchema = new mongoose.Schema({
    _id: { type: Number, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    phone: { type: String, required: true },
    specialties: { type: [String], required: true }
});

const Volunteer = mongoose.model('Volunteer', volunteerSchema);

module.exports = Volunteer;