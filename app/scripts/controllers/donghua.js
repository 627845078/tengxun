'use strict';
angular.module('practiceThreeApp').controller("cen",['$scope',function ($scope){
	$('.g_li').hover(function(){
		$('.g_div').stop().slideToggle()
	})
	if ($('.g_header').show()) {
		$('.g_nav').show();
		$('.gxl_nav').hide()
	} else{
		$('.g_nav').hide();
		$('.gxl_nav').show()
	};

	$(window).scroll(function() {
		if($(window).scrollTop()>=80){
			$('.g_header').hide();
			$('.gxl_nav').show();
			$('.gxl_nav').css('top',0)
		}else{
			$('.g_header').show();
			$('.gxl_nav').hide()
		} 
		
		if($(window).scrollTop()>=300){
			$('.g_nav').hide();
			$('.hddb').show();
		}else{
			$('.g_nav').show();
			$('.hddb').hide();
		} 
	});
	$('.hddb').click(function(){
		$('body').animate({scrollTop:0},1000)
	})
	
	$('#tzxgxl').click(function(){
		if ($("#tzxgxl").is(':checked')) {
			$("#tzx_input").attr("disabled","disabled")
			$(".tzx-bo").find("b").css('background','url(../images/tx-22.jpg)')
			$(".tzx-bo").css("background","#e1e0e0")
		} else {
			$(".tzx-bo").find("b").css('background','url(../images/tx-12.jpg)')
			$("#tzx_input").removeAttr("disabled")
		}
	})
	$(".tzx-bo").click(function(){
		 $(this).css('border-color','#3da8ee').find("b").css('background','url(../images/tx-18.jpg)')
     $(".tzx-bo1").css('border-color','#e1e0e0')
	})
	$(".tzx-bo1").click(function(){
		 $(this).css('border-color','#3da8ee').find("b").css('background','url(../images/tx-19.jpg)')
	$(".tzx-bo").css('border-color','#e1e0e0')
	$(".tzx-bo").find("b").css('background','url(../images/tx-12.jpg)')
	 $(".tzx-bo2").css('border-color','#e1e0e0')
	 $(".tzx-qing").css('display','none')
	   $(".tzx-bo3").css('border-color','#e1e0e0')
	})
	$(".tzx-bo2").click(function(){
		 $(this).css('border-color','#3da8ee').find("b").css('background','url(../images/tx-20.jpg)')
		 $(".tzx-bo1").css('border-color','red').find("b").css('background','url(../images/tx-23.jpg)')
		 $(".tzx-qing").css('display','block')
		 $(".tzx-bo3").css('border-color','#e1e0e0')
		  $(".tzx-qing1").css('display','none')

	})
	$(".tzx-bo3").click(function(){
		 $(this).css('border-color','#3da8ee').find("b").css('background','url(../images/tx-21.jpg)')
     $(".tzx-bo2").css('border-color','red').find("b").css('background','url(../images/tx-24.jpg)')
     $(".tzx-bo1").css('border-color','red')
     $(".tzx-qing1").css('display','block')
		 $(".tzx-qing").css('display','block')
	})
}]).controller("zyn",['$scope',function ($scope){
	$('.zy_columa').hover(function(){
		$(this).css('border-color','#008dea');
		$(this).css('text-decoration','none');
		$(this).css('background','url(../images/youjian1.gif)');
		},function(){
			$(this).css('border-color','#efefef');
			$(this).css('text-decoration','none');
			$(this).css('background','url(../images/zy-youjian.gif)');
		});
}]).controller("lmn",['$scope',function ($scope){
	$(window).scroll(function(){
		var _scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
		//alert(_scrollTop)
		if($(window).scrollTop()>=1900){
		//$('.zy4_color_pic').attr('class','lll')
		$('.zy4_color_pic').animate({'left':'-102px','top':'-20px','width':'330px','height':'261px'},600,function(){$('.xian').css('display','block')})
		};
	if($(window).scrollTop()>=2500){
			$('.zy4_color_pic2').animate({'left':'55px','top':'-34px','width':'330px','height':'492px'},600,function(){$('.xian1').css('display','block')})
		};
	if($(window).scrollTop()>=3100){
			$('.zy4_color_pic3').animate({'left':'-99px','top':'-30px','width':'330px','height':'285px'},600,function(){$('.xian3').css('display','block')})
		};
	if($(window).scrollTop()>=3600){
			$('.zy4_color_pic4').animate({'left':'55px','top':'-18px','width':'330px','height':'65px'},600,function(){$('.xian4').css('display','block')})
		};

	})
}]).controller("wxn",['$scope',function ($scope){
	$(window).scroll(function(){
		//var _scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
		if($(window).scrollTop()>=1200){
		//$('.zy3_color_pic').attr('class','lll')
		$('.zy3_color_pic').animate({'left':'-100px','top':'-25px','width':'330px','height':'265px'},600,function(){$('.xian').css('display','block')});
		};
	if($(window).scrollTop()>=1800){
			$('.zy3_color_pic2').animate({'left':'53px','top':'-25px','width':'330px','height':'265px'},600,function(){$('.xian1').css('display','block')})
		};
		});
	var bb=$('.zy3_tab').find('a');
	for (var i = 0; i < bb.length; i++) {
		bb.eq(i).click(function(){
			var _width=$(".swiper-slide").width();
			var _index=$(this).index();
			$('.zy3_swiper').animate({'left':-_width*_index},600);
			$(this).attr('class','zy3_active').siblings().removeAttr('class','zy3_active');
		})
	};
}]).controller("sjn",['$scope',function ($scope){
	$(window).scroll(function(){
		var _scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
		//alert(_scrollTop)
		if($(window).scrollTop()>=800){
		//$('.zy5_color_pic').attr('class','lll')
		$('.zy5_color_pic').animate({'left':'-102px','top':'-8px','width':'330px','height':'93px'},600,function(){$('.xian').css('display','block')})
		};
	if($(window).scrollTop()>=1500){
			$('.zy5_color_pic2').animate({'left':'55px','top':'-9px','width':'330px','height':'145px'},600,function(){$('.xian1').css('display','block')})
		};
	if($(window).scrollTop()>=1900){
			$('.zy5_color_pic3').animate({'left':'-97px','top':'-30px','width':'330px','height':'187px'},600,function(){$('.xian3').css('display','block')})
		};
	if($(window).scrollTop()>=2700){
			$('.zy5_color_pic4').animate({'left':'55px','top':'-6px','width':'330px','height':'63px'},600,function(){$('.xian4').css('display','block')})
		};

	})
}]).controller("kjn",['$scope',function ($scope){
	$(window).scroll(function(){
		var _scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
		//alert(_scrollTop)
		if($(window).scrollTop()>=600){
		//$('.zy1_color_pic').attr('class','lll')
		$('.zy1_color_pic').animate({'left':'-102px','top':'-20px','width':'330px','height':'345px'},600,function(){$('.xian').css('display','block')})
		};
	if($(window).scrollTop()>=1200){
			$('.zy1_color_pic2').animate({'left':'55px','top':'-19px','width':'330px','height':'345px'},600,function(){$('.xian1').css('display','block')})
		};
	if($(window).scrollTop()>=2000){
			$('.zy1_color_pic3').animate({'left':'-102px','top':'-22px','width':'330px','height':'350px'},600,function(){$('.xian3').css('display','block')})
		};
	if($(window).scrollTop()>=2600){
			$('.zy1_color_pic4').animate({'left':'55px','top':'-18px','width':'330px','height':'345px'},600,function(){$('.xian4').css('display','block')})
		};
	if($(window).scrollTop()>=3200){
			$('.zy1_color_pic5').animate({'left':'-95px','top':'-52px','width':'330px','height':'410px'},600,function(){$('.xian5').css('display','block')})
		};
    if($(window).scrollTop()>=3600){
			$('.zy1_color_pic6').animate({'left':'55px','top':'-22px','width':'330px','height':'370px'},600,function(){$('.xian6').css('display','block')})
		};
		})
}]).controller("ggn",['$scope',function ($scope){
	$(window).scroll(function(){
		var _scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
		if(_scrollTop>=600){
		//$('.zy2_color_pic').attr('class','lll')
		$('.zy2_color_pic').animate({'left':'-100px','top':'-14px','width':'330px','height':'177px'},600,function(){$('.xian').css('display','block')})
		};
	if($(window).scrollTop()>=1200){
			$('.zy2_color_pic2').animate({'left':'55px','top':'-7px','width':'330px','height':'87px'},600,function(){$('.xian1').css('display','block')})
		};
	if($(window).scrollTop()>=2000){
			$('.zy2_color_pic3').animate({'left':'-100px','top':'-7px','width':'330px','height':'79px'},600,function(){$('.xian3').css('display','block')})
		};
	if($(window).scrollTop()>=2600){
			$('.zy2_color_pic4').animate({'left':'55px','top':'-22px','width':'330px','height':'129px'},600,function(){$('.xian4').css('display','block')})
		};
	if($(window).scrollTop()>=3200){
			$('.zy2_color_pic5').animate({'left':'-100px','top':'-9px','width':'330px','height':'97px'},600,function(){$('.xian5').css('display','block')})
		};
    if($(window).scrollTop()>=4000){
			$('.zy2_color_pic6').animate({'left':'55px','top':'-41px','width':'330px','height':'156px'},600,function(){$('.xian6').css('display','block')})
		};
	if($(window).scrollTop()>=4600){
			$('.zy2_color_pic7').animate({'left':'-100px','top':'-10px','width':'330px','height':'83px'},600,function(){$('.xian7').css('display','block')})
		};
	
		})
}]).controller("yyn",['$scope',function ($scope){
	$(window).scroll(function(){
		var _scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
		//alert(_scrollTop)
		if($(window).scrollTop()>=800){
		//$('.zy6_color_pic').attr('class','lll')
		$('.zy6_color_pic').animate({'left':'-102px','top':'-8px','width':'330px','height':'93px'},600,function(){$('.xian').css('display','block')})
		};
	if($(window).scrollTop()>=1500){
			$('.zy6_color_pic2').animate({'left':'55px','top':'-9px','width':'330px','height':'93px'},600,function(){$('.xian1').css('display','block')})
		};
	if($(window).scrollTop()>=1900){
			$('.zy6_color_pic3').animate({'left':'-52px','top':'-15px','width':'94px','height':'155px'},600,function(){$('.xian3').css('display','block')})
		};
	})
}]).controller("zcn",['$scope',function ($scope){
	$(".tzx-qq").find("p:first").find("img").click(function(){
        $(this).attr('src','../images/tx-zhuce-7.jpg')
        $(".tzx-qq").find(".tzx-hu").find("img").attr("src",'../images/tx-zhuce-8.jpg')
		$(".tzx-xing").animate({
         	height:310,
         },600)
	})
	 $(".tzx-qq").find(".tzx-hu").find("img").click(function(){
        $(this).attr('src','../images/tx-zhuce-7.jpg')
        $(".tzx-qq").find("p:first").find("img").attr("src",'../images/tx-zhuce-8.jpg');
		$(".tzx-xing").animate({
         	height:220,
         },600)
	})

	 $(".tzx-kk").click(function(){
	 	 if($(".tzx-kk").is(":checked")){
	 	 	$(".tzx-kai").css("cursor","pointer").css("background","#008fe4")
	 	 }else{
	 	 	$(".tzx-kai").css("cursor","default").css("background","#e0e0e0")
	 	 }
	 	
	 })
	 $(".tzx-kai").click(function(){
	 	$(".tzx-gu").css("background","url(../images/tx-zhuce-111.png)");
	 	$(".tzx-gu1").css("background","url(../images/tx-zhuce-222.png)");
	 	$(".tzx-one").css("background","#aaafb4")
	 	$(".tzx-two").css("background","#008ce7")
	 })
}]).controller("cjwtn",['$scope',function ($scope){
	$('.gx_x1').css('display','none');
	var bb = $('.gx_frx').find('li').find('ul').find('li');
	$('.faqx_cats').find('h4').find('a').click(function(){
		$(this).parent('h4').siblings('ul').slideToggle()
	})
	$('.gx_x1').eq(0).css('display','block')
	var oUl=document.getElementById('list');
	var aLi=oUl.getElementsByTagName('li');
	var aDiv=document.getElementById('divy').children;
	for(var i=0;i<aLi.length;i++){
		aLi[i].index=i;
		aLi[i].onclick=function(){
			for(var i=0;i<aLi.length;i++){
				aDiv[i].style.display='none';
			}
			aDiv[this.index].style.display='block';	
		}
	}
}]).controller("hdn",['$scope',function ($scope){
		$('.g_xx1').css('border-bottom','0');
		$('.g_xx2').css('border-bottom','1px solid #efefef');
	$('.g_xx1').click(function(){
		$(this).css('border-bottom','0');
		$('.g_xx2').css('border-bottom','1px solid #efefef');
	})
	$('.g_xx2').click(function(){
		$(this).css('border-bottom','0');
		$('.g_xx1').css('border-bottom','1px solid #efefef');
	})
}]).controller("cgaln",['$scope',function ($scope){
	var onoff=true;
$(".tx-ol").find("li span").click(function(){
		if(onoff){
		$(this).next().slideDown();
		$(this).css("transform","rotate(270deg)")
	onoff=false;
	}else{
		$(this).next().slideUp();
		$(this).css("transform","rotate(90deg)")
         onoff=true;
	}
	 })
}])/*.controller("zcn",['$scope',function ($scope){
	
}])*/