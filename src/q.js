/*
快速排序
 */
function Quick(A,p,r) {
  if(p<r) {
  	var q = partition(A, p, r);
	Quick(A,0,q-1)
	Quick(A,q+1,r)
  }
}
function partition(A,p,r) {
	var k = Math.floor(Math.random() * (r-p)) + p
	exchange(A, k, r)
	var i = p-1,x = A[r]
	for(j=p;j<r;j++) {
		if (A[j]<x) {
			i++;
			exchange(A,i,j)
		} 
	}
	exchange(A,i+1,r)
	return i+1
}
function exchange(A, i, j) {
	var x = A[i]
	A[i] = A[j]
	A[j] = x
	return A
}
