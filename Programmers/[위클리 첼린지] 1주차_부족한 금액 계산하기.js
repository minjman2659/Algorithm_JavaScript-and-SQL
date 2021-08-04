// https://programmers.co.kr/learn/courses/30/lessons/82612

function solution(price, money, count) {
    let sum = price;
    
    for(let i=2; i<=count; i++) {
        sum = sum + price*i;
    }
    
    if(sum > money) {
        return sum - money;
    } else {
        return 0;
    }
}