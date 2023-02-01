let n = 5;
let a = 1;

for (i=1; i<=n; i++) {
    let output = "";
    for (j=1; j<=n; j++) {
        output += a + " ";
        a++;
    }
    console.log(output);
}