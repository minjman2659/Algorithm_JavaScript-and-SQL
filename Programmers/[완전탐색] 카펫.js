// https://programmers.co.kr/learn/courses/30/lessons/42842#qna

function solution(brown, yellow) {
    // 출력되는 가로*세로 === brown + yellow
    // (가로-2) * (세로-2) === yellow
    // (brown+yellow)의 약수들 중에서 가로>=세로, (가로-2) * (세로-2) === yellow 의 조건을 만족하는 값을 구하자
    
    const sum = brown + yellow;
    const sqrt = parseInt(Math.sqrt(sum));
    
    const result = [];
    for(let i=2; i<=sqrt; i++) {   // 약수가 1일 때는 조건에 맞지 않기 때문에 제외
        if(sum % i === 0) {
            result.push([i]);   // 세로 집어 넣기
            result[result.length-1].push(sum/result[result.length-1][0]);  // 가로 집어 넣기
        }
    }
    
    for(let el of result) {    // el[0] = 세로, el[1] = 가로
           if((el[0]-2) * (el[1]-2) === yellow) {
               return [el[1], el[0]];
           }
    }
}