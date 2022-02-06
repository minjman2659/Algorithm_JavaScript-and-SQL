// https://programmers.co.kr/learn/courses/30/lessons/49993

function solution(skill, skill_trees) {
  const checkSkill = (skill_tree) => {
    const skillArr = skill.split('');
    for (let el of skill_tree) {
      if (skillArr.length === 0) break;
      if (!skillArr.includes(el)) continue;
      if (el === skillArr.shift()) continue;
      return false;
    }
    return true;
  };

  const result = skill_trees.filter(checkSkill).length;
  return result;
}
