// https://programmers.co.kr/learn/courses/30/lessons/60057

function solution(s) {
    // n을 1부터 s.length의 half까지 반복문을 돌면서(half 이후 부터는 비교의미가 없기 때문에)
    // 각 개수만큼 문자를 쪼개가면서 비교를 한다.
    // s = "a"일 경우, 1이 리턴되야 하기 때문에, s.length를 미리 넣어놓는다.
    const result = [s.length];
    
    for(let n=1; n<=parseInt(s.length/2); n++) {
        let tmp = '';
        let count = 1;
        let compare = s.slice(0, n);
        for(let i=n; i<s.length; i+=n) {
            if(s.slice(i, i+n) === compare) {
                count++;
            } else {
                if(count > 1) {
                    tmp = tmp + count + compare;
                } else {
                    tmp = tmp + compare;
                }
                count = 1;
                compare = s.slice(i, i+n);
            }
        }
        // 반복문을 모두 돌고 아직 합치지 못한 문자열이 있기 때문에(마지막 문자열)
        // 두가지 경우의 수에 따른 문자열을 마저 합해준다.
        if(count > 1) {
            tmp = tmp + count + compare;
        } else {
            tmp = tmp + compare;
        }
        
        result.push(tmp.length);
    }
    
    return Math.min(...result);
}