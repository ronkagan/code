//function_expressions
/*
A function expression is similar to function declaration, with the exception that identifier can be omitted, creating an anonymous function. Function expressions are often stored in a variable. You can identify a function expression by the absence of a function name immediately trailing the function keyword.

const square = function (number) {
  return number * number;
};

console.log(square(5));
// Output: 25.
Also note function expressions end with a semi-colon since they are stored in a variable.

In this lesson, we have primarily been using a type of function expression known as an arrow function. Arrow function syntax is a shorter syntax for a function expression. You can identify arrow functions through the use of parentheses and the arrow token () =>.

const square = (number) => {
  return number * number;
};

console.log(square(5));
// Output: 25.
It's important to be familiar with the multiple ways of writing functions, since you will come across these in JavaScript code.

Instructions
1.
Refactor the function declaration to be a function expression using arrow function syntax.

Be sure to call the function at the end.
*/

const isGreaterThan = (numberOne, numberTwo) => {
  if(numberOne > numberTwo){
  	return true;
  }	else {
  	return false;
  };
};

isGreaterThan (4, 8);

/*
function isGreaterThan(numberOne, numberTwo){
  if(numberOne > numberTwo){
    return true;
  } else {
    return false;
  }
}

isGreaterThan(4, 8)

