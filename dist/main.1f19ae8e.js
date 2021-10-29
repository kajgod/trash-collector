// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"classes/settings.class.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Settings = /*#__PURE__*/function () {
  function Settings(element, elementClasses, x, y) {
    _classCallCheck(this, Settings);

    this.element = element;
    this.elementClasses = elementClasses;
    this.x = x;
    this.y = y;
    this.resolution = 16;
    this.step = 8;
    this.playerSize = this.getPlayerSize();
  }

  _createClass(Settings, [{
    key: "createElement",
    value: function createElement() {
      this.sprite = document.createElement("div");
      this.sprite.setAttribute("class", this.elementClasses);
      this.sprite.style.width = this.playerSize;
      this.sprite.style.height = this.playerSize;
      this.sprite.style.left = this.posX();
      this.sprite.style.top = this.posY();
      this.element.appendChild(this.sprite);
    }
  }, {
    key: "getPlayerSize",
    value: function getPlayerSize() {
      var percent = 100 / this.resolution;
      return "".concat(percent.toString(), "%");
    }
  }, {
    key: "posX",
    value: function posX() {
      var percent = (this.x - 1) * 100 / this.resolution;
      return "".concat(percent.toString(), "%");
    }
  }, {
    key: "posY",
    value: function posY() {
      var percent = (this.y - 1) * 100 / this.resolution;
      return "".concat(percent.toString(), "%");
    }
  }]);

  return Settings;
}();

exports.default = Settings;
Settings.resolution = 16;
},{}],"classes/element.class.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _settings = _interopRequireDefault(require("./settings.class"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Element = /*#__PURE__*/function (_Settings) {
  _inherits(Element, _Settings);

  var _super = _createSuper(Element);

  function Element(x, y, element, elementClasses) {
    var _this;

    _classCallCheck(this, Element);

    _this = _super.call(this, element, elementClasses, x, y);
    _this.x = x;
    _this.y = y;
    _this.element = element;
    _this.elementClasses = elementClasses;
    _this.offsetX = 0;
    _this.offsetY = 0;

    _this.createElement();

    return _this;
  }

  _createClass(Element, [{
    key: "left",
    value: function left() {
      this.offsetX = this.offsetX - this.step;
      this.execMove();
    }
  }, {
    key: "right",
    value: function right() {
      this.offsetX = this.offsetX + this.step;
      this.execMove();
    }
  }, {
    key: "up",
    value: function up() {
      this.offsetY = this.offsetY - this.step;
      this.execMove();
    }
  }, {
    key: "down",
    value: function down() {
      this.offsetY = this.offsetY + this.step;
      this.execMove();
    }
  }, {
    key: "execMove",
    value: function execMove() {
      this.sprite.style.transform = "translate3d(".concat(this.offsetX, "%, ").concat(this.offsetY, "%, 0)");
    }
  }, {
    key: "coordinates",
    value: function coordinates() {
      return [this.x * 100 / this.resolution + this.offsetX * 1 / this.resolution, this.y * 100 / this.resolution + this.offsetY * 1 / this.resolution];
    }
  }]);

  return Element;
}(_settings.default);

exports.default = Element;
},{"./settings.class":"classes/settings.class.js"}],"scripts/types.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Direction = void 0;
var Direction;
exports.Direction = Direction;

(function (Direction) {
  Direction[Direction["Up"] = 0] = "Up";
  Direction[Direction["Down"] = 1] = "Down";
  Direction[Direction["Left"] = 2] = "Left";
  Direction[Direction["Right"] = 3] = "Right";
})(Direction || (exports.Direction = Direction = {}));
},{}],"classes/player.class.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _element = _interopRequireDefault(require("./element.class"));

var _types = require("../scripts/types");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Player = /*#__PURE__*/function (_Element) {
  _inherits(Player, _Element);

  var _super = _createSuper(Player);

  function Player(x, y, element, elementClasses, direction) {
    var _this;

    _classCallCheck(this, Player);

    _this = _super.call(this, x, y, element, elementClasses);
    _this.x = x;
    _this.y = y;
    _this.direction = direction;

    _this.prepareElement();

    return _this;
  }

  _createClass(Player, [{
    key: "prepareElement",
    value: function prepareElement() {
      this.artDiv = document.createElement("div");
      this.artDiv.setAttribute("class", "player right");
      this.sprite.appendChild(this.artDiv);
    }
  }, {
    key: "newLevel",
    value: function newLevel(nX, nY, nD) {
      this.x = nX;
      this.y = nY;
      this.direction = nD;
      this.artDiv.setAttribute("class", "player right");
      this.offsetX = 0;
      this.offsetY = 0;
      this.sprite.style.left = this.posX();
      this.sprite.style.top = this.posY();
    }
  }, {
    key: "move",
    value: function move() {
      switch (this.direction) {
        case _types.Direction.Right:
          this.right();
          break;

        case _types.Direction.Left:
          this.left();
          break;

        case _types.Direction.Up:
          this.up();
          break;

        case _types.Direction.Down:
          this.down();
          break;
      }
    }
  }, {
    key: "switchDirection",
    value: function switchDirection(dir) {
      switch (this.direction) {
        case _types.Direction.Right:
          this.artDiv.classList.toggle("right");
          break;

        case _types.Direction.Left:
          this.artDiv.classList.toggle("left");
          break;

        case _types.Direction.Up:
          this.artDiv.classList.toggle("up");
          break;

        case _types.Direction.Down:
          this.artDiv.classList.toggle("down");
          break;
      }

      switch (dir) {
        case "ArrowRight":
          this.artDiv.classList.toggle("right");
          this.direction = _types.Direction.Right;
          break;

        case "ArrowLeft":
          this.artDiv.classList.toggle("left");
          this.direction = _types.Direction.Left;
          break;

        case "ArrowUp":
          this.artDiv.classList.toggle("up");
          this.direction = _types.Direction.Up;
          break;

        case "ArrowDown":
          this.artDiv.classList.toggle("down");
          this.direction = _types.Direction.Down;
          break;
      }
    }
  }]);

  return Player;
}(_element.default);

exports.default = Player;
},{"./element.class":"classes/element.class.js","../scripts/types":"scripts/types.js"}],"classes/bush.class.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _element = _interopRequireDefault(require("./element.class"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Bush = /*#__PURE__*/function (_Element) {
  _inherits(Bush, _Element);

  var _super = _createSuper(Bush);

  function Bush(x, y, element, elementClasses, direction) {
    var _this;

    _classCallCheck(this, Bush);

    _this = _super.call(this, x, y, element, elementClasses);
    _this.direction = direction;
    return _this;
  }

  return Bush;
}(_element.default);

exports.default = Bush;
},{"./element.class":"classes/element.class.js"}],"classes/trash.class.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _element = _interopRequireDefault(require("./element.class"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Trash = /*#__PURE__*/function (_Element) {
  _inherits(Trash, _Element);

  var _super = _createSuper(Trash);

  function Trash(x, y, element, elementClasses, direction) {
    var _this;

    _classCallCheck(this, Trash);

    _this = _super.call(this, x, y, element, elementClasses);
    _this.direction = direction;
    return _this;
  }

  _createClass(Trash, [{
    key: "collected",
    value: function collected() {
      this.sprite.remove();
    }
  }]);

  return Trash;
}(_element.default);

exports.default = Trash;
},{"./element.class":"classes/element.class.js"}],"classes/animal.class.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _element = _interopRequireDefault(require("./element.class"));

var _types = require("../scripts/types");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Animal = /*#__PURE__*/function (_Element) {
  _inherits(Animal, _Element);

  var _super = _createSuper(Animal);

  function Animal(x, y, element, elementClasses, direction) {
    var _this;

    _classCallCheck(this, Animal);

    _this = _super.call(this, x, y, element, elementClasses);
    _this.direction = direction;
    return _this;
  }

  _createClass(Animal, [{
    key: "move",
    value: function move() {
      switch (this.direction) {
        case _types.Direction.Right:
          this.right();
          break;

        case _types.Direction.Left:
          this.left();
          break;

        case _types.Direction.Up:
          this.up();
          break;

        case _types.Direction.Down:
          this.down();
          break;
      }
    }
  }, {
    key: "switchDirection",
    value: function switchDirection() {
      switch (this.direction) {
        case _types.Direction.Right:
          this.direction = _types.Direction.Left;
          break;

        case _types.Direction.Left:
          this.direction = _types.Direction.Right;
          break;

        case _types.Direction.Up:
          this.direction = _types.Direction.Down;
          break;

        case _types.Direction.Down:
          this.direction = _types.Direction.Up;
          break;
      }
    }
  }]);

  return Animal;
}(_element.default);

exports.default = Animal;
},{"./element.class":"classes/element.class.js","../scripts/types":"scripts/types.js"}],"levels/1.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var level = "\nBBBBBBBBBBBBBBBB\nBB00B000000000BB\nB000B0000000000B\nB00000000000000B\nB00000T000T00BBB\nB0000000B000000B\nBP00000BBB00000B\nB0000000B000000B\nB00000T000T0000B\nB00000000000000B\nB00000000000000B\nBBB000000000000B\nB00000000000000B\nB0000000000B000B\nBB000000000B00BB\nBBBBBBBBBBBBBBBB\n";
var _default = level;
exports.default = _default;
},{}],"levels/2.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var level = "\nBBBBBBBBBBBBBBBB\nB00000000000000B\nB0000T000000000B\nB00000000000000B\nB000B00A000B000B\nB00000000000000B\nB00000000000000B\nBP0000000000000B\nB00000000000000B\nB00000000000000B\nB00000000000000B\nB000B000A00B000B\nB00000000000000B\nB0000000000T000B\nB00000000000000B\nBBBBBBBBBBBBBBBB\n";
var _default = level;
exports.default = _default;
},{}],"levels/3.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var level3 = "\nBBBBBBBBBBBBBBBB\nBBBA0T0000000BBB\nBB000000T0000ABB\nB00T00P000000T0B\nB00000000000000B\nB00000000000000B\nBB0000T0000000BB\nBBB0000000000BBB\nBB000T00000000BB\nB00000000000000B\nB00000000000000B\nB00000000000000B\nBA0000000000000B\nBB000T00000000BB\nBBB000000000ABBB\nBBBBBBBBBBBBBBBB\n";
var _default = level3;
exports.default = _default;
},{}],"levels/4.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var level = "\nBBBBBBBBBBBBBBBB\nB0000000B000000B\nB00000000000000B\nB000B00T0000000B\nB00000000000000B\nB00000000000000B\nB000000000000A0B\nBP0000000B00000B\nB0000A000000000B\nB00000000000000B\nB00000000000000B\nB00B00000A00T00B\nB00000000000000B\nB00T00000B000B0B\nB00T00000B000B0B\nBBBBBBBBBBBBBBBB\n";
var _default = level;
exports.default = _default;
},{}],"levels/levels.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ = _interopRequireDefault(require("./1"));

var _2 = _interopRequireDefault(require("./2"));

var _3 = _interopRequireDefault(require("./3"));

var _4 = _interopRequireDefault(require("./4"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var levels = [_.default, _2.default, _3.default, _4.default];
var _default = levels;
exports.default = _default;
},{"./1":"levels/1.js","./2":"levels/2.js","./3":"levels/3.js","./4":"levels/4.js"}],"scripts/actions.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.startLevel = exports.endGame = exports.checkCollisions = void 0;

var _player = _interopRequireDefault(require("../classes/player.class"));

var _bush = _interopRequireDefault(require("../classes/bush.class"));

var _trash = _interopRequireDefault(require("../classes/trash.class"));

var _animal = _interopRequireDefault(require("../classes/animal.class"));

var _types = require("../scripts/types");

var _levels = _interopRequireDefault(require("../levels/levels"));

var _settings = _interopRequireDefault(require("../classes/settings.class"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var player,
    bushes = [],
    trashes = [],
    animals = [],
    level,
    mountGame;

var startLevel = function startLevel(levelNo, target) {
  level = levelNo;
  mountGame = target;

  var charList = _levels.default[level].split(/\n/);

  for (var y = 1; y <= _settings.default.resolution; y++) {
    for (var x = 1; x <= _settings.default.resolution; x++) {
      var cur = charList[y][x - 1];

      switch (cur) {
        case "0":
          break;

        case "P":
          if (!player) {
            player = new _player.default(x, y, mountGame, "element persistent", _types.Direction.Right);
          } else {
            player.newLevel(x, y, _types.Direction.Right);
          }

          break;

        case "B":
          bushes.push(new _bush.default(x, y, mountGame, "element bush", null));
          break;

        case "T":
          trashes.push(new _trash.default(x, y, mountGame, "element trash", null));
          break;

        case "A":
          animals.push(new _animal.default(x, y, mountGame, "element animal", Math.random() >= 0.5 ? _types.Direction.Right : _types.Direction.Down));
          break;
      }
    }
  }

  var setActive = function setActive(v) {
    window.active = v;
  };

  var hideOpeningTitle = function hideOpeningTitle() {
    document.getElementById("opening-title").style.display = 'none';
  };

  return {
    player: player,
    bushes: bushes,
    trashes: trashes,
    animals: animals,
    setActive: setActive,
    hideOpeningTitle: hideOpeningTitle
  };
};

exports.startLevel = startLevel;

var nextLevel = function nextLevel() {
  bushes.length = 0;
  trashes.length = 0;
  animals.length = 0;
  var children = mountGame.children;

  while (children[0] && children[1]) {
    [0, 1].map(function (v) {
      return !children[v].classList.contains("persistent") && children[v].remove();
    });
  }

  startLevel(level + 1, mountGame);
};

var firstLevel = function firstLevel() {
  level = -1;
  nextLevel();
};

var checkCollisions = function checkCollisions(game) {
  var diff = 100 / player.resolution;

  var check = function check(x1, y1, x2, y2) {
    if (x1 === x2 || x1 > x2 && x1 < x2 + diff || x2 > x1 && x2 < x1 + diff) if (y1 === y2 || y1 > y2 && y1 < y2 + diff || y2 > y1 && y2 < y1 + diff) return true;
    return false;
  };

  {
    var _player$coordinates = player.coordinates(),
        _player$coordinates2 = _slicedToArray(_player$coordinates, 2),
        x1 = _player$coordinates2[0],
        y1 = _player$coordinates2[1];

    if (x1 % player.resolution !== 0 && y1 % player.resolution !== 0) {
      bushes.map(function (bush) {
        var _bush$coordinates = bush.coordinates(),
            _bush$coordinates2 = _slicedToArray(_bush$coordinates, 2),
            x2 = _bush$coordinates2[0],
            y2 = _bush$coordinates2[1];

        if (check(x1, y1, x2, y2)) endGame();
      });
      animals.map(function (animal) {
        var _animal$coordinates = animal.coordinates(),
            _animal$coordinates2 = _slicedToArray(_animal$coordinates, 2),
            x2 = _animal$coordinates2[0],
            y2 = _animal$coordinates2[1];

        if (check(x1, y1, x2, y2)) endGame();
      });
      trashes.map(function (trash, key) {
        var _trash$coordinates = trash.coordinates(),
            _trash$coordinates2 = _slicedToArray(_trash$coordinates, 2),
            x2 = _trash$coordinates2[0],
            y2 = _trash$coordinates2[1];

        if (check(x1, y1, x2, y2)) {
          trash.collected();
          delete trashes[key];
          checkCompletedLevel();
        }
      });
    }
  }
  animals.map(function (animal) {
    var _animal$coordinates3 = animal.coordinates(),
        _animal$coordinates4 = _slicedToArray(_animal$coordinates3, 2),
        x1 = _animal$coordinates4[0],
        y1 = _animal$coordinates4[1];

    bushes.map(function (bush) {
      var _bush$coordinates3 = bush.coordinates(),
          _bush$coordinates4 = _slicedToArray(_bush$coordinates3, 2),
          x2 = _bush$coordinates4[0],
          y2 = _bush$coordinates4[1];

      if (check(x1, y1, x2, y2)) animal.switchDirection();
    });
  });
};

exports.checkCollisions = checkCollisions;

var endGame = function endGame() {
  window.active = false;
  alert("You are dead! You managed to complete ".concat(level, " levels."));
  firstLevel();
};

exports.endGame = endGame;

var checkCompletedLevel = function checkCompletedLevel() {
  for (var i = 0; i < trashes.length; i++) {
    if (trashes[i]) return;
  }

  if (level < _levels.default.length - 1) {
    nextLevel();
    return;
  }

  window.active = false;
  alert("Well done! You completed all ".concat(level + 1, " levels!"));
  firstLevel();
};
},{"../classes/player.class":"classes/player.class.js","../classes/bush.class":"classes/bush.class.js","../classes/trash.class":"classes/trash.class.js","../classes/animal.class":"classes/animal.class.js","../scripts/types":"scripts/types.js","../levels/levels":"levels/levels.js","../classes/settings.class":"classes/settings.class.js"}],"main.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ticker = void 0;

var _actions = require("./scripts/actions");

var mountGame = document.getElementById("mount-game");
var game = (0, _actions.startLevel)(0, mountGame);
var player = game.player;
var animals = game.animals;
window.active = false;
var ticker = setInterval(function () {
  if (window.active) {
    player.move();
    animals.map(function (animal) {
      animal.move();
    });
    (0, _actions.checkCollisions)(game);
  }
}, 100 / 3);
exports.ticker = ticker;
document.addEventListener("keydown", function (e) {
  if (!window.active) {
    window.active = true;
    game.hideOpeningTitle();
  }

  player.switchDirection(e.code);
});
},{"./scripts/actions":"scripts/actions.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "37879" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","main.js"], null)
//# sourceMappingURL=/main.1f19ae8e.js.map