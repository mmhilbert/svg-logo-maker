const { Circle, Triangle, Square } = require('./shapes.js')
const text = 'ABC'
const color = 'purple'
const textColor = 'white'


describe('Circle class', () => {
    test('Testing the circle method returns SVG with a specific color and string', () => {
        const shape = new Circle()
        shape.setColor(color)
        
        expect(shape.render(text, textColor)).toEqual(`<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">

        <circle cx="150" cy="100" r="80" fill="${color}"/>
      
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text.toUpperCase()}</text>
      
      </svg>`)
    })
})

describe('Square class', () => {
    test('Testing the square method returns SVG with a specific color and string', () => {
        const shape = new Square()
        shape.setColor(color)
        
        expect(shape.render(text, textColor)).toEqual(`<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">
        
        <rect x="10" y="10" width="300" height="200" fill="${color}" />
        
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text.toUpperCase()}</text>
      
      </svg>`)
    })
})

describe('Triangle class', () => {
    test('Testing the square method returns SVG with a specific color and string', () => {
        const shape = new Triangle()
        shape.setColor(color)
        
        expect(shape.render(text, textColor)).toEqual(`<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">
        <polygon points="0,200 300,200 150,0" fill="${color}" />
        <text x="150" y="150" font-size="60" text-anchor="middle" fill="${textColor}">${text.toUpperCase()}</text>
        </svg>`)
    })
})