const inquirer = require('inquirer')
const fs = require('fs')
const { Shape, Circle, Square, Triangle} = require('./shape')

inquirer
  .prompt([
    {
        name:"text",
        type: 'input',
        message: "enter the text for the logo"
    },
    {
        name:"textColor",
        type: 'input',
        message: "enter the text color"
    },
    {
        name: "shapeType",
        type: "list",
        message: "Select a shape for the logo",
        choices: ["circle", "square", "triangle"],
    },
    {
        name: "shapeColor",
        type: "input",
        message: "Enter the color for the shape",
    },
  ])
  .then((answers) => {
    console.log(shapeType)
    switch(answers.shapeType){
      case circle: shape = new Circle(answers.shapeColor)
      case square: shape = new Square(answers.shapeColor)
      case triangle: shape = new Triangle(answers.shapeColor)
    }
      console.log('what')
    const svg = new SVG();
    console.log(`setting svg ${answers.text, answers.textColor,shape}`)
        svg.setText(answers.text, answers.textColor);
        svg.setShape(shape);
        return writeFile("logo.svg", svg.render());
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  }); 

