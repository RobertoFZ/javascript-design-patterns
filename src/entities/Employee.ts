export enum EmployeeRoles {
	DatabaseEngineer = "DatabaseEngineer",
	SoftwareArchitect = "SoftwareArchitect",
	SoftwareEngineer = "SoftwareEngineer",
}

export class Employee {
	private role: EmployeeRoles;

	constructor(role: EmployeeRoles) {
		this.role = role;
	}

	showRole() {
		console.log(`I'm ${this.role} employee`);
	}
}
