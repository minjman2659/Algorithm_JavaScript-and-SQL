// https://programmers.co.kr/learn/courses/30/lessons/42839#qna

function solution(numbers) {
    // 먼저 요소들의 부분 조합들을 배열로 구한 후, 소수의 개수를 구하자!
    numbers = numbers.split('');
    
    // 소수 판별 모듈
    const isPrime = (num) => {
        if(num === 2) {
            return true;
        }
        if(num < 2 || num % 2 === 0) {
            return false;
        }
        let sqrt = parseInt(Math.sqrt(num));
        for(let i=3; i<=sqrt; i=i+2) {
            if(num % i === 0) {
                return false;
            }
        }
        return true;
    }
    
    // 순열 모듈
    let result = [];
    for(let i=1; i<=numbers.length; i++) {
        result.push(...getPermutation(numbers, i));
    }
    
    function getPermutation(arr, num) {
        let tmp = [];
        if(num === 1) {
            return arr.map((el) => [el]);
        }

        arr.forEach((fixed, idx, origin) => {
            let rest = [...origin.slice(0, idx), ...origin.slice(idx + 1)];
            let combinations = getPermutation(rest, num - 1);
            let attached = combinations.map(el => [fixed, ...el]);
            tmp.push(...attached);
        }) 
        return tmp;
    }
    
    // 중복 체크
    result = result.map((el) => el.join(''));
    const obj = {};
    for(let el of result) {
        if(!(Number(el) in obj)) {
            obj[el] = true;
        }
    }
    const answer = Object.keys(obj).map((el) => Number(el));
    
    // 소수 판별 카운트
    let count = 0;
    for(let final of answer) {
        if(isPrime(final)) {
            count++;
        }
    }
    
    return count;
}