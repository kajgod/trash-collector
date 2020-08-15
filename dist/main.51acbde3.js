parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"FrvH":[function(require,module,exports) {
"use strict";function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var i=0;i<e.length;i++){var s=e[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}function i(t,i,s){return i&&e(t.prototype,i),s&&e(t,s),t}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var s=function(){function e(i,s,r,n){t(this,e),this.element=i,this.elementClasses=s,this.x=r,this.y=n,this.resolution=16,this.step=8,this.playerSize=this.getPlayerSize()}return i(e,[{key:"createElement",value:function(){this.sprite=document.createElement("div"),this.sprite.setAttribute("class",this.elementClasses),this.sprite.style.width=this.playerSize,this.sprite.style.height=this.playerSize,this.sprite.style.left=this.posX(),this.sprite.style.top=this.posY(),this.element.appendChild(this.sprite)}},{key:"getPlayerSize",value:function(){var t=100/this.resolution;return"".concat(t.toString(),"%")}},{key:"posX",value:function(){var t=100*(this.x-1)/this.resolution;return"".concat(t.toString(),"%")}},{key:"posY",value:function(){var t=100*(this.y-1)/this.resolution;return"".concat(t.toString(),"%")}}]),e}();exports.default=s,s.resolution=16;
},{}],"ctoH":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t=e(require("./settings.class"));function e(t){return t&&t.__esModule?t:{default:t}}function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function i(t,e,o){return e&&r(t.prototype,e),o&&r(t,o),t}function f(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&s(t,e)}function s(t,e){return(s=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function u(t){return function(){var e,o=h(t);if(a()){var n=h(this).constructor;e=Reflect.construct(o,arguments,n)}else e=o.apply(this,arguments);return c(this,e)}}function c(t,e){return!e||"object"!==o(e)&&"function"!=typeof e?l(t):e}function l(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function a(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}function h(t){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var p=function(e){f(r,t.default);var o=u(r);function r(t,e,i,f){var s;return n(this,r),(s=o.call(this,i,f,t,e)).x=t,s.y=e,s.element=i,s.elementClasses=f,s.offsetX=0,s.offsetY=0,s.createElement(),s}return i(r,[{key:"left",value:function(){this.offsetX=this.offsetX-this.step,this.execMove()}},{key:"right",value:function(){this.offsetX=this.offsetX+this.step,this.execMove()}},{key:"up",value:function(){this.offsetY=this.offsetY-this.step,this.execMove()}},{key:"down",value:function(){this.offsetY=this.offsetY+this.step,this.execMove()}},{key:"execMove",value:function(){this.sprite.style.transform="translate3d(".concat(this.offsetX,"%, ").concat(this.offsetY,"%, 0)")}},{key:"coordinates",value:function(){return[100*this.x/this.resolution+1*this.offsetX/this.resolution,100*this.y/this.resolution+1*this.offsetY/this.resolution]}}]),r}();exports.default=p;
},{"./settings.class":"FrvH"}],"p0O2":[function(require,module,exports) {
"use strict";var e;Object.defineProperty(exports,"__esModule",{value:!0}),exports.Direction=void 0,exports.Direction=e,function(e){e[e.Up=0]="Up",e[e.Down=1]="Down",e[e.Left=2]="Left",e[e.Right=3]="Right"}(e||(exports.Direction=e={}));
},{}],"M7ux":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t=i(require("./element.class")),e=require("../scripts/types");function i(t){return t&&t.__esModule?t:{default:t}}function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function n(t,e){for(var i=0;i<e.length;i++){var r=e[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function s(t,e,i){return e&&n(t.prototype,e),i&&n(t,i),t}function c(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&a(t,e)}function a(t,e){return(a=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function u(t){return function(){var e,i=p(t);if(h()){var r=p(this).constructor;e=Reflect.construct(i,arguments,r)}else e=i.apply(this,arguments);return f(this,e)}}function f(t,e){return!e||"object"!==r(e)&&"function"!=typeof e?l(t):e}function l(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function h(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}function p(t){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var y=function(i){c(n,t.default);var r=u(n);function n(t,e,i,s,c){var a;return o(this,n),(a=r.call(this,t,e,i,s)).x=t,a.y=e,a.direction=c,a.prepareElement(),a}return s(n,[{key:"prepareElement",value:function(){this.artDiv=document.createElement("div"),this.artDiv.setAttribute("class","player right"),this.sprite.appendChild(this.artDiv)}},{key:"newLevel",value:function(t,e,i){this.x=t,this.y=e,this.direction=i,this.offsetX=0,this.offsetY=0,this.sprite.style.left=this.posX(),this.sprite.style.top=this.posY()}},{key:"move",value:function(){switch(this.direction){case e.Direction.Right:this.right();break;case e.Direction.Left:this.left();break;case e.Direction.Up:this.up();break;case e.Direction.Down:this.down()}}},{key:"switchDirection",value:function(t){switch(this.direction){case e.Direction.Right:this.artDiv.classList.toggle("right");break;case e.Direction.Left:this.artDiv.classList.toggle("left");break;case e.Direction.Up:this.artDiv.classList.toggle("up");break;case e.Direction.Down:this.artDiv.classList.toggle("down")}switch(t){case"ArrowRight":this.artDiv.classList.toggle("right"),this.direction=e.Direction.Right;break;case"ArrowLeft":this.artDiv.classList.toggle("left"),this.direction=e.Direction.Left;break;case"ArrowUp":this.artDiv.classList.toggle("up"),this.direction=e.Direction.Up;break;case"ArrowDown":this.artDiv.classList.toggle("down"),this.direction=e.Direction.Down}}}]),n}();exports.default=y;
},{"./element.class":"ctoH","../scripts/types":"p0O2"}],"vfjN":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t=e(require("./element.class"));function e(t){return t&&t.__esModule?t:{default:t}}function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&u(t,e)}function u(t,e){return(u=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function c(t){return function(){var e,n=s(t);if(l()){var r=s(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return f(this,e)}}function f(t,e){return!e||"object"!==n(e)&&"function"!=typeof e?i(t):e}function i(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function l(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}function s(t){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var a=function(e){o(u,t.default);var n=c(u);function u(t,e,o,c,f){var i;return r(this,u),(i=n.call(this,t,e,o,c)).direction=f,i}return u}();exports.default=a;
},{"./element.class":"ctoH"}],"K0Mm":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t=e(require("./element.class"));function e(t){return t&&t.__esModule?t:{default:t}}function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function u(t,e,r){return e&&o(t.prototype,e),r&&o(t,r),t}function c(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&i(t,e)}function i(t,e){return(i=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function f(t){return function(){var e,r=p(t);if(s()){var n=p(this).constructor;e=Reflect.construct(r,arguments,n)}else e=r.apply(this,arguments);return l(this,e)}}function l(t,e){return!e||"object"!==r(e)&&"function"!=typeof e?a(t):e}function a(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function s(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}function p(t){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var y=function(e){c(o,t.default);var r=f(o);function o(t,e,u,c,i){var f;return n(this,o),(f=r.call(this,t,e,u,c)).direction=i,f}return u(o,[{key:"collected",value:function(){this.sprite.remove()}}]),o}();exports.default=y;
},{"./element.class":"ctoH"}],"s3N3":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t=r(require("./element.class")),e=require("../scripts/types");function r(t){return t&&t.__esModule?t:{default:t}}function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function c(t,e,r){return e&&i(t.prototype,e),r&&i(t,r),t}function u(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&f(t,e)}function f(t,e){return(f=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function s(t){return function(){var e,r=y(t);if(p()){var n=y(this).constructor;e=Reflect.construct(r,arguments,n)}else e=r.apply(this,arguments);return a(this,e)}}function a(t,e){return!e||"object"!==n(e)&&"function"!=typeof e?l(t):e}function l(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function p(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}function y(t){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var h=function(r){u(i,t.default);var n=s(i);function i(t,e,r,c,u){var f;return o(this,i),(f=n.call(this,t,e,r,c)).direction=u,f}return c(i,[{key:"move",value:function(){switch(this.direction){case e.Direction.Right:this.right();break;case e.Direction.Left:this.left();break;case e.Direction.Up:this.up();break;case e.Direction.Down:this.down()}}},{key:"switchDirection",value:function(){switch(this.direction){case e.Direction.Right:this.direction=e.Direction.Left;break;case e.Direction.Left:this.direction=e.Direction.Right;break;case e.Direction.Up:this.direction=e.Direction.Down;break;case e.Direction.Down:this.direction=e.Direction.Up}}}]),i}();exports.default=h;
},{"./element.class":"ctoH","../scripts/types":"p0O2"}],"nLZ4":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var B="\nBBBBBBBBBBBBBBBB\nBB00B000000000BB\nB000B0000000000B\nB00000000000000B\nB00000T000T00BBB\nB0000000B000000B\nBP00000BBB00000B\nB0000000B000000B\nB00000T000T0000B\nB00000000000000B\nB00000000000000B\nBBB000000000000B\nB00000000000000B\nB0000000000B000B\nBB000000000B00BB\nBBBBBBBBBBBBBBBB\n",n=B;exports.default=n;
},{}],"KrRT":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var B="\nBBBBBBBBBBBBBBBB\nB00000000000000B\nB0000T000000000B\nB00000000000000B\nB000B00A000B000B\nB00000000000000B\nB00000000000000B\nBP0000000000000B\nB00000000000000B\nB00000000000000B\nB00000000000000B\nB000B000A00B000B\nB00000000000000B\nB0000000000T000B\nB00000000000000B\nBBBBBBBBBBBBBBBB\n",n=B;exports.default=n;
},{}],"mcyC":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var B="\nBBBBBBBBBBBBBBBB\nB0000000B000000B\nB00000000000000B\nB000B00T0000000B\nB00000000000000B\nB00000000000000B\nB000000000000A0B\nBP0000000B00000B\nB0000A000000000B\nB00000000000000B\nB00000000000000B\nB00B00000A00T00B\nB00000000000000B\nB00T00000B000B0B\nB00T00000B000B0B\nBBBBBBBBBBBBBBBB\n",n=B;exports.default=n;
},{}],"WWWa":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=u(require("./1")),r=u(require("./2")),t=u(require("./3"));function u(e){return e&&e.__esModule?e:{default:e}}var d=[e.default,r.default,t.default],a=d;exports.default=a;
},{"./1":"nLZ4","./2":"KrRT","./3":"mcyC"}],"dG5k":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.checkCollisions=exports.endGame=exports.startLevel=void 0;var e=i(require("../classes/player.class")),t=i(require("../classes/bush.class")),r=i(require("../classes/trash.class")),n=i(require("../classes/animal.class")),a=require("../scripts/types"),o=i(require("../levels/levels")),s=i(require("../classes/settings.class"));function i(e){return e&&e.__esModule?e:{default:e}}function l(e,t){return h(e)||d(e,t)||u(e,t)||c()}function c(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function u(e,t){if(e){if("string"==typeof e)return f(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(r):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?f(e,t):void 0}}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function d(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,a=!1,o=void 0;try{for(var s,i=e[Symbol.iterator]();!(n=(s=i.next()).done)&&(r.push(s.value),!t||r.length!==t);n=!0);}catch(l){a=!0,o=l}finally{try{n||null==i.return||i.return()}finally{if(a)throw o}}return r}}function h(e){if(Array.isArray(e))return e}var p,v,m,y=[],b=[],g=[],w=!0,x=function(i,l){v=i,m=l;for(var c=o.default[v].split(/\n/),u=1;u<=s.default.resolution;u++)for(var f=1;f<=s.default.resolution;f++){switch(c[u][f-1]){case"0":break;case"P":p?p.newLevel(f,u,a.Direction.Right):p=new e.default(f,u,m,"element persistent",a.Direction.Right);break;case"B":y.push(new t.default(f,u,m,"element bush",null));break;case"T":b.push(new r.default(f,u,m,"element trash",null));break;case"A":g.push(new n.default(f,u,m,"element animal",Math.random()>=.5?a.Direction.Right:a.Direction.Down))}}return{player:p,bushes:y,trashes:b,animals:g,active:w,setActive:function(e){w=e}}};exports.startLevel=x;var A=function(){y.length=0,b.length=0,g.length=0;for(var e=m.children;e[0]&&e[1];)[0,1].map(function(t){return!e[t].classList.contains("persistent")&&e[t].remove()});x(v+1,m)},q=function(){v=0,A()},k=function(e){var t=100/p.resolution,r=function(e,r,n,a){return(e===n||e>n&&e<n+t||n>e&&n<e+t)&&(r===a||r>a&&r<a+t||a>r&&a<r+t)},n=l(p.coordinates(),2),a=n[0],o=n[1];a%p.resolution!=0&&o%p.resolution!=0&&(y.map(function(e){var t=l(e.coordinates(),2),n=t[0],s=t[1];r(a,o,n,s)&&D()}),g.map(function(e){var t=l(e.coordinates(),2),n=t[0],s=t[1];r(a,o,n,s)&&D()}),b.map(function(e,t){var n=l(e.coordinates(),2),s=n[0],i=n[1];r(a,o,s,i)&&(e.collected(),delete b[t],S())})),g.map(function(e){var t=l(e.coordinates(),2),n=t[0],a=t[1];y.map(function(t){var o=l(t.coordinates(),2),s=o[0],i=o[1];r(n,a,s,i)&&e.switchDirection()})})};exports.checkCollisions=k;var D=function(){w=!1,alert("You are dead!"),q()};exports.endGame=D;var S=function(){for(var e=0;e<b.length;e++)if(b[e])return;v<o.default.length-1?A():(w=!1,alert("Well done! You collected all ".concat(b.length," pieces of trash!")))};
},{"../classes/player.class":"M7ux","../classes/bush.class":"vfjN","../classes/trash.class":"K0Mm","../classes/animal.class":"s3N3","../scripts/types":"p0O2","../levels/levels":"WWWa","../classes/settings.class":"FrvH"}],"epB2":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.ticker=void 0;var e=require("./scripts/actions"),t=document.getElementById("mount-game"),n=(0,e.startLevel)(0,t),o=n.player,i=n.animals,r=setInterval(function(){n.active&&(o.move(),i.map(function(e){e.move()}),(0,e.checkCollisions)(n))},100/3);exports.ticker=r,document.addEventListener("keydown",function(e){return o.switchDirection(e.code)});
},{"./scripts/actions":"dG5k"}]},{},["epB2"], null)
//# sourceMappingURL=/main.51acbde3.js.map