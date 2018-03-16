function MergeSort(A){
	var r = A.length
	if (r<=1) {
		return A
	}
	var m = Math.floor(r/2);
	var l=MergeSort(A.slice(0,m))
	var r=MergeSort(A.slice(m))
	return merge(l,r)
}
function merge(l,r){
	var L=[]
	while(l.length&&r.length){
		if (l[0]<r[0]) {
			L.push(l.shift());
		} else {
			L.push(r.shift())
		}
	}
	return L.concat(l).concat(r)
}
