// https://programmers.co.kr/learn/courses/30/lessons/43163

// 'Toy Problem_15.PrimePassword' 문제와 비슷

function solution(begin, target, words) {
    if(!words.includes(target)) {
        return 0;
    }
    
    // BFS로 queue 사용 
    // => words의 요소들을 모두 방문하면서 target까지의 최단경로를 구해야 하기 때문에 BFS로 푸는 것이 효율적!
    const queue = [];
    const isVisited = [];
    
    queue.push([begin, 0]);
    
    while(queue.length > 0) {
        let [now, count] = queue.shift();
        if(now === target) {
            return count;
        }
        
        for(let i=0; i<words.length; i++) {
            if(differentCheck(now, words[i]) === 1 && !isVisited.includes(words[i])) {
                isVisited.push(words[i]);
                queue.push([words[i], count+1]);
            }
        }
    }
    
    // 체킹 모듈
    function differentCheck(str1, str2) {
        let count = 0;
        for(let j=0; j<str1.length; j++) {
            if(str1[j] !== str2[j]) {
                count++;
            }
        }
        return count;
    }
}