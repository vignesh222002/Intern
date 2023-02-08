let array = [
    [1, 0, 0, 1],
    [1, 1, 1, 1],
    [0, 1, 0, 0],
    [0, 1, 0, 0]
];

function floodFill(i, j, target, arr) {
    if (arr[i][j] == val) {
        arr[i][j] = target;
    }
    if (i + 1 < arr.length && arr[i + 1][j] == val) {
        arr[i + 1][j] == target;
        floodFill(i + 1, j, target, arr);
    }
    if (j + 1 < arr[0].length && arr[i][j + 1] == val) {
        arr[i][j + 1] = target;
        floodFill(i, j + 1, target, arr);
    }
    if (j - 1 >= 0 && arr[i][j - 1] == val) {
        arr[i][j - 1] = target;
        floodFill(i, j - 1, target, arr);
    }
    if (i - 1 >= 0 && arr[i - 1][j] == val) {
        arr[i - 1][j] = target;
        floodFill(i - 1, j, target, arr);
    }
}
let a = 2;
let b = 1;
let val = array[a][b];

floodFill(a, b, 9, array);
console.log(array);