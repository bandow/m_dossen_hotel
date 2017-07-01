import '../../src/sass/selectCoupon.scss';
import $ from 'jquery';
$(document).ready(function(){
	//点击优惠券列表
	$(".coupon-list .item").on("click",function(){
		$(this).addClass("active").find(".select img").attr("src","images/select_icon-f0e7f.png").parent().parent().parent()
		.siblings().removeClass("active").find(".select img").attr("src","images/no_select_icon-62713.png");
	});
	//点击不使用优惠券
    $(".nonuse-coupon").on("click",function(){
		$(".coupon-list .item").removeClass("active").find(".select img").attr("src","images/no_select_icon-62713.png");
	});
})
