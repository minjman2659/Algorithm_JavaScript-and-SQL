// https://urclass.codestates.com/codeproblem/bddd30d8-44c1-4039-8c49-134555c03552

const getItemFromTwoSortedArrays = function (arr1, arr2, k) {
    // O(logN)의 시간복잡도 문제 풀이는 나중에 풀어보자...!
  
    let left = 0;
    let right = 0;
    let index = 0;
    let result;
  
    while(k > index) {
      if(arr1[left] > arr2[right]) {
        result = arr2[right];
        right++;
      } else {
        result = arr1[left];
        left++;
      }
      index++;
    }
  
    return result;
  };
  