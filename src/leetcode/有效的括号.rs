/*
 * @Author: wlj
 * @Date: 2023-01-04 10:12:57
 * @LastEditors: wlj
 * @LastEditTime: 2023-01-04 10:22:34
 * @Description:
 */
impl Solution {
    pub fn is_valid(s: String) -> bool {
        if s.len() % 2 != 0 {
            return false;
        };

        let mut stack: Vec<char> = vec![];

        for c in s.chars() {
            match c {
                '(' => stack.push(')'),
                '[' => stack.push(']'),
                '{' => stack.push('}'),
                _ => match stack.pop().take() {
                    Some(c_pop) => {
                        if c_pop != c {
                            return false;
                        }
                    }
                    None => {
                        return false;
                    }
                },
            }
        }

        stack.len() == 0
    }
}
struct Solution;
