// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { 
  if (license === 'MIT License') {
    return 'https://img.shields.io/badge/License-MIT-yellow.svg';
  } else if (license === 'Apache License 2.0') {
    return 'https://img.shields.io/badge/License-Apache%202.0-blue.svg';
  } else if (license === 'GNU General Public License v3.0 (GPL-3.0)') {
    return 'https://img.shields.io/badge/License-GPL--3.0-blue.svg';
  } else if (license === 'BSD 3-Clause License') {
    return 'https://img.shields.io/badge/License-BSD%203--Clause-blue.svg';
  } else if (license === 'GNU Lesser General Public License v3.0 (LGPL-3.0)') {
    return 'https://img.shields.io/badge/License-LGPL--3.0-blue.svg';
  } else if (license === 'Creative Commons Zero (CC0)') {
    return 'https://img.shields.io/badge/License-CC0-blue.svg';
  } else if (license === 'Mozilla Public License 2.0 (MPL-2.0)') {
    return 'https://img.shields.io/badge/License-MPL--2.0-brightgreen.svg';
  } else if (license === 'Eclipse Public License 2.0 (EPL-2.0)') {
    return 'https://img.shields.io/badge/License-EPL--2.0-blue.svg';
  } else if (license === 'Unlicense') {
    return 'https://img.shields.io/badge/license-Unlicense-blue.svg';
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'MIT License') {
    return 'https://choosealicense.com/licenses/mit/';
  } else if (license === 'Apache License 2.0') {
    return 'https://www.apache.org/licenses/LICENSE-2.0';
  } else if (license === 'GNU General Public License v3.0 (GPL-3.0)') {
    return 'https://www.gnu.org/licenses/gpl-3.0.en.html';
  } else if (license === 'BSD 3-Clause License') {
    return 'https://opensource.org/licenses/BSD-3-Clause';
  } else if (license === 'GNU Lesser General Public License v3.0 (LGPL-3.0)') {
    return 'https://www.gnu.org/licenses/lgpl-3.0.en.html';
  } else if (license === 'Creative Commons Zero (CC0)') {
    return 'https://creativecommons.org/publicdomain/zero/1.0/';
  } else if (license === 'Mozilla Public License 2.0 (MPL-2.0)') {
    return 'https://www.mozilla.org/en-US/MPL/2.0/';
  } else if (license === 'Eclipse Public License 2.0 (EPL-2.0)') {
    return 'https://www.eclipse.org/legal/epl-2.0/';
  } else if (license === 'Unlicense') {
    return 'https://unlicense.org/';
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

export default generateMarkdown;
