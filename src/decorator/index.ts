import { SoftwareArchitect } from "../shared/entities/SoftwareArchitect";
import { AdminEmployeeDecorator } from "./AdminEmployeeDecorator";

const softwareArchitectEmployee = new SoftwareArchitect();
const adminSoftwareArchitect = new AdminEmployeeDecorator(
	softwareArchitectEmployee
);
adminSoftwareArchitect.alertSubordinates();
