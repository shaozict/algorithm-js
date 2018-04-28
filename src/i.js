//以快排为模型的选择算法 - 期望O(n),最坏O(n^2)
function quick_select(A,p,r,i){
	if (p==r) {
		return A[p]
	}
	var q = BFPTR_partition(A,p,r)
	var k = q-p+1
	if (i == k) {
		return A[q]
	} else if (i < k) {
		return quick_select(A,p,q-1,i)
	} else {
		return quick_select(A,q,r,i)
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

//BFPTR快排选择优化算法
function BFPTR_partition(A,p,r) {
	if (p==r) {
		return p
	}
	var base= find_mid(A,p,r)
	var k = find_index(A,p,r,base)
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


	function find_mid(A,p,r){
		if (p==r) {
			return A[p]
		}
		var q = p, median = [];
		while (q<r) {
			var _r = (q+5)>r?r:(q+5)
			var a = A.slice(q,_r+1)
			median.push(Insert(a)[Math.floor(a.length/2)])
			q = _r
		}
		return find_mid(median,0,median.length-1)
	}

	function find_index(A,p,r,base){
		return A.slice(p,r+1).indexOf(base)
	}
}

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

