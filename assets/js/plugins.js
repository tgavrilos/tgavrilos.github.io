/* Table of Content
==================================================
	1.Hammer.js - v1.0.5
	2.FlowType.JS 1.0
	3.Swiper 2.2 
	4.Swiper 3D Flow 2.0 */

/*! Hammer.JS - v1.0.5 - 2013-04-07
 * http://eightmedia.github.com/hammer.js
 *
 * Copyright (c) 2013 Jorik Tangelder <j.tangelder@gmail.com>;
 * Licensed under the MIT license */

(function(t,e){"use strict";function n(){if(!i.READY){i.event.determineEventTypes();for(var t in i.gestures)i.gestures.hasOwnProperty(t)&&i.detection.register(i.gestures[t]);i.event.onTouch(i.DOCUMENT,i.EVENT_MOVE,i.detection.detect),i.event.onTouch(i.DOCUMENT,i.EVENT_END,i.detection.detect),i.READY=!0}}var i=function(t,e){return new i.Instance(t,e||{})};i.defaults={stop_browser_behavior:{userSelect:"none",touchAction:"none",touchCallout:"none",contentZooming:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"}},i.HAS_POINTEREVENTS=navigator.pointerEnabled||navigator.msPointerEnabled,i.HAS_TOUCHEVENTS="ontouchstart"in t,i.MOBILE_REGEX=/mobile|tablet|ip(ad|hone|od)|android/i,i.NO_MOUSEEVENTS=i.HAS_TOUCHEVENTS&&navigator.userAgent.match(i.MOBILE_REGEX),i.EVENT_TYPES={},i.DIRECTION_DOWN="down",i.DIRECTION_LEFT="left",i.DIRECTION_UP="up",i.DIRECTION_RIGHT="right",i.POINTER_MOUSE="mouse",i.POINTER_TOUCH="touch",i.POINTER_PEN="pen",i.EVENT_START="start",i.EVENT_MOVE="move",i.EVENT_END="end",i.DOCUMENT=document,i.plugins={},i.READY=!1,i.Instance=function(t,e){var r=this;return n(),this.element=t,this.enabled=!0,this.options=i.utils.extend(i.utils.extend({},i.defaults),e||{}),this.options.stop_browser_behavior&&i.utils.stopDefaultBrowserBehavior(this.element,this.options.stop_browser_behavior),i.event.onTouch(t,i.EVENT_START,function(t){r.enabled&&i.detection.startDetect(r,t)}),this},i.Instance.prototype={on:function(t,e){for(var n=t.split(" "),i=0;n.length>i;i++)this.element.addEventListener(n[i],e,!1);return this},off:function(t,e){for(var n=t.split(" "),i=0;n.length>i;i++)this.element.removeEventListener(n[i],e,!1);return this},trigger:function(t,e){var n=i.DOCUMENT.createEvent("Event");n.initEvent(t,!0,!0),n.gesture=e;var r=this.element;return i.utils.hasParent(e.target,r)&&(r=e.target),r.dispatchEvent(n),this},enable:function(t){return this.enabled=t,this}};var r=null,o=!1,s=!1;i.event={bindDom:function(t,e,n){for(var i=e.split(" "),r=0;i.length>r;r++)t.addEventListener(i[r],n,!1)},onTouch:function(t,e,n){var a=this;this.bindDom(t,i.EVENT_TYPES[e],function(c){var u=c.type.toLowerCase();if(!u.match(/mouse/)||!s){(u.match(/touch/)||u.match(/pointerdown/)||u.match(/mouse/)&&1===c.which)&&(o=!0),u.match(/touch|pointer/)&&(s=!0);var h=0;o&&(i.HAS_POINTEREVENTS&&e!=i.EVENT_END?h=i.PointerEvent.updatePointer(e,c):u.match(/touch/)?h=c.touches.length:s||(h=u.match(/up/)?0:1),h>0&&e==i.EVENT_END?e=i.EVENT_MOVE:h||(e=i.EVENT_END),h||null===r?r=c:c=r,n.call(i.detection,a.collectEventData(t,e,c)),i.HAS_POINTEREVENTS&&e==i.EVENT_END&&(h=i.PointerEvent.updatePointer(e,c))),h||(r=null,o=!1,s=!1,i.PointerEvent.reset())}})},determineEventTypes:function(){var t;t=i.HAS_POINTEREVENTS?i.PointerEvent.getEvents():i.NO_MOUSEEVENTS?["touchstart","touchmove","touchend touchcancel"]:["touchstart mousedown","touchmove mousemove","touchend touchcancel mouseup"],i.EVENT_TYPES[i.EVENT_START]=t[0],i.EVENT_TYPES[i.EVENT_MOVE]=t[1],i.EVENT_TYPES[i.EVENT_END]=t[2]},getTouchList:function(t){return i.HAS_POINTEREVENTS?i.PointerEvent.getTouchList():t.touches?t.touches:[{identifier:1,pageX:t.pageX,pageY:t.pageY,target:t.target}]},collectEventData:function(t,e,n){var r=this.getTouchList(n,e),o=i.POINTER_TOUCH;return(n.type.match(/mouse/)||i.PointerEvent.matchType(i.POINTER_MOUSE,n))&&(o=i.POINTER_MOUSE),{center:i.utils.getCenter(r),timeStamp:(new Date).getTime(),target:n.target,touches:r,eventType:e,pointerType:o,srcEvent:n,preventDefault:function(){this.srcEvent.preventManipulation&&this.srcEvent.preventManipulation(),this.srcEvent.preventDefault&&this.srcEvent.preventDefault()},stopPropagation:function(){this.srcEvent.stopPropagation()},stopDetect:function(){return i.detection.stopDetect()}}}},i.PointerEvent={pointers:{},getTouchList:function(){var t=this,e=[];return Object.keys(t.pointers).sort().forEach(function(n){e.push(t.pointers[n])}),e},updatePointer:function(t,e){return t==i.EVENT_END?this.pointers={}:(e.identifier=e.pointerId,this.pointers[e.pointerId]=e),Object.keys(this.pointers).length},matchType:function(t,e){if(!e.pointerType)return!1;var n={};return n[i.POINTER_MOUSE]=e.pointerType==e.MSPOINTER_TYPE_MOUSE||e.pointerType==i.POINTER_MOUSE,n[i.POINTER_TOUCH]=e.pointerType==e.MSPOINTER_TYPE_TOUCH||e.pointerType==i.POINTER_TOUCH,n[i.POINTER_PEN]=e.pointerType==e.MSPOINTER_TYPE_PEN||e.pointerType==i.POINTER_PEN,n[t]},getEvents:function(){return["pointerdown MSPointerDown","pointermove MSPointerMove","pointerup pointercancel MSPointerUp MSPointerCancel"]},reset:function(){this.pointers={}}},i.utils={extend:function(t,n,i){for(var r in n)t[r]!==e&&i||(t[r]=n[r]);return t},hasParent:function(t,e){for(;t;){if(t==e)return!0;t=t.parentNode}return!1},getCenter:function(t){for(var e=[],n=[],i=0,r=t.length;r>i;i++)e.push(t[i].pageX),n.push(t[i].pageY);return{pageX:(Math.min.apply(Math,e)+Math.max.apply(Math,e))/2,pageY:(Math.min.apply(Math,n)+Math.max.apply(Math,n))/2}},getVelocity:function(t,e,n){return{x:Math.abs(e/t)||0,y:Math.abs(n/t)||0}},getAngle:function(t,e){var n=e.pageY-t.pageY,i=e.pageX-t.pageX;return 180*Math.atan2(n,i)/Math.PI},getDirection:function(t,e){var n=Math.abs(t.pageX-e.pageX),r=Math.abs(t.pageY-e.pageY);return n>=r?t.pageX-e.pageX>0?i.DIRECTION_LEFT:i.DIRECTION_RIGHT:t.pageY-e.pageY>0?i.DIRECTION_UP:i.DIRECTION_DOWN},getDistance:function(t,e){var n=e.pageX-t.pageX,i=e.pageY-t.pageY;return Math.sqrt(n*n+i*i)},getScale:function(t,e){return t.length>=2&&e.length>=2?this.getDistance(e[0],e[1])/this.getDistance(t[0],t[1]):1},getRotation:function(t,e){return t.length>=2&&e.length>=2?this.getAngle(e[1],e[0])-this.getAngle(t[1],t[0]):0},isVertical:function(t){return t==i.DIRECTION_UP||t==i.DIRECTION_DOWN},stopDefaultBrowserBehavior:function(t,e){var n,i=["webkit","khtml","moz","ms","o",""];if(e&&t.style){for(var r=0;i.length>r;r++)for(var o in e)e.hasOwnProperty(o)&&(n=o,i[r]&&(n=i[r]+n.substring(0,1).toUpperCase()+n.substring(1)),t.style[n]=e[o]);"none"==e.userSelect&&(t.onselectstart=function(){return!1})}}},i.detection={gestures:[],current:null,previous:null,stopped:!1,startDetect:function(t,e){this.current||(this.stopped=!1,this.current={inst:t,startEvent:i.utils.extend({},e),lastEvent:!1,name:""},this.detect(e))},detect:function(t){if(this.current&&!this.stopped){t=this.extendEventData(t);for(var e=this.current.inst.options,n=0,r=this.gestures.length;r>n;n++){var o=this.gestures[n];if(!this.stopped&&e[o.name]!==!1&&o.handler.call(o,t,this.current.inst)===!1){this.stopDetect();break}}return this.current&&(this.current.lastEvent=t),t.eventType==i.EVENT_END&&!t.touches.length-1&&this.stopDetect(),t}},stopDetect:function(){this.previous=i.utils.extend({},this.current),this.current=null,this.stopped=!0},extendEventData:function(t){var e=this.current.startEvent;if(e&&(t.touches.length!=e.touches.length||t.touches===e.touches)){e.touches=[];for(var n=0,r=t.touches.length;r>n;n++)e.touches.push(i.utils.extend({},t.touches[n]))}var o=t.timeStamp-e.timeStamp,s=t.center.pageX-e.center.pageX,a=t.center.pageY-e.center.pageY,c=i.utils.getVelocity(o,s,a);return i.utils.extend(t,{deltaTime:o,deltaX:s,deltaY:a,velocityX:c.x,velocityY:c.y,distance:i.utils.getDistance(e.center,t.center),angle:i.utils.getAngle(e.center,t.center),direction:i.utils.getDirection(e.center,t.center),scale:i.utils.getScale(e.touches,t.touches),rotation:i.utils.getRotation(e.touches,t.touches),startEvent:e}),t},register:function(t){var n=t.defaults||{};return n[t.name]===e&&(n[t.name]=!0),i.utils.extend(i.defaults,n,!0),t.index=t.index||1e3,this.gestures.push(t),this.gestures.sort(function(t,e){return t.index<e.index?-1:t.index>e.index?1:0}),this.gestures}},i.gestures=i.gestures||{},i.gestures.Hold={name:"hold",index:10,defaults:{hold_timeout:500,hold_threshold:1},timer:null,handler:function(t,e){switch(t.eventType){case i.EVENT_START:clearTimeout(this.timer),i.detection.current.name=this.name,this.timer=setTimeout(function(){"hold"==i.detection.current.name&&e.trigger("hold",t)},e.options.hold_timeout);break;case i.EVENT_MOVE:t.distance>e.options.hold_threshold&&clearTimeout(this.timer);break;case i.EVENT_END:clearTimeout(this.timer)}}},i.gestures.Tap={name:"tap",index:100,defaults:{tap_max_touchtime:250,tap_max_distance:10,tap_always:!0,doubletap_distance:20,doubletap_interval:300},handler:function(t,e){if(t.eventType==i.EVENT_END){var n=i.detection.previous,r=!1;if(t.deltaTime>e.options.tap_max_touchtime||t.distance>e.options.tap_max_distance)return;n&&"tap"==n.name&&t.timeStamp-n.lastEvent.timeStamp<e.options.doubletap_interval&&t.distance<e.options.doubletap_distance&&(e.trigger("doubletap",t),r=!0),(!r||e.options.tap_always)&&(i.detection.current.name="tap",e.trigger(i.detection.current.name,t))}}},i.gestures.Swipe={name:"swipe",index:40,defaults:{swipe_max_touches:1,swipe_velocity:.7},handler:function(t,e){if(t.eventType==i.EVENT_END){if(e.options.swipe_max_touches>0&&t.touches.length>e.options.swipe_max_touches)return;(t.velocityX>e.options.swipe_velocity||t.velocityY>e.options.swipe_velocity)&&(e.trigger(this.name,t),e.trigger(this.name+t.direction,t))}}},i.gestures.Drag={name:"drag",index:50,defaults:{drag_min_distance:10,drag_max_touches:1,drag_block_horizontal:!1,drag_block_vertical:!1,drag_lock_to_axis:!1,drag_lock_min_distance:25},triggered:!1,handler:function(t,n){if(i.detection.current.name!=this.name&&this.triggered)return n.trigger(this.name+"end",t),this.triggered=!1,e;if(!(n.options.drag_max_touches>0&&t.touches.length>n.options.drag_max_touches))switch(t.eventType){case i.EVENT_START:this.triggered=!1;break;case i.EVENT_MOVE:if(t.distance<n.options.drag_min_distance&&i.detection.current.name!=this.name)return;i.detection.current.name=this.name,(i.detection.current.lastEvent.drag_locked_to_axis||n.options.drag_lock_to_axis&&n.options.drag_lock_min_distance<=t.distance)&&(t.drag_locked_to_axis=!0);var r=i.detection.current.lastEvent.direction;t.drag_locked_to_axis&&r!==t.direction&&(t.direction=i.utils.isVertical(r)?0>t.deltaY?i.DIRECTION_UP:i.DIRECTION_DOWN:0>t.deltaX?i.DIRECTION_LEFT:i.DIRECTION_RIGHT),this.triggered||(n.trigger(this.name+"start",t),this.triggered=!0),n.trigger(this.name,t),n.trigger(this.name+t.direction,t),(n.options.drag_block_vertical&&i.utils.isVertical(t.direction)||n.options.drag_block_horizontal&&!i.utils.isVertical(t.direction))&&t.preventDefault();break;case i.EVENT_END:this.triggered&&n.trigger(this.name+"end",t),this.triggered=!1}}},i.gestures.Transform={name:"transform",index:45,defaults:{transform_min_scale:.01,transform_min_rotation:1,transform_always_block:!1},triggered:!1,handler:function(t,n){if(i.detection.current.name!=this.name&&this.triggered)return n.trigger(this.name+"end",t),this.triggered=!1,e;if(!(2>t.touches.length))switch(n.options.transform_always_block&&t.preventDefault(),t.eventType){case i.EVENT_START:this.triggered=!1;break;case i.EVENT_MOVE:var r=Math.abs(1-t.scale),o=Math.abs(t.rotation);if(n.options.transform_min_scale>r&&n.options.transform_min_rotation>o)return;i.detection.current.name=this.name,this.triggered||(n.trigger(this.name+"start",t),this.triggered=!0),n.trigger(this.name,t),o>n.options.transform_min_rotation&&n.trigger("rotate",t),r>n.options.transform_min_scale&&(n.trigger("pinch",t),n.trigger("pinch"+(1>t.scale?"in":"out"),t));break;case i.EVENT_END:this.triggered&&n.trigger(this.name+"end",t),this.triggered=!1}}},i.gestures.Touch={name:"touch",index:-1/0,defaults:{prevent_default:!1,prevent_mouseevents:!1},handler:function(t,n){return n.options.prevent_mouseevents&&t.pointerType==i.POINTER_MOUSE?(t.stopDetect(),e):(n.options.prevent_default&&t.preventDefault(),t.eventType==i.EVENT_START&&n.trigger(this.name,t),e)}},i.gestures.Release={name:"release",index:1/0,handler:function(t,e){t.eventType==i.EVENT_END&&e.trigger(this.name,t)}},"object"==typeof module&&"object"==typeof module.exports?module.exports=i:(t.Hammer=i,"function"==typeof t.define&&t.define.amd&&t.define("hammer",[],function(){return i}))})(this),function(t,e){"use strict";t!==e&&(Hammer.event.bindDom=function(n,i,r){t(n).on(i,function(t){var n=t.originalEvent||t;n.pageX===e&&(n.pageX=t.pageX,n.pageY=t.pageY),n.target||(n.target=t.target),n.which===e&&(n.which=n.button),n.preventDefault||(n.preventDefault=t.preventDefault),n.stopPropagation||(n.stopPropagation=t.stopPropagation),r.call(this,n)})},Hammer.Instance.prototype.on=function(e,n){return t(this.element).on(e,n)},Hammer.Instance.prototype.off=function(e,n){return t(this.element).off(e,n)},Hammer.Instance.prototype.trigger=function(e,n){var i=t(this.element);return i.has(n.target).length&&(i=t(n.target)),i.trigger({type:e,gesture:n})},t.fn.hammer=function(e){return this.each(function(){var n=t(this),i=n.data("hammer");i?i&&e&&Hammer.utils.extend(i.options,e):n.data("hammer",new Hammer(this,e||{}))})})}(window.jQuery||window.Zepto);

/*
 * If you create a derivative, please leave this text intact:
 *
 * FlowType.JS 1.0
 * Copyright (c) 2013, Simple Focus http://simplefocus.com/
 *
 * FlowType.JS by Simple Focus (http://simplefocus.com/)
 * is licensed under the MIT License. Read a copy of the
 * license in the LICENSE.txt file or at
 * http://choosealicense.com/licenses/mit
 *
 * Thanks to Giovanni Difeterici (http://www.gdifeterici.com/)
 */
(function($) {
	$.fn.flowtype = function(options) {
		// Establish default settings/variables
		// ====================================
		var settings = $.extend({
			maximum: 9999,
			minimum: 1,
			maxFont: 9999,
			minFont: 1,
			fontRatio: 35,
			lineRatio: 1.45
		}, options),
			// Do the magic math
			// =================
			changes = function(el) {
				var $el = $(el),
					elw = $el.width(),
					width = elw > settings.maximum ? settings.maximum : elw < settings.minimum ? settings.minimum : elw,
					fontBase = width / settings.fontRatio,
					fontSize = fontBase > settings.maxFont ? settings.maxFont : fontBase < settings.minFont ? settings.minFont : fontBase;
				$el.css({
					'font-size': fontSize + 'px',
					'line-height': fontSize * settings.lineRatio + 'px'
				});
			};
		// Make the magic visible
		// ======================
		return this.each(function() {
			// Context for resize callback
			var that = this;
			// Set changes on load
			changes(this);
			// Make changes upon resize
			$(window).resize(function() {
				changes(that);
			});
		});
	};
}(jQuery));

/*
 * Swiper 2.2 - Mobile Touch Slider
 * http://www.idangero.us/sliders/swiper/
 *
 * Copyright 2012-2013, Vladimir Kharlampidi
 * The iDangero.us
 * http://www.idangero.us/
 *
 * Licensed under GPL & MIT
 *
 * Updated on: September 15, 2013
*/
var Swiper=function(f,b){function h(a,b){return document.querySelectorAll?(b||document).querySelectorAll(a):jQuery(a,b)}function g(){var c=A-l;b.freeMode&&(c=A-l);b.slidesPerView>a.slides.length&&(c=0);0>c&&(c=0);return c}function k(){function c(c){var d=new Image;d.onload=function(){a.imagesLoaded++;if(a.imagesLoaded==a.imagesToLoad.length&&(a.reInit(),b.onImagesReady))b.onImagesReady(a)};d.src=c}var d=a.h.addEventListener;a.browser.ie10?(d(a.wrapper,a.touchEvents.touchStart,B),d(document,a.touchEvents.touchMove,
C),d(document,a.touchEvents.touchEnd,D)):(a.support.touch&&(d(a.wrapper,"touchstart",B),d(a.wrapper,"touchmove",C),d(a.wrapper,"touchend",D)),b.simulateTouch&&(d(a.wrapper,"mousedown",B),d(document,"mousemove",C),d(document,"mouseup",D)));b.autoResize&&d(window,"resize",a.resizeFix);p();a._wheelEvent=!1;if(b.mousewheelControl){void 0!==document.onmousewheel&&(a._wheelEvent="mousewheel");try{WheelEvent("wheel"),a._wheelEvent="wheel"}catch(e){}a._wheelEvent||(a._wheelEvent="DOMMouseScroll");a._wheelEvent&&
d(a.container,a._wheelEvent,N)}b.keyboardControl&&d(document,"keydown",O);if(b.updateOnImagesReady)for(a.imagesToLoad=h("img",a.container),d=0;d<a.imagesToLoad.length;d++)c(a.imagesToLoad[d].getAttribute("src"))}function p(){var c=a.h.addEventListener,d;if(b.preventLinks){var e=h("a",a.container);for(d=0;d<e.length;d++)c(e[d],"click",P)}if(b.releaseFormElements)for(e=h("input, textarea, select",a.container),d=0;d<e.length;d++)c(e[d],a.touchEvents.touchStart,Q,!0);if(b.onSlideClick)for(d=0;d<a.slides.length;d++)c(a.slides[d],
"click",R);if(b.onSlideTouch)for(d=0;d<a.slides.length;d++)c(a.slides[d],a.touchEvents.touchStart,S)}function s(){var c=a.h.removeEventListener,d;if(b.onSlideClick)for(d=0;d<a.slides.length;d++)c(a.slides[d],"click",R);if(b.onSlideTouch)for(d=0;d<a.slides.length;d++)c(a.slides[d],a.touchEvents.touchStart,S);if(b.releaseFormElements){var e=h("input, textarea, select",a.container);for(d=0;d<e.length;d++)c(e[d],a.touchEvents.touchStart,Q,!0)}if(b.preventLinks)for(e=h("a",a.container),d=0;d<e.length;d++)c(e[d],
"click",P)}function O(c){var b=c.keyCode||c.charCode;if(37==b||39==b||38==b||40==b){for(var e=!1,f=a.h.getOffset(a.container),g=a.h.windowScroll().left,h=a.h.windowScroll().top,w=a.h.windowWidth(),k=a.h.windowHeight(),f=[[f.left,f.top],[f.left+a.width,f.top],[f.left,f.top+a.height],[f.left+a.width,f.top+a.height]],l=0;l<f.length;l++){var q=f[l];q[0]>=g&&q[0]<=g+w&&q[1]>=h&&q[1]<=h+k&&(e=!0)}if(!e)return}if(m){if(37==b||39==b)c.preventDefault?c.preventDefault():c.returnValue=!1;39==b&&a.swipeNext();
37==b&&a.swipePrev()}else{if(38==b||40==b)c.preventDefault?c.preventDefault():c.returnValue=!1;40==b&&a.swipeNext();38==b&&a.swipePrev()}}function N(c){var d=a._wheelEvent,e;c.detail?e=-c.detail:"mousewheel"==d?e=c.wheelDelta:"DOMMouseScroll"==d?e=-c.detail:"wheel"==d&&(e=Math.abs(c.deltaX)>Math.abs(c.deltaY)?-c.deltaX:-c.deltaY);b.freeMode?(d=a.getWrapperTranslate()+e,0<d&&(d=0),d<-g()&&(d=-g()),a.setWrapperTransition(0),a.setWrapperTranslate(d),a.updateActiveSlide(d)):0>e?a.swipeNext():a.swipePrev();
b.autoplay&&a.stopAutoplay();c.preventDefault?c.preventDefault():c.returnValue=!1;return!1}function R(c){a.allowSlideClick&&(T(c),b.onSlideClick(a))}function S(c){T(c);b.onSlideTouch(a)}function T(c){if(c.currentTarget)a.clickedSlide=c.currentTarget;else{c=c.srcElement;do if(-1<c.className.indexOf(b.slideClass))break;while(c=c.parentNode);a.clickedSlide=c}a.clickedSlideIndex=a.slides.indexOf(a.clickedSlide);a.clickedSlideLoopIndex=a.clickedSlideIndex-(a.loopedSlides||0)}function P(c){if(!a.allowLinks)return c.preventDefault?
c.preventDefault():c.returnValue=!1,!1}function Q(a){a.stopPropagation?a.stopPropagation():a.returnValue=!1;return!1}function B(c){b.preventLinks&&(a.allowLinks=!0);if(a.isTouched||b.onlyExternal)return!1;var d;if(d=b.noSwiping)if(d=c.target||c.srcElement){d=c.target||c.srcElement;var e=!1;do-1<d.className.indexOf(b.noSwipingClass)&&(e=!0),d=d.parentElement;while(!e&&d.parentElement&&-1==d.className.indexOf(b.wrapperClass));!e&&-1<d.className.indexOf(b.wrapperClass)&&-1<d.className.indexOf(b.noSwipingClass)&&
(e=!0);d=e}if(d)return!1;H=!1;a.isTouched=!0;x="touchstart"==c.type;if(!x||1==c.targetTouches.length){a.callPlugins("onTouchStartBegin");x||(c.preventDefault?c.preventDefault():c.returnValue=!1);d=x?c.targetTouches[0].pageX:c.pageX||c.clientX;c=x?c.targetTouches[0].pageY:c.pageY||c.clientY;a.touches.startX=a.touches.currentX=d;a.touches.startY=a.touches.currentY=c;a.touches.start=a.touches.current=m?d:c;a.setWrapperTransition(0);a.positions.start=a.positions.current=a.getWrapperTranslate();a.setWrapperTranslate(a.positions.start);
a.times.start=(new Date).getTime();y=void 0;0<b.moveStartThreshold&&(M=!1);if(b.onTouchStart)b.onTouchStart(a);a.callPlugins("onTouchStartEnd")}}function C(c){if(a.isTouched&&!b.onlyExternal&&(!x||"mousemove"!=c.type)){var d=x?c.targetTouches[0].pageX:c.pageX||c.clientX,e=x?c.targetTouches[0].pageY:c.pageY||c.clientY;"undefined"===typeof y&&m&&(y=!!(y||Math.abs(e-a.touches.startY)>Math.abs(d-a.touches.startX)));"undefined"!==typeof y||m||(y=!!(y||Math.abs(e-a.touches.startY)<Math.abs(d-a.touches.startX)));
if(y)a.isTouched=!1;else if(c.assignedToSwiper)a.isTouched=!1;else if(c.assignedToSwiper=!0,b.preventLinks&&(a.allowLinks=!1),b.onSlideClick&&(a.allowSlideClick=!1),b.autoplay&&a.stopAutoplay(),!x||1==c.touches.length){if(!a.isMoved&&(a.callPlugins("onTouchMoveStart"),b.loop&&(a.fixLoop(),a.positions.start=a.getWrapperTranslate()),b.onTouchMoveStart))b.onTouchMoveStart(a);a.isMoved=!0;c.preventDefault?c.preventDefault():c.returnValue=!1;a.touches.current=m?d:e;a.positions.current=(a.touches.current-
a.touches.start)*b.touchRatio+a.positions.start;if(0<a.positions.current&&b.onResistanceBefore)b.onResistanceBefore(a,a.positions.current);if(a.positions.current<-g()&&b.onResistanceAfter)b.onResistanceAfter(a,Math.abs(a.positions.current+g()));b.resistance&&"100%"!=b.resistance&&(0<a.positions.current&&(c=1-a.positions.current/l/2,a.positions.current=0.5>c?l/2:a.positions.current*c),a.positions.current<-g()&&(d=(a.touches.current-a.touches.start)*b.touchRatio+(g()+a.positions.start),c=(l+d)/l,d=
a.positions.current-d*(1-c)/2,e=-g()-l/2,a.positions.current=d<e||0>=c?e:d));b.resistance&&"100%"==b.resistance&&(0<a.positions.current&&(!b.freeMode||b.freeModeFluid)&&(a.positions.current=0),a.positions.current<-g()&&(!b.freeMode||b.freeModeFluid)&&(a.positions.current=-g()));if(b.followFinger){b.moveStartThreshold?Math.abs(a.touches.current-a.touches.start)>b.moveStartThreshold||M?(M=!0,a.setWrapperTranslate(a.positions.current)):a.positions.current=a.positions.start:a.setWrapperTranslate(a.positions.current);
(b.freeMode||b.watchActiveIndex)&&a.updateActiveSlide(a.positions.current);b.grabCursor&&(a.container.style.cursor="move",a.container.style.cursor="grabbing",a.container.style.cursor="-moz-grabbin",a.container.style.cursor="-webkit-grabbing");F||(F=a.touches.current);I||(I=(new Date).getTime());a.velocity=(a.touches.current-F)/((new Date).getTime()-I)/2;2>Math.abs(a.touches.current-F)&&(a.velocity=0);F=a.touches.current;I=(new Date).getTime();a.callPlugins("onTouchMoveEnd");if(b.onTouchMove)b.onTouchMove(a);
return!1}}}}function D(c){y&&a.swipeReset();if(!b.onlyExternal&&a.isTouched){a.isTouched=!1;b.grabCursor&&(a.container.style.cursor="move",a.container.style.cursor="grab",a.container.style.cursor="-moz-grab",a.container.style.cursor="-webkit-grab");a.positions.current||0===a.positions.current||(a.positions.current=a.positions.start);b.followFinger&&a.setWrapperTranslate(a.positions.current);a.times.end=(new Date).getTime();a.touches.diff=a.touches.current-a.touches.start;a.touches.abs=Math.abs(a.touches.diff);
a.positions.diff=a.positions.current-a.positions.start;a.positions.abs=Math.abs(a.positions.diff);var d=a.positions.diff,e=a.positions.abs;c=a.times.end-a.times.start;5>e&&300>c&&!1==a.allowLinks&&(b.freeMode||0==e||a.swipeReset(),b.preventLinks&&(a.allowLinks=!0),b.onSlideClick&&(a.allowSlideClick=!0));setTimeout(function(){b.preventLinks&&(a.allowLinks=!0);b.onSlideClick&&(a.allowSlideClick=!0)},100);var f=g();if(!a.isMoved&&b.freeMode)a.isMoved=!1;else if(!a.isMoved||0<a.positions.current||a.positions.current<
-f)a.swipeReset();else if(a.isMoved=!1,b.freeMode){if(b.freeModeFluid){var e=1E3*b.momentumRatio,d=a.positions.current+a.velocity*e,h=!1,k,w=20*Math.abs(a.velocity)*b.momentumBounceRatio;d<-f&&(b.momentumBounce&&a.support.transitions?(d+f<-w&&(d=-f-w),k=-f,H=h=!0):d=-f);0<d&&(b.momentumBounce&&a.support.transitions?(d>w&&(d=w),k=0,H=h=!0):d=0);0!=a.velocity&&(e=Math.abs((d-a.positions.current)/a.velocity));a.setWrapperTranslate(d);a.setWrapperTransition(e);b.momentumBounce&&h&&a.wrapperTransitionEnd(function(){if(H){if(b.onMomentumBounce)b.onMomentumBounce(a);
a.setWrapperTranslate(k);a.setWrapperTransition(300)}});a.updateActiveSlide(d)}(!b.freeModeFluid||300<=c)&&a.updateActiveSlide(a.positions.current)}else{G=0>d?"toNext":"toPrev";"toNext"==G&&300>=c&&(30>e||!b.shortSwipes?a.swipeReset():a.swipeNext(!0));"toPrev"==G&&300>=c&&(30>e||!b.shortSwipes?a.swipeReset():a.swipePrev(!0));f=0;if("auto"==b.slidesPerView){for(var d=Math.abs(a.getWrapperTranslate()),n=h=0;n<a.slides.length;n++)if(w=m?a.slides[n].getWidth(!0):a.slides[n].getHeight(!0),h+=w,h>d){f=
w;break}f>l&&(f=l)}else f=r*b.slidesPerView;"toNext"==G&&300<c&&(e>=0.5*f?a.swipeNext(!0):a.swipeReset());"toPrev"==G&&300<c&&(e>=0.5*f?a.swipePrev(!0):a.swipeReset())}if(b.onTouchEnd)b.onTouchEnd(a);a.callPlugins("onTouchEnd")}}function J(c,d,e){function f(){g+=k;if(m="toNext"==l?g>c:g<c)a.setWrapperTranslate(Math.round(g)),a._DOMAnimating=!0,window.setTimeout(function(){f()},1E3/60);else{if(b.onSlideChangeEnd)b.onSlideChangeEnd(a);a.setWrapperTranslate(c);a._DOMAnimating=!1}}var h="to"==d&&0<=e.speed?
e.speed:b.speed;if(a.support.transitions||!b.DOMAnimation)a.setWrapperTranslate(c),a.setWrapperTransition(h);else{var g=a.getWrapperTranslate(),k=Math.ceil((c-g)/h*(1E3/60)),l=g>c?"toNext":"toPrev",m="toNext"==l?g>c:g<c;if(a._DOMAnimating)return;f()}a.updateActiveSlide(c);if(b.onSlideNext&&"next"==d)b.onSlideNext(a,c);if(b.onSlidePrev&&"prev"==d)b.onSlidePrev(a,c);if(b.onSlideReset&&"reset"==d)b.onSlideReset(a,c);("next"==d||"prev"==d||"to"==d&&!0==e.runCallbacks)&&W()}function W(){a.callPlugins("onSlideChangeStart");
if(b.onSlideChangeStart)if(b.queueStartCallbacks&&a.support.transitions){if(a._queueStartCallbacks)return;a._queueStartCallbacks=!0;b.onSlideChangeStart(a);a.wrapperTransitionEnd(function(){a._queueStartCallbacks=!1})}else b.onSlideChangeStart(a);b.onSlideChangeEnd&&(a.support.transitions?b.queueEndCallbacks?a._queueEndCallbacks||(a._queueEndCallbacks=!0,a.wrapperTransitionEnd(b.onSlideChangeEnd)):a.wrapperTransitionEnd(b.onSlideChangeEnd):b.DOMAnimation||setTimeout(function(){b.onSlideChangeEnd(a)},
10))}function U(){for(var c=a.paginationButtons,b=0;b<c.length;b++)a.h.removeEventListener(c[b],"click",V)}function V(b){var d;b=b.target||b.srcElement;for(var e=a.paginationButtons,f=0;f<e.length;f++)b===e[f]&&(d=f);a.swipeTo(d)}if(document.body.__defineGetter__&&HTMLElement){var t=HTMLElement.prototype;t.__defineGetter__&&t.__defineGetter__("outerHTML",function(){return(new XMLSerializer).serializeToString(this)})}window.getComputedStyle||(window.getComputedStyle=function(a,b){this.el=a;this.getPropertyValue=
function(b){var d=/(\-([a-z]){1})/g;"float"===b&&(b="styleFloat");d.test(b)&&(b=b.replace(d,function(a,b,c){return c.toUpperCase()}));return a.currentStyle[b]?a.currentStyle[b]:null};return this});Array.prototype.indexOf||(Array.prototype.indexOf=function(a,b){for(var e=b||0,f=this.length;e<f;e++)if(this[e]===a)return e;return-1});if((document.querySelectorAll||window.jQuery)&&"undefined"!==typeof f&&(f.nodeType||0!==h(f).length)){var a=this;a.touches={start:0,startX:0,startY:0,current:0,currentX:0,
currentY:0,diff:0,abs:0};a.positions={start:0,abs:0,diff:0,current:0};a.times={start:0,end:0};a.id=(new Date).getTime();a.container=f.nodeType?f:h(f)[0];a.isTouched=!1;a.isMoved=!1;a.activeIndex=0;a.activeLoaderIndex=0;a.activeLoopIndex=0;a.previousIndex=null;a.velocity=0;a.snapGrid=[];a.slidesGrid=[];a.imagesToLoad=[];a.imagesLoaded=0;a.wrapperLeft=0;a.wrapperRight=0;a.wrapperTop=0;a.wrapperBottom=0;var K,r,A,G,y,l,t={mode:"horizontal",touchRatio:1,speed:300,freeMode:!1,freeModeFluid:!1,momentumRatio:1,
momentumBounce:!0,momentumBounceRatio:1,slidesPerView:1,slidesPerGroup:1,simulateTouch:!0,followFinger:!0,shortSwipes:!0,moveStartThreshold:!1,autoplay:!1,onlyExternal:!1,createPagination:!0,pagination:!1,paginationElement:"span",paginationClickable:!1,paginationAsRange:!0,resistance:!0,scrollContainer:!1,preventLinks:!0,noSwiping:!1,noSwipingClass:"swiper-no-swiping",initialSlide:0,keyboardControl:!1,mousewheelControl:!1,mousewheelDebounce:600,useCSS3Transforms:!0,loop:!1,loopAdditionalSlides:0,
calculateHeight:!1,updateOnImagesReady:!0,releaseFormElements:!0,watchActiveIndex:!1,visibilityFullFit:!1,offsetPxBefore:0,offsetPxAfter:0,offsetSlidesBefore:0,offsetSlidesAfter:0,centeredSlides:!1,queueStartCallbacks:!1,queueEndCallbacks:!1,autoResize:!0,resizeReInit:!1,DOMAnimation:!0,loader:{slides:[],slidesHTMLType:"inner",surroundGroups:1,logic:"reload",loadAllSlides:!1},slideElement:"div",slideClass:"swiper-slide",slideActiveClass:"swiper-slide-active",slideVisibleClass:"swiper-slide-visible",
wrapperClass:"swiper-wrapper",paginationElementClass:"swiper-pagination-switch",paginationActiveClass:"swiper-active-switch",paginationVisibleClass:"swiper-visible-switch"};b=b||{};for(var n in t)if(n in b&&"object"===typeof b[n])for(var E in t[n])E in b[n]||(b[n][E]=t[n][E]);else n in b||(b[n]=t[n]);a.params=b;b.scrollContainer&&(b.freeMode=!0,b.freeModeFluid=!0);b.loop&&(b.resistance="100%");var m="horizontal"===b.mode;a.touchEvents={touchStart:a.support.touch||!b.simulateTouch?"touchstart":a.browser.ie10?
"MSPointerDown":"mousedown",touchMove:a.support.touch||!b.simulateTouch?"touchmove":a.browser.ie10?"MSPointerMove":"mousemove",touchEnd:a.support.touch||!b.simulateTouch?"touchend":a.browser.ie10?"MSPointerUp":"mouseup"};for(n=a.container.childNodes.length-1;0<=n;n--)if(a.container.childNodes[n].className)for(E=a.container.childNodes[n].className.split(" "),t=0;t<E.length;t++)E[t]===b.wrapperClass&&(K=a.container.childNodes[n]);a.wrapper=K;a._extendSwiperSlide=function(c){c.append=function(){b.loop?
(c.insertAfter(a.slides.length-a.loopedSlides),a.removeLoopedSlides(),a.calcSlides(),a.createLoop()):a.wrapper.appendChild(c);a.reInit();return c};c.prepend=function(){b.loop?(a.wrapper.insertBefore(c,a.slides[a.loopedSlides]),a.removeLoopedSlides(),a.calcSlides(),a.createLoop()):a.wrapper.insertBefore(c,a.wrapper.firstChild);a.reInit();return c};c.insertAfter=function(d){if("undefined"===typeof d)return!1;b.loop?(d=a.slides[d+1+a.loopedSlides],a.wrapper.insertBefore(c,d),a.removeLoopedSlides(),a.calcSlides(),
a.createLoop()):(d=a.slides[d+1],a.wrapper.insertBefore(c,d));a.reInit();return c};c.clone=function(){return a._extendSwiperSlide(c.cloneNode(!0))};c.remove=function(){a.wrapper.removeChild(c);a.reInit()};c.html=function(a){if("undefined"===typeof a)return c.innerHTML;c.innerHTML=a;return c};c.index=function(){for(var b,e=a.slides.length-1;0<=e;e--)c===a.slides[e]&&(b=e);return b};c.isActive=function(){return c.index()===a.activeIndex?!0:!1};c.swiperSlideDataStorage||(c.swiperSlideDataStorage={});
c.getData=function(a){return c.swiperSlideDataStorage[a]};c.setData=function(a,b){c.swiperSlideDataStorage[a]=b;return c};c.data=function(a,b){return b?(c.setAttribute("data-"+a,b),c):c.getAttribute("data-"+a)};c.getWidth=function(b){return a.h.getWidth(c,b)};c.getHeight=function(b){return a.h.getHeight(c,b)};c.getOffset=function(){return a.h.getOffset(c)};return c};a.calcSlides=function(c){var d=a.slides?a.slides.length:!1;a.slides=[];a.displaySlides=[];for(var e=0;e<a.wrapper.childNodes.length;e++)if(a.wrapper.childNodes[e].className)for(var f=
a.wrapper.childNodes[e].className.split(" "),g=0;g<f.length;g++)f[g]===b.slideClass&&a.slides.push(a.wrapper.childNodes[e]);for(e=a.slides.length-1;0<=e;e--)a._extendSwiperSlide(a.slides[e]);d&&(d!==a.slides.length||c)&&(s(),p(),a.updateActiveSlide(),b.createPagination&&a.params.pagination&&a.createPagination(),a.callPlugins("numberOfSlidesChanged"))};a.createSlide=function(c,d,e){d=d||a.params.slideClass;e=e||b.slideElement;e=document.createElement(e);e.innerHTML=c||"";e.className=d;return a._extendSwiperSlide(e)};
a.appendSlide=function(b,d,e){if(b)return b.nodeType?a._extendSwiperSlide(b).append():a.createSlide(b,d,e).append()};a.prependSlide=function(b,d,e){if(b)return b.nodeType?a._extendSwiperSlide(b).prepend():a.createSlide(b,d,e).prepend()};a.insertSlideAfter=function(b,d,e,f){return"undefined"===typeof b?!1:d.nodeType?a._extendSwiperSlide(d).insertAfter(b):a.createSlide(d,e,f).insertAfter(b)};a.removeSlide=function(c){if(a.slides[c]){if(b.loop){if(!a.slides[c+a.loopedSlides])return!1;a.slides[c+a.loopedSlides].remove();
a.removeLoopedSlides();a.calcSlides();a.createLoop()}else a.slides[c].remove();return!0}return!1};a.removeLastSlide=function(){return 0<a.slides.length?(b.loop?(a.slides[a.slides.length-1-a.loopedSlides].remove(),a.removeLoopedSlides(),a.calcSlides(),a.createLoop()):a.slides[a.slides.length-1].remove(),!0):!1};a.removeAllSlides=function(){for(var b=a.slides.length-1;0<=b;b--)a.slides[b].remove()};a.getSlide=function(b){return a.slides[b]};a.getLastSlide=function(){return a.slides[a.slides.length-
1]};a.getFirstSlide=function(){return a.slides[0]};a.activeSlide=function(){return a.slides[a.activeIndex]};var L=[],z;for(z in a.plugins)b[z]&&(n=a.plugins[z](a,b[z]))&&L.push(n);a.callPlugins=function(a,b){b||(b={});for(var e=0;e<L.length;e++)if(a in L[e])L[e][a](b)};a.browser.ie10&&!b.onlyExternal&&a.wrapper.classList.add("swiper-wp8-"+(m?"horizontal":"vertical"));b.freeMode&&(a.container.className+=" swiper-free-mode");a.initialized=!1;a.init=function(c,d){var e=a.h.getWidth(a.container),f=a.h.getHeight(a.container);
if(e!==a.width||f!==a.height||c){a.width=e;a.height=f;l=m?e:f;e=a.wrapper;c&&a.calcSlides(d);if("auto"===b.slidesPerView){var g=0,h=0;0<b.slidesOffset&&(e.style.paddingLeft="",e.style.paddingRight="",e.style.paddingTop="",e.style.paddingBottom="");e.style.width="";e.style.height="";0<b.offsetPxBefore&&(m?a.wrapperLeft=b.offsetPxBefore:a.wrapperTop=b.offsetPxBefore);0<b.offsetPxAfter&&(m?a.wrapperRight=b.offsetPxAfter:a.wrapperBottom=b.offsetPxAfter);b.centeredSlides&&(m?(a.wrapperLeft=(l-this.slides[0].getWidth(!0))/
2,a.wrapperRight=(l-a.slides[a.slides.length-1].getWidth(!0))/2):(a.wrapperTop=(l-a.slides[0].getHeight(!0))/2,a.wrapperBottom=(l-a.slides[a.slides.length-1].getHeight(!0))/2));m?(0<=a.wrapperLeft&&(e.style.paddingLeft=a.wrapperLeft+"px"),0<=a.wrapperRight&&(e.style.paddingRight=a.wrapperRight+"px")):(0<=a.wrapperTop&&(e.style.paddingTop=a.wrapperTop+"px"),0<=a.wrapperBottom&&(e.style.paddingBottom=a.wrapperBottom+"px"));var k=0,n=0;a.snapGrid=[];a.slidesGrid=[];for(var u=0,q=0;q<a.slides.length;q++){var f=
a.slides[q].getWidth(!0),p=a.slides[q].getHeight(!0);b.calculateHeight&&(u=Math.max(u,p));var s=m?f:p;if(b.centeredSlides){var t=q===a.slides.length-1?0:a.slides[q+1].getWidth(!0),v=q===a.slides.length-1?0:a.slides[q+1].getHeight(!0),t=m?t:v;if(s>l){for(v=0;v<=Math.floor(s/(l+a.wrapperLeft));v++)0===v?a.snapGrid.push(k+a.wrapperLeft):a.snapGrid.push(k+a.wrapperLeft+l*v);a.slidesGrid.push(k+a.wrapperLeft)}else a.snapGrid.push(n),a.slidesGrid.push(n);n+=s/2+t/2}else{if(s>l)for(v=0;v<=Math.floor(s/l);v++)a.snapGrid.push(k+
l*v);else a.snapGrid.push(k);a.slidesGrid.push(k)}k+=s;g+=f;h+=p}b.calculateHeight&&(a.height=u);m?(A=g+a.wrapperRight+a.wrapperLeft,e.style.width=g+"px",e.style.height=a.height+"px"):(A=h+a.wrapperTop+a.wrapperBottom,e.style.width=a.width+"px",e.style.height=h+"px")}else if(b.scrollContainer)e.style.width="",e.style.height="",u=a.slides[0].getWidth(!0),g=a.slides[0].getHeight(!0),A=m?u:g,e.style.width=u+"px",e.style.height=g+"px",r=m?u:g;else{if(b.calculateHeight){g=u=0;m||(a.container.style.height=
"");e.style.height="";for(q=0;q<a.slides.length;q++)a.slides[q].style.height="",u=Math.max(a.slides[q].getHeight(!0),u),m||(g+=a.slides[q].getHeight(!0));p=u;a.height=p;m?g=p:(l=p,a.container.style.height=l+"px")}else p=m?a.height:a.height/b.slidesPerView,g=m?a.height:a.slides.length*p;f=m?a.width/b.slidesPerView:a.width;u=m?a.slides.length*f:a.width;r=m?f:p;0<b.offsetSlidesBefore&&(m?a.wrapperLeft=r*b.offsetSlidesBefore:a.wrapperTop=r*b.offsetSlidesBefore);0<b.offsetSlidesAfter&&(m?a.wrapperRight=
r*b.offsetSlidesAfter:a.wrapperBottom=r*b.offsetSlidesAfter);0<b.offsetPxBefore&&(m?a.wrapperLeft=b.offsetPxBefore:a.wrapperTop=b.offsetPxBefore);0<b.offsetPxAfter&&(m?a.wrapperRight=b.offsetPxAfter:a.wrapperBottom=b.offsetPxAfter);b.centeredSlides&&(m?(a.wrapperLeft=(l-r)/2,a.wrapperRight=(l-r)/2):(a.wrapperTop=(l-r)/2,a.wrapperBottom=(l-r)/2));m?(0<a.wrapperLeft&&(e.style.paddingLeft=a.wrapperLeft+"px"),0<a.wrapperRight&&(e.style.paddingRight=a.wrapperRight+"px")):(0<a.wrapperTop&&(e.style.paddingTop=
a.wrapperTop+"px"),0<a.wrapperBottom&&(e.style.paddingBottom=a.wrapperBottom+"px"));A=m?u+a.wrapperRight+a.wrapperLeft:g+a.wrapperTop+a.wrapperBottom;e.style.width=u+"px";e.style.height=g+"px";k=0;a.snapGrid=[];a.slidesGrid=[];for(q=0;q<a.slides.length;q++)a.snapGrid.push(k),a.slidesGrid.push(k),k+=r,a.slides[q].style.width=f+"px",a.slides[q].style.height=p+"px"}if(a.initialized){if(a.callPlugins("onInit"),b.onInit)b.onInit(a)}else if(a.callPlugins("onFirstInit"),b.onFirstInit)b.onFirstInit(a);a.initialized=
!0}};a.reInit=function(b){a.init(!0,b)};a.resizeFix=function(c){a.callPlugins("beforeResizeFix");a.init(b.resizeReInit||c);b.freeMode?a.getWrapperTranslate()<-g()&&(a.setWrapperTransition(0),a.setWrapperTranslate(-g())):a.swipeTo(b.loop?a.activeLoopIndex:a.activeIndex,0,!1);a.callPlugins("afterResizeFix")};a.destroy=function(c){c=a.h.removeEventListener;a.browser.ie10?(c(a.wrapper,a.touchEvents.touchStart,B),c(document,a.touchEvents.touchMove,C),c(document,a.touchEvents.touchEnd,D)):(a.support.touch&&
(c(a.wrapper,"touchstart",B),c(a.wrapper,"touchmove",C),c(a.wrapper,"touchend",D)),b.simulateTouch&&(c(a.wrapper,"mousedown",B),c(document,"mousemove",C),c(document,"mouseup",D)));b.autoResize&&c(window,"resize",a.resizeFix);s();b.paginationClickable&&U();b.mousewheelControl&&a._wheelEvent&&c(a.container,a._wheelEvent,N);b.keyboardControl&&c(document,"keydown",O);b.autoplay&&a.stopAutoplay();a.callPlugins("onDestroy");a=null};b.grabCursor&&(z=a.container.style,z.cursor="move",z.cursor="grab",z.cursor=
"-moz-grab",z.cursor="-webkit-grab");a.allowSlideClick=!0;a.allowLinks=!0;var x=!1,M,H=!0,F,I;a.swipeNext=function(c){!c&&b.loop&&a.fixLoop();a.callPlugins("onSwipeNext");var d=c=a.getWrapperTranslate();if("auto"==b.slidesPerView)for(var e=0;e<a.snapGrid.length;e++){if(-c>=a.snapGrid[e]&&-c<a.snapGrid[e+1]){d=-a.snapGrid[e+1];break}}else d=r*b.slidesPerGroup,d=-(Math.floor(Math.abs(c)/Math.floor(d))*d+d);d<-g()&&(d=-g());if(d==c)return!1;J(d,"next");return!0};a.swipePrev=function(c){!c&&b.loop&&a.fixLoop();
!c&&b.autoplay&&a.stopAutoplay();a.callPlugins("onSwipePrev");c=Math.ceil(a.getWrapperTranslate());var d;if("auto"==b.slidesPerView){d=0;for(var e=1;e<a.snapGrid.length;e++){if(-c==a.snapGrid[e]){d=-a.snapGrid[e-1];break}if(-c>a.snapGrid[e]&&-c<a.snapGrid[e+1]){d=-a.snapGrid[e];break}}}else d=r*b.slidesPerGroup,d*=-(Math.ceil(-c/d)-1);0<d&&(d=0);if(d==c)return!1;J(d,"prev");return!0};a.swipeReset=function(){a.callPlugins("onSwipeReset");var c=a.getWrapperTranslate(),d=r*b.slidesPerGroup;g();if("auto"==
b.slidesPerView){for(var e=d=0;e<a.snapGrid.length;e++){if(-c===a.snapGrid[e])return;if(-c>=a.snapGrid[e]&&-c<a.snapGrid[e+1]){d=0<a.positions.diff?-a.snapGrid[e+1]:-a.snapGrid[e];break}}-c>=a.snapGrid[a.snapGrid.length-1]&&(d=-a.snapGrid[a.snapGrid.length-1]);c<=-g()&&(d=-g())}else d=0>c?Math.round(c/d)*d:0;b.scrollContainer&&(d=0>c?c:0);d<-g()&&(d=-g());b.scrollContainer&&l>r&&(d=0);if(d==c)return!1;J(d,"reset");return!0};a.swipeTo=function(c,d,e){c=parseInt(c,10);a.callPlugins("onSwipeTo",{index:c,
speed:d});b.loop&&(c+=a.loopedSlides);var f=a.getWrapperTranslate();if(!(c>a.slides.length-1||0>c)){var h;h="auto"==b.slidesPerView?-a.slidesGrid[c]:-c*r;h<-g()&&(h=-g());if(h==f)return!1;J(h,"to",{index:c,speed:d,runCallbacks:!1===e?!1:!0});return!0}};a._queueStartCallbacks=!1;a._queueEndCallbacks=!1;a.updateActiveSlide=function(c){if(a.initialized&&0!=a.slides.length){a.previousIndex=a.activeIndex;"undefined"==typeof c&&(c=a.getWrapperTranslate());0<c&&(c=0);if("auto"==b.slidesPerView){if(a.activeIndex=
a.slidesGrid.indexOf(-c),0>a.activeIndex){for(var d=0;d<a.slidesGrid.length-1&&!(-c>a.slidesGrid[d]&&-c<a.slidesGrid[d+1]);d++);var e=Math.abs(a.slidesGrid[d]+c),f=Math.abs(a.slidesGrid[d+1]+c);a.activeIndex=e<=f?d:d+1}}else a.activeIndex=Math[b.visibilityFullFit?"ceil":"round"](-c/r);a.activeIndex==a.slides.length&&(a.activeIndex=a.slides.length-1);0>a.activeIndex&&(a.activeIndex=0);if(a.slides[a.activeIndex]){a.calcVisibleSlides(c);e=RegExp("\\s*"+b.slideActiveClass);f=RegExp("\\s*"+b.slideVisibleClass);
for(d=0;d<a.slides.length;d++)a.slides[d].className=a.slides[d].className.replace(e,"").replace(f,""),0<=a.visibleSlides.indexOf(a.slides[d])&&(a.slides[d].className+=" "+b.slideVisibleClass);a.slides[a.activeIndex].className+=" "+b.slideActiveClass;b.loop?(d=a.loopedSlides,a.activeLoopIndex=a.activeIndex-d,a.activeLoopIndex>=a.slides.length-2*d&&(a.activeLoopIndex=a.slides.length-2*d-a.activeLoopIndex),0>a.activeLoopIndex&&(a.activeLoopIndex=a.slides.length-2*d+a.activeLoopIndex)):a.activeLoopIndex=
a.activeIndex;b.pagination&&a.updatePagination(c)}}};a.createPagination=function(c){b.paginationClickable&&a.paginationButtons&&U();var d="",e=a.slides.length;b.loop&&(e-=2*a.loopedSlides);for(var f=0;f<e;f++)d+="<"+b.paginationElement+' class="'+b.paginationElementClass+'"></'+b.paginationElement+">";a.paginationContainer=b.pagination.nodeType?b.pagination:h(b.pagination)[0];a.paginationContainer.innerHTML=d;a.paginationButtons=h("."+b.paginationElementClass,a.paginationContainer);c||a.updatePagination();
a.callPlugins("onCreatePagination");if(b.paginationClickable)for(c=a.paginationButtons,d=0;d<c.length;d++)a.h.addEventListener(c[d],"click",V)};a.updatePagination=function(c){if(b.pagination&&!(1>a.slides.length)&&h("."+b.paginationActiveClass,a.paginationContainer)){var d=a.paginationButtons;if(0!=d.length){for(var e=0;e<d.length;e++)d[e].className=b.paginationElementClass;var f=b.loop?a.loopedSlides:0;if(b.paginationAsRange){a.visibleSlides||a.calcVisibleSlides(c);c=[];for(e=0;e<a.visibleSlides.length;e++){var g=
a.slides.indexOf(a.visibleSlides[e])-f;b.loop&&0>g&&(g=a.slides.length-2*a.loopedSlides+g);b.loop&&g>=a.slides.length-2*a.loopedSlides&&(g=a.slides.length-2*a.loopedSlides-g,g=Math.abs(g));c.push(g)}for(e=0;e<c.length;e++)d[c[e]]&&(d[c[e]].className+=" "+b.paginationVisibleClass);b.loop?d[a.activeLoopIndex].className+=" "+b.paginationActiveClass:d[a.activeIndex].className+=" "+b.paginationActiveClass}else b.loop?d[a.activeLoopIndex].className+=" "+b.paginationActiveClass+" "+b.paginationVisibleClass:
d[a.activeIndex].className+=" "+b.paginationActiveClass+" "+b.paginationVisibleClass}}};a.calcVisibleSlides=function(c){var d=[],e=0,f=0,g=0;m&&0<a.wrapperLeft&&(c+=a.wrapperLeft);!m&&0<a.wrapperTop&&(c+=a.wrapperTop);for(var h=0;h<a.slides.length;h++){var e=e+f,f="auto"==b.slidesPerView?m?a.h.getWidth(a.slides[h],!0):a.h.getHeight(a.slides[h],!0):r,g=e+f,k=!1;b.visibilityFullFit?(e>=-c&&g<=-c+l&&(k=!0),e<=-c&&g>=-c+l&&(k=!0)):(g>-c&&g<=-c+l&&(k=!0),e>=-c&&e<-c+l&&(k=!0),e<-c&&g>-c+l&&(k=!0));k&&
d.push(a.slides[h])}0==d.length&&(d=[a.slides[a.activeIndex]]);a.visibleSlides=d};a.autoPlayIntervalId=void 0;a.startAutoplay=function(){if("undefined"!==typeof a.autoPlayIntervalId)return!1;b.autoplay&&!b.loop&&(a.autoPlayIntervalId=setInterval(function(){a.swipeNext(!0)||a.swipeTo(0)},b.autoplay));b.autoplay&&b.loop&&(a.autoPlayIntervalId=setInterval(function(){a.swipeNext()},b.autoplay));a.callPlugins("onAutoplayStart")};a.stopAutoplay=function(){a.autoPlayIntervalId&&clearInterval(a.autoPlayIntervalId);
a.autoPlayIntervalId=void 0;a.callPlugins("onAutoplayStop")};a.loopCreated=!1;a.removeLoopedSlides=function(){if(a.loopCreated)for(var b=0;b<a.slides.length;b++)!0===a.slides[b].getData("looped")&&a.wrapper.removeChild(a.slides[b])};a.createLoop=function(){if(0!=a.slides.length){a.loopedSlides=b.slidesPerView+b.loopAdditionalSlides;a.loopedSlides>a.slides.length&&(a.loopedSlides=a.slides.length);var c="",d="",e;for(e=0;e<a.loopedSlides;e++)c+=a.slides[e].outerHTML;for(e=a.slides.length-a.loopedSlides;e<
a.slides.length;e++)d+=a.slides[e].outerHTML;K.innerHTML=d+K.innerHTML+c;a.loopCreated=!0;a.calcSlides();for(e=0;e<a.slides.length;e++)(e<a.loopedSlides||e>=a.slides.length-a.loopedSlides)&&a.slides[e].setData("looped",!0);a.callPlugins("onCreateLoop")}};a.fixLoop=function(){var c;a.activeIndex<a.loopedSlides?(c=a.slides.length-3*a.loopedSlides+a.activeIndex,a.swipeTo(c,0,!1)):a.activeIndex>a.slides.length-2*b.slidesPerView&&(c=-a.slides.length+a.activeIndex+a.loopedSlides,a.swipeTo(c,0,!1))};a.loadSlides=
function(){var c="";a.activeLoaderIndex=0;for(var d=b.loader.slides,e=b.loader.loadAllSlides?d.length:b.slidesPerView*(1+b.loader.surroundGroups),f=0;f<e;f++)c="outer"==b.loader.slidesHTMLType?c+d[f]:c+("<"+b.slideElement+' class="'+b.slideClass+'" data-swiperindex="'+f+'">'+d[f]+"</"+b.slideElement+">");a.wrapper.innerHTML=c;a.calcSlides(!0);b.loader.loadAllSlides||a.wrapperTransitionEnd(a.reloadSlides,!0)};a.reloadSlides=function(){var c=b.loader.slides,d=parseInt(a.activeSlide().data("swiperindex"),
10);if(!(0>d||d>c.length-1)){a.activeLoaderIndex=d;var e=Math.max(0,d-b.slidesPerView*b.loader.surroundGroups),f=Math.min(d+b.slidesPerView*(1+b.loader.surroundGroups)-1,c.length-1);0<d&&(a.setWrapperTranslate(-r*(d-e)),a.setWrapperTransition(0));if("reload"===b.loader.logic){for(var g=a.wrapper.innerHTML="",d=e;d<=f;d++)g+="outer"==b.loader.slidesHTMLType?c[d]:"<"+b.slideElement+' class="'+b.slideClass+'" data-swiperindex="'+d+'">'+c[d]+"</"+b.slideElement+">";a.wrapper.innerHTML=g}else{for(var g=
1E3,h=0,d=0;d<a.slides.length;d++){var k=a.slides[d].data("swiperindex");k<e||k>f?a.wrapper.removeChild(a.slides[d]):(g=Math.min(k,g),h=Math.max(k,h))}for(d=e;d<=f;d++)d<g&&(e=document.createElement(b.slideElement),e.className=b.slideClass,e.setAttribute("data-swiperindex",d),e.innerHTML=c[d],a.wrapper.insertBefore(e,a.wrapper.firstChild)),d>h&&(e=document.createElement(b.slideElement),e.className=b.slideClass,e.setAttribute("data-swiperindex",d),e.innerHTML=c[d],a.wrapper.appendChild(e))}a.reInit(!0)}};
a.calcSlides();0<b.loader.slides.length&&0==a.slides.length&&a.loadSlides();b.loop&&a.createLoop();a.init();k();b.pagination&&b.createPagination&&a.createPagination(!0);b.loop||0<b.initialSlide?a.swipeTo(b.initialSlide,0,!1):a.updateActiveSlide(0);b.autoplay&&a.startAutoplay()}};
Swiper.prototype={plugins:{},wrapperTransitionEnd:function(f,b){function h(){f(g);g.params.queueEndCallbacks&&(g._queueEndCallbacks=!1);if(!b)for(s=0;s<p.length;s++)g.h.removeEventListener(k,p[s],h)}var g=this,k=g.wrapper,p=["webkitTransitionEnd","transitionend","oTransitionEnd","MSTransitionEnd","msTransitionEnd"],s;if(f)for(s=0;s<p.length;s++)g.h.addEventListener(k,p[s],h)},getWrapperTranslate:function(f){var b=this.wrapper,h,g,k;"undefined"==typeof f&&(f="horizontal"==this.params.mode?"x":"y");
k=window.getComputedStyle(b,null);window.WebKitCSSMatrix?k=new WebKitCSSMatrix(k.webkitTransform):(k=k.MozTransform||k.OTransform||k.MsTransform||k.msTransform||k.transform||k.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,"),h=k.toString().split(","));this.support.transforms&&this.params.useCSS3Transforms?("x"==f&&(g=window.WebKitCSSMatrix?k.m41:16==h.length?parseFloat(h[12]):parseFloat(h[4])),"y"==f&&(g=window.WebKitCSSMatrix?k.m42:16==h.length?parseFloat(h[13]):parseFloat(h[5]))):
("x"==f&&(g=parseFloat(b.style.left,10)||0),"y"==f&&(g=parseFloat(b.style.top,10)||0));return g||0},setWrapperTranslate:function(f,b,h){var g=this.wrapper.style,k={x:0,y:0,z:0},p;3==arguments.length?(k.x=f,k.y=b,k.z=h):("undefined"==typeof b&&(b="horizontal"==this.params.mode?"x":"y"),k[b]=f);this.support.transforms&&this.params.useCSS3Transforms?(p=this.support.transforms3d?"translate3d("+k.x+"px, "+k.y+"px, "+k.z+"px)":"translate("+k.x+"px, "+k.y+"px)",g.webkitTransform=g.MsTransform=g.msTransform=
g.MozTransform=g.OTransform=g.transform=p):(g.left=k.x+"px",g.top=k.y+"px");this.callPlugins("onSetWrapperTransform",k)},setWrapperTransition:function(f){var b=this.wrapper.style;b.webkitTransitionDuration=b.MsTransitionDuration=b.msTransitionDuration=b.MozTransitionDuration=b.OTransitionDuration=b.transitionDuration=f/1E3+"s";this.callPlugins("onSetWrapperTransition",{duration:f})},h:{getWidth:function(f,b){var h=window.getComputedStyle(f,null).getPropertyValue("width"),g=parseFloat(h);if(isNaN(g)||
0<h.indexOf("%"))g=f.offsetWidth-parseFloat(window.getComputedStyle(f,null).getPropertyValue("padding-left"))-parseFloat(window.getComputedStyle(f,null).getPropertyValue("padding-right"));b&&(g+=parseFloat(window.getComputedStyle(f,null).getPropertyValue("padding-left"))+parseFloat(window.getComputedStyle(f,null).getPropertyValue("padding-right")));return g},getHeight:function(f,b){if(b)return f.offsetHeight;var h=window.getComputedStyle(f,null).getPropertyValue("height"),g=parseFloat(h);if(isNaN(g)||
0<h.indexOf("%"))g=f.offsetHeight-parseFloat(window.getComputedStyle(f,null).getPropertyValue("padding-top"))-parseFloat(window.getComputedStyle(f,null).getPropertyValue("padding-bottom"));b&&(g+=parseFloat(window.getComputedStyle(f,null).getPropertyValue("padding-top"))+parseFloat(window.getComputedStyle(f,null).getPropertyValue("padding-bottom")));return g},getOffset:function(f){var b=f.getBoundingClientRect(),h=document.body,g=f.clientTop||h.clientTop||0,h=f.clientLeft||h.clientLeft||0,k=window.pageYOffset||
f.scrollTop;f=window.pageXOffset||f.scrollLeft;document.documentElement&&!window.pageYOffset&&(k=document.documentElement.scrollTop,f=document.documentElement.scrollLeft);return{top:b.top+k-g,left:b.left+f-h}},windowWidth:function(){if(window.innerWidth)return window.innerWidth;if(document.documentElement&&document.documentElement.clientWidth)return document.documentElement.clientWidth},windowHeight:function(){if(window.innerHeight)return window.innerHeight;if(document.documentElement&&document.documentElement.clientHeight)return document.documentElement.clientHeight},
windowScroll:function(){if("undefined"!=typeof pageYOffset)return{left:window.pageXOffset,top:window.pageYOffset};if(document.documentElement)return{left:document.documentElement.scrollLeft,top:document.documentElement.scrollTop}},addEventListener:function(f,b,h,g){"undefined"==typeof g&&(g=!1);f.addEventListener?f.addEventListener(b,h,g):f.attachEvent&&f.attachEvent("on"+b,h)},removeEventListener:function(f,b,h,g){"undefined"==typeof g&&(g=!1);f.removeEventListener?f.removeEventListener(b,h,g):f.detachEvent&&
f.detachEvent("on"+b,h)}},setTransform:function(f,b){var h=f.style;h.webkitTransform=h.MsTransform=h.msTransform=h.MozTransform=h.OTransform=h.transform=b},setTranslate:function(f,b){var h=f.style,g=b.x||0,k=b.y||0,p=b.z||0;h.webkitTransform=h.MsTransform=h.msTransform=h.MozTransform=h.OTransform=h.transform=this.support.transforms3d?"translate3d("+g+"px,"+k+"px,"+p+"px)":"translate("+g+"px,"+k+"px)";this.support.transforms||(h.left=g+"px",h.top=k+"px")},setTransition:function(f,b){var h=f.style;
h.webkitTransitionDuration=h.MsTransitionDuration=h.msTransitionDuration=h.MozTransitionDuration=h.OTransitionDuration=h.transitionDuration=b+"ms"},support:{touch:window.Modernizr&&!0===Modernizr.touch||function(){return!!("ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch)}(),transforms3d:window.Modernizr&&!0===Modernizr.csstransforms3d||function(){var f=document.createElement("div").style;return"webkitPerspective"in f||"MozPerspective"in f||"OPerspective"in f||"MsPerspective"in
f||"perspective"in f}(),transforms:window.Modernizr&&!0===Modernizr.csstransforms||function(){var f=document.createElement("div").style;return"transform"in f||"WebkitTransform"in f||"MozTransform"in f||"msTransform"in f||"MsTransform"in f||"OTransform"in f}(),transitions:window.Modernizr&&!0===Modernizr.csstransitions||function(){var f=document.createElement("div").style;return"transition"in f||"WebkitTransition"in f||"MozTransition"in f||"msTransition"in f||"MsTransition"in f||"OTransition"in f}()},
browser:{ie8:function(){var f=-1;"Microsoft Internet Explorer"==navigator.appName&&null!=/MSIE ([0-9]{1,}[.0-9]{0,})/.exec(navigator.userAgent)&&(f=parseFloat(RegExp.$1));return-1!=f&&9>f}(),ie10:window.navigator.msPointerEnabled}};(window.jQuery||window.Zepto)&&function(f){f.fn.swiper=function(b){b=new Swiper(f(this)[0],b);f(this).data("swiper",b);return b}}(window.jQuery||window.Zepto);"undefined"!==typeof module&&(module.exports=Swiper);

/*
 * Swiper 3D Flow 2.0
 * Plugin for Swiper 2.0+
 * http://www.idangero.us/sliders/swiper/
 *
 * Copyright 2012-2013, Vladimir Kharlampidi
 * The iDangero.us
 * http://www.idangero.us/
 *
 * Licensed under GPL & MIT
 *
 * Released on: June 9, 2012
*/

Swiper.prototype.plugins.tdFlow = function(swiper, params) {
	if (!swiper.support.transforms3d) return;
	var slides, wrapperSize, slideSize, initialized;
	var isH = swiper.params.mode == 'horizontal';
	if(!params) return;
	/*=========================
	  Default Parameters
	  ===========================*/
	var defaults = {
		rotate : 50,
		stretch :0,
		depth: 100,
		modifier : 1,
		shadows : true 
	}
	params = params || {};	
	for (var prop in defaults) {
		if (! (prop in params)) {
			params[prop] = defaults[prop]	
		}
	}
	
	
	function init() {
		initialized = true;
		slides = swiper.slides
		for (var i=0; i<slides.length; i++) {
			swiper.setTransition(slides[i], 0)
		}
		
		if (isH) {
			wrapperSize = swiper.h.getWidth(swiper.wrapper);
			slideSize = wrapperSize/slides.length;
			
			for (var i=0; i<slides.length; i++) {
				slides[i].swiperSlideOffset = slides[i].offsetLeft
			}
		}
		else {
			wrapperSize = swiper.h.getHeight(swiper.wrapper);
			slideSize = wrapperSize/slides.length;
			for (var i=0; i<slides.length; i++) {
				slides[i].swiperSlideOffset = slides[i].offsetTop
			}
		}
	}
	
	function threeDSlides(transform) {
		if (!initialized) return;
		var transform = transform || {x:0, y:0, z:0};
		var center = isH ? -transform.x+swiper.width/2 : -transform.y+swiper.height/2 ;
		
		var rotate = isH ? params.rotate : -params.rotate;
		var translate = params.depth;

		//Each slide offset from center
		for (var i=0; i<swiper.slides.length; i++) {
			
			var slideOffset = swiper.slides[i].swiperSlideOffset
			var offsetMultiplier = (center - slideOffset - slideSize/2)/slideSize*params.modifier;
			
			var rotateY = isH ? rotate*offsetMultiplier : 0;
			var rotateX = isH ? 0 : rotate*offsetMultiplier;
			// var rotateZ = 0
			var translateZ = -translate*Math.abs(offsetMultiplier);
			
			var translateY = isH ? 0 : params.stretch*(offsetMultiplier)
			var translateX = isH ? params.stretch*(offsetMultiplier) : 0;
			
			//Fix for ultra small values
			if (Math.abs(translateX)<0.001) translateX = 0;
			if (Math.abs(translateY)<0.001) translateY = 0;
			if (Math.abs(translateZ)<0.001) translateZ = 0;
			if (Math.abs(rotateY)<0.001) rotateY = 0;
			if (Math.abs(rotateX)<0.001) rotateX = 0;
			
			var slideTransform = 'translate3d('+translateX+'px,'+translateY+'px,'+translateZ+'px)  rotateX('+rotateX+'deg) rotateY('+rotateY+'deg)';
			
			
			swiper.setTransform(swiper.slides[i], slideTransform);
			swiper.slides[i].style.zIndex =-Math.abs(Math.round(offsetMultiplier))+1
			if (params.shadows) {
				//Set shadows
				var shadowBefore = isH ? swiper.slides[i].querySelector('.swiper-slide-shadow-left') : swiper.slides[i].querySelector('.swiper-slide-shadow-top');
				var shadowAfter = isH ? swiper.slides[i].querySelector('.swiper-slide-shadow-right') : swiper.slides[i].querySelector('.swiper-slide-shadow-bottom');
				shadowAfter.style.opacity = (-offsetMultiplier)>0 ? (-offsetMultiplier) : 0;
				shadowBefore.style.opacity = offsetMultiplier>0 ? offsetMultiplier : 0;
			}
		}
		
		//Set correct perspective for IE10		
		if (swiper.ie10) {
			var ws = swiper.wrapper.style;
			ws.perspectiveOrigin = center+'px 50%'
		}
		
	}
	
	//Plugin Hooks
	var hooks = {
		onFirstInit : function(args){
			slides = swiper.slides;
			if (params.shadows) {
				//Add Shadows
				var shadowEl1 = document.createElement('div')
				var shadowEl2 = document.createElement('div')
				shadowEl1.className = isH ? 'swiper-slide-shadow-left' : 'swiper-slide-shadow-top'
				shadowEl2.className = isH ? 'swiper-slide-shadow-right' : 'swiper-slide-shadow-bottom'
				for (var i=0; i<slides.length; i++) {
					slides[i].appendChild(shadowEl1.cloneNode())
					slides[i].appendChild(shadowEl2.cloneNode())
				}
			}
			//Update Dimensions
			init();
			//Set in 3D
			threeDSlides({x:swiper.getWrapperTranslate('x'), y:swiper.getWrapperTranslate('y'), z:swiper.getWrapperTranslate('z')});
		},
		onInit : function(args) {
			init();
			//Set in 3D
			threeDSlides({x:swiper.getWrapperTranslate('x'), y:swiper.getWrapperTranslate('y'), z:swiper.getWrapperTranslate('z')});
		},
		onSetWrapperTransform: function(transform){
			threeDSlides(transform);
		},
		onSetWrapperTransition: function(args){
			
			for (var i=0; i<swiper.slides.length; i++) {
				swiper.setTransition(swiper.slides[i], args.duration)
				if (isH && params.shadows) {
					swiper.setTransition(swiper.slides[i].querySelector('.swiper-slide-shadow-left'), args.duration)
					swiper.setTransition(swiper.slides[i].querySelector('.swiper-slide-shadow-right'), args.duration)
				}
				else if(params.shadows) {
					swiper.setTransition(swiper.slides[i].querySelector('.swiper-slide-shadow-top'), args.duration)
					swiper.setTransition(swiper.slides[i].querySelector('.swiper-slide-shadow-bottom'), args.duration)
				}
			}
	
			
		}
	}
	return hooks
}