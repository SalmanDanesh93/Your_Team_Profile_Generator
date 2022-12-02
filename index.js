const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');

const DIST_DIR = path.resolve(__dirname, 'dist');
const distPath = path.join(DIST_DIR, 'index.html');

const render = require('./src/html-temp.js');

const idArray = [];
const teamMembers = [];

function appMenu() {
    function createMan() {
        inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'manName',
                    message: "Team Managers Name?",
                },
                {
                    type: 'input',
                    name: 'manOfficeNumber',
                    message: "Team Managers Office Number?",
                },
                {
                    type: 'input',
                    name: 'manEmail',
                    message: "Team Managers Email?",
                },
                {
                    type: 'input',
                    name: 'manId',
                    message: "Team Managers Badge ID?",
                },
            ])
            .then((answers) => {
                const man = new Manager(
                    answers.manName,
                    answers.manOfficeNumber,
                    answers.manEmail,
                    answers.manId,
                );
                teamMembers.push(man);
                idArray.push(answers.manId);
                teamCreate();
            });
    }

    function teamCreate() {
        inquirer
            .prompt([
                {
                    type: 'list',
                    name: 'memberChoice',
                    message: "Who is next to the team?",
                    choices: [
                        'Intern',
                        'Engineer',
                        "Team is done!",
                    ],
                },
            ])
            .then((userChoice) => {
                switch (userChoice.memberChoice) {
                    case 'Intern':
                        addInt();
                        break;
                    case 'Engineer':
                        addEng();
                        break;
                    default:
                        teamBuild();
                }
            })
    
        }

        function addInt() {
            inquirer
                .prompt([
                    {
                        type: 'input',
                        name: 'intName',
                        message: "Interns Name?",
                    },
                    {
                        type: 'input',
                        name: 'intEmail',
                        message: "Interns Email?",
                    },
                    {
                        type: 'input',
                        name: 'intSchool',
                        message: "Interns School?",
                    },
                    {
                        type: 'input',
                        name: 'intId',
                        message: "Interns Badge ID?",
                    },
                ])

            .then((answers) => {
                const int = new Intern(
                    answers.intName,
                    answers.intEmail,
                    answers.intSchool,
                    answers.intId,
                );
                teamMembers.push(int);
                idArray.push(answers.intId);
                teamCreate();
            })
        }

        function addEng() {
            inquirer
                .prompt([
                    {
                        type: 'input',
                        name: 'engName',
                        message: "Engineers Name?",
                    },
                    {
                        type: 'input',
                        name: 'engEmail',
                        message: "Engineers Email?",
                    },
                    {
                        type: 'input',
                        name: 'engGit',
                        message: "Engineers GitHub?",
                    },
                    {
                        type: 'input',
                        name: 'engId',
                        message: "Engineers Badge ID?",
                    },
                ])

            .then((answers) => {
                const eng = new Engineer(
                    answers.engName,
                    answers.engEmail,
                    answers.engGit,
                    answers.engId,
                );
                teamMembers.push(eng);
                idArray.push(answers.engId);
                teamCreate();
            })
        }

        function teamBuild() {
            if (!fs.existsSync(DIST_DIR)) {
                fs.mkdirSync(DIST_DIR);
            }
            fs.writeFileSync(distPath, render(teamMembers), 'utf-8');
        }

        createMan();
    }
    appMenu();
