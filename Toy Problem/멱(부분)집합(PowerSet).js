const powerSet = (arr) => {
  arr.sort(); // 숫자일 경우에는 arr.sort((a, b) => a - b);
  const result = [];
  const check = new Array(arr.length).fill(false);

  const makeResult = () => {
    const tmp = [];
    for (let i = 0; i < arr.length; i++) {
      if (check[i]) {
        tmp.push(arr[i]);
      }
    }
    result.push(tmp);
  };

  const dfs = (index) => {
    //* 탈출조건
    if (index === arr.length) {
      makeResult();
    } else {
      check[index] = true;
      dfs(index + 1);
      check[index] = false;
      dfs(index + 1);
    }
  };

  dfs(0);
  return result;
};
