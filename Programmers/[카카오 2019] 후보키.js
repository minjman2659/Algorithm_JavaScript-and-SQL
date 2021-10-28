// https://programmers.co.kr/learn/courses/30/lessons/42890

function solution(relation) {
  // 조합 or 멱집합 활용 문제
  // 겁나 어렵다...
  // https://tech.kakao.com/2018/09/21/kakao-blind-recruitment-for2019-round-1/
  // ㄴ 카카오 문제 풀이 _ 정답률 16.09% ...

  let count = 0;
  let reLeng = relation.length;
  let colLeng = relation[0].length;
  let idxArr = relation[0].map((_, idx) => idx);
  let eachColumn = new Array(colLeng).fill(0).map((el) => []);

  const getCombination = (arr, num) => {
    let combResult = [];
    if (num === 1) return arr.map((el) => String(el));
    arr.forEach((fixed, idx, origin) => {
      let rest = origin.slice(idx + 1);
      let comb = getCombination(rest, num - 1);
      let attached = comb.map((el) => fixed + el);
      combResult.push(...attached);
    });
    return combResult;
  };

  function isUnique(tuple) {
    const tmp = tuple.map((item) => item.join(''));
    const set = new Set(tmp);
    if (tmp.length === set.size) return true;
    else return false;
  }

  // column들의 조합
  let colComb = [];
  for (let i = 0; i < colLeng; i++) {
    colComb.push(...getCombination(idxArr, i + 1));
  }

  while (colComb.length > 0) {
    const columns = colComb.shift().split('');

    // 유일성
    const tuple = relation.map((row) => columns.map((col) => row[col]));

    if (isUnique(tuple) === true) {
      // 유일하다면 희소성
      count++;

      const colCombTmp = [];
      for (let i = 0; i < colComb.length; i++) {
        columns.map((col) => {
          if (!colComb[i].includes(col)) {
            colCombTmp.push(colComb[i]);
          }
        });
      }
      colComb = colCombTmp;
    } else {
      continue;
    }
  }

  return count;
}
