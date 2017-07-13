// 享品质
var allImgA = $(".aaa");
var eqL = $(".liaa");
for (var i = 0; i < eqL.length; i++) {
	eqL[i].index = i;
	eqL[i].onmouseover = function(){
	for (var b = 0; b < eqL.length; b++) {
		anim(allImgA[b],{"left":0});
	};
	anim(allImgA[this.index],{"left":-10});
	}
	eqL[i].onmouseleave = function(){
		anim(allImgA[this.index],{"left":0});
	}
};