// https://programmers.co.kr/learn/courses/30/lessons/42861#qna

function solution(n, costs) {
    // 크루스칼 알고리즘: 가장 적은 비용으로 모든 노드들을 연결하기 위한 알고리즘
    // https://m.blog.naver.com/ndb796/221230994142
    
    // 원리는 알겠다만, 무한 사이클을 피하기 위한 체킹을 어떻게 하면 좋을지 모르겠다...
    // => Union-find 알고리즘을 통해 연결된 두 노드를 묶어서 체킹할 수 있다고 한다.
    // https://m.blog.naver.com/ndb796/221230967614
    
    let result = 0;
    costs.sort((a, b) => a[2] - b[2]);  // 가장 적은 비용 순으로 오름차순을 시킨다.
    const check = new Array(n).fill(0).map((el, idx) => idx);  // 무한 사이클을 피하기 위한 체킹 배열(Union-find)
    
    const getParentNode = (parent, node) => {  // typeOf(parent) === arr
        if(parent[node] === node) {
            return node;
        } else {
            return getParentNode(parent, parent[node]);
        }
    }
    // 두 노드 중 부모 노드가 최소인 값으로 두 노드를 합치는(연결짓는) 모듈
    // 부모 노드가 바뀐다는 것을 주의하자!
    const union = (parent, node1, node2) => {
        const candidate1 = getParentNode(parent, node1);
        const candidate2 = getParentNode(parent, node2);
        if(candidate1 < candidate2) {
            parent[candidate2] = candidate1;
        } else {
            parent[candidate1] = candidate2;
        }
    }
    // 두 부모 노드가 같은지를 판별하는 모듈 = 연결되어 있는지 없는지를 판별
    const find = (parent, node1, node2) => {
        const candidate1 = getParentNode(parent, node1);
        const candidate2 = getParentNode(parent, node2);
        if(candidate1 === candidate2) {
            return true;
        } else {
            return false;
        }
    }
    
    for(let island of costs) {
        const [node1, node2, cost] = island
        if(!find(check, node1, node2)) {
            result = result + cost;
            union(check, node1, node2);
        }
    }
    
    return result;
}