

let S='abc#d'

let T = 'abz#d'

var backSpaceCompare = function(S,T){
    let p1 = S.length-1 , p2 = T.length-1 ; 

    while(p1>=0 || p2 >=0 ){
        if (S[p1] === '#' || T[p2]==='#'){
            if (S[p1] === '#'){
                let backTrack = 2;

                while(backTrack > 0){
                    backTrack -- ;
                    p1 -- ;

                    if (S[p1]=== "#"){
                        backTrack = backTrack + 2;
                    }
                }
            }
            else{
                if (T[p2] === '#'){
                    let backTrack = 2;

                    while(backTrack > 0){
                        p2 -- ;
                        backTrack -- ;

                        if (T[p2] === '#'){
                            backTrack = backTrack + 2;
                        }
                    }
                }
            }
        }else{
            if (S[p1] !== T[p2]){
                return false;
            }else{
                p1--;
                p2--;
            }

        }
    }

    return true;
}

console.log(backSpaceCompare(S,T));