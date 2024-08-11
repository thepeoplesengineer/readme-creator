// TODO: Include packages needed for this application
import fs from 'fs';
import inquirer from 'inquirer';
import generateMarkdown from './utils/generateMarkdown.js';

// TODO: Create an array of questions for user input
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
      type: 'input',
      name: 'license',
      message: 'Enter the project license:',
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
      message: 'Enter your GitHub username for questions:',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter your email address for questions:',
    },
  ];


// TODO: Create a function to write README file
function writeToFile(questions) {
    inquirer.prompt(questions).then((data) => {
      const readmeContent = generateMarkdown(data);
  
      // Write the README file
      fs.writeFile('README.md', readmeContent, (err) => {
        if (err) {
          console.error('Error writing README.md:', err);
        } else {
          console.log('README.md generated successfully!');
        }
      });
    });
  }
// TODO: Create a function to initialize app
function init(questions) {
    writeToFile(questions);
}

// Function call to initialize app
init(questions);
