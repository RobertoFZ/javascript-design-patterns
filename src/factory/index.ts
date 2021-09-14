import { EmployeeRoles } from "../entities/Employee";
import { SoftwareArchitect } from "../entities/SoftwareArchitect";
import EmployeeFactory from "./EmployeeFactory";

const softwareEngineer = EmployeeFactory.create(EmployeeRoles.SoftwareEngineer);
const softwareArchitect = EmployeeFactory.create(
	EmployeeRoles.SoftwareArchitect
);
const databaseEngineer = EmployeeFactory.create(EmployeeRoles.DatabaseEngineer);

softwareEngineer?.showRole();
softwareArchitect?.showRole();
databaseEngineer?.showRole();