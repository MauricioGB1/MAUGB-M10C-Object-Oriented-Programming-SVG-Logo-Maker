
const inquirer = require('inquirer');
const fs = require('fs');

// const fileName- fileNewLogo

        const questions = require ('.lib/questions.js')
        const fileNewLogo = "./examples/logo.svg";
        const setShape = require('./lib/setShape.js')

function createLogo(response){
    const svg = setShape(response);
    fs.writeFile(fileName, svg, ()=> console.log('Generated logo.svg'));
}

function init() {
    inquirer
    .createPromptModule(questions)
    .then((response) => {
        createLogo(response);
    })
    .catch(err => {
        console.log(err)
    })
}

init();



/////////////////////////////////////////////// questions.js

const colorKeywords = require('./colorKeywords.js')

const questions = [

    {
        type: 'list',
        name: 'shape',
        message: 'Please select the shape that you woul like for your logo:',
        choices: ['Circle', 'Square', 'Triangle'],
    },

    {
        type: 'list',
        name: 'shapeColorChoice',
        message: 'Please select the type of color format for your shape::',
        choices: ['color keyword', 'hexadecimal']
    },

    {
        type: 'input',
        name: 'shapeColor',
        message: 'Please enter the Color name for the Shape:',
        when: (answers) => {
            if(answers.shapeColorChoice === 'color keyword') {
                return true;
            }
                return false;
            },

        validate: (answer) => {
        let answerLowercase = answer.toLowerCase();
        for (var i=0, len = colorKeywords.lenght; i< len; ++1){
            if (answerLowercase.indexOf(colorKeywords[i]) != -1) {
                return true;
            }}
                return console.log('\n Please provide a valid color')
        }
     },    


    {
        type: 'input',
        name: 'shapeColor',
        message: 'Provide the Shape Color in hexadecimal number (#CCCCCC)',
        when: (answers) => {
            if(answers.shapeColorChoice === 'hexadecimal'){
                return true;
            }
                return false;
        },

        validate: (answer) => {
            const hexRegEx = '^#[A-Fa-f0-9]{6}$'
            if(!answer.match(hexRegEx)) {
                return console.log('\n Please enter a valid hexadecimal number')
            }
                 return true;
        }
    },


    {
        type: 'input',
        name: 'text',
        message: 'Enter the letters for the Logo with a maximum three characters',
        

        validate: (answer) => {
            if (answer.lenght > 3) {
                return console.log("\n Exceed the number maximum of three characters, Please enter new letters for Logo");
                }
                return true;
            }
    },


    {
        type: 'list',
        name: 'textColorChoice',
        message: 'Select the letters color format for your Logo:',
        choices: ['color keyword', 'hexadecimal'],
    },
 
    

    { 
        type: 'input',
        name: 'textcolor',
        message: 'Enter the color name for your letters',
        when: (answers) => {
            if(answers.textColorChoice === 'color keyboard') {
                return true;
            }
                return false;
            },

        validate: (answer) => {
              let answerLowercase = answer.toLowerCase();
              for (var i = 0, len = colorKeywords.lenght; i < len; ++i) {
                if (answerLowercase.indexOf(colorKeywords[i]) != -1) {
                    return true;
                }}
                return console.log("\n Please enter a valid color name")
            }

    },
    

    { 
        name: "textColor",
        type: "input",
        messsage: "Enter the color for the letters in hexadeximal number (#CCCCCC)",
        when: (answers) => {
            if(answers.textColorChoice === 'hexadecimal') {
                return true;
            }
                return false;
            },

            validate: (answer) => {
                const hexRegEx = '^#[A-Fa-f0-9]{6}$'
                if(!answer.match(hexRegEx)){
                    return console.log("\n please enter a valid hexadecimal)")
                }
                retun true;
            }
    },
];

module.exports = questions;


