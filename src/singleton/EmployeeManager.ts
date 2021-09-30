import { Employee } from "../shared/entities/Employee";

export class EmployeeManager {
	private employees: Employee[] = [];
	private static instance: EmployeeManager | null;
	private constructor() {}

	static getInstance() {
		if (!this.instance) {
			this.instance = new EmployeeManager();
		}
		return this.instance;
	}

	addEmployee(employee: Employee) {
		this.employees.push(employee);
	}

	removeEmployee(employee: Employee) {
		this.employees = this.employees.filter(
			(_) => _.getName() === employee.getName()
		);
	}

	getEmployees() {
		return this.employees;
	}
}
