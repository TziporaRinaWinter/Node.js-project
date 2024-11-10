const Repository = require('./repository.js');
const Volunteer = require('../dal-models/volunteer.model.js');

class VolunteerRepo extends Repository {
    constructor() {
        super(Volunteer);
    }
}

module.exports = new VolunteerRepo();