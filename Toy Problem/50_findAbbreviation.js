// https://urclass.codestates.com/codeproblem/b8460488-e438-4459-b169-e6840235a1a0

function findAbbreviation(strA, strB) {
    // 문제가 부실하다.
      // 자체 수정) 아래 작업1,2 를 거쳐서 strA가 strB와 같아진다면 true를 리턴하고, 아니라면 false를 리턴하라.
      // 작업1 : strA의 소문자를 대문자로 변경
      // 작업2 : strA의 소문자를 제거
  
    // => strA의 요소들 중 strB의 요소들과 같거나, strA의 요소가 소문자일 경우 작업1을 통해 대문자로 변경했을 때 같은 요소들만을 모아 str을 만든다. 
    // 그런데 판별하는 와중에 strA에서 strB와 다르면서 strA에 대문자 요소가 들어있을 경우 바로 false를 리턴한다.
    // 모든 반복문을 돌고, 최종적으로 같은 요소들만을 모아 놓은 str의 길이가 strB와 같다면 true를 리턴하는 문제이다.
  
    const digit = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let str = ''
    let i = 0;
    let j = 0;
    while(i<strA.length && j<strB.length) {
      // 두 요소가 같다면 str에 넣는다.
      if(strA[i] === strB[j]) {
        str = str + strA[i];
        i++;
        j++;
      } else {  // 두 요소가 다를 경우, 경우의 수는 두가지가 나온다.
        // 경우의 수 (1) : strA의 요소를 대문자로 바꾸었을 때(작업1), strB의 요소와 같다면 str에 넣는다.
        if(strA[i].toUpperCase() === strB[j]) {
          str = str + strA[i];
          i++;
          j++;
        } else {   // 경우의 수 (2) : 두 요소가 완전히 다를 경우, 만약 strA의 요소가 대문자일 경우에는 바로 false 
          if(digit.includes(strA[i])) {
            return false;
          }
          // 소문자일 경우에는 strA만 다음 요소로 넘어가며 반복문 다시 진행
          i++;
        }
      }
    }
  
    if(str.length !== strB.length) {
      return false;
    }
    return true;
  }
  