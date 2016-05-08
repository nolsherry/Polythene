"use strict";function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}Object.defineProperty(exports,"__esModule",{value:!0});var _easing=require("polythene/common/easing"),_easing2=_interopRequireDefault(_easing),scrollTo=function(opts){var element=opts.element,which="horizontal"===opts.direction?"scrollLeft":"scrollTop",to=opts.to,duration=1e3*opts.duration,start=element[which],change=to-start,animationStart=(new Date).getTime(),animating=!0;return new Promise(function(resolve){var animateScroll=function animateScroll(){if(animating){requestAnimFrame(animateScroll);var now=(new Date).getTime(),percentage=(now-animationStart)/duration,val=start+change*_easing2["default"].easeInOutCubic(percentage);element[which]=val,percentage>=1&&(element[which]=to,animating=!1,resolve())}};requestAnimFrame(animateScroll)})},requestAnimFrame=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(callback){window.setTimeout(callback,1e3/60)}}();exports["default"]=scrollTo,module.exports=exports["default"];
//# sourceMappingURL=scroll-to.js.map