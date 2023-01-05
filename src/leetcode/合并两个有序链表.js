/*
 * @Author: wlj
 * @Date: 2023-01-05 17:08:31
 * @LastEditors: wulongjiang
 * @LastEditTime: 2023-01-06 00:15:11
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
  // let prevHead = ListNode(-1);
  // let prev = prevHead;

  // while (list1 !== null && list2 !== null) {
  //   if (list1.val <= list2.val) {
  //     prev.next = list1;
  //     list1 = list1.next;
  //   }else{
  //     prev.next = list2;
  //     list2 = list2.next;
  //   }

  //   prev = prev.next;
  // }

  //递归
  // if (list1 === null) {
  //   return list2
  // }else if (list2 === null) {
  //   return list1
  // }else{
  //   if(list1.val <=list2.val){
  //     return mergeTwoLists(list1.next,list2)
  //   }else{
  //     return mergeTwoLists(list1,list2.next)
  //   }
  // }

  let l1 = new ListNode(-1, list1);
  while (list2 !== null && list1 !== null) {
    if (list1.val <= list2.val) {
      l1.next = list2;
    }
    list1 = list1.val;
    list2 = list2.next;
  }
};

console.log(mergeTwoLists([1, 2, 4], [1, 3, 4])); //[1,1,2,3,4,4]
console.log(mergeTwoLists([], [0])); //[0]
