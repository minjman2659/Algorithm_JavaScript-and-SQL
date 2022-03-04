// https://programmers.co.kr/learn/courses/30/lessons/12971

function solution(sticker) {
  // dp 문제
  // dp[N]의 의미 = N번째 스티커까지 돌았을 때, 구할 수 있는 가장 큰 수
  // ex) 첫번째 예시에서 dp[2] = 19 (14 + 5)
  // but, 한가지 더 생각해 봐야하는 점은:
  // 1) 만약 첫번째 스티커를 뗐을 경우, 마지막 스티커는 사용 불가능 (dp1)
  // 2) 만약 첫번째 스티커를 안뗏을 경우, 마지막 스티커는 사용 가능 (dp2)
  // 즉, 두 경우의 dp1, dp2 중에서 더 큰 수를 리턴 해야한다.
  const N = sticker.length;
  const dp1 = new Array(N).fill(0); // 첫번째 스티커 떼는 경우
  const dp2 = new Array(N).fill(0); // 첫번째 스티커 안떼는 경우

  dp1[0] = sticker[0];
  dp1[1] = sticker[0]; // dp1은 첫번째 스티커를 떼는 경우이기 때문에 인덱스 1까지는 sticker[0]의 값을 가진다.
  dp2[0] = 0;
  dp2[1] = sticker[1]; // dp2는 결국 두번째 스티커를 떼는 경우와 같다.

  if (N === 1) return sticker[0];

  for (let i = 2; i < N; i++) {
    if (i === N - 1) {
      // dp1의 경우에는 마지막 스티커를 포함하면 안된다.
      dp1[i] = dp1[i - 1];
    } else {
      // 현재 스티커(sticker[i])를 포함했을 때와 안했을 때 중 더 큰 값
      dp1[i] = Math.max(dp1[i - 1], dp1[i - 2] + sticker[i]);
    }
    dp2[i] = Math.max(dp2[i - 1], dp2[i - 2] + sticker[i]);
  }

  return Math.max(dp1[N - 1], dp2[N - 1]);
}
