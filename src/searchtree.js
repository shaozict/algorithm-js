/*
默认数组0下标存储根root
 */
var S=[{
	key: 11,
	left: 1,
	right: 2,
	p: null,
	index: 0
},{
	key: 8,
	left: 3,
	right: null,
	p: 0,
	index: 1
},{
	key: 20,
	left: null,
	right: null,
	p: 0,
	index: 2
},{
	key: 6,
	left: null,
	right: null,
	p: 1,
	index: 3
}]
/*
中序排序
 */
var walk = []
function inorderWalk(S,root){
	if(!S[root]) return walk;
	inorderWalk(S,S[root].left)
	walk.push(S[root].key)
	inorderWalk(S,S[root].right)
}
/*
查找
 */
var z=null
function search(S,root,k){
	if (!S[root]) 
		return null;
	if(k == S[root].key) 
		z = root;
	if (k < S[root].key){
		search(S,S[root].left,k);
	} else {
		search(S,S[root].right,k)
	}
}
/*
查找最大值
 */
function searchMax(S,root){
	var x = root||0
	while(S[x] && S[x].right){
		x = S[x].right
	}
	return S[x]
}
/*
查找最小值
 */
function searchMin(S,root){
	var x = root||0
	while(S[x] && S[x].left){
		x = S[x].left
	}
	return S[x]
}
/*
查找后继，x的后继：大于x的最小值.后继一定没有左孩子
1. 如果x有右孩子，后继一定在右子树,且为右子树的最小值
2. 如果x没有右孩子，那么当存在x的祖先结点，使得x位于它的左子树。x的后继为最接近它的满足此条件的祖先结点值
3. 如果x没有右孩子，且x不位于它的所有祖先结点的左子树上，那么x没有后继
 */
function successer(S,s){
	if (s.right) 
		return searchMin(S,s.right);
	while (S[s.p] && S[s.p].right == s) {
		s=S[s.p]
	}
	return s.p
}
/*
查找前驱，x的前驱：小于x的最大值。前驱一定没有右孩子
 */
function predecessor(S,s){
	if (s.left) 
		return searchMax(S,s.left);
	while (S[s.p] && S[s.p].left == s) {
		s=S[s.p]
	}
	return s.p
}
/*
插入,核心必然存在一个叶结点满足k作为它的子结点满足二叉搜索树条件。当然这不是唯一的插入位置
 */
function insert(S,k){
	var z = {
		key: k,
		p: null,
		left: null,
		right: null,
		index:S.length
	};
	S.push(z)
	var x = S[0],y=null;
	if (!S[0]) {
		S[0] = z
	}
	while(x != null){
		y=x;
		if (k < x.key) {
			x = S[x.left];
		} else {
			x = S[x.right];
		}
	}
	z.p = y.index
	if (k<y.key) {
		y.left = z.index
	} else {
		y.right = z.index
	}
}
/*
删除，核心：根据目标删除结点的子树情况，分情况讨论
1. 无子树
2. 有一个子树
3. 有左右两个子树，先删除它的后继（后继一定没有左子树,属于第二种情况），再用后继替代本身(目标结点有右子树，必然有后继)
 */

class BinarySearchTree {
	constructor(arr){
		this.origin =[];
		if (arr){
			this.origin = this.create(arr)
		}
		//可以在这做禁止this.origin赋值
	}
	create(arr){
		arr.forEach(k=>{
			this.insert(k)
		})
		return this.origin
	}
	insert(k){
		var S = this.origin
		var z = {
			key: k,
			p: null,
			left: null,
			right: null,
			index:S.length
		};
		S.push(z)
		var x = S[0],y=null;
		if (!S[0]) {
			S[0] = z
		}
		while(x != null){
			y=x;
			if (k < x.key) {
				x = S[x.left];
			} else {
				x = S[x.right];
			}
		}
		z.p = y.index
		if (k<y.key) {
			y.left = z.index
		} else {
			y.right = z.index
		}
		return this.origin
	}
	/*
	中序排序
	 */
	inorderWalk(root){
		var S = this.origin,root = root || 0,walk=[];
		var inorderWalk = ()=> {
			if(!S[root]) return walk;
			inorderWalk(S,S[root].left)
			walk.push(S[root].key)
			inorderWalk(S,S[root].right)
		}
		inorderWalk(root)
		return walk
	}
	/*
	查找
	 */
	search(k){
		var S = this.origin,z=0
		var search = () =>{
			if (!S[root]) 
				return null;
			if(k == S[root].key) 
				z = root;
			if (k < S[root].key){
				search(S,S[root].left,k);
			} else {
				search(S,S[root].right,k)
			}
		}
		search(S,0,k)
		return S[z]
	}
	/*
	查找最大值
	 */
	searchMax(root){
		var S = this.origin, x = root||0
		while(S[x] && S[x].right){
			x = S[x].right
		}
		return S[x]
	}
	/*
	查找最小值
	 */
	searchMin(root){
		var S = this.origin,  x = root||0
		while(S[x] && S[x].left){
			x = S[x].left
		}
		return S[x]
	}
	/*
	查找后继，x的后继：大于x的最小值.后继一定没有左孩子
	1. 如果x有右孩子，后继一定在右子树,且为右子树的最小值
	2. 如果x没有右孩子，那么当存在x的祖先结点，使得x位于它的左子树。x的后继为最接近它的满足此条件的祖先结点值
	3. 如果x没有右孩子，且x不位于它的所有祖先结点的左子树上，那么x没有后继
	 */
	successor(s){
		var S = this.origin;
		if (s.right) 
			return searchMin(S,s.right);
		while (S[s.p] && S[s.p].right == s) {
			s=S[s.p]
		}
		return s.p
	}
	/*
	查找前驱，x的前驱：小于x的最大值。前驱一定没有右孩子
	 */
	precursor(s){
		var S = this.origin
		if (s.left) 
			return searchMax(S,s.left);
		while (S[s.p] && S[s.p].left == s) {
			s=S[s.p]
		}
		return s.p
	}
	delete(s) {
		var S = this.origin;
		var callee = arguments.callee
		// 情况1
		if (!s.left && !s.right){
			if (S[s.p].left == s.index) {
				S[s.p].left = null
			} else {
				S[s.p].right = null
			}
		}
		// 情况2
		if (s.left && !s.right) {
			S[s.left].p = S[s.p].index
			S[s.p].left = s.left
		}
		if (s.right && !s.left) {
			S[s.right].p = S[s.p].index
			S[s.p].right = s.right
		}
		// 情况3
		if (s.left && s.right) {
			var y = successer(S,s)
			callee(S,y)
			replace(S,z,y)
		}
	}
	replace(x,y) {
		var S = this.origin
		if (S[x.p].left == x.index) {
			S[x.p].left = y.index
		} else {
			S[x.p].right = y.index
		}
		y.p = x.p.index
		y.left = x.left.index
		y.right = x.right.index
		x.left.p = y.index
		x.right.p = y.index
	}

}
















