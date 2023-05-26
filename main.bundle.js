"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkwebpack_project"] = self["webpackChunkwebpack_project"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\r\\n  box-sizing: border-box;\\r\\n}\\r\\n\\r\\nmain {\\r\\n  border: 1px solid #dfe1e6;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  width: 50%;\\r\\n  margin: auto;\\r\\n  gap: 0.5rem;\\r\\n}\\r\\n\\r\\nheader {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  padding: 0 0.75rem;\\r\\n  justify-content: space-between;\\r\\n  border-bottom: 1px solid #dfe1e6;\\r\\n}\\r\\n\\r\\nh1 {\\r\\n  font-size: 20px;\\r\\n}\\r\\n\\r\\n.refresh-icon-button {\\r\\n  background: white;\\r\\n  color: gray;\\r\\n  border: none;\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n  font-size: 17px;\\r\\n}\\r\\n\\r\\n.refresh-icon-button:hover {\\r\\n  color: #c2c1c1;\\r\\n}\\r\\n\\r\\n.todo-input {\\r\\n  padding: 0.75rem;\\r\\n  margin: -0.5rem 0;\\r\\n  font-style: italic;\\r\\n}\\r\\n\\r\\n.todo-list {\\r\\n  border-top: 1px solid #dfe1e6;\\r\\n  list-style-type: none;\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n}\\r\\n\\r\\n.todo {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  align-items: center;\\r\\n  padding: 0.5rem;\\r\\n  border-bottom: 1px solid #dfe1e6;\\r\\n}\\r\\n\\r\\n.todo-left {\\r\\n  display: flex;\\r\\n  gap: 0.75rem;\\r\\n}\\r\\n\\r\\n.checkbox {\\r\\n  background: white;\\r\\n  border: 5px solid gray;\\r\\n}\\r\\n\\r\\n.remove-button {\\r\\n  background: white;\\r\\n  color: gray;\\r\\n  border: none;\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n}\\r\\n\\r\\n.remove-button:hover {\\r\\n  color: #c2c1c1;\\r\\n}\\r\\n\\r\\n.remove-button:active {\\r\\n  color: red;\\r\\n}\\r\\n\\r\\n.delete {\\r\\n  font-size: 20px;\\r\\n}\\r\\n\\r\\n.clear-btn {\\r\\n  padding: 0.75rem;\\r\\n  margin: -0.5rem 0 0 0;\\r\\n  background: #f4f3f3;\\r\\n  border: 0;\\r\\n  color: #b1b1b1;\\r\\n}\\r\\n\\r\\n.clear-btn:hover {\\r\\n  color: #f4f3f3;\\r\\n  background: #b1b1b1;\\r\\n}\\r\\n\\r\\n.clear-btn:active {\\r\\n  color: white;\\r\\n  background: gray;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack-project/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://webpack-project/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://webpack-project/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://webpack-project/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://webpack-project/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://webpack-project/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://webpack-project/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://webpack-project/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://webpack-project/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://webpack-project/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_todos_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/todos.js */ \"./src/modules/todos.js\");\n/* harmony import */ var _modules_storageAvailable_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/storageAvailable.js */ \"./src/modules/storageAvailable.js\");\n/* harmony import */ var _modules_htmlElements_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/htmlElements.js */ \"./src/modules/htmlElements.js\");\n/* harmony import */ var _modules_completedCheck_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/completedCheck.js */ \"./src/modules/completedCheck.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nif ((0,_modules_storageAvailable_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])('localStorage')) {\r\n  _modules_todos_js__WEBPACK_IMPORTED_MODULE_1__.todos.checkStorage();\r\n\r\n  _modules_todos_js__WEBPACK_IMPORTED_MODULE_1__.todos.showTodos();\r\n\r\n  // Remove a To-Do\r\n  for (let i = 0; i < _modules_todos_js__WEBPACK_IMPORTED_MODULE_1__.todos.todos.length; i += 1) {\r\n    const removeButtons = document.querySelectorAll('.remove-button');\r\n    removeButtons[i].addEventListener('click', () => {\r\n      _modules_todos_js__WEBPACK_IMPORTED_MODULE_1__.todos[\"delete\"](i);\r\n    });\r\n  }\r\n\r\n  // Mark a To-Do as completed\r\n  (0,_modules_completedCheck_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(_modules_todos_js__WEBPACK_IMPORTED_MODULE_1__.todos);\r\n\r\n  // Edit a To-Do\r\n  for (let i = 0; i < _modules_todos_js__WEBPACK_IMPORTED_MODULE_1__.todos.todos.length; i += 1) {\r\n    const todoTexts = document.querySelectorAll('.todo-text');\r\n    todoTexts[i].addEventListener('keydown', (event) => {\r\n      if (event.keyCode === 13) {\r\n        event.preventDefault();\r\n      }\r\n    });\r\n    todoTexts[i].addEventListener('input', () => {\r\n      _modules_todos_js__WEBPACK_IMPORTED_MODULE_1__.todos.edit(i, todoTexts[i].innerHTML);\r\n    });\r\n  }\r\n\r\n  // Add a To-Do\r\n  _modules_htmlElements_js__WEBPACK_IMPORTED_MODULE_3__.todoInput.addEventListener('keyup', (event) => {\r\n    if (_modules_htmlElements_js__WEBPACK_IMPORTED_MODULE_3__.todoInput.value !== '') {\r\n      if (event.keyCode === 13) {\r\n        _modules_todos_js__WEBPACK_IMPORTED_MODULE_1__.todos.add({\r\n          description: _modules_htmlElements_js__WEBPACK_IMPORTED_MODULE_3__.todoInput.value,\r\n          isComplete: false,\r\n          index: _modules_todos_js__WEBPACK_IMPORTED_MODULE_1__.todos.todos.length + 1,\r\n        });\r\n        _modules_htmlElements_js__WEBPACK_IMPORTED_MODULE_3__.todoInput.value = '';\r\n      }\r\n    }\r\n  });\r\n\r\n  // Clean completed To-Dos\r\n  _modules_htmlElements_js__WEBPACK_IMPORTED_MODULE_3__.clearBtn.addEventListener('click', () => {\r\n    _modules_todos_js__WEBPACK_IMPORTED_MODULE_1__.todos.clearCompleted();\r\n  });\r\n}\r\n\n\n//# sourceURL=webpack://webpack-project/./src/index.js?");

/***/ }),

/***/ "./src/modules/completedCheck.js":
/*!***************************************!*\
  !*** ./src/modules/completedCheck.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst completeToDo = (todos) => {\r\n  for (let i = 0; i < todos.todos.length; i += 1) {\r\n    const checkboxes = document.querySelectorAll('.checkbox');\r\n    const todoTexts = document.querySelectorAll('.todo-text');\r\n    checkboxes[i].addEventListener('change', (e) => {\r\n      todos.complete(i, e.target.checked);\r\n      todoTexts[i].style = e.target.checked ? 'text-decoration: line-through' : 'text-decoration: none';\r\n    });\r\n  }\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (completeToDo);\n\n//# sourceURL=webpack://webpack-project/./src/modules/completedCheck.js?");

/***/ }),

/***/ "./src/modules/htmlElements.js":
/*!*************************************!*\
  !*** ./src/modules/htmlElements.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   clearBtn: () => (/* binding */ clearBtn),\n/* harmony export */   todoInput: () => (/* binding */ todoInput),\n/* harmony export */   todoList: () => (/* binding */ todoList)\n/* harmony export */ });\nconst todoList = document.getElementById('todo-list');\r\nconst todoInput = document.getElementById('todo-input');\r\nconst clearBtn = document.getElementById('clear-btn');\r\n\r\n\n\n//# sourceURL=webpack://webpack-project/./src/modules/htmlElements.js?");

/***/ }),

/***/ "./src/modules/storageAvailable.js":
/*!*****************************************!*\
  !*** ./src/modules/storageAvailable.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst storageAvailable = (type) => {\r\n  let storage;\r\n  const x = '__storage_test__';\r\n\r\n  try {\r\n    storage = window[type];\r\n    storage.setItem(x, x);\r\n    storage.removeItem(x);\r\n    return true;\r\n  } catch (e) {\r\n    return e instanceof DOMException && (\r\n      \r\n      e.code === 22 || e.code === 1014 || e.name === 'QuotaExceededError' || e.name === 'NS_ERROR_DOM_QUOTA_REACHED') && (storage && storage.length !== 0\r\n    );\r\n  }\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (storageAvailable);\n\n//# sourceURL=webpack://webpack-project/./src/modules/storageAvailable.js?");

/***/ }),

/***/ "./src/modules/todos.js":
/*!******************************!*\
  !*** ./src/modules/todos.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   todos: () => (/* binding */ todos),\n/* harmony export */   todosTest: () => (/* binding */ todosTest)\n/* harmony export */ });\n/* harmony import */ var _htmlElements_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./htmlElements.js */ \"./src/modules/htmlElements.js\");\n\r\n\r\nconst newTodos = [];\r\nclass Todos {\r\n  constructor() {\r\n    this.todos = [];\r\n  }\r\n\r\n  save = () => {\r\n    window.localStorage.setItem('todos', JSON.stringify(this.todos));\r\n    for (let i = 0; i < this.todos.length; i += 1) {\r\n      window.localStorage.setItem(i.toString(), JSON.stringify(this.todos[i]));\r\n    }\r\n  }\r\n\r\n  checkStorage = () => {\r\n    if (window.localStorage.getItem('todos') !== null) {\r\n      const array = JSON.parse(window.localStorage.getItem('todos'));\r\n      for (let i = 0; i < array.length; i += 1) {\r\n        newTodos[i] = JSON.parse(window.localStorage.getItem(i.toString()));\r\n      }\r\n      this.todos = newTodos;\r\n    }\r\n  }\r\n\r\n  add = (todo) => {\r\n    this.todos.push(todo);\r\n    this.save();\r\n    window.location.reload();\r\n  }\r\n\r\n  delete = (index) => {\r\n    this.todos.splice(index, 1);\r\n    for (let i = 0; i < this.todos.length; i += 1) {\r\n      this.todos[i].index = i + 1;\r\n    }\r\n    this.save();\r\n    window.location.reload();\r\n  }\r\n\r\n  complete = (index, completed) => {\r\n    this.todos[index].isComplete = completed;\r\n    this.save();\r\n  }\r\n\r\n  edit = (index, description) => {\r\n    this.todos[index].description = description;\r\n    this.save();\r\n  }\r\n\r\n  clearCompleted = () => {\r\n    this.todos = this.todos.filter((todo) => todo.isComplete === false);\r\n    for (let i = 0; i < this.todos.length; i += 1) {\r\n      this.todos[i].index = i + 1;\r\n    }\r\n    this.save();\r\n    window.location.reload();\r\n  }\r\n\r\n  showTodos = () => {\r\n    for (let i = 0; i < this.todos.length; i += 1) {\r\n      const content = document.createElement('li');\r\n      content.setAttribute('class', 'todo');\r\n      content.innerHTML = `\r\n        <div class=\"todo-left\">\r\n          <input type=\"checkbox\" class=\"checkbox\" ${this.todos[i].isComplete ? 'checked' : ''}>\r\n          <label class=\"todo-text\" contenteditable=\"true\" ${this.todos[i].isComplete ? 'style=\"text-decoration: line-through;\"' : ''}>${this.todos[i].description}</label>\r\n        </div>\r\n        <button class=\"remove-button\"><span class=\"iconify delete\" data-icon=\"fa-solid:trash-alt\"></span></button>\r\n      `;\r\n      _htmlElements_js__WEBPACK_IMPORTED_MODULE_0__.todoList.appendChild(content);\r\n    }\r\n  }\r\n}\r\n\r\nconst todos = new Todos();\r\nconst todosTest = new Todos();\r\n\r\n\n\n//# sourceURL=webpack://webpack-project/./src/modules/todos.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);