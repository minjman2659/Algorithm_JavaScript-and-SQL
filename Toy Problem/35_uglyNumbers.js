// https://urclass.codestates.com/codeproblem/ebc44c5b-dcf7-4924-a298-dc28aa83d421

const uglyNumbers = function (n) {
  // 2, 3, 5 로만 나누어 떨어지는 수만이 uglyNumber가 될 수 있다.
  // ex) 14, 21, 22는 불가능(각각 7, 11로도 나누어 떨어지기 때문에)
  // 결과적으로 result에 들어있는 수들에 2, 3, 5를 곱해서 나오는 수들은 전부 uglyNumber가 될 수 있다는 것!
  // result의 0번째 인덱스 요소는 1이 되므로, 반복문으로 2, 3, 5를 곱하면서 인덱스를 더해 나가자.
  // 단, 오름차순이기 때문에 대소비교를 통해 작은 수를 먼저 넣어줘야 하며, 들어간 수의 인덱스만 더해가자.

  const result = [1];
  let resultIdx2 = 0;
  let resultIdx3 = 0;
  let resultIdx5 = 0;

  while(result.length < n) {
    const two = 2 * result[resultIdx2];
    const three = 3 * result[resultIdx3];
    const five = 5 * result[resultIdx5];
    const minNum = Math.min(two, three, five);
    result.push(minNum);
    // 만약 minNum이 6이 되서 two와 three 모두 해당될 경우에는, 둘다 인덱스++이 진행된다!
    if(minNum === two) resultIdx2++;
    if(minNum === three) resultIdx3++;
    if(minNum === five) resultIdx5++;
  }

  return result[n-1];
};
 