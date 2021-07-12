// https://urclass.codestates.com/codeproblem/309d61f0-bb41-47aa-b514-0a209a9d637f

// https://im-developer.tistory.com/134
// ㄴ mergeSort 참고 블로그

// mergeSort는 최악의 경우, 최상의 경우 모두 O(logN)의 시간복잡도를 가진다!

const mergeSort = function (arr) {
  
    if(arr.length <= 1) {
      return arr;
    }
  
    let mid = parseInt(arr.length/2);
    let left = arr.slice(0, mid);
    let right = arr.slice(mid);
    // --------------------------------------------- 배열 arr을 계속 쪼개나간 후에
    return merge(mergeSort(left), mergeSort(right));
    
    // --------------------------------------------- 다시 왼쪽 오른쪽을 비교하면서 정렬과 동시에 합쳐(merge) 나간다.
    function merge(left, right) {
      const result = [];
      let leftIdx = 0;
      let rightIdx = 0;
  
      while(left.length > leftIdx && right.length > rightIdx) {
        if(left[leftIdx] > right[rightIdx]) {
          result.push(right[rightIdx]);
          rightIdx++;
        } else {
          result.push(left[leftIdx]);
          leftIdx++;
        }
      }
  
      return result.concat(left.slice(leftIdx), right.slice(rightIdx));
    }
  }