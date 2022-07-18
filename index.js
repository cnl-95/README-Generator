
const inquirer = require('inquirer');

const generateMarkdown = require('./utils/generateMarkdown');

const fs = require('fs');

const promptUser = () => {
   
    return inquirer.prompt ([{ 
        
        type: 'input',
        
        name: 'title',
        
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please enter a description of your project'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please enter the installation instructions for your project'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please enter the usage instructions for your project'
    },
    {
        
        type: 'list',
        
        name: 'license',
        
        message: 'Please select a license for your project',
       
        choices: ['MIT', 'Apache', 'GPL', 'BSD', 'None']
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Please enter the instructions for contributing to your project'
    },
    {
        type: 'input',
        name: 'username',
        message: 'Please enter your GitHub username'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your email address'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Please enter the instructions for testing your project or simply state not applicable'
    }
])}


function writeToFile(fileName, data) {
   
    fs.writeFile('./dist/README.md', data, (err) => {
        
        if (err) throw err;
        
        console.log('Successfully generated/wrote over README.md in the dist folder');
    });
};



function init() {
    
    promptUser()
    
    .then(value => {
        
        const data = generateMarkdown(value);
       
        writeToFile('README.md', data);
  })
};

// Function call to initialize app
init();