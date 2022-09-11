// https://school.programmers.co.kr/learn/courses/30/lessons/42587

function solution(priorities, location) {
  const prioritiesWithIndex = priorities.map((priority, index) => {
    return {
      isTarget: index === location,
      priority,
    };
  });

  const stack = [];
  while (prioritiesWithIndex.length > 0) {
    // 언제까지 루프를 돌건지 조건을 정하는 것이 관건!
    const firstPriority = prioritiesWithIndex.shift();
    stack.push(firstPriority);
    const hasHigherPriority = prioritiesWithIndex.some(
      (p) => p.priority > firstPriority.priority
    );
    if (hasHigherPriority) {
      prioritiesWithIndex.push(stack.pop());
    }
  }

  return stack.findIndex((el) => el.isTarget) + 1;
}
