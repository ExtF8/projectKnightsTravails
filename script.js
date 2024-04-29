import knightMoves from './knightMoves.js';

// Test cases
const startPosition = [0, 0];
const endPosition = [7, 7];
const movesInput = knightMoves(startPosition, endPosition);

// Generate messages
function generateMessages(startPosition, endPosition, movesInput) {
    if (movesInput === null) {
        return `No valid path exists for end position ${endPosition}. Please provide valid end position.`;
    }

    const pathOutput = movesInput.path
        .map((square) => `[${square.join(',')}]`)
        .join(' -> ');
    const movesCountOutput = movesInput.movesCount;

    return {
        messageStart: `Knight moves will start at ${startPosition}.`,
        messageEnd: `Knight moves will end at ${endPosition}.`,
        pathMessage: `Knight's path: ${pathOutput}`,
        countMessage: `Knight took ${movesCountOutput} moves to reach the end.`,
    };
}
function runTest(startPosition, endPosition, movesInput) {
    const messages = generateMessages(startPosition, endPosition, movesInput);
    if (typeof messages === 'string') {
        console.log(messages);
    } else {
        console.log(messages.messageStart);
        console.log(messages.messageEnd);
        console.log(messages.pathMessage);
        console.log(messages.countMessage);
    }
}

runTest(startPosition, endPosition, movesInput);
