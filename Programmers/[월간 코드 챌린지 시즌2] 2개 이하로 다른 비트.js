// https://programmers.co.kr/learn/courses/30/lessons/77885

function solution(numbers) {
  var result = [];
  numbers.forEach((number) => {
    let str = '0' + number.toString(2);
    if (str[str.length - 1] === '0') {
      result.push(number + 1);
    } else {
      for (let i = str.length; i >= 0; i--) {
        if (str[i] === '0') {
          // 2진수를 10진수로 변환
          result.push(
            parseInt(
              str.slice(0, i) + '1' + '0' + str.slice(i + 2, str.length),
              2
            )
          );
          break;
        }
      }
    }
  });
  return result;
}
