// https://urclass.codestates.com/codeproblem/b722cb32-8d2d-4aa3-8bb5-db8d1430cb2e

//! 먼저 계수 정렬을 구현한다.

// ----------------------------------------
//? 아래는 radix가 없는 계수 정렬의 개별적인 코드 구현

// function countingSort(arr) {
//   const max = Math.max(...arr);
//   const min = Math.min(...arr);

//   const obj = {};
//   for(let el of arr) {
//     if(!(el in obj)) {
//       obj[el] = 0;
//     }
//     obj[el]++;
//   }
//   let result = [];
//   for(let i=min; i<=max; i++) {
//     while(obj[i] > 0) {
//       result.push(i);
//       obj[i]--;
//     }
//   }
//   return result;
// }
// ----------------------------------------

function countingSort(arr, radix) {
    const count = new Array(10).fill(0);
    const result = new Array(arr.length).fill(0);
  
    arr.forEach((el) => {
      const idx = parseInt(el/radix) % 10;
      count[idx]++;
    })
  
    for(let i=1; i<count.length; i++) {  // 배열 count의 각 요소에 누적 합을 할당하는데, 이 누적 값이 result 배열의 인덱스 역할을 하기 때문
      count[i] = count[i] + count[i-1];
    }
  
    // 아래 속성이 유지되도록 하기 위해 배열을 거꾸로 순회한다.
    //  1. 가장 큰 값을 먼저 본다.
    //  2. 가장 큰 값을 가장 마지막에 놓는다.
    let i = arr.length-1;
    while(i >= 0) {
      const idx = parseInt(arr[i]/radix) % 10;
      // count[idx]: 현재 radix의 idx까지 누적 개수
      // count[idx]개만큼 있으므로, 인덱스는 count[idx] - 1
      count[idx]--;
      result[count[idx]] = arr[i];
      i--;
    }
    
    return result;
  }
  // ------------------------------------------------- 계수 정렬(counting sort) 구현 완료
  
  //TODO ------------------------------------------------- Bare Minimum
  // function radixSort(arr) {
  //   const max = Math.max(...arr);
  //   let radix = 1;
  
  //   while(parseInt(max/radix) > 0) {
  //     arr = countingSort(arr, radix);
  //     radix = radix * 10;
  //   }
  
  //   return arr;
  // }
  
  //TODO ------------------------------------------------- Advanced
  function radixSort(arr) {
    let minus = [];
    let plus = [];
  
    for(let el of arr) {
      if(el < 0) {
        minus.push(el);
      } else {
        plus.push(el);
      }
    }
  
    const plusMax = Math.max(...plus);
    let plusRadix = 1;
    while(parseInt(plusMax/plusRadix) > 0) {
      plus = countingSort(plus, plusRadix);
      plusRadix = plusRadix * 10;
    }
  
    // 음수들을 모아 놓은 minus 배열에서는 모든 요소들을 양수로 바꿔준 다음,
    // 모두 정렬 시킨 후에 다시 음수로 바꿔주고 reverse 시킨다.
    let minusTmp = minus.map((num) => -num);
    const minusMax = Math.max(...minusTmp);
    let minusRadix = 1;
    while(parseInt(minusMax/minusRadix) > 0) {
      minusTmp = countingSort(minusTmp, minusRadix);
      minusRadix = minusRadix * 10;
    } 
    minus = minusTmp.map((num) => -num).reverse();
  
    return minus.concat(plus); 
  }