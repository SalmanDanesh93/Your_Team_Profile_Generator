const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, offNum) {
        super(name, id, email);
        this.offnum = offNum;
    }

    getRole() {
        return "Manager!";
    }

    getOffNum() {
        return this.offnum;
    }

}

module.exports = Manager;