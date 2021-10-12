// https://programmers.co.kr/learn/courses/30/lessons/68644

function solution(numbers) {
  let result = [];
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      let number = numbers[i] + numbers[j];
      if (!result.includes(number)) {
        result.push(number);
      }
    }
  }

  return result.sort((a, b) => a - b);
}
