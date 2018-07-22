//003-block_scope.js
/*
Because of the challenges with global scope, it is preferable to define variables in block scope.

A block refers to the {} braces of a function, a loop, or an if statement, and serves as an important structural marker for our code. Block scope means that a variable defined in the block is only accessible within the curly braces.

Block scope works like this:

const colorOfSky = () => {
  let color = 'blue'; 
  console.log(color); // blue 
};

colorOfSky(); // blue 
console.log(color); // ReferenceError
You'll notice:

We define a function colorOfSky().
Within the function, the color variable is only available within the curly braces of the function.
If we try to log the same variable outside the function, throws a ReferenceError.

1.
In light.js, using const, define a function visibleLightWaves().

2.
Within the visibleLightWaves() function, using let, create a variable lightWaves and set it equal to 'Moonlight'.

3.
Within the function, beneath the lightWaves variable, add a console.log() statement that will log the value of 
the lightWaves variable when the function runs.

4.
Call the visibleLightWaves() function from outside the function.

5.
Beneath the function call, log the value of lightWaves to the console from outside the function.

You'll notice that it logs a ReferenceError since the variable is tied to the block scope of the function!
*/
const visibleLightWaves = () => {
	let lightWaves = 'Moonlight';
	console.log(lightWaves);
};
visibleLightWaves();
console.log(lightWaves);