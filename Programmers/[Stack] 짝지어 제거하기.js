// https://programmers.co.kr/learn/courses/30/lessons/12973

function solution(s)
{
    let stack = [];
    for(let i=0; i<s.length; i++) {
        stack.push(s[i]);
        if(stack[stack.length-2] === stack[stack.length-1]) {
            stack.pop();
            stack.pop();
        }
    }
    
    if(stack.length > 0) {
        return 0;
    } else {
        return 1;
    }
}