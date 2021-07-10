// https://programmers.co.kr/learn/courses/30/lessons/43164

// 'URclass_자료구조_[DFS]바코드' 문제와 비슷

function solution(tickets) {
    // DFS로 풀어야 한다!
    // 자료구조 코플릿 바코드처럼, 모든 공항을 방문할 수 있도록 마지막 체킹을 해주어야 한다!
    
    let result = [];
    let check = new Array(tickets.length).fill(false);
    tickets.sort();
    
    let from = "ICN";
    return dfs(from, tickets, check, 0);
    
    function dfs(from, tickets, check, count) {
        result.push(from);
        
        if(count === tickets.length) {
            return true;
        }
        
        for(let i=0; i<tickets.length; i++) {
            if(tickets[i][0] === from && check[i] === false) {
                check[i] = true;
                let next = tickets[i][1];
                let lastCheck = dfs(next, tickets, check, count+1);
                if(lastCheck) {
                    return result;
                } else {   // 만약 마지막 체킹이 false일 경우, 원상태로 복귀
                    check[i] = false;
                    result.pop();
                }
            }
        }
        return false;
    }
}