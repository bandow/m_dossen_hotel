import '../../src/sass/ordersConfirm.scss';
import $ from 'jquery';
$(document).ready(function(){
	//点击支付
	$(".confirm-pay").on("click",function(){
		$(this).find(".r").toggleClass("active");
		if($(this).find(".r").hasClass("active")){
			$(this).find(".r img").attr("src","images/select_icon-f0e7f.png");
		}else{
			$(this).find(".r img").attr("src","images/no_select_icon-62713.png");
		}
	});
	//点击详情
    $(".confirm-info .title a").on("click",function(){
		$(this).toggleClass("on");
		if($(this).hasClass("on")){
			$(".confirm-info .info-list p").css("display","flex");
		}else{
			$(".confirm-info .info-list p:gt(1)").css("display","none");
		}	
	});
	//点击关闭
	$(".orders-confirm-header .right").on("click",function(){
		$(".mask").fadeIn();
    	$(".page-prompt").addClass("on");
	});
	$(".page-prompt .btn a:last,.mask").on("click",function(){
		$(".mask").fadeOut();
    	$(".page-prompt").removeClass("on");
	});
})

function p(n){
    return n<10?'0'+n:n;
}
//2.倒计时
var starttime = new Date("2017/11/20");
setInterval(function () {
	var nowtime = new Date();
	var time = starttime - nowtime;
	var day = parseInt(time / 1000 / 60 / 60 / 24);
	var hour = parseInt(time / 1000 / 60 / 60 % 24);
	var minute = parseInt(time / 1000 / 60 % 60);
	var seconds = parseInt(time / 1000 % 60);
	$('#time').html(p(minute) + ":" + p(seconds) );
}, 1000);