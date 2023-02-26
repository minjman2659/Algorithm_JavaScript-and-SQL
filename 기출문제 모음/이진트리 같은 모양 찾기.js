//! 컴퓨터 연산은 1초에 약 1억번 연산 가능

// 완전탐색 문제...? 라고 생각
// 정말 단순하게 생각하면 O(n^3)이지만, t1의 노드들 중에서 t2 트리의 높이보다 높거나 낮은 노드들은 제외하면서 반복문을 진행하기 때문에
// 완전탐색으로 해결 가능한 문제라고 생각한다.

// 이진트리의 높이는 log^n(Math.sqrt(n)) 올림 으로 나타낼 수 있는데,
// t1의 노드들을 반복문으로 돌면서 t2와 비교해 나가는데,
// 만약 t2 트리의 높이보다 높다면 해당 t1의 노드는 아웃
// 즉, t2 이진 트리의 높이 이하의 노드만 찾아서 카운팅을 진행하면 되기 때문에 '완전탐색'으로 진행

// 그런데, 높이가 같다(배열의 길이가 같다)고 해서 같은 트리라 할 수 있는가? => 아니다
// 모양이 다를 수 있기 때문에 => BFS는 안된다.

// DFS 방식을 사용하자.
// t1의 노드들을 반복문으로 돌면서 t2와 비교해 나간다.
// 길이 체크는 할 필요가 없다 => 단순히 true false 체킹만 하면서 진행하자

// test case 1) t1: [[1,2], [3,4], [5,6], [-1,7], [8,9], [-1,-1], [-1,-1], [-1,-1], [-1,-1], [-1,-1]]
//              t2: [[1,2], [-1,-1], [-1,-1]]
//           2) t1: [[1,2], [3,4], [5,6], [-1,7], [8,9], [-1,-1], [-1,-1], [-1,-1], [-1,-1], [-1,-1]]
//              t2: [[-1,1], [-1,-1]]

function solution(t1, t2) {
  let count = 0;
  for (let i = 0; i < t1.length; i++) {
    if (check(t1[i], t2[0])) count++;
  }

  return count;

  function check(n1, n2) {
    let left = dfs(n1[0], n2[0]);
    let right = dfs(n1[1], n2[1]);

    if (left && right) return true;
    else return false;
  }

  function dfs(node1, node2) {
    let sameCheck = areSame(node1, node2);
    if (sameCheck === true) {
      return dfs(t1[node1][0], t2[node2][0]);
    }
    if (sameCheck === -1) {
      return true;
    }
    if (sameCheck === false) {
      return false;
    }
  }

  function areSame(node1, node2) {
    if (node1 === -1 && node2 === -1) {
      return -1;
    }
    if (node1 > 0 && node2 > 0) {
      return true;
    }
    if (node1 === -1 || node2 === -1) {
      return false;
    }
  }
}
