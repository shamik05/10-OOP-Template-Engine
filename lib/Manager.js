// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
// Creates a manager subclass using the employee class
const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, officeNumber){

        // Validation is taken care at the questionnaire making sure the parameters cannot be null
        super(name,id,email);
        this.officeNumber = officeNumber;
    }

    // Functions to return the fields and role
    getOfficeNumber(){
        return this.officeNumber;
    }
    getRole(){
        return "Manager";
    }
}

module.exports = Manager;