// https://programmers.co.kr/learn/courses/30/lessons/81303

function solution(n, k, cmd) {
  // 데이터의 삽입과 삭제가 빈번하게 발생할 때는 Array보다 LinkedList를 활용하는 것이 더 효율적이다!
  // (LinkedList의 단점은 메모리를 비교적 많이 차지하고, 배열처럼 index가 주어지지 않아 바로 접근하기는 불리하다는 것)
  const result = new Array(n).fill("O");
  const stack = []; // 삭제한 노드들을 담을 공간

  class Node {
    constructor(id, prev, next) {
      this.id = id;
      this.prev = prev;
      this.next = next;
    }
  }
  // linkedList 정의
  const root = new Node(0, null, null);
  let curNode = root;
  let prevNode = root;
  for (let i = 1; i < n; i++) {
    const newNode = new Node(i, prevNode);
    prevNode.next = newNode;
    prevNode = newNode;
    if (i === k) {
      curNode = newNode;
    }
  }

  for (let str of cmd) {
    if (str[0] === "D") {
      const X = Number(str.slice(2));
      for (let i = 0; i < X; i++) {
        curNode = curNode.next;
      }
    }
    if (str[0] === "U") {
      const X = Number(str.slice(2));
      for (let i = 0; i < X; i++) {
        curNode = curNode.prev;
      }
    }
    if (str[0] === "C") {
      result[curNode.id] = "X";
      stack.push(curNode);
      const tmpPrev = curNode.prev;
      const tmpNext = curNode.next;
      if (tmpPrev && tmpNext) {
        tmpPrev.next = tmpNext;
        tmpNext.prev = tmpPrev;
        curNode = tmpNext;
      } else if (!tmpPrev && tmpNext) {
        tmpNext.prev = null;
        curNode = tmpNext;
      } else if (tmpPrev && !tmpNext) {
        tmpPrev.next = null;
        curNode = tmpPrev;
      }
    }
    if (str[0] === "Z") {
      const restoredNode = stack.pop();
      result[restoredNode.id] = "O";
      const tmpPrev = restoredNode.prev;
      const tmpNext = restoredNode.next;
      if (tmpPrev) tmpPrev.next = restoredNode;
      if (tmpNext) tmpNext.prev = restoredNode;
    }
  }

  return result.join("");
}
