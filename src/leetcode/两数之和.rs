/*
 * @Author: wulongjiang
 * @Date: 2023-01-01 16:19:02
 * @LastEditors: wulongjiang
 * @LastEditTime: 2023-01-01 18:29:06
 * @Description:
 * @FilePath: \leetcode_rust_and_javascript\src\leetcode\两数之和.rs
 */
/*
 * @lc app=leetcode id=1 lang=rust
 *
 * [1] Two Sum
 */

// @lc code=start
impl Solution {
    pub fn two_sum(nums: Vec<i32>, target: i32) -> Vec<i32> {
        let mut map = std::collections::HashMap::new();
        for (i, v) in nums.iter().enumerate() {
            let a = target - v;
            if map.contains_key(&a) {
                return vec![map[&a], i as i32];
            }
            map.insert(v, i as i32);
        }
        unreachable!()
    }
}
// @lc code=end

struct Solution;
