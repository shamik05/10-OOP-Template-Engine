// Function that accepts a role and the employees array for validation
// First three questions are universal to all employees
const setQ = (role,check) => {
    return [
    {   
        // Asks for employee name and field cannot be empty
        type: 'input',
        name: 'name',
        message: `What is your ${role}'s name?`,
        validate: input=>{
            return input !== '' || "Name cannot be empty.";
        },
    },
    {   
        // Asks for a unique employee id, a positive number and field cannot be empty
        type: 'input',
        name: 'id',
        message: `What is your ${role}'s id?`,
        validate: input=>{
            if(input<0){
                return "Id has to be a positive number."
            }else if(isNaN(input)){
                return "Id has to be a number."
            }else if(input == ""){
                return "Id cannot be empty."
            }else if(check.find(item=>item.id == input)){
                return `Id already taken. Please choose another.`
            }else{
                return true;
            }
        },
    },
    {   
        // Asks for a unique email address and field cannot be empty
        type: 'input',
        name: 'email',
        message: `What is your ${role}'s email?`,
        validate: input=>{
            if(input == ''){
                return "Email cannot be empty.";
            }else if(check.find(item=>item.email == input)){
                return "Email already taken. Please choose another."
            }else{
                return true;
            }   
        },
    },
]
}
// Asks if you want to add more members or terminate
const role = [
    {
        type: 'list',
        message: 'What type of team member would you like to add?',
        name: "nextType",
        choices: [
        "Engineer",
        "Intern",
        "I don't want to add any more team members.",
    ]},
]

// Manager question only
const manager = [
    {   
        // Asks for the office number and cannot be empty
        type: 'input',
        name: 'officeNumber',
        message: `What is your manager's office number?`,
        validate: input=>{
            if(input == ''){
                return "Office number cannot be empty.";
            }else{
                return true;
            }   
        },
    },
]

// Engineer question only
const engineer = [
    {   
        // Asks for github username and cannot be empty
        type: 'input',
        name: 'github',
        message: `What is your engineer's GitHub username?`,
        validate: input=>{
            return input !== '' || "Github username cannot be empty.";
        },
    },
]

// Intern question only
const intern = [
    {   
        // Asks for attended school and cannot be empty
        type: 'input',
        name: 'school',
        message: `What is your intern's school?`,
        validate: input=>{
            return input !== '' || "School cannot be empty.";
        },  
    },
]

module.exports = {manager,role,engineer,intern,setQ};