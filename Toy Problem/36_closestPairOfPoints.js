// https://urclass.codestates.com/codeproblem/e488f7a1-047a-481a-82f1-b26852e957a3

// 풀긴 풀었지만, 어째선지 시간초과가 나온다... (풀었다고 할 수 없겠지..ㅠ)
// 아마 레퍼런스에서는 경우의 수를 더 나눠 더 잘게 쪼갠 것 같다.
// 하지만, 내가 푼 알고리즘과 방향성은 같으니 풀었다고 할 수는 없을까...? ㅎㅎ

// 좌표평면 위의 두 점 사이의 거리를 계산하는 함수입니다.
function calculateDistance(p1, p2) {
    const yDiff = p2[0] - p1[0];
    const xDiff = p2[1] - p1[1];
    return Math.sqrt(Math.pow(yDiff, 2) + Math.pow(xDiff, 2));
  }
  
  const closestPairOfPoints = function (points) {
    // 시간복잡도 O(n^2)
    // const result = [];
    // for(let i=0; i<points.length; i++) {
    //   for(let j=i+1; j<points.length; j++) {
    //     let calculated = calculateDistance(points[i], points[j]);
    //     result.push(parseInt(calculated * 100));
    //   }
    // }
    // return Math.min(...result);
  // ----------------------------------------------------------------------
  
    // 전체 points 요소들을 하나하나 쪼갠 후에(mergeSort 구현),
    // 반복문으로 기준(root)을 잡아가면서, 쪼갠 points의 요소들과 기준과의 길이를 구하고 비교해 나간다.
    // 그러면서 가장 작은 값을 구해가면서 result 배열에 넣고
    // 마지막에 result에 담긴 거리 값들 중 가장 최솟값을 리턴한다.
   
    const result = [];
    for(let point of points) {
      const checkDistance = mergeSort(points, point);
      const resultPush = parseInt(calculateDistance(checkDistance[0], point) * 100);
      result.push(resultPush);
    }
  
    function mergeSort(arr, root) {
      if(arr.length === 1) {
        return arr;
      }
  
      const mid = parseInt(arr.length/2);
      const left = arr.slice(0, mid);
      const right = arr.slice(mid);
      return merge(mergeSort(left,root), mergeSort(right, root), root);
  
      function merge(left, right, root) {
        let leftDistance = calculateDistance(left[0], root);
        // 만약 root point와의 거리가 0이라면, 자기 자신이란 뜻이고,
        // 자기 자신은 Pass 해야 하므로, 임의의 최댓값을 부여한다.
        if(leftDistance === 0) {   
          leftDistance = Number.MAX_SAFE_INTEGER;
        }
        let rightDistance = calculateDistance(right[0], root);
        if(rightDistance === 0) {
          rightDistance = Number.MAX_SAFE_INTEGER;
        }
    
        const min = Math.min(leftDistance, rightDistance);
        if(min === leftDistance) {
          return left;
        } else {
          return right;
        }
      }
    }
    
    return Math.min(...result);
  };
  