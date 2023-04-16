// https://school.programmers.co.kr/learn/courses/30/lessons/155651

function convertion(time) {
  const [hour, minute] = time.split(":").map(Number);
  return hour * 60 + minute;
}

function solution(book_time) {
  const converted = book_time
    .map((times) => {
      const start = convertion(times[0]);
      const end = convertion(times[1]);
      return [start, end + 10];
    })
    .sort((a, b) => (a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]));

  const check = new Array(converted.length).fill(false);
  let result = 0;
  converted.forEach((times, index) => {
    if (check[index]) return;
    const [start, end] = times;
    check[index] = true;
    let temp = end;
    for (let i = index + 1; i < converted.length; i++) {
      const [nStart, nEnd] = converted[i];
      if (nStart >= temp && !check[i]) {
        check[i] = true;
        temp = nEnd;
      }
    }
    result++;
  });

  return result;
}
