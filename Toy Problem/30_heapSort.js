// https://urclass.codestates.com/codeproblem/2a7fe7c7-2769-48f3-bfc3-ea408561579d

// 최소 힙 구현

function swap(idx1, idx2, arr) {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  }
  
  // heap 내에서 parentIdx를 구하는 모듈
  function getParentIdx(idx) {
    return Math.floor((idx-1) / 2);
  }
  
  // heap 삽입 구현
  function insert(heap, item) {
    heap.push(item);
    let curIdx = heap.length-1;
    let parentIdx = getParentIdx(curIdx);
  
    while(parentIdx >= 0 && heap[curIdx] < heap[parentIdx]) {
      swap(curIdx, parentIdx, heap);
      curIdx = parentIdx;
      parentIdx = getParentIdx(curIdx);
    }
  
    return heap;
  }
  
  // heap 삭제 구현
  // : 항상 rootNode(최솟값)가 삭제되며 제일 끝 인덱스가 rootNode 자리에 오르게 되고,
  // 자식 노드들과 반복 비교를 진행해서, 최종적으로 삭제되었던 rootNode의 다음 최솟값이 rootNode 자리에 오르게 된다.
  function removeRoot(heap) {
    swap(0, heap.length-1, heap);
    heap.pop();
    if(heap.length === 0) {
      return [];
    }
    let parentIdx;
    let minIdx = 0;
    while(parentIdx !== minIdx) {
      parentIdx = minIdx;
      let leftChild = parentIdx*2 + 1;
      let rightChild = parentIdx*2 + 2;
      if(leftChild <= heap.length-1 && heap[leftChild] < heap[minIdx]) {
        minIdx = leftChild;
      }
      if(rightChild <= heap.length-1 && heap[rightChild] < heap[minIdx]) {
        minIdx = rightChild;
      }
      swap(parentIdx, minIdx, heap);
    }
    
    return heap;
  }
  
  const binaryHeap = function (arr) {
    return arr.reduce((heap, item) => {
      return insert(heap, item);
    }, []);
  };
  
  // heap Sort 구현
  // : removeRoot(heap)을 진행하면 항상 rootNode에는 최솟값이 존재하기 때문에 heap이 빈 배열이 될 때까지 heap[0]을 result 배열에 넣는다.
  const heapSort = function (arr) {
    let result = [];
    let minHeap = binaryHeap(arr);
    while(minHeap.length > 0) {
      result.push(minHeap[0]);
      minHeap = removeRoot(minHeap);
    }
  
    return result;
  };
  