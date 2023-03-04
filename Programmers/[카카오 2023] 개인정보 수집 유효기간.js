// https://school.programmers.co.kr/learn/courses/30/lessons/150370

function solution(today, terms, privacies) {
  const objTerms = {};
  terms.forEach((term) => {
    const split = term.split(" ");
    objTerms[split[0]] = Number(split[1]);
  });

  const result = [];
  privacies.forEach((p, index) => {
    const split = p.split(" ");
    const pDate = new Date(split[0]);
    const plusTerm = pDate.setMonth(pDate.getMonth() + objTerms[split[1]]);
    const plusTermDate = new Date(plusTerm);
    const dateToday = new Date(today);
    if (dateToday - plusTermDate >= 0) result.push(index + 1);
  });

  return result;
}
