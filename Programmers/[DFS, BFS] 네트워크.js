// https://programmers.co.kr/learn/courses/30/lessons/43162

// 'URclass_자료구조_[BFS/DFS]연결된 정점들' 문제와 비슷

function solution(n, computers) {
    // 주어진 computers는 인접 행렬
    let check = new Array(n).fill(false);
    let count = 0;
    
    for(let i=0; i<computers.length; i++) {
        if(check[i] === false) {
            dfs(i, computers, check);
            count++;
        }
    }
    
    // function bfs(from, matrix, check) {
    //     let queue = [from];
    //     check[from] = true;
    //     while(queue.length > 0) {
    //         let now = queue.shift();
    //         for(let j=0; j<matrix[now].length; j++) {
    //             if(matrix[now][j] === 1 && check[j] === false) {
    //                 check[j] = true;
    //                 queue.push(j);
    //             }
    //         }
    //     }
    // }
    
    function dfs(from, matrix, check) {
        check[from] = true;
        for(let j=0; j<matrix[from].length; j++) {
            if(matrix[from][j] === 1 && check[j] === false) {
                let next = j;
                dfs(next, matrix, check);
            }
        }
    }
    
    return count;
}