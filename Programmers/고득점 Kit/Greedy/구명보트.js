// https://programmers.co.kr/learn/courses/30/lessons/42885

function solution(people, limit) {
  // people 배열을 오름차순을 한 후, 가장 작은 값과 가장 큰 값을 더해서(한번에 최대 2명씩 구명보트의 최소 개수를 구하기 위해)
  // 만약 limit를 초과하지 않는다면, 그 둘을 없애고 count를 1씩 늘려가고,
  // 만약 초과한다면, 가장 큰 값만 없애고 그 다음 큰 값과 작은 값을 더해서 다시 판단해 나간다.

  let count = 0;
  let leftIndex = 0;
  let rightIndex = people.length - 1;

  const copied = [...people];
  copied.sort((a, b) => b - a);
  while (leftIndex <= rightIndex) {
    const sum = copied[leftIndex] + copied[rightIndex];
    if (sum <= limit) {
      rightIndex--;
    }
    leftIndex++;
    count++;
  }

  return count;
}
