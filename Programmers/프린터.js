// https://programmers.co.kr/learn/courses/30/lessons/42587

function solution(priorities, location) {
    
    let da = [];
    for(let i=0; i<priorities.length; i++) {
        da.push(i);
    }
    
    let daClone = da.slice();
    let document = priorities.slice();
    let queue = [];
    let daQueue = [];
    
    while(queue.length < priorities.length) {
        queue.push(document.shift());
        daQueue.push(daClone.shift());
        if(!isValid(queue[queue.length-1], document)) {
            document.push(queue.pop());
            daClone.push(daQueue.pop());
        }
    }
    
    function isValid(root, document) {
        for(let i=0; i<document.length; i++) {
            if(root < document[i]) {
                return false;
            }
        }
        return true;
    }
    
    for(let j=0; j<daQueue.length; j++) {
        if(daQueue[j] === da[location]) {
            return j+1;
        }
    }
}