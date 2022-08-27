function solution(survey, choices) {
  const MBTI = {};
  const types = ['RT', 'CF', 'JM', 'AN'];

  types.forEach((type) => {
    const [typeA, typeB] = type; // typeA = 'R', typeB = 'T'
    MBTI[typeA] = 0;
    MBTI[typeB] = 0;
  });

  choices.forEach((choice, index) => {
    const [typeA, typeB] = survey[index]; // typeA = 'R', typeB = 'T'
    MBTI[choice < 4 ? typeA : typeB] += Math.abs(choice - 4);
  });

  const result = types
    .map(([typeA, typeB]) => {
      return MBTI[typeB] > MBTI[typeA] ? typeB : typeA; // 같을경우 typeA가 들어있어야 하기 때문에!
    })
    .join('');

  return result;
}
