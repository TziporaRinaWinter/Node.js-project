const Repository = require('./repository.js');
const HelpRequest = require('../dal-models/helpRequest.model.js');

class HelpRequestRepo extends Repository {
    constructor() {
        super(HelpRequest);
    }
}

module.exports = new HelpRequestRepo();