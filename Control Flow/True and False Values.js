//True and False Values
let wordCount = 1;

if (wordCount) {
  console.log("Great! You've started your work!");
} else {
  console.log('Better get to work!');
}


let favoritePhrase = '.';

if (favoritePhrase) {
  console.log("This string doesn't seem to be empty.");
} else {
  console.log('This string is definitely empty.');
}
/*
All variables that have been declared and assigned are truthy unless they contain one of the six values listed below:

false
0 and -0
"" and '' (empty strings)
null
undefined
NaN (Not a Number)
*/