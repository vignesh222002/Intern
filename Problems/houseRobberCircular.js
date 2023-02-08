var rob = function(nums) {
    if(nums.length==1) return nums[0];
    if(nums.length==2) return Math.max(nums[0],nums[1])
    let num1 = nums.slice(0, nums.length-1);
    let num2 = nums.slice(1, nums.length);

    let rob1 = 0;
    let rob2 = 0;
    for(let i of num1) {
        let temp = Math.max(i + rob1, rob2);
        rob1 = rob2;
        rob2= temp;
    }
    let rob3 = 0;
    let rob4 = 0;
    for(let i of num2) {
        let temp = Math.max(i + rob3, rob4);
        rob3 = rob4;
        rob4 = temp;
    }
    return Math.max(rob2, rob4);
};