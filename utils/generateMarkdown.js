// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  
  if (!license) {
    return '';
  }

  const licenseBadges = {
    'MIT': '![MIT License](https://img.shields.io/badge/License-MIT-yellow.svg)',
    'GPLv3': '![GPLv3 License](https://img.shields.io/badge/License-GPLv3-blue.svg)',
    'Apache 2.0': '![Apache License](https://img.shields.io/badge/License-Apache%202.0-green.svg)',
    'BSD 3-Clause': '![BSD 3-Clause License](https://img.shields.io/badge/License-BSD%203--Clause-orange.svg)',
    'None': '',
  };

  return licenseBadges[license] || '';
}



// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
if (!license) {
  return '';
}

const licenseLinks = {
  'MIT': 'https://opensource.org/licenses/MIT',
  'GPLv3': 'https://www.gnu.org/licenses/gpl-3.0',
  'Apache 2.0': 'https://opensource.org/licenses/Apache-2.0',
  'BSD 3-Clause': 'https://opensource.org/licenses/BSD-3-Clause',
  'None': '',
  
};

return licenseLinks[license] || '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
if (!license) {
  return '';
}

return `
## License
This application is covered under the [${license}](${renderLicenseLink(license)}) license.
`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
return `
# ${data.title}
${renderLicenseBadge(data.license)}

## Description
${data.description}

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

${renderLicenseSection(data.license)}

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
If you have any questions about the project, you can reach me at [${data.email}](mailto:${data.email}). You can also find more of my work at [${data.questions}](https://github.com/${data.questions}).
`;
}

export default generateMarkdown;


