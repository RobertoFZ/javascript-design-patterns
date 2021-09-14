import { Employee, EmployeeRoles } from "./Employee";

export class DatabaseEngineer extends Employee {
	constructor() {
		super(EmployeeRoles.SoftwareEngineer);
	}
}
