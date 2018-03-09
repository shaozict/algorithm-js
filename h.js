/*
堆排序
 */
function Heap(A){
	var D=[]
	buildHeap(A);
    while(A.length){
    	exchange(A,0,A.length-1)
		D.unshift(A.pop())
		maxHeap(A,0)
    }
    return D
}
function maxHeap(A,k){
	var n = A.length - 1,l=left(k),r = right(k)
	//找到k,l,r里最大的元素，交换 =》转化为 在剩下的子树里的maxHeap问题
	var target = k
	if (l<=n && A[k]<A[l]) {
		target = l
	}
	if (r<=n && A[target]<A[r]) {
		target = r
	}
	if (target!=k) {
	    exchange(A,k,target)
	    maxHeap(A, target)
	}
}
function buildHeap(A){
	var r = A.length, blen= Math.floor(r/2)+1;
	for (var i = blen; i >= 0; i--) {
		maxHeap(A,i)
	}
}
function exchange(A, i, j) {
	var x = A[i]
	A[i] = A[j]
	A[j] = x
	return A
}
function parent(i) {
	return Math.floor((i+1)/2)-1
}
function left(i) {
	return 2*(i+1) - 1
}
function right(i) {
	return 2*(i+1)+1 -1
}