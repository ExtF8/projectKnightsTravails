import knightMoves from './knightMoves.js';

// Test cases

const startPosition = [0, 0];
const endPosition = [7, 7];
const movesInput = knightMoves(startPosition, endPosition);

const pathOutput = movesInput.path;
const movesCountOutput = movesInput.movesCount;
const pathMap = pathOutput
    .map((square) => `[${square.join(',')}]`)
    .join(' -> ');


let messageStart = `Knight moves will start at ${startPosition}.`;
let messageEnd = `Knight moves will end at ${endPosition}.`;
let pathMessage = `Knight's path: ${pathMap}`;
let countMessage = `Knight took ${movesCountOutput} moves to reach the end.`;

console.log(messageStart);
console.log(messageEnd);
console.log(pathMessage);
console.log(countMessage);
