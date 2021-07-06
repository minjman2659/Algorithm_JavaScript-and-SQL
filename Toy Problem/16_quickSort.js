// https://urclass.codestates.com/codeproblem/c18f247f-563b-48fd-a46a-039d0dfd4082

function quickSort(arr, callback = (val) => val) {
    // 탈출 조건
    if (arr.length <= 1) {
      return arr;
    }
  
    const mid = arr[0];
    const left = [];
    const right = [];
  
    for (let i=1; i < arr.length; i++) {
      if (callback(arr[i]) < callback(mid)) {
        left.push(arr[i]);
      }
      else {
        right.push(arr[i]);
      }
    }
  
    return [...quickSort(left, callback), mid, ...quickSort(right, callback)];
  }
  