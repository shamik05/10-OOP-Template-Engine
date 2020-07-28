// "use strict";
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const {manager,engineer,intern,setQ, role} = require("./questions");
const employees = [];

const members = async ()=>{
    const {nextType} = await inquirer.prompt(role);
    console.log(nextType);
    if(nextType === "Engineer"){
        let employee = new Engineer(...Object.values
            (await inquirer.prompt(
                setQ("engineer",employees).concat(engineer)
                )
            )
        );
        employees.push(employee);
        console.log(employees);

    }else if(nextType === "Intern"){
        let employee1 = new Intern(...Object.values
            (await inquirer.prompt(
                setQ("Intern",employees).concat(intern)
                )
            )
        );
        employees.push(employee1);
        console.log(employees);

    }else{
        return;
    }
    await members(); 
}

const init = async () => {
    console.log("Please build your team");
    try{
        let employee = new Manager(...Object.values(
            await inquirer.prompt(
                setQ("manager",employees).concat(manager)
                )
            )
        );
        employees.push(employee); 
        // const {nextType} = await inquirer.prompt(role);
        // console.log(nextType);
        await members();
    }
    catch(err){
        throw err;
    }
    fs.writeFile(outputPath,render(employees),function(err){
        if(err){
            throw err;
        }
    }
    )
}

init();
// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```