import fs from 'fs';
import inquirer from 'inquirer';
import generateMarkdown from './utils/generateMarkdown.js';


const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Provide a description of your project:',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Describe the installation process:',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Provide instructions on how to use:',
  },
  {
    type: 'list',
    name: 'license',
    message: 'Select the project license:',
    choices: ['MIT', 'Apache 2.0', 'GPL', 'BSD', 'None'],
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'Provide guidelines for contributing:',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Provide instructions for running tests:',
  },
  {
    type: 'input',
    name: 'questions',
    message: 'Enter your GitHub username:',
  },
  {
    type: 'input',
    name: 'email',
    message: 'Enter your email address for questions:',
  },
];

// Function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.error('Error writing README.md:', err);
    } else {
      console.log('README.md generated successfully!');
    }
  });
}

// Function to initialize the app
function init() {
  inquirer.prompt(questions).then((data) => {
    const readmeContent = generateMarkdown(data);
    writeToFile('README.md', readmeContent);
  });
}

// Function call to initialize app
init();
