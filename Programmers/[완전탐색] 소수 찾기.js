// https://programmers.co.kr/learn/courses/30/lessons/42839#qna

// 순열 문제인 것 같다... 아직 순열을 모르기에 공부 후 다시 풀자
// Unsolved yet

function solution(numbers) {
    // 먼저 요소들의 부분 조합들을 배열로 구한 후, 소수의 개수를 구하자!
    
    numbers = numbers.split('');
    numbers.sort((a, b) => Number(a) - Number(b));
    
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
    
    const result = [];
    const check = new Array(numbers.length).fill(false);
    
    function arrPush(arr) {
        let tmp = '';
        for(let i=0; i<arr.length; i++) {
            if(check[i]) {
                tmp = tmp + arr[i];
            }
        }
        result.push(tmp);
    }
    
    function checkFunc(start) {
        for(let j=start; j<numbers.length; j++) {
            check[j] = true;
            arrPush(numbers);
            checkFunc(j+1);
            check[j] = false;
        }
    }
    
    checkFunc(0);
    const makeNumArr = result.map((el) => Number(el));
    let obj = {};
    for(let numArr of makeNumArr) {
        if(!(numArr in obj)) {
            obj[numArr] = true;
        }
    }
    
    let realNumArr = Object.keys(obj);
    let count = 0;
    
    for(let num of realNumArr) {
        if(isPrime(num)) {
            count++;
        }
    }
    
    return count;
}