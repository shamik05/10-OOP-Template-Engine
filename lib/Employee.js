// TODO: Write code to define and export the Employee class
// Creates an employee class using name, id and email
class Employee {
    constructor(name, id, email){
    
    // Validation is taken care at the questionnaire making sure the parameters cannot be null
    this.name = name;
    this.id = id;
    this.email = email;
    }
    
    // Functions to return the fields and role
    getName(){
        return this.name;
    }
    getId(){
        return this.id;
    }
    getEmail(){
        return this.email;
    }
    getRole(){
        return "Employee";
    }
}

module.exports = Employee;