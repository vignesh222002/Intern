function lpsFind(str, n, lps) {
    let len = 0;
    let i = 1;
    lps[0] = 0;

    while (i < n) {
        if (str.charAt(len) == str.charAt(i)) {
            len++;
            lps[i] = len
            i++;
        }
        else {
            if (len == 0) {
                lps[i] = len;
                i++;
            }
            else {
                len = lps[len - 1];
            }
        }
    }
    console.log(lps);
}

function kmpSearch(text, str) {
    let m = text.length;
    let n = str.length;
    let lps = [];

    lpsFind(str, n, lps);

    let i = 0;
    let j = 0;

    while (i < m) {
        if (str.charAt(j) == text.charAt(i)) {
            i++;
            j++;
        }
        if (j == n) {
            console.log(`The Position is ${i - j}`);
            j = lps[j - 1];
        }
        else if (str.charAt(j) != text.charAt(i)) {
            if (j !== 0) {
                j = lps[j - 1];
            }
            else {
                i++;
            }
        }
    }
}

let text = "ABABDABACDABABCABAB";
let str = "ABABCABAB";

kmpSearch(text, str);