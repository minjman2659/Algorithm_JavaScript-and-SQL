// https://urclass.codestates.com/codeproblem/59f6934a-fe46-4dbe-956a-d1d21d12b797

const bubbleSort = function (arr) {
    for(let i=0; i<arr.length; i++) {
      let swap = false;
      for(let j=1; j<arr.length-i; j++) {
        if(arr[j-1] > arr[j]) {
          let small = arr[j];
          arr[j] = arr[j-1];
          arr[j-1] = small;
          swap = true;
        }
      }
      if(swap === false) {
        break;
      }
    }
  
    return arr;
  };
  