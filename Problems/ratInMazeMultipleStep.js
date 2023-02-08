let arr = [
    [1, 0, 0, 0],
    [1, 1, 0, 1],
    [0, 1, 0, 0],
    [1, 1, 1, 1]
];
let start = [0, 0];
let end = [3, 3]

function findPath(start, end, arr) {
    let path = [];
    let visited = {};
    let queue = [start];
    visited[start] = true;

    while (queue.length > 0) {
        let curnt = queue.shift();
        path.push(curnt);

        if (curnt[0] == end[0] && curnt[1] == end[1]) {
            return console.log(path);;
        }

        let row = curnt[0];
        let col = curnt[1];
        let directions = [[1, 0], [0, -1], [0, 1], [0, -1]];
        for (let direction of directions) {
            let newRow = row + direction[0];
            let newCol = col + direction[1];

            if (newRow >= 0 && newRow < arr.length && newCol >= 0 && newCol < arr[0].length && arr[newRow][newCol] === 1 && !visited[`${newRow},${newCol}`]) {
                visited[`${newRow},${newCol}`] = true;
                queue.push([newRow, newCol]);
            }
        }
    }
    return console.log("No Path");
}

findPath(start, end, arr);