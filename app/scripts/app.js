'use strict';

/**
 * @ngdoc overview
 * @name practiceThreeApp
 * @description
 * # practiceThreeApp
 *
 * Main module of the application.
 */
angular
  .module('practiceThreeApp', ['ui.router']).config(function($stateProvider,$urlRouterProvider){
	 $stateProvider.state("nav",{
			url:"/nav",
			templateUrl:"views/index.html",
			controller:"cen"
		}).state("nav.index",{
			url:"/index",
			templateUrl:"views/shouye.html",
			controller:"can"
		}).state("nav.ziyuan",{
			url:"/zy",
			templateUrl:"views/zy_guanggaoziyuan.html",
			controller:"zyn"
		}).state("nav.lm",{
			url:"/lm",
			templateUrl:"views/zy_ziyuanlm.html",
			controller:"lmn"
		}).state("nav.wx",{
			url:"/wx",
			templateUrl:"views/zy_ziyuanchat.html",
			controller:"wxn"
		}).state("nav.sj",{
			url:"/sj",
			templateUrl:"views/zy_ziyuanliulan.html",
			controller:"sjn"
		}).state("nav.kj",{
			url:"/kj",
			templateUrl:"views/zy_ziyuanroom.html",
			controller:"kjn"
		}).state("nav.gg",{
			url:"/gg",
			templateUrl:"views/zy_ziyuanrerson.html",
			controller:"ggn"
		}).state("nav.yy",{
			url:"/yy",
			templateUrl:"views/zy_ziyuanyy.html",
			controller:"yyn"
		}).state("nav.dx",{
			url:"/dx",
			templateUrl:"views/dingxiang.html",
			controller:"dxn"
		}).state("nav.zc",{
			url:"/zc",
			templateUrl:"views/zhuce.html",
			controller:"zcn"
		}).state("nav.zcxz",{
			url:"/zcxz",
			templateUrl:"views/g_zhuce.html",
			//controller:"zcxzn"
		}).state("nav.xxzx",{
			url:"/xxzx",
			templateUrl:"views/g_xuexi.html",
			//controller:"xxzxn"
		}).state("nav.cjwt",{
			url:"/cjwt",
			templateUrl:"views/g_changjian.html",
			controller:"cjwtn"
		}).state("nav.hd",{
			url:"/hd",
			templateUrl:"views/g_huodong.html",
			controller:"hdn"
		}).state("nav.cgal",{
			url:"/cgal",
			templateUrl:"views/tzx_success.html",
			controller:"cgaln"
		}).state("nav.xq",{
			url:"/xq",
			templateUrl:"views/tzx_success_2.html",
			//controller:"xqn"
		})
		$urlRouterProvider.when("","/nav/index")
	 });
