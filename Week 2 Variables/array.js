// Arrays

const myArray = [];

console.log('myArray length is ' + myArray.length);

myArray[0] = 'hello';
myArray[1] = 'World';

console.log('Now myArray length is ' + myArray.length);

const color = 'biege';
const area = 13*12;

console.group('Bedroom Details');
console.log(`Color: ${color}`);
console.log('Color: ' + color);
console.log('Area: ' + area);


console.groupEnd();

const table = {
    type: 'billiards',
    solids: 8,
    stripes: 7,
    games: ['8-Ball', '9-Ball', 'Straight']
  };
  
  console.log('The answer is' + table.games[1]);