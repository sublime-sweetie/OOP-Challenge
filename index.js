const inquirer= require('inquirer')
const jest= require('jest')
const fs = require("fs");
const generateHTML = require('./generateHTML');

const questions= [
    {
      type: 'input',
      message: "What is your employee's name?",
      name: 'EmployeeNames',
    },
    {
        type: 'checkbox',
        message: "What is this employee's position?",
        choices:['Employee','Manager', 'Intern','Engineer'],
        name: 'role',
      },
    {
      type: 'number',
      message: 'What is their ID number?',
      name: 'idNumber',
    //   maybe assign a random id number w/   this.id = Math.floor(Math.random() * 99) + 1;
    },
    {
        type: 'number',
        message: 'What is their office number?',
        name: 'officeNumber',
    },
    {
      type: 'input',
      message: 'What is their email address?',
      name: 'email',
    },
    {
        type: 'input',
        message: 'What is their github url?',
        name: 'githubLink',
      },
      {
        type: 'confirm',
        message: 'would you like to add another employee?',
        name: 'addMore',
      },
  ]
//   .then((response) =>
//     response.addMore === true
//       ? console.log( )
//       : console.log('here is your new team-')
//   );
  
class Employee {
    constructor(name, id, email) {
      this.id = id;
      this.name = name;
      this.email = email;
    
    console.log(` ${this.name}`);
    console.log(`Their employee ID numer is: ${this.id}`);
    console.log(` Contact email: ${this.email}`);

getName()

getId()

getEmail()

getRole => "Employee"// Returns 'Employee'

}}

class Manager extends Employee {
    constructor(name, email, officeNumber) {
      this.name = name;
      this.email = email;
      this.officeNumber = officeNumber;
    
    console.log(` ${this.name}`);
    console.log(`Their office is office number: ${this.officeNumber}`);
    console.log(` Contact email: ${this.email}`);


    getRole(Manager) // Overridden to return 'Manager'
}}
class Engineers extends Employee{
    constructor(name, email,  github ) {
      this.name = name;
      this.email = email;
      this.github = github;

    
    console.log(` ${this.name}`);
    console.log(`Github: ${this.github}`);
    console.log(` Contact email: ${this.email}`);
  

getGithub()

getRole() // Overridden to return 'Engineer'
}}
class Intern extends Employee{
    constructor(name, id, email,  school) {
      this.id = id;
      this.name = name;
      this.email = email;
      this.school = school;
    
    console.log(` ${this.name}`);
    console.log(`Their employee ID numer is: ${this.id}`);
    console.log(` Contact email: ${this.email}`);
   

getSchool()

getRole() // Overridden to return 'Intern'
}}
function writeToFile(fileName, data) {
    return fs.writeFileSync(fileName, data)
      }
function init() {
    inquirer.prompt(questions).then(response =>{ 
      writeToFile('index.html', generateHTML(response))
      console.log('Successfully created a new team list!')
    })
  }
  // Function call to initialize app
  init();
  function generateHTML(name, id, github, ) {
    return  `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
      <title>Document</title>
    </head>
    <body>
      <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <h1 class="display-4"> ${name}</h1>
        <h2 class="display-4"> ${id}</h2>
        <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
        <ul class="list-group">
          <li class="list-group-item">My GitHub username is ${github}</li>
          <li class="list-group-item">My email address is ${email}</li>
        </ul>
      </div>
    </div>
    </body>
    </html>`;
  }