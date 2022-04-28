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

/***/ "./src/addItemForm.js":
/*!****************************!*\
  !*** ./src/addItemForm.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst itemForm = (submitFunction)=>{\nlet form = document.createElement('form')\nlet legend = document.createElement('legend')\nlegend.innerText = 'Add New Project:'\nform.appendChild(legend);\n\nlet titleLabel = document.createElement('label');\ntitleLabel.innerText = 'Title';\ntitleLabel.setAttribute('for','titleinput');\nlet titleInput =document.createElement('input');\ntitleInput.type = 'text';\ntitleInput.id= 'titleinput'\nform.appendChild(titleLabel)\nform.appendChild(titleInput)\n\nlet descLabel = document.createElement('label');\ndescLabel.innerText = 'Description';\ndescLabel.setAttribute('for','description');\nlet descInput =document.createElement('input');\ndescInput.id='description'\ndescInput.type = 'text';\nform.appendChild(descLabel)\nform.appendChild(descInput)\n\nlet dateLabel = document.createElement('label');\ndateLabel.innerText = 'Date';\ndateLabel.setAttribute('for','date');\nlet dateInput =document.createElement('input');\ndateInput.id='date';\ndateInput.type = 'date';\nform.appendChild(dateLabel);\nform.appendChild(dateInput);\n \nlet addButton = document.createElement('button');\naddButton.textContent = 'Add Item';\naddButton.addEventListener('click',submitFunction)\naddButton.type = 'button';\n\nform.appendChild(addButton);\n\nreturn form;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (itemForm);\n\n//# sourceURL=webpack://odin-todo2/./src/addItemForm.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _navBar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navBar */ \"./src/navBar.js\");\n/* harmony import */ var _addItemForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addItemForm */ \"./src/addItemForm.js\");\n\n\n\n\nconst items = ['Task List','Projects','Add Item']\nlet selected = 2;\nconst addItem =() => {\nconsole.log('adding!')\nconsole.log(document.querySelector('#titleinput').value)\n}\n\n\n\nconst navClicked = (e) => {\n console.log(e.target.textContent)\n selected = items.indexOf(e.target.textContent)\n while (body.firstChild) {\n     body.removeChild(body.firstChild)\n }\n switch (e.target.textContent){\n    case 'Task List':\n        myNav = (0,_navBar__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(items,selected,navClicked)\n        body.appendChild(myNav)\n\n        break;\n    case 'Projects':\n        myNav = (0,_navBar__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(items,selected,navClicked)\n        body.appendChild(myNav)\n        break;\n\n    case 'Add Item':\n       myNav = (0,_navBar__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(items,selected,navClicked)\n        body.appendChild(myNav)\n        body.appendChild(myAddItem)\n        \n        \n        \n\n        break;\n    default:\n        break; \n } \n}\n\n\nlet body= document.querySelector('body')\nbody.style.backgroundColor = '#b000b5'\nlet myNav = (0,_navBar__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(items,selected,navClicked)\nlet myAddItem = (0,_addItemForm__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(addItem);\nbody.appendChild(myNav);\nbody.appendChild(myAddItem);\n\n//# sourceURL=webpack://odin-todo2/./src/index.js?");

/***/ }),

/***/ "./src/navBar.js":
/*!***********************!*\
  !*** ./src/navBar.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst navBar = (navItems,selected,navItemListener) => {\n\n    let header = document.createElement('div')\n    header.classList.add('header')\n    header.style.cssText =`    display:flex;\n    flex-direction: column;\n    justify-content: space-between;`\n    let title  = document.createElement('div')\n    title.classList.add('title')\n    title.innerText='Malarky'\n    header.appendChild(title)\n    \n    let navBarDiv = document.createElement('div')\n    navBarDiv.classList.add('nav')\n    navBarDiv.style.cssText = `display:flex;\n        flex-direction:row;\n        justify-content:space-evenly;\n        padding:10px;\n        border:2px solid black;`\n    navItems.forEach((navTextItem,index)=>{\n        let navItem = document.createElement('div')\n        navItem.addEventListener('click',navItemListener);\n        navItem.classList.add('navItem')\n        if (index != selected){\n        navItem.style.cssText = `    \n            border:2px solid black;\n            flex:0 0 20px;\n            padding:5px;\n            border-radius:2px;`\n        } else {\n            navItem.style.cssText = `    \n            border:4px solid darkgrey;\n            flex:0 0 20px;\n            padding:5px;\n            border-radius:2px;`\n        }\n        navItem.innerText = navTextItem\n        navBarDiv.appendChild(navItem)\n    });\n    header.appendChild(navBarDiv)\n        return header;\n    }\n    /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (navBar);\n\n//# sourceURL=webpack://odin-todo2/./src/navBar.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;