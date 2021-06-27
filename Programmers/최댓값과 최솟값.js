// https://programmers.co.kr/learn/courses/30/lessons/12939

function solution(s) {
    let arr = s.split(' ');
    let arrNum = arr.map((el) => Number(el));
    
    arrNum.sort((a, b) => a - b);
    return `${arrNum[0]} ${arrNum[arrNum.length-1]}`;
}