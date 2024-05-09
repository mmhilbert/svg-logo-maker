const inquirer = require('inquirer')
const fs = require('fs')
const { Circle, Triangle, Square } = require('./lib/shapes')


const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'What three-letter abbreviation would you like on your logo?'
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'What color would you like to logo text to be?'
    },
    {
        type: 'list',
        name: 'shape',
        message: 'What shape would you like your logo to be?',
        choices: ['Circle', 'Triangle', 'Square']
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'What color would you like the shape of your logo to be?'
    }
]

// Create SVG file
function writeToFile(content) {
    fs.writeFile('./examples/logo.svg', content, (err) => {
        if (err) throw err
        console.log('Sucessfully generated logo.svg!')
    })
}

// init data structures
function init() {
    inquirer
    .prompt(questions)
    .then((answers) => {
        let type;
        switch(answers.shape) { 
            case 'Circle':
                type = new Circle();
                break;
            case 'Triangle':
                type = new Triangle();
                break;
            case 'Square':
                type = new Square();
                break;
            default:
                throw new Error('Invalid Shape.');
        }
        type.setColor(answers.shapeColor);
        
        const svgContent = type.render(answers.text, answers.textColor); 
        writeToFile(svgContent);
        
    }).catch((err) => {
        console.log(err);
    }); 
 
}

init()