/*
根据父子关系构建树型
[
 [2,1,'abc'],
 [5,1,'aac'],
 [1,0,'aaa'],
 [0,null,'ccc']
] =》
{
	id:1,
	parent:0,
	value:'aaa'
	children:[{
		id:2,
		parent:1,
		value:'abc',
		children:[]
	},{
		id:5,
		parent:1,
		value:'aac',
		children:[]
	}]
}
 */
var T = [[2,1,'abc'],[5,1,'aac'],[1,0,'aaa'],[0,null,'ccc']];

function toTree(data) {
	var Tree={},gid;
	for (var i = data.length - 1; i >= 0; i--) {
		Tree[data[i][0]] = {
			id: data[i][0],
			parent: data[i][1],
			value: data[i][2],
			children: []
		}
	}
	for (var i = data.length - 1; i >= 0; i--) {
		var pid = data[i][1], id=data[i][0]
		if ((pid !== null)&&Tree[pid]) {
			Tree[pid].children.push(Tree[id])
		} else {
			gid = id
		}
	}
	return Tree[gid]
}