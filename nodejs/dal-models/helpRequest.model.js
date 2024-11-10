const mongoose = require('mongoose');

const helpRequestSchema = new mongoose.Schema({
    _id: { type: Number, required: true },
    location: { type: String, required: true },
    description: { type: String, required: true },
    contactPhone: { type: String, required: true },
    status: { type: String,enum: ['waiting', 'inProgress', 'completed'], required: true },
    numberOfPeopleStuck: { type: Number, required: true },
    priorityCode: { type: String, required: true },
    volunteerCode: { type: Number, required: true }
});

const HelpRequest = mongoose.model('HelpRequest', helpRequestSchema);

module.exports = HelpRequest;