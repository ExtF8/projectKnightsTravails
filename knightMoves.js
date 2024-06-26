export default function knightMoves(start, end) {
    // Knight's move offsets
    const moves = [
        [-2, -1],
        [-2, 1],
        [-1, -2],
        [-1, 2],
        [1, -2],
        [1, 2],
        [2, -1],
        [2, 1],
    ];

    // Queue with starting square and visited set
    const queue = [[start]];
    const visited = new Set([start.toString()]);

    let movesCount = 0;

    // BFS
    while (queue.length > 0) {
        const levelSize = queue.length;
        for (let i = 0; i < levelSize; i++) {
            const path = queue.shift();
            const [x, y] = path[path.length - 1];

            // Check if target square is reached
            if (x === end[0] && y === end[1]) {
                return { path, movesCount };
            }

            // Generate possible moves from current square
            for (const [dx, dy] of moves) {
                const newX = x + dx;
                const newY = y + dy;
                const newPosition = [newX, newY];

                // Check if new position is valid and not visited
                if (
                    isVAlidPosition(newX, newY) &&
                    !visited.has(newPosition.toString())
                ) {
                    // Enqueue new path and mark position as visited
                    queue.push([...path, newPosition]);
                    visited.add(newPosition.toString());
                }
            }
        }
        // Increment movesCount after exploring all squares at current level
        movesCount++;
    }

    // If target square is not reachable
    return null;
}

function isVAlidPosition(x, y) {
    return x >= 0 && x < 8 && y >= 0 && y < 8;
}
