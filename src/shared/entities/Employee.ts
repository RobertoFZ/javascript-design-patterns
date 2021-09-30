export enum EmployeeRoles {
	DatabaseEngineer = "DatabaseEngineer",
	SoftwareArchitect = "SoftwareArchitect",
	SoftwareEngineer = "SoftwareEngineer",
}

export class Employee {
	private role: EmployeeRoles;
	private name: string | null;

	constructor(role: EmployeeRoles, name: string | null = null) {
		this.role = role;
		this.name = name;
	}

	showRole() {
		console.log(`I'm ${this.role} employee`);
	}

	getName() {
		return this.name;
	}
}
