import { Employee, EmployeeRoles } from "../shared/entities/Employee";
import { EmployeeManager } from "./EmployeeManager";

const employeeManager = EmployeeManager.getInstance();
const firstEmployee = new Employee(EmployeeRoles.SoftwareEngineer, "Luisito");
const secondEmployee = new Employee(EmployeeRoles.SoftwareEngineer, "Cuit");
employeeManager.addEmployee(firstEmployee);
employeeManager.addEmployee(secondEmployee);
console.info(employeeManager.getEmployees());

const anotherEmployeeManagerInstance = EmployeeManager.getInstance();
const thirdEmployee = new Employee(EmployeeRoles.SoftwareArchitect, "Edelcito");
anotherEmployeeManagerInstance.addEmployee(thirdEmployee);
console.info(anotherEmployeeManagerInstance.getEmployees());
