// https://school.programmers.co.kr/learn/courses/30/lessons/42840

function solution(answers) {
  const list = [
    {
      id: 1,
      method: [1, 2, 3, 4, 5],
      score: 0,
    },
    {
      id: 2,
      method: [2, 1, 2, 3, 2, 4, 2, 5],
      score: 0,
    },
    {
      id: 3,
      method: [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
      score: 0,
    },
  ];

  answers.forEach((answer, index) => {
    if (answer === list[0].method[index % 5]) list[0].score++;
    if (answer === list[1].method[index % 8]) list[1].score++;
    if (answer === list[2].method[index % 10]) list[2].score++;
  });

  const max = Math.max(list[0].score, list[1].score, list[2].score);
  return list.filter((el) => el.score === max).map((el) => el.id);
}
