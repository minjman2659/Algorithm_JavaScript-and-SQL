// https://urclass.codestates.com/codeproblem/b1777c51-0f96-4053-9d9f-3c7cd7333055

const LPS = function (str) {
  let result = '';
  let half = parseInt(str.length/2);
  for(let i=1; i<=half; i++) {
    if(str.slice(0, i) === str.slice(-i)) {
      result = str.slice(0, i);
    }
  }
  
  return result.length;
};
  