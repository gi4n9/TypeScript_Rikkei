"use strict";
function twoSum(nums, target) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        map.set(nums[i], i);
    }
    return [];
}
const nums = [2, 3, 7, 8, 11, 14, 15];
const target = 25;
console.log(twoSum(nums, target));
