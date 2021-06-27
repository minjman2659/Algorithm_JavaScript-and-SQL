// https://programmers.co.kr/learn/courses/30/lessons/43165

function solution(numbers, target) {
    let count = 0;
    
    const repeat = (idx, sum) => {
        if(idx === numbers.length) {
            if(sum === target) {
                count++;
            }
            return;
        }
        
        repeat(idx+1, sum+numbers[idx]);
        repeat(idx+1, sum-numbers[idx]);
    }
    
    repeat(0, 0);
    return count;
}