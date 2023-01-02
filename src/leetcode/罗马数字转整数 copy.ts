/*
 * @Author: wulongjiang
 * @Date: 2023-01-02 19:47:08
 * @LastEditors: wulongjiang
 * @LastEditTime: 2023-01-02 23:59:32
 * @Description:
 * @FilePath: \leetcode_rust_and_javascript\src\leetcode\罗马数字转整数.ts
 */
function romanToInt(s: string): number {
  let match: Object = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let sum = 0;
  for (let i = 0; i < s.length; i++) {
    let item = s[i]; //左边数字
    let nextItem = s[i + 1]; //右边数字
    //按照规律 比如IV 左边的数字I 如果小于 右边的数字V 那么就需要减去左边的数字
    if (match[item] < match[nextItem]) {
      sum -= match[item];
    } else {
      sum += match[item];
    }
  }
  return sum;
}
