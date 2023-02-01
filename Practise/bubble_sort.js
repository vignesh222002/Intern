function bubble(arr, n) {

    for (let i = 0; i < n; i++) {

        for (let j = 0; j < n - i - 1; j++) {

            if ( arr[j] > arr[j+1] ) {
                
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    console.log(arr);
}

let array = [12, 67, 86, 23, 98, 57, 65, 763, 783, 15];
let n = array.length;

bubble(array, n);