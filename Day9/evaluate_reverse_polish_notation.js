function evalPRN(tokens){
    let stack = [];

    const operate = (a,b,operator) => {
        switch(operator){
            case '+' : return a + b;
            case '-' : return a - b;
            case '*' : return a * b;
            case '/' : return Math.trunc(a/b);
            default: throw new Error(`Invalid operator: ${operator}`);
        }
    }

    for(let token of tokens){
        if(!isNaN(token)){
            stack.push(Number(token));
        }else{
            const b = stack.pop();
            const a = stack.pop();
            result = operate(a,b,token);
            stack.push(result);
        }
    }
    return stack.pop();

}
console.log(evalPRN(["1","2","+","3","*","4","-"])); // 5

// TC = O(N)
// SC = O(N)
