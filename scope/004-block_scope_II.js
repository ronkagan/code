//004-block_scope_II
/*
Let's take a look at another example of block scope, as defined within an if block:

	const colorOfSky = () => {
	  const dusk = true;
	  let color = 'blue'; 
	  if (dusk) {
	    let color = 'pink';
	    console.log(color); // pink
	  }
	  console.log(color); // blue 
	};

	colorOfSky(); // blue
	console.log(color); // ReferenceError

Here, you'll notice:

We create a variable dusk inside the colorOfSky() function.
After the if statement, we define a new code block with the {} braces. Here we assign a new value to the variable color if the if statement is true.
Within the if block, the color variable holds the value pink, though outside the if block, in the function body, the color variable holds the value blue.
Block scope is a powerful tool in JavaScript, since it allows us to define variables with precision, and not pollute the global namespace.

const visibleLightWaves = () => {
	let lightWaves = 'Moonlight';
	console.log(lightWaves);
};
visibleLightWaves();
console.log(lightWaves);

1.
Remove the statement that erroneously logs the value of the lightWaves variable to the console outside of the function block.

const visibleLightWaves = () => {
	let lightWaves = 'Moonlight';
	console.log(lightWaves);
};
visibleLightWaves();

2.
Let's continue by adding another variable to the visibleLightWaves() function. 
Beneath the lightWaves variable, using let, add a variable region and set it equal to 'The Arctic'.

const visibleLightWaves = () => {
	let lightWaves = 'Moonlight';
	let region = 'The Arctic';
	console.log(lightWaves);
};
visibleLightWaves();

3.
Beneath the region variable, create an if statement that checks if the region is the 'The Arctic'.

const visibleLightWaves = () => {
	let lightWaves = 'Moonlight';
	let region = 'The Arctic';
	if (region === 'The Arctic') {
		console.log('Yep, it be arctic')
	} else {
		consol.log ('Nope, not arctic')
	};
	console.log(lightWaves);
};
visibleLightWaves();

4.
Inside the if block, define a new variable lightWaves and set it equal to 'Northern Lights'.

const visibleLightWaves = () => {
	let lightWaves = 'Moonlight';
	let region = 'The Arctic';
	if (region === 'The Arctic') {
		let lightWaves = 'Northern Lights';
		console.log(lightWaves);
	} else {
		consol.log ('Nope, not arctic');
	};
	console.log(lightWaves);
};
visibleLightWaves();

5.
Beneath the variable in the if block, use console.log() to log the value of the block variable inside the if block.

Notice the ouput. Inside the if block console.log(lightWaves) logs the value Northern Lights to the console. Outside the if block, but still within the function, the same statement logs Moonlight to the console.

*/

const visibleLightWaves = () => {
	let lightWaves = 'Moonlight';
	let region = 'The Arctic';
	if (region === 'The Arctic') {
		let lightWaves = 'Northern Lights';
		console.log(lightWaves);
	} else {
		consol.log ('Nope, not arctic');
	};
	console.log(lightWaves);
};
visibleLightWaves();

