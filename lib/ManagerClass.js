// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.

const Employee = require('./EmployeeClass');

class Manager extends Employee {
	constructor(id, name, email, officeNumber) {
		super(id, name, email);
		this.officeNumber = officeNumber;
	}

	getRole() {
		return 'Manager';
	}

	getOfficeNumber() {
		return this.officeNumber;
	}
}

module.exports = Manager;