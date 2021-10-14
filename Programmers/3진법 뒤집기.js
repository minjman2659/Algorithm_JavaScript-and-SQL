// https://programmers.co.kr/learn/courses/30/lessons/68935

function solution(n) {
  const threeNum = n.toString(3); // 10진법을 3진법으로 변환
  const reverseThreeNum = threeNum.split('').reverse().join(''); // 3진법을 앞뒤 반전
  return parseInt(reverseThreeNum, 3); // 다시 10진법으로 변환하여 리턴
}
