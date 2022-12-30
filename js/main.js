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

/***/ "./src/scripts/main.js":
/*!*****************************!*\
  !*** ./src/scripts/main.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/timer */ \"./src/scripts/modules/timer.js\");\n/* harmony import */ var _modules_burger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/burger */ \"./src/scripts/modules/burger.js\");\n/* harmony import */ var _modules_modal_order__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modal-order */ \"./src/scripts/modules/modal-order.js\");\n/* harmony import */ var _modules_modal_consultation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/modal-consultation */ \"./src/scripts/modules/modal-consultation.js\");\n/*--------------------------------- \r\nMain JavaScript \r\n-----------------------------*/\r\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_timer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n(0,_modules_burger__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n(0,_modules_modal_order__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n(0,_modules_modal_consultation__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n\r\n\n\n//# sourceURL=webpack://christmas-trees/./src/scripts/main.js?");

/***/ }),

/***/ "./src/scripts/modules/burger.js":
/*!***************************************!*\
  !*** ./src/scripts/modules/burger.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst burger = () => {\r\n  const burger = document.querySelector('.burger');\r\n  const navigation = document.querySelector('.navigation');\r\n\r\n  burger.addEventListener('click', () => {\r\n    burger.classList.toggle('burger_active');\r\n    navigation.classList.toggle('navigation_active');\r\n\r\n  })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (burger);\n\n//# sourceURL=webpack://christmas-trees/./src/scripts/modules/burger.js?");

/***/ }),

/***/ "./src/scripts/modules/modal-consultation.js":
/*!***************************************************!*\
  !*** ./src/scripts/modules/modal-consultation.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst modalConsultation = () => {\r\n  const overlayConsultation = document.querySelector('.overlay_consultation');\r\n  const btnConsultation = document.querySelector('.header__consultation');\r\n\r\n  btnConsultation.addEventListener('click', () => {\r\n    overlayConsultation.classList.add('overlay_active');\r\n  })\r\n\r\n  overlayConsultation.addEventListener('click', event => {\r\n    const target = event.target;\r\n\r\n    if (target === overlayConsultation || target.closest('.modal__close')) {\r\n      overlayConsultation.classList.remove('overlay_active');\r\n    }\r\n  })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modalConsultation);\n\n//# sourceURL=webpack://christmas-trees/./src/scripts/modules/modal-consultation.js?");

/***/ }),

/***/ "./src/scripts/modules/modal-order.js":
/*!********************************************!*\
  !*** ./src/scripts/modules/modal-order.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst modalOrder = () => {\r\n  const overlayOrder = document.querySelector('.overlay_order');\r\n  const order = document.querySelector('.form-order__modal');\r\n  const btnsOrder = document.querySelectorAll('.product__button_order');\r\n\r\n  btnsOrder.forEach(btn => {\r\n    btn.addEventListener('click', () => {\r\n      overlayOrder.classList.add('overlay_active');\r\n      order.value = btn.dataset.order;\r\n    })\r\n  })\r\n\r\n  overlayOrder.addEventListener('click', event => {\r\n    const target = event.target;\r\n\r\n    if (target === overlayOrder || target.closest('.modal__close')) {\r\n      overlayOrder.classList.remove('overlay_active');\r\n    }\r\n  })\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modalOrder);\n\n//# sourceURL=webpack://christmas-trees/./src/scripts/modules/modal-order.js?");

/***/ }),

/***/ "./src/scripts/modules/timer.js":
/*!**************************************!*\
  !*** ./src/scripts/modules/timer.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst timer = () => {\r\n  const timer = document.createElement('div');\r\n  const timerText = document.createElement('p');\r\n  const timerCount = document.createElement('span');\r\n\r\n  timer.classList.add('timer');\r\n  timerText.classList.add('timer__text');\r\n  timerCount.classList.add('timer__count');\r\n\r\n  const startTimer = () => {\r\n    const deadLine = new Date(2023, 0, 1, 0, 0, 0);\r\n    const now = new Date();\r\n    const timeRemainig = (deadLine - now) / 1000;\r\n\r\n    const year = new Date().getFullYear();\r\n    const seconds = Math.floor(timeRemainig % 60);\r\n    const minutes = Math.floor(timeRemainig / 60 % 60);\r\n    const hour = Math.floor(timeRemainig / 60 / 60 % 24);\r\n    const days = Math.floor(timeRemainig / 60 / 60 / 24 % 30);\r\n\r\n    const s = declOfNum(seconds, ['секунда', \"секунди\", \"секунд\"]);\r\n    const m = declOfNum(minutes, ['хвилина', \"хвилини\", \"хвилин\"]);\r\n    const h = declOfNum(hour, ['година', \"години\", \"годин\"]);\r\n    const d = declOfNum(days, ['день', \"дні\", \"днів\"]);\r\n\r\n    timerText.textContent = `До кінця ${year} року залишилось: `;\r\n    timerText.append(timerCount);\r\n    timer.append(timerText);\r\n    document.body.prepend(timer);\r\n    timerCount.textContent = ` ${d} ${h} ${m} ${s}`;\r\n\r\n    if (timeRemainig > 0) {\r\n      setTimeout(startTimer, 1000)\r\n    } else {\r\n      timer.remove();\r\n    }\r\n  }\r\n\r\n  startTimer()\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);\r\n\r\nconst declOfNum = (n, titles) => n + ' ' + titles[n % 10 === 1 && n % 100 !== 11 ?\r\n  0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2];\n\n//# sourceURL=webpack://christmas-trees/./src/scripts/modules/timer.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/scripts/main.js");
/******/ 	
/******/ })()
;