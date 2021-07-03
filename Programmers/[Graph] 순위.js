// https://programmers.co.kr/learn/courses/30/lessons/49191

function solution(n, results) {
    // 인접 행렬을 만들고, 이기는 단방향 간선은 1 / 지는 단방향 간선은 -1로 / 자기 자신은 0으로 둔다.
    // false인 간선들은 순위를 알 수 없을 경우
    let max = 0;
    for(let node of results) {
        max = Math.max(max, ...node);
    }
    
    let matrix = new Array(max).fill(0).map((el) => el = new Array(max).fill(false));
    for(let vertex of results) {
        matrix[vertex[0]-1][vertex[1]-1] = 1;
        matrix[vertex[1]-1][vertex[0]-1] = -1;
        matrix[vertex[0]-1][vertex[0]-1] = 0;
        matrix[vertex[1]-1][vertex[1]-1] = 0;
    }
    // --------------------------------------- 인접행렬 matrix 완성
    
    // 각 정점을 거쳐서 이기면 1, 지면 -1 할당
    // ex) a->key , key->b 이면 a->b 이기 때문에 matrix[a][b] = 1 이 된다. (플로이드 와샬 알고리즘)
    for(let key=0; key<matrix.length; key++) {
        for(let a=0; a<matrix.length; a++) {
            for(let b=0; b<matrix.length; b++) {
                if(matrix[a][key] === 1 && matrix[key][b] === 1) {
                    matrix[a][b] = 1;
                } else if(matrix[a][key] === -1 && matrix[key][b] === -1) {
                    matrix[a][b] = -1;
                }
            }
        }
    }
    
    // 이제 각 정점들을 돌면서, false가 없는 정점의 개수를 구하면 된다! (순위를 알 수 있는 정점의 개수)
    let count = 0;
    for(let check of matrix) {
        if(!check.includes(false)) {
            count++;
        }
    }
    
    return count;
}