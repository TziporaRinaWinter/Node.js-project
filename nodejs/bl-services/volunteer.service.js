const Service = require('./service.js');
const repo = require('../dal-repositories/volunteer.repo.js')

class VolunteerService extends Service {
    constructor() {
        super(repo);
    }
}

module.exports = new VolunteerService();