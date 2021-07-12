// https://programmers.co.kr/learn/courses/30/lessons/42840#qna

function solution(answers) {
    const result = [];
    const list = {
        a: [1,2,3,4,5],
        b: [2,1,2,3,2,4,2,5],
        c: [3,3,1,1,2,2,4,4,5,5]
    };
    let aCount = 0;  // a.length = 5
    let bCount = 0;  // b.length = 8
    let cCount = 0;  // c.length = 10
    
    for(let i=0; i<answers.length; i++) {
        if(answers[i] === list.a[i%5]) {
            aCount++;
        }
        if(answers[i] === list.b[i%8]) {
            bCount++;
        }
        if(answers[i] === list.c[i%10]) {
            cCount++;
        }
    }
    
    const max = Math.max(aCount, bCount, cCount);
    if(max === aCount) {
        result.push(1);
    }
    if(max === bCount) {
        result.push(2);
    }
    if(max === cCount) {
        result.push(3);
    }
    
    return result;
}