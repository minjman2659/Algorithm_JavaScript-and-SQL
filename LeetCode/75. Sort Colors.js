// https://leetcode.com/problems/sort-colors/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var sortColors = function(nums) {
    for(let i=0; i<nums.length; i++) {
        let swap = false;
        for(let j=1; j<nums.length-i; j++) {
            if(nums[j-1] > nums[j]) {
                let small = nums[j];
                nums[j] = nums[j-1];
                nums[j-1] = small;
                swap = true;
            }
        }
        if(!swap) {
            break;
        }
    }
};