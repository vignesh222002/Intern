function isEven(value) {
    return value % 2 == 0;
}

function isPositive(value) {
    return value > 0;
}

function isGreater(value) {
    return value % 5 == 0;
}


let arr = [-9,-8,-7,-6,-5,-4,-3,-2,-1,0,1,2,3,4,5,6,7,8,9]

let filtered = arr.filter(isGreater); 

console.log(filtered);