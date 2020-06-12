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
  GameKey[GameKey["F"] = 70] = "F";
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

var AudioType;

(function (AudioType) {
  AudioType[AudioType["DIE"] = 0] = "DIE";
  AudioType[AudioType["EAT"] = 1] = "EAT";
  AudioType[AudioType["MUSIC"] = 2] = "MUSIC";
})(AudioType = exports.AudioType || (exports.AudioType = {}));
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
exports.ROCK_WALL = new PIXI.Rectangle(0, 0, 16, 16);
},{}],"ts/objects/snake/SnakeSegment.ts":[function(require,module,exports) {
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
    value: function onCollision(snake) {
      if (this.isHead()) return;
      snake.die();
    }
  }, {
    key: "update",
    value: function update() {
      this._sprite.position.x = this.position.x;
      this._sprite.position.y = this.position.y;
      app_1.APPLICATION.stage.addChild(this._sprite);
    }
  }, {
    key: "draw",
    value: function draw() {
      this._sprite = new PIXI.Sprite(new PIXI.Texture(PIXI.Texture.from("tileset").baseTexture));
      this.setFrame(TILESET.X_STRAIGHT);
      this._sprite.x = this.position.x;
      this._sprite.y = this.position.y;
      this._sprite.width = 33;
      this._sprite.height = 33;
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
      this._sprite.width = 33;
      this._sprite.height = 33;
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
},{"~ts/types/GameObject":"ts/types/GameObject.ts","~ts/app":"ts/app.ts","~ts/helper/Tileset":"ts/helper/Tileset.ts","~ts/types/MovementDirection":"ts/types/MovementDirection.ts","~ts/types/Enums":"ts/types/Enums.ts"}],"../resources/sfx/EatSound.ogg":[function(require,module,exports) {
module.exports = "/EatSound.124f633a.ogg";
},{}],"../resources/sfx/dieSound2.mp3":[function(require,module,exports) {
module.exports = "/dieSound2.5137d053.mp3";
},{}],"../resources/sfx/GreenForest.ogg":[function(require,module,exports) {
module.exports = "/GreenForest.60265882.ogg";
},{}],"ts/handlers/AudioPlayer.ts":[function(require,module,exports) {
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var EatSound_ogg_1 = __importDefault(require("../../../resources/sfx/EatSound.ogg"));

var dieSound2_mp3_1 = __importDefault(require("../../../resources/sfx/dieSound2.mp3"));

var GreenForest_ogg_1 = __importDefault(require("../../../resources/sfx/GreenForest.ogg"));

var Enums_1 = require("~ts/types/Enums");

var AudioPlayer = /*#__PURE__*/function () {
  function AudioPlayer() {
    _classCallCheck(this, AudioPlayer);

    this._eatAudio = new Audio(EatSound_ogg_1.default);
    this._dieAudio = new Audio(dieSound2_mp3_1.default);
    this._forestAudio = new Audio(GreenForest_ogg_1.default);
    this._forestAudio.loop = true;
    this._forestAudio.volume = .4;
  }

  _createClass(AudioPlayer, [{
    key: "playSound",
    value: function playSound(audioType) {
      switch (audioType) {
        case Enums_1.AudioType.EAT:
          this._eatAudio.play();

          break;

        case Enums_1.AudioType.DIE:
          this._dieAudio.play();

      }
    }
  }, {
    key: "toggleMusic",
    value: function toggleMusic() {
      if (this._forestAudio.paused) this._forestAudio.play();
    }
  }], [{
    key: "getInstance",
    value: function getInstance() {
      if (!this._instance) {
        this._instance = new AudioPlayer();
      }

      return this._instance;
    }
  }]);

  return AudioPlayer;
}();

exports.AudioPlayer = AudioPlayer;
},{"../../../resources/sfx/EatSound.ogg":"../resources/sfx/EatSound.ogg","../../../resources/sfx/dieSound2.mp3":"../resources/sfx/dieSound2.mp3","../../../resources/sfx/GreenForest.ogg":"../resources/sfx/GreenForest.ogg","~ts/types/Enums":"ts/types/Enums.ts"}],"ts/objects/snake/Snake.ts":[function(require,module,exports) {
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Vector2_1 = require("../../types/Vector2");

var Enums_1 = require("../../types/Enums");

var MovementDirection_1 = require("../../types/MovementDirection");

var SnakeSegment_1 = require("./SnakeSegment");

var app_1 = require("~ts/app");

var Game_1 = require("~ts/Game");

var AudioPlayer_1 = require("~ts/handlers/AudioPlayer");

var Snake = /*#__PURE__*/function () {
  function Snake(position) {
    _classCallCheck(this, Snake);

    this._movementModifier = 32;
    this._direction = new MovementDirection_1.MovementDirection(Enums_1.Axis.X, -1);
    this._previousDirection = new MovementDirection_1.MovementDirection(Enums_1.Axis.X, -1);
    this._isChangeDirectionCooldown = false;
    this._segments = [];
    this.position = position;
    this.initializeSnake();
  }

  _createClass(Snake, [{
    key: "setDirection",
    value: function setDirection(axis, direction) {
      if (this._direction.getAxis() === axis) return;
      if (this._isChangeDirectionCooldown) return;
      this._isChangeDirectionCooldown = true;

      this._previousDirection.set(this._direction.getAxis(), this._direction.getDirectionNumber());

      this._direction.set(axis, direction);
    }
  }, {
    key: "getSegments",
    value: function getSegments() {
      return this._segments;
    }
  }, {
    key: "initializeSnake",
    value: function initializeSnake() {
      this._segments[0] = new SnakeSegment_1.SnakeSegment(new Vector2_1.Vector2(this.position.x, this.position.y), this._direction, true);
      this._segments[1] = new SnakeSegment_1.SnakeSegment(new Vector2_1.Vector2(17 * app_1.TILE_SIZE + 0 * app_1.TILE_SIZE, 16 * app_1.TILE_SIZE), new MovementDirection_1.MovementDirection(this._direction.getAxis(), this._direction.getDirectionNumber()));
      this._segments[2] = new SnakeSegment_1.SnakeSegment(new Vector2_1.Vector2(17 * app_1.TILE_SIZE + 1 * app_1.TILE_SIZE, 16 * app_1.TILE_SIZE), new MovementDirection_1.MovementDirection(this._direction.getAxis(), this._direction.getDirectionNumber()));

      this._segments[2].setTail(true);
    }
  }, {
    key: "update",
    value: function update() {
      this.applyDirectionToPosition();
      this.draw();
      this._isChangeDirectionCooldown = false;
    }
  }, {
    key: "draw",
    value: function draw() {
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
      AudioPlayer_1.AudioPlayer.getInstance().playSound(Enums_1.AudioType.EAT);
      this.increaseLength();
      Game_1.Game.getInstance().increaseScore();
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
      this._segments[this._segments.length] = newSegment;
    }
  }, {
    key: "applyDirectionToPosition",
    value: function applyDirectionToPosition() {
      if (this._direction.getAxis() == Enums_1.Axis.X) {
        this.position.x += this._direction.getDirectionNumber() * this._movementModifier;
      }

      if (this._direction.getAxis() == Enums_1.Axis.Y) {
        this.position.y += this._direction.getDirectionNumber() * this._movementModifier;
      }
    }
  }, {
    key: "getHead",
    value: function getHead() {
      return this._segments[0];
    }
  }, {
    key: "die",
    value: function die() {
      AudioPlayer_1.AudioPlayer.getInstance().playSound(Enums_1.AudioType.DIE);
      Game_1.Game.getInstance().endGame();
    }
  }]);

  return Snake;
}();

exports.Snake = Snake;
},{"../../types/Vector2":"ts/types/Vector2.ts","../../types/Enums":"ts/types/Enums.ts","../../types/MovementDirection":"ts/types/MovementDirection.ts","./SnakeSegment":"ts/objects/snake/SnakeSegment.ts","~ts/app":"ts/app.ts","~ts/Game":"ts/Game.ts","~ts/handlers/AudioPlayer":"ts/handlers/AudioPlayer.ts"}],"ts/handlers/InputHandler.ts":[function(require,module,exports) {
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
    this.fKeyPressed = 0;

    this.onKeyUp = function (ev) {
      if (ev.keyCode === Enums_1.GameKey.SPACE) _this.spaceKeyPressed = ev.keyCode;else if (ev.keyCode === Enums_1.GameKey.F) _this.fKeyPressed = ev.keyCode;else _this.lastControlKeyPressed = ev.keyCode;
    };
  }

  _createClass(InputHandler, [{
    key: "processInput",
    value: function processInput(snake, game) {
      var axis = this.lastControlKeyPressed === Enums_1.GameKey.UP || this.lastControlKeyPressed === Enums_1.GameKey.DOWN ? Enums_1.Axis.Y : Enums_1.Axis.X;
      var direction = this.lastControlKeyPressed === Enums_1.GameKey.LEFT || this.lastControlKeyPressed === Enums_1.GameKey.UP ? -1 : 1;
      snake.setDirection(axis, direction);

      if (this.fKeyPressed === Enums_1.GameKey.F) {
        snake.update();
        this.fKeyPressed = 0;
      }

      if (this.spaceKeyPressed === Enums_1.GameKey.SPACE) {
        if (!game.isRunning()) game.start();else {
          if (game.isPaused()) game.resume();else game.pause();
        }
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
    value: function nextTile(attempt) {
      var min = 1;
      var max = (app_1.ARENA_WIDTH - 2 * app_1.TILE_SIZE) / app_1.TILE_SIZE;
      var x = Math.floor(Math.random() * (max - min + 1) + min) * app_1.TILE_SIZE;
      min = 3;
      max = (app_1.ARENA_HEIGHT - 2 * app_1.TILE_SIZE) / app_1.TILE_SIZE;
      var y = Math.floor(Math.random() * (max - min + 1) + min) * app_1.TILE_SIZE;
      var tile = new Vector2_1.Vector2(x, y);
      return tile;
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

var TILESET = __importStar(require("~ts/helper/Tileset"));

var Random_1 = require("~ts/helper/Random");

var app_1 = require("~ts/app");

var Food = /*#__PURE__*/function (_GameObject_1$GameObj) {
  _inherits(Food, _GameObject_1$GameObj);

  var _super = _createSuper(Food);

  function Food() {
    var _this;

    _classCallCheck(this, Food);

    _this = _super.call(this, Random_1.Random.nextTile());
    _this._MAXSIZE = app_1.TILE_SIZE - 6;
    _this._MINSIZE = app_1.TILE_SIZE / 1.3;
    _this._isShrinking = true;
    _this._resizingModifier = .2;

    _this.draw();

    return _this;
  }

  _createClass(Food, [{
    key: "update",
    value: function update() {
      this.resize();
      app_1.APPLICATION.stage.addChild(this._sprite);
    }
  }, {
    key: "resize",
    value: function resize() {
      if (this._isShrinking) {
        this._sprite.width -= this._resizingModifier * Random_1.Random.next(1, 3);
        this._sprite.height -= this._resizingModifier * Random_1.Random.next(1, 3);

        if (this._sprite.height < this._MINSIZE) {
          this._isShrinking = false;
        }
      } else {
        this._sprite.width += this._resizingModifier * Random_1.Random.next(1, 3);
        this._sprite.height += this._resizingModifier * Random_1.Random.next(1, 3);

        if (this._sprite.height > this._MAXSIZE) {
          this._isShrinking = true;
        }
      }
    }
  }, {
    key: "draw",
    value: function draw() {
      var fullTileset = new PIXI.Texture(PIXI.Texture.from("tileset").baseTexture);
      this._sprite = new PIXI.Sprite(fullTileset);
      this.setFrame(TILESET.BUNNY);
      this._sprite.x = this.position.x;
      this._sprite.y = this.position.y;
      this._sprite.width = this._MAXSIZE;
      this._sprite.height = this._MAXSIZE;

      this._sprite.anchor.set(.5, .5);

      this._sprite.x += 15;
      this._sprite.y += 17;
    }
  }, {
    key: "respawnAt",
    value: function respawnAt(position) {
      this._sprite.position.x = position.x + 15;
      this._sprite.position.y = position.y + 17;
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
},{"~ts/types/GameObject":"ts/types/GameObject.ts","~ts/helper/Tileset":"ts/helper/Tileset.ts","~ts/helper/Random":"ts/helper/Random.ts","~ts/app":"ts/app.ts"}],"ts/handlers/CollisionHandler.ts":[function(require,module,exports) {
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var app_1 = require("~ts/app");

var CollisionHandler = /*#__PURE__*/function () {
  function CollisionHandler() {
    _classCallCheck(this, CollisionHandler);
  }

  _createClass(CollisionHandler, [{
    key: "handleCollisions",
    value: function handleCollisions(snake, foods) {
      this.handleFoodCollisions(snake, foods);
      this.handleBodyCollisions(snake);
      this.handleWallCollisions(snake);
    }
  }, {
    key: "handleBodyCollisions",
    value: function handleBodyCollisions(snake) {
      var segments = snake.getSegments();
      var head = snake.getHead();

      for (var i = 0; i < segments.length; i++) {
        if (segments[i].isHead()) continue;

        if (this.segmentCollisionDetected(head.getSprite().getBounds(), segments[i].getSprite().getBounds())) {
          console.log("Collision found between snake and segment:");
          console.log(head.getSprite().getBounds());
          console.log(segments[i].getSprite().getBounds());
          snake.die();
        }
      }
    }
  }, {
    key: "handleFoodCollisions",
    value: function handleFoodCollisions(snake, foods) {
      var _this = this;

      foods.forEach(function (food) {
        if (_this.collisionDetected(snake.getHead().getSprite().getBounds(), food.getSprite().getBounds())) {
          food.onCollision(snake);
        }
      });
    }
  }, {
    key: "handleWallCollisions",
    value: function handleWallCollisions(snake) {
      if (this.hitArenaBounds(snake)) {
        snake.die();
      }
    }
  }, {
    key: "collisionDetected",
    value: function collisionDetected(ab, bb) {
      return ab.x + ab.width > bb.x && ab.x < bb.x + bb.width && ab.y + ab.height > bb.y && ab.y < bb.y + bb.height;
    }
  }, {
    key: "segmentCollisionDetected",
    value: function segmentCollisionDetected(ab, bb) {
      var modifier = 20;
      return ab.x + ab.width - modifier > bb.x && ab.x < bb.x + bb.width - modifier && ab.y + ab.height - modifier > bb.y && ab.y < bb.y + bb.height - modifier;
    }
  }, {
    key: "hitArenaBounds",
    value: function hitArenaBounds(snake) {
      return snake.position.x < app_1.TILE_SIZE || snake.position.x > app_1.ARENA_WIDTH - 2 * app_1.TILE_SIZE || snake.position.y < app_1.TILE_SIZE * 3 || snake.position.y > app_1.ARENA_HEIGHT - 2 * app_1.TILE_SIZE;
    }
  }]);

  return CollisionHandler;
}();

exports.CollisionHandler = CollisionHandler;
},{"~ts/app":"ts/app.ts"}],"ts/objects/GroundTile.ts":[function(require,module,exports) {
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

Object.defineProperty(exports, "__esModule", {
  value: true
});

var GameObject_1 = require("~ts/types/GameObject");

var app_1 = require("~ts/app");

var GroundTile = /*#__PURE__*/function (_GameObject_1$GameObj) {
  _inherits(GroundTile, _GameObject_1$GameObj);

  var _super = _createSuper(GroundTile);

  function GroundTile(position, fileName, frame) {
    var _this;

    _classCallCheck(this, GroundTile);

    _this = _super.call(this, position);
    _this._baseTexture = new PIXI.Texture(PIXI.Texture.from(fileName).baseTexture);
    _this._frame = frame;
    return _this;
  }

  _createClass(GroundTile, [{
    key: "draw",
    value: function draw() {
      this._sprite = new PIXI.Sprite(this._baseTexture);
      this.setFrame(this._frame);
      this._sprite.x = this.position.x;
      this._sprite.y = this.position.y;
      this._sprite.width = 33;
      this._sprite.height = 33;
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
},{"~ts/types/GameObject":"ts/types/GameObject.ts","~ts/app":"ts/app.ts"}],"ts/UI/Arena.ts":[function(require,module,exports) {
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

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

var GroundTile_1 = require("../objects/GroundTile");

var Vector2_1 = require("~ts/types/Vector2");

var app_1 = require("~ts/app");

var TILESET = __importStar(require("~ts/helper/Tileset"));

var Arena = /*#__PURE__*/function () {
  function Arena() {
    _classCallCheck(this, Arena);

    this.availableTiles = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []];
    this._filename = "tileset";
    this._frame = TILESET.GRASS;
    this._scoreText = new PIXI.Text('0', {
      fontFamily: 'Arial',
      fontSize: 24,
      fill: 0xffffff,
      align: 'center'
    });
    this._scoreTextPosX = 73;
    this.initializeTileAvailability();
  }

  _createClass(Arena, [{
    key: "initializeTileAvailability",
    value: function initializeTileAvailability() {
      for (var col = 0; col < app_1.ARENA_WIDTH / app_1.TILE_SIZE; col++) {
        for (var row = 0; row < app_1.ARENA_HEIGHT / app_1.TILE_SIZE; row++) {
          this.availableTiles[row][col] = false;
        }
      }
    }
  }, {
    key: "draw",
    value: function draw() {
      for (var col = 0; col < app_1.ARENA_WIDTH / app_1.TILE_SIZE; col++) {
        for (var row = 0; row < app_1.ARENA_HEIGHT / app_1.TILE_SIZE; row++) {
          var position = new Vector2_1.Vector2(col * app_1.TILE_SIZE, row * app_1.TILE_SIZE);
          if (row != 1) new GroundTile_1.GroundTile(position, this._filename, this._frame).draw();
          this.drawRockWalls(col, row, position);
          this.drawScoreSign(col, row, position);
        }
      }
    }
  }, {
    key: "drawRockWalls",
    value: function drawRockWalls(col, row, position) {
      if (col == 0) new GroundTile_1.GroundTile(position, "rock_tileset", new PIXI.Rectangle(96, 96, 32, 32)).draw();
      if (col == app_1.ARENA_WIDTH / app_1.TILE_SIZE - 1) new GroundTile_1.GroundTile(position, "rock_tileset", new PIXI.Rectangle(0, 96, 32, 32)).draw();
      if (row == app_1.ARENA_WIDTH / app_1.TILE_SIZE - 1) new GroundTile_1.GroundTile(position, "rock_tileset", new PIXI.Rectangle(96, 0, 32, 32)).draw();
      if (row == 0) new GroundTile_1.GroundTile(position, "rock_tileset", new PIXI.Rectangle(64, 96, 32, 32)).draw();

      if (row == 1) {
        if (col != 1 && col != 2) new GroundTile_1.GroundTile(position, "rock_tileset", new PIXI.Rectangle(64, 96, 32, 32)).draw();
      }

      if (row == 2) new GroundTile_1.GroundTile(position, "rock_tileset", new PIXI.Rectangle(64, 128, 32, 32)).draw();
    }
  }, {
    key: "drawScoreSign",
    value: function drawScoreSign(col, row, position) {
      if (row == 1) {
        if (col == 1) {
          var bunny = new GroundTile_1.GroundTile(position, "tileset", TILESET.BUNNY);
          bunny.draw();
        } else if (col == 2) {
          this._scoreText.position.x = this._scoreTextPosX;
          this._scoreText.position.y = position.y + 4;
          app_1.APPLICATION.stage.addChild(this._scoreText);
        }
      }
    }
  }, {
    key: "setScoreText",
    value: function setScoreText(score) {
      if (score > 9) {
        this._scoreTextPosX = 67;
        this._scoreText.position.x = this._scoreTextPosX;
      }

      this._scoreText.text = score.toString();
    }
  }], [{
    key: "getInstance",
    value: function getInstance() {
      if (!this._instance) {
        this._instance = new Arena();
      }

      return this._instance;
    }
  }]);

  return Arena;
}();

exports.Arena = Arena;
},{"../objects/GroundTile":"ts/objects/GroundTile.ts","~ts/types/Vector2":"ts/types/Vector2.ts","~ts/app":"ts/app.ts","~ts/helper/Tileset":"ts/helper/Tileset.ts"}],"ts/handlers/Timer.ts":[function(require,module,exports) {
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
},{}],"ts/UI/GUI.ts":[function(require,module,exports) {
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var app_1 = require("~ts/app");

var GUI = /*#__PURE__*/function () {
  function GUI() {
    _classCallCheck(this, GUI);

    this._windowWidth = 600;
    this._windowHeight = 400;
    this._borderWidth = 20;
    this._highScoreText = [];
    this.drawMainMenu();
  }

  _createClass(GUI, [{
    key: "drawMainMenu",
    value: function drawMainMenu() {
      this._mainContainer = new PIXI.Container();
      this._mainContainer.name = "MAIN_MENU";
      this._mainContainer.pivot = new PIXI.Point(0, 0);
      this._mainContainer.position.x = 0;
      this._mainContainer.position.y = 0;
      this._windowContainer = new PIXI.Container();

      this._mainContainer.addChild(this._windowContainer);

      this._windowContainer.width = this._windowWidth;
      this._windowContainer.height = 400;
      this._windowContainer.position.x = app_1.ARENA_WIDTH / 2 - this._windowWidth / 2;
      this._windowContainer.position.y = app_1.ARENA_HEIGHT / 2 - this._windowHeight / 1.5;
      this.drawMenu();
      this.printStartInstructions();
      app_1.APPLICATION.stage.addChild(this._mainContainer);
    }
  }, {
    key: "drawMenu",
    value: function drawMenu() {
      var graphics = new PIXI.Graphics();
      graphics.beginFill(0X193018, 0.7);
      graphics.drawRect(-this._windowContainer.position.x, -this._windowContainer.position.y, app_1.ARENA_WIDTH, app_1.ARENA_HEIGHT);
      graphics.endFill();
      graphics.beginFill(0x4f3111, .9);
      graphics.drawRect(-this._borderWidth / 2, -this._borderWidth / 2, this._windowWidth + this._borderWidth, this._windowHeight + this._borderWidth);
      graphics.endFill();
      graphics.beginFill(0x8a5720, 0.7);
      graphics.drawRect(0, 0, this._windowWidth, this._windowHeight);
      graphics.endFill();

      this._windowContainer.addChild(graphics);
    }
  }, {
    key: "printHighscore",
    value: function printHighscore(scores) {
      console.log("Printing highscore");
      var titleText = new PIXI.Text("HIGHSCORE", {
        fontFamily: 'Arial',
        fontSize: 17,
        fill: 0xffffff,
        align: 'left'
      });
      titleText.position = new PIXI.Point(20, 20);

      this._windowContainer.addChild(titleText);

      var score;
      var entry;

      for (var i = 0; i < scores.length; i++) {
        score = scores[i];
        entry = i + 1 + ". " + score.username + " ate " + score.score + " bunnies!";
        this._highScoreText[i] = new PIXI.Text(entry, {
          fontFamily: 'Arial',
          fontSize: 14,
          fill: 0xffffff,
          align: 'left'
        });
        this._highScoreText[i].position = new PIXI.Point(20, (i + 2) * 23);

        this._windowContainer.addChild(this._highScoreText[i]);
      }
    }
  }, {
    key: "printStartInstructions",
    value: function printStartInstructions() {
      var text = new PIXI.Text('PRESS SPACE TO START', {
        fontFamily: 'Arial',
        fontSize: 24,
        fill: 0xffffff,
        align: 'center'
      });
      text.position = new PIXI.Point(this._windowWidth / 2, this._windowHeight - 30);
      text.anchor = new PIXI.Point(.5, .5);

      this._windowContainer.addChild(text);
    }
  }, {
    key: "toggleMenu",
    value: function toggleMenu() {
      this._mainContainer.visible = !this._mainContainer.visible;
    }
  }], [{
    key: "getInstance",
    value: function getInstance() {
      if (!this._instance) {
        this._instance = new GUI();
      }

      return this._instance;
    }
  }]);

  return GUI;
}();

exports.GUI = GUI;
},{"~ts/app":"ts/app.ts"}],"../node_modules/axios/lib/helpers/bind.js":[function(require,module,exports) {
'use strict';

module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};

},{}],"../node_modules/axios/lib/utils.js":[function(require,module,exports) {
'use strict';

var bind = require('./helpers/bind');

/*global toString:true*/

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is a Buffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Buffer, otherwise false
 */
function isBuffer(val) {
  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor)
    && typeof val.constructor.isBuffer === 'function' && val.constructor.isBuffer(val);
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return (typeof FormData !== 'undefined') && (val instanceof FormData);
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && (navigator.product === 'ReactNative' ||
                                           navigator.product === 'NativeScript' ||
                                           navigator.product === 'NS')) {
    return false;
  }
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = merge(result[key], val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Function equal to merge with the difference being that no reference
 * to original objects is kept.
 *
 * @see merge
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function deepMerge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = deepMerge(result[key], val);
    } else if (typeof val === 'object') {
      result[key] = deepMerge({}, val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  deepMerge: deepMerge,
  extend: extend,
  trim: trim
};

},{"./helpers/bind":"../node_modules/axios/lib/helpers/bind.js"}],"../node_modules/axios/lib/helpers/buildURL.js":[function(require,module,exports) {
'use strict';

var utils = require('./../utils');

function encode(val) {
  return encodeURIComponent(val).
    replace(/%40/gi, '@').
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      } else {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    var hashmarkIndex = url.indexOf('#');
    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }

    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};

},{"./../utils":"../node_modules/axios/lib/utils.js"}],"../node_modules/axios/lib/core/InterceptorManager.js":[function(require,module,exports) {
'use strict';

var utils = require('./../utils');

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;

},{"./../utils":"../node_modules/axios/lib/utils.js"}],"../node_modules/axios/lib/core/transformData.js":[function(require,module,exports) {
'use strict';

var utils = require('./../utils');

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });

  return data;
};

},{"./../utils":"../node_modules/axios/lib/utils.js"}],"../node_modules/axios/lib/cancel/isCancel.js":[function(require,module,exports) {
'use strict';

module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};

},{}],"../node_modules/axios/lib/helpers/normalizeHeaderName.js":[function(require,module,exports) {
'use strict';

var utils = require('../utils');

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};

},{"../utils":"../node_modules/axios/lib/utils.js"}],"../node_modules/axios/lib/core/enhanceError.js":[function(require,module,exports) {
'use strict';

/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */
module.exports = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }

  error.request = request;
  error.response = response;
  error.isAxiosError = true;

  error.toJSON = function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: this.config,
      code: this.code
    };
  };
  return error;
};

},{}],"../node_modules/axios/lib/core/createError.js":[function(require,module,exports) {
'use strict';

var enhanceError = require('./enhanceError');

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};

},{"./enhanceError":"../node_modules/axios/lib/core/enhanceError.js"}],"../node_modules/axios/lib/core/settle.js":[function(require,module,exports) {
'use strict';

var createError = require('./createError');

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  if (!validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response.request,
      response
    ));
  }
};

},{"./createError":"../node_modules/axios/lib/core/createError.js"}],"../node_modules/axios/lib/helpers/isAbsoluteURL.js":[function(require,module,exports) {
'use strict';

/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};

},{}],"../node_modules/axios/lib/helpers/combineURLs.js":[function(require,module,exports) {
'use strict';

/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
};

},{}],"../node_modules/axios/lib/core/buildFullPath.js":[function(require,module,exports) {
'use strict';

var isAbsoluteURL = require('../helpers/isAbsoluteURL');
var combineURLs = require('../helpers/combineURLs');

/**
 * Creates a new URL by combining the baseURL with the requestedURL,
 * only when the requestedURL is not already an absolute URL.
 * If the requestURL is absolute, this function returns the requestedURL untouched.
 *
 * @param {string} baseURL The base URL
 * @param {string} requestedURL Absolute or relative URL to combine
 * @returns {string} The combined full path
 */
module.exports = function buildFullPath(baseURL, requestedURL) {
  if (baseURL && !isAbsoluteURL(requestedURL)) {
    return combineURLs(baseURL, requestedURL);
  }
  return requestedURL;
};

},{"../helpers/isAbsoluteURL":"../node_modules/axios/lib/helpers/isAbsoluteURL.js","../helpers/combineURLs":"../node_modules/axios/lib/helpers/combineURLs.js"}],"../node_modules/axios/lib/helpers/parseHeaders.js":[function(require,module,exports) {
'use strict';

var utils = require('./../utils');

// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = [
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
];

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }
      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });

  return parsed;
};

},{"./../utils":"../node_modules/axios/lib/utils.js"}],"../node_modules/axios/lib/helpers/isURLSameOrigin.js":[function(require,module,exports) {
'use strict';

var utils = require('./../utils');

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
    (function standardBrowserEnv() {
      var msie = /(msie|trident)/i.test(navigator.userAgent);
      var urlParsingNode = document.createElement('a');
      var originURL;

      /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
      function resolveURL(url) {
        var href = url;

        if (msie) {
        // IE needs attribute set twice to normalize properties
          urlParsingNode.setAttribute('href', href);
          href = urlParsingNode.href;
        }

        urlParsingNode.setAttribute('href', href);

        // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
        return {
          href: urlParsingNode.href,
          protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
          host: urlParsingNode.host,
          search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
          hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
          hostname: urlParsingNode.hostname,
          port: urlParsingNode.port,
          pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
            urlParsingNode.pathname :
            '/' + urlParsingNode.pathname
        };
      }

      originURL = resolveURL(window.location.href);

      /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
      return function isURLSameOrigin(requestURL) {
        var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
        return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
      };
    })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return function isURLSameOrigin() {
        return true;
      };
    })()
);

},{"./../utils":"../node_modules/axios/lib/utils.js"}],"../node_modules/axios/lib/helpers/cookies.js":[function(require,module,exports) {
'use strict';

var utils = require('./../utils');

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
    (function standardBrowserEnv() {
      return {
        write: function write(name, value, expires, path, domain, secure) {
          var cookie = [];
          cookie.push(name + '=' + encodeURIComponent(value));

          if (utils.isNumber(expires)) {
            cookie.push('expires=' + new Date(expires).toGMTString());
          }

          if (utils.isString(path)) {
            cookie.push('path=' + path);
          }

          if (utils.isString(domain)) {
            cookie.push('domain=' + domain);
          }

          if (secure === true) {
            cookie.push('secure');
          }

          document.cookie = cookie.join('; ');
        },

        read: function read(name) {
          var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
          return (match ? decodeURIComponent(match[3]) : null);
        },

        remove: function remove(name) {
          this.write(name, '', Date.now() - 86400000);
        }
      };
    })() :

  // Non standard browser env (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return {
        write: function write() {},
        read: function read() { return null; },
        remove: function remove() {}
      };
    })()
);

},{"./../utils":"../node_modules/axios/lib/utils.js"}],"../node_modules/axios/lib/adapters/xhr.js":[function(require,module,exports) {
'use strict';

var utils = require('./../utils');
var settle = require('./../core/settle');
var buildURL = require('./../helpers/buildURL');
var buildFullPath = require('../core/buildFullPath');
var parseHeaders = require('./../helpers/parseHeaders');
var isURLSameOrigin = require('./../helpers/isURLSameOrigin');
var createError = require('../core/createError');

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password || '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    var fullPath = buildFullPath(config.baseURL, config.url);
    request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    // Listen for ready state
    request.onreadystatechange = function handleLoad() {
      if (!request || request.readyState !== 4) {
        return;
      }

      // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request
      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      }

      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

      // Clean up request
      request = null;
    };

    // Handle browser request cancellation (as opposed to a manual cancellation)
    request.onabort = function handleAbort() {
      if (!request) {
        return;
      }

      reject(createError('Request aborted', config, 'ECONNABORTED', request));

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      var timeoutErrorMessage = 'timeout of ' + config.timeout + 'ms exceeded';
      if (config.timeoutErrorMessage) {
        timeoutErrorMessage = config.timeoutErrorMessage;
      }
      reject(createError(timeoutErrorMessage, config, 'ECONNABORTED',
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      var cookies = require('./../helpers/cookies');

      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName ?
        cookies.read(config.xsrfCookieName) :
        undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (!utils.isUndefined(config.withCredentials)) {
      request.withCredentials = !!config.withCredentials;
    }

    // Add responseType to request if needed
    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
        if (config.responseType !== 'json') {
          throw e;
        }
      }
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (requestData === undefined) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};

},{"./../utils":"../node_modules/axios/lib/utils.js","./../core/settle":"../node_modules/axios/lib/core/settle.js","./../helpers/buildURL":"../node_modules/axios/lib/helpers/buildURL.js","../core/buildFullPath":"../node_modules/axios/lib/core/buildFullPath.js","./../helpers/parseHeaders":"../node_modules/axios/lib/helpers/parseHeaders.js","./../helpers/isURLSameOrigin":"../node_modules/axios/lib/helpers/isURLSameOrigin.js","../core/createError":"../node_modules/axios/lib/core/createError.js","./../helpers/cookies":"../node_modules/axios/lib/helpers/cookies.js"}],"../node_modules/process/browser.js":[function(require,module,exports) {

// shim for using process in browser
var process = module.exports = {}; // cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
  throw new Error('setTimeout has not been defined');
}

function defaultClearTimeout() {
  throw new Error('clearTimeout has not been defined');
}

(function () {
  try {
    if (typeof setTimeout === 'function') {
      cachedSetTimeout = setTimeout;
    } else {
      cachedSetTimeout = defaultSetTimout;
    }
  } catch (e) {
    cachedSetTimeout = defaultSetTimout;
  }

  try {
    if (typeof clearTimeout === 'function') {
      cachedClearTimeout = clearTimeout;
    } else {
      cachedClearTimeout = defaultClearTimeout;
    }
  } catch (e) {
    cachedClearTimeout = defaultClearTimeout;
  }
})();

function runTimeout(fun) {
  if (cachedSetTimeout === setTimeout) {
    //normal enviroments in sane situations
    return setTimeout(fun, 0);
  } // if setTimeout wasn't available but was latter defined


  if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
    cachedSetTimeout = setTimeout;
    return setTimeout(fun, 0);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedSetTimeout(fun, 0);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
      return cachedSetTimeout.call(null, fun, 0);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
      return cachedSetTimeout.call(this, fun, 0);
    }
  }
}

function runClearTimeout(marker) {
  if (cachedClearTimeout === clearTimeout) {
    //normal enviroments in sane situations
    return clearTimeout(marker);
  } // if clearTimeout wasn't available but was latter defined


  if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
    cachedClearTimeout = clearTimeout;
    return clearTimeout(marker);
  }

  try {
    // when when somebody has screwed with setTimeout but no I.E. maddness
    return cachedClearTimeout(marker);
  } catch (e) {
    try {
      // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
      return cachedClearTimeout.call(null, marker);
    } catch (e) {
      // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
      // Some versions of I.E. have different rules for clearTimeout vs setTimeout
      return cachedClearTimeout.call(this, marker);
    }
  }
}

var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
  if (!draining || !currentQueue) {
    return;
  }

  draining = false;

  if (currentQueue.length) {
    queue = currentQueue.concat(queue);
  } else {
    queueIndex = -1;
  }

  if (queue.length) {
    drainQueue();
  }
}

function drainQueue() {
  if (draining) {
    return;
  }

  var timeout = runTimeout(cleanUpNextTick);
  draining = true;
  var len = queue.length;

  while (len) {
    currentQueue = queue;
    queue = [];

    while (++queueIndex < len) {
      if (currentQueue) {
        currentQueue[queueIndex].run();
      }
    }

    queueIndex = -1;
    len = queue.length;
  }

  currentQueue = null;
  draining = false;
  runClearTimeout(timeout);
}

process.nextTick = function (fun) {
  var args = new Array(arguments.length - 1);

  if (arguments.length > 1) {
    for (var i = 1; i < arguments.length; i++) {
      args[i - 1] = arguments[i];
    }
  }

  queue.push(new Item(fun, args));

  if (queue.length === 1 && !draining) {
    runTimeout(drainQueue);
  }
}; // v8 likes predictible objects


function Item(fun, array) {
  this.fun = fun;
  this.array = array;
}

Item.prototype.run = function () {
  this.fun.apply(null, this.array);
};

process.title = 'browser';
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues

process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) {
  return [];
};

process.binding = function (name) {
  throw new Error('process.binding is not supported');
};

process.cwd = function () {
  return '/';
};

process.chdir = function (dir) {
  throw new Error('process.chdir is not supported');
};

process.umask = function () {
  return 0;
};
},{}],"../node_modules/axios/lib/defaults.js":[function(require,module,exports) {
var process = require("process");
'use strict';

var utils = require('./utils');
var normalizeHeaderName = require('./helpers/normalizeHeaderName');

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = require('./adapters/xhr');
  } else if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {
    // For node use HTTP adapter
    adapter = require('./adapters/http');
  }
  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Accept');
    normalizeHeaderName(headers, 'Content-Type');
    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch (e) { /* Ignore */ }
    }
    return data;
  }],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;

},{"./utils":"../node_modules/axios/lib/utils.js","./helpers/normalizeHeaderName":"../node_modules/axios/lib/helpers/normalizeHeaderName.js","./adapters/xhr":"../node_modules/axios/lib/adapters/xhr.js","./adapters/http":"../node_modules/axios/lib/adapters/xhr.js","process":"../node_modules/process/browser.js"}],"../node_modules/axios/lib/core/dispatchRequest.js":[function(require,module,exports) {
'use strict';

var utils = require('./../utils');
var transformData = require('./transformData');
var isCancel = require('../cancel/isCancel');
var defaults = require('../defaults');

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData(
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData(
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData(
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};

},{"./../utils":"../node_modules/axios/lib/utils.js","./transformData":"../node_modules/axios/lib/core/transformData.js","../cancel/isCancel":"../node_modules/axios/lib/cancel/isCancel.js","../defaults":"../node_modules/axios/lib/defaults.js"}],"../node_modules/axios/lib/core/mergeConfig.js":[function(require,module,exports) {
'use strict';

var utils = require('../utils');

/**
 * Config-specific merge-function which creates a new config-object
 * by merging two configuration objects together.
 *
 * @param {Object} config1
 * @param {Object} config2
 * @returns {Object} New object resulting from merging config2 to config1
 */
module.exports = function mergeConfig(config1, config2) {
  // eslint-disable-next-line no-param-reassign
  config2 = config2 || {};
  var config = {};

  var valueFromConfig2Keys = ['url', 'method', 'params', 'data'];
  var mergeDeepPropertiesKeys = ['headers', 'auth', 'proxy'];
  var defaultToConfig2Keys = [
    'baseURL', 'url', 'transformRequest', 'transformResponse', 'paramsSerializer',
    'timeout', 'withCredentials', 'adapter', 'responseType', 'xsrfCookieName',
    'xsrfHeaderName', 'onUploadProgress', 'onDownloadProgress',
    'maxContentLength', 'validateStatus', 'maxRedirects', 'httpAgent',
    'httpsAgent', 'cancelToken', 'socketPath'
  ];

  utils.forEach(valueFromConfig2Keys, function valueFromConfig2(prop) {
    if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    }
  });

  utils.forEach(mergeDeepPropertiesKeys, function mergeDeepProperties(prop) {
    if (utils.isObject(config2[prop])) {
      config[prop] = utils.deepMerge(config1[prop], config2[prop]);
    } else if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    } else if (utils.isObject(config1[prop])) {
      config[prop] = utils.deepMerge(config1[prop]);
    } else if (typeof config1[prop] !== 'undefined') {
      config[prop] = config1[prop];
    }
  });

  utils.forEach(defaultToConfig2Keys, function defaultToConfig2(prop) {
    if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    } else if (typeof config1[prop] !== 'undefined') {
      config[prop] = config1[prop];
    }
  });

  var axiosKeys = valueFromConfig2Keys
    .concat(mergeDeepPropertiesKeys)
    .concat(defaultToConfig2Keys);

  var otherKeys = Object
    .keys(config2)
    .filter(function filterAxiosKeys(key) {
      return axiosKeys.indexOf(key) === -1;
    });

  utils.forEach(otherKeys, function otherKeysDefaultToConfig2(prop) {
    if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    } else if (typeof config1[prop] !== 'undefined') {
      config[prop] = config1[prop];
    }
  });

  return config;
};

},{"../utils":"../node_modules/axios/lib/utils.js"}],"../node_modules/axios/lib/core/Axios.js":[function(require,module,exports) {
'use strict';

var utils = require('./../utils');
var buildURL = require('../helpers/buildURL');
var InterceptorManager = require('./InterceptorManager');
var dispatchRequest = require('./dispatchRequest');
var mergeConfig = require('./mergeConfig');

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = arguments[1] || {};
    config.url = arguments[0];
  } else {
    config = config || {};
  }

  config = mergeConfig(this.defaults, config);

  // Set config.method
  if (config.method) {
    config.method = config.method.toLowerCase();
  } else if (this.defaults.method) {
    config.method = this.defaults.method.toLowerCase();
  } else {
    config.method = 'get';
  }

  // Hook up interceptors middleware
  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);

  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

Axios.prototype.getUri = function getUri(config) {
  config = mergeConfig(this.defaults, config);
  return buildURL(config.url, config.params, config.paramsSerializer).replace(/^\?/, '');
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;

},{"./../utils":"../node_modules/axios/lib/utils.js","../helpers/buildURL":"../node_modules/axios/lib/helpers/buildURL.js","./InterceptorManager":"../node_modules/axios/lib/core/InterceptorManager.js","./dispatchRequest":"../node_modules/axios/lib/core/dispatchRequest.js","./mergeConfig":"../node_modules/axios/lib/core/mergeConfig.js"}],"../node_modules/axios/lib/cancel/Cancel.js":[function(require,module,exports) {
'use strict';

/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;

},{}],"../node_modules/axios/lib/cancel/CancelToken.js":[function(require,module,exports) {
'use strict';

var Cancel = require('./Cancel');

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;

},{"./Cancel":"../node_modules/axios/lib/cancel/Cancel.js"}],"../node_modules/axios/lib/helpers/spread.js":[function(require,module,exports) {
'use strict';

/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};

},{}],"../node_modules/axios/lib/axios.js":[function(require,module,exports) {
'use strict';

var utils = require('./utils');
var bind = require('./helpers/bind');
var Axios = require('./core/Axios');
var mergeConfig = require('./core/mergeConfig');
var defaults = require('./defaults');

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(mergeConfig(axios.defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = require('./cancel/Cancel');
axios.CancelToken = require('./cancel/CancelToken');
axios.isCancel = require('./cancel/isCancel');

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = require('./helpers/spread');

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;

},{"./utils":"../node_modules/axios/lib/utils.js","./helpers/bind":"../node_modules/axios/lib/helpers/bind.js","./core/Axios":"../node_modules/axios/lib/core/Axios.js","./core/mergeConfig":"../node_modules/axios/lib/core/mergeConfig.js","./defaults":"../node_modules/axios/lib/defaults.js","./cancel/Cancel":"../node_modules/axios/lib/cancel/Cancel.js","./cancel/CancelToken":"../node_modules/axios/lib/cancel/CancelToken.js","./cancel/isCancel":"../node_modules/axios/lib/cancel/isCancel.js","./helpers/spread":"../node_modules/axios/lib/helpers/spread.js"}],"../node_modules/axios/index.js":[function(require,module,exports) {
module.exports = require('./lib/axios');
},{"./lib/axios":"../node_modules/axios/lib/axios.js"}],"../apiconfig.json":[function(require,module,exports) {
module.exports = {
  "database": "score",
  "username": "admin",
  "password": "secret"
};
},{}],"ts/data/ScoreService.ts":[function(require,module,exports) {
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var axios_1 = __importDefault(require("axios"));

var apiconfig_json_1 = __importDefault(require("../../../apiconfig.json"));

var GUI_1 = require("~ts/UI/GUI");

var ScoreService = /*#__PURE__*/function () {
  function ScoreService() {
    _classCallCheck(this, ScoreService);

    this._scoreUrl = "http://localhost:8080/score";
    this._auth = {
      auth: {
        username: apiconfig_json_1.default.username,
        password: apiconfig_json_1.default.password
      }
    };
  }

  _createClass(ScoreService, [{
    key: "loadHighScore",
    value: function loadHighScore() {
      axios_1.default.get(this._scoreUrl + "?sort={score:-1}&pagesize=10", this._auth).then(function (data) {
        var scores = [];
        data.data.forEach(function (element) {
          scores.push({
            username: element.username,
            score: element.score
          });
        });
        GUI_1.GUI.getInstance().printHighscore(scores);
      }).catch(function (err) {
        return console.log(err);
      });
    }
  }, {
    key: "updateHighScore",
    value: function updateHighScore(score) {
      var _this = this;

      if (score.username == "") score.username = "A snake";
      axios_1.default.post(this._scoreUrl, score, this._auth).then(function (data) {
        _this.loadHighScore();
      }).catch(function (err) {
        return console.log(err);
      });
    }
  }], [{
    key: "getInstance",
    value: function getInstance() {
      if (!this._instance) {
        this._instance = new ScoreService();
      }

      return this._instance;
    }
  }]);

  return ScoreService;
}();

exports.ScoreService = ScoreService;
},{"axios":"../node_modules/axios/index.js","../../../apiconfig.json":"../apiconfig.json","~ts/UI/GUI":"ts/UI/GUI.ts"}],"ts/Game.ts":[function(require,module,exports) {
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Snake_1 = require("./objects/snake/Snake");

var Vector2_1 = require("./types/Vector2");

var InputHandler_1 = require("./handlers/InputHandler");

var app_1 = require("./app");

var Food_1 = require("./objects/Food");

var CollisionHandler_1 = require("./handlers/CollisionHandler");

var Arena_1 = require("./UI/Arena");

var Timer_1 = require("./handlers/Timer");

var GUI_1 = require("./UI/GUI");

var ScoreService_1 = require("./data/ScoreService");

var AudioPlayer_1 = require("./handlers/AudioPlayer");

var Game = /*#__PURE__*/function () {
  function Game() {
    _classCallCheck(this, Game);

    this._score = 0;
    this._foods = [];
    console.log("Creating game...");
    this._inputHandler = new InputHandler_1.InputHandler();
    this._collisionHandler = new CollisionHandler_1.CollisionHandler();
    this._timer = new Timer_1.Timer(150, 0, this);
    this._GUI = GUI_1.GUI.getInstance();
    this.appendView();
    this.resetGame();
    this.gameLoop();
    ScoreService_1.ScoreService.getInstance().loadHighScore();
  }

  _createClass(Game, [{
    key: "increaseScore",
    value: function increaseScore() {
      Arena_1.Arena.getInstance().setScoreText(++this._score);
    }
  }, {
    key: "getCollisionHandler",
    value: function getCollisionHandler() {
      return this._collisionHandler;
    }
  }, {
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
      GUI_1.GUI.getInstance().toggleMenu();

      this._timer.start();

      AudioPlayer_1.AudioPlayer.getInstance().toggleMusic();
    }
  }, {
    key: "endGame",
    value: function endGame() {
      ScoreService_1.ScoreService.getInstance().updateHighScore({
        username: app_1.USERNAME,
        score: this._score
      });
      this.resetGame();

      this._timer.stop();
    }
  }, {
    key: "pause",
    value: function pause() {
      this._timer.pause();
    }
  }, {
    key: "resume",
    value: function resume() {
      this._timer.resume();
    }
  }, {
    key: "onClockTick",
    value: function onClockTick() {
      this._snake.update();

      this._foods.forEach(function (food) {
        food.update();
      });
    }
  }, {
    key: "gameLoop",
    value: function gameLoop() {
      var _this = this;

      app_1.APPLICATION.render();
      document.addEventListener('keyup', this._inputHandler.onKeyUp);

      this._inputHandler.processInput(this._snake, this);

      if (this._timer.isRunning()) {
        this._collisionHandler.handleCollisions(this._snake, this._foods);
      }

      requestAnimationFrame(function () {
        return _this.gameLoop();
      });
    }
  }, {
    key: "appendView",
    value: function appendView() {
      var element = document.getElementById('canvas');
      if (element != null) element.appendChild(app_1.APPLICATION.view);else document.body.appendChild(app_1.APPLICATION.view);
    }
  }, {
    key: "resetGame",
    value: function resetGame() {
      app_1.APPLICATION.stage.removeChildren();
      Arena_1.Arena.getInstance().draw();

      this._GUI.drawMainMenu();

      this._score = 0;
      Arena_1.Arena.getInstance().setScoreText(this._score);
      this._snake = new Snake_1.Snake(new Vector2_1.Vector2(17 * app_1.TILE_SIZE - 1 * app_1.TILE_SIZE, 16 * app_1.TILE_SIZE));

      for (var i = 0; i < 5; i++) {
        this._foods[i] = new Food_1.Food();
      }
    }
  }], [{
    key: "getInstance",
    value: function getInstance() {
      if (!this._instance) {
        this._instance = new Game();
      }

      return this._instance;
    }
  }]);

  return Game;
}();

exports.Game = Game;
},{"./objects/snake/Snake":"ts/objects/snake/Snake.ts","./types/Vector2":"ts/types/Vector2.ts","./handlers/InputHandler":"ts/handlers/InputHandler.ts","./app":"ts/app.ts","./objects/Food":"ts/objects/Food.ts","./handlers/CollisionHandler":"ts/handlers/CollisionHandler.ts","./UI/Arena":"ts/UI/Arena.ts","./handlers/Timer":"ts/handlers/Timer.ts","./UI/GUI":"ts/UI/GUI.ts","./data/ScoreService":"ts/data/ScoreService.ts","./handlers/AudioPlayer":"ts/handlers/AudioPlayer.ts"}],"../resources/images/Snake.png":[function(require,module,exports) {
module.exports = "/Snake.ce6efffe.png";
},{}],"../resources/images/RockTile.png":[function(require,module,exports) {
module.exports = "/RockTile.47deadca.png";
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

var Snake_png_1 = __importDefault(require("../../resources/images/Snake.png"));

var RockTile_png_1 = __importDefault(require("../../resources/images/RockTile.png"));

exports.ARENA_WIDTH = 768;
exports.ARENA_HEIGHT = 768;
exports.TILE_SIZE = 32;
exports.USERNAME = "";
exports.APPLICATION = new PIXI.Application({
  width: exports.ARENA_WIDTH,
  height: exports.ARENA_HEIGHT,
  antialias: true,
  transparent: false,
  resolution: 1,
  backgroundColor: 0x1099bb
});
exports.APPLICATION.loader.add("tileset", Snake_png_1.default).add("rock_tileset", RockTile_png_1.default).load(setup);

function setup() {
  console.log("Textures loaded!");
  Game_1.Game.getInstance();
}

var inputElement = document.getElementById('name_input');

if (inputElement != null) {
  inputElement.onblur = saveUsername;
}

function saveUsername() {
  var inputElement = document.getElementById('name_input');
  exports.USERNAME = inputElement.value;
}
},{"./Game":"ts/Game.ts","../../resources/images/Snake.png":"../resources/images/Snake.png","../../resources/images/RockTile.png":"../resources/images/RockTile.png"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "52199" + '/');

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