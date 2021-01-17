/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/JQpugFactory.ts":
/*!*****************************!*\
  !*** ./src/JQpugFactory.ts ***!
  \*****************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _JQpugPugFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./JQpugPugFactory */ \"./src/JQpugPugFactory.ts\");\n/* harmony import */ var _JQpugOptionsBuilder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./JQpugOptionsBuilder */ \"./src/JQpugOptionsBuilder.ts\");\n\n\nvar JQpugFactoryClass = /** @class */ (function () {\n    function JQpugFactoryClass() {\n    }\n    JQpugFactoryClass.prototype.create = function (pug, options) {\n        if (options === void 0) { options = undefined; }\n        var $elem = _JQpugPugFactory__WEBPACK_IMPORTED_MODULE_0__.default.create(pug);\n        if (options !== undefined) {\n            _JQpugOptionsBuilder__WEBPACK_IMPORTED_MODULE_1__.default.build($elem, options);\n        }\n        return $elem;\n    };\n    return JQpugFactoryClass;\n}());\nvar JQpugFactory = new JQpugFactoryClass();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (JQpugFactory);\n\n\n//# sourceURL=webpack://jqpug/./src/JQpugFactory.ts?");

/***/ }),

/***/ "./src/JQpugOptionsBuilder.ts":
/*!************************************!*\
  !*** ./src/JQpugOptionsBuilder.ts ***!
  \************************************/
/*! namespace exports */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! export jQpugOptionsBuilderClass [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"jQpugOptionsBuilderClass\": () => /* binding */ jQpugOptionsBuilderClass,\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nvar jQpugOptionsBuilderClass = /** @class */ (function () {\n    function jQpugOptionsBuilderClass() {\n    }\n    jQpugOptionsBuilderClass.prototype.build = function ($elem, options) {\n        if (options === undefined)\n            return;\n        if (typeof options === \"string\") {\n            this.build($elem, {\n                text: options,\n            });\n        }\n        else if (typeof options === \"number\") {\n            this.build($elem, {\n                text: \"\" + options,\n            });\n        }\n        else if (options instanceof Array) {\n            this.build($elem, {\n                content: options,\n            });\n        }\n        else if (options instanceof jQuery) {\n            // @ts-ignore\n            this.build($elem, {\n                content: options,\n            });\n        }\n        else {\n            // @ts-ignore\n            this.attachOptions($elem, options);\n        }\n    };\n    jQpugOptionsBuilderClass.prototype.attachOptions = function ($elem, options) {\n        if (options === undefined)\n            return;\n        this.addClass($elem, options.class);\n        this.addAttr($elem, options.attr);\n        this.addCss($elem, options.css);\n        this.addText($elem, options.text);\n        this.addHtml($elem, options.html);\n        this.addContent($elem, options.content);\n        this.addClick($elem, options.click);\n    };\n    jQpugOptionsBuilderClass.prototype.addClass = function ($elem, className) {\n        if (className === undefined)\n            return;\n        if (className instanceof Array) {\n            className.forEach(function (cn) {\n                $elem.addClass(cn);\n            });\n        }\n        else {\n            $elem.addClass(className);\n        }\n    };\n    jQpugOptionsBuilderClass.prototype.addAttr = function ($elem, attr) {\n        if (attr === undefined)\n            return;\n        $elem.attr(attr);\n    };\n    jQpugOptionsBuilderClass.prototype.addCss = function ($elem, css) {\n        if (css === undefined)\n            return;\n        $elem.css(css);\n    };\n    jQpugOptionsBuilderClass.prototype.addText = function ($elem, text) {\n        if (text === undefined)\n            return;\n        $elem.text(\"\" + text);\n    };\n    jQpugOptionsBuilderClass.prototype.addHtml = function ($elem, html) {\n        if (html === undefined)\n            return;\n        $elem.html(html);\n    };\n    jQpugOptionsBuilderClass.prototype.addContent = function ($elem, content) {\n        if (content === undefined)\n            return;\n        if (content instanceof Array) {\n            content.forEach(function (elem) {\n                $elem.append(elem);\n            });\n        }\n        else {\n            $elem.append(content);\n        }\n    };\n    jQpugOptionsBuilderClass.prototype.addClick = function ($elem, clickFunction) {\n        if (clickFunction === undefined || typeof clickFunction !== \"function\")\n            return;\n        $elem.on('click', function (event) {\n            clickFunction(jQuery(event.currentTarget));\n            return false;\n        });\n    };\n    return jQpugOptionsBuilderClass;\n}());\n\nvar jQpugOptionsBuilder = new jQpugOptionsBuilderClass();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (jQpugOptionsBuilder);\n\n\n//# sourceURL=webpack://jqpug/./src/JQpugOptionsBuilder.ts?");

/***/ }),

/***/ "./src/JQpugPugFactory.ts":
/*!********************************!*\
  !*** ./src/JQpugPugFactory.ts ***!
  \********************************/
/*! namespace exports */
/*! export JQpugPugFactoryClass [provided] [no usage info] [missing usage info prevents renaming] */
/*! export default [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__.r, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"JQpugPugFactoryClass\": () => /* binding */ JQpugPugFactoryClass,\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nvar JQpugPugFactoryClass = /** @class */ (function () {\n    function JQpugPugFactoryClass() {\n    }\n    JQpugPugFactoryClass.prototype.create = function (pug) {\n        var tagName = this.extractTagName(pug);\n        // tag\n        var $elem = jQuery(\"<\" + tagName + \">\");\n        // classes\n        this.extractClassNames(pug).forEach(function (className) {\n            $elem.addClass(className);\n        });\n        // attr\n        var attr = this.extractAttr(pug);\n        for (var key in attr) {\n            if (!attr.hasOwnProperty(key))\n                continue;\n            $elem.attr(key, attr[key]);\n        }\n        // html\n        var html = this.extractHtml(pug);\n        if (html !== \"\")\n            $elem.html(html);\n        // 終わり\n        return $elem;\n    };\n    JQpugPugFactoryClass.prototype.extractTagName = function (pug) {\n        var tagName = \"div\";\n        var split = pug.split(/[. (]/);\n        if (split.length > 0) {\n            tagName = split[0];\n        }\n        return tagName;\n    };\n    JQpugPugFactoryClass.prototype.extractClassNames = function (pug) {\n        var classes = [];\n        var splitBySpace = pug.split(/[ (]/);\n        if (splitBySpace.length > 0) {\n            var tagAndClasses = splitBySpace[0];\n            var splitByDot = tagAndClasses.split('.');\n            if (splitByDot.length > 1) {\n                splitByDot.shift();\n                classes = classes.concat(splitByDot);\n            }\n        }\n        return classes;\n    };\n    JQpugPugFactoryClass.prototype.extractAttr = function (pug) {\n        var attr = {};\n        var matched = pug.match(/\\(.+?\\)/);\n        if (matched !== null) {\n            matched.forEach(function (m) {\n                var striped = m.replace(/^\\(/, \"\").replace(/\\)$/, \"\");\n                striped.split(\",\").forEach(function (s) {\n                    var cleanKeyAndValue = s.replace(/^ +/, \"\").replace(/ +$/, \"\");\n                    var keyValue = cleanKeyAndValue.split(\"=\");\n                    if (keyValue.length > 1) {\n                        var key = keyValue.shift();\n                        var value = keyValue.join(\"=\");\n                        attr[key] = value;\n                    }\n                });\n            });\n        }\n        return attr;\n    };\n    JQpugPugFactoryClass.prototype.extractHtml = function (pug) {\n        var html = \"\";\n        var split = pug.replace(/\\(.+?\\)/, \"\").split(\" \");\n        if (split.length > 1) {\n            split.shift();\n            html = split.join(\" \");\n        }\n        return html;\n    };\n    return JQpugPugFactoryClass;\n}());\n\nvar JQpugPugFactory = new JQpugPugFactoryClass();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (JQpugPugFactory);\n\n\n//# sourceURL=webpack://jqpug/./src/JQpugPugFactory.ts?");

/***/ }),

/***/ "./src/jpug.ts":
/*!*********************!*\
  !*** ./src/jpug.ts ***!
  \*********************/
/*! namespace exports */
/*! export jpug [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"jpug\": () => /* binding */ jpug\n/* harmony export */ });\n/* harmony import */ var _JQpugFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./JQpugFactory */ \"./src/JQpugFactory.ts\");\n\nvar jpug = function (pug, options) {\n    if (options === void 0) { options = undefined; }\n    return _JQpugFactory__WEBPACK_IMPORTED_MODULE_0__.default.create(pug, options);\n};\nwindow[\"jp\"] = jpug;\n\n\n//# sourceURL=webpack://jqpug/./src/jpug.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/jpug.ts");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;