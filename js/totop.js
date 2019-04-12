
window.onload=function(){
	var btn=document.getElementById('totop');
	//timer需要放在最外面
	var timer=null;
	var istop=true;
	//屏幕可视化高度
	var clientHeight=document.documentElement.clientHeight;
	//设置向上滚动时候突然往下翻的事件,注意要加window.onscroll
	window.onscroll=function(){
		if(!istop){
			clearInterval(timer);
		}
		istop=false;
		//这里需要再申明一遍high的值，否则获取不到下面已经申明的值，因为Js是从上向下执行代码
		var high=document.documentElement.scrollTop;
		if(high>=clientHeight){
			btn.style.display='block';
		}
	}
	btn.onclick=function(){
		//设置定时器，在30ms之内完成回到顶部的平滑效果
		timer=setInterval(function() {
		//获得的这个high必须写在点击事件里面，因为js是从上往下执行代码
		var high=document.documentElement.scrollTop;
		//设置向上的速度，由快到慢，并且取负数整，这样可以为0，让定时器关闭
		var speed=Math.floor(-high/6);
		document.documentElement.scrollTop=document.body.scrollTop=high+speed;
		//向上滚动突然停止的变量一开始设为true,并且放在点击事件里面
		istop=true;
		if(high==0){
			clearInterval(timer);
		}
		},30);
	
		
	}
}
