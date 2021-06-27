// https://leetcode.com/problems/sqrtx/

/**
 * @param {number} x
 * @return {number}
 */
 var mySqrt = function(x) {
    // let digit = [1, 0.1];
    // let i = 1;
    // for(let el of digit) {
    //     while(i*i < x) {
    //         i = i + el;
    //     }
    //     if(i*i === x) {
    //         return i;
    //     }
    //     i = i - el;
    // }
    // return Math.floor(i);
    
    let i = 1;
    while(i*i < x) {
        i++;
    }
    if(i*i === x) {
        return i;
    }
    return i-1;
};