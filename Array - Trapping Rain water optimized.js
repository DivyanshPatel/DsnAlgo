height = [0,1,0,2,1,0,3,1,0,1,2]

const getWater = function(height){

    let left = 0 , right = height.length-1 , maxRight = 0 ,maxLeft = 0 , totalWater =0 ;

    while(left<right){
        if (height[left]<=height[right]){
            if (height[left] >= maxLeft){
                maxLeft = height[left];
            }
            else{
                totalWater += maxLeft - height[left];
            }
            left ++ ;
        }
            else{
                if (height[right]>= maxRight){
                    maxRight = height[right];
                }
                else{
                    totalWater += maxRight - height[right];
                }
             
                right -- ;
        }
    }
    return totalWater;
    }


console.log(getWater(height));