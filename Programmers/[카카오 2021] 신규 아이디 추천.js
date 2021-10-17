// https://programmers.co.kr/learn/courses/30/lessons/72410

function solution(new_id) {
  if (new_id === undefined) return '';
  let answer = '';
  answer = matchRule1(new_id);
  answer = matchRule2(answer);
  answer = matchRule3(answer);
  answer = matchRule4(answer);
  answer = matchRule5(answer);
  answer = matchRule6(answer);
  answer = matchRule7(answer);
  return answer;
}

const matchRule1 = (id) => {
  id = id.toLowerCase();
  return id;
};
const matchRule2 = (id) => {
  id = id.replace(/[^\w-_.]/g, '');
  return id;
};
const matchRule3 = (id) => {
  while (id.includes('..')) {
    id = id.replace('..', '.');
  }
  return id;
};
const matchRule4 = (id) => {
  if (id.length > 0 && id[0] === '.') {
    id = id.slice(1, id.length);
  }
  if (id.length > 0 && id[id.length - 1] === '.') {
    id = id.slice(0, id.length - 1);
  }
  return id;
};
const matchRule5 = (id) => {
  if (id.length === 0) id = 'a';
  return id;
};
const matchRule6 = (id) => {
  if (id.length > 15) {
    id = id.slice(0, 15);
    if (id[14] === '.') id = id.slice(0, 14);
  }
  return id;
};
let matchRule7 = (id) => {
  if (id.length < 3) {
    let char = id[id.length - 1];
    while (id.length < 3) {
      id = id + char;
    }
  }
  return id;
};
