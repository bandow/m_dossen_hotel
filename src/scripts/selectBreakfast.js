import '../../src/sass/selectBreakfast.scss';
import $ from 'jquery';
$(document).ready(function(){
	//点击早餐券列表
	$(".breakfast-list .item").on("click",function(){
		$(this).addClass("active").find(".select img").attr("src","images/select_icon-f0e7f.png").parent().parent().parent()
		.siblings().removeClass("active").find(".select img").attr("src","images/no_select_icon-62713.png");
	});
	//点击不使用早餐券
    $(".nonuse-breakfast").on("click",function(){
		$(".breakfast-list .item").removeClass("active").find(".select img").attr("src","images/no_select_icon-62713.png");
	});
})
