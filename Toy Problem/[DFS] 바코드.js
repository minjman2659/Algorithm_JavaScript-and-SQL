// https://urclass.codestates.com/codeproblem/09b40670-3f84-4c18-a853-a349625bced7

function barcode(len) {
    const digit = '123';
    let result = '';
  
    const makeBarcode = (result) => {
      if(result.length === len) {
        return result;
      }
  
      for(let i=0; i<digit.length; i++) {
        if(isValid(result + digit[i])) {
          let check = makeBarcode(result + digit[i]);
          if(check !== -1) {      // 중요 포인트! => len이 8일 때, 1,2,3 모두 안될 때가 존재한다. 이를 방지하기 위해 그 위의 재귀함수에서 다른 숫자로 바꿔주기 위해 체크!
            return check;
          }
        }
      }
      return -1;
    }
  
    function isValid(str) {
      const half = parseInt(str.length / 2);
      for(let i=1; i<=half; i++) {
        if(str.slice(-i) === str.slice(-(i*2), -i)) {
          return false;
        }
      }
      return true;
    }
  
    return makeBarcode(result);
  }
  