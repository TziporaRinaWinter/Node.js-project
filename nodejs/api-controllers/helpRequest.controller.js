const Controller = require('./controller.js');
const helpRequestService = require('../bl-services/helpRequest.service.js');

class HelpRequestController extends Controller {
    constructor() {
       super(helpRequestService)
    }
}

module.exports = new HelpRequestController();