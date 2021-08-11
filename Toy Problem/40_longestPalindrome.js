// https://urclass.codestates.com/codeproblem/f8e85288-0932-4ea8-a9f3-0d3e40d3eef5

let longestPalindrome = function (str) {
    // str을 반복문으로 돌면서 기준(i)을 옮겨간다.
    // 각 기준(i)을 중심으로 왼쪽, 오른쪽으로 퍼져나가며, str[왼쪽]과 str[오른쪽]이 같은지를 판별해 나간다.
    // 같을 경우 계속 퍼져나가며, 그 길이가 최대인 값을 리턴한다.
  
    // str의 길이가 1이거나, 반대로 해도 같을 경우 그냥 str.length를 리턴한다.
    if(str.length < 2 || str === str.split('').reverse().join('')) {
      return str.length;
    }
  
    let result = 0;
    for(let i=0; i<str.length-2; i++) {
      result = Math.max(result, iToExpand(i, i+1).length, iToExpand(i, i+2).length);
    }
  
    // 기준(i)를 중심으로 퍼져나가는 함수
    function iToExpand(left, right) {
      while(left >= 0 && right <= str.length-1 && str[left] === str[right]) {
        left--;
        right++;
      }
      return str.slice(left+1, right);
    }
  
    return result;
  };
  