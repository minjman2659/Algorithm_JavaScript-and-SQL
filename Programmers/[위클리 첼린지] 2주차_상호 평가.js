// https://programmers.co.kr/learn/courses/30/lessons/83201

function solution(scores) {
    
    function avgToAlphabet(num) {
        if(num >= 90) return 'A';
        if(num >= 80 && num < 90) return 'B';
        if(num >= 70 && num < 80) return 'C';
        if(num >= 50 && num < 70) return 'D';
        if(num < 50) return 'F';
    }
    
    const obj = {};
    for(let i=0; i<scores.length; i++) {
        for(let j=0; j<scores.length; j++) {
            if(!(i in obj)) {
                obj[i] = [scores[j][i]];
            } else {
                obj[i].push(scores[j][i]);
            }
        }
    }
    
    for(let el in obj) {
        let sameCheck = obj[el].filter((n) => n === obj[el][Number(el)])
        if(sameCheck.length === 1) {
            let max = Math.max(...obj[el]);
            let min = Math.min(...obj[el]);
            if(sameCheck[0] === max || sameCheck[0] === min) {
                obj[el] = obj[el].filter((n) => n !== sameCheck[0]);
            }
        }
        let avg = obj[el].reduce((acc, cur) => acc + cur, 0) / obj[el].length;
        obj[el] = avgToAlphabet(avg);
    }
    
    return Object.values(obj).join('');
}