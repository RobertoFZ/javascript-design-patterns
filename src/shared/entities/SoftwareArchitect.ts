import { Employee, EmployeeRoles } from "./Employee";

export class SoftwareArchitect extends Employee {
	constructor() {
		super(EmployeeRoles.SoftwareArchitect);
	}
}
