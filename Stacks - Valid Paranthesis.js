const s = "{()[]}";



const isValidParanthesis = function(s){


const params = {
    "{":"}",
    "[":"]",
    "(":")"
}

const stack = [] ;

    if(s.length === 0 ) return true ;

  

    for(let i = 0 ; i < s.length ; i++ ){
        if (params[s[i]]){
            stack.push(s[i]);
        }
        else {
            const leftBracket = stack.pop();
            const correctRightBracket = params[leftBracket] ; 

            if(s[i] !== correctRightBracket) return false;
        }
    }
    return stack.length === 0 ;

}



console.log(isValidParanthesis(s));