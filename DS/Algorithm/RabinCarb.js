let text = "ccaccadba";
let pattern = "adb";
let charToNum = (c) => {
    return (c.charCodeAt(0) % 256);
}
let m = text.length;
let n = pattern.length;
let sum = 0;
let p = 26;

for (let i = 0; i < n; i++) {
    sum += (charToNum(pattern.charAt(i))*(p**(m-1-i)));
}

for (let i = 0; i < m; i++) {
    let newSum = 0;
    let j = i;
    let count = 0;
    while (count < n) {
        newSum +=  (charToNum(text.charAt(j))*(p**(m-1-count)));
        count++;
        j++;
        if (sum == newSum) {
            console.log(`Found at : ${i}`);
        }
    }
}
