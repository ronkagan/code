//Logical Operators
let moonPhase = 'full';
let isFoggyNight = false
if (moonPhase === 'full' || isFoggyNight === true) {
	console.log('Howl!');
} else if (moonPhase === 'mostly full') {
	console.log('Arms and legs are getting harier');
} else if (moonPhase === 'mostly new') {
	console.log('Back on two feet.');
} else {
	console.log('Invalid moon phase.');
}