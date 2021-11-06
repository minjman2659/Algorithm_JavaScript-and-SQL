// https://leetcode.com/problems/merge-intervals/

var merge = function (intervals) {
  if (intervals.length <= 1) return intervals;
  const result = [];
  intervals.sort((a, b) => a[0] - b[0]);
  result.push(intervals[0]);
  for (let [start, end] of intervals) {
    if (start <= result[result.length - 1][1]) {
      let [iZero, iOne] = result.pop();
      result.push([iZero, Math.max(iOne, end)]);
    } else {
      result.push([start, end]);
    }
  }

  return result;
};
