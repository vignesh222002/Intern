let array = [9,7,8,6,5,4,1,2,3,2,1,7,5];
array.sort(function(a, b){return a - b});
let arr = [...new Set (array)];

for (let i = 1; i < arr.length - 1; i += 2) {
    [arr[i], arr[i+1]] = [arr[i+1], arr[i]];
}

console.log(arr);