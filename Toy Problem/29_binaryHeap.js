// https://urclass.codestates.com/codeproblem/e25ee8dc-5d85-457e-9c2f-8126b2dab24e

// 아래 코드는 수정하지 마세요.
function swap(idx1, idx2, arr) {
    // 두 변수를 바꾸는 방법
  
    // 1) 임시 변수를 활용한 방법
    // let temp = arr[idx1];
    // arr[idx1] = arr[idx2];
    // arr[idx2] = temp;
  
    // 2) Destructuring assignment를 활용한 방법
    // arr이 reference type이라 가능
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  
    // 3) XOR 연산을 활용한 방법
    // arr이 reference type이라 가능
    // arr[idx1] ^= arr[idx2];
    // arr[idx2] ^= arr[idx1];
    // arr[idx1] ^= arr[idx2];
  }
  
  function getParentIdx(idx) {   // 들어오는 idx의 부모 인덱스 구하기
    return Math.floor((idx-1) / 2);
  }
  
  // 왼쪽 자식(leftChild) 인덱스 구하기 = idx * 2 + 1
  // 오른쪽 자식(rightChild) 인덱스 구하기 = idx * 2 + 2
  
  function insert(heap, item) {
    heap.push(item);             // 새로운 노드가 들어오면 주어진 heap 배열의 마지막 인덱스로 들어오게 된다.
    let curIdx = heap.length-1;  // curIdx === 새로운 노드
    let parentIdx = getParentIdx(curIdx);
    
    while(parentIdx >= 0 && heap[curIdx] > heap[parentIdx]) {
      swap(curIdx, parentIdx, heap);
      curIdx = parentIdx;
      parentIdx = getParentIdx(curIdx);
    }
    return heap;
  }
  
  // 아래 코드는 수정하지 마세요.
  const binaryHeap = function (arr) {
    return arr.reduce((heap, item) => {
      return insert(heap, item);
    }, []);
  };
  