let arr = [-1, -2, -5, 0, 4, 5, 8, 12];

function removeNeg (x) {
    if (x >= 0) {
        return x;
    }
}

function myFunction (array, removeNeg) {
    let myArray = [];

    for (let x of array) {
        let res=removeNeg(x);
        if( !isNaN(res) )
        myArray.push(res);
    }
    return myArray;
}

console.log(myFunction(arr, removeNeg));
