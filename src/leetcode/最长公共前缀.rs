/*
 * @Author: wlj
 * @Date: 2023-01-03 13:57:05
 * @LastEditors: wlj
 * @LastEditTime: 2023-01-03 15:40:56
 * @Description:
 */
impl Solution {
    pub fn longest_common_prefix(strs: Vec<String>) -> String {
        let mut res = String::from("");

        for i in 0..strs[0].len() {
            for s in strs.iter() {
                let s = s.as_bytes();
                if s.len() == i || strs[0].as_bytes()[i] != s[i] {
                    return res;
                }
            }
            let a = strs[0].as_bytes()[i] as char;
            res.push(a)
        }

        res
    }
}

struct Solution;
