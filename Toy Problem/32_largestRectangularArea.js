// https://urclass.codestates.com/codeproblem/94d37097-caec-4d02-9122-b24c8961fa58

const largestRectangularArea = function (histogram) {
    // histogram의 범위를 좁혀나가면서 각 범위의 최솟값을 높이로 갖는 직사각형의 크기를 비교해 나간다.
    // 구간 트리 알고리즘을 통해 풀어나가자!
    
    // 구간 트리(최소값의 인덱스를 구하기 위한)
    const createTree = (arr, startIdx, endIdx) => {
      if(startIdx === endIdx) {
        return {
          value: arr[startIdx],
          idx: startIdx
        };
      }
  
      const mid = parseInt((startIdx+endIdx)/2);
      const left = createTree(arr, startIdx, mid);
      const right = createTree(arr, mid+1, endIdx);
  
      return {
        value: Math.min(left.value, right.value),
        idx: Math.min(left.value, right.value) === left.value ? left.idx : right.idx,
        left,
        right
      };
    }
  
    const tree = createTree(histogram, 0, histogram.length-1);
  
    // 각 범위의 최솟값의 인덱스를 구하기 위한 모듈
    const getMinimumIdx = (ts, te, rs, re, tree) => {
      if(rs <= ts && te <= re) {
        return tree.idx;
      }
      if(rs > te || re < ts) {
        return rs;
      }
  
      const mid = parseInt((ts+te)/2);
      const left = getMinimumIdx(ts, mid, rs, re, tree.left);
      const right = getMinimumIdx(mid+1, te, rs, re, tree.right);
  
      return Math.min(histogram[left], histogram[right]) === histogram[left] ? left : right;
    }
  
    const getRange = (start, end) => {
      if(start > end) {
        return 0;
      }
      const minIdx = getMinimumIdx(0, histogram.length-1, start, end, tree);
  
      return Math.max(
        (end - start+1) * histogram[minIdx],
        getRange(start, minIdx-1),
        getRange(minIdx+1, end)
      );
    }
  
    return getRange(0, histogram.length-1);
  };
  