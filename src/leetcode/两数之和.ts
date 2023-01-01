/*
 * @Author: wulongjiang
 * @Date: 2023-01-01 18:27:44
 * @LastEditors: wulongjiang
 * @LastEditTime: 2023-01-01 18:28:11
 * @Description: 
 * @FilePath: \leetcode_rust_and_javascript\src\leetcode\两数之和.ts
 */
function twoSum(nums: number[], target: number): number[] {
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (map.has(target - nums[i])) {
            return [map.get(target - nums[i]), i]
        }
        map.set(nums[i], i);
    }
    return []
};