// https://programmers.co.kr/learn/courses/30/lessons/42587

function solution(priorities, location) {
    
    let tag = [];
    for(let i=0; i<priorities.length; i++) {
        tag.push(i);
    }
    
    let tagClone = tag.slice();
    let document = priorities.slice();
    let queue = [];
    let tagQueue = [];
    
    while(queue.length < priorities.length) {
        queue.push(document.shift());
        tagQueue.push(tagClone.shift());
        if(!isValid(queue[queue.length-1], document)) {
            document.push(queue.pop());
            tagClone.push(tagQueue.pop());
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
    
    for(let j=0; j<tagQueue.length; j++) {
        if(tagQueue[j] === tag[location]) {
            return j+1;
        }
    }
}