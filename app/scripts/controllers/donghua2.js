'use strict';
angular.module('practiceThreeApp').controller("can",['$scope',function ($scope){
function lb2(){
	var mainOnNum = 1;
	var timer;
	var topIndex = 1;
	var width = $(window).width();

	function onTimer() {
		if (mainOnNum > 3) {
			mainOnNum = 1;
		} else {
			mainOnNum++;
		}

		$(".control li").eq(mainOnNum-1).trigger("click");
	}

	function changeSceneSelector($num) {
		mainOnNum = $num+1;

		changeScene(mainOnNum);
	}

	function changeScene($num) {
		clearInterval(timer);

		mainOnNum = $num;

		topIndex++;

		switch($num) {
			case 1:
				timer = setInterval(onTimer,7000);

				$("#scene1").css({"z-index":topIndex});

				motion($num);
			break;
			
			case 2:
				timer = setInterval(onTimer,7000);

				$("#scene2").css({"z-index":topIndex});

				motion($num);
			break;

			case 3:
				timer = setInterval(onTimer,7000);

				$("#scene3").css({"z-index":topIndex});

				motion($num);
			break;
		}
	}

	function clearFunctions(){
		$("li").clearQueue();
		$("li").stop();

		$(".frx-lunbo-cont1").clearQueue();
		$(".frx-lunbo-cont1").stop();

		$(".lbtu").clearQueue();
		$(".lbtu").stop();

		$("ul").clearQueue();
		$("ul").stop();
	}

	function motion($mc) {
		clearFunctions();

		$("#scene1").stop().css("left",width);
		$("#scene1 .lbtu").stop().css("left","300px");

		$("#scene1 .frx-lunbo-cont1").stop().css("top","600px");

		$("#scene2").stop().css("left",width);
		$("#scene2 .lbtu").stop().css("left","300px");

		$("#scene2 .frx-lunbo-cont1").stop().css("top","600px");

		$("#scene3").stop().css("left",width);
		$("#scene3 .lbtu").stop().css("left","100px");

		$("#scene3 .frx-lunbo-cont1").stop().css("top","600px");

		if($mc == 1) {
			$("#scene1").animate({"left":"0"},{duration:700, easing:"easeOutExpo"});
			

			$("#scene1 .frx-lunbo-cont1").delay(2000).animate({"top":"0px"},{duration:300, easing:"easeOutBack"});

		} else if($mc == 2) {
			$("#scene2").animate({"left":"0"},{duration:700, easing:"easeOutExpo"});
			

			$("#scene2 .frx-lunbo-cont1").delay(2000).animate({"top":"0px"},{duration:300, easing:"easeOutBack"});
		} else {
			$("#scene3").animate({"left":"0"},{duration:700, easing:"easeOutExpo"});
			
			$("#scene3 .frx-lunbo-cont1").delay(2000).animate({"top":"0px"},{duration:300, easing:"easeOutBack"});
		}
	}

	function init() { 
		var $btns = $(".control li"),
			$motionC = $(".control #btnPlay");

		$btns.bind("click", function() {
			clearInterval(timer);
			timer = setInterval(onTimer,7000);
			var $this = $(this),
				index = $btns.index($this);
			
			if(window.console) {console.log("clicked : " + mainOnNum);}
			$btns.removeClass("on"); 
			$this.addClass("on");
			
			changeSceneSelector(index);
			return false;
		});

		changeScene(1);
	}

	var goInit = setTimeout(function() {
		init();
	}, 10);

	$(".scene").css("display","block");
	$(".scene").css("left",width);
};
lb2();

function lb1(){
	var tim;
		var index=0;
		var colors=['lan','red','lv']
		showImg(index)
		$('.num').find('li').click(function(){
			index=$('.num').find('li').index(this);
			showImg(index)
		})
		$('.frx-dingxiang-lb').hover(function(){
			clearInterval(tim)
		},function(){
			tim=setInterval(function(){
				showImg(index);
				index++;
				if(index==$('.slider').find('li').length){
					index=0
				}
			},4000)
		}).trigger("mouseleave")
	
	function rw(colors){
		var animateLists=[ 
			  function(){ $('.'+colors+'1 i').animate({opacity:1},300,queueLists); },
			  function(){ $('.'+colors+'1-d').animate({marginTop:0,opacity:1},150,queueLists); },
			  function(){ $('.'+colors+'1-x i').animate({width:'100%'},500,queueLists); },
			  function(){ $('.'+colors+'2 i').animate({opacity:1},150,queueLists); },
			  function(){ $('.'+colors+'2-d').animate({marginTop:0,opacity:1},150,queueLists); },
			  function(){ $('.'+colors+'2-x i').animate({width:'100%'},500,queueLists); },
			  function(){ $('.'+colors+'3 i').animate({opacity:1},150,queueLists); },
			  function(){ $('.'+colors+'3-d').animate({marginTop:0,opacity:1},150,queueLists); },
			  function(){ $('.'+colors+'3-x i').animate({width:'100%',left:'0',top:'0'},500,queueLists); }		
		]; 
		var animateLists1=[ 
			  function(){ $('.'+colors+'1 i').animate({opacity:1},300,queueLists); },
			  function(){ $('.'+colors+'1-d').animate({marginTop:0,opacity:1},150,queueLists); },
			  function(){ $('.'+colors+'1-x i').animate({width:'100%'},500,queueLists); }, 
			  function(){ $('.'+colors+'2 i').animate({opacity:1},150,queueLists); },
			  function(){ $('.'+colors+'2-d').animate({marginTop:0,opacity:1},150,queueLists); },
			  function(){ $('.'+colors+'2-x i').animate({width:'100%',left:'0',top:'0'},500,queueLists); },
			  function(){ $('.'+colors+'3 i').animate({opacity:1},150,queueLists); },
			  function(){ $('.'+colors+'3-d').animate({marginTop:0,opacity:1},150,queueLists); },
			  function(){ $('.'+colors+'3-x i').animate({width:'100%',left:'0',top:'0'},500,queueLists); }
		
		]; 
		if(colors=='red'){
			$(document).queue('_queueLists',animateLists1); 
			var queueLists=function(){ 
				$(document).dequeue('_queueLists'); 
			}; 
			queueLists();
		}else{
		$(document).queue('_queueLists',animateLists); 
			var queueLists=function(){ 
				$(document).dequeue('_queueLists'); 
			}; 
		queueLists();
		}
}
	
		function showImg(index){		
        var width = $(".frx-dingxiang-lb").width();
		$(".slider").stop().animate({'left':-width*index},1000);
		$(".num li").removeClass("on").eq(index).addClass("on");
		rw(colors[index]);
		$('.figure i').css('opacity',0);
		$('.shape').css('opacity',0);
		$('.line i').css('width',0);
			if(index==0){
				$('.'+colors[index]+'3-x i').css({left:'100%',top:'-100%'});
			}
			if(index==1){
				$('.'+colors[index]+'2-x i').css({left:'100%',top:'-100%'});
				$('.'+colors[index]+'3-x i').css({left:'100%',top:'100%'});
			}
			if(index==2){
				$('.'+colors[index]+'3-x i').css({left:'100%',top:'-100%'});
			}
		}	
		
		
}	
	lb1()
	
	var animateList=[ 
		  function(){ $('.donghua').animate({marginTop:0,opacity:1},300,queueList); },
		 
		  function(){ $('.donghua2').animate({marginTop:0,opacity:1},300,queueList); }
	]; 
	(function(){ $('.frx-mubiao-beijing').animate({marginTop:0,opacity:1},500);})()
	$(document).queue('_queueList',animateList); 
	var queueList=function(){ 
		$(document).dequeue('_queueList'); 
	}
	queueList();
	$(window).scroll(function() {	
	if($(window).scrollTop()>=0){	
		var animateList=[ 
			  function(){ $('.donghua').animate({marginTop:0,opacity:1},300,queueList); },
			 
			  function(){ $('.donghua2').animate({marginTop:0,opacity:1},300,queueList); }
		]; 
		(function(){ $('.frx-mubiao-beijing').animate({marginTop:0,opacity:1},500);})()
		$(document).queue('_queueList',animateList); 
		var queueList=function(){ 
			$(document).dequeue('_queueList'); 
		}
    queueList();
	};
		if($(window).scrollTop()>=300){
		 var animateList=[ 
		 	  function(){$('.frx-ziyuan-left').animate({marginTop:160,opacity:1},500); },
			  function(){ $('.qzone').animate({opacity:1},200,queueList); },
			  function(){ $('.qq').animate({opacity:1},200,queueList); },
			  function(){ $('.wechat').animate({opacity:1},200,queueList); },
			  function(){ $('.ads').animate({opacity:1},200,queueList); },
			  function(){ $('.browser').animate({opacity:1},200,queueList); },
			  function(){ $('.app').animate({opacity:1},200,queueList); }
		]; 
		$(document).queue('_queueList',animateList); 
		var queueList=function(){ 
			$(document).dequeue('_queueList'); 
		}; 
		queueList();
		}
		
		if($(window).scrollTop()>=830){
			 var animateList=[ 
				  function(){ $('.donghua1').animate({marginTop:0,opacity:1},500,queueList); },
				  function(){ $('.donghua3').animate({marginTop:0,opacity:1},500,queueList); },
				  function(){ $('.frx-dingxiang-tu').animate({opacity:1},500,queueList); },
				  function(){ $('.frx-dingxiang-nav').animate({opacity:1},500,queueList); }
			]; 
			$(document).queue('_queueList',animateList); 
			var queueList=function(){ 
				$(document).dequeue('_queueList'); 
			}; 
			queueList();
			
		}
		
		
		if($(window).scrollTop()>=1600){
			 var animateList=[ 
				  function(){ $('.frx-guanli-cont h3').animate({marginTop:0,opacity:1},500,queueList); },
				  function(){ $('.frx-guanli-list i').eq(0).animate({marginTop:0,opacity:1},500,queueList); },
				  function(){ $('.frx-guanli-list h4').eq(0).delay(800).animate({marginTop:30,opacity:1},500,queueList); },
				  function(){ $('.frx-guanli-list p').eq(0).delay(800).animate({marginTop:0,opacity:1},500,queueList); },
				  function(){ $('.frx-guanli-list i').eq(1).animate({marginTop:0,opacity:1},500,queueList); },
				  function(){ $('.frx-guanli-list h4').eq(1).delay(800).animate({marginTop:30,opacity:1},500,queueList); },
				  function(){ $('.frx-guanli-list p').eq(1).delay(800).animate({marginTop:0,opacity:1},500,queueList); },
				  function(){ $('.frx-guanli-list i').eq(2).animate({marginTop:0,opacity:1},500,queueList); },
				  function(){ $('.frx-guanli-list h4').eq(2).delay(800).animate({marginTop:30,opacity:1},500,queueList); },
				  function(){ $('.frx-guanli-list p').eq(2).delay(800).animate({marginTop:0,opacity:1},500,queueList); }
			]; 
			$(document).queue('_queueList',animateList); 
			var queueList=function(){ 
				$(document).dequeue('_queueList'); 
			}; 
			queueList();
		}
		
		if($(window).scrollTop()>=2500){
			 var animateList=[ 
			 	  function(){ $('.frx-tuiguang h3').animate({marginTop:0,opacity:1},500,queueList); },
				  function(){ $('.frx-tuiguang-cont').animate({marginTop:0,opacity:1},500,queueList); },
				  function(){ $('.pagination').animate({marginTop:0,opacity:1},500,queueList); },
				  function(){ $('.frx-tuiguang-btn').animate({marginTop:0,opacity:1},500,queueList); }
			]; 
			$(document).queue('_queueList',animateList); 
			var queueList=function(){ 
				$(document).dequeue('_queueList'); 
			}; 
			queueList();
		}
	})

}])