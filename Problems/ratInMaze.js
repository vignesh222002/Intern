let arr = [
    [1, 0, 0, 0],
    [1, 1, 0, 1],
    [1, 1, 0, 0],
    [0, 1, 1, 1]
];
let n = arr.length;

function path(i, j, n, str) {
    if (i == n - 1 && j == n - 1) {
        return console.log(str.slice(1, str.length));
    }

    if (i + 1 < n && arr[i][j] == 1) {
        str += "d";
        path(i + 1, j, n, str);
    }

    if (j + 1 < n && arr[i][j] == 1) {
        str += "r";
        path(i, j + 1, n, str);
    }
}

path(0, 0, n, "");