// https://urclass.codestates.com/codeproblem/a4cb0a65-985a-40fb-8063-103167db909a

const isSubsetOf = function (base, sample) {
    // base와 sample 모두 오름차순을 시킨 다음,
    // 만약 sample의 첫번째 요소가 base에 있을 경우, 그 다음 base를 돌 때는 해당 요소 다음 부터 돌 수 있도록 해야한다. (즉, base에서 잘라가야한다)
    // 아마 반복문은 2개가 사용될 것 같다.
  
    base.sort((a, b) => a - b);
    sample.sort((a, b) => a - b);
  
    const checkElement = (el, base, from) => {
      for(let i=from; i<base.length; i++) {
        if(base[i] === el) {
          return i+1;
        }
      }
      return false;
    }
  
    let from = 0;
    for(let el of sample) {
      from = checkElement(el, base, from);
      if(from === false) {
        return false;
      }
    }
  
    return true;
  };
  