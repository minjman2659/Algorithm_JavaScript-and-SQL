// https://urclass.codestates.com/codeproblem/68834f5e-ee65-4e10-8027-eb7c541378eb

// 구현은 했다만... 시간 복잡도 면으로 비효율적이다.
// 위 링크에 Reference를 참고하자 (DP 활용)

// 부분 집합을 이용한 알고리즘
const LCS = function (str1, str2) {
  const check1 = new Array(str1.length).fill(false);
  const check2 = new Array(str2.length).fill(false);
  const subsequence1 = [];
  const subsequence2 = [];

  const arrPush = (str, check, arr) => {
    let tmp = '';
    for(let i=0; i<str.length; i++) {
      if(check[i]) {
        tmp = tmp + str[i];
      }
    }
    arr.push(tmp);
  }

  const checkArr = (startNum, str, check, arr) => {
    for(let i=startNum; i<str.length; i++) {
      check[i] = true;
      arrPush(str, check, arr);
      checkArr(i+1, str, check, arr);
      check[i] = false;
    }
  }

  checkArr(0, str1, check1, subsequence1);
  checkArr(0, str2, check2, subsequence2);
// ----------------------------------------------- 여기까지 두 개의 부분 집합 배열 구현 완료

  const CS = subsequence1.map((el1) => subsequence2.filter((el2) => el1 === el2));
  const CSfilterBy = CS.filter((el) => el.length !== 0);
  const leng = CSfilterBy.map((el) => el[0].length);

  return Math.max(...leng);
};