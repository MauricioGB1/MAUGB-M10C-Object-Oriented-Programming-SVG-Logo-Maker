    
class Shape {
    constructor(shapeColor, text, textColor) {
        this.shapeColor = shapeColor;
        this.text = text;
        this.textColor = textColor;
    }
};

module.exports = Shape;





    // class Circle extends Shape {
    //     constructor(shapeColor, text, textColor) {
    //         super(shapeColor, text, textColor);
    //     };
    
    //     render() {
    //         return `
    //         <svg version="1.1"
    //               width="300" height="200"
    //               xmlns="http://www.w3.org/2000/svg">
    //               <circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${this.shapeColor}" />
    //               <text x="150" y="125" font-size="70" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
    //         </svg>  
    //         `
    //     };
    // };
    
    // class Square extends Shape {
    //     constructor(shapeColor, text, textColor) {
    //         super(shapeColor, text, textColor);
    //     };
    
    //     render() {
    //         return `
    //         <svg version="1.1"
    //         width="300" height="200"
    //         xmlns="http://www.w3.org/2000/svg">
    //         <rect x="50" height="200" width="200" fill="${this.shapeColor}"/>
    //         <text x="100" y="125" font-size="70" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
    //     </svg>
    //     `
    //     };
    // };
    
    // class Triangle extends Shape {
    //     constructor(shapeColor, text, textColor) {
    //         super(shapeColor, text, textColor);
    //     };
    
    //     render() {
    //         return `
    //         <svg version="1.1" 
    //             width="300" height="200"
    //             xmlns="http://www.w3.org/2000/svg">
    //             <polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="${this.shapeColor}"/>
    //             <text x="100" y="185" font-size="70" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
    //         </svg>
    //         `
    //     };
    // };

    // module.exports = {Circle, Square, Triangle}