// https://urclass.codestates.com/codeproblem/e7598493-e085-4931-b8c2-8225ecca4382

const powerSet = function (str) {
    // 중복된 원소 지우기
    let obj = {};
    for(let el of str) {
      if(!(el in obj)) {
        obj[el] = true;
      }
    }
    let arr = Object.keys(obj);
  
    // arr을 사전식 순서대로 정렬
    arr.sort();
  
    // --------------------------------------------------------------------
    // 본격적인 순열
    let result = [];
    let check = new Array(arr.length).fill(false);
  
    function arrCheck(startNum) {
      for(let i=startNum; i<arr.length; i++) {
        check[i] = true;
        resultPush(arr, check);
  
        arrCheck(i+1);
        check[i] = false;
      }
    }
  
    function resultPush(arr, check) {      // true인 요소들만 문자열로 합쳐서 result에 push 해주는 모듈
      let tmp = '';
      for(let j=0; j<arr.length; j++) {
        if(check[j]) {
          tmp = tmp + arr[j];
        }
      }
      result.push(tmp);
    } 
  
     
    arrCheck(0);
    result.unshift('');
  
    return result;
  }
  