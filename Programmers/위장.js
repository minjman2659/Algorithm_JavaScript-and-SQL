// https://programmers.co.kr/learn/courses/30/lessons/42578

function solution(clothes) {
    let obj = {};
    for(let el of clothes) {
        if(!(el[1] in obj)) {
            obj[el[1]] = [el[0]];
        } else {
            obj[el[1]] = obj[el[1]].concat([el[0]]);
        }
    }
    
    let result = 1;
    for(let key in obj) {
        result = result * (obj[key].length+1);
    }
    return result-1;
}