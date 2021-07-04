// https://leetcode.com/problems/third-maximum-number/

/**
 * @param {number[]} nums
 * @return {number}
 */
 var thirdMax = function(nums) {
    let obj = {};
    for(let num of nums) {
        if(!(num in obj)) {
            obj[num] = true;
        }
    }
    
    let arr = Object.keys(obj)
    arr.sort((a, b) => Number(b) - Number(a));
    
    if(arr.length > 2) {
        return Number(arr[2]);    
    } else {
        return Number(arr[0]);
    }
};