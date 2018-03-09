/*
冒泡排序
 */
function Bubble (A) {
	var k = 0
	var len = A.length
	for (var i = 0; i <= len; i++) {
		for (var j = A.length-1; j >= i; j--){
			if (A[j]<A[j-1]) {
				exchange(A, j, j-1)
			}
		}
	}
	return A
}
function exchange(A, i, j) {
	var x = A[i]
	A[i] = A[j]
	A[j] = x
	return A
}
