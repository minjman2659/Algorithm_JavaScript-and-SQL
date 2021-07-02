// https://urclass.codestates.com/codeproblem/45d1d1e7-a134-475d-86b1-bf747f1f159c

const rotatedArraySearch = function (rotated, target) {
    let left = 0;
    let right = rotated.length-1;
  
    while(left < right) {
      let mid = parseInt((left + right)/2);
  
      if(target === rotated[mid]) {
        return mid;
      }
      if(target === rotated[left]) {
        return left;
      }
      if(target === rotated[right]) {
        return right;
      }
  
      if(rotated[mid] > rotated[left]) {    // 왼쪽이 정렬되어 있고,
        if(target > rotated[left] && target < rotated[mid]) {  // 왼쪽에 target이 포함되어 있다면,
          right = mid - 1;
        } else {   // 오른쪽에 target이 포함되어 있다면,
          left = mid + 1;
        }
      }
  
      else {  // 오른쪽이 정렬되어 있고(rotated[mid] < rotated[left] 가 의미하는 것이 결국은 오른쪽이 정렬되어 있다는 뜻),
        if(target < rotated[right] && target > rotated[mid]) {  // 오른쪽에 target이 포함되어 있다면,
          left = mid + 1;
        } else {   // 왼쪽에 target이 포함되어 있다면,
          right = mid - 1;
        }
      }
    }
  
    return -1;
  };  