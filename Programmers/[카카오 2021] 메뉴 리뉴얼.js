// https://programmers.co.kr/learn/courses/30/lessons/72411

function solution(orders, course) {
  // 조합 모듈
  const getCombination = (arr, num) => {
    let combResult = [];
    if (num === 1) {
      return arr.map((el) => [el]);
    }
    arr.forEach((fixed, idx, origin) => {
      let rest = origin.slice(idx + 1);
      let combinations = getCombination(rest, num - 1);
      let attached = combinations.map((el) => [fixed, ...el]);
      combResult.push(...attached);
    });
    return combResult.map((el) => el.join(''));
  };

  orders = orders.map((el) => el.split('').sort());
  const menuCount = {};
  const menuComb = {};
  for (let order of orders) {
    for (let num of course) {
      if (!(String(num) in menuCount)) menuCount[num] = {};
      if (order.length >= num) {
        let menu = getCombination(order, num);
        for (let el of menu) {
          if (!(el in menuComb)) {
            menuComb[el] = 0;
          }
          menuComb[el]++;
        }
      }
    }
  }

  // 주문 개수 2개 미만은 걸러내기
  for (let el in menuComb) {
    if (String(el.length) in menuCount && menuComb[el] > 1) {
      menuCount[String(el.length)][el] = menuComb[el];
    }
  }

  const answer = [];
  for (let count in menuCount) {
    let arr = Object.values(menuCount[count]).map((el) => Number(el));
    let max = Math.max(...arr);
    for (let i in menuCount[count]) {
      if (menuCount[count][i] === max) answer.push(i);
    }
  }
  return answer.sort();
}
