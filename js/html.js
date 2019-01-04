$(document).ready(function(){
//左道航
	$("#firstpane .menu_body:eq(0)").show();
	$("#firstpane h3.menu_head").click(function(){
		$(this).addClass("current").next("div.menu_body").slideToggle(50).siblings("div.menu_body").slideUp("slow");
		$(this).siblings().removeClass("current");
	});
	
	$("#secondpane .menu_body:eq(0)").show();
	$("#secondpane h3.menu_head").mouseover(function(){
		$(this).addClass("current").next("div.menu_body").slideDown(50).siblings("div.menu_body").slideUp("slow");
		$(this).siblings().removeClass("current");
	});
	
//切换
	var $tab_li = $('.tab .tab_ul li');
	$tab_li.hover(function(){
		$(this).addClass('hover').siblings().removeClass('hover');
		var index = $tab_li.index(this);
		$('div.tab_box > div').eq(index).show().siblings().hide();
	});	
	
});