// $(function() {
// 	// var index = 0;
// 	$("li").hover(function() {
// 		$(this).css({
// 			"background-color": "#f10215"
// 		}).siblings().css({
// 			"background-color": "#7a6e6e"
// 		});
// 		//$("p").stop().animate({"width":0},200);
// 		$(this.children[1]).stop().animate({
// 			"width": 100
// 		}, 200);
// 		// index = $(this.index);
// 	}, function() {
// 		$(this).css({
// 			"background-color": "#7a6e6e"
// 		});
// 		$(this.children[1]).stop().animate({
// 			"width": 0
// 		}, 200);
// 	});
// })
var rightLis = $(".right-slide");
var rst = $(".right-slide-text");
for (var i = 0; i < rightLis.length; i++) {
	rightLis[i].index = i;
	rightLis[i].onmouseover = function(){
	for (var b = 0; b < rightLis.length; b++) {
		anim(rst[b],{"width":0});
		rightLis[b].style.backgroundColor="#7a6e6e";
	};
	anim(rst[this.index],{"width":80});
	rightLis[this.index].style.backgroundColor="#f10215";
	}
	rightLis[i].onmouseleave = function(){
		anim(rst[this.index],{"width":0});
		rightLis[this.index].style.backgroundColor="#7a6e6e";
	}
};