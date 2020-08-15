parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"FrvH":[function(require,module,exports) {
"use strict";function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var i=0;i<e.length;i++){var s=e[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}function i(t,i,s){return i&&e(t.prototype,i),s&&e(t,s),t}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var s=function(){function e(i,s,r,n){t(this,e),this.element=i,this.elementClasses=s,this.x=r,this.y=n,this.resolution=16,this.step=8,this.playerSize=this.getPlayerSize()}return i(e,[{key:"createElement",value:function(){this.sprite=document.createElement("div"),this.sprite.setAttribute("class",this.elementClasses),this.sprite.style.width=this.playerSize,this.sprite.style.height=this.playerSize,this.sprite.style.left=this.posX(),this.sprite.style.top=this.posY(),this.element.appendChild(this.sprite)}},{key:"getPlayerSize",value:function(){var t=100/this.resolution;return"".concat(t.toString(),"%")}},{key:"posX",value:function(){var t=100*(this.x-1)/this.resolution;return"".concat(t.toString(),"%")}},{key:"posY",value:function(){var t=100*(this.y-1)/this.resolution;return"".concat(t.toString(),"%")}}]),e}();exports.default=s,s.resolution=16;
},{}],"ctoH":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t=e(require("./settings.class"));function e(t){return t&&t.__esModule?t:{default:t}}function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function i(t,e,o){return e&&r(t.prototype,e),o&&r(t,o),t}function f(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&s(t,e)}function s(t,e){return(s=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function u(t){return function(){var e,o=h(t);if(a()){var n=h(this).constructor;e=Reflect.construct(o,arguments,n)}else e=o.apply(this,arguments);return c(this,e)}}function c(t,e){return!e||"object"!==o(e)&&"function"!=typeof e?l(t):e}function l(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function a(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}function h(t){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var p=function(e){f(r,t.default);var o=u(r);function r(t,e,i,f){var s;return n(this,r),(s=o.call(this,i,f,t,e)).x=t,s.y=e,s.element=i,s.elementClasses=f,s.offsetX=0,s.offsetY=0,s.createElement(),s}return i(r,[{key:"left",value:function(){this.offsetX=this.offsetX-this.step,this.execMove()}},{key:"right",value:function(){this.offsetX=this.offsetX+this.step,this.execMove()}},{key:"up",value:function(){this.offsetY=this.offsetY-this.step,this.execMove()}},{key:"down",value:function(){this.offsetY=this.offsetY+this.step,this.execMove()}},{key:"execMove",value:function(){this.sprite.style.transform="translate3d(".concat(this.offsetX,"%, ").concat(this.offsetY,"%, 0)")}},{key:"coordinates",value:function(){return[100*this.x/this.resolution+1*this.offsetX/this.resolution,100*this.y/this.resolution+1*this.offsetY/this.resolution]}}]),r}();exports.default=p;
},{"./settings.class":"FrvH"}],"p0O2":[function(require,module,exports) {
"use strict";var e;Object.defineProperty(exports,"__esModule",{value:!0}),exports.Direction=void 0,exports.Direction=e,function(e){e[e.Up=0]="Up",e[e.Down=1]="Down",e[e.Left=2]="Left",e[e.Right=3]="Right"}(e||(exports.Direction=e={}));
},{}],"M7ux":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t=r(require("./element.class")),e=require("../scripts/types");function r(t){return t&&t.__esModule?t:{default:t}}function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){for(var r=0;r<e.length;r++){var i=e[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function c(t,e,r){return e&&o(t.prototype,e),r&&o(t,r),t}function s(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&a(t,e)}function a(t,e){return(a=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function u(t){return function(){var e,r=h(t);if(p()){var i=h(this).constructor;e=Reflect.construct(r,arguments,i)}else e=r.apply(this,arguments);return l(this,e)}}function l(t,e){return!e||"object"!==i(e)&&"function"!=typeof e?f(t):e}function f(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function p(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}function h(t){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var y=function(r){s(o,t.default);var i=u(o);function o(t,e,r,c,s){var a;return n(this,o),(a=i.call(this,t,e,r,c)).x=t,a.y=e,a.direction=s,a.prepareElement(),a}return c(o,[{key:"prepareElement",value:function(){this.artDiv=document.createElement("div"),this.artDiv.setAttribute("class","player right"),this.sprite.appendChild(this.artDiv),console.log(this.artDiv,this.sprite)}},{key:"newLevel",value:function(t,r,i){this.x=t,this.y=r,this.direction=e.Direction.Up}},{key:"move",value:function(){switch(this.direction){case e.Direction.Right:this.right();break;case e.Direction.Left:this.left();break;case e.Direction.Up:this.up();break;case e.Direction.Down:this.down()}}},{key:"switchDirection",value:function(t){switch(this.direction){case e.Direction.Right:this.artDiv.classList.toggle("right");break;case e.Direction.Left:this.artDiv.classList.toggle("left");break;case e.Direction.Up:this.artDiv.classList.toggle("up");break;case e.Direction.Down:this.artDiv.classList.toggle("down")}switch(t){case"ArrowRight":this.artDiv.classList.toggle("right"),this.direction=e.Direction.Right;break;case"ArrowLeft":this.artDiv.classList.toggle("left"),this.direction=e.Direction.Left;break;case"ArrowUp":this.artDiv.classList.toggle("up"),this.direction=e.Direction.Up;break;case"ArrowDown":this.artDiv.classList.toggle("down"),this.direction=e.Direction.Down}}}]),o}();exports.default=y;
},{"./element.class":"ctoH","../scripts/types":"p0O2"}],"vfjN":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t=e(require("./element.class"));function e(t){return t&&t.__esModule?t:{default:t}}function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&u(t,e)}function u(t,e){return(u=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function c(t){return function(){var e,n=s(t);if(l()){var r=s(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return f(this,e)}}function f(t,e){return!e||"object"!==n(e)&&"function"!=typeof e?i(t):e}function i(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function l(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}function s(t){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var a=function(e){o(u,t.default);var n=c(u);function u(t,e,o,c,f){var i;return r(this,u),(i=n.call(this,t,e,o,c)).direction=f,i}return u}();exports.default=a;
},{"./element.class":"ctoH"}],"K0Mm":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t=e(require("./element.class"));function e(t){return t&&t.__esModule?t:{default:t}}function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function u(t,e,r){return e&&o(t.prototype,e),r&&o(t,r),t}function c(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&i(t,e)}function i(t,e){return(i=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function f(t){return function(){var e,r=p(t);if(s()){var n=p(this).constructor;e=Reflect.construct(r,arguments,n)}else e=r.apply(this,arguments);return l(this,e)}}function l(t,e){return!e||"object"!==r(e)&&"function"!=typeof e?a(t):e}function a(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function s(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}function p(t){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var y=function(e){c(o,t.default);var r=f(o);function o(t,e,u,c,i){var f;return n(this,o),(f=r.call(this,t,e,u,c)).direction=i,f}return u(o,[{key:"collected",value:function(){this.sprite.remove()}}]),o}();exports.default=y;
},{"./element.class":"ctoH"}],"s3N3":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t=r(require("./element.class")),e=require("../scripts/types");function r(t){return t&&t.__esModule?t:{default:t}}function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function c(t,e,r){return e&&i(t.prototype,e),r&&i(t,r),t}function u(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&f(t,e)}function f(t,e){return(f=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function s(t){return function(){var e,r=y(t);if(p()){var n=y(this).constructor;e=Reflect.construct(r,arguments,n)}else e=r.apply(this,arguments);return a(this,e)}}function a(t,e){return!e||"object"!==n(e)&&"function"!=typeof e?l(t):e}function l(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function p(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}function y(t){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var h=function(r){u(i,t.default);var n=s(i);function i(t,e,r,c,u){var f;return o(this,i),(f=n.call(this,t,e,r,c)).direction=u,f}return c(i,[{key:"move",value:function(){switch(this.direction){case e.Direction.Right:this.right();break;case e.Direction.Left:this.left();break;case e.Direction.Up:this.up();break;case e.Direction.Down:this.down()}}},{key:"switchDirection",value:function(){switch(this.direction){case e.Direction.Right:this.direction=e.Direction.Left;break;case e.Direction.Left:this.direction=e.Direction.Right;break;case e.Direction.Up:this.direction=e.Direction.Down;break;case e.Direction.Down:this.direction=e.Direction.Up}}}]),i}();exports.default=h;
},{"./element.class":"ctoH","../scripts/types":"p0O2"}],"nLZ4":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var B="\nBBBBBBBBBBBBBBBB\nB0000000B000000B\nB00000000000000B\nB000B00T0000000B\nBP0000000000000B\nB00000000000000B\nB000000000000A0B\nB00000000B00000B\nB0000A000000000B\nB00000000000000B\nB00000000000000B\nB00B00000A00T00B\nB00000000000000B\nB00T00000B000B0B\nB00T00000B000B0B\nBBBBBBBBBBBBBBBB\n",n=B;exports.default=n;
},{}],"KrRT":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var B="\nBBBBBBBBBBBBBBBB\nB00000000000000B\nB00000000000000B\nB00000000000000B\nBP00000000T0000B\nB00000000000000B\nB00000000000000B\nB00000000000000B\nB00000000000000B\nB00000000000000B\nB00000000000000B\nB00000000000000B\nB00000000000000B\nB00000000000000B\nB00000000000000B\nBBBBBBBBBBBBBBBB\n",n=B;exports.default=n;
},{}],"WWWa":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=t(require("./1")),r=t(require("./2"));function t(e){return e&&e.__esModule?e:{default:e}}var u=[e.default,r.default],d=u;exports.default=d;
},{"./1":"nLZ4","./2":"KrRT"}],"dG5k":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.checkCollisions=exports.endGame=exports.startLevel=void 0;var e=i(require("../classes/player.class")),r=i(require("../classes/bush.class")),t=i(require("../classes/trash.class")),n=i(require("../classes/animal.class")),a=require("../scripts/types"),o=i(require("../levels/levels")),l=require("../main"),s=i(require("../classes/settings.class"));function i(e){return e&&e.__esModule?e:{default:e}}function c(e,r){return v(e)||h(e,r)||f(e,r)||u()}function u(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function f(e,r){if(e){if("string"==typeof e)return d(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(t):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?d(e,r):void 0}}function d(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function h(e,r){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var t=[],n=!0,a=!1,o=void 0;try{for(var l,s=e[Symbol.iterator]();!(n=(l=s.next()).done)&&(t.push(l.value),!r||t.length!==r);n=!0);}catch(i){a=!0,o=i}finally{try{n||null==s.return||s.return()}finally{if(a)throw o}}return t}}function v(e){if(Array.isArray(e))return e}var p,m,y,b=[],g=[],w=[],k=function(l,i){m=l,y=i;for(var c=o.default[m].split(/\n/),u=1;u<=s.default.resolution;u++)for(var f=1;f<=s.default.resolution;f++){switch(c[u][f-1]){case"0":break;case"P":p?p.newLevel(f,u,a.Direction.Right):p=new e.default(f,u,y,"element",a.Direction.Right);break;case"B":b.push(new r.default(f,u,y,"element bush",null));break;case"T":g.push(new t.default(f,u,y,"element trash",null));break;case"A":w.push(new n.default(f,u,y,"element animal",Math.random()>=.5?a.Direction.Right:a.Direction.Down))}}return{player:p,bushes:b,trashes:g,animals:w}};exports.startLevel=k;var q=function(){b.length=0,g.length=0,w.length=0;for(var e=y.children,r=0;r<e.length;r++){var t=e[r];t.classList.contains("bush")&&t.parentNode.removeChild(t),t.classList.contains("trash")&&t.parentNode.removeChild(t),t.classList.contains("animal")&&t.parentNode.removeChild(t)}k(m+1,y)},x=function(e){var r=100/p.resolution,t=function(e,t,n,a){return(e===n||e>n&&e<n+r||n>e&&n<e+r)&&(t===a||t>a&&t<a+r||a>t&&a<t+r)},n=c(p.coordinates(),2),a=n[0],o=n[1];a%p.resolution!=0&&o%p.resolution!=0&&(b.map(function(e){var r=c(e.coordinates(),2),n=r[0],l=r[1];t(a,o,n,l)&&A()}),w.map(function(e){var r=c(e.coordinates(),2),n=r[0],l=r[1];t(a,o,n,l)&&A()}),g.map(function(e,r){var n=c(e.coordinates(),2),l=n[0],s=n[1];t(a,o,l,s)&&(e.collected(),delete g[r],C())})),w.map(function(e){var r=c(e.coordinates(),2),n=r[0],a=r[1];b.map(function(r){var o=c(r.coordinates(),2),l=o[0],s=o[1];t(n,a,l,s)&&e.switchDirection()})})};exports.checkCollisions=x;var A=function(){clearInterval(l.ticker),console.log(y),console.log(y.children),alert("You are dead!")};exports.endGame=A;var C=function(){for(var e=0;e<g.length;e++)if(g[e])return;m<o.default.length-1?q():(clearInterval(l.ticker),alert("Well done! You collected all ".concat(g.length," pieces of trash!")))};
},{"../classes/player.class":"M7ux","../classes/bush.class":"vfjN","../classes/trash.class":"K0Mm","../classes/animal.class":"s3N3","../scripts/types":"p0O2","../levels/levels":"WWWa","../main":"epB2","../classes/settings.class":"FrvH"}],"epB2":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.ticker=void 0;var e=require("./scripts/actions"),t=document.getElementById("mount-game"),n=(0,e.startLevel)(0,t),o=n.player,r=n.animals,i=setInterval(function(){o.move(),r.map(function(e){e.move()}),(0,e.checkCollisions)(n)},100/3);exports.ticker=i,document.addEventListener("keydown",function(e){return o.switchDirection(e.code)});
},{"./scripts/actions":"dG5k"}]},{},["epB2"], null)
//# sourceMappingURL=/main.53a38744.js.map