//005-block_scope_III
/*

Let's take a look at one other common example of block scope, as defined within a for loop.

const cloudCount = () => {
  let i = 2;
  console.log(i); // 2
  for (let i = 0; i < 10; i++) {
    console.log(i); // Numbers from 0 to 9
  }
};

cloudCount();
console.log(i); // ReferenceError
Here the variable i is defined in the cloudCount() function.
Within the for loop block, we again define i, as a value that will be incremented.
The local value of i, whether defined in the function block or the for loop, has no impact on the global scope of our program.

1.
Using const, declare a new function called starCount().

const starCount = () => {}


2.
Within the starCount() function, declare a let variable named i and set it equal to 5.

const starCount = () => {
	let i = 5;
};


3.
Right beneath the variable declaration, log the value of the i value to the console.

const starCount = () => {
	let i = 5;
	console.log(i);
};


4.
Beneath the previous console.log() statement, create a for loop.

The for loop should begin counting when i = 0, as long as i < 12,
and increment the value i by 1 each time the loop runs.

Within the block of the for loop, log the value of i to the console, as demonstrated in the example.

const starCount = () => {
	let i = 5;
	console.log(i); // 5
	for (let i = 0; i < 12; i++) {
    console.log(i); // Numbers from 0 to 12
  }
};


5.
Call starCount() function, from outside of the function.

const starCount = () => {
	let i = 5;
	console.log(i); // 5
	for (let i = 0; i < 12; i++) {
    console.log(i); // Numbers from 0 to 12
  }
};
starCount()


6.
Finally, beneath the function call, log the value of i to the console from outside of the function.

You will notice that it throws a Reference Error! The value of i is contained in the block scope.

*/

const starCount = () => {
	let i = 5;
	console.log(i); // 5
	for (let i = 0; i < 12; i++) {
    console.log(i); // Numbers from 0 to 12
  }
};
starCount();
console.log(i);