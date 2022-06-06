// https://urclass.codestates.com/codeproblem/c387da82-ea11-4668-9dbc-aabff6f5bae5

//TODO (1) powerSet을 이용한 나의 풀이 => 통과는 하지만, 더 효율적인 방법은 아래의 DP이다.
const LIS = function (arr) {
  const check = new Array(arr.length).fill(false);
  const subsequence = [];

  const subsequencePush = (arr) => {
    let tmp = [];
    for (let i = 0; i < arr.length; i++) {
      if (check[i]) {
        tmp.push(arr[i]);
      }
    }
    subsequence.push(tmp);
  };

  const checkArr = (startNum) => {
    for (let i = startNum; i < arr.length; i++) {
      check[i] = true;
      subsequencePush(arr);
      checkArr(i + 1);
      check[i] = false;
    }
  };

  checkArr(0);
  subsequence.sort((a, b) => a.length - b.length);
  // --------------------- 여기까지 엄격하게 오름차순으로 정렬된 부분배열 구현 완료

  // 오름차순 판별 모듈
  const isAscending = (arr) => {
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < arr[i - 1]) {
        return false;
      }
    }
    return true;
  };

  // 이제 부분배열을 모아 놓은 subsequence 배열에서 오름차순인 부분배열들만 따로 모아
  // 그 중 가장 긴 부분배열을 리턴한다.
  const result = [];
  for (let el of subsequence) {
    if (isAscending(el)) {
      result.push(el);
    }
  }

  const longest = result.reduce((acc, cur) => {
    if (acc.length < cur.length) {
      return cur;
    } else {
      return acc;
    }
  }).length;

  return longest;
};

// ---------------------------------------------------

//TODO (2) dynamic programming with tabulation: O(N^2)
const LIS = function (arr) {
  let result = 0;
  const N = arr.length;
  // lis[i]는 i에서 끝나는 LIS의 길이를 저장
  // 최소한 각 요소 하나로 LIS를 만들 수 있으므로 1로 초기화한다.
  const lis = Array(N).fill(1);
  for (let i = 1; i < N; i++) {
    // i에서 끝나는 LIS의 길이
    for (let j = 0; j < i; j++) {
      // i 이전의 인덱스만 검사하면 된다.
      // i는 1부터 시작하므로, 짧은 길이부터 검사한다. (bottom-up 방식)
      if (arr[i] > arr[j]) {
        lis[i] = Math.max(lis[i], lis[j] + 1);
      }
    }
    result = Math.max(result, lis[i]);
  }
  return result;
};
