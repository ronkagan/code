//arrow_functions
/*
JavaScript also provides several ways to refactor arrow function syntax. We'll explore a few of these techniques here, using an example function from a previous exercise.

const multiplyByNineFifths = (celsius) => {
  return celsius * (9/5);
};

const getFahrenheit = (celsius) => {
  return multiplyByNineFifths(celsius) + 32;
};

console.log('The temperature is ' + getFahrenheit(15) + '°F');
We can refactor this function in three ways. The most condensed form of the function is known as concise body.

Functions that take a single parameter should not use parentheses. The code will still work, but it's better practice to omit the parentheses around single parameters. However, if a function takes zero or multiple parameters, parentheses are required.
A function composed of a sole single-line block is automatically returned. The contents of the block should immediately follow the arrow => and the return keyword can be removed. This is referred to as implicit return.
A function composed of a sole single-line block does not need brackets.
In other words, the previous code can be refactored like this:

const multiplyByNineFifths = celsius => celsius * (9/5);

const getFahrenheit = celsius => multiplyByNineFifths(celsius) + 32;

console.log('The temperature is ' + getFahrenheit(15) + '°F');
You'll notice:

The parentheses around celsius have been removed, since it is a single parameter.
The return keyword has been removed since the function consists of a single-line block.
The {} have been removed, again, since the function consists of a single-line block.
Instructions
1.
Refactor the volumeOfSphere function using the principles described above.
*/

const volumeOfSphere = diameter => (1/6) * Math.PI * diameter * diameter * diameter;

console.log('The volume of a sphere is ' + volumeOfSphere(10) + ' cubic centimeters');

/*
const volumeOfSphere = (diameter) => {
  return (1/6) * Math.PI * diameter * diameter * diameter;
};

console.log('The volume of a sphere is ' + volumeOfSphere(10) + ' cubic centimeters');
*/