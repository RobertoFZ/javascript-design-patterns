import { DatabaseEngineer } from "../shared/entities/DatabaseEngineer";
import { EmployeeRoles } from "../shared/entities/Employee";
import { SoftwareArchitect } from "../shared/entities/SoftwareArchitect";
import { SoftwareEngineer } from "../shared/entities/SoftwareEngineer";

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
