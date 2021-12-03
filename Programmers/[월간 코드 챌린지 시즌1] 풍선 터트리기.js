// https://programmers.co.kr/learn/courses/30/lessons/68646

function solution(a) {
    if(a.length < 3) return 1;
    let set = new Set();
    let leftMin = a[0];
    let rightMin = a[a.length-1];
    for(let i=1; i<a.length-1; i++) {
        let left = i;
        let right = a.length-1-i;
        if(a[left] < leftMin) {
            set.add(a[left]);
            leftMin = a[left];
        }
        if(a[right] < rightMin) {
            set.add(a[right]);
            rightMin = a[right];
        }
    }
    
    return set.size + 2;
}