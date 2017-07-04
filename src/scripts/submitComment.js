import '../../src/sass/submitComment.scss';
import '../../src/plugins/swiper-3.4.2.min.css'
import $ from 'jquery';
import '../../src/plugins/swiper-3.4.2.min.js';

$(document).ready(function(){
	//选择星星
    var bigStar=$(".big-star li");
    var index =0;
    for(var i=0;i<bigStar.length;i++){
    	bigStar[i].index=i;
    	
    	bigStar[i].onclick=function(){
    		for(var j=0;j<bigStar.length;j++){
    			bigStar[j].parentNode.className='';
    		}
    		bigStar[this.index].parentNode.className='big-star'+(this.index+1);
    		index = this.index+1;
            console.log(this.index);
            console.log(index);
           
    		$(".room-info h2,.room-info p").hide();
    		$(".select-name").hide();
    		$(".room-info").css({'padding':'5%',});
    		$(".room-info i").css({
    			'margin':'0 auto',
    			'width':'3rem',
    			'height':'3rem'
    		});
    		$(".tag-comment").show();
    		$(".btn").show();
    		
    		$.ajax({
	            type: "GET",
	            url: "../dist/json/comment.json",
	            dataType: "json",
	　　　　　　success: function(data){
		            var title = "";
		            if(index==1 || index==2){
                            title = "一般，需要改善";
		            }
		            if(index==3 || index==4){
                            title = "比较满意，但仍可改善";
		            }
		            if(index == 5){
                            title = "非常满意，无可挑剔";
		            }
	                var result="";
	                result +='<h3>'+ title +'</h3>';
	                result +='<ul>';
	                for(var i = 0; i < data.length; i++){
						var hotel = data[i];
						if(hotel.MaxRank==index){
							if(hotel==undefined || hotel==null)
			                return;
							result +='<li>'+hotel.TagContent+'</li>';
						}
	                }
	                result +='</ul>';
			        $('.title-tag').html(result);

			        $(".title-tag li").on("click",function(){
		    			$(this).toggleClass("active");
		    			if($(".title-tag .active").length==0){
		    				$(".btn").removeClass("active").find("a").attr("scr","javascript:;");
		    			}else{
		    				$(".btn").addClass("active").find("a").attr("scr","#123");
		    			}
		    		});
	            },
	            error:function(xhr, type){
	            	console.log('Ajax error!');
	            }
            });

    	}
    }
    //选择匿名评论
    $(".select-name").on("click",function(){
    	$(this).toggleClass("active");
    	if($(this).hasClass("active")){
    		$(".select-comment p em").text("bandiw");
    	}else{
    		$(".select-comment p em").text("匿名");
    	}
    });

    //上传图片
    var delParent;
	var defaults = {
		fileType         : ["jpg","png","bmp","jpeg"],   // 上传文件的类型
		fileSize         : 1024 * 1024 * 10                  // 上传文件的大小 10M
	};
		/*点击图片的文本框*/
	$(".file").change(function(){
		var idFile = $(this).attr("id");
		var file = document.getElementById(idFile);
		var imgContainer = $(this).parents(".z_photo"); //存放图片的父亲元素
		var fileList = file.files; //获取的图片文件
		console.log(fileList+"======filelist=====");
		var input = $(this).parent();//文本框的父亲元素
		var imgArr = [];
		//遍历得到的图片文件
		var numUp = imgContainer.find(".up-section").length;
		var totalNum = numUp + fileList.length;  //总的数量
		if(fileList.length > 5 || totalNum > 5 ){
			alert("上传图片数目不可以超过5个，请重新选择");  //一次选择上传超过5个 或者是已经上传和这次上传的到的总数也不可以超过5个
		}
		else if(numUp < 5){
			fileList = validateUp(fileList);
			for(var i = 0;i<fileList.length;i++){
			 var imgUrl = window.URL.createObjectURL(fileList[i]);
			     imgArr.push(imgUrl);
			 var $section = $("<section class='up-section fl loading'>");
			     imgContainer.prepend($section);
			 var $span = $("<span class='up-span'>");
			     $span.appendTo($section);
			
		     var $img0 = $("<img class='close-upimg'>").on("click",function(event){
				    event.preventDefault();
					event.stopPropagation();
					$(".works-mask").show();
					delParent = $(this).parent();			
				});  


			 $section.on("click",function(){
			 	$(".mask").fadeIn();
			 	$(".delete").show();
    			$(".page-album-info").addClass("on");
			 })
				// $img0.attr("src","../dist/images/hotelinfo_close-f49c1.png").appendTo($section);
		     var $img = $("<img class='up-img up-opcity'>");
		         $img.attr("src",imgArr[i]);
		         $img.appendTo($section);
		     var $p = $("<p class='img-name-p'>");
		         $p.html(fileList[i].name).appendTo($section);
		     var $input = $("<input id='taglocation' name='taglocation' value='' type='hidden'>");
		         $input.appendTo($section);
		     var $input2 = $("<input id='tags' name='tags' value='' type='hidden'/>");
		         $input2.appendTo($section);		      
		   }
		}
		setTimeout(function(){
             $(".up-section").removeClass("loading");
		 	 $(".up-img").removeClass("up-opcity");
		 },450);
		 numUp = imgContainer.find(".up-section").length;
		if(numUp >= 5){
			$(this).parent().hide();
		}
		
		//input内容清空
		$(this).val("");
	});
    $(".z_photo").delegate(".close-upimg","click",function(){
     	  $(".works-mask").show();
     	  delParent = $(this).parent();    	  
	});
		
	$(".wsdel-ok").click(function(){
		$(".works-mask").hide();
		var numUp = delParent.siblings().length;
		if(numUp < 4){
			delParent.parent().find(".z_file").show();
		}
		 delParent.remove();		
	});
	
	$(".wsdel-no").click(function(){
		$(".works-mask").hide();
	});	
	function validateUp(files){
		var arrFiles = [];//替换的文件数组
		for(var i = 0, file; file = files[i]; i++){
			//获取文件上传的后缀名
			var newStr = file.name.split("").reverse().join("");
			if(newStr.split(".")[0] != null){
					var type = newStr.split(".")[0].split("").reverse().join("");
					console.log(type+"===type===");
					if($.inArray(type, defaults.fileType) > -1){
						// 类型符合，可以上传
						if (file.size >= defaults.fileSize) {
							alert(file.size);
							alert('您这个"'+ file.name +'"文件大小过大');	
						} else {
							// 在这里需要判断当前所有文件中
							arrFiles.push(file);	
						}
					}else{
						alert('您这个"'+ file.name +'"上传类型不符合');	
					}
				}else{
					alert('您这个"'+ file.name +'"没有类型, 无法识别');	
				}
		}
		return arrFiles;
	}	

	//点击覆盖层
    $(".mask").on("click",function(){
    	$(".mask").fadeOut();
    	$(".page-album-info").removeClass("on");
    });
    // $(".delete").on("click",function(){
    // 	$(".swiper-slide:eq(0)").remove();
    // 	$(".swiper-pagination-total").text($(".swiper-pagination-total").text()-1);
    // });

	//幻灯片
	function mySwioerAll(index){

		var mySwiper = new Swiper('.swiper-container',{
			pagination : '.swiper-pagination',
			paginationType : 'fraction',
			onSlideChangeEnd: function(swiper){
		       index=swiper.activeIndex;
		       console.log(index)
		    }
		});
	}


	$(".delete").on("click",function(){
		alert(0);
    	$(".swiper-slide:eq(0)").remove();
    	mySwioerAll();
    });


    mySwioerAll();
	
});