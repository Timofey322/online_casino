/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/server.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/server/indexTemplate.js":
/*!*************************************!*\
  !*** ./src/server/indexTemplate.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.indexTemplate = void 0;\r\nvar indexTemplate = function (content) { return \"\\n<!DOCTYPE html>\\n<html lang=\\\"ru\\\">\\n\\n<head>\\n  <meta charset=\\\"UTF-8\\\">\\n  <meta http-equiv=\\\"X-UA-Compatible\\\" content=\\\"IE=edge\\\">\\n  <meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1.0\\\">\\n  <title>Agima</title>\\n  <script src=\\\"/static/client.js\\\" type=\\\"application/javascript\\\"></script>\\n</head>\\n\\n<body>\\n  <div id=\\\"react_root\\\">\".concat(content, \"</div>\\n</body>\\n\\n</html>\\n\"); };\r\nexports.indexTemplate = indexTemplate;\r\n\n\n//# sourceURL=webpack:///./src/server/indexTemplate.js?");

/***/ }),

/***/ "./src/server/server.js":
/*!******************************!*\
  !*** ./src/server/server.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\r\nvar server_1 = __importDefault(__webpack_require__(/*! react-dom/server */ \"react-dom/server\"));\r\nvar App_jsx_1 = __webpack_require__(/*! ../shared/App.jsx */ \"./src/shared/App.jsx\");\r\nvar indexTemplate_1 = __webpack_require__(/*! ./indexTemplate */ \"./src/server/indexTemplate.js\");\r\nvar app = (0, express_1.default)();\r\napp.use('/static', express_1.default.static('./dist/client'));\r\napp.get('/', function (req, res) {\r\n    res.send((0, indexTemplate_1.indexTemplate)(server_1.default.renderToString((0, App_jsx_1.App)())));\r\n});\r\napp.listen(3000, function () {\r\n    console.log(\"server started on port http://localhost:3000\");\r\n});\r\n\n\n//# sourceURL=webpack:///./src/server/server.js?");

/***/ }),

/***/ "./src/shared/App.jsx":
/*!****************************!*\
  !*** ./src/shared/App.jsx ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    var desc = Object.getOwnPropertyDescriptor(m, k);\r\n    if (!desc || (\"get\" in desc ? !m.__esModule : desc.writable || desc.configurable)) {\r\n      desc = { enumerable: true, get: function() { return m[k]; } };\r\n    }\r\n    Object.defineProperty(o, k2, desc);\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.App = void 0;\r\nvar root_1 = __webpack_require__(/*! react-hot-loader/root */ \"react-hot-loader/root\");\r\nvar React = __importStar(__webpack_require__(/*! react */ \"react\"));\r\nvar app_css_1 = __importDefault(__webpack_require__(/*! ./app.css */ \"./src/shared/app.css\"));\r\n__webpack_require__(/*! ./fonts/Roboto/Roboto-Bold.woff2 */ \"./src/shared/fonts/Roboto/Roboto-Bold.woff2\");\r\n__webpack_require__(/*! ./img/Backgroundimage.svg */ \"./src/shared/img/Backgroundimage.svg\");\r\n// import {Layout} from './Layout/Layout.tsx'\r\n// import {Tittle} from './Layout/ControlledForm/Tittle.tsx'\r\nvar ControlledForm_tsx_1 = __webpack_require__(/*! ./ControlledForm/ControlledForm.tsx */ \"./src/shared/ControlledForm/ControlledForm.tsx\");\r\n// import {ThreadTittle} from './Header/ThreadTittle.tsx'\r\nfunction AppComponent() {\r\n    return (React.createElement(\"div\", { className: app_css_1.default.container },\r\n        React.createElement(\"h1\", { className: app_css_1.default.header }, \"\\u0410\\u043D\\u043A\\u0435\\u0442\\u0430 \\u0434\\u043B\\u044F \\u043D\\u043E\\u0432\\u044B\\u0445 \\u043A\\u043B\\u0438\\u0435\\u043D\\u0442\\u043E\\u0432\"),\r\n        React.createElement(ControlledForm_tsx_1.ControlledForm, null)));\r\n}\r\nexports.App = (0, root_1.hot)(AppComponent);\r\n\n\n//# sourceURL=webpack:///./src/shared/App.jsx?");

/***/ }),

/***/ "./src/shared/ControlledForm/ControlledForm.tsx":
/*!******************************************************!*\
  !*** ./src/shared/ControlledForm/ControlledForm.tsx ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.ControlledForm = void 0;\r\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\r\nvar controlledform_css_1 = __importDefault(__webpack_require__(/*! ./controlledform.css */ \"./src/shared/ControlledForm/controlledform.css\"));\r\nvar react_2 = __webpack_require__(/*! react */ \"react\");\r\nfunction ControlledForm() {\r\n    var _a = (0, react_2.useState)(true), formVisible = _a[0], setFormVisible = _a[1];\r\n    var hideForm = function () {\r\n        setFormVisible(false);\r\n    };\r\n    var showForm = function () {\r\n        setFormVisible(true);\r\n    };\r\n    return (react_1.default.createElement(\"div\", { className: controlledform_css_1.default.module },\r\n        formVisible && (react_1.default.createElement(\"div\", null,\r\n            react_1.default.createElement(\"p\", { className: controlledform_css_1.default.module__title }, \"\\u0421\\u043E\\u043E\\u0431\\u0449\\u0435\\u043D\\u0438\\u0435 \\u0432 \\u0441\\u0432\\u043E\\u0431\\u043E\\u0434\\u043D\\u043E\\u0439 \\u0444\\u043E\\u0440\\u043C\\u0435\"),\r\n            react_1.default.createElement(\"form\", { className: controlledform_css_1.default.module__registration, method: \"POST\" },\r\n                react_1.default.createElement(\"input\", { className: controlledform_css_1.default.input, type: \"text\", required: true, name: \"name\", placeholder: \"\\u0412\\u0430\\u0448\\u0435 \\u0438\\u043C\\u044F\" }),\r\n                react_1.default.createElement(\"input\", { className: controlledform_css_1.default.input, type: \"text\", required: true, name: \"company\", placeholder: \"\\u041A\\u043E\\u043C\\u043F\\u0430\\u043D\\u0438\\u044F\" }),\r\n                react_1.default.createElement(\"input\", { className: controlledform_css_1.default.input, type: \"tel\", required: true, name: \"telephone\", placeholder: \"\\u0422\\u0435\\u043B\\u0435\\u0444\\u043E\\u043D\" }),\r\n                react_1.default.createElement(\"input\", { className: controlledform_css_1.default.input, type: \"email\", required: true, name: \"e-mail\", placeholder: \"\\u042D\\u043B\\u0435\\u043A\\u0442\\u0440\\u043E\\u043D\\u043D\\u0430\\u044F \\u043F\\u043E\\u0447\\u0442\\u0430\" }),\r\n                react_1.default.createElement(\"textarea\", { className: controlledform_css_1.default.textarea, name: \"message\", placeholder: \"\\u041D\\u0430\\u043F\\u0438\\u0448\\u0438\\u0442\\u0435 \\u0442\\u0435\\u043A\\u0441\\u0442 \\u043E\\u0431\\u0440\\u0430\\u0449\\u0435\\u043D\\u0438\\u044F\" }),\r\n                react_1.default.createElement(\"button\", { className: controlledform_css_1.default.question_btn, onClick: hideForm }, \"?\"),\r\n                react_1.default.createElement(\"label\", { htmlFor: \"myfile\", className: controlledform_css_1.default.input_file },\r\n                    react_1.default.createElement(\"input\", { type: \"file\", name: \"file\" }),\r\n                    react_1.default.createElement(\"span\", null, \"\\u0438\\u043B\\u0438 \\u043F\\u0440\\u0438\\u043A\\u0440\\u0435\\u043F\\u0438\\u0442\\u0435 \\u0444\\u0430\\u0439\\u043B\")),\r\n                react_1.default.createElement(\"div\", { className: controlledform_css_1.default.basement },\r\n                    react_1.default.createElement(\"label\", { className: controlledform_css_1.default.checkbox },\r\n                        react_1.default.createElement(\"input\", { className: controlledform_css_1.default.checkbox__input, type: \"checkbox\", required: true }),\r\n                        react_1.default.createElement(\"span\", { className: controlledform_css_1.default.checkbox__checkmark }),\r\n                        react_1.default.createElement(\"span\", { className: controlledform_css_1.default.checkbox__body },\r\n                            \"\\u0421\\u043E\\u0433\\u043B\\u0430\\u0441\\u0435\\u043D \\u043D\\u0430 \\u043E\\u0431\\u0440\\u0430\\u0431\\u043E\\u0442\\u043A\\u0443 \\u043C\\u043E\\u0438\\u0445 \",\r\n                            react_1.default.createElement(\"div\", null, \"\\u043F\\u0435\\u0440\\u0441\\u043E\\u043D\\u0430\\u043B\\u044C\\u043D\\u044B\\u0445 \\u0434\\u0430\\u043D\\u043D\\u044B\\u0445\"))),\r\n                    react_1.default.createElement(\"button\", { className: controlledform_css_1.default.submit_btn, type: \"submit\" }, \"\\u041E\\u0442\\u043F\\u0440\\u0430\\u0432\\u0438\\u0442\\u044C\"))))),\r\n        !formVisible && (react_1.default.createElement(\"div\", { className: controlledform_css_1.default.flex_center },\r\n            react_1.default.createElement(\"p\", { className: controlledform_css_1.default.question_title }, \"\\u0427\\u0442\\u043E \\u043D\\u0430\\u043F\\u0438\\u0441\\u0430\\u0442\\u044C \\u0432 \\u0441\\u043E\\u043E\\u0431\\u0449\\u0435\\u043D\\u0438\\u0438 \\u0438\\u043B\\u0438 \\u0444\\u0430\\u0439\\u043B\\u0435?\"),\r\n            react_1.default.createElement(\"ol\", { className: controlledform_css_1.default.question_list },\r\n                react_1.default.createElement(\"li\", { className: controlledform_css_1.default.question_item },\r\n                    react_1.default.createElement(\"p\", { className: controlledform_css_1.default.question_item__question }, \"\\u0427\\u0435\\u043C \\u0432\\u044B \\u0437\\u0430\\u043D\\u0438\\u043C\\u0430\\u0435\\u0442\\u0435\\u0441\\u044C?\"),\r\n                    react_1.default.createElement(\"p\", { className: controlledform_css_1.default.question_item__content },\r\n                        \"\\u0420\\u0430\\u0441\\u0441\\u043A\\u0430\\u0436\\u0438\\u0442\\u0435 \\u043E \\u0441\\u0432\\u043E\\u0435\\u0439 \\u043A\\u043E\\u043C\\u043F\\u0430\\u043D\\u0438\\u0438.\",\r\n                        react_1.default.createElement(\"br\", null),\r\n                        \"\\u041A\\u0430\\u043A \\u0440\\u0430\\u0431\\u043E\\u0442\\u0430\\u0435\\u0442\\u0435, \\u043D\\u0430 \\u0447\\u0435\\u043C \\u0437\\u0430\\u0440\\u0430\\u0431\\u0430\\u0442\\u044B\\u0432\\u0430\\u0435\\u0442\\u0435?\",\r\n                        react_1.default.createElement(\"br\", null),\r\n                        \"\\u041A\\u0442\\u043E \\u0432\\u0430\\u0448\\u0438 \\u043A\\u043E\\u043D\\u043A\\u0443\\u0440\\u0435\\u043D\\u0442\\u044B?\",\r\n                        react_1.default.createElement(\"br\", null),\r\n                        \"\\u0427\\u0435\\u043C \\u0432\\u044B \\u043E\\u0442 \\u043D\\u0438\\u0445 \\u043E\\u0442\\u043B\\u0438\\u0447\\u0430\\u0435\\u0442\\u0435\\u0441\\u044C?\")),\r\n                react_1.default.createElement(\"li\", { className: controlledform_css_1.default.question_item },\r\n                    react_1.default.createElement(\"p\", { className: controlledform_css_1.default.question_item__question }, \"\\u0412 \\u0447\\u0435\\u043C \\u0432\\u0430\\u0448\\u0430 \\u0437\\u0430\\u0434\\u0430\\u0447\\u0430?\"),\r\n                    react_1.default.createElement(\"p\", { className: controlledform_css_1.default.question_item__content },\r\n                        \"\\u0427\\u0435\\u0433\\u043E \\u0445\\u043E\\u0442\\u0438\\u0442\\u0435 \\u0434\\u043E\\u0441\\u0442\\u0438\\u0447\\u044C \\u0432 \\u0431\\u043B\\u0438\\u0436\\u0430\\u0439\\u0448\\u0435\\u043C \\u0431\\u0443\\u0434\\u0443\\u0449\\u0435\\u043C?\",\r\n                        react_1.default.createElement(\"br\", null),\r\n                        \"\\u0427\\u0442\\u043E \\u0432\\u0430\\u043C \\u043C\\u0435\\u0448\\u0430\\u0435\\u0442?\")),\r\n                react_1.default.createElement(\"li\", { className: controlledform_css_1.default.question_item },\r\n                    react_1.default.createElement(\"p\", { className: controlledform_css_1.default.question_item__question }, \"\\u041A\\u0430\\u043A\\u0438\\u043C \\u0432\\u044B \\u0432\\u0438\\u0434\\u0438\\u0442\\u0435 \\u0440\\u0435\\u0448\\u0435\\u043D\\u0438\\u0435 \\u0437\\u0430\\u0434\\u0430\\u0447\\u0438?\"),\r\n                    react_1.default.createElement(\"p\", { className: controlledform_css_1.default.question_item__content },\r\n                        \"\\u041A\\u0430\\u043A \\u043F\\u043B\\u0430\\u043D\\u0438\\u0440\\u0443\\u0435\\u0442\\u0435 \\u0434\\u043E\\u0441\\u0442\\u0438\\u0447\\u044C \\u0441\\u0432\\u043E\\u0438\\u0445 \\u0446\\u0435\\u043B\\u0435\\u0439?\",\r\n                        react_1.default.createElement(\"br\", null),\r\n                        \"\\u041A\\u0430\\u043A\\u0438\\u0435 \\u0440\\u0435\\u0448\\u0435\\u043D\\u0438\\u044F \\u043F\\u0440\\u043E\\u0431\\u043E\\u0432\\u0430\\u043B\\u0438 \\u0440\\u0430\\u043D\\u044C\\u0448\\u0435?\")),\r\n                react_1.default.createElement(\"li\", { className: controlledform_css_1.default.question_item },\r\n                    react_1.default.createElement(\"p\", { className: controlledform_css_1.default.question_item__question }, \"\\u041A\\u0430\\u043A\\u0438\\u0435 \\u0443 \\u0432\\u0430\\u0441 \\u043E\\u0436\\u0438\\u0434\\u0430\\u043D\\u0438\\u044F \\u043E\\u0442 \\u0440\\u0435\\u0437\\u0443\\u043B\\u044C\\u0442\\u0430\\u0442\\u0430?\"),\r\n                    react_1.default.createElement(\"p\", { className: controlledform_css_1.default.question_item__content },\r\n                        \"\\u0412 \\u043A\\u0430\\u043A\\u043E\\u043C \\u0432\\u0438\\u0434\\u0435 \\u0432\\u044B \\u0445\\u043E\\u0442\\u0438\\u0442\\u0435 \\u0432\\u0438\\u0434\\u0435\\u0442\\u044C \\u0440\\u0435\\u0448\\u0435\\u043D\\u0438\\u0435 \\u0432\\u0430\\u0448\\u0435\\u0439 \\u0437\\u0430\\u0434\\u0430\\u0447\\u0438?\",\r\n                        react_1.default.createElement(\"br\", null),\r\n                        \"\\u0412 \\u043A\\u0430\\u043A\\u043E\\u0439 \\u0441\\u0440\\u043E\\u043A?\",\r\n                        react_1.default.createElement(\"br\", null),\r\n                        \"\\u041F\\u043E\\u0447\\u0435\\u043C\\u0443 \\u043E\\u043D \\u0432\\u0430\\u0436\\u0435\\u043D? \\u041D\\u0430 \\u0447\\u0442\\u043E \\u044D\\u0442\\u043E \\u0434\\u043E\\u043B\\u0436\\u043D\\u043E \\u0431\\u044B\\u0442\\u044C \\u043F\\u043E\\u0445\\u043E\\u0436\\u0435?\")),\r\n                react_1.default.createElement(\"li\", { className: controlledform_css_1.default.question_item },\r\n                    react_1.default.createElement(\"p\", { className: controlledform_css_1.default.question_item__question }, \"\\u0421\\u043A\\u043E\\u043B\\u044C\\u043A\\u043E \\u0434\\u0435\\u043D\\u0435\\u0433 \\u043F\\u043B\\u0430\\u043D\\u0438\\u0440\\u0443\\u0435\\u0442\\u0435 \\u043F\\u043E\\u0442\\u0440\\u0430\\u0442\\u0438\\u0442\\u044C?\"),\r\n                    react_1.default.createElement(\"p\", { className: controlledform_css_1.default.question_item__content },\r\n                        \"\\u041A\\u0430\\u043A\\u043E\\u0432 \\u0432\\u0430\\u0448 \\u0431\\u044E\\u0434\\u0436\\u0435\\u0442?\",\r\n                        react_1.default.createElement(\"br\", null),\r\n                        \"\\u041F\\u043E\\u0447\\u0435\\u043C\\u0443 \\u0432\\u044B \\u0433\\u043E\\u0442\\u043E\\u0432\\u044B \\u043F\\u043E\\u0442\\u0440\\u0430\\u0442\\u0438\\u0442\\u044C \\u0438\\u043C\\u0435\\u043D\\u043D\\u043E \\u0442\\u0430\\u043A\\u0443\\u044E \\u0441\\u0443\\u043C\\u043C\\u0443?\"))),\r\n            react_1.default.createElement(\"button\", { className: controlledform_css_1.default.back_btn, onClick: showForm },\r\n                react_1.default.createElement(\"svg\", { xmlns: \"http://www.w3.org/2000/svg\", width: \"48\", height: \"48\", viewBox: \"0 0 48 48\", fill: \"none\" },\r\n                    react_1.default.createElement(\"g\", { \"clip-path\": \"url(#clip0_151_189)\" },\r\n                        react_1.default.createElement(\"path\", { d: \"M16.8 14.2V21.6L20.4 21.9C27.8 22.6 33.5 25.6 37.1 29.4C33 28 27.8 27.3 21 27L16.8 26.8V33.9L7.00003 24.1L16.8 14.2ZM19.7 6C19.5434 5.99115 19.3872 6.02342 19.2468 6.09358C19.1065 6.16375 18.9869 6.26938 18.9 6.4L2.40003 23.1C2.15406 23.375 2.01807 23.731 2.01807 24.1C2.01807 24.469 2.15406 24.825 2.40003 25.1L18.9 41.6C18.9869 41.7306 19.1065 41.8362 19.2468 41.9064C19.3872 41.9766 19.5434 42.0088 19.7 42C19.8578 41.9874 20.0116 41.9437 20.1524 41.8714C20.2932 41.7992 20.4183 41.6998 20.5206 41.5789C20.6228 41.4581 20.7002 41.3182 20.7481 41.1674C20.7961 41.0165 20.8137 40.8577 20.8 40.7V31C36.5 31.7 41.9 34.8 44.3 40.2C44.7 41 45.1 41.3 45.4 41.3C45.7 41.3 46 40.9 46 40.3C45.8 29.8 36 19.4 20.8 17.9V7.3C20.8137 7.1423 20.7961 6.98346 20.7481 6.83261C20.7002 6.68176 20.6228 6.54189 20.5206 6.42106C20.4183 6.30022 20.2932 6.20081 20.1524 6.12855C20.0116 6.05628 19.8578 6.01259 19.7 6Z\", fill: \"white\" })),\r\n                    react_1.default.createElement(\"defs\", null,\r\n                        react_1.default.createElement(\"clipPath\", { id: \"clip0_151_189\" },\r\n                            react_1.default.createElement(\"rect\", { width: \"48\", height: \"48\", fill: \"white\" })))),\r\n                react_1.default.createElement(\"p\", null, \"\\u0412\\u0435\\u0440\\u043D\\u0443\\u0442\\u044C\\u0441\\u044F \\u043A \\u0437\\u0430\\u043F\\u043E\\u043B\\u043D\\u0435\\u043D\\u0438\\u044E\"))))));\r\n}\r\nexports.ControlledForm = ControlledForm;\r\n\n\n//# sourceURL=webpack:///./src/shared/ControlledForm/ControlledForm.tsx?");

/***/ }),

/***/ "./src/shared/ControlledForm/controlledform.css":
/*!******************************************************!*\
  !*** ./src/shared/ControlledForm/controlledform.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"module\": \"controlledform__module--3NP6C\",\n\t\"module__title\": \"controlledform__module__title--2oglE\",\n\t\"module__registration\": \"controlledform__module__registration--3ob6_\",\n\t\"input\": \"controlledform__input--3nYAn\",\n\t\"textarea\": \"controlledform__textarea--1PEWs\",\n\t\"question_btn\": \"controlledform__question_btn--BX_GF\",\n\t\"input_file\": \"controlledform__input_file--1Ho_1\",\n\t\"basement\": \"controlledform__basement--CaH1O\",\n\t\"checkbox\": \"controlledform__checkbox--T9qrj\",\n\t\"checkbox__input\": \"controlledform__checkbox__input--mWFtm\",\n\t\"checkbox__checkmark\": \"controlledform__checkbox__checkmark--1qkK6\",\n\t\"checkbox__body\": \"controlledform__checkbox__body--2zbZq\",\n\t\"submit_btn\": \"controlledform__submit_btn--mCts2\",\n\t\"flex_center\": \"controlledform__flex_center--26SOi\",\n\t\"question_title\": \"controlledform__question_title--2fFM5\",\n\t\"question_list\": \"controlledform__question_list--2pkic\",\n\t\"question_item\": \"controlledform__question_item--2KTAV\",\n\t\"question_item__question\": \"controlledform__question_item__question--2gWso\",\n\t\"question_item__content\": \"controlledform__question_item__content--2hGgl\",\n\t\"back_btn\": \"controlledform__back_btn--3c0Zm\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/ControlledForm/controlledform.css?");

/***/ }),

/***/ "./src/shared/app.css":
/*!****************************!*\
  !*** ./src/shared/app.css ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"container\": \"app__container--1lCSX\",\n\t\"header\": \"app__header--1khU1\"\n};\n\n\n//# sourceURL=webpack:///./src/shared/app.css?");

/***/ }),

/***/ "./src/shared/fonts/Roboto/Roboto-Bold.woff2":
/*!***************************************************!*\
  !*** ./src/shared/fonts/Roboto/Roboto-Bold.woff2 ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"ff1fe0abccb6475a1d8c996170039dd5.woff2\");\n\n//# sourceURL=webpack:///./src/shared/fonts/Roboto/Roboto-Bold.woff2?");

/***/ }),

/***/ "./src/shared/img/Backgroundimage.svg":
/*!********************************************!*\
  !*** ./src/shared/img/Backgroundimage.svg ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"9b19e7e3adbeaf3b98a6614284842573.svg\");\n\n//# sourceURL=webpack:///./src/shared/img/Backgroundimage.svg?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-hot-loader/root":
/*!****************************************!*\
  !*** external "react-hot-loader/root" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-hot-loader/root\");\n\n//# sourceURL=webpack:///external_%22react-hot-loader/root%22?");

/***/ })

/******/ });