/*
 * @Author: wulongjiang
 * @Date: 2023-01-02 19:47:08
 * @LastEditors: wulongjiang
 * @LastEditTime: 2023-01-03 00:20:19
 * @Description:
 * @FilePath: \leetcode_rust_and_javascript\src\leetcode\罗马数字转整数.rs
 */

impl Solution {
    pub fn roman_to_int(s: String) -> i32 {
        let map = std::collections::HashMap::from([
            ('I', 1),
            ('V', 5),
            ('X', 10),
            ('L', 50),
            ('C', 100),
            ('D', 500),
            ('M', 1000),
        ]);
        let chars: Vec<char> = s.chars().collect();
        let mut sum = *map.get(&chars[chars.len() - 1]).unwrap();
        for i in 0..s.len() - 1 {
            let item = chars[i];
            let next_item = chars[i + 1];
            if map.get(&item).unwrap() < map.get(&next_item).unwrap() {
                sum -= map.get(&item).unwrap();
            } else {
                sum += map.get(&item).unwrap()
            }
        }

        sum
    }
}

struct Solution;
