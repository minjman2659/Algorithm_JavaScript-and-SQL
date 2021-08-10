// https://programmers.co.kr/learn/courses/30/lessons/43238


    // 한번에 풀지는 못한 문제. 왜 이게 이분탐색인지 한참 고민했다. (이걸 이분탐색으로 한번에 생각해서 푼 사람들 대단..)
    // '제한사항'을 보고, 단순 반복문으로는 상당히 오래걸릴 수 있는 문제들은 이분탐색을 의심해보자.
    
    // 입국 심사를 기다리는 n명의 사람을 처리할 수 있는 min과 max 사이에서 이분탐색을 하는 문제.
    // 단, 정확한 답을 찾아내는 것이 아니라, 특정 조건을 만족하는 범위에서 최솟값(min)을 구해야 하는 문제!
    // 초기 min : 아무도 심사를 받지 않는 0  (min = 최종적으로 리턴해야 하는 값)
    // 초기 max : times 배열 내 가장 큰 요소 * n (가장 오래걸리는 심사관만 입국을 처리하는 경우)
    // min과 max 사이에서 mid를 구하고, mid를 n과 비교하면서 심사를 받는데 걸리는 시간의 최솟값(min)을 구해간다.
    // ex) 왼쪽 입출력 예시의 경우, 28과 29 모두 리턴될 수 있는 값이지만, 그 중 최솟값인 28만이 답이된다.
        // (실제 풀이 과정에서 29가 등장하지는 않는다. 단순 예시로만 생각하자)

function solution(n, times) {
    let min = 0;
    let max = Math.max(...times) * n;
    
    while(min <= max) {
        let people = 0;
        let mid = parseInt((min + max) / 2);
        // mid 시간 동안 각 심사관 한명당 처리할 수 있는 사람의 수를 구하기 위한 반복문
        for(let time of times) {
            people = people + parseInt(mid/time);
        }
        // 우리가 구해야 하는 것은 최소 시간이기 때문에, max쪽 조건에 '='를 붙여야 한다!
        if(people >= n) {
            max = mid - 1;
        } else {
            min = mid + 1;
        }
    }
    return min;
}
