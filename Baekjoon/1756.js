// https://www.acmicpc.net/problem/1756

function solution(D, N, oven, doughs) {
  let end = D - 1;

  const getBinarySearch = (start, num) => {
    while (start < end) {
      let mid = parseInt((start + end) / 2);
      if (num <= oven[mid]) {
        start = mid + 1;
      } else if (num > oven[mid]) {
        end = mid;
      }
    }
  };

  for (let i = 0; i < N; i++) {
    getBinarySearch(0, doughs[i]);
    end--;
    if (end < 0) {
      return 0;
    }
  }

  return end + 1;
}
