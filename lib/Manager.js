const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, id, email, mangerOffice) {
    super(name, id, email);
    this.mangerOffice = mangerOffice;
  }
  getManagerOffice() {
    return this.mangerOffice;
  }
  getRole() {
    return "Manager";
  }

}

module.exports = Manager;