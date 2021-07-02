// https://urclass.codestates.com/codeproblem/b06d36ed-129a-44e5-a624-90a8768848ad

const binarySearch = function (arr, target) {
    let high = arr.length-1;
    let low = 0;
  
    while(high > low) {
      let mid = parseInt((high + low) / 2);
  
      if(target === arr[high]) {
        return high;
      }
      if(target === arr[low]) {
        return low;
      }
      if(target === arr[mid]) {
        return mid;
      }
  
      if(target > arr[mid]) {
        low = mid + 1;
      } else if(target < arr[mid]) {
        high = mid - 1;
      }
    }
  
    return -1;
  };