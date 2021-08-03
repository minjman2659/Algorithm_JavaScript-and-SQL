// https://programmers.co.kr/learn/courses/30/lessons/42586

function solution(progresses, speeds) {
    // 이전에 자료구조 '[Queue] 박스 포장' 과 완전히 동일한 문제...
    
    // 먼저 작업이 100%가 되기 까지의 일자 수를 구한다.
    // progresses의 각 요소에 해당되는 speeds 요소들을 합하면서 100이 되면, 
    // days 배열에 푸시한다.
    const days = [];
    for(let i=0; i<progresses.length; i++) {
        let count = 0;
        while(progresses[i] < 100) {
            progresses[i] = progresses[i] + speeds[i];
            count++;
        }
        days.push(count);
    }
    
    // 각 일자 수를 모두 구했으면, 배포 가능한 개수를 구할 차례
    const result = [];
    let compare = days[0];
    // 아래에서 compare 변수와 days의 다음 요소들을 비교해 나갈 것이기 때문에,
    // 마지막 요소인 'days[days.length-1]' 까지 비교를 완료한 후 result 배열에 넣어줘야 하므로,
    // 넉넉하게 큰 수를 맨 뒤에 넣어준다.
    // (즉, 마지막 인덱스까지 비교를 통해 result 안에 넣어주기 위한 푸시)
    days.push(101);         
    let returnCount = 1;
    for(let i=1; i<days.length; i++) {
        if(compare >= days[i]) {
            returnCount++;
        } else {
            compare = days[i];
            result.push(returnCount);
            returnCount = 1;
        }
    }
    
    return result;
}