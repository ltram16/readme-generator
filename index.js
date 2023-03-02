// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What do you want your README file to be named?',
        name: 'fileName',
    },
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
        type: 'list',
        message: 'What license do you use for this project?',
        name: 'license',
        choices: [
            {name:'MIT', value:'[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'},
            {name:'Apache 2.0', value:'[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'},
            {name:'ISC', value:'[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)'},
            {name:'IBM', value:'[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)'},
            {name:'None', value: false},
        ]
    },
    {
        type: 'input',
        message: 'State the contribution guidelines.',
        name: 'contributions',
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
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(response => {
        const md = generateMarkdown(response)
        writeToFile(`${response.fileName}.md`, md)
    })
}

// Function call to initialize app
init();
