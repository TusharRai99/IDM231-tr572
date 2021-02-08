const colors = 'beige';
const areas = 13 * 12;
const minAreas = 135;
const meetsMinRequirement = area >= minArea;

console.group('Bedroom Details');
console.log(`Color: ${colors}`);
console.log(`Total Area: ${areas}`);
console.log(`Meets Min Requirement: ${meetsMinRequirement}`);
console.groupEnd();