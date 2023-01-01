/*
 * @Author: wulongjiang
 * @Date: 2023-01-01 18:31:11
 * @LastEditors: wulongjiang
 * @LastEditTime: 2023-01-01 19:05:34
 * @Description:
 * @FilePath: \leetcode_rust_and_javascript\src\leetcode\回文数.ts
 */
function isPalindrome(x: number): boolean {
  //我的解题思路 转成字符串
  //   let str = x.toString();
  //   let reverseStr = x.toString().split("").reverse().join("");
  //   return str === reverseStr;

  //方法二，反转一半的数字
  //首先带有-的一定不是回文数字，并且末尾是0（不包括 0）的也肯定不是
  if (x < 0 || (x % 10 === 0 && x !== 0)) {
    return false;
  }

  //比如123 =》1 2 3  1221 =》 x = 12  reversedNumber =12
  //假设 前一半为f 后一半为b f一定是要大于b的
  //如何反转一半数字？ 如果 123
  let reversedNumber = 0;
  while (x > reversedNumber) {
    reversedNumber = reversedNumber * 10 + (x % 10);
    x = Math.floor(x / 10);
  }

  return x === reversedNumber || x === Math.floor(reversedNumber / 10); //奇数判断
}
