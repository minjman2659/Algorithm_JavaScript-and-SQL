/**
 * @param {number[][]} graph
 * @return {number[][]}
 */

// https://leetcode.com/problems/all-paths-from-source-to-target/

 var allPathsSourceTarget = function(graph) {
    
    // 조건 0 <= graph[i][j] < n 와 graph[i][j] != i (i.e., there will be no self-loops)를 통해 
    // 정점 0(시작점)은 무조건 존재하며, 최대 정점(목적지)은 graph.length-1 이란 것을 알 수 있다.
    // DFS 방식(재귀)으로 풀어야한다 (...?)
    
    let result = [];
    let destination = graph.length-1;
    
    function dfs(from, arr) {
        if(from === destination) {     // 탈출 조건
            result.push(arr.slice());
            return;
        }
        
        for(let i=0; i<graph[from].length; i++) {
            arr.push(graph[from][i]);
            dfs(graph[from][i], arr);
            arr.pop();                 // 각 DFS 탐색을 마치고 초기화 시키기
        }
        
        return result;
    }
    
    return dfs(0, [0]);
};