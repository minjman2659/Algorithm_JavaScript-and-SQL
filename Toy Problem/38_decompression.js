// https://urclass.codestates.com/codeproblem/458fa5a0-94f8-4ac3-8194-90011fa110e2

const decompression = function (image) {
    // 일반적인 재귀문제. 4등분을 어떻게 재귀해 나갈지가 고민인 문제.
    // image 배열의 요소들을 4등분으로 잘게잘게 쪼개 나간 후(요소 하나가 남을 때 까지),
    // 쪼갠 요소들부터 판단을 진행해 나가면서 합쳐 나간다.
  
    // rs = Y축의 시작, re = Y축의 끝, cs = X축의 시작, ce = X축의 끝
    // 요소 하나가 남을 때까지 재귀를 진행하여 합쳐나간다.
    const decompress = (rs, re, cs, ce) => {
      if(rs === re) {  // rs === re 란 말은, cs === ce 라는 뜻
        return String(image[rs][cs]);
      }
  
      const midR = parseInt((rs+re)/2);
      const midC = parseInt((cs+ce)/2);
      const leftUp = decompress(rs, midR, cs, midC);
      const rightUp = decompress(rs, midR, midC+1, ce);
      const leftDown = decompress(midR+1, re, cs, midC);
      const rightDown = decompress(midR+1, re, midC+1, ce);
  
      const result = leftUp + rightUp + leftDown + rightDown;
      if(result === '1111') {
        return '1';
      } else if(result === '0000') {
        return '0';
      } else {
        return 'X' + result;
      }
    }
  
    return decompress(0, image.length-1, 0, image[0].length-1);
  };
  