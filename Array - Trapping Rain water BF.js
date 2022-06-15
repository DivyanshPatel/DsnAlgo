

heights = [0,1,0,2,1,0,3,1,0,1,2]

const getTrappedWater = function(heights){

    let totalWater = 0;

    for (p = 0 ; p < heights.length ; p ++ ){
        let maxLeft = 0 , maxRight = 0 , leftP =p , rightP = p;
        
        while(leftP>=0 ){
            maxLeft = Math.max( maxLeft , heights[leftP]);
            leftP -- ;
        }

        while (rightP < heights.length){
            maxRight = Math.max(maxRight , heights[rightP]) ;

            rightP ++;
        }

        const ch = heights[p];
        const currentWater = Math.min(maxLeft , maxRight) - ch ;

        if(currentWater >= 0 ){
            totalWater += currentWater;
        }


    }

    return totalWater;
}

console.log(getTrappedWater(heights));