// https://programmers.co.kr/learn/courses/30/lessons/42888

function solution(record) {
    // "Enter"와 "Change"일 경우(=Leave가 아닐 경우) 아이디(키)와 닉네임(값) 쌍을 객체에 저장한다.
        // 어차피 "Change"와 두번째 "Enter"일 경우에는 변경된 닉네임이 기록되기 때문에 계속 갱신해 나간다.
    // 객체 obj를 완성한 후, 다시 record를 반복문으로 돌면서 "Enter"와 "Leave"의 경우에 따라 알맞는 문장을 채워 넣는다.
    
    const obj = {};
    for(let el of record) {
        if(el[0] !== "L") {
            let spl = el.split(' ');
            obj[spl[1]] = spl[2];
        }
    }
    
    const result = [];
    for(let el of record) {
        if(el[0] === "E") {
            let spl = el.split(' ');
            result.push(`${obj[spl[1]]}님이 들어왔습니다.`);
        } else if(el[0] === "L") {
            let spl = el.split(' ');
            result.push(`${obj[spl[1]]}님이 나갔습니다.`);
        }
    }
    
    return result;
}