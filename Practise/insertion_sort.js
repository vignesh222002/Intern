function insertionSort (arr, n) {

    let i, j, key;

    for (i = 1; i < n; i++) {
        key = arr[i];
        j = i - 1;

        while (j >= 0 && arr[j] > key) {

            let temp = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = temp;
            j--;
        }
    }
    console.log(arr);
}

let array = [12, 67, 86, 23, 98, 57, 65, 353, 83, 16];
let n = array.length;

insertionSort(array, n);