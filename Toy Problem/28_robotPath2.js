// https://urclass.codestates.com/codeproblem/f69ae6a9-485a-4f9e-a201-6976809833db

const robotPath2 = function (room, src, sDir, dst, dDir) {
    // 역시 BFS로 풀어본다.
    let count = 0;   // 방향 전환할 때마다 늘어가는 count 변수
    let checkDir = 1;  // 직진을 체크하기 위한 변수
    let start = [...src, sDir, count, checkDir];
  
    return BFS(start);
  
    function BFS(arr) {
      let queue = [arr];
      while(queue.length > 0) {
        let [Y, X, dir, count, checkDir] = queue.shift();
      
        if(Y === dst[0] && X === dst[1]) {   // 목적지에 도달한 경우
          room[Y][X] = count;
          let abs = Math.abs(dir-dDir);
          if(abs === 3) {
            abs = 1;
          }
          return count + abs + checkDir-1;
        }
          
        if(Y < 0 || Y >= room.length || X < 0 || X >= room[0].length || room[Y][X] === 1) {
          continue;
        }
  
        if(room[Y][X] === 0) {
          room[Y][X] = count;
        } else {
          continue;
        }
  
        if(dir === 1) {
          queue.push([Y-1, X, dir, count, checkDir]);         // 상
          queue.push([Y, X+1, dir+1, count+1, checkDir+1]);   // 우
          queue.push([Y+1, X, dir+2, count+2, checkDir+1]);   // 하
          queue.push([Y, X-1, dir+3, count+1, checkDir+1]);   // 좌
        } else if(dir === 2) {
          queue.push([Y-1, X, dir-1, count+1, checkDir+1]);   // 상
          queue.push([Y, X+1, dir, count, checkDir]);         // 우
          queue.push([Y+1, X, dir+1, count+1, checkDir+1]);   // 하
          queue.push([Y, X-1, dir+2, count+2, checkDir+1]);   // 좌
        } else if(dir === 3) {
          queue.push([Y-1, X, dir-2, count+2, checkDir+1]);   // 상
          queue.push([Y, X+1, dir-1, count+1, checkDir+1]);   // 우
          queue.push([Y+1, X, dir, count, checkDir]);         // 하
          queue.push([Y, X-1, dir+1, count+1, checkDir+1]);   // 좌
        } else if(dir === 4) {
          queue.push([Y-1, X, dir+1, count+1, checkDir+1]);   // 상
          queue.push([Y, X+1, dir-2, count+2, checkDir+1]);   // 우
          queue.push([Y+1, X, dir-1, count+1, checkDir+1]);   // 하
          queue.push([Y, X-1, dir, count, checkDir]);         // 좌
        }
      }
    }
  };
  