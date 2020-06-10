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
})({"ts/types/Vector2.ts":[function(require,module,exports) {
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Vector2 = /*#__PURE__*/function () {
  function Vector2() {
    var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

    _classCallCheck(this, Vector2);

    this.x = x;
    this.y = y;
  }

  _createClass(Vector2, [{
    key: "set",
    value: function set(x, y) {
      this.x = x;
      this.y = y;
    }
  }, {
    key: "print",
    value: function print() {
      return "pos(" + this.x + ", " + this.y + ")";
    }
  }]);

  return Vector2;
}();

exports.Vector2 = Vector2;
},{}],"ts/types/Enums.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var GameKey;

(function (GameKey) {
  GameKey[GameKey["UP"] = 38] = "UP";
  GameKey[GameKey["DOWN"] = 40] = "DOWN";
  GameKey[GameKey["LEFT"] = 37] = "LEFT";
  GameKey[GameKey["RIGHT"] = 39] = "RIGHT";
  GameKey[GameKey["SPACE"] = 32] = "SPACE";
})(GameKey = exports.GameKey || (exports.GameKey = {}));

var ScreenEdge;

(function (ScreenEdge) {
  ScreenEdge[ScreenEdge["UP"] = 0] = "UP";
  ScreenEdge[ScreenEdge["RIGHT"] = 1] = "RIGHT";
  ScreenEdge[ScreenEdge["BOTTOM"] = 2] = "BOTTOM";
  ScreenEdge[ScreenEdge["LEFT"] = 3] = "LEFT";
})(ScreenEdge = exports.ScreenEdge || (exports.ScreenEdge = {}));

var Axis;

(function (Axis) {
  Axis[Axis["X"] = 0] = "X";
  Axis[Axis["Y"] = 1] = "Y";
})(Axis = exports.Axis || (exports.Axis = {}));
},{}],"ts/types/MovementDirection.ts":[function(require,module,exports) {
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Enums_1 = require("./Enums");

var MovementDirection = /*#__PURE__*/function () {
  function MovementDirection(axis, direction) {
    _classCallCheck(this, MovementDirection);

    this._axis = axis;
    this._direction = direction;
  }

  _createClass(MovementDirection, [{
    key: "set",
    value: function set(axis, direction) {
      this._axis = axis;
      this._direction = direction;
    }
  }, {
    key: "getAxis",
    value: function getAxis() {
      return this._axis;
    }
  }, {
    key: "getDirectionNumber",
    value: function getDirectionNumber() {
      return this._direction;
    }
  }, {
    key: "isUp",
    value: function isUp() {
      return this._axis === Enums_1.Axis.Y && this._direction === -1 ? true : false;
    }
  }, {
    key: "isDown",
    value: function isDown() {
      return this._axis === Enums_1.Axis.Y && this._direction === 1 ? true : false;
    }
  }, {
    key: "isLeft",
    value: function isLeft() {
      return this._axis === Enums_1.Axis.X && this._direction === -1 ? true : false;
    }
  }, {
    key: "isRight",
    value: function isRight() {
      return this._axis === Enums_1.Axis.X && this._direction === 1 ? true : false;
    }
  }]);

  return MovementDirection;
}();

exports.MovementDirection = MovementDirection;
},{"./Enums":"ts/types/Enums.ts"}],"ts/types/GameObject.ts":[function(require,module,exports) {
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var GameObject = /*#__PURE__*/function () {
  _createClass(GameObject, [{
    key: "getSprite",
    value: function getSprite() {
      return this._sprite;
    }
  }]);

  function GameObject(position) {
    _classCallCheck(this, GameObject);

    this.position = position;
    this._sprite = new PIXI.Sprite();
  }

  _createClass(GameObject, [{
    key: "draw",
    value: function draw() {}
  }, {
    key: "setFrame",
    value: function setFrame(rectangle) {
      this._sprite.texture.frame = rectangle;
    }
  }]);

  return GameObject;
}();

exports.GameObject = GameObject;
},{}],"ts/helper/Tileset.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HEAD_UP = new PIXI.Rectangle(0, 0, 16, 16);
exports.HEAD_RIGHT = new PIXI.Rectangle(16, 0, 16, 16);
exports.HEAD_DOWN = new PIXI.Rectangle(32, 0, 16, 16);
exports.HEAD_LEFT = new PIXI.Rectangle(48, 0, 16, 16);
exports.TAIL_UP = new PIXI.Rectangle(0, 16, 16, 16);
exports.TAIL_RIGHT = new PIXI.Rectangle(16, 16, 16, 16);
exports.TAIL_DOWN = new PIXI.Rectangle(32, 16, 16, 16);
exports.TAIL_LEFT = new PIXI.Rectangle(48, 16, 16, 16);
exports.TURN_TOP_RIGHT = new PIXI.Rectangle(0, 32, 16, 16);
exports.TURN_BOTTOM_LEFT = new PIXI.Rectangle(16, 32, 16, 16);
exports.TURN_BOTTOM_RIGHT = new PIXI.Rectangle(32, 32, 16, 16);
exports.TURN_TOP_LEFT = new PIXI.Rectangle(48, 32, 16, 16);
exports.Y_STRAIGHT = new PIXI.Rectangle(0, 48, 16, 16);
exports.X_STRAIGHT = new PIXI.Rectangle(16, 48, 16, 16);
exports.BUNNY = new PIXI.Rectangle(32, 48, 16, 16);
exports.GRASS = new PIXI.Rectangle(48, 48, 16, 16);
},{}],"ts/objects/SnakeSegment.ts":[function(require,module,exports) {
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var GameObject_1 = require("~ts/types/GameObject");

var app_1 = require("~ts/app");

var TILESET = __importStar(require("~ts/helper/Tileset"));

var MovementDirection_1 = require("~ts/types/MovementDirection");

var Enums_1 = require("~ts/types/Enums");

var SnakeSegment = /*#__PURE__*/function (_GameObject_1$GameObj) {
  _inherits(SnakeSegment, _GameObject_1$GameObj);

  var _super = _createSuper(SnakeSegment);

  function SnakeSegment(position, direction) {
    var _this;

    var isHead = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

    _classCallCheck(this, SnakeSegment);

    _this = _super.call(this, position);
    _this._direction = new MovementDirection_1.MovementDirection(Enums_1.Axis.X, -1);
    _this._previousDirection = new MovementDirection_1.MovementDirection(Enums_1.Axis.X, -1);
    _this._sprite = new PIXI.Sprite();
    _this.previousSprite = new PIXI.Sprite();
    _this.position = position;
    _this._isHead = isHead;
    _this._isTail = false;
    _this._direction = direction;

    _this.draw();

    return _this;
  }

  _createClass(SnakeSegment, [{
    key: "getDirection",
    value: function getDirection() {
      return this._direction;
    }
  }, {
    key: "setDirection",
    value: function setDirection(direction) {
      this._previousDirection.set(this._direction.getAxis(), this._direction.getDirectionNumber());

      this._direction.set(direction.getAxis(), direction.getDirectionNumber());
    }
  }, {
    key: "getPreviousDirection",
    value: function getPreviousDirection() {
      return this._previousDirection;
    }
  }, {
    key: "setTail",
    value: function setTail(isTail) {
      this._isTail = isTail;
    }
  }, {
    key: "isHead",
    value: function isHead() {
      return this._isHead;
    }
  }, {
    key: "onCollision",
    value: function onCollision(snake) {}
  }, {
    key: "update",
    value: function update() {
      this._sprite.position.x = this.position.x;
      this._sprite.position.y = this.position.y;
    }
  }, {
    key: "draw",
    value: function draw() {
      var fullTileset = new PIXI.Texture(PIXI.Texture.from("tileset").baseTexture);
      this._sprite = new PIXI.Sprite(fullTileset);
      this.setFrame(TILESET.X_STRAIGHT);
      this._sprite.x = this.position.x;
      this._sprite.y = this.position.y;
      app_1.APPLICATION.stage.addChild(this._sprite);
    }
  }, {
    key: "setHeadFrame",
    value: function setHeadFrame() {
      var frame = TILESET.HEAD_UP;

      switch (this._direction.getAxis()) {
        case Enums_1.Axis.X:
          frame = this._direction.getDirectionNumber() == 1 ? TILESET.HEAD_RIGHT : TILESET.HEAD_LEFT;
          break;

        case Enums_1.Axis.Y:
          frame = this._direction.getDirectionNumber() == 1 ? TILESET.HEAD_DOWN : TILESET.HEAD_UP;
          break;
      }

      this.setFrame(frame);
    }
  }, {
    key: "setTailFrame",
    value: function setTailFrame(movementDirection) {
      var frame = TILESET.HEAD_UP;

      switch (movementDirection.getAxis()) {
        case Enums_1.Axis.X:
          frame = movementDirection.getDirectionNumber() == 1 ? TILESET.TAIL_RIGHT : TILESET.TAIL_LEFT;
          break;

        case Enums_1.Axis.Y:
          frame = movementDirection.getDirectionNumber() == 1 ? TILESET.TAIL_DOWN : TILESET.TAIL_UP;
          break;
      }

      this.setFrame(frame);
    }
  }, {
    key: "updateSprite",
    value: function updateSprite(nextSegment) {
      if (nextSegment.isHead()) this.setSpriteBasedOnHeadMovement(nextSegment);else if (this._isTail) this.setTailFrame(nextSegment.getPreviousDirection());else this.setSprite(nextSegment.previousSprite);
      this.updateStage();
    }
  }, {
    key: "setSpriteBasedOnHeadMovement",
    value: function setSpriteBasedOnHeadMovement(nextSegment) {
      if (this._previousDirection.getAxis() === nextSegment.getDirection().getAxis()) {
        if (this._previousDirection.getAxis() === Enums_1.Axis.X) this.newSprite(TILESET.X_STRAIGHT);else this.newSprite(TILESET.Y_STRAIGHT);
      }

      if (this._previousDirection.isLeft()) {
        if (nextSegment.getDirection().isUp()) this.newSprite(TILESET.TURN_TOP_RIGHT);else if (nextSegment.getDirection().isDown()) this.newSprite(TILESET.TURN_BOTTOM_LEFT);
      }

      if (this._previousDirection.isRight()) {
        if (nextSegment.getDirection().isUp()) this.newSprite(TILESET.TURN_TOP_LEFT);else if (nextSegment.getDirection().isDown()) this.newSprite(TILESET.TURN_BOTTOM_RIGHT);
      } else if (this._previousDirection.isUp()) {
        if (nextSegment.getDirection().isLeft()) this.newSprite(TILESET.TURN_BOTTOM_RIGHT);else if (nextSegment.getDirection().isRight()) this.newSprite(TILESET.TURN_BOTTOM_LEFT);
      } else if (this._previousDirection.isDown()) {
        if (nextSegment.getDirection().isLeft()) this.newSprite(TILESET.TURN_TOP_LEFT);else if (nextSegment.getDirection().isRight()) this.newSprite(TILESET.TURN_TOP_RIGHT);
      }
    }
  }, {
    key: "newSprite",
    value: function newSprite(frame) {
      this.previousSprite = this._sprite;
      this._sprite = new PIXI.Sprite(new PIXI.Texture(PIXI.Texture.from("tileset").baseTexture));
      this.setFrame(frame);
    }
  }, {
    key: "setSprite",
    value: function setSprite(sprite) {
      this.previousSprite = this._sprite;
      this._sprite = sprite;
    }
  }, {
    key: "updateStage",
    value: function updateStage() {
      app_1.APPLICATION.stage.addChild(this._sprite);
      app_1.APPLICATION.stage.removeChild(this.previousSprite);
    }
  }]);

  return SnakeSegment;
}(GameObject_1.GameObject);

exports.SnakeSegment = SnakeSegment;
},{"~ts/types/GameObject":"ts/types/GameObject.ts","~ts/app":"ts/app.ts","~ts/helper/Tileset":"ts/helper/Tileset.ts","~ts/types/MovementDirection":"ts/types/MovementDirection.ts","~ts/types/Enums":"ts/types/Enums.ts"}],"ts/objects/Snake.ts":[function(require,module,exports) {
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Vector2_1 = require("../types/Vector2");

var Enums_1 = require("../types/Enums");

var MovementDirection_1 = require("../types/MovementDirection");

var SnakeSegment_1 = require("./SnakeSegment");

var app_1 = require("~ts/app");

var Snake = /*#__PURE__*/function () {
  function Snake(position) {
    _classCallCheck(this, Snake);

    this._movementModifier = .16;
    this._direction = new MovementDirection_1.MovementDirection(Enums_1.Axis.X, -1);
    this._previousDirection = new MovementDirection_1.MovementDirection(Enums_1.Axis.X, -1);
    this._segments = [];
    this.position = position;
    this._segments[0] = new SnakeSegment_1.SnakeSegment(new Vector2_1.Vector2(17 * app_1.TILE_SIZE - 1 * app_1.TILE_SIZE, 16 * app_1.TILE_SIZE), this._direction, true);
    this._segments[1] = new SnakeSegment_1.SnakeSegment(new Vector2_1.Vector2(17 * app_1.TILE_SIZE + 0 * app_1.TILE_SIZE, 16 * app_1.TILE_SIZE), new MovementDirection_1.MovementDirection(this._direction.getAxis(), this._direction.getDirectionNumber()));
    this._segments[2] = new SnakeSegment_1.SnakeSegment(new Vector2_1.Vector2(17 * app_1.TILE_SIZE + 1 * app_1.TILE_SIZE, 16 * app_1.TILE_SIZE), new MovementDirection_1.MovementDirection(this._direction.getAxis(), this._direction.getDirectionNumber()));

    this._segments[2].setTail(true);

    this._movementModifier = 16;
    this.update();
    this.update();
    this.update();
    this._movementModifier = 0.16;
  }

  _createClass(Snake, [{
    key: "setDirection",
    value: function setDirection(axis, direction) {
      if (this._direction.getAxis() === axis) return;

      this._previousDirection.set(this._direction.getAxis(), this._direction.getDirectionNumber());

      this._direction.set(axis, direction);
    }
  }, {
    key: "update",
    value: function update() {
      console.log("Updating snake...");
      this.applyDirection();
      this.draw();
    }
  }, {
    key: "draw",
    value: function draw() {
      console.log("Drawing snake...");
      var nextSegmentPosition = new Vector2_1.Vector2(0, 0);

      for (var i = 0; i < this._segments.length; i++) {
        var segment = this._segments[i];
        var tempPosition = new Vector2_1.Vector2(segment.position.x, segment.position.y);

        if (segment.isHead()) {
          segment.position.set(this.position.x, this.position.y);
          segment.setDirection(this._direction);
          segment.setHeadFrame();
        } else {
          var nextSegment = this._segments[i - 1];
          segment.setDirection(nextSegment.getPreviousDirection());
          segment.position.set(nextSegmentPosition.x, nextSegmentPosition.y);
          segment.updateSprite(nextSegment);
        }

        nextSegmentPosition = tempPosition;
        segment.update();
      }
    }
  }, {
    key: "levelUp",
    value: function levelUp() {
      this.increaseLength();
    }
  }, {
    key: "increaseLength",
    value: function increaseLength() {
      var lastSegment = this._segments[this._segments.length - 1];
      var direction = new MovementDirection_1.MovementDirection(lastSegment.getDirection().getAxis(), lastSegment.getDirection().getDirectionNumber());
      var position = new Vector2_1.Vector2(lastSegment.position.x, lastSegment.position.y);
      if (direction.isLeft()) position.set(position.x + app_1.TILE_SIZE, position.y);else if (direction.isRight()) position.set(position.x - app_1.TILE_SIZE, position.y);else if (direction.isUp()) position.set(position.x, position.y - app_1.TILE_SIZE);else if (direction.isDown()) position.set(position.x, position.y + app_1.TILE_SIZE);
      var newSegment = new SnakeSegment_1.SnakeSegment(position, direction, false);
      newSegment.setTail(true);
      lastSegment.setTail(false);
      lastSegment.updateSprite(this._segments[this._segments.length - 2]);
      newSegment.updateSprite(lastSegment);
      this.update();
      app_1.APPLICATION.render();
      this._segments[this._segments.length] = newSegment;
    }
  }, {
    key: "applyDirection",
    value: function applyDirection() {
      if (this._direction.getAxis() == Enums_1.Axis.X) {
        this.position.x += this._direction.getDirectionNumber() * this._movementModifier;
      }

      if (this._direction.getAxis() == Enums_1.Axis.Y) {
        this.position.y += this._direction.getDirectionNumber() * this._movementModifier;
      }
    }
  }, {
    key: "isLastSegment",
    value: function isLastSegment(i) {
      return i === this._segments.length - 1 ? true : false;
    }
  }, {
    key: "getHead",
    value: function getHead() {
      return this._segments[0];
    }
  }]);

  return Snake;
}();

exports.Snake = Snake;
},{"../types/Vector2":"ts/types/Vector2.ts","../types/Enums":"ts/types/Enums.ts","../types/MovementDirection":"ts/types/MovementDirection.ts","./SnakeSegment":"ts/objects/SnakeSegment.ts","~ts/app":"ts/app.ts"}],"ts/user/InputHandler.ts":[function(require,module,exports) {
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Enums_1 = require("../types/Enums");

var InputHandler = /*#__PURE__*/function () {
  function InputHandler() {
    var _this = this;

    _classCallCheck(this, InputHandler);

    this.lastControlKeyPressed = Enums_1.GameKey.LEFT;
    this.spaceKeyPressed = 0;

    this.onKeyUp = function (ev) {
      if (ev.keyCode === Enums_1.GameKey.SPACE) _this.spaceKeyPressed = ev.keyCode;else _this.lastControlKeyPressed = ev.keyCode;
    };
  }

  _createClass(InputHandler, [{
    key: "processInput",
    value: function processInput(snake, game) {
      var axis = this.lastControlKeyPressed === Enums_1.GameKey.UP || this.lastControlKeyPressed === Enums_1.GameKey.DOWN ? Enums_1.Axis.Y : Enums_1.Axis.X;
      var direction = this.lastControlKeyPressed === Enums_1.GameKey.LEFT || this.lastControlKeyPressed === Enums_1.GameKey.UP ? -1 : 1;
      snake.setDirection(axis, direction);

      if (this.spaceKeyPressed === Enums_1.GameKey.SPACE) {
        snake.update();
        this.spaceKeyPressed = 0;
      }
    }
  }]);

  return InputHandler;
}();

exports.InputHandler = InputHandler;
},{"../types/Enums":"ts/types/Enums.ts"}],"ts/helper/Random.ts":[function(require,module,exports) {
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var app_1 = require("~ts/app");

var Vector2_1 = require("~ts/types/Vector2");

var Random = /*#__PURE__*/function () {
  function Random() {
    _classCallCheck(this, Random);
  }

  _createClass(Random, null, [{
    key: "next",
    value: function next(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    }
  }, {
    key: "nextTile",
    value: function nextTile() {
      var min = 0;
      var max = app_1.ARENA_WIDTH / app_1.TILE_SIZE;
      var x = Math.floor(Math.random() * (max - min + 1) + min) * app_1.TILE_SIZE;
      min = 0;
      max = app_1.ARENA_HEIGHT / app_1.TILE_SIZE;
      var y = Math.floor(Math.random() * (max - min + 1) + min) * app_1.TILE_SIZE;
      return new Vector2_1.Vector2(x, y);
    }
  }]);

  return Random;
}();

exports.Random = Random;
},{"~ts/app":"ts/app.ts","~ts/types/Vector2":"ts/types/Vector2.ts"}],"ts/objects/Food.ts":[function(require,module,exports) {
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var GameObject_1 = require("~ts/types/GameObject");

var Vector2_1 = require("~ts/types/Vector2");

var TILESET = __importStar(require("~ts/helper/Tileset"));

var Random_1 = require("~ts/helper/Random");

var app_1 = require("~ts/app");

var Food = /*#__PURE__*/function (_GameObject_1$GameObj) {
  _inherits(Food, _GameObject_1$GameObj);

  var _super = _createSuper(Food);

  function Food() {
    var _this;

    _classCallCheck(this, Food);

    var position = new Vector2_1.Vector2(Random_1.Random.next(0, app_1.ARENA_WIDTH - app_1.TILE_SIZE), Random_1.Random.next(0, app_1.ARENA_HEIGHT - app_1.TILE_SIZE));
    _this = _super.call(this, new Vector2_1.Vector2(10 * app_1.TILE_SIZE, 16 * app_1.TILE_SIZE));

    _this.draw();

    return _this;
  }

  _createClass(Food, [{
    key: "update",
    value: function update() {}
  }, {
    key: "draw",
    value: function draw() {
      var fullTileset = new PIXI.Texture(PIXI.Texture.from("tileset").baseTexture);
      this._sprite = new PIXI.Sprite(fullTileset);
      this.setFrame(TILESET.BUNNY);
      this._sprite.x = this.position.x;
      this._sprite.y = this.position.y;
      app_1.APPLICATION.stage.addChild(this._sprite);
    }
  }, {
    key: "respawnAt",
    value: function respawnAt(position) {
      this._sprite.position.x = position.x;
      this._sprite.position.y = position.y;
    }
  }, {
    key: "onCollision",
    value: function onCollision(snake) {
      snake.levelUp();
      this.respawnAt(Random_1.Random.nextTile());
    }
  }]);

  return Food;
}(GameObject_1.GameObject);

exports.Food = Food;
},{"~ts/types/GameObject":"ts/types/GameObject.ts","~ts/types/Vector2":"ts/types/Vector2.ts","~ts/helper/Tileset":"ts/helper/Tileset.ts","~ts/helper/Random":"ts/helper/Random.ts","~ts/app":"ts/app.ts"}],"ts/user/CollisionHandler.ts":[function(require,module,exports) {
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var CollisionHandler = /*#__PURE__*/function () {
  function CollisionHandler() {
    _classCallCheck(this, CollisionHandler);
  }

  _createClass(CollisionHandler, [{
    key: "handleCollisions",
    value: function handleCollisions(snake, food) {
      if (this.collisionDetected(snake.getHead().getSprite().getBounds(), food.getSprite().getBounds())) {
        food.onCollision(snake);
      }
    }
  }, {
    key: "collisionDetected",
    value: function collisionDetected(ab, bb) {
      return ab.x + ab.width > bb.x && ab.x < bb.x + bb.width && ab.y + ab.height > bb.y && ab.y < bb.y + bb.height;
    }
  }]);

  return CollisionHandler;
}();

exports.CollisionHandler = CollisionHandler;
},{}],"ts/objects/GroundTile.ts":[function(require,module,exports) {
"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var GameObject_1 = require("~ts/types/GameObject");

var app_1 = require("~ts/app");

var TILESET = __importStar(require("~ts/helper/Tileset"));

var GroundTile = /*#__PURE__*/function (_GameObject_1$GameObj) {
  _inherits(GroundTile, _GameObject_1$GameObj);

  var _super = _createSuper(GroundTile);

  function GroundTile() {
    _classCallCheck(this, GroundTile);

    return _super.apply(this, arguments);
  }

  _createClass(GroundTile, [{
    key: "draw",
    value: function draw() {
      var fullTileset = new PIXI.Texture(PIXI.Texture.from("tileset").baseTexture);
      this._sprite = new PIXI.Sprite(fullTileset);
      this.setFrame(TILESET.GRASS);
      this._sprite.x = this.position.x;
      this._sprite.y = this.position.y;
      app_1.APPLICATION.stage.addChild(this._sprite);
    }
  }, {
    key: "onCollision",
    value: function onCollision(snake) {}
  }, {
    key: "update",
    value: function update() {}
  }]);

  return GroundTile;
}(GameObject_1.GameObject);

exports.GroundTile = GroundTile;
},{"~ts/types/GameObject":"ts/types/GameObject.ts","~ts/app":"ts/app.ts","~ts/helper/Tileset":"ts/helper/Tileset.ts"}],"ts/objects/Arena.ts":[function(require,module,exports) {
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var GroundTile_1 = require("./GroundTile");

var Vector2_1 = require("~ts/types/Vector2");

var app_1 = require("~ts/app");

var Arena = /*#__PURE__*/function () {
  function Arena() {
    _classCallCheck(this, Arena);

    this._tiles = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []];
  }

  _createClass(Arena, [{
    key: "draw",
    value: function draw() {
      for (var row = 0; row < app_1.ARENA_WIDTH / app_1.TILE_SIZE; row++) {
        for (var col = 0; col < app_1.ARENA_HEIGHT / app_1.TILE_SIZE; col++) {
          var position = new Vector2_1.Vector2(row * app_1.TILE_SIZE, col * app_1.TILE_SIZE);
          this._tiles[row][col] = new GroundTile_1.GroundTile(position);
          ;

          this._tiles[row][col].draw();
        }
      }
    }
  }]);

  return Arena;
}();

exports.Arena = Arena;
},{"./GroundTile":"ts/objects/GroundTile.ts","~ts/types/Vector2":"ts/types/Vector2.ts","~ts/app":"ts/app.ts"}],"ts/types/Timer.ts":[function(require,module,exports) {
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});
var ClockType;

(function (ClockType) {
  ClockType[ClockType["TIMED"] = 0] = "TIMED";
  ClockType[ClockType["INFINITE"] = 1] = "INFINITE";
})(ClockType = exports.ClockType || (exports.ClockType = {}));

var ClockTick;

(function (ClockTick) {
  ClockTick[ClockTick["EVEN"] = 0] = "EVEN";
  ClockTick[ClockTick["ODD"] = 1] = "ODD";
})(ClockTick = exports.ClockTick || (exports.ClockTick = {}));

var Timer = /*#__PURE__*/function () {
  function Timer(interval, duration, game) {
    var _this = this;

    _classCallCheck(this, Timer);

    this.handle = 0;
    this.tick = ClockTick.EVEN;
    this._isRunning = false;
    this._isPaused = false;

    this.onElapsed = function () {
      if (_this._isPaused) {
        return;
      }

      _this.tick = _this.tick === ClockTick.EVEN ? ClockTick.ODD : ClockTick.EVEN;

      _this._game.onClockTick();

      if (_this.type == ClockType.TIMED) {
        _this.stop();
      }
    };

    this.interval = interval;
    this._game = game;
    this.type = duration == 0 ? ClockType.INFINITE : ClockType.TIMED;
  }

  _createClass(Timer, [{
    key: "isRunning",
    value: function isRunning() {
      return this._isRunning;
    }
  }, {
    key: "isPaused",
    value: function isPaused() {
      return this._isPaused;
    }
  }, {
    key: "start",
    value: function start() {
      this._isRunning = true;
      this.handle = this.type == ClockType.INFINITE ? window.setInterval(this.onElapsed.bind(this), this.interval) : window.setTimeout(this.onElapsed.bind(this), this.interval);
    }
  }, {
    key: "stop",
    value: function stop() {
      this._isRunning = false;
      return this.type == ClockType.INFINITE ? window.clearInterval(this.handle) : window.clearTimeout(this.handle);
    }
  }, {
    key: "pause",
    value: function pause() {
      this._isPaused = true;
    }
  }, {
    key: "resume",
    value: function resume() {
      this._isPaused = false;
    }
  }]);

  return Timer;
}();

exports.Timer = Timer;
},{}],"ts/Game.ts":[function(require,module,exports) {
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Snake_1 = require("./objects/Snake");

var Vector2_1 = require("./types/Vector2");

var InputHandler_1 = require("./user/InputHandler");

var app_1 = require("./app");

var Food_1 = require("./objects/Food");

var CollisionHandler_1 = require("./user/CollisionHandler");

var Arena_1 = require("./objects/Arena");

var Timer_1 = require("./types/Timer");

var Game = /*#__PURE__*/function () {
  function Game() {
    _classCallCheck(this, Game);

    this._isRunning = false;
    console.log("Creating game...");
    this._timer = new Timer_1.Timer(150, 0, this);
    this._inputHandler = new InputHandler_1.InputHandler();
    this._collisionHandler = new CollisionHandler_1.CollisionHandler();
    this._arena = new Arena_1.Arena();
    document.body.appendChild(app_1.APPLICATION.view);

    this._arena.draw();

    this._snake = new Snake_1.Snake(new Vector2_1.Vector2(256, 256));
    this._food = new Food_1.Food();
    this.gameLoop();
  }

  _createClass(Game, [{
    key: "isRunning",
    value: function isRunning() {
      return this._timer.isRunning();
    }
  }, {
    key: "isPaused",
    value: function isPaused() {
      return this._timer.isPaused();
    }
  }, {
    key: "start",
    value: function start() {
      console.log("starting game");

      this._timer.start();
    }
  }, {
    key: "pause",
    value: function pause() {
      console.log("pausing game");

      this._timer.pause();
    }
  }, {
    key: "resume",
    value: function resume() {
      console.log("resuming game");

      this._timer.resume();
    }
  }, {
    key: "onClockTick",
    value: function onClockTick() {}
  }, {
    key: "gameLoop",
    value: function gameLoop() {
      var _this = this;

      app_1.APPLICATION.render();
      document.addEventListener('keyup', this._inputHandler.onKeyUp);

      this._inputHandler.processInput(this._snake, this);

      this._collisionHandler.handleCollisions(this._snake, this._food);

      this._snake.update();

      requestAnimationFrame(function () {
        return _this.gameLoop();
      });
    }
  }]);

  return Game;
}();

exports.Game = Game;
},{"./objects/Snake":"ts/objects/Snake.ts","./types/Vector2":"ts/types/Vector2.ts","./user/InputHandler":"ts/user/InputHandler.ts","./app":"ts/app.ts","./objects/Food":"ts/objects/Food.ts","./user/CollisionHandler":"ts/user/CollisionHandler.ts","./objects/Arena":"ts/objects/Arena.ts","./types/Timer":"ts/types/Timer.ts"}],"resources/images/Snake.png":[function(require,module,exports) {
module.exports = "/Snake.b1339938.png";
},{}],"ts/app.ts":[function(require,module,exports) {
"use strict";

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Game_1 = require("./Game");

var Snake_png_1 = __importDefault(require("../resources/images/Snake.png"));

exports.ARENA_WIDTH = 512;
exports.ARENA_HEIGHT = 512;
exports.TILE_SIZE = 16;
exports.APPLICATION = new PIXI.Application({
  width: exports.ARENA_WIDTH,
  height: exports.ARENA_HEIGHT,
  antialias: true,
  transparent: false,
  resolution: 1.5,
  backgroundColor: 0x1099bb
});
exports.APPLICATION.loader.add("tileset", Snake_png_1.default).load(setup);

function setup() {
  console.log("setup done");
  var game = new Game_1.Game();
}
},{"./Game":"ts/Game.ts","../resources/images/Snake.png":"resources/images/Snake.png"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "58137" + '/');

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
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","ts/app.ts"], null)
//# sourceMappingURL=/app.a0488aa9.js.map