// https://programmers.co.kr/learn/courses/30/lessons/43163

// 'Toy Problem_15.PrimePassword' 문제와 비슷

function solution(begin, target, words) {
  // 시작점이 begin 에서 목적지 target 까지의 최소 거리를 구해야 하는 문제이기 때문에
  // BFS로 푸는 것이 적당하다! (두 점 사이의 최단거리 문제는 BFS)

  if (!words.includes(target)) return 0;

  const check = new Array(words.length).fill(null);

  const queue = [[begin, 0]];
  while (queue.length > 0) {
    let [now, result] = queue.shift();
    if (now === target) return result;
    for (let i = 0; i < words.length; i++) {
      if (!check[i] && isCheck(now, words[i])) {
        check[i] = true;
        queue.push([words[i], result + 1]);
      }
    }
  }

  function isCheck(str1, str2) {
    let count = 0;
    for (let i = 0; i < str1.length; i++) {
      if (str1[i] !== str2[i]) count++;
      if (count > 1) break;
    }
    if (count === 1) return true;
    else return false;
  }
}
