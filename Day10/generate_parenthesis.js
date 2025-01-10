function genereateParenthesis(n){
    let result = [];

    function backtrack(current, open, close){
        // Base Case
        if(current.length === 2*n){
            result.push(current);
            return;
        }

        if(open < n){
            backtrack(current + "(", open+1, close);
        }
        if(close < n){
            backtrack(current + ")", open, close+1);
        }
    }
    backtrack("", 0, 0);
    return result;
}
console.log(genereateParenthesis(3));

// TC = O(2^n)
// SC = O(n)
    

