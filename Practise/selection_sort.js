function selectionSort (arr, n) {

    let i, j, min;

    for (i = 0; i < n; i++) {
        min = i;

        for (j = i+1; j < n; j++) {

            if (arr[min] > arr[j]) {

                let temp = arr[min];
                arr[min] = arr[j];
                arr[j] = temp;
            }
        }
    }
    console.log(arr);
}

let array = [23, 43, 35, 68, 47, 98, 53, 94, 36, 335];
let n = array.length;

selectionSort(array, n);