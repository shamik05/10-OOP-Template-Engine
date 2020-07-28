// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
// Creates an intern subclass using the employee class
const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, id, email, school){

        // Validation is taken care at the questionnaire making sure the parameters cannot be null
        super(name,id,email);
        this.school = school;
    }

    // Functions to return the fields and role
    getSchool(){
        return this.school;
    }
    getRole(){
        return "Intern";
    }
}

module.exports = Intern;