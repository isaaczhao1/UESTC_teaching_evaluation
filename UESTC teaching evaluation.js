//教材评价
var objs = document.querySelectorAll("input[value='0']");
for(i=0,len=objs.length;i<len;i++){
objs[i].click();//点击第一个选项（非常满意）
}
//教师评价
var objs1 = document.querySelectorAll("input[type='checkbox']");
num=Math.floor(Math.random()*(objs1.length-3)+3);
var pos=new Array();
while(pos.length<num){
	var ran=Math.floor(Math.random()*objs1.length);
	if(pos.indexOf(ran)==-1){//确定ran不在pos中
		pos.push(ran);
		objs1[ran].click();
	}
}
//by isaac
var objs2=document.getElementsByTagName('textarea');//objs2是第i个的评语文本框，其实只有1个
var comments=new Array('he/she is a good teacher,I love him/her.','he/she did well done, I have gained a lot.','he/she is an excellent teacher, really god job.');
for(j=0,len=objs2.length;j<len;j++){
objs2[j].value=comments[Math.floor(Math.random()*comments.length)];
}