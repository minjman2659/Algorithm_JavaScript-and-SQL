// https://leetcode.com/problems/3sum/

// Unsolved yet

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var threeSum = function(nums) {
    let result = [];
    if(nums.length < 3) {
        return result;
    }
    
    nums.sort((a, b) => a - b);
    
    let icheck = new Array(nums.length).fill(false);
    let jcheck = new Array(nums.length).fill(false);
    let kcheck = new Array(nums.length).fill(false);
    
    for(let i=0; i<nums.length; i++) {
        for(let j=i+1; j<nums.length; j++) {
            for(let k=j+1; k<nums.length; k++) {
                if(nums[i] + nums[j] + nums[k] === 0 && icheck[i] === false && jcheck[j] === false && kcheck[k] === false) {
                    result.push([nums[i], nums[j], nums[k]]);
                    icheck[i] = true;
                    jcheck[j] = true;
                    kcheck[k] = true;
                }
            }
        }
    }
    
    return result;
};