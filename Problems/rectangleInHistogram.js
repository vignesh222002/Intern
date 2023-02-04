let heights = [1,3,2,3,5];
let max = 0;
    for(let i = 0; i < heights.length; i++){
        let base = heights[i];
        let width = 1;
        for(let j = i + 1; j < heights.length; j++){
            if(heights[j] < base){
                break;
            }
            width++;
        }
        
        for(let j = i - 1; j >= 0; j--){
            if(heights[j] < base){
                break;
            }
            width++;
        }
        let area = heights[i] * width;
        max = Math.max(area, max);
    }
    console.log(max);