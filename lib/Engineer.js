// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
// Creates an engineer subclass using the employee class
const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, github){
        // Validation is taken care at the questionnaire making sure the parameters cannot be null
        super(name,id,email);
        this.github = github;
    }
    // Functions to return the fields and role
    getGithub(){
        return this.github;
    }
    getRole(){
        return "Engineer";
    }
}

module.exports = Engineer;