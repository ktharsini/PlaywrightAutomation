
# TECH Challenge: BGP(Enhanced Skills Passport)
## Overview:

 This automation project utilizes Playwright and JavaScript, leveraging playwright-testrunner for test execution. The primary objective is to automate various user interactions on a web application. Key functionalities include: Page Navigation, Data Input, File Uploads and rowser Management.
## Installation

Prerequisites

- For installing Playwright, you need to have Node.js and npm installed on your system.

        ` 1. You can check the Node.js version using the following command: node -v`
        ` 2. You can check the npm version using the following command: npm -v`

- Installing Playwright    

  ` 1. npm init playwright@latest `

Run the install command and select the following to get started:
* Choose between TypeScript or JavaScript (default is TypeScript)
* Name of your Tests folder (default is tests or e2e if you already have a tests folder in your project)
* Add a GitHub Actions workflow to easily run tests on CI
* Install Playwright browsers (default is true)




## Future Enhancements:

* Implementation of Page Objects

* Integration with Continuous Integration (CI) Pipelines

* Expansion of Test Coverage

* Enhanced Reporting

* Parameterization of Test Data
## Running Tests

To run tests, run the following command

```bash
  npx playwright test tests/BGP_SkillsPassport.spec
```


## Reports & Logs

Playwright HTML report will be present inside

```bash
  /playwright-report/index.html
```
