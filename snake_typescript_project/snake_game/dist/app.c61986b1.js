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
})({"ts/design_pattern_examples/5_singleton/GameState.ts":[function(require,module,exports) {
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var GameState = /*#__PURE__*/function () {
  function GameState() {
    _classCallCheck(this, GameState);

    this._isPaused = false;
  }

  _createClass(GameState, [{
    key: "togglePause",
    value: function togglePause() {
      this._isPaused = !this._isPaused;
    }
  }], [{
    key: "getInstance",
    value: function getInstance() {
      if (!this._instance) {
        this._instance = new GameState();
      }

      return this._instance;
    }
  }]);

  return GameState;
}();

exports.default = GameState;
},{}],"ts/design_pattern_examples/1_strategy/AIController.ts":[function(require,module,exports) {
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var AIController = /*#__PURE__*/function () {
  function AIController(behaviour) {
    _classCallCheck(this, AIController);

    this._behaviour = behaviour;
  }

  _createClass(AIController, [{
    key: "setBehaviour",
    value: function setBehaviour(behaviour) {
      this._behaviour = behaviour;
    }
  }, {
    key: "doBehaviour",
    value: function doBehaviour() {
      this._behaviour.doBehaviour();
    }
  }]);

  return AIController;
}();

exports.AIController = AIController;
},{}],"ts/design_pattern_examples/1_strategy/strategies/NeutralBehaviour.ts":[function(require,module,exports) {
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var NeutralBehaviour = /*#__PURE__*/function () {
  function NeutralBehaviour() {
    _classCallCheck(this, NeutralBehaviour);
  }

  _createClass(NeutralBehaviour, [{
    key: "doBehaviour",
    value: function doBehaviour() {
      console.log("AI minds its own bussines...");
    }
  }]);

  return NeutralBehaviour;
}();

exports.NeutralBehaviour = NeutralBehaviour;
},{}],"ts/design_pattern_examples/1_strategy/strategies/FleeingBehaviour.ts":[function(require,module,exports) {
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var FleeingBehaviour = /*#__PURE__*/function () {
  function FleeingBehaviour() {
    _classCallCheck(this, FleeingBehaviour);
  }

  _createClass(FleeingBehaviour, [{
    key: "doBehaviour",
    value: function doBehaviour() {
      console.log("AI tries to flee...");
    }
  }]);

  return FleeingBehaviour;
}();

exports.FleeingBehaviour = FleeingBehaviour;
},{}],"ts/design_pattern_examples/2_factory/Enemies/BaseEnemy.ts":[function(require,module,exports) {
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var BaseEnemy = /*#__PURE__*/function () {
  function BaseEnemy(health) {
    _classCallCheck(this, BaseEnemy);

    this.health = health;
    this.isActive = false;
  }

  _createClass(BaseEnemy, [{
    key: "attack",
    value: function attack() {}
  }, {
    key: "spawn",
    value: function spawn() {
      console.log("Enemy spawned.");
      this.isActive = true;
    }
  }]);

  return BaseEnemy;
}();

exports.BaseEnemy = BaseEnemy;
},{}],"ts/design_pattern_examples/2_factory/Enemies/ShootingEnemy.ts":[function(require,module,exports) {
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

var BaseEnemy_1 = require("./BaseEnemy");

var ShootingEnemy = /*#__PURE__*/function (_BaseEnemy_1$BaseEnem) {
  _inherits(ShootingEnemy, _BaseEnemy_1$BaseEnem);

  var _super = _createSuper(ShootingEnemy);

  function ShootingEnemy(health, rateOfFire) {
    var _this;

    _classCallCheck(this, ShootingEnemy);

    _this = _super.call(this, health);
    _this.rateOfFire = rateOfFire;
    return _this;
  }

  _createClass(ShootingEnemy, [{
    key: "attack",
    value: function attack() {
      if (this.isActive) console.log("Enemy shooting every " + this.rateOfFire.toString() + " seconds.");else console.log("Enemy not spawned... can't attack.");
    }
  }]);

  return ShootingEnemy;
}(BaseEnemy_1.BaseEnemy);

exports.ShootingEnemy = ShootingEnemy;
},{"./BaseEnemy":"ts/design_pattern_examples/2_factory/Enemies/BaseEnemy.ts"}],"ts/design_pattern_examples/2_factory/EnemyFactory.ts":[function(require,module,exports) {
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var EnemyFactory = /*#__PURE__*/function () {
  function EnemyFactory() {
    _classCallCheck(this, EnemyFactory);
  }

  _createClass(EnemyFactory, [{
    key: "spawnEnemy",
    value: function spawnEnemy() {
      var enemy = this.createEnemy();
      enemy.spawn();
      enemy.attack();
    }
  }]);

  return EnemyFactory;
}();

exports.EnemyFactory = EnemyFactory;
},{}],"ts/design_pattern_examples/2_factory/ShootingEnemyFactory.ts":[function(require,module,exports) {
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

var ShootingEnemy_1 = require("./Enemies/ShootingEnemy");

var EnemyFactory_1 = require("./EnemyFactory");

var ShootingEnemyFactory = /*#__PURE__*/function (_EnemyFactory_1$Enemy) {
  _inherits(ShootingEnemyFactory, _EnemyFactory_1$Enemy);

  var _super = _createSuper(ShootingEnemyFactory);

  function ShootingEnemyFactory() {
    _classCallCheck(this, ShootingEnemyFactory);

    return _super.apply(this, arguments);
  }

  _createClass(ShootingEnemyFactory, [{
    key: "createEnemy",
    value: function createEnemy() {
      return new ShootingEnemy_1.ShootingEnemy(100, 0.5);
    }
  }]);

  return ShootingEnemyFactory;
}(EnemyFactory_1.EnemyFactory);

exports.ShootingEnemyFactory = ShootingEnemyFactory;
},{"./Enemies/ShootingEnemy":"ts/design_pattern_examples/2_factory/Enemies/ShootingEnemy.ts","./EnemyFactory":"ts/design_pattern_examples/2_factory/EnemyFactory.ts"}],"ts/design_pattern_examples/2_factory/Enemies/ExplodingEnemy.ts":[function(require,module,exports) {
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

var BaseEnemy_1 = require("./BaseEnemy");

var ExplodingEnemy = /*#__PURE__*/function (_BaseEnemy_1$BaseEnem) {
  _inherits(ExplodingEnemy, _BaseEnemy_1$BaseEnem);

  var _super = _createSuper(ExplodingEnemy);

  function ExplodingEnemy(health, explosionRadius) {
    var _this;

    _classCallCheck(this, ExplodingEnemy);

    _this = _super.call(this, health);
    _this.explosionRadius = explosionRadius;
    return _this;
  }

  _createClass(ExplodingEnemy, [{
    key: "attack",
    value: function attack() {
      if (this.isActive) console.log("Enemy blowing up with a radius of " + this.explosionRadius.toString() + " meters.");else console.log("Enemy not spawned... can't attack.");
    }
  }]);

  return ExplodingEnemy;
}(BaseEnemy_1.BaseEnemy);

exports.ExplodingEnemy = ExplodingEnemy;
},{"./BaseEnemy":"ts/design_pattern_examples/2_factory/Enemies/BaseEnemy.ts"}],"ts/helper/Random.ts":[function(require,module,exports) {
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Random = /*#__PURE__*/function () {
  function Random() {
    _classCallCheck(this, Random);
  }

  _createClass(Random, null, [{
    key: "next",
    value: function next(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    }
  }]);

  return Random;
}();

exports.Random = Random;
},{}],"ts/design_pattern_examples/2_factory/ExplodingEnemyFactory.ts":[function(require,module,exports) {
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

var EnemyFactory_1 = require("./EnemyFactory");

var ExplodingEnemy_1 = require("./Enemies/ExplodingEnemy");

var Random_1 = require("~ts/helper/Random");

var ExplodingEnemyFactory = /*#__PURE__*/function (_EnemyFactory_1$Enemy) {
  _inherits(ExplodingEnemyFactory, _EnemyFactory_1$Enemy);

  var _super = _createSuper(ExplodingEnemyFactory);

  function ExplodingEnemyFactory() {
    _classCallCheck(this, ExplodingEnemyFactory);

    return _super.apply(this, arguments);
  }

  _createClass(ExplodingEnemyFactory, [{
    key: "createEnemy",
    value: function createEnemy() {
      return new ExplodingEnemy_1.ExplodingEnemy(100, Random_1.Random.next(4, 7));
    }
  }]);

  return ExplodingEnemyFactory;
}(EnemyFactory_1.EnemyFactory);

exports.ExplodingEnemyFactory = ExplodingEnemyFactory;
},{"./EnemyFactory":"ts/design_pattern_examples/2_factory/EnemyFactory.ts","./Enemies/ExplodingEnemy":"ts/design_pattern_examples/2_factory/Enemies/ExplodingEnemy.ts","~ts/helper/Random":"ts/helper/Random.ts"}],"ts/design_pattern_examples/3_builder/Config.ts":[function(require,module,exports) {
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Config = /*#__PURE__*/function () {
  function Config() {
    _classCallCheck(this, Config);

    this._lives = 1;
    this._playerNames = [];
  }

  _createClass(Config, [{
    key: "setLives",
    value: function setLives(lives) {
      this._lives = lives;
    }
  }, {
    key: "getLives",
    value: function getLives() {
      return this._lives;
    }
  }, {
    key: "addPlayerName",
    value: function addPlayerName(name) {
      this._playerNames.push(name);
    }
  }, {
    key: "printToConsole",
    value: function printToConsole() {
      var output = "config(lives:" + this._lives;

      this._playerNames.forEach(function (name) {
        output += ", " + name;
      });

      output += ")";
      console.log(output);
    }
  }]);

  return Config;
}();

exports.Config = Config;
},{}],"ts/design_pattern_examples/3_builder/ConfigBuilder.ts":[function(require,module,exports) {
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Config_1 = require("./Config");

var ConfigBuilder = /*#__PURE__*/function () {
  function ConfigBuilder() {
    _classCallCheck(this, ConfigBuilder);

    this._config = new Config_1.Config();
  }

  _createClass(ConfigBuilder, [{
    key: "getConfig",
    value: function getConfig() {
      var config = this._config;
      this.reset();
      return config;
    }
  }, {
    key: "reset",
    value: function reset() {
      this._config = new Config_1.Config();
    }
  }, {
    key: "setLives",
    value: function setLives(amount) {
      this._config.setLives(amount);

      return this;
    }
  }, {
    key: "addPlayerName",
    value: function addPlayerName(name) {
      this._config.addPlayerName(name);

      return this;
    }
  }]);

  return ConfigBuilder;
}();

exports.ConfigBuilder = ConfigBuilder;
},{"./Config":"ts/design_pattern_examples/3_builder/Config.ts"}],"ts/design_pattern_examples/4_object_pooler/Bullet.ts":[function(require,module,exports) {
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Bullet = /*#__PURE__*/function () {
  function Bullet(x, y) {
    _classCallCheck(this, Bullet);

    this._isActive = true;
    this.x = x;
    this.y = y;
  }

  _createClass(Bullet, [{
    key: "isSpawned",
    value: function isSpawned() {
      return this._isActive;
    }
  }, {
    key: "setActive",
    value: function setActive(active) {
      this._isActive = active;
    }
  }]);

  return Bullet;
}();

exports.Bullet = Bullet;
},{}],"ts/design_pattern_examples/4_object_pooler/BulletPool.ts":[function(require,module,exports) {
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Bullet_1 = require("./Bullet");

var BulletPool = /*#__PURE__*/function () {
  function BulletPool() {
    _classCallCheck(this, BulletPool);

    this._bulletPool = new Array();
  }

  _createClass(BulletPool, [{
    key: "getBullet",
    value: function getBullet() {
      var bullet = null;

      for (var i = 0; i < this._bulletPool.length; i++) {
        if (!this._bulletPool[i].isSpawned()) {
          console.log("Bullet found... reusing.");
          bullet = this._bulletPool[i];
          break;
        }
      }

      if (bullet == null) {
        console.log("Making new bullet...");
        bullet = new Bullet_1.Bullet(0, 0);

        this._bulletPool.push(bullet);
      }

      this.spawn(bullet, 0, 0);
      return bullet;
    }
  }, {
    key: "returnBullet",
    value: function returnBullet(bullet) {
      console.log("Returning bullet to pool...");
      bullet.setActive(false);
    }
  }, {
    key: "spawn",
    value: function spawn(bullet, x, y) {
      bullet.setActive(true);
      bullet.x = x;
      bullet.y = y;
    }
  }]);

  return BulletPool;
}();

exports.BulletPool = BulletPool;
},{"./Bullet":"ts/design_pattern_examples/4_object_pooler/Bullet.ts"}],"ts/design_pattern_examples/6_adapter/adapters/OfficeCalendarAdapter.ts":[function(require,module,exports) {
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var OfficeCalendarAdapter = /*#__PURE__*/function () {
  function OfficeCalendarAdapter(calendar) {
    _classCallCheck(this, OfficeCalendarAdapter);

    this._calendar = calendar;
  }

  _createClass(OfficeCalendarAdapter, [{
    key: "postOccurrence",
    value: function postOccurrence() {
      this._calendar.postEvent();
    }
  }, {
    key: "getOccurrences",
    value: function getOccurrences() {
      this._calendar.getEvents();
    }
  }]);

  return OfficeCalendarAdapter;
}();

exports.OfficeCalendarAdapter = OfficeCalendarAdapter;
},{}],"ts/design_pattern_examples/6_adapter/adaptees/OfficeCalendar.ts":[function(require,module,exports) {
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var OfficeCalendar = /*#__PURE__*/function () {
  function OfficeCalendar() {
    _classCallCheck(this, OfficeCalendar);
  }

  _createClass(OfficeCalendar, [{
    key: "postEvent",
    value: function postEvent() {
      console.log("Posting event to Office Calendar using their method name.");
    }
  }, {
    key: "getEvents",
    value: function getEvents() {
      console.log("Retrieving Office events using specific method name.");
    }
  }]);

  return OfficeCalendar;
}();

exports.OfficeCalendar = OfficeCalendar;
},{}],"ts/design_pattern_examples/6_adapter/adapters/GoogleCalendarAdapter.ts":[function(require,module,exports) {
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var GoogleCalendarAdapter = /*#__PURE__*/function () {
  function GoogleCalendarAdapter(calendar) {
    _classCallCheck(this, GoogleCalendarAdapter);

    this._calendar = calendar;
  }

  _createClass(GoogleCalendarAdapter, [{
    key: "postOccurrence",
    value: function postOccurrence() {
      this._calendar.scheduleMeeting();
    }
  }, {
    key: "getOccurrences",
    value: function getOccurrences() {
      this._calendar.getMeetings();
    }
  }]);

  return GoogleCalendarAdapter;
}();

exports.GoogleCalendarAdapter = GoogleCalendarAdapter;
},{}],"ts/design_pattern_examples/6_adapter/adaptees/GoogleCalendar.ts":[function(require,module,exports) {
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var GoogleCalendar = /*#__PURE__*/function () {
  function GoogleCalendar() {
    _classCallCheck(this, GoogleCalendar);
  }

  _createClass(GoogleCalendar, [{
    key: "scheduleMeeting",
    value: function scheduleMeeting() {
      console.log("Scheduling meeting to Google Calendar using their method name.");
    }
  }, {
    key: "getMeetings",
    value: function getMeetings() {
      console.log("Retrieving Google meetings using specific method name.");
    }
  }]);

  return GoogleCalendar;
}();

exports.GoogleCalendar = GoogleCalendar;
},{}],"ts/design_pattern_examples/7_facade/MailRepository.ts":[function(require,module,exports) {
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var MailRepository = /*#__PURE__*/function () {
  function MailRepository() {
    _classCallCheck(this, MailRepository);
  }

  _createClass(MailRepository, [{
    key: "insertMessage",
    value: function insertMessage(contactId) {
      console.log("Inserted mail message into database with contactId " + contactId + ".");
    }
  }]);

  return MailRepository;
}();

exports.MailRepository = MailRepository;
},{}],"ts/design_pattern_examples/7_facade/ContactRepository.ts":[function(require,module,exports) {
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var ContactRepository = /*#__PURE__*/function () {
  function ContactRepository() {
    _classCallCheck(this, ContactRepository);
  }

  _createClass(ContactRepository, [{
    key: "getContactId",
    value: function getContactId() {
      console.log("Fetching contact...");
      return 1;
    }
  }]);

  return ContactRepository;
}();

exports.ContactRepository = ContactRepository;
},{}],"ts/design_pattern_examples/7_facade/Logger.ts":[function(require,module,exports) {
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Logger = /*#__PURE__*/function () {
  function Logger() {
    _classCallCheck(this, Logger);
  }

  _createClass(Logger, [{
    key: "writeLog",
    value: function writeLog() {
      console.log(new Date().toDateString() + " logged incoming mail.");
      return 1;
    }
  }]);

  return Logger;
}();

exports.Logger = Logger;
},{}],"ts/design_pattern_examples/7_facade/MailFacade.ts":[function(require,module,exports) {
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var MailRepository_1 = require("./MailRepository");

var ContactRepository_1 = require("./ContactRepository");

var Logger_1 = require("./Logger");

var MailFacade = /*#__PURE__*/function () {
  function MailFacade() {
    var mailRepository = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new MailRepository_1.MailRepository();
    var contactRepository = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new ContactRepository_1.ContactRepository();
    var logger = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : new Logger_1.Logger();

    _classCallCheck(this, MailFacade);

    this._mailRepository = mailRepository || new MailRepository_1.MailRepository();
    this._contactRepository = contactRepository || new ContactRepository_1.ContactRepository();
    this._logger = logger || new Logger_1.Logger();
  }

  _createClass(MailFacade, [{
    key: "saveMessage",
    value: function saveMessage() {
      var contactId = this._contactRepository.getContactId();

      this._mailRepository.insertMessage(contactId);

      this._logger.writeLog();
    }
  }]);

  return MailFacade;
}();

exports.MailFacade = MailFacade;
},{"./MailRepository":"ts/design_pattern_examples/7_facade/MailRepository.ts","./ContactRepository":"ts/design_pattern_examples/7_facade/ContactRepository.ts","./Logger":"ts/design_pattern_examples/7_facade/Logger.ts"}],"ts/design_pattern_examples/8_observer/observable/HealthManager.ts":[function(require,module,exports) {
"use strict";

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var HealthManager = /*#__PURE__*/function () {
  function HealthManager(health) {
    _classCallCheck(this, HealthManager);

    this.health = 0;
    this._observers = [];
    this.health = health;
  }

  _createClass(HealthManager, [{
    key: "attach",
    value: function attach(observer) {
      var isExist = this._observers.includes(observer);

      if (isExist) {
        return console.log("Already attached.");
      }

      console.log("Attached new observer.");

      this._observers.push(observer);

      this.notify();
    }
  }, {
    key: "detach",
    value: function detach(observer) {
      var observerIndex = this._observers.indexOf(observer);

      if (observerIndex === -1) {
        return console.log("Can't detach - observer not found.");
      }

      this._observers.splice(observerIndex, 1);

      console.log("Detached an observer.");
    }
  }, {
    key: "notify",
    value: function notify() {
      console.log("Notifying observers of change.");

      var _iterator = _createForOfIteratorHelper(this._observers),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var observer = _step.value;
          observer.update(this);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }
  }, {
    key: "takeDamage",
    value: function takeDamage(damage) {
      this.health -= damage;
      this.notify();
    }
  }, {
    key: "regenerateHealth",
    value: function regenerateHealth(health) {
      this.health += health;
      this.notify();
    }
  }]);

  return HealthManager;
}();

exports.HealthManager = HealthManager;
},{}],"ts/design_pattern_examples/8_observer/observer/UI.ts":[function(require,module,exports) {
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var UI = /*#__PURE__*/function () {
  function UI() {
    _classCallCheck(this, UI);

    this._healthLabel = "0";
  }

  _createClass(UI, [{
    key: "update",
    value: function update(healthManager) {
      this._healthLabel = healthManager.health.toString();
      this.displayHealth();
    }
  }, {
    key: "displayHealth",
    value: function displayHealth() {
      console.log("HEALTH: " + this._healthLabel);
    }
  }]);

  return UI;
}();

exports.UI = UI;
},{}],"ts/design_pattern_examples/9_state/MovingContext.ts":[function(require,module,exports) {
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var MovingContext = /*#__PURE__*/function () {
  function MovingContext(state) {
    _classCallCheck(this, MovingContext);

    this._state = state;

    this._state.setContext(this);
  }

  _createClass(MovingContext, [{
    key: "transitionTo",
    value: function transitionTo(state) {
      console.log("Transition to ".concat(state.constructor.name, "."));
      this._state = state;

      this._state.setContext(this);
    }
  }, {
    key: "move",
    value: function move() {
      this._state.move();
    }
  }]);

  return MovingContext;
}();

exports.MovingContext = MovingContext;
},{}],"ts/design_pattern_examples/9_state/states/State.ts":[function(require,module,exports) {
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

Object.defineProperty(exports, "__esModule", {
  value: true
});

var State = /*#__PURE__*/function () {
  function State() {
    _classCallCheck(this, State);
  }

  _createClass(State, [{
    key: "setContext",
    value: function setContext(context) {
      this.context = context;
    }
  }]);

  return State;
}();

exports.State = State;
},{}],"ts/design_pattern_examples/9_state/states/ExhaustedState.ts":[function(require,module,exports) {
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

var State_1 = require("./State");

var EnergeticState_1 = require("./EnergeticState");

var ExhaustedState = /*#__PURE__*/function (_State_1$State) {
  _inherits(ExhaustedState, _State_1$State);

  var _super = _createSuper(ExhaustedState);

  function ExhaustedState() {
    _classCallCheck(this, ExhaustedState);

    return _super.apply(this, arguments);
  }

  _createClass(ExhaustedState, [{
    key: "move",
    value: function move() {
      console.log("Exhausted State - walking.");
      this.context.transitionTo(new EnergeticState_1.EnergeticState());
    }
  }]);

  return ExhaustedState;
}(State_1.State);

exports.ExhaustedState = ExhaustedState;
},{"./State":"ts/design_pattern_examples/9_state/states/State.ts","./EnergeticState":"ts/design_pattern_examples/9_state/states/EnergeticState.ts"}],"ts/design_pattern_examples/9_state/states/EnergeticState.ts":[function(require,module,exports) {
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

var State_1 = require("./State");

var ExhaustedState_1 = require("./ExhaustedState");

var EnergeticState = /*#__PURE__*/function (_State_1$State) {
  _inherits(EnergeticState, _State_1$State);

  var _super = _createSuper(EnergeticState);

  function EnergeticState() {
    _classCallCheck(this, EnergeticState);

    return _super.apply(this, arguments);
  }

  _createClass(EnergeticState, [{
    key: "move",
    value: function move() {
      console.log("Energetic State - running.");
      this.context.transitionTo(new ExhaustedState_1.ExhaustedState());
    }
  }]);

  return EnergeticState;
}(State_1.State);

exports.EnergeticState = EnergeticState;
},{"./State":"ts/design_pattern_examples/9_state/states/State.ts","./ExhaustedState":"ts/design_pattern_examples/9_state/states/ExhaustedState.ts"}],"ts/design_pattern_examples/0_test/PatternTester.ts":[function(require,module,exports) {
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

var GameState_1 = __importDefault(require("../5_singleton/GameState"));

var AIController_1 = require("../1_strategy/AIController");

var NeutralBehaviour_1 = require("../1_strategy/strategies/NeutralBehaviour");

var FleeingBehaviour_1 = require("../1_strategy/strategies/FleeingBehaviour");

var ShootingEnemyFactory_1 = require("../2_factory/ShootingEnemyFactory");

var ExplodingEnemyFactory_1 = require("../2_factory/ExplodingEnemyFactory");

var ConfigBuilder_1 = require("../3_builder/ConfigBuilder");

var BulletPool_1 = require("../4_object_pooler/BulletPool");

var OfficeCalendarAdapter_1 = require("../6_adapter/adapters/OfficeCalendarAdapter");

var OfficeCalendar_1 = require("../6_adapter/adaptees/OfficeCalendar");

var GoogleCalendarAdapter_1 = require("../6_adapter/adapters/GoogleCalendarAdapter");

var GoogleCalendar_1 = require("../6_adapter/adaptees/GoogleCalendar");

var MailFacade_1 = require("../7_facade/MailFacade");

var MailRepository_1 = require("../7_facade/MailRepository");

var ContactRepository_1 = require("../7_facade/ContactRepository");

var Logger_1 = require("../7_facade/Logger");

var HealthManager_1 = require("../8_observer/observable/HealthManager");

var UI_1 = require("../8_observer/observer/UI");

var MovingContext_1 = require("../9_state/MovingContext");

var EnergeticState_1 = require("../9_state/states/EnergeticState");

var PatternTester = /*#__PURE__*/function () {
  function PatternTester() {
    _classCallCheck(this, PatternTester);
  }

  _createClass(PatternTester, [{
    key: "testAll",
    value: function testAll() {
      console.log("--- " + this.testStrategyPattern.name + " ---");
      this.testStrategyPattern();
      console.log("--- " + this.testFactoryPattern.name + " ---");
      this.testFactoryPattern();
      console.log("--- " + this.testBuilderPattern.name + " ---");
      this.testBuilderPattern();
      console.log("--- " + this.testObjectPooler.name + " ---");
      this.testObjectPooler();
      console.log("--- " + this.testSingletonPattern.name + " ---");
      this.testSingletonPattern();
      console.log("--- " + this.testAdapterPattern.name + " ---");
      this.testAdapterPattern();
      console.log("--- " + this.testFacadePattern.name + " ---");
      this.testFacadePattern();
      console.log("--- " + this.testObserverPattern.name + " ---");
      this.testObserverPattern();
      console.log("--- " + this.testStatePattern.name + " ---");
      this.testStatePattern();
    }
  }, {
    key: "testStatePattern",
    value: function testStatePattern() {
      var movingContext = new MovingContext_1.MovingContext(new EnergeticState_1.EnergeticState());
      movingContext.move();
      movingContext.move();
      movingContext.move();
    }
  }, {
    key: "testObserverPattern",
    value: function testObserverPattern() {
      var ui = new UI_1.UI();
      var healthManager = new HealthManager_1.HealthManager(100);
      healthManager.attach(ui);
      healthManager.takeDamage(20);
      healthManager.takeDamage(20);
      healthManager.regenerateHealth(10);
      healthManager.detach(ui);
      healthManager.regenerateHealth(10);
    }
  }, {
    key: "testFacadePattern",
    value: function testFacadePattern() {
      var contactId = new ContactRepository_1.ContactRepository().getContactId();
      new MailRepository_1.MailRepository().insertMessage(contactId);
      new Logger_1.Logger().writeLog();
      new MailFacade_1.MailFacade().saveMessage();
    }
  }, {
    key: "testAdapterPattern",
    value: function testAdapterPattern() {
      var adapter = new OfficeCalendarAdapter_1.OfficeCalendarAdapter(new OfficeCalendar_1.OfficeCalendar());
      adapter.getOccurrences();
      adapter.postOccurrence();
      adapter = new GoogleCalendarAdapter_1.GoogleCalendarAdapter(new GoogleCalendar_1.GoogleCalendar());
      adapter.getOccurrences();
      adapter.postOccurrence();
    }
  }, {
    key: "testObjectPooler",
    value: function testObjectPooler() {
      var pool = new BulletPool_1.BulletPool();
      var bullet = pool.getBullet();
      pool.returnBullet(bullet);
      var bullets = new Array(2);
      bullets[0] = pool.getBullet();
      bullets[1] = pool.getBullet();
      pool.returnBullet(bullets[0]);
      pool.returnBullet(bullets[1]);
    }
  }, {
    key: "testFactoryPattern",
    value: function testFactoryPattern() {
      var shootingEnemyFactory = new ShootingEnemyFactory_1.ShootingEnemyFactory();
      shootingEnemyFactory.spawnEnemy();
      var explodingEnemyFactory = new ExplodingEnemyFactory_1.ExplodingEnemyFactory();
      explodingEnemyFactory.spawnEnemy();
      var enemy = explodingEnemyFactory.createEnemy();
      enemy.attack();
    }
  }, {
    key: "testBuilderPattern",
    value: function testBuilderPattern() {
      var builder = new ConfigBuilder_1.ConfigBuilder();
      var config = builder.setLives(4).addPlayerName("Johnny").addPlayerName("Jimmy").addPlayerName("Bobby").getConfig();
      config.printToConsole();
      config = builder.setLives(2).addPlayerName("Brrrrr").getConfig();
      config.printToConsole();
    }
  }, {
    key: "testStrategyPattern",
    value: function testStrategyPattern() {
      var aiController = new AIController_1.AIController(new NeutralBehaviour_1.NeutralBehaviour());
      aiController.doBehaviour();
      aiController.setBehaviour(new FleeingBehaviour_1.FleeingBehaviour());
      aiController.doBehaviour();
    }
  }, {
    key: "testSingletonPattern",
    value: function testSingletonPattern() {
      var s1 = GameState_1.default.getInstance();
      var s2 = GameState_1.default.getInstance();

      if (s1 === s2) {
        console.log('Singleton works, both variables contain the same instance.');
      } else {
        console.log('Singleton failed, variables contain different instances.');
      }
    }
  }]);

  return PatternTester;
}();

exports.default = PatternTester;
},{"../5_singleton/GameState":"ts/design_pattern_examples/5_singleton/GameState.ts","../1_strategy/AIController":"ts/design_pattern_examples/1_strategy/AIController.ts","../1_strategy/strategies/NeutralBehaviour":"ts/design_pattern_examples/1_strategy/strategies/NeutralBehaviour.ts","../1_strategy/strategies/FleeingBehaviour":"ts/design_pattern_examples/1_strategy/strategies/FleeingBehaviour.ts","../2_factory/ShootingEnemyFactory":"ts/design_pattern_examples/2_factory/ShootingEnemyFactory.ts","../2_factory/ExplodingEnemyFactory":"ts/design_pattern_examples/2_factory/ExplodingEnemyFactory.ts","../3_builder/ConfigBuilder":"ts/design_pattern_examples/3_builder/ConfigBuilder.ts","../4_object_pooler/BulletPool":"ts/design_pattern_examples/4_object_pooler/BulletPool.ts","../6_adapter/adapters/OfficeCalendarAdapter":"ts/design_pattern_examples/6_adapter/adapters/OfficeCalendarAdapter.ts","../6_adapter/adaptees/OfficeCalendar":"ts/design_pattern_examples/6_adapter/adaptees/OfficeCalendar.ts","../6_adapter/adapters/GoogleCalendarAdapter":"ts/design_pattern_examples/6_adapter/adapters/GoogleCalendarAdapter.ts","../6_adapter/adaptees/GoogleCalendar":"ts/design_pattern_examples/6_adapter/adaptees/GoogleCalendar.ts","../7_facade/MailFacade":"ts/design_pattern_examples/7_facade/MailFacade.ts","../7_facade/MailRepository":"ts/design_pattern_examples/7_facade/MailRepository.ts","../7_facade/ContactRepository":"ts/design_pattern_examples/7_facade/ContactRepository.ts","../7_facade/Logger":"ts/design_pattern_examples/7_facade/Logger.ts","../8_observer/observable/HealthManager":"ts/design_pattern_examples/8_observer/observable/HealthManager.ts","../8_observer/observer/UI":"ts/design_pattern_examples/8_observer/observer/UI.ts","../9_state/MovingContext":"ts/design_pattern_examples/9_state/MovingContext.ts","../9_state/states/EnergeticState":"ts/design_pattern_examples/9_state/states/EnergeticState.ts"}],"app.ts":[function(require,module,exports) {
"use strict";

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var PatternTester_1 = __importDefault(require("./ts/design_pattern_examples/0_test/PatternTester"));

new PatternTester_1.default().testAll();
},{"./ts/design_pattern_examples/0_test/PatternTester":"ts/design_pattern_examples/0_test/PatternTester.ts"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "55313" + '/');

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
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","app.ts"], null)
//# sourceMappingURL=/app.c61986b1.js.map