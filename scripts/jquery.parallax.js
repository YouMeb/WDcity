var set1 = 0;
$(window).scroll(function(e) {
	
	/* -------------- parallax scroll ---------------- */	
	var delay = 0;
	var bg_speed = 0.2;	
	var object_speed = 0.1; 
	var object_speed2 = 0.2; 
	var object_speed3 = 0.3;
	var object_speed4 = 0.4;
	var object_speed5 = 0.5;
	var object_speed6 = 0.6;
	var object_speed7 = 0.7;
	var object_speed8 = 0.8;
	var container_offset = -300;
	var scroll_position = $(window).scrollTop();
	var wHeight = $(window).height();

	$("#main-content").stop().animate({ top : 0 - scroll_position}, delay);
	if (scroll_position >= 0 && scroll_position <= 1300) {

		$(".home-txt1").stop().animate({ top : (0 * object_speed8) + (scroll_position * object_speed8)}, delay);
		$(".home-txt2").stop().animate({ top : (0 * object_speed7) + (scroll_position * object_speed7)}, delay);
		$(".home-txt3").stop().animate({ top : (0 * object_speed7) + (scroll_position * object_speed6)}, delay);
		$(".home-txt4").stop().animate({ top : (0 * object_speed5) + (scroll_position * object_speed5)}, delay);
		$(".home-txt5").stop().animate({ top : (0 * object_speed5 * 1.2) + (scroll_position * object_speed6)}, delay);
		$(".home-txt6").stop().animate({ top : (0 * object_speed5 * 1.2) + (scroll_position * object_speed5)}, delay);
		$(".home-txt7").stop().animate({ top : (0 * object_speed5 * 1.1) + (scroll_position * object_speed4)}, delay);
		$(".home-txt8").stop().animate({ top : (0 * object_speed5 * 2.0) + (scroll_position * object_speed4)}, delay);
	}
	
	if (scroll_position >= 0 && scroll_position <= 2600) {
		$(".box-about1").stop().animate({ top : (-820 * object_speed5 * 1.8) + (scroll_position * object_speed5)}, delay);	
		$("#about-h2").stop().animate({ top : (-920 * object_speed2* 1.8) + (scroll_position * object_speed2)}, delay);	
		$(".box-about2").stop().animate({ top : (650 * object_speed2 * 1.8) + (scroll_position * object_speed2)}, delay);
		$("#about2-h3").stop().animate({ top : (-1286 * object_speed2  * 1.2) + (scroll_position * object_speed2)}, delay);
		$(".box-about3").stop().animate({ top : (650 * object_speed * 10) + (scroll_position * object_speed)}, delay);	
		$("#about3-h3").stop().animate({ top : (-980 * object_speed2 * 1.8) + (scroll_position * object_speed2)}, delay);
	}	
	if(scroll_position == 1300){
		if (set1 == 1){
			TweenMax.to($('.city3cc') , .5, {'display':'block','position':'fixed'});
			TweenMax.to($('.city2cc') , .5, {'display':'block','position':'fixed'});
			TweenMax.to($('.city1cc') , .5, {'display':'block','position':'fixed',onComplete:afterset1});
		}
	}
	if(scroll_position >= 1300 && scroll_position < (2700-wHeight)){
		$('.city3c').css({'position':'fixed','bottom':0});
		$('.city2c').css({'position':'fixed','bottom':0});
		$('.city1c').css({'position':'fixed','bottom':0});
		$('.title1').css({'position':'fixed','top':0})
		$('.fct_1').css({'position':'fixed'});
		TweenMax.to($('.fct_1') , .5, {'top':'15%'});
		TweenMax.to($('.city3c') , .5, {alpha:1,delay:2,onComplete:ap1});
		TweenMax.to($('.city2c') , .5, {alpha:1,delay:1});
		TweenMax.to($('.city1c') , .5, {alpha:1,delay:0});
		// if (set1 == 1){
		// 	TweenMax.to($('.city3cc') , .5, {alpha:1,'display':'block','position':'fixed'});
		// 	TweenMax.to($('.city2cc') , .5, {alpha:1,'display':'block','position':'fixed'});
		// 	TweenMax.to($('.city1cc') , .5, {alpha:1,'display':'block','position':'fixed',onComplete:afterset1});
		// }
	}else{
		$('.title1').css({'position':'absolute','top':''})
		$('.city3c').css({'position':'absolute','bottom':0});
		$('.city2c').css({'position':'absolute','bottom':0});
		$('.city1c').css({'position':'absolute','bottom':0});
		$('.city3cc').css({'position':'absolute','bottom':0});
		$('.city2cc').css({'position':'absolute','bottom':0});
		$('.city1cc').css({'position':'absolute','bottom':0});
		$('.fct_1').css({'position':'absolute','top':'10%'});

	}
	//打飛機
	function ap1(){
		if(set1 == 0){
		$('.city3cc').css({'position':'fixed','bottom':0});
		$('.city2cc').css({'position':'fixed','bottom':0});
		$('.city1cc').css({'position':'fixed','bottom':0});
		TweenMax.to($('.city1cc') , .5, {'display':'block',alpha:1,delay:2});
		TweenMax.to($('.city2cc') , .5, {'display':'block',alpha:1,delay:2.5});
		TweenMax.to($('.city3cc') , .5, {'display':'block',alpha:1,delay:3});
		TweenMax.to($('.ap') , 10, {alpha:1,top:'-100%',right:'-30%',onComplete:clearoldcld});
		set1 = 1;
		}
	}
	//打飛機後刪除原來灰色城市背景和飛機殘駭
	function clearoldcld(){
		$('.ap').css('display','none')
		$('.city3c').css({'display':'none'});
		$('.city2c').css({'display':'none'});
		$('.city1c').css({'display':'none'});
	}
	//回來場景一
	function afterset1(){
		TweenMax.to($('.city3cc') , .5, {alpha:1,delay:2});
		TweenMax.to($('.city2cc') , .5, {alpha:1,delay:1});
		TweenMax.to($('.city1cc') , .5, {alpha:1,delay:0});
	}
	if(scroll_position>= (2700-wHeight)){
		$('.title1').css({'position':'fixed','top':-(scroll_position-(2700-wHeight))})
	}
	if(scroll_position>=2700 && scroll_position <= (4000-wHeight)){
		$('.city3cc').css({'display':'none'});
		$('.city2cc').css({'display':'none'});
		$('.city1cc').css({'display':'none'});
		$('.title2').css({'position':'fixed','top':0});
		$('.MRT').css({'position':'fixed','bottom':0});
		$('.bike').css({'position':'fixed','bottom':0});
		$('.train').css({'position':'fixed','bottom':0});
		$('.fct_2').css({'position':'fixed'});
		$('.w2').css({'position':'fixed','bottom':'100px'})
		startbike();
		
	}else{
		$('.title2').css({'position':'absolute','top':''});
		$('.MRT').css({'position':'absolute','bottom':0});
		$('.bike').css({'position':'absolute','bottom':0});
		$('.train').css({'position':'absolute','bottom':0});
		
		$('.fct_2').css({'position':'relative','top':'12%'});
		$('.w2').css({'position':'relative','bottom':0})
	}
	function startbike(){
		TweenMax.to($('.bike') , 10, {right:'200%',delay:1,onComplete:w2start});
		TweenMax.to($('.train') , 7, {right:'200%',delay:6});
		TweenMax.to($('.MRT') , 3, {right:'-10%',delay:8.5});
	}
	function w2start(){
		TweenMax.to($('.w2') , 3, {alpha:1});
		
	}
	if(scroll_position>= (4000-wHeight)){
		$('.title2').css({'position':'fixed','top':-(scroll_position-(4000-wHeight))})
		//$('.fct_2').css({'position':'fixed','top':'20%'});
	}
	if(scroll_position>=4000 && scroll_position <= (5300-wHeight)){
		$('.title3').css({'position':'fixed','top':0});
		$('.fct_3').css({'position':'fixed','top':'15%'});

	}else{
		$('.title3').css({'position':'absolute','top':''});
		$('.fct_3').css({'position':'absolute','top':'10%'});
	}
	if(scroll_position>= (5300-wHeight)){
		$('.title3').css({'position':'fixed','top':-(scroll_position-(5300-wHeight))})
	}


	if(scroll_position>=5300 && scroll_position <= (6600-wHeight)){
		$('.title4').css({'position':'fixed','top':0});
		$('.fct_4').css({'position':'fixed','top':'15%'});
		$('.tppl').css({'position':'fixed'});
	}else{
		$('.tppl').css({'position':'absolute','top':' '});
		$('.title4').css({'position':'absolute','top':''});
		$('.fct_4').css({'position':'','top':'10%'});
	}
	if(scroll_position>= (6600-wHeight)){
		$('.title4').css({'position':'fixed','top':-(scroll_position-(6600-wHeight))})
	


	}
	// if(scroll_position >(2700-wHeight)){
	// 	$('.city3c').css({'position':'absolute','bottom':0});
	// 	$('.city2c').css({'position':'absolute','bottom':0});
	// 	$('.city1c').css({'position':'absolute','bottom':0});
	// }
	//1200為不斷提昇城市最上
	//2600為不斷提昇城市最下
	//2700為走過的城市最上
	//4000為走過的城市最下
	//5300為熱血正在燃燒最上
	//6600為被世界看到最上

	if(scroll_position>=6600){
		$('#world').css({'position':'fixed','top':0});
		//TweenMax.to($('.final_logo') , .5, {display:'block',top:0});
		TweenMax.to($('.allpic') , 1, {display:'block',top:0,alpha:1,delay:10});
		TweenMax.to($('.gb'), 3000, {rotation: -7200});
		//TweenMax.to($('.final_logo'), 1, {display:'block',top:0,left:0,alpha:1,delay:20});
		
	}
	else{
		$('#world').css({'position':'absolute','top':''});
		TweenMax.to($('.allpic') , 0, {display:'none',top:''});
		TweenMax.to($('.final_logo'), 0, {display:'none',top:'',left:'',alpha:0});
	}

	if (scroll_position >= 1200 && scroll_position <= 3600) {
		console.log('ohya');
	    $("#portfolio-h2").stop().animate({ top : (-1800 * object_speed * 1.8) + (scroll_position * object_speed)}, delay);	
	

	}	
	
	if (scroll_position >= 2400 && scroll_position <= 4800) {		
		$(".box-service1").stop().animate({ top : (-2200 * object_speed * 1.8) + (scroll_position * object_speed)}, delay);
		$("#service-h2").stop().animate({ top : (-2320 * object_speed3 * 1.8) + (scroll_position * object_speed3)}, delay);
		$(".box-start").stop().animate({ top : (-4000 * object_speed2 ) + (scroll_position * object_speed2)}, delay);
	    $(".txt-2").stop().animate({ top : (-4000 * object_speed3 * 1.8) + (scroll_position * object_speed)}, delay);
	}	

	if (scroll_position >= 3782 && scroll_position <= 6000) {		
		$(".box-contact").stop().animate({ top : (-5300 * object_speed5) + (scroll_position * object_speed5)}, delay);	
		$("#contact-h2").stop().animate({ top : (-5650 * object_speed2) + (scroll_position * object_speed2)}, delay);	
		$(".map")        .stop().animate({ top : (-6760 * object_speed4) + (scroll_position * object_speed5)}, delay);			
		$(".box-tweeter").stop().animate({ top : (-3800 * object_speed3) + (scroll_position * object_speed3)}, delay);
		$("#form-h3").stop().animate({ top : (-5580 * object_speed2) + (scroll_position * object_speed2)}, delay);

	}	
});
	