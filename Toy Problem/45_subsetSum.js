// https://urclass.codestates.com/codeproblem/9bd2dccb-4394-4c7d-a80d-46b5a7d8d7d3

const subsetSum = function (set, bound) {

    // ------------------------------------------- (1) powerSet을 활용한 풀이 _ 자꾸 npm killed가 나온다(크롭 개발자 도구에서는 잘 돌아감) => 덜 효율적이다?
    // 배열 set의 부분 집합(powerSet)을 구한 후, 총합을 구한다.
    // 그 후에 bound보다 작거나 같은 부분집합의 총합들 중에서 최댓값을 리턴한다.
  
    // set = set.filter((el) => el <= bound);
    // if(set.length === 0) {
    //   return 0;
    // }
  
    // function powerSet(arr) {
    //   const result = [];
    //   const check = new Array(arr.length).fill(false);
  
    //   function resultPush(arr) {
    //     const tmp = [];
    //     for(let i=0; i<arr.length; i++) {
    //       if(check[i]) {
    //         tmp.push(arr[i]);
    //       }
    //     }
    //     const sum = tmp.reduce((acc, cur) => acc + cur, 0);
    //     if(sum <= bound) {
    //       result.push(sum);
    //     }
    //   }
  
    //   function checkArr(startNum) {
    //     for(let i=startNum; i<arr.length; i++) {
    //       check[i] = true;
    //       resultPush(arr);
    //       checkArr(i+1);
    //       check[i] = false;
    //     }
    //   }
  
    //   checkArr(0);
    //   return result;
    // }
  
    // const resultArr = powerSet(set);
    // return Math.max(...resultArr);
  
  
    // ------------------------------------------- (2) DP - Tabulation : Bottom-Up 방식
    // 객체 result에 bound보다 작거나 같은 범위의 만들 수 있는 set 요소들의 부분적인 총합들을 저장한 후,
    // 최댓값을 리턴한다.
    // 즉, bound를 넘지 않으면서 만들 수 있는 모든 수를 만들어 놓고 최댓값을 리턴한다.
  
    set = set.filter((el) => el <= bound);
    if(set.length === 0) {
      return 0;
    }
  
    const tabulation = {};
    for(let i=0; i<set.length; i++) {
      const objArr = Object.keys(tabulation);    // Object.keys(obj)의 요소들은 모두 String 타입이라는 것을 기억하자!
      for(let j=0; j<objArr.length; j++) {
        let sum = Number(objArr[j]) + set[i];
        if(sum <= bound) {
          tabulation[sum] = true;
        }
      }
  
      tabulation[set[i]] = true;
    }
  
    const result = Object.keys(tabulation).map((el) => Number(el));
    return Math.max(...result);
  };