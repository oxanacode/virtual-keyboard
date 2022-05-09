/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/styles/style.scss":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/styles/style.scss ***!
  \*******************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/NunitoSans-Regular.woff2 */ \"./src/assets/styles/fonts/NunitoSans-Regular.woff2\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/NunitoSans-Bold.woff2 */ \"./src/assets/styles/fonts/NunitoSans-Bold.woff2\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"@font-face {\\n  font-family: \\\"Nunito Sans\\\";\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \") format(\\\"woff2\\\");\\n  font-weight: normal;\\n}\\n@font-face {\\n  font-family: \\\"Nunito Sans\\\";\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \") format(\\\"woff2\\\");\\n  font-weight: bold;\\n}\\n* {\\n  margin: 0;\\n  padding: 0;\\n  box-sizing: border-box;\\n  font-family: \\\"Nunito Sans\\\", sans-serif;\\n}\\n\\n.main-container {\\n  display: flex;\\n  flex-direction: column;\\n  gap: 40px;\\n  max-width: 846px;\\n  margin: 0 auto;\\n}\\n\\n.main-title {\\n  padding: 30px;\\n  text-align: center;\\n  font-size: 2.5rem;\\n  color: #383840;\\n}\\n\\n.textarea {\\n  display: block;\\n  width: 100%;\\n  height: 15vh;\\n  padding: 10px;\\n}\\n\\n.keyboard {\\n  display: flex;\\n  flex-direction: column;\\n  gap: 5px;\\n  padding: 10px;\\n  border: 3px solid #CCCCCC;\\n  border-radius: 5px;\\n  background-color: #EEEEEE;\\n  user-select: none;\\n}\\n\\n.keyboard-row {\\n  display: flex;\\n  gap: 5px;\\n}\\n\\n.subtitle {\\n  padding: 50px;\\n  text-align: center;\\n  font-size: 1.5rem;\\n  font-weight: 400;\\n}\\n\\n.key {\\n  width: 50px;\\n  height: 50px;\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-content: center;\\n  text-align: center;\\n  font-size: 1.2rem;\\n  color: white;\\n  background-color: #616673;\\n  border-radius: 3px;\\n  transition: background-color 0.3s, border-radius 0.3s;\\n}\\n.key.key_function {\\n  font-size: 1rem;\\n  font-weight: bold;\\n  background-color: #383840;\\n}\\n.key:hover {\\n  cursor: pointer;\\n  background-color: #FE83C6;\\n}\\n.key.active {\\n  background-color: #FA4EAB;\\n  border-radius: 50px;\\n}\\n\\n.key_size-space {\\n  width: 380px;\\n}\\n\\n.key_size-wide {\\n  width: 105px;\\n}\\n\\n.eng-down, .eng-up,\\n.ru-down, .ru-up {\\n  display: none;\\n}\\n\\n.keyboard.layout-eng .eng-down {\\n  display: inline-block;\\n}\\n.keyboard.layout-eng.shift .eng-up {\\n  display: inline-block;\\n}\\n.keyboard.layout-eng.shift .eng-down {\\n  display: none;\\n}\\n.keyboard.layout-eng.shift .letter .eng-down {\\n  display: inline-block;\\n  text-transform: capitalize;\\n}\\n\\n.keyboard.layout-ru .ru-down {\\n  display: block;\\n}\\n.keyboard.layout-ru.shift .ru-up {\\n  display: block;\\n}\\n.keyboard.layout-ru.shift .ru-down {\\n  display: none;\\n}\\n.keyboard.layout-ru.shift .letter .ru-down {\\n  display: block;\\n  text-transform: capitalize;\\n}\\n\\n.caps-lock .eng-down,\\n.caps-lock .ru-down {\\n  text-transform: capitalize;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://virtual-keyboard/./src/assets/styles/style.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://virtual-keyboard/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  }\n\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://virtual-keyboard/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://virtual-keyboard/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/assets/styles/style.scss":
/*!**************************************!*\
  !*** ./src/assets/styles/style.scss ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./style.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/styles/style.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://virtual-keyboard/./src/assets/styles/style.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://virtual-keyboard/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://virtual-keyboard/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://virtual-keyboard/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://virtual-keyboard/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://virtual-keyboard/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://virtual-keyboard/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/keys */ \"./src/scripts/keys.js\");\n/* harmony import */ var _scripts_keyboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/keyboard */ \"./src/scripts/keyboard.js\");\n/* harmony import */ var _assets_styles_style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/styles/style.scss */ \"./src/assets/styles/style.scss\");\n\n\n\n\nlet langSwitch = 'eng'; \nlet shiftSwitch = false;\nlet capsLockSwitch = false;\nlet shiftLeftSwitch = false;\nlet shiftRightSwitch = false;\n\nfunction switchLanguage() {\n  langSwitch = langSwitch === 'eng' ? 'ru' : 'eng';\n  localStorage.setItem('layout', langSwitch);\n  if (langSwitch === 'eng') {\n    _scripts_keyboard__WEBPACK_IMPORTED_MODULE_1__.keyboard.node.classList.remove('layout-ru');\n    _scripts_keyboard__WEBPACK_IMPORTED_MODULE_1__.keyboard.node.classList.add('layout-eng');\n  } else {\n    _scripts_keyboard__WEBPACK_IMPORTED_MODULE_1__.keyboard.node.classList.remove('layout-eng');\n    _scripts_keyboard__WEBPACK_IMPORTED_MODULE_1__.keyboard.node.classList.add('layout-ru');\n  }\n}\n\nif (localStorage.getItem('layout') == null || localStorage.getItem('layout') === 'eng') {\n  _scripts_keyboard__WEBPACK_IMPORTED_MODULE_1__.keyboard.node.classList.add('layout-eng');\n  localStorage.setItem('layout', 'eng');\n}\nif (localStorage.getItem('layout') === 'ru') {\n  _scripts_keyboard__WEBPACK_IMPORTED_MODULE_1__.keyboard.node.classList.add('layout-ru');\n  localStorage.setItem('layout', 'ru');\n  langSwitch = 'ru';\n}\n\nfunction changeText(key) {\n  let keyPrint = '';\n  let positionStart = _scripts_keyboard__WEBPACK_IMPORTED_MODULE_1__.textarea.node.selectionStart;\n  let positionEnd = _scripts_keyboard__WEBPACK_IMPORTED_MODULE_1__.textarea.node.selectionEnd;\n  if (key.type === 'Symbol') {\n    keyPrint = langSwitch === 'eng' ? key.downEng : key.downRu;\n    keyPrint = capsLockSwitch ? keyPrint.toUpperCase() : keyPrint;\n    if (shiftSwitch) {\n      if (langSwitch === 'eng') {\n        if (key.upEng) keyPrint = key.upEng;\n        else keyPrint = key.downEng.toUpperCase();\n      } else {\n        if (key.upRu) keyPrint = key.upRu;\n        keyPrint = key.downRu.toUpperCase();\n      }\n    }\n  } else {\n    switch (key.code) {\n      case 'Tab':\n        keyPrint = '\\t';\n        break;\n      case 'Space':\n        keyPrint = ' ';\n        break;\n      case 'Backspace':\n        if (_scripts_keyboard__WEBPACK_IMPORTED_MODULE_1__.textarea.node.value.length\n          && positionStart === positionEnd) positionStart -= 1;\n        break;\n      case 'Enter':\n        keyPrint = '\\n';\n        break;\n      case 'Delete':\n        if (positionStart === positionEnd) positionEnd += 1;\n        break;\n      case 'ArrowLeft':\n        if (positionStart) {\n          positionStart -= 1;\n          positionEnd = positionStart;\n        }\n        break;\n      case 'ArrowRight':\n        if (positionEnd < _scripts_keyboard__WEBPACK_IMPORTED_MODULE_1__.textarea.node.value.length) {\n          positionEnd += 1;\n          positionStart = positionEnd;\n        }\n        break;\n      case 'ArrowUp':\n        keyPrint = key.down;\n        break;\n      case 'ArrowDown':\n        keyPrint = key.down;\n        break;\n      default:\n    }\n  }\n  _scripts_keyboard__WEBPACK_IMPORTED_MODULE_1__.textarea.node.setRangeText(keyPrint, positionStart, positionEnd, 'end');\n}\n\nfunction keyboardHandler(event) {\n  const pressedKey = _scripts_keys__WEBPACK_IMPORTED_MODULE_0__[\"default\"].flat().find((el) => el.code === event.code);\n  if (!pressedKey) return;\n  event.preventDefault();\n  const virtualKey = document.querySelector(`#${pressedKey.code}`);\n  if (event.type === 'keydown') {\n    virtualKey.classList.add('active');\n    changeText(pressedKey);\n    _scripts_keyboard__WEBPACK_IMPORTED_MODULE_1__.textarea.node.focus();\n\n    if (event.code === 'ShiftLeft') {\n      shiftSwitch = true;\n      shiftLeftSwitch = true;\n      shiftRightSwitch = false;\n      _scripts_keyboard__WEBPACK_IMPORTED_MODULE_1__.keyboard.node.classList.add('shift');\n      document.querySelector('#ShiftRight').classList.remove('active');\n    }\n    if (event.code === 'ShiftRight') {\n      shiftSwitch = true;\n      shiftLeftSwitch = false;\n      shiftRightSwitch = true;\n      _scripts_keyboard__WEBPACK_IMPORTED_MODULE_1__.keyboard.node.classList.add('shift');\n      document.querySelector('#ShiftLeft').classList.remove('active');\n    }\n    if (event.key === 'CapsLock') {\n      capsLockSwitch = !capsLockSwitch;\n      if (capsLockSwitch) {\n        _scripts_keyboard__WEBPACK_IMPORTED_MODULE_1__.keyboard.node.classList.add('caps-lock');\n      } else {\n        _scripts_keyboard__WEBPACK_IMPORTED_MODULE_1__.keyboard.node.classList.remove('caps-lock');\n        virtualKey.classList.remove('active');\n      }\n    }\n    if (event.code === 'AltLeft' && shiftLeftSwitch) {\n      switchLanguage();\n      document.querySelector('#ShiftLeft').classList.remove('active');\n      shiftLeftSwitch = false;\n      shiftSwitch = false;\n      _scripts_keyboard__WEBPACK_IMPORTED_MODULE_1__.keyboard.node.classList.remove('shift');\n    }\n  } else {\n    if (event.key !== 'CapsLock') virtualKey.classList.remove('active');\n    if (event.key === 'Shift') {\n      shiftSwitch = false;\n      shiftLeftSwitch = false;\n      shiftRightSwitch = false;\n      _scripts_keyboard__WEBPACK_IMPORTED_MODULE_1__.keyboard.node.classList.remove('shift');\n    }\n  }\n}\n\nwindow.addEventListener('keydown', keyboardHandler);\nwindow.addEventListener('keyup', keyboardHandler);\n\n_scripts_keyboard__WEBPACK_IMPORTED_MODULE_1__.keyboard.node.addEventListener('mousedown', (event) => {\n  const pressedKey = event.target.closest('.key');\n  if (!pressedKey) return;\n  event.preventDefault();\n  pressedKey.classList.add('active');\n  const virtualKey = _scripts_keys__WEBPACK_IMPORTED_MODULE_0__[\"default\"].flat().find((el) => el.code === pressedKey.id);\n  changeText(virtualKey);\n  _scripts_keyboard__WEBPACK_IMPORTED_MODULE_1__.textarea.node.focus();\n\n  if (pressedKey.id === 'AltLeft') {\n    if (shiftLeftSwitch) switchLanguage();\n  }\n  if (pressedKey.id === 'CapsLock') {\n    capsLockSwitch = !capsLockSwitch;\n    if (capsLockSwitch) {\n      _scripts_keyboard__WEBPACK_IMPORTED_MODULE_1__.keyboard.node.classList.add('caps-lock');\n    } else {\n      _scripts_keyboard__WEBPACK_IMPORTED_MODULE_1__.keyboard.node.classList.remove('caps-lock');\n      pressedKey.classList.remove('active');\n    }\n  }\n\n  if (pressedKey.id === 'ShiftLeft') {\n    document.querySelector('#ShiftRight').classList.remove('active');\n    if (shiftLeftSwitch) pressedKey.classList.remove('active');\n    shiftRightSwitch = false;\n    shiftLeftSwitch = !shiftLeftSwitch;\n    shiftSwitch = shiftLeftSwitch;\n  } else if (pressedKey.id === 'ShiftRight') {\n    document.querySelector('#ShiftLeft').classList.remove('active');\n    if (shiftRightSwitch) pressedKey.classList.remove('active');\n    shiftLeftSwitch = false;\n    shiftRightSwitch = !shiftRightSwitch;\n    shiftSwitch = shiftRightSwitch;\n  } else {\n    shiftSwitch = false;\n    if (shiftLeftSwitch) {\n      shiftLeftSwitch = false;\n      document.querySelector('#ShiftLeft').classList.remove('active');\n    }\n    if (shiftRightSwitch) {\n      shiftRightSwitch = false;\n      document.querySelector('#ShiftRight').classList.remove('active');\n    }\n  }\n  if (shiftSwitch)_scripts_keyboard__WEBPACK_IMPORTED_MODULE_1__.keyboard.node.classList.add('shift');\n  else _scripts_keyboard__WEBPACK_IMPORTED_MODULE_1__.keyboard.node.classList.remove('shift');\n});\n\n_scripts_keyboard__WEBPACK_IMPORTED_MODULE_1__.keyboard.node.addEventListener('mouseup', (event) => {\n  const pressedKey = event.target.closest('.key');\n  if (!pressedKey) return;\n  if (pressedKey.id !== 'ShiftLeft'\n    && pressedKey.id !== 'ShiftRight'\n    && pressedKey.id !== 'CapsLock') pressedKey.classList.remove('active');\n});\n\n\n//# sourceURL=webpack://virtual-keyboard/./src/index.js?");

/***/ }),

/***/ "./src/scripts/keyboard.js":
/*!*********************************!*\
  !*** ./src/scripts/keyboard.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"keyboard\": () => (/* binding */ keyboard),\n/* harmony export */   \"textarea\": () => (/* binding */ textarea)\n/* harmony export */ });\n/* harmony import */ var _newDomElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./newDomElement */ \"./src/scripts/newDomElement.js\");\n/* harmony import */ var _keys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./keys */ \"./src/scripts/keys.js\");\n\n\n\nconst title = new _newDomElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"](document.body, 'h1', 'main-title');\nconst mainContainer = new _newDomElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"](document.body, 'div', 'main-container');\ntitle.node.textContent = 'Virtual Keyboard';\nconst textarea = new _newDomElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"](mainContainer.node, 'textarea', 'textarea');\nconst subtitle = new _newDomElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"](document.body, 'h3', 'subtitle');\nsubtitle.node.innerText = 'OS Windows\\n Language switch: (left) Shift + Alt';\n\nconst keyboard = new _newDomElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"](mainContainer.node, 'div', 'keyboard');\nfor (let i = 0; i < _keys__WEBPACK_IMPORTED_MODULE_1__[\"default\"].length; i += 1) {\n  const keyboardRow = new _newDomElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"](keyboard.node, 'div', 'keyboard-row');\n  _keys__WEBPACK_IMPORTED_MODULE_1__[\"default\"][i].forEach((key) => {\n    const keyElement = new _newDomElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"](keyboardRow.node, 'div', 'key');\n    keyElement.node.id = key.code;\n    if (key.type === 'Function') {\n      keyElement.node.classList.add('key_function');\n      keyElement.node.innerHTML = `<span class=\"down\">${key.down}</span>`;\n    }\n    if (key.specialSize !== undefined) {\n      if (key.specialSize === 1) keyElement.node.classList.add('key_size-wide');\n      else keyElement.node.classList.add('key_size-space');\n    }\n    if (key.type === 'Symbol') {\n      keyElement.node.innerHTML = `<span class=\"eng-down\">${key.downEng}</span>`;\n      if (key.upEng !== undefined) keyElement.node.innerHTML += `<span class=\"eng-up\">${key.upEng}</span>`;\n      if (key.downRu !== undefined) keyElement.node.innerHTML += `<span class=\"ru-down\">${key.downRu}</span>`;\n      if (key.upRu !== undefined) keyElement.node.innerHTML += `<span class=\"ru-up\">${key.upRu}</span>`;\n    }\n    if (key.letter) keyElement.node.classList.add('letter');\n  });\n}\n\n\n\n\n//# sourceURL=webpack://virtual-keyboard/./src/scripts/keyboard.js?");

/***/ }),

/***/ "./src/scripts/keys.js":
/*!*****************************!*\
  !*** ./src/scripts/keys.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst keys = [\n  [\n    {\n      code: 'Backquote',\n      type: 'Symbol',\n      downEng: '`',\n      upEng: '~',\n      downRu: 'ё',\n      upRu: 'Ё',\n    },\n    {\n      code: 'Digit1',\n      type: 'Symbol',\n      downEng: '1',\n      upEng: '!',\n      downRu: '1',\n      upRu: '!',\n    },\n    {\n      code: 'Digit2',\n      type: 'Symbol',\n      downEng: '2',\n      upEng: '@',\n      downRu: '2',\n      upRu: '\"',\n    },\n    {\n      code: 'Digit3',\n      type: 'Symbol',\n      downEng: '3',\n      upEng: '#',\n      downRu: '3',\n      upRu: '№',\n    },\n    {\n      code: 'Digit4',\n      type: 'Symbol',\n      downEng: '4',\n      upEng: '$',\n      downRu: '4',\n      upRu: ';',\n    },\n    {\n      code: 'Digit5',\n      type: 'Symbol',\n      downEng: '5',\n      upEng: '%',\n      downRu: '5',\n      upRu: '%',\n    },\n    {\n      code: 'Digit6',\n      type: 'Symbol',\n      downEng: '6',\n      upEng: '^',\n      downRu: '6',\n      upRu: ':',\n    },\n    {\n      code: 'Digit7',\n      type: 'Symbol',\n      downEng: '7',\n      upEng: '&',\n      upRu: '?',\n      downRu: '7',\n    },\n    {\n      code: 'Digit8',\n      type: 'Symbol',\n      downEng: '8',\n      upEng: '*',\n      downRu: '8',\n      upRu: '*',\n    },\n    {\n      code: 'Digit9',\n      type: 'Symbol',\n      downEng: '9',\n      upEng: '(',\n      downRu: '9',\n      upRu: '(',\n    },\n    {\n      code: 'Digit0',\n      type: 'Symbol',\n      downEng: '0',\n      upEng: ')',\n      downRu: '0',\n      upRu: ')',\n    },\n    {\n      code: 'Minus',\n      type: 'Symbol',\n      downEng: '-',\n      upEng: '_',\n      downRu: '-',\n      upRu: '_',\n    },\n    {\n      code: 'Equal',\n      type: 'Symbol',\n      downEng: '=',\n      upEng: '+',\n      downRu: '=',\n      upRu: '+',\n    },\n    {\n      code: 'Backspace',\n      type: 'Function',\n      down: 'Backspace',\n      specialSize: 1,\n    },\n  ],\n  [\n    {\n      code: 'Tab',\n      type: 'Function',\n      down: 'Tab',\n    },\n    {\n      code: 'KeyQ',\n      type: 'Symbol',\n      downEng: 'q',\n      downRu: 'й',\n      letter: true,\n    },\n    {\n      code: 'KeyW',\n      type: 'Symbol',\n      downEng: 'w',\n      downRu: 'ц',\n      letter: true,\n    },\n    {\n      code: 'KeyE',\n      type: 'Symbol',\n      downEng: 'e',\n      downRu: 'у',\n      letter: true,\n    },\n    {\n      code: 'KeyR',\n      type: 'Symbol',\n      downEng: 'r',\n      downRu: 'к',\n      letter: true,\n    },\n    {\n      code: 'KeyT',\n      type: 'Symbol',\n      downEng: 't',\n      downRu: 'е',\n      letter: true,\n    },\n    {\n      code: 'KeyY',\n      type: 'Symbol',\n      downEng: 'y',\n      downRu: 'н',\n      letter: true,\n    },\n    {\n      code: 'KeyU',\n      type: 'Symbol',\n      downEng: 'u',\n      downRu: 'г',\n      letter: true,\n    },\n    {\n      code: 'KeyI',\n      type: 'Symbol',\n      downEng: 'i',\n      downRu: 'ш',\n      letter: true,\n    },\n    {\n      code: 'KeyO',\n      type: 'Symbol',\n      downEng: 'o',\n      downRu: 'щ',\n      letter: true,\n    },\n    {\n      code: 'KeyP',\n      type: 'Symbol',\n      downEng: 'p',\n      downRu: 'з',\n      letter: true,\n    },\n    {\n      code: 'BracketLeft',\n      type: 'Symbol',\n      upEng: '{',\n      downEng: '[',\n      downRu: 'х',\n      upRu: 'Х',\n    },\n    {\n      code: 'BracketRight',\n      type: 'Symbol',\n      downEng: ']',\n      downRu: 'ъ',\n      upEng: '}',\n      upRu: 'Ъ',\n    },\n    {\n      code: 'Backslash',\n      type: 'Symbol',\n      downEng: '\\\\',\n      downRu: '\\\\',\n      upEng: '|',\n      upRu: '/',\n    },\n    {\n      code: 'Delete',\n      type: 'Function',\n      down: 'Del',\n    },\n  ],\n  [\n    {\n      code: 'CapsLock',\n      type: 'Function',\n      down: 'CapsLock',\n      specialSize: 1,\n    },\n    {\n      code: 'KeyA',\n      type: 'Symbol',\n      downEng: 'a',\n      downRu: 'ф',\n      letter: true,\n    },\n    {\n      code: 'KeyS',\n      type: 'Symbol',\n      downEng: 's',\n      downRu: 'ы',\n      letter: true,\n    },\n    {\n      code: 'KeyD',\n      type: 'Symbol',\n      downEng: 'd',\n      downRu: 'в',\n      letter: true,\n    },\n    {\n      code: 'KeyF',\n      type: 'Symbol',\n      downEng: 'f',\n      downRu: 'а',\n      letter: true,\n    },\n    {\n      code: 'KeyG',\n      type: 'Symbol',\n      downEng: 'g',\n      downRu: 'п',\n      letter: true,\n    },\n    {\n      code: 'KeyH',\n      type: 'Symbol',\n      downEng: 'h',\n      downRu: 'р',\n      letter: true,\n    },\n    {\n      code: 'KeyJ',\n      type: 'Symbol',\n      downEng: 'j',\n      downRu: 'о',\n      letter: true,\n    },\n    {\n      code: 'KeyK',\n      type: 'Symbol',\n      downEng: 'k',\n      downRu: 'л',\n      letter: true,\n    },\n    {\n      code: 'KeyL',\n      type: 'Symbol',\n      downEng: 'l',\n      downRu: 'д',\n      letter: true,\n    },\n    {\n      code: 'Semicolon',\n      type: 'Symbol',\n      downEng: ';',\n      downRu: 'ж',\n      upEng: ':',\n      upRu: 'Ж',\n    },\n    {\n      code: 'Quote',\n      type: 'Symbol',\n      upEng: '\\'',\n      downEng: '\\'',\n      downRu: 'э',\n      upRu: 'Э',\n    },\n    {\n      code: 'Enter',\n      type: 'Function',\n      down: 'Enter',\n      specialSize: 1,\n    },\n  ],\n  [\n    {\n      code: 'ShiftLeft',\n      type: 'Function',\n      down: 'Shift',\n      specialSize: 1,\n    },\n    {\n      code: 'KeyZ',\n      type: 'Symbol',\n      downEng: 'z',\n      downRu: 'я',\n      letter: true,\n    },\n    {\n      code: 'KeyX',\n      type: 'Symbol',\n      downEng: 'x',\n      downRu: 'ч',\n      letter: true,\n    },\n    {\n      code: 'KeyC',\n      type: 'Symbol',\n      downEng: 'c',\n      downRu: 'с',\n      letter: true,\n    },\n    {\n      code: 'KeyV',\n      type: 'Symbol',\n      downEng: 'v',\n      downRu: 'м',\n      letter: true,\n    },\n    {\n      code: 'KeyB',\n      type: 'Symbol',\n      downEng: 'b',\n      downRu: 'и',\n      letter: true,\n    },\n    {\n      code: 'KeyN',\n      type: 'Symbol',\n      downEng: 'n',\n      downRu: 'т',\n      letter: true,\n    },\n    {\n      code: 'KeyM',\n      type: 'Symbol',\n      downEng: 'm',\n      downRu: 'ь',\n      letter: true,\n    },\n    {\n      code: 'Comma',\n      type: 'Symbol',\n      downEng: ',',\n      downRu: 'б',\n      upEng: '<',\n      upRu: 'Б',\n    },\n    {\n      code: 'Period',\n      type: 'Symbol',\n      downEng: '.',\n      downRu: 'ю',\n      upEng: '>',\n      upRu: 'Ю',\n    },\n    {\n      code: 'Slash',\n      type: 'Symbol',\n      downEng: '/',\n      downRu: '.',\n      upEng: '?',\n      upRu: ',',\n    },\n    {\n      code: 'ArrowUp',\n      type: 'Function',\n      down: '↑',\n    },\n    {\n      code: 'ShiftRight',\n      type: 'Function',\n      down: 'Shift',\n      specialSize: 1,\n    },\n  ],\n  [\n    {\n      code: 'ControlLeft',\n      type: 'Function',\n      down: 'Ctrl',\n    },\n    {\n      code: 'MetaLeft',\n      type: 'Function',\n      down: 'Win',\n    },\n    {\n      code: 'AltLeft',\n      type: 'Function',\n      down: 'Alt',\n    },\n    {\n      code: 'Space',\n      type: 'Function',\n      down: '',\n      specialSize: 2,\n    },\n    {\n      code: 'AltRight',\n      type: 'Function',\n      down: 'Alt',\n    },\n    {\n      code: 'ArrowLeft',\n      type: 'Function',\n      down: '←',\n    },\n    {\n      code: 'ArrowDown',\n      type: 'Function',\n      down: '↓',\n    },\n    {\n      code: 'ArrowRight',\n      type: 'Function',\n      down: '→',\n    },\n    {\n      code: 'ControlRight',\n      type: 'Function',\n      down: 'Ctrl',\n    },\n  ],\n];\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (keys);\n\n\n//# sourceURL=webpack://virtual-keyboard/./src/scripts/keys.js?");

/***/ }),

/***/ "./src/scripts/newDomElement.js":
/*!**************************************!*\
  !*** ./src/scripts/newDomElement.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ DomElement)\n/* harmony export */ });\nclass DomElement {\n  constructor(parentNode, tagName, className = '') {\n    const element = document.createElement(tagName);\n    element.className = className;\n    parentNode.append(element);\n    this.node = element;\n  }\n}\n\n\n//# sourceURL=webpack://virtual-keyboard/./src/scripts/newDomElement.js?");

/***/ }),

/***/ "./src/assets/styles/fonts/NunitoSans-Bold.woff2":
/*!*******************************************************!*\
  !*** ./src/assets/styles/fonts/NunitoSans-Bold.woff2 ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"5399fc5ead9b8119b033.woff2\";\n\n//# sourceURL=webpack://virtual-keyboard/./src/assets/styles/fonts/NunitoSans-Bold.woff2?");

/***/ }),

/***/ "./src/assets/styles/fonts/NunitoSans-Regular.woff2":
/*!**********************************************************!*\
  !*** ./src/assets/styles/fonts/NunitoSans-Regular.woff2 ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"f7b09cdeb340a4d9893c.woff2\";\n\n//# sourceURL=webpack://virtual-keyboard/./src/assets/styles/fonts/NunitoSans-Regular.woff2?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;