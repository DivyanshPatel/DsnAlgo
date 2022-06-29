const root = [3,9,20,null,null,15,7]
let currentDepth = 0;

const maxDepth = function(node,currentDepth){
    if(!node){
        return currentDepth;
    }
    currentDepth ++ ;
    return Math.max(maxDepth(node.left,currentDepth) , maxDepth(node.right,currentDepth));

    
}


// Solution 2

console.log(maxDepth(root,currentDepth));



var maxDepth1 = function(root) {
    
    if(!root){
        return 0;
    }
    
    return 1 + Math.max(maxDepth1(root.left),maxDepth1(root.right));




};