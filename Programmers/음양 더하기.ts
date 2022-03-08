// https://programmers.co.kr/learn/courses/30/lessons/76501

function solutionOfAddingYinAndYang(
  absolutes: number[],
  signs: boolean[]
): number {
  let sum: number = 0;
  for (let i = 0; i < signs.length; i++) {
    if (signs[i] === true) sum += absolutes[i];
    else sum -= absolutes[i];
  }

  return sum;
}
