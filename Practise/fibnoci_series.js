let x = 1;
let y = 1;
let n = 8;

let output;
let i = 1;
// console.log(x);
// console.log(y);
// while (i <= n) {
//     output = x + y;
//     x = y;
//     y = output;
//     i++;
//     console.log(output);
// }

console.log(x);
console.log(y);
do {
    output = x + y;
    console.log(output);
    x = y;
    y = output;
    i++
}
while (i <= n);

