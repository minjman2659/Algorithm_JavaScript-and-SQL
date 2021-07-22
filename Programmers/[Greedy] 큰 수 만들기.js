// https://programmers.co.kr/learn/courses/30/lessons/42883

function solution(number, k) {
    // stack을 통해 max값을 구하면서
    // stack에 들어오는 수들마다 지속적으로 number의 다음 인덱스와 비교를 진행한다.
    // 만약 stack에 마지막으로 들어온 숫자보다 number[i]가 더 크다면, stack에서 제거하고
    // 제거할 수의 개수인 k를 1씩 줄여간다.
    
    number = String(number);
    let stack = [];
    
    for(let i=0; i<number.length; i++) {
        while(Number(stack[stack.length-1]) < Number(number[i]) && k > 0) {
            stack.pop();
            k--;
        }
        stack.push(number[i]);
    }
    
    // k가 여전히 0보다 클 경우(아직 제거해야할 숫자가 남았을 경우)
    // 이미 number의 끝자락에 있는 요소들은 앞의 요소들보다 작기 때문에 그냥 남은 k만큼 제거하자
    stack.splice(stack.length-k, k);
    return stack.join('');
}