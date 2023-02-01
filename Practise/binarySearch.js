function binarySearch (arr, key) {

    let x = 0;
    let y = arr.length - 1;
    let mid;

    while (y - x > 1) {
        mid = Math.floor( (y + x) / 2 );

        if (arr[mid] < key) {
            x = mid + 1;
        }
        else {
            y = mid;
        }
    }

    if (arr[x] == key) {
        console.log(x);
    }
    else if (arr[y] == key) {
        console.log(y);
    }
    else {
        console.log(-1);
    }
}

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let key = 10;

binarySearch(array, key);