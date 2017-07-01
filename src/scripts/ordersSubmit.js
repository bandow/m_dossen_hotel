import '../../src/sass/ordersSubmit.scss';
import $ from 'jquery';
$(document).ready(function(){
	//加减房间数
	$(".select-room-num .l").on("click",function(){
		var spanText=$(this).next().text();
		if(spanText<=1){
			$(this).next().text(1);
		}else{
			spanText--;
			$(this).next().text(spanText);
		}	
	});
	$(".select-room-num .r").on("click",function(){
		var spanText=$(this).prev().text();
		if(spanText>=10){
			$(this).prev().text(10);
		}else{
			spanText++;
			$(this).prev().text(spanText);
		}
	});
	//点击覆盖层
	$(".mask").on("click",function(){
		$(".detail-btn").removeClass("active").parent().css("z-index",3);
		$(".expenses-detail").removeClass("on").css("z-index",2);
		$(".select-coupom").removeClass("on");
		$(".page-activity-rule").removeClass("on");
		$(".mask").fadeOut();
		flag=false;
	});
	//点击明细
	var flag=false;
	$(".detail-btn").on("click",function(){
		if(!flag){
			$(this).addClass("active").parent().css("z-index",6);
			$(".expenses-detail").addClass("on").css("z-index",5);
			$(".mask").fadeIn();
			flag=true;
		}else{
			$(this).removeClass("active").parent().css("z-index",3);
			$(".expenses-detail").removeClass("on").css("z-index",2);
			$(".mask").fadeOut();
			flag=false;
		}
	});
	//点击优惠劵
	$(".coupon-type").on("click",function(){
		$(".select-coupom").addClass("on");
		$(".mask").fadeIn();
	});
	$(".select-coupom li").on("click",function(){
		$(".select-coupom").removeClass("on");
		$(".mask").fadeOut();
		$(".coupon-type").text($(this).find("span").text());
	});
	//提交针对万枫品牌的
	$(".submit-btn").on("click",function(){
		$(".page-activity-rule").addClass("on");
		$(".mask").fadeIn();
	});
})
