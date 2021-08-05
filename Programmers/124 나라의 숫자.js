// https://programmers.co.kr/learn/courses/30/lessons/12899

function solution(n) {
    // 규칙을 파악하자
    // 3진법 => 3으로 나누었을 때 나머지가 뭐냐에 따라 경우의 수가 나뉜다.
    // 0일 때 => 4 / 1일 때 => 1 / 2일 때 => 2
    // 그리고 n을 3으로 나눠 가면서 반복문을 진행한다.
    
    let result = [];
    
    while(n > 0) {
        let div = n % 3;
        n = parseInt(n / 3);
        // 3으로 나누어 떨어질 경우, -1을 추가로 진행한다.
        // 3으로 나누어 떨어진다는 것은 앞자리 수가 바뀌거나 길이가 달라진다는 것이기 때문에
        // 4를 10진수에서 0의 역할을 수행한다고 생각하자.
        if(div === 0) {
            result.unshift(4);
            n--;
        }
        if(div === 1) result.unshift(1);
        if(div === 2) result.unshift(2);
    }
    
    return result.join('');
}