// https://urclass.codestates.com/codeproblem/1cfb56ab-cee1-4474-9337-aa147a70fbc8

const inequalityNumber = function (signs) {
  // 이것도 DFS 였다니...
  const aux = (idx, signs, result, digits, isVisited) => {
    if (idx === signs.length) {
      return Number(result.join(''));
    }

    const sign = signs[idx];
    for (let i = 0; i < digits.length; i++) {
      const right = digits[i];
      if (isVisited[right] === true) {
        continue;
      }
      if (idx >= 0) {
        const left = result[result.length - 1];
        if (sign === '<' && left >= right) continue;
        if (sign === '>' && left <= right) continue;
      }
      isVisited[right] = true;
      result.push(right);
      const target = aux(idx + 1, signs, result, digits, isVisited);
      if (target !== false) {
        return target;
      } else {  // 만약 체킹에서 false가 뜰 경우, 원상태로 돌리고 다음 digits의 요소로 넘어간다.
        isVisited[right] = false;
        result.pop();
      }
    }

    return false;
  };

  signs = signs.split(' ');
  const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  // aux의 세번째 인자 '[]'는 result 라고 생각하자.
  const min = aux(-1, signs, [], digits, Array(10).fill(false));
  const max = aux(-1, signs, [], digits.reverse(), Array(10).fill(false));
  return max - min;
};