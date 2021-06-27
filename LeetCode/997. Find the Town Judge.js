/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */

// https://leetcode.com/problems/find-the-town-judge/

 var findJudge = function(n, trust) {
//     let matrix = new Array(n).fill(0).map((el) => new Array(n).fill(0));
    
//     for(let el of trust) {
//         matrix[el[0]-1][el[1]-1] = 1;
//     }
    
// // ------------------------------------------------------------ matrix 완성
    
//     let count = 0;
//     for(let i=0; i<matrix.length; i++) {
//         for(let j=0; j<matrix[i].length; j++) {
//             if(matrix[j][i] === 1) {
//                 count++;
//             }
//         }
//         if(count === n-1) {
//             let judge = i;
//             if(matrix[judge].reduce((sum, cur) => sum + cur) === 0) {
//                 return judge + 1;
//             } else {
//                 return -1;
//             }
//         } else {
//             count = 0;
//         }
//     }
    
//     return -1;

    let obj = {};
    let countArr = new Array(n+1).fill(0);
    
    for(let el of trust) {
        if(!(el[0] in obj)) {
            obj[el[0]] = [el[1]];
        } else {
            obj[el[0]].push(el[1]);
        }
        countArr[el[1]]++;
    }
    
    for(let i=1; i<countArr.length; i++) {
        if(countArr[i] === n-1 && obj[i] === undefined) {
            return i;
        }
    }
    
    return -1;
};
