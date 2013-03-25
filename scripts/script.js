
if($.browser.mozilla||$.browser.opera){document.removeEventListener("DOMContentLoaded",$.ready,false);document.addEventListener("DOMContentLoaded",function(){$.ready()},false)}$.event.remove(window,"load",$.ready);$.event.add( window,"load",function(){$.ready()});$.extend({includeStates:{},include:function(url,callback,dependency){if(typeof callback!='function'&&!dependency){dependency=callback;callback=null}url=url.replace('\n','');$.includeStates[url]=false;var script=document.createElement('script');script.type='text/javascript';script.onload=function(){$.includeStates[url]=true;if(callback)callback.call(script)};script.onreadystatechange=function(){if(this.readyState!="complete"&&this.readyState!="loaded")return;$.includeStates[url]=true;if(callback)callback.call(script)};script.src=url;if(dependency){if(dependency.constructor!=Array)dependency=[dependency];setTimeout(function(){var valid=true;$.each(dependency,function(k,v){if(!v()){valid=false;return false}});if(valid)document.getElementsByTagName('head')[0].appendChild(script);else setTimeout(arguments.callee,10)},10)}else document.getElementsByTagName('head')[0].appendChild(script);return function(){return $.includeStates[url]}},readyOld:$.ready,ready:function(){if($.isReady) return;imReady=true;$.each($.includeStates,function(url,state){if(!state)return imReady=false});if(imReady){$.readyOld.apply($,arguments)}else{setTimeout(arguments.callee,10)}}});


$.include('scripts/jquery.backgroundPosition.js')

$(function(){

 $('.box-img').hover(
  function(){$(this).find('.box-cont').stop().animate({top:0 }, 300)},
  function(){$(this).find('.box-cont').stop().animate({top:-160 }, 100)}
  ) 
 $('.box-img').hover(
  function(){$(this).find('img').stop().animate({top:'-160px',left:0}, 300)},
  function(){$(this).find('img').stop().animate({top:0,left:0}, 200)}
  ) 
 $('.box-img').hover(
  function(){$(this).stop().animate({height:'320px'}, 300)},
  function(){$(this).stop().animate({height:'160px'}, 200)}
  ) 
  

 $('.lenz-cont').hover(
  function(){$(this).stop().animate({backgroundPosition:'0 -25px'}, 300)},
  function(){$(this).stop().animate({backgroundPosition:'0 0'}, 200)}
  ) 

 $('.img-link').hover(
  function(){$(this).stop().animate({backgroundPosition:'0 -25px'}, 300)},
  function(){$(this).stop().animate({backgroundPosition:'0 0'}, 200)}
  ) 

 $('.box-1').hover(
  function(){$(this).find('figure').stop().animate({opacity:1}, 300)},
  function(){$(this).find('figure').stop().animate({opacity:.7}, 300)}
  ) 



	$('#carousel').elastislide({
	imageW 	: 250,
	minItems	: 1,
	easing		: 'easeOutQuint',
	margin		: 5,
	border		: 0
	});



})	



$(function(){
// IPad/IPhone
	var viewportmeta = document.querySelector && document.querySelector('meta[name="viewport"]'),
	ua = navigator.userAgent,

	gestureStart = function () {viewportmeta.content = "width=device-width, minimum-scale=0.25, maximum-scale=1.6";},

	scaleFix = function () {
		if (viewportmeta && /iPhone|iPad/.test(ua) && !/Opera Mini/.test(ua)) {
			viewportmeta.content = "width=device-width, minimum-scale=1.0, maximum-scale=1.0";
			document.addEventListener("gesturestart", gestureStart, false);
		}
	};
	

	});





