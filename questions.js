const setQ = (role,check) => {
    return [
    {
        type: 'input',
        name: 'name',
        message: `What is your ${role}'s name?`,
        validate: input=>{
            return input !== '' || "Name cannot be empty.";
        },
        default: "Neo"
    },
    {
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
        default: "5"
    },
    {
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
        default: "thomasanderson@matrix.com",
    },
]
}
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
const manager = [
    {
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
        default: "420",   
    },
]
const engineer = [
    {
        type: 'input',
        name: 'github',
        message: `What is your engineer's GitHub username?`,
        validate: input=>{
            return input !== '' || "Github username cannot be empty.";
        },
        default: "morpheus420",   
    },
]
const intern = [
    {
        type: 'input',
        name: 'school',
        message: `What is your intern's school?`,
        validate: input=>{
            return input !== '' || "School cannot be empty.";
        },
        default: "hardknocks",   
    },
]
module.exports = {manager,role,engineer,intern,setQ};