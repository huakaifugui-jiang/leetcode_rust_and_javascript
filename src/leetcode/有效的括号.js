/*
 * @Author: wlj
 * @Date: 2023-01-04 09:04:30
 * @LastEditors: wlj
 * @LastEditTime: 2023-01-04 10:12:44
 * @Description:
 */
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  //1.左括号必须用【相同类型】的右括号闭合
  //2.左括号必须以正确的顺序闭合 [{}]
  //3.每个右括号都有一个对应的相同类型的左括号

  //可以得出一个规律 s的长度一定是偶数
  if (s.length % 2 !== 0) {
    return false;
  }

  let stack = []; //存放右括号的栈 利用栈的先进后出的特点

  for (let i = 0; i < s.length; i++) {
    switch (s[i]) {
      case "(":
        stack.push(")");
        break;
      case "[":
        stack.push("]");
        break;
      case "{":
        stack.push("}");
        break;
      default:
        if (s[i] !== stack.pop()) {
          return false;
        }
    }
  }

  return stack.length === 0;
};

console.log(isValid("()")); //true
console.log(isValid("()[]{}")); //true
console.log(isValid("(]")); //false
console.log(isValid("{[]}")); //true
console.log(isValid("(){[]}")); //true
console.log(isValid("(){[((]}")); //false
console.log(isValid("[(])")); //false
