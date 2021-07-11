// https://leetcode.com/problems/3sum/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var threeSum = function(nums) {
    if(nums.length < 3) {
        return [];
    }
    
    const result = [];
    nums.sort((a , b) => a - b);
    
    for(let i=0; i<nums.length; i++) {
        let left = i+1;
        let right = nums.length-1;
        while(left < right) {
            let sum = nums[i] + nums[left] + nums[right];
            if(sum === 0) {
                result.push([nums[i], nums[left], nums[right]]);
                while(nums[left] === nums[left+1]) {
                    left++;
                }
                while(nums[right] === nums[right-1]) {
                    right--;
                }
                left++;
                right--;
            } else if(sum > 0) {
                right--;
            } else {
                left++;
            }
        }
        while(nums[i] === nums[i+1]) {
            i++;
        }
    }
    
    return result;
    
};