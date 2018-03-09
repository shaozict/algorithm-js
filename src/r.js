/*
洗牌算法
 */
function Random(A,r) {
	var len = r+1,d = Math.floor(Math.random()*len)
	if (r>=0) {
		exchange(A,d,r)
	    Random(A,r-1)
	}
}
function exchange(A, i, j) {
	var x = A[i]
	A[i] = A[j]
	A[j] = x
	return A
}
