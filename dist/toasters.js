(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["toasters"] = factory();
	else
		root["toasters"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/toasters.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/toasters.js":
/*!*************************!*\
  !*** ./src/toasters.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\ndocument.body.style.backgroundColor = \"#eee\";\nvar container = document.getElementById(\"toasts-container\");\nvar incrementer = 0;\n\nvar Toast =\n/*#__PURE__*/\nfunction () {\n  // should add type checking\n  function Toast(content, persistant, timeout, position) {\n    _classCallCheck(this, Toast);\n\n    console.log(position);\n    this.identifier = \"toast-\".concat(incrementer);\n    incrementer++;\n    this.visible = false;\n    this.position = position;\n    this.content = content;\n    this.persistant = persistant;\n    this.timeout = timeout;\n    if (!this.persistant) this.startTimer();\n    this.dragListener();\n  }\n\n  _createClass(Toast, [{\n    key: \"startTimer\",\n    value: function startTimer() {\n      setTimeout(this.clear.bind(this), this.timeout);\n    }\n  }, {\n    key: \"display\",\n    value: function display() {\n      if (!this.visible) {\n        container.insertAdjacentHTML(\"beforeend\", \"<div class=\\\"toast \".concat(this.identifier, \" toast-\").concat(this.position, \" toast-bottom\\\">\").concat(this.content, \"</div>\"));\n        this.find();\n      } else this.element.innerHTML = this.content;\n\n      this.visible = true;\n    }\n  }, {\n    key: \"dragListener\",\n    value: function dragListener() {\n      var _this = this;\n\n      this.element.addEventListener(\"mousedown\", function (event) {\n        // this.element.style.position = \"absolute\";\n        // this.element.ondragstart = () => {\n        // \treturn false;\n        // }\n        var shiftX = event.clientX - _this.element.getBoundingClientRect().x;\n\n        var move = function move(_ref) {\n          var pageX = _ref.pageX;\n          _this.element.style.transform = \"translate(\".concat(pageX - shiftX, \"px)\");\n        };\n\n        console.log(\"Mousedown\");\n        window.addEventListener(\"mousemove\", move, false);\n        window.addEventListener(\"mouseup\", function () {\n          console.log(\"Mouseup\");\n          window.removeEventListener(\"mousemove\", move, false);\n        }, false);\n      }, false);\n    }\n  }, {\n    key: \"find\",\n    value: function find() {\n      for (var i = 0; i < container.childNodes.length; i++) {\n        if (container.childNodes[i].classList.contains(this.identifier)) return this.element = container.childNodes[i];\n      }\n    }\n  }, {\n    key: \"clear\",\n    value: function clear() {\n      this.element.remove();\n    }\n  }, {\n    key: \"content\",\n    get: function get() {\n      return this._content;\n    },\n    set: function set(value) {\n      this._content = value;\n      this.display();\n    }\n  }]);\n\n  return Toast;\n}(); // const add = (\n// \tcontent,\n// \tpersistant,\n// \ttimeout,\n// ) => {\n// \tconst red = new Toast(\n// \t\tcontent,\n// \t\tpersistant,\n// \t\ttimeout\n// \t);\n// }\n\n\nvar red = new Toast(\"This is a test for content\", true, 5000, \"right\");\nvar pink = new Toast(\"ALWAYS HERE AND ALWAYS PINK\", true, 5000, \"left\");\n/* harmony default export */ __webpack_exports__[\"default\"] = ({});\n\n//# sourceURL=webpack://toasters/./src/toasters.js?");

/***/ })

/******/ });
});