var rob = function(nums) {
    let prev = 0;
    let curnt = 0;
    for (let i of nums) {
        let temp = curnt;
        curnt = Math.max(prev + i, curnt);
        prev = temp;
    }
    return curnt;
}