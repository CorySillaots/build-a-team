// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateProfile  = require('./utils/generateProfile')
console.log(generateProfile)
const fs = require('fs'); 


const employee = [
{  
    type: 'input',
    name: 'name',
    message: "What is the team member's name?"
},
{
    type: 'input',
    name: 'id',
    message: "What is the team member's ID?"
},
{
    type: 'input',
    name: 'email',
    message: "What is the team member's email address?"
},
]; 


const manager = [
    {  
        type: 'input',
        name: 'name',
        message: "What is the team member's name?"
    },
    {
        type: 'input',
        name: 'id',
        message: "What is the team member's ID?"
    },
    {
        type: 'input',
        name: 'email',
        message: "What is the team member's email address?"
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: "What is your office number?"
    },
    ];  


const engineer = [
    {  
        type: 'input',
        name: 'name',
        message: "What is the team member's name?"
    },
    {
        type: 'input',
        name: 'id',
        message: "What is the team member's ID?"
    },
    {
        type: 'input',
        name: 'email',
        message: "What is the team member's email address?"
    },
    ];  


const intern = [
    {  
        type: 'input',
        name: 'name',
        message: "What is the team member's name?"
    },
    {
        type: 'input',
        name: 'id',
        message: "What is the team member's ID?"
    },
    {
        type: 'input',
        name: 'email',
        message: "What is the team member's email address?"
    },
    {
        type: 'input',
        name: 'school',
        message: "What school/institute do you attend?"
    },
    ];  

// TODO: Create an array of questions for user input


// TODO: Create a function to write html file
function writeToFile(filename, data){
fs.writeFile(filename, data, function(err, result){
    if (err) console.log('error', err);
})
}

// TODO: Create a function to initialize app
function init() {

console.log("\n Welcome to the Team Profile generator! \n")

inquirer
    .prompt(questions)
    .then((answers) => {
        const profile= generateProfile.generateProfile(answers)
        writeToFile("./index.html", markdown)
    })
    .catch((error) => {
    if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
    } else {
        // Something else went wrong
        console.log("Sorry something went wrong :( ")
        console.log(error)
    }
    });

}

// Function call to initialize app
init();
