let n = 5;
let output;

for (let i = 1; i <= n; i++) {
    output = "";

    for (let j = 1; j <= n; j++) {
        if ( (i%2 != 0) && (j == 5) ) {
            output += i + 1;
        }
        else if ( (i%2 == 0) && (j == 1)) {
            output += i + 1;
        }
        else {
            output += i;
        }
    }
    console.log(output);
}