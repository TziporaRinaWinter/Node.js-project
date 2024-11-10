const Controller = require('./controller.js');
const VolunteerService = require('../bl-services/volunteer.service.js');

class VolunteerController extends Controller {
    constructor() {
       super(VolunteerService)
    }
}

module.exports = new VolunteerController();