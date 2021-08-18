// https://urclass.codestates.com/codeproblem/b1a9ca31-53df-4e24-9bba-6ea367bb0aa9

// 좌표평면 위의 두 점 사이의 거리를 계산하는 함수입니다.
function calculateDistance(p1, p2) {
    const yDiffSquared = Math.pow(p2[0] - p1[0], 2);
    const xDiffSquared = Math.pow(p2[1] - p1[1], 2);
    const dist = Math.sqrt(yDiffSquared + xDiffSquared);
    return Math.floor(dist * 100);
  }
  
  // ------------------------------------------ Greedy 처럼 매 순간순간마다 최소 거리를 구하는 알고리즘으로, 문제에 적합하지 않음 (틀린 답변)
  // const TSP = function (places) {
  //   const result = [];
  //   const check = new Array(places.length).fill(false);
  //   places.sort((a, b) => a[0] - b[0]);
  
  //   function resultPush(point, idx) {
  //     check[idx] = true;
  //     result.push(point);
  //     if(result.length === places.length) return;   // 탈출 조건
  //     let min = Number.MAX_SAFE_INTEGER;
  //     let minIdx;
  //     let returnPoint;
  //     for(let i=0; i<places.length; i++) {
  //       if(check[i]) continue;
  //       let compare = calculateDistance([point[0], point[1]], places[i]);
  //       if(min > compare) {
  //         min = compare;
  //         minIdx = i;
  //         returnPoint = places[i];
  //       }
  //     }
  //     resultPush([...returnPoint, min], minIdx);
  //   }
  
  //   resultPush([...places[0], 0], 0);
  //   const sum = result.reduce((acc, cur) => acc + cur[2], 0);
  //   return sum;
  // };
  // ---------------------------------------------------------------------------------------
  
  // 완전탐색인 만큼, 이중 반복문을 통해 정말 다 구해봐야 한다.
  const TSP = function (places) {
    let currentMinDist = Number.MAX_VALUE;
  
    function traverse(lastVisited, visited, totalDist, visitNum) {
      if (visitNum === places.length) {
        if (currentMinDist > totalDist) {  // 결과적으로는 최솟값을 리턴하기 위한 조건문
          currentMinDist = totalDist;
        }
        return;
      }
  
      visited.forEach((value, idx) => {  // 반복문을 통해 방문 순서를 계속 변경해 나간다.
        if (value === false) {
          const distToNext = calculateDistance(places[lastVisited], places[idx]);
          visited[idx] = true;
          traverse(idx, visited, totalDist + distToNext, visitNum + 1);
          visited[idx] = false;
        }
      });
    }
  
    // 각 도시의 현재 방문 여부를 관리하는 배열
    const visited = new Array(places.length).fill(false);
    places.forEach((_, idx) => {
      // 시작점을 반복문을 통해 변경해 나간다.
      visited[idx] = true;
      traverse(idx, visited, 0, 1);   // 시작 인덱스, 방문기록, 총 거리, 방문 수(재귀함수를 탈출하기 위한 조건)
      visited[idx] = false;
    });
  
    return currentMinDist;
  };