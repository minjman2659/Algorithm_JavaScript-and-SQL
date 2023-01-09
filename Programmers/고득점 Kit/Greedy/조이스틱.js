// https://programmers.co.kr/learn/courses/30/lessons/42860

function solution(name) {
  const digit = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  let alphaCount = 0;
  let cursorCount = name.length - 1;

  [...name].forEach((s, i) => {
    const reverseDigit = digit.slice().reverse();
    alphaCount += Math.min(reverseDigit.indexOf(s) + 1, digit.indexOf(s));

    // 연속되는 A의 개수 count
    let indexOfA = i + 1;
    while (indexOfA < name.length && name[indexOfA] === "A") {
      indexOfA++;
    }

    cursorCount = Math.min(
      cursorCount, // 처음부터 쭉 가는 경우
      i * 2 + name.length - indexOfA, // 처음부터 갔다가 연속 A의 첫번째를 만나고 다시 돌아오는 경우
      i + 2 * (name.length - indexOfA) // 아예 처음부터 뒤로 갔다가 연속 A의 마지막을 만나고 다시 돌아가는 경우
    );
  });

  return alphaCount + cursorCount;
}
