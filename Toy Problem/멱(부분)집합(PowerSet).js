const powerSet = (arr) => {
  arr.sort(); // 숫자일 경우에는 arr.sort((a, b) => a - b);
  const result = [];
  const check = new Array(arr.length).fill(false);

  const resultPush = (arr) => {
    const tmp = [];
    for (let i = 0; i < arr.length; i++) {
      if (check[i]) {
        tmp.push(arr[i]);
      }
    }
    result.push(tmp);
  };

  const checkArr = (startNum) => {
    for (let i = startNum; i < arr.length; i++) {
      check[i] = true;
      resultPush(arr);
      checkArr(i + 1);
      check[i] = false;
    }
  };

  checkArr(0);
  result.unshift([]);

  return result;
};
