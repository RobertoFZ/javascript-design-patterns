import { Employee, EmployeeRoles } from "./Employee";

export class SoftwareEngineer extends Employee {
	constructor() {
		super(EmployeeRoles.SoftwareEngineer);
	}
}
