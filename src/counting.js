/*
计数排序
使用场景：数组内元素之均为区间[0,k]的整数
原理：对于任意一个元素，只要知道小于它的元素个数，就知道它的排序位置
 */
function CountSort(A,k){
	var B =new Array(k+1),C=[];
	B.fill(0,0,k+1);
	for (var i = A.length - 1; i >= 0; i--) {
		B[A[i]] = B[A[i]]+1
	}
	for (var i = 1; i <= B.length - 1; i++) {
		B[i] = B[i] + B[i-1]
	}
	for (var i = A.length - 1; i >= 0; i--) {
		C[B[A[i]]-1] = A[i]
		B[A[i]]--
	}
	return C
}