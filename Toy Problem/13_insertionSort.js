// https://urclass.codestates.com/codeproblem/9347b40b-4775-4ab9-92fb-63bbed16a14f

const insertionSort = function (arr, callback = (val) => val) {
    // 삽입정렬은 뚝 뚝 잘라가면서 대소비교를 통해 정렬하는 방법
  
    for(let i=1; i<arr.length; i++) {
      for(let j=i-1; j>=0; j--) {
        if(callback(arr[j+1]) < callback(arr[j])) {
          let small = arr[j+1];
          arr[j+1] = arr[j];
          arr[j] = small;
        }
      } 
    }
  
    return arr;
  };
  