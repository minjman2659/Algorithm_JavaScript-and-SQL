// https://programmers.co.kr/learn/courses/30/lessons/12946

function solution(n) {
    var answer = [];
    
    const hanoi = (num, start, mid, end) => {
        if(num === 1) {           // 탈출 조건
            answer.push([start, end])
            return;
        }
        
        hanoi(num-1, start, end, mid);
        answer.push([start, end]);
        hanoi(num-1, mid, start, end);
    }
    
    hanoi(n, 1, 2, 3);
    return answer;
}