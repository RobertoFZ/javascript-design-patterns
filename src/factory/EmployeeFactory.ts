import { DatabaseEngineer } from "../entities/DatabaseEngineer";
import { EmployeeRoles } from "../entities/Employee";
import { SoftwareArchitect } from "../entities/SoftwareArchitect";
import { SoftwareEngineer } from "../entities/SoftwareEngineer";

class EmployeeFactory {
	create(role: EmployeeRoles) {
		switch (role) {
			case EmployeeRoles.DatabaseEngineer:
				return new DatabaseEngineer();

			case EmployeeRoles.SoftwareArchitect:
				return new SoftwareArchitect();

			case EmployeeRoles.SoftwareEngineer:
				return new SoftwareEngineer();

			default: {
				console.log("Unknown Employee role...");
			}
		}
	}
}

export default new EmployeeFactory();
