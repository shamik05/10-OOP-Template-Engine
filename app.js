// "use strict";
// Import classes and modules
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

// Import questions for inquirer
const {manager,engineer,intern,setQ, role} = require("./questions");

// An array to hold all created employees
const employees = [];

// Function to generate team members
const members = async ()=>{
    
    // Import question asking for next member
    const {nextType} = await inquirer.prompt(role);
    console.log("\u001b[2m───────────────────────────────────────────────\u001b[22m");
    
    // If engineer is chosen
    if(nextType === "Engineer"){
        // Create engineer class 
        let employee = new Engineer(...Object.values
            // Ask general employee questions with engineer specific question
            (await inquirer.prompt(
                setQ("engineer",employees).concat(engineer)
                )
            )
        );
        console.log("\u001b[2m───────────────────────────────────────────────\u001b[22m");
        // Push the newly created employee in employees array
        employees.push(employee);
        // console.log(employees);
    
    // If intern is chosen
    }else if(nextType === "Intern"){
        // Create intern class
        let employee = new Intern(...Object.values
            // Ask general employee questions with intern specific question
            (await inquirer.prompt(
                setQ("Intern",employees).concat(intern)
                )
            )
        );
        console.log("\u001b[2m───────────────────────────────────────────────\u001b[22m");
        // Push the newly created employee in employees array
        employees.push(employee);
        // console.log(employees);

    }else{
        // If none are chosen, break from this function
        return;
    }
    // Rerun the function to choose team members
    await members(); 
}

// Main function to make a manager
const init = async () => {
    console.log("Please build your team");
    try{
        // Create manager class 
        let employee = new Manager(...Object.values(
            // Ask general employee questions with manager specific question
            await inquirer.prompt(
                setQ("manager",employees).concat(manager)
                )
            )
        );
        console.log("\u001b[2m───────────────────────────────────────────────\u001b[22m");
        // Push the newly created employee in employees array
        employees.push(employee); 
        
        // Call function to add team members
        await members();
    }
    catch(err){
        throw err;
    }
    console.log("Generating your Team.")
    // Create a html page using employees and template
    fs.writeFile(outputPath,render(employees),function(err){
        if(err){
            throw err;
        }
    }
    )
    console.log("File team.HTML generated in the ./output folder")
}

// Run main program
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