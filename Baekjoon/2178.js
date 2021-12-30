// https://www.acmicpc.net/problem/2178

function solution(N, M, matrix) {
    const start = [0, 0, 1];  // x, y, count
    const dst = [N-1, M-1];
    const dx = [-1, 1, 0, 0];
    const dy = [0, 0, -1, 1];

    const bfs = (path) => {
        const queue = [path];
        while(queue.length > 0) {
            let [x, y, count] = queue.shift();
            if(x === dst[0] && y === dst[1]) {
                return count;
            }
            for(let i=0; i<4; i++) {
                let nx = x + dx[i];
                let ny = y + dy[i];
                if(nx === 0 && ny === 0) continue;
                if(nx >= 0 && nx < N && ny >= 0 && ny < M) {
                    if(matrix[nx][ny] === 1 || matrix[nx][ny] > count) {
                        matrix[nx][ny] = count+1;
                        queue.push([nx, ny, count+1]);
                    }
                }
            }
        }
    }
    return bfs(start);
}