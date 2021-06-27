// https://urclass.codestates.com/codeproblem/7c2e6de0-96ae-4569-84b6-df734c7360e5

const largestProductOfThree = function (arr) {
    arr.sort((a, b) => a - b);
  
    const max1 = arr[arr.length-1] * arr[arr.length-2] * arr[arr.length-3];
    const max2 = arr[0] * arr[1] * arr[arr.length-1];
  
    const realMax = Math.max(max1, max2);
  
    return realMax;
  };
  