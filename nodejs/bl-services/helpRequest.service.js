const Service = require('./service.js');
const repo = require('../dal-repositories/helpRequest.repo.js')

class HelpRequestService extends Service {
    constructor() {
        super(repo);
    }
}

module.exports = new HelpRequestService();