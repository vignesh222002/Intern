function linearSearch(arr, n, x) {
    let i;

    for (i = 0; i < n; i++) {
        if (arr[i] == x) {
            console.log(i);
            return ;
        }
    }
    console.log(-1);
    return ;
}

let array = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
let n = array.length;

linearSearch(array, n, 60);