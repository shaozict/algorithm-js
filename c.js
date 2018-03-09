/*
插入排序
 */
function Insert(A){
	let alen = A.length -1
	for (var i = 1; i <= alen; i++) {
		var k = A[i], j=i-1
		while(j>=0 && k<A[j]) { //A[j+1]永远会等于k
			exchange(A,j+1,j)
			j--
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