/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./comments.js":
/*!*********************!*\
  !*** ./comments.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getComments\": () => (/* binding */ getComments),\n/* harmony export */   \"addComment\": () => (/* binding */ addComment)\n/* harmony export */ });\nvar getComments = function getComments(id) {\n  var cards = document.querySelectorAll('.card');\n  cards.forEach(function (item) {\n    item.innerHTML = '';\n  });\n  generateFilmsByCat('film/', id);\n  var card = document.querySelector('.card');\n  var cardParrent = card.parentElement;\n  var commentsBlock = document.createElement('div');\n  commentsBlock.className = 'comment-block';\n  fetch('http://localhost:4030/review/' + id).then(function (res) {\n    return res.json();\n  }).then(function (json) {\n    json.forEach(function (item) {\n      var h5 = document.createElement('h5');\n      var p = document.createElement('p');\n      h5.textContent = item.authorName;\n      p.textContent = item.text;\n      commentsBlock.append(h5);\n      commentsBlock.append(p);\n    });\n  });\n  cardParrent.after(commentsBlock);\n  addComment(id);\n};\n\nvar addComment = function addComment(id) {\n  var commentsBlock = document.querySelector('.comment-block');\n  var formBlock = document.createElement('div');\n  var form = document.createElement(\"form\");\n  var inputName = document.createElement(\"input\");\n  var inputComment = document.createElement(\"input\");\n  var button = document.createElement(\"button\");\n  form.method = \"post\";\n  inputName.type = \"text\";\n  inputName.name = \"authorName\";\n  inputComment.type = \"text\";\n  inputComment.name = \"text\";\n  inputName.placeholder = 'name';\n  inputComment.placeholder = 'commentary';\n  button.type = \"submit\";\n  button.prepend(\"Отправить\");\n  form.append(inputName, inputComment, button);\n  button.addEventListener('click', function (e) {\n    e.preventDefault();\n    fetch('http://localhost:4030/review/' + id, {\n      method: \"POST\",\n      headers: {\n        \"Content-Type\": \"application/json\"\n      },\n      body: JSON.stringify({\n        authorName: inputName.value,\n        text: inputComment.value\n      })\n    }).then(function (res) {\n      return res.json();\n    }).then(function (json) {\n      commentsBlock.textContent = '';\n      formBlock.textContent = '';\n      inputComment.value = '';\n      inputName.value = '';\n      getComments(id);\n    });\n  });\n  commentsBlock.after(formBlock);\n  formBlock.append(form);\n};\n\n\n\n//# sourceURL=webpack:///./comments.js?");

/***/ }),

/***/ "./films.js":
/*!******************!*\
  !*** ./films.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"generateFilmsByCat\": () => (/* binding */ generateFilmsByCat),\n/* harmony export */   \"getRandomFilms\": () => (/* binding */ getRandomFilms)\n/* harmony export */ });\nfunction generateFilmsByCat(route, id) {\n  var cards = document.querySelectorAll('.card');\n  cards.forEach(function (item) {\n    item.innerHTML = '';\n  });\n  getRandomFilms(route + id);\n}\n\nvar getRandomFilms = function getRandomFilms(route) {\n  var cards = document.querySelectorAll('.card');\n  fetch('http://localhost:4030/' + route).then(function (res) {\n    return res.json();\n  }).then(function (json) {\n    json.forEach(function (item, i) {\n      var filmsTagA = document.createElement('a');\n      var filmImg = document.createElement('img');\n      var cardBlock = document.createElement('div');\n      var cardTitle = document.createElement('h5');\n      var cardText = document.createElement('p');\n      filmImg.src = item.img;\n      filmImg.className = 'card-img-top';\n      filmImg.style.height = '452px';\n      filmsTagA.append(filmImg);\n      cardBlock.className = 'card-body';\n      cardTitle.className = 'card-title';\n      cardTitle.textContent = item.name;\n      cardText.className = 'card-text';\n      cardText.textContent = item.description;\n      cardBlock.append(cardTitle);\n      cardBlock.append(cardText);\n      cards[i].append(filmsTagA);\n      cards[i].append(cardBlock);\n      filmsTagA.addEventListener('click', function () {\n        getComments(item._id);\n      });\n    });\n  });\n};\n\n\n\n//# sourceURL=webpack:///./films.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _script__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./script */ \"./script.js\");\n/* harmony import */ var _script__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_script__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _comments__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./comments */ \"./comments.js\");\n/* harmony import */ var _films__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./films */ \"./films.js\");\n/* harmony import */ var _public_css_style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./public/css/style.css */ \"./public/css/style.css\");\n\n\n\n\n(0,_script__WEBPACK_IMPORTED_MODULE_0__.addCatInMenu)('films/');\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./script.js":
/*!*******************!*\
  !*** ./script.js ***!
  \*******************/
/***/ (() => {

eval("// const addCatInMenu = (route) => {\n//     const block = document.getElementById('categories-menu')\n//     block.textContent = ''\n//     const mainTagA = document.createElement('a')\n//     mainTagA.className = 'nav-link text-danger'\n//     mainTagA.href = 'index.html'\n//     mainTagA.textContent = 'Главная'\n//     block.prepend(mainTagA)\n//     fetch('http://localhost:4030/genre')\n//         .then(res => res.json())\n//         .then(json => {\n//             json.forEach(item => {\n//                 const tagA = document.createElement('a')\n//                 tagA.className = 'nav-link'\n//                 tagA.href = '#'\n//                 tagA.textContent = item.name\n//                 block.append(tagA)\n//                 tagA.addEventListener('click', () => {\n//                     generateFilmsByCat('films/', item._id)\n//                 })\n//             });\n//         })\n//     getRandomFilms(route)\n// }\n// function generateFilmsByCat(route, id) {\n//     const cards = document.querySelectorAll('.card')\n//     cards.forEach(item => {\n//         item.innerHTML = ''\n//     })\n//     getRandomFilms(route + id)\n// }\n// const getComments = (id) => {\n//     const cards = document.querySelectorAll('.card')\n//     cards.forEach(item => {\n//         item.innerHTML = ''\n//     })\n//     generateFilmsByCat('film/', id)\n//     const card = document.querySelector('.card')\n//     const cardParrent = card.parentElement\n//     const commentsBlock = document.createElement('div')\n//     commentsBlock.className = 'comment-block'\n//     fetch('http://localhost:4030/review/' + id)\n//         .then(res => res.json())\n//         .then(json => {\n//             json.forEach(item => {\n//                 const h5 = document.createElement('h5')\n//                 const p = document.createElement('p')\n//                 h5.textContent = item.authorName\n//                 p.textContent = item.text\n//                 commentsBlock.append(h5)\n//                 commentsBlock.append(p)\n//             })\n//         })\n//     cardParrent.after(commentsBlock)\n//     addComment(id)\n// }\n// const addComment = (id) => {\n//     const commentsBlock = document.querySelector('.comment-block')\n//     const formBlock = document.createElement('div')\n//     const form = document.createElement(\"form\");\n//     const inputName = document.createElement(\"input\");\n//     const inputComment = document.createElement(\"input\");\n//     const button = document.createElement(\"button\");\n//     form.method = \"post\";\n//     inputName.type = \"text\";\n//     inputName.name = \"authorName\";\n//     inputComment.type = \"text\";\n//     inputComment.name = \"text\";\n//     inputName.placeholder = 'name'\n//     inputComment.placeholder = 'commentary'\n//     button.type = \"submit\";\n//     button.prepend(\"Отправить\");\n//     form.append(inputName, inputComment, button)\n//     button.addEventListener('click', (e) => {\n//         e.preventDefault()\n//         fetch('http://localhost:4030/review/' + id, {\n//                 method: \"POST\",\n//                 headers: {\n//                     \"Content-Type\": \"application/json\"\n//                 },\n//                 body: JSON.stringify({\n//                     authorName: inputName.value,\n//                     text: inputComment.value\n//                 })\n//             }).then(res => res.json())\n//             .then(json => {\n//                 commentsBlock.textContent = ''\n//                 formBlock.textContent = ''\n//                 inputComment.value = ''\n//                 inputName.value = ''\n//                 getComments(id)\n//             })\n//     })\n//     commentsBlock.after(formBlock)\n//     formBlock.append(form)\n// }\n// const getRandomFilms = (route) => {\n//     const cards = document.querySelectorAll('.card')\n//     fetch('http://localhost:4030/' + route)\n//         .then(res => res.json())\n//         .then(json => {\n//             json.forEach((item, i) => {\n//                 const filmsTagA = document.createElement('a')\n//                 const filmImg = document.createElement('img')\n//                 const cardBlock = document.createElement('div')\n//                 const cardTitle = document.createElement('h5')\n//                 const cardText = document.createElement('p')\n//                 filmImg.src = item.img\n//                 filmImg.className = 'card-img-top'\n//                 filmImg.style.height = '452px'\n//                 filmsTagA.append(filmImg)\n//                 cardBlock.className = 'card-body'\n//                 cardTitle.className = 'card-title'\n//                 cardTitle.textContent = item.name\n//                 cardText.className = 'card-text'\n//                 cardText.textContent = item.description\n//                 cardBlock.append(cardTitle)\n//                 cardBlock.append(cardText)\n//                 cards[i].append(filmsTagA)\n//                 cards[i].append(cardBlock)\n//                 filmsTagA.addEventListener('click', () => {\n//                     getComments(item._id)\n//                 })\n//             })\n//         })\n// }\n// export { addCatInMenu }\n\n//# sourceURL=webpack:///./script.js?");

/***/ }),

/***/ "../node_modules/css-loader/dist/cjs.js!./public/css/style.css":
/*!*********************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!./public/css/style.css ***!
  \*********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"../node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".container {\\r\\n  width: 1200px;\\r\\n}\\r\\n.navbar-brand {\\r\\n  margin-left: 20px;\\r\\n}\\r\\n.container-two {\\r\\n  width: 100%;\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  padding-top: 20px;\\r\\n}\\r\\n.container-two-right {\\r\\n  width: 200px;\\r\\n\\r\\n}\\r\\n.container-two-left {\\r\\n  margin-left: 20px;\\r\\n}\\r\\n\\r\\n.card-group {\\r\\n  margin-bottom: 20px;\\r\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./public/css/style.css?../node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/api.js":
/*!******************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/api.js ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack:///../node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./public/css/style.css":
/*!******************************!*\
  !*** ./public/css/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"../node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/getTarget.js */ \"../node_modules/style-loader/dist/runtime/getTarget.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"../node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./style.css */ \"../node_modules/css-loader/dist/cjs.js!./public/css/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = function(css, style){\n      if (style.styleSheet) {\n        style.styleSheet.cssText = css;\n      } else {\n      while (style.firstChild) {\n        style.removeChild(style.firstChild);\n      }\n\n      style.appendChild(document.createTextNode(css));\n    }\n  };\noptions.setAttributes = function(style) {\n        var nonce =\n           true ? __webpack_require__.nc : 0;\n\n        if (nonce) {\n          style.setAttribute(\"nonce\", nonce);\n        }\n      };\noptions.insert = function(style){\n    var target = _node_modules_style_loader_dist_runtime_getTarget_js__WEBPACK_IMPORTED_MODULE_2___default()(\"head\");\n\n    if (!target) {\n      throw new Error(\n        \"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\"\n      );\n    }\n\n    target.appendChild(style);\n  };\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_3___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_4__.default, options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_4__.default && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_4__.default.locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_4__.default.locals : undefined);\n\n\n//# sourceURL=webpack:///./public/css/style.css?");

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/getTarget.js":
/*!**************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/getTarget.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n\nmodule.exports = getTarget;\n\n//# sourceURL=webpack:///../node_modules/style-loader/dist/runtime/getTarget.js?");

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!***********************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \***********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var style = document.createElement(\"style\");\n  options.setAttributes(style, options.attributes);\n  options.insert(style);\n  return style;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack:///../node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!****************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \****************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute(\"media\", media);\n  } else {\n    style.removeAttribute(\"media\");\n  }\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, style);\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var style = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(style, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(style);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack:///../node_modules/style-loader/dist/runtime/styleDomAPI.js?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;