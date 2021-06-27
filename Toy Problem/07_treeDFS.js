// https://urclass.codestates.com/codeproblem/de9f2f61-4c8f-4c75-ba45-e70a2e48c4ef

let dfs = function (node) {
    // DFS 방식은 연결된 노드를 만날 때마다 재귀를 사용하여 바로바로 깊숙히 들어가야한다.
    let result = [node.value];
    for(let el of node.children) {
      result = result.concat(dfs(el));
    }
  
    return result;
  };
  
  // 이 아래 코드는 변경하지 않아도 됩니다. 자유롭게 참고하세요.
  let Node = function (value) {
    this.value = value;
    this.children = [];
  };
  
  // 위 Node 객체로 구성되는 트리는 매우 단순한 형태의 트리입니다.
  // membership check(중복 확인)를 따로 하지 않습니다.
  Node.prototype.addChild = function (child) {
    this.children.push(child);
    return child;
  };
  