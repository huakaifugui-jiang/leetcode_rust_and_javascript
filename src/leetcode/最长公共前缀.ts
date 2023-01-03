/*
 * @Author: wlj
 * @Date: 2023-01-03 13:57:05
 * @LastEditors: wlj
 * @LastEditTime: 2023-01-03 15:01:15
 * @Description:
 */
/**
 * @param {string[]} strs
 * @return {string}
 */
function longestCommonPrefix(strs: string[]): string {
  //我的方法
  //   let publicStr = "";
  //   let firstStr = strs[0];
  //   //拿到第一个字符串 ["flower","flow","flight"]
  //   for (let i = 0; i < firstStr.length; i++) {
  //     let temp = publicStr + firstStr[i]; //temp:f fl flo  pstr:"" f fl fstStr:f l o
  //     let filterStrs = strs.filter((i) => i.startsWith(temp));
  //     if (filterStrs.length === strs.length) {
  //       publicStr = temp; //f fl
  //     } else {
  //       break;
  //     }
  //   }
  //   return publicStr;
  //横线扫描 对每一个数组中的item 都进行比对 ，最后得到公共str
  //   let publicStr = strs[0];
  //   for (let i = 1; i < strs.length; i++) {
  //     let sameStr = "";
  //     //对publicStr进行遍历查看是否有公共部分
  //     for (let j = 0; j < publicStr.length; j++) {
  //       while (publicStr[j] === strs[i][j]) {
  //         sameStr += publicStr[j];
  //       }
  //       if (sameStr.length === 0) {
  //         break;
  //       }
  //       publicStr = sameStr;
  //     }
  //   }
  //   return publicStr;
  //纵向扫描  ["flower","flow","flight"] 拿出第一个 比如 flower 对每个数组的字符串的 相同位数进行对比  如果一旦出现不一样 就可以直接返回
  let res = "";
  for (let i = 0; i < strs[0].length; i++) {
    for (let j = 1; j < strs.length; j++) {
      if (strs[j][i] !== strs[0][i]) return res;
    }
    res += strs[0][i];
  }
  return res;
}
