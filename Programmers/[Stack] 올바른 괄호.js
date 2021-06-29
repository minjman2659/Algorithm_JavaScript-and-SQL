// https://programmers.co.kr/learn/courses/30/lessons/12909

function solution(s){
    
    let stack = [];
    
    if(s[0] === ")") {
        return false;
    }
    
    for(let el of s) {
        if(el === "(") {
            stack.push(")");         
        } else if(el === ")" && stack.length > 0) {
            stack.pop();
        } else {
            return false;
        }
    }
    
    return stack.length === 0;
}