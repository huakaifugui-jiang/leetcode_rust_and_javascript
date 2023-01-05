/*
 * @Author: wlj
 * @Date: 2023-01-05 17:08:31
 * @LastEditors: wlj
 * @LastEditTime: 2023-01-05 17:34:20
 * @Description:
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  //将两个升序列表 合并成一个
  //因为两个都是升序列表 所以列表的最大数就是最后一位数字
  //暴力破解

  while (list1.next){
    
  }

  const resultList = new ListNode();
};

console.log(mergeTwoLists([1, 2, 4], [1, 3, 4])); //[1,1,2,3,4,4]
console.log(mergeTwoLists([], [0])); //[0]
