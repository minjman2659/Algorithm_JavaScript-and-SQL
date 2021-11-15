// https://programmers.co.kr/learn/courses/30/lessons/64064#qna

function solution(user_id, banned_id) {
  // 먼저 순열로 permutation(user_id, banned_id.length)를 진행한다.
  // 그리고 해당 순열 결과 값(배열)과 banned_id가 일치하는 것들을 result 배열에 따로 모은다.
  // result에서 같은 값들은 제외시킨다.
  // 필터링 된 결과 개수를 리턴한다.

  const result = [];
  const getPermu = getPermutation(user_id, banned_id.length);

  for (let arr of getPermu) {
    let tmp = [];
    for (let i = 0; i < banned_id.length; i++) {
      if (arr[i].length === banned_id[i].length) {
        if (isContain(banned_id[i], arr[i])) tmp.push(arr[i]);
        else break;
      } else {
        break;
      }
    }
    if (tmp.length === banned_id.length) {
      tmp.sort();
      let strTmp = JSON.stringify(tmp);
      if (!result.includes(strTmp)) {
        result.push(strTmp);
      }
    }
  }

  return result.length;

  // 순열 모듈
  function getPermutation(arr, num) {
    let perResult = [];
    if (num === 1) return arr.map((el) => [el]);
    arr.forEach((fixed, idx, origin) => {
      let rest = origin.filter((_, index) => index !== idx);
      let comb = getPermutation(rest, num - 1);
      let attached = comb.map((el) => [fixed, ...el]);
      perResult.push(...attached);
    });
    return perResult;
  }
  // 체킹 모듈
  function isContain(str1, str2) {
    for (let i = 0; i < str1.length; i++) {
      if (str1[i] === '*') continue;
      if (str1[i] !== str2[i]) return false;
    }
    return true;
  }
}
