// https://urclass.codestates.com/codeproblem/2b959b1d-f8d2-4af8-ab2f-d5f730b5c0a3

const LSCS = function (arr) {
    // 연속된 부분들의 합 중 가장 큰 값을 리턴
    // 시간복잡도 O(n)을 가져야 한다. => 즉, 이중 반복문으로 풀지 말라
    // sum에는 0을 할당, max를 arr[0]으로 할당하고 arr의 요소를 모두 더해가다가,
    // 음수를 만나면 그 동안의 최댓값을 max 변수에 저장한 상태에서 sum을 0으로 만든다.
    // 그리고 다시 sum을 구해가는 식으로 푼다면...?
  
    let max = arr[0];
    let sum = 0;
    for(let i=0; i<arr.length; i++) {
      sum = sum + arr[i];
      max = Math.max(max, sum);
      if(sum < 0) {
        sum = 0;
      }
    }
  
    return max;
  };
  