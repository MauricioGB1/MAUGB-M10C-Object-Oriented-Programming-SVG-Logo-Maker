
const inquirer = require('inquirer');

const fs = require('fs');

const shapeCreation = require('./lib/shapeCreation')

const filesystem= require('./node_modules/graceful-fs/graceful-fs')

const colorKeywords = ['aliceblue', 'antiquewhite', 'aqua', 'aquaMarine', 'azure', 'beige', 'bisque', 'black', 'blanchedalmond', 'blue', 'blueviolet', 'brown', 'burlywood', 'cadetblue', 'chartreuse', 'chocolate', 'coral', 'cornflowerblue', 'cornsilk', 'crimson', 'cyan', 'darkblue', 'darkcyan', 'darkgoldenrod', 'darkgray', 'darkgrey', 'darkgreen', 'darkkhaki', 'darkmagenta', 'darkolivegreen', 'darkorange', 'darkorchid', 'darkred', 'darksalmon', 'darkseagreen', 'darkslateblue', 'darkslategray', 'darkslategrey', 'darkturquoise', 'darkviolet', 'deeppink', 'deepskyblue', 'dimgray', 'dimgrey', 'dodgerblue', 'firebrick', 'floralwhite', 'forestgreen', 'fuchsia', 'gainsboro', 'ghostwhite', 'gold', 'goldenrod', 'gray', 'grey', 'green', 'greenyellow', 'honeydew', 'hotpink', 'indianred', 'indigo', 'ivory', 'khaki', 'lavender', 'lavenderblush', 'lawngreen', 'lemonchiffon', 'lightblue', 'lightcoral', 'lightcyan', 'lightgoldenrodyellow', 'lightgray', 'lightgrey', 'lightgreen', 'lightpink', 'lightsalmon', 'lightseagreen', 'lightskyblue', 'lightslategray', 'lightslategrey', 'lightsteelblue', 'lightyellow', 'lime', 'limegreen', 'linen', 'magenta', 'maroon', 'mediumaquamarine', 'mediumblue', 'mediumorchid', 'mediumpurple', 'mediumseagreen', 'mediumslateblue', 'mediumspringgreen', 'mediumturquoise', 'mediumvioletred', 'midnightblue', 'mintcream', 'mistyrose', 'moccasin', 'navajowhite', 'navy', 'oldlace', 'olive', 'olivedrab', 'orange', 'orangered', 'orchid', 'palegoldenrod', 'palegreen', 'paleturquoise', 'palevioletred', 'papayawhip', 'peachpuff', 'peru', 'pink', 'plum', 'powderblue', 'purple', 'rebeccapurple', 'red', 'rosybrown', 'royalblue', 'saddlebrown', 'salmon', 'sandybrown', 'seagreen', 'seashell', 'sienna', 'silver', 'skyblue', 'slateblue', 'slategray', 'slategrey', 'snow', 'springgreen', 'steelblue', 'tan', 'teal', 'thistle', 'tomato', 'turquoise', 'violet', 'wheat', 'white', 'whitesmoke', 'yellow', 'yellowgreen']

const fileName = "./examples/logo.svg";

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
        message: 'Please enter the COLOR KEYWORD for the SHAPE:',
        when: (answers) => {
            if(answers.shapeColorChoice === 'color keyword') {
                return true;
            }
                return false;
            },

        validate: (answer) => {
        let answerLowercase = answer.toLowerCase();
        for (var i = 0, len = colorKeywords.length; i < len; ++i) {
            if (answerLowercase.indexOf(colorKeywords[i]) != -1) {
                return true;
            }}
                return console.log('\n Please provide a valid color')
        }
     },    

    {
        type: 'input',
        name: 'shapeColor',
        message: 'Provide the SHAPE COLOR in HEXADECIMAL number (#CCCCCC)',
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
            if (answer.length > 3) {
                return console.log("\n Exceed the number maximum of three characters, Please enter new letters for Logo");
                }
                return true;
            }
    },
    
    {
        type: 'list',
        name: 'textColorChoice',
        message: 'Select the letters color format for your Logo:',
        choices: ['color keyword', 'hexadecimal']
    },
 
    { 
        type: "input",
        name: "textColor",
        message: 'Enter the COLOR KEYWORD for your LETTERS:',
        when: (answers) => {
            if(answers.textColorChoice === 'color keyword') {
                return true;
            }
                return false;
            },

        validate: (answer) => {
              let answerLowercase = answer.toLowerCase();
              for (var i = 0, len = colorKeywords.length; i < len; ++i) {
                if (answerLowercase.indexOf(colorKeywords[i]) != -1) {
                    return true;
                }}
                return console.log("\n Please enter a valid color name")
            }

    },
    
    { 
        type: "input",
        name: "textColor",
        messsage: "Enter the COLOR for the LETTERS in HEXADECIMAL NUMBER (#CCCCCC)",
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
                return true;
            }
    },
];



function createLogo(response) {
    const svg = shapeCreation(response);
    fs.writeFile(fileName, svg, ()=> console.log('Generated logo.svg'));
}

function init() {
    inquirer
    .prompt(questions)
    .then((response) => {
        createLogo(response);
        console.log( 'SUCCESS !!!  Your NEW LOGO IS READY, look in the examples folder' );
    })
    .catch(err => {
        console.log(err)
    });
}

init();