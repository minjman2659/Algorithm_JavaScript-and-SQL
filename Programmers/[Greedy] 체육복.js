// https://programmers.co.kr/learn/courses/30/lessons/42862

function solution(n, lost, reserve) {
    lost.sort((a, b) => a - b);
    reserve.sort((a, b) => a - b);
    
    // reserve에 있는 학생이 lost에도 있을 경우, 해당 학생은 체육 수업을 들을 수 있으면서 다른 학생을 빌려줄 수 없다.
    // lost 배열에서 해당 학생을 없애고, reserve에서도 체크 처리를 해서 건너 뛸 수 있도록 해야한다.
    // reserve에서 그냥 splice 해버리면, 반복문에 영향을 가기 때문에 false로 체킹 처리
    for(let j=0; j<reserve.length; j++) {
        if(lost.includes(reserve[j])) {
            lost.splice(lost.indexOf(reserve[j]), 1);
            reserve[j] = false;
        }
    }
    
    for(let i=0; i<reserve.length; i++) {
        if(reserve[i] === false) {
            continue;
        }
        if(lost.includes(reserve[i]-1)) {
            lost.splice(lost.indexOf(reserve[i]-1), 1);
            continue;
        }
        if(lost.includes(reserve[i]+1)) {
            lost.splice(lost.indexOf(reserve[i]+1), 1);
            continue;
        }
    }
    
    return n - lost.length;
}