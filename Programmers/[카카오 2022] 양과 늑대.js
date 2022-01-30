// https://programmers.co.kr/learn/courses/30/lessons/92343

function solution(info, edges) {
  const children = new Array(info.length).fill(0);
  let maxSheepCount = 0;

  for (let edge of edges) {
    let parent = edge[0];
    let child = edge[1];
    if (children[parent] === 0) {
      children[parent] = new Array();
    }
    children[parent].push(child);
  }

  const dfs = (node, sheepCount, wolfCount, visitNode) => {
    if (info[node] === 0) sheepCount++;
    else wolfCount++;
    if (wolfCount >= sheepCount) return;
    maxSheepCount = Math.max(maxSheepCount, sheepCount);

    // 그냥 visitNode를 쓰게 되면 원본에 영향을 끼치기 때문에 반드시 복사해주는 것을 잊지말자!!!
    const list = [...visitNode];
    list.splice(list.indexOf(node), 1); // 현재 방문하고 있는 노드는 제외시키기
    if (children[node] !== 0) {
      // 자식 노드가 있는지 확인
      list.push(...children[node]);
    }

    for (let nextNode of list) {
      dfs(nextNode, sheepCount, wolfCount, list);
    }
  };

  const visitNode = [];
  visitNode.push(0);
  dfs(0, 0, 0, visitNode); // 현재노드, 양의 수, 늑대 수, 다음으로 방문할 수 있는 노드 집합

  return maxSheepCount;
}
