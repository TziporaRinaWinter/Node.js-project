class VolunteeringError extends Error {
    constructor(msg) {
        super(msg);
        this.status = 400;
    }

    getStatus() {
        return this.status;
    }

    setStatus(value) {
        this.status = value;
    }
}
module.exports = VolunteeringError;