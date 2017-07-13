// 顶部和左导购的出现
// var search = $("#search");
// var bodys = $("body")[0];
// var allId = bodys.children;
// var lift = $("#lift");
// var enjoyQuality = $("#enjoy-quality");
// var lis = lift.children[0].children;
// var jdSeckill = $("#jd-seckill");
// var hieghts = 0;
// window.onscroll = function(){
// 	hieghts = window.pageYOffset;
// 	if(hieghts>=jdSeckill.offsetTop){
// 		search.style.display = "block";
// 		if(hieghts>=enjoyQuality.offsetTop){
// 			lift.style.display = "block";
// 		}else{
// 			lift.style.display = "none";
// 		}
// 	}
// 	else{
// 		search.style.display = "none";
// 	}
// }



var time = null;
var target = 0;
var current = 0;
var search = $("#search-for");
var twoImgs =  $("#enjoy-quality");
var bodys = $("body")[0];
var allId = $(".quick");
var lift = $("#lift");
var lis = lift.children[0].children;
// console.log(lis);
var hgAll = [];// 获取所有的高度
for (var j = 0; j < allId.length; j++) {
	var tops = allId[j].offsetTop;
	hgAll.push(tops);
};
window.onscroll = function(){
	var hieghts = window.pageYOffset;
	current = hieghts;
	console.log(current);
	if(hieghts>=twoImgs.offsetHeight){
		search.style.display = "block";
		lift.style.display = "block";
		twoImgs.className= "margint";
	}
	else{
		search.style.display = "none";
		lift.style.display = "none";
	}
	// 设置li随鼠标滚动的变化
	for (var k = 0; k < lis.length; k++) {
		if(hgAll[k]<=current){
			for (var m = 0; m < lis.length; m++) {
				lis[m].className="";
			};
			lis[k].className = "change-color";
		}
	}
}
//点击导购栏变到对应位置，以及自身背景的变化
console.log(lis);
for (var i = 0; i < lis.length; i++) {
	lis[i].index = i;
	lis[i].onclick = function(){
		clearInterval(time);
		for (var b = 0; b < lis.length; b++) {
			lis[b].className="normal-color";
		};
		target = hgAll[this.index];
		// console.log(current);
		changess();//调用计时器
		this.className = "change-color";
	}
}
lis[lis.length-1].onclick = function(){
	clearInterval(time);
	target = 0;
	changess();
}
// 计时器函数
function changess(){
	time = setInterval(function(){
	var step = (target-current)/10;
	current += step;
	window.scrollTo(0,current);
	if(Math.round(current)==target){
		current = target;
		clearInterval(time);
	}
},20);
}