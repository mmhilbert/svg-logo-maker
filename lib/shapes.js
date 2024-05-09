class Shape {
    constructor(type) {
        this.type = type
        this.color = ''

    }
    setColor(color) {
        this.color = color
        console.log(color)
    }
}

class Triangle extends Shape {
    constructor() {
        super('triangle')

    }
    render(text, textColor) {
       return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">
        <polygon points="0,200 300,200 150,0" fill="${this.color}" />
        <text x="150" y="150" font-size="60" text-anchor="middle" fill="${textColor}">${text.toUpperCase()}</text>
        </svg>" />`
    }
}

class Square extends Shape {
    constructor() {
        super('square')

    }
    render(text, textColor) {
        return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">
        
        <rect x="10" y="10" width="300" height="200" fill="${this.color}" />
        
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text.toUpperCase()}</text>
      
      </svg>" />`
    }
}

class Circle extends Shape {
    constructor() {
        super('circle')
    }

    render(text, textColor) {
        return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">

        <circle cx="150" cy="100" r="80" fill="${this.color}"/>
      
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text.toUpperCase()}</text>
      
      </svg>" />`
    
    }
}

module.exports = {
    Triangle,
    Square,
    Circle
}

