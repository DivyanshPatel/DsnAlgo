const s = "{()[]}";

const params = {
    "{":"}",
    "[":"]",
    "(":")"
}


const isValidParanthesis = function(s){

    if(s.length === 0 ) return true ;

    const stack = [] ;

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