import { Employee } from "../shared/entities/Employee";

export class AdminEmployeeDecorator {
	private employee: Employee;

	constructor(employee: Employee) {
		this.employee = employee;
	}

	showRole() {
		return this.employee.showRole();
	}

	alertSubordinates() {
		console.log("An Admin employee sent an alert");
	}
}
