// https://programmers.co.kr/learn/courses/30/lessons/67256

function solution(numbers, hand) {
  const keyPad = {
    1: [0, 0],
    2: [0, 1],
    3: [0, 2],
    4: [1, 0],
    5: [1, 1],
    6: [1, 2],
    7: [2, 0],
    8: [2, 1],
    9: [2, 2],
    '*': [3, 0],
    0: [3, 1],
    '#': [3, 2],
  };
  let leftCurrent = '*';
  let rightCurrent = '#';
  let result = '';
  const leftNums = [1, 4, 7];
  const rightNums = [3, 6, 9];

  // 맨해튼 거리 공식 (|x1 - x2| + |y1 - y2|)
  const distance = ([x1, y1], [x2, y2]) => {
    return Math.abs(x1 - x2) + Math.abs(y1 - y2);
  };

  for (let num of numbers) {
    if (leftNums.includes(num)) {
      leftCurrent = num;
      result += 'L';
    } else if (rightNums.includes(num)) {
      rightCurrent = num;
      result += 'R';
    } else {
      let leftDist = distance(keyPad[num], keyPad[leftCurrent]);
      let rightDist = distance(keyPad[num], keyPad[rightCurrent]);
      if (leftDist > rightDist) {
        rightCurrent = num;
        result += 'R';
      } else if (leftDist < rightDist) {
        leftCurrent = num;
        result += 'L';
      } else {
        if (hand === 'left') {
          leftCurrent = num;
          result += 'L';
        } else {
          rightCurrent = num;
          result += 'R';
        }
      }
    }
  }

  return result;
}
