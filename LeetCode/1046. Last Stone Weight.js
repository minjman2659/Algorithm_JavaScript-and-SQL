// https://leetcode.com/problems/last-stone-weight/

/**
 * @param {number[]} stones
 * @return {number}
 */
 var lastStoneWeight = function(stones) {
    stones.sort((a,b) => b-a);  // 내림차순
    
    while(stones.length > 1) {    // stones의 길이가 1 또는 0이 될 때까지 지속
        
        if(stones[0] === stones[1]) {  // 큰 놈 둘이 같을 경우,
            stones.splice(0, 2);
            
        } else {            // 큰 놈 둘의 차가 존재할 경우, 
            let abs = Math.abs(stones[0] - stones[1]);
            stones.push(abs);
            stones.splice(0, 2);   // 그냥 큰 놈 둘을 지워버리고,
            stones.sort((a,b) => b-a);   // 둘의 차를 포함해서 내림차순 시킨다.
        }
        
    }
    
    return stones;
};