// https://programmers.co.kr/learn/courses/30/lessons/17686#qna

function solution(files) {
  files.sort((a, b) => {
    let [tmp1, head1, number1, tail1] = a.match(/(\D+)(\d+)(.*)/);
    let [tmp2, head2, number2, tail2] = b.match(/(\D+)(\d+)(.*)/);
    head1 = head1.toUpperCase();
    head2 = head2.toUpperCase();
    if (head1 !== head2) {
      if (head1 > head2) return 1;
      if (head1 < head2) return -1;
    }
    if (Number(number1) !== Number(number2)) {
      return Number(number1) - Number(number2);
    }
    return 0;
  });

  return files;
}
