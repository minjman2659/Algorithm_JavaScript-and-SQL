// https://programmers.co.kr/learn/courses/30/lessons/42883

function solution(number, k) {
    number = String(number);
    let stack = [];
    for(let i=0; i<number.length; i++) {
        while(stack[stack.length-1] < number[i] && k > 0) {
            stack.pop();
            k--;
        }
        stack.push(number[i]);
    }
    
    stack.splice(stack.length-k, k);
    return stack.join('');
}