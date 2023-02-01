function linearSearch(arr, n, key) {

    if ( n == 0) {
        return -1;
    }

    else if (arr[n - 1] == key) {
        return n-1;
    }
    
    else {
        let output = linearSearch(arr, n-1, key);
        return output;
    }
}

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let n = array.length;
let key = 10;

let result = linearSearch(array, n, key);

console.log(result);