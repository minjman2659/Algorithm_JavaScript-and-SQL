const powerSet = function (str) {
  // 중복된 원소 지우기
  let obj = {};
  for (let el of str) {
    if (!(el in obj)) {
      obj[el] = true;
    }
  }
  let arr = Object.keys(obj);

  // arr을 사전식 순서대로 정렬
  arr.sort();

  // --------------------------------------------------------------------
  // 본격적인 부분집합
  const result = [];
  const check = new Array(arr.length).fill(false);

  function dfs(index) {
    if (index === arr.length) {
      makeResult();
    } else {
      check[index] = true;
      dfs(index + 1);
      check[index] = false;
      dfs(index + 1);
    }
  }

  function makeResult() {
    // true인 요소들만 문자열로 합쳐서 result에 push 해주는 모듈
    let temp = '';
    for (let i = 0; i < arr.length; i++) {
      if (check[i]) {
        temp += arr[i];
      }
    }
    result.push(temp);
  }

  dfs(0);
  return result;
};
