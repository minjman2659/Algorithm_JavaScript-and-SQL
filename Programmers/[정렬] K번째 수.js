// https://programmers.co.kr/learn/courses/30/lessons/42748

function solution(array, commands) {
    let result = [];
    
    for(let el of commands) {
        result.push(array.slice(el[0]-1, el[1]).sort((a,b) => a- b)[el[2]-1]);
    }
    
    return result;
}