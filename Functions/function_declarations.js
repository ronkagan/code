//function_declarations
/*
A function declaration is a function that is bound to an identifier or name.
	function square (number) {
	  return number * number; 
	}

	console.log(square(5));
	// Output: 25.
Function declarations require the keyword function, a name, and a function body. 
You can identify this by the use of 
	function square() 
	and the {}. 
Function declarations do not end in a semi-colon.

1.
In main.js, use a function declaration to create a new function called isGreaterThan. The function should take two parameters, numberOne and numberTwo.

2.
Inside the function, using an if/else statement, create the following logic:

If numberOne is greater than numberTwo, return true.

Otherwise, return false.

3.
Call the isGreaterThan() function with two arguments of your choice.
*/
function isGreaterThan(numberOne,numberTwo) {
	if (numberOne > numberTwo) {
		return true;
	}	else {
		return	false;
		}
}

console.log(isGreaterThan(7,3));