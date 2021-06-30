// https://urclass.codestates.com/codeproblem/b48664f6-524d-4d91-bfa4-d42c7f4c3f44

let bfs = function (node) {
    // BFS 탐색 방법은 queue 빈배열을 만들어서 각 노드의 자식들을 하나하나 queue에 담고나서,
    // queue의 요소들을 하나씩 빼면서 탐색하면 된다.
    const result = [];
    let queue = [node];
    while(queue.length > 0) {
      let now = queue.shift();
      result.push(now.value);
      for(let el of now.children) {
        queue.push(el);
      }
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