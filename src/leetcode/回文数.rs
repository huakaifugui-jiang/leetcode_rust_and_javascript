/*
 * @Author: wulongjiang
 * @Date: 2023-01-01 19:06:09
 * @LastEditors: wulongjiang
 * @LastEditTime: 2023-01-01 19:33:04
 * @Description:
 * @FilePath: \leetcode_rust_and_javascript\src\leetcode\回文数.rs
 */

impl Solution {
    pub fn is_palindrome(x: i32) -> bool {
        if x < 0 || (x % 10 == 0 && x != 0) {
            return false;
        }

        let mut reverse_num = 0;
        let mut num = x;
        while num > reverse_num {
            reverse_num = reverse_num * 10 + (num % 10);
            num = num / 10;
        }

        return reverse_num == num || (reverse_num / 10 == num);
    }
}
struct Solution;
