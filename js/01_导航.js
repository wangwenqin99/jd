
// 导航栏隐藏的显示
var myId = $("#my-jd");
var jdHidCont = $("#jd-hid-cont");
myId.onmouseover = function(){
	jdHidCont.style.display = "block";
}
myId.onmouseleave = function(){
	jdHidCont.style.display = "none";
	
}
var pepServ = $("#pepserv");
var kfHid = $("#kf-hid");
pepServ.onmouseover = function(){
	kfHid.style.display = "block";
}
pepServ.onmouseleave = function(){
	kfHid.style.display = "none";
}
// 大图片的切换
var lfHint = $("#lf-hint");
var rfHint = $("#rf-hint");
var fsbiHead = $(".fsbi-head")[0];
var imgsUl = $(".big-imgs")[0].children[0];
var otherLis = $(".other")[0].children[0].children;
var m = 0;
fsbiHead.onmouseover = function(){
	lfHint.style.display = "block";
	rfHint.style.display = "block";
}
fsbiHead.onmouseleave = function(){
	lfHint.style.display = "";
	rfHint.style.display = "";
}
for (var i = 0; i < otherLis.length; i++) {
	otherLis[i].index=i;
	otherLis[i].onmouseover= function(){
		for (var j = 0; j < otherLis.length; j++) {
			otherLis[j].className="bgcn";
		};
		otherLis[this.index].className="bgcs";
		anim(imgsUl,{"left":-790*[this.index]});
		m = this.index;
	}
};
// 点击事件
rfHint.onclick = function(){
	if(m>6){
		m=6;
	}
	anim(imgsUl,{"left":-790*(++m)});
	for (var j = 0; j < otherLis.length; j++) {
			otherLis[j].className="bgcn";
		};
		otherLis[m].className="bgcs";
}
lfHint.onclick = function(){
	if(m<1){
		m=1;
	}
	anim(imgsUl,{"left":-790*(--m)});
	for (var j = 0; j < otherLis.length; j++) {
			otherLis[j].className="bgcn";
		};
		otherLis[m].className="bgcs";
}
/*===============================================================================*/
// 家用电器现
var homeLis = $(".fs-coll")[0].children[0].children;
var fsCont = $(".fs-cont")[0];
var fsBigImg = $(".fs-bigimg")[0];
homeLis[0].onmouseover = function(){
	fsCont.style.display="block";
	fsBigImg.style.display = "none";
}
fsCont.onmouseleave = function(){
	fsCont.style.display="none";
	fsBigImg.style.display = "block";
}
/*=====================================================================*/
// 京东秒杀内容
var jdcLf = $(".jdc-lf")[0];
var jdcUl = jdcLf.children[0];
var jdLis = jdcUl.children;
var jdImgs = jdcUl.getElementsByTagName("img");
var jdcLt = $(".jdc-lt")[0];
var jdcRt = $(".jdc-rt")[0];
for (var a = 0; a < jdLis.length; a++) {
	jdLis[a].index = a;
	jdLis[a].onmouseover = function(){
		for (var b = 0; b < jdLis.length; b++) {
			anim(jdImgs[b],{"top":0});
		};
		anim(jdImgs[this.index],{"top":-10});
	}
	jdLis[a].onmouseleave =function(){
		anim(jdImgs[this.index],{"top":0});
	}
};
jdcLf.onmouseover = function(){
	jdcLt.style.display = "block";
	jdcRt.style.display = "block";
}
jdcLf.onmouseleave = function(){
	jdcLt.style.display = "";
	jdcRt.style.display = "";
}
var jdcTemp = 0;
jdcRt.onclick = function(){
	if(jdcTemp>2){
		jdcTemp=2;
	}
	anim(jdcUl,{"left":-1000*(++jdcTemp)});
}

jdcLt.onclick = function(){
	if(jdcTemp<1){
		jdcTemp=1;
	}
	anim(jdcUl,{"left":-1000*(--jdcTemp)});
}
/*===================================================================*/
// 发现好货内容
var fgContsUl = $(".fg-conts")[0].children[0];
var fgContsLis = fgContsUl.children;
var fgContsImg = fgContsUl.getElementsByTagName("img");
for (var i = 0; i < fgContsLis.length; i++) {
	fgContsLis[i].index = i;
	fgContsLis[i].onmouseover = function(){
		for (var b = 0; b < fgContsLis.length; b++) {
			anim(fgContsImg[b],{"right":10});
		};
		anim(fgContsImg[this.index],{"right":20});
	}
	fgContsLis[i].onmouseleave = function(){
		anim(fgContsImg[this.index],{"right":10});
	}
};
/*====================================================================*/
// 优品专辑
var wpConts = $(".wp-conts")[0];
var wpUl = $(".wp-ul")[0];
var wpLtip = $("#wp-ltip");
var wpRtip = $("#wp-rtip");
var wpLis = wpUl.children;
var wpC = $(".wp-c")[0];
var wpD = $(".wp-d")[0];
var wpE = $(".wp-e")[0];
var wpSs = $(".wpss");
var wptem = 0;
for (var i = 0; i < wpLis.length; i++) {
	wpLis[i].index = i;
	wpLis[i].onmouseover = function(){
		for (var j = 0; j < wpLis.length; j++) {
		anim(wpSs[j],{"z-index":1,"opacity":0});
		wpLis[j].style.backgroundColor = "#bbb";
	};
	wptem = this.index;
	anim(wpSs[this.index],{"z-index":10,"opacity":1});
	wpLis[this.index].style.backgroundColor = "red";
	}
};
wpLtip.onclick = function(){
	if(wptem<1){
		wptem=3;
	}
	for (var j = 0; j < wpLis.length; j++) {
		anim(wpSs[j],{"z-index":1,"opacity":0});
		wpLis[j].style.backgroundColor = "#bbb";
	};
	anim(wpSs[--wptem],{"z-index":10,"opacity":1});
	wpLis[wptem].style.backgroundColor = "red";
}
wpRtip.onclick = function(){
	if(wptem>1){
		wptem=-1;
	}
	for (var j = 0; j < wpLis.length; j++) {
		anim(wpSs[j],{"z-index":1,"opacity":0});
		wpLis[j].style.backgroundColor = "#bbb";
	};
	anim(wpSs[++wptem],{"z-index":10,"opacity":1});
	wpLis[wptem].style.backgroundColor = "red";
}
/*====================================================================*/
// 排行榜内容
var rksH = $(".rks-h")[0];
var alla= rksH.getElementsByTagName("a");
var changeP = $("#change-p");
var rksFir = $(".rks-fir")[0];
var allimags = rksFir.getElementsByTagName("img");
var allI = rksFir.getElementsByTagName("i");
var conImgs = ["images/55e3cf94N19212032.jpg!q90.webp","images/58be10fbN53101069.jpg!q90.webp",
"images/589836c6N251ea875.jpg!q90.webp","images/58fb03beN5cbe4bb9.jpg!q90.webp","images/589bd7adNa2363fb9.jpg!q90.webp"];
for (var i = 0; i < alla.length; i++) {
	alla[i].index = i;
	alla[i].onmouseover = function(){
		for (var j = 0; j < allimags.length; j++) {
			allimags[j].src = conImgs[this.index];
			allI[j].innerHTML= this.index + 1;
		};
		anim(changeP,{"left":alla[this.index].offsetLeft});
	}
};
/*=============================================================*/
// 领劵中心
var couponLazy = $("#coupon_lazy");
var lazLis = couponLazy.getElementsByTagName("li");
var lazImg = couponLazy.getElementsByTagName("img");
for (var i = 0; i < lazLis.length; i++) {
	lazLis[i].index = i;
	lazLis[i].onmouseover = function(){
		for (var b = 0; b < lazLis.length; b++) {
			anim(lazImg[b],{"right":15});
		};
		anim(lazImg[this.index],{"right":5});
	}
	lazLis[i].onmouseleave = function(){
		anim(lazImg[this.index],{"right":15});
	}
}





