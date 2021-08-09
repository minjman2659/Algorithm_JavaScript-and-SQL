// https://programmers.co.kr/learn/courses/30/lessons/12973

function solution(s) {
    // s를 반복적으로 돌면서, s[i]와 s[i+1]이 같을 경우 삭제시키는 문제.
    // 하지만 주의해야할 것이, 짝을 제거했을 시 기존에 있는 알파벳과 짝 제거 후의 알파벳이 같을 경우,
    // 해당 알파벳 짝 역시 삭제된다는 것이다.
    // 즉, 반복문을 돌아야하는 원본 값이 계속 변한다는 것이므로,
    // 원본 대신 짝 제거를 해줄 수 있는 stack 배열을 통해 짝을 제거해 나간다.
    
    const stack = [];
    
    for(let i=0; i<s.length; i++) {
        stack.push(s[i]);
        if(stack[stack.length-2] === stack[stack.length-1]) {
            stack.pop();
            stack.pop();
        }
    }
    
    return Number(stack.length === 0);
}