//review_scope
/*
Review: Scope
This unit introduced you to scope.

Scope is the idea in programming that some variables are accessible/inaccessible from other parts of the program.
Global Scope refers to variables that are accessible to every part of the program.
Block Scope refers to variables that are accessible only within the block they are defined.

Parameters and const and let variables defined within a function have block scope:

	const multiplier = (number, phase) => {
	  const val = number * controlVal + phase;
	  console.log(val);
	};

A variable with block scope is a variable that is defined within a block and only available inside a block.

A globally scoped variable is a variable that is accessible to any part of the program.

It is preferable to use a block scoped variable (as opposed to a globally scoped one) because global scope can make things like variable collision (using the same variable for two different purposes) more common.