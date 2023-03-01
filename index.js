// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'What is the description of your project?',
        name: 'description',
    },
    {
        type: 'input',
        message: 'List the table of contents.',
        name: 'tableofcontents',
    },
    {
        type: 'input',
        message: 'State the installation instructions.',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'State the usage information.',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'What license do you use for this project?',
        name: 'license',
    },
    {
        type: 'input',
        message: 'State the contribution guidelines.',
        name: 'contributing',
    },
    {
        type: 'input',
        message: 'State the test instructions.',
        name: 'tests',
    },
    {
        type: 'input',
        message: 'What is the link to your GitHub profile?',
        name: 'github',
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
