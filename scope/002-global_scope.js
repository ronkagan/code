//002-global_scope
/*
	const satellite = 'The Moon';
	const galaxy = 'The Milky Way';
	let stars = 'North Star';
	const myNightSky = () => {
		return 'Night Sky: ' + satellite + ', ' + stars + ', ' + galaxy; // Night Sky: The Moon, North Star, The Milky Way
	};
	console.log(myNightSky());

1.
Let's see what happens if we create a variable that overwrites a global variable.

Inside the myNightSky() function, on the very first line of the function, assign the variable stars to 'Sirius' as such:

stars = 'Sirius';

*/

const satellite = 'The Moon';
const galaxy = 'The Milky Way';
let stars = 'North Star';
const myNightSky = () => {
	stars = 'Sirius'
  return 'Night Sky: ' + satellite + ', ' + stars + ', ' + galaxy; // Night Sky: The Moon, North Star, The Milky Way
};
console.log(myNightSky());
console.log(stars);

// At first I tried const myNightSky = (stars = 'Sirius') => ... instead of stars in the line beneath myNightSky (https://gist.github.com/codecademydev/18039aa21303a75f6ae687237b990a60#file-sky-js)