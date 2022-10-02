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

/***/ "./src/addItemForm.js":
/*!****************************!*\
  !*** ./src/addItemForm.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst itemForm = (submitFunction)=>{\nlet form = document.createElement('form')\nlet legend = document.createElement('legend')\nlegend.innerText = 'Add New Task'\nform.appendChild(legend);\n\nlet titleLabel = document.createElement('label');\ntitleLabel.innerText = 'Title:';\ntitleLabel.setAttribute('for','titleinput');\nlet titleInput =document.createElement('input');\ntitleInput.type = 'text';\ntitleInput.id= 'titleinput'\ntitleLabel.appendChild(titleInput)\nform.appendChild(titleLabel)\n\n\nlet descLabel = document.createElement('label');\ndescLabel.innerText = 'Description:';\ndescLabel.setAttribute('for','description');\nlet descInput =document.createElement('textarea');\ndescInput.id='description'\ndescInput.setAttribute('rows', 3)\ndescInput.setAttribute('columns',20)\ndescLabel.appendChild(descInput)\nform.appendChild(descLabel)\n\nlet projLabel = document.createElement('label');\nprojLabel.innerText = 'Project:';\nprojLabel.setAttribute('for','project');\nlet projInput =document.createElement('textarea');\nprojInput.id='project'\nprojInput.setAttribute('rows', 3)\nprojInput.value= '';\nprojInput.setAttribute('columns',20)\nprojLabel.appendChild(projInput)\nform.appendChild(projLabel)\n\n\nlet dateLabel = document.createElement('label');\ndateLabel.innerText = 'Date:';\ndateLabel.setAttribute('for','date');\nlet dateInput =document.createElement('input');\ndateInput.id='date';\ndateInput.type = 'date';\ndateLabel.appendChild(dateInput);\nform.appendChild(dateLabel);\n \nlet addButton = document.createElement('button');\naddButton.textContent = 'Add Item';\naddButton.addEventListener('click',submitFunction)\naddButton.type = 'button';\n\nform.appendChild(addButton);\n\nreturn form;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (itemForm);\n\n//# sourceURL=webpack://odin-todo2/./src/addItemForm.js?");

/***/ }),

/***/ "./src/editItemView.js":
/*!*****************************!*\
  !*** ./src/editItemView.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst itemEditForm = (editItem,editFunction)=>{\n\n    let form = document.createElement('form')\n    let legend = document.createElement('legend')\n    legend.innerText = 'Edit Task'\n    form.appendChild(legend);\n    \n    let titleLabel = document.createElement('label');\n    titleLabel.innerText = 'Title:';\n    titleLabel.setAttribute('for','titleinput');\n    let titleInput =document.createElement('input');\n    titleInput.type = 'text';\n    titleInput.id= 'titleinput'\n    titleInput.value=editItem.title\n    titleLabel.appendChild(titleInput)\n    form.appendChild(titleLabel)\n    \n    \n    let descLabel = document.createElement('label');\n    descLabel.innerText = 'Description:';\n    descLabel.setAttribute('for','description');\n    let descInput =document.createElement('textarea');\n    descInput.id='description'\n    descInput.setAttribute('rows', 3)\n    descInput.value= editItem.description;\n    descInput.setAttribute('columns',20)\n    descLabel.appendChild(descInput)\n    form.appendChild(descLabel)\n    \n    let projLabel = document.createElement('label');\n    projLabel.innerText = 'Project:';\n    projLabel.setAttribute('for','project');\n    let projInput =document.createElement('textarea');\n    projInput.id='project'\n    projInput.setAttribute('rows', 3)\n    projInput.value= editItem.project;\n    projInput.setAttribute('columns',20)\n    projLabel.appendChild(projInput)\n    form.appendChild(projLabel)\n    \n    let dateLabel = document.createElement('label');\n    dateLabel.innerText = 'Date:';\n    dateLabel.setAttribute('for','date');\n    let dateInput =document.createElement('input');\n    dateInput.id='date';\n    dateInput.type = 'date';\n    dateInput.value=editItem.dueDate\n    dateLabel.appendChild(dateInput);\n    form.appendChild(dateLabel);\n     \n    let addButton = document.createElement('button');\n    addButton.textContent = 'Save Edit';\n    addButton.addEventListener('click',editFunction)\n    addButton.type = 'button';\n    \n    form.appendChild(addButton);\n    \n\n    return form;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (itemEditForm);\n\n//# sourceURL=webpack://odin-todo2/./src/editItemView.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _navBar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./navBar */ \"./src/navBar.js\");\n/* harmony import */ var _addItemForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addItemForm */ \"./src/addItemForm.js\");\n/* harmony import */ var _toDoItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./toDoItem */ \"./src/toDoItem.js\");\n/* harmony import */ var _toDoItem__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_toDoItem__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _toDoList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./toDoList */ \"./src/toDoList.js\");\n/* harmony import */ var _toDoList__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_toDoList__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _itemView__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./itemView */ \"./src/itemView.js\");\n/* harmony import */ var _editItemView__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./editItemView */ \"./src/editItemView.js\");\n/* harmony import */ var _projectView__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./projectView */ \"./src/projectView.js\");\n\n\n\n\n\n\n\n\nconst items = ['Task List','Projects','Add Item']\nlet selected = 2;\nlet myToDoList = _toDoList__WEBPACK_IMPORTED_MODULE_3___default()();\nlet editIndex = 0;\n\nconst save = ()=>{\n    localStorage.setItem('toDoList',JSON.stringify(myToDoList.list))\n}\nfunction clearBody(){\n    while (body.firstChild) {\n        body.removeChild(body.firstChild)\n    }\n}\n\nfunction showList(list){\n    list.forEach((item,index)=>{\n        let newItemDiv =(0,_itemView__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(item);\n        newItemDiv.setAttribute('data-key', index);\n        if (item.selected === false){\n            newItemDiv.addEventListener('click',itemClicked)\n            body.appendChild(newItemDiv);\n        } else {\n            body.appendChild(newItemDiv);\n            let deleteButton = document.querySelector('.deleteButton');\n            deleteButton.addEventListener('click',deleteItem);\n            let editButton = document.querySelector('.editButton');\n            editButton.addEventListener('click',editItem);\n        }\n    });\n}\n\n\n\n\nfunction deleteItem(e){\n    myToDoList.deleteItem(this.parentNode.getAttribute('data-key'));\n    clearBody()\n    body.appendChild(myNav)\n    showList(myToDoList.list)\n    save();\n}\nfunction editButtonPushed(){\n    let titleInput =document.querySelector('#titleinput')\n    myToDoList.list[editIndex].title = titleInput.value;\n    titleInput.value = ''\n    let descInput= document.querySelector('#description')\n    myToDoList.list[editIndex].description = descInput.value;\n    descInput.value = ''\n    let dateInput = document.querySelector('#date')\n    myToDoList.list[editIndex].dueDate = dateInput.value; \n    let projectInput = document.querySelector('#project')\n    myToDoList.list[editIndex].project = projectInput.value;\n    projectInput.value =''\n    clearBody()\n    body.appendChild(myNav)\n    showList(myToDoList.list)\n    save();\n}\nfunction editItem(){\n    editIndex = this.parentNode.getAttribute('data-key');\n    \n    clearBody()\n    body.appendChild(myNav)\n    body.append((0,_editItemView__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(myToDoList.list[editIndex],editButtonPushed))\n\n}\n\nconst addItem =() => {\n    let newToDo = _toDoItem__WEBPACK_IMPORTED_MODULE_2___default()();\n    newToDo.title = document.querySelector('#titleinput').value;\n    newToDo.description = document.querySelector('#description').value;\n    newToDo.dueDate = document.querySelector('#date').value;\n    newToDo.project = document.querySelector(\"#project\").value;\n    myToDoList.addItem(newToDo);\n    save()\n}\nconst projectColor=(e) =>{\n    myToDoList.setBGColor(e.target.parentNode.firstChild.textContent,e.target.value)\n    e.target.parentNode.style.backgroundColor = e.target.value;\n    save();\n\n}\nconst projectClicked= (e) =>{\n    console.log(e.target)\n    if (e.target.type !=='color'){\n        clearBody()\n        body.appendChild(myNav)\n        showList(myToDoList.list.filter(item=>item.project===e.target.firstChild.textContent))\n        console.log(e.target.firstChild.textContent)\n    } \n\n}\nconst itemClicked = (e) => {\n\n    console.log(e.target.getAttribute('data-key'));\n    myToDoList.list.forEach((item,index)=> {\n        if (index === parseInt(e.target.getAttribute('data-key'))){\n            item.selected = true;\n        } else {\n            item.selected = false;\n        }\n    })\n\n    clearBody()\n    body.appendChild(myNav)\n    showList(myToDoList.list);\n\n}\n\n\nconst navClicked = (e) => {\n selected = items.indexOf(e.target.textContent)\n    clearBody();\n switch (e.target.textContent){\n    case 'Task List':\n        myNav = (0,_navBar__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(items,selected,navClicked)\n        body.appendChild(myNav)\n        console.log(myToDoList.list)\n        myToDoList.list.forEach(item=>item.selected = false)\n        myToDoList.list.forEach((item,index)=>{\n            let newItemDiv =(0,_itemView__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(item);\n            newItemDiv.setAttribute('data-key', index);\n            if (item.selected == false){\n                newItemDiv.addEventListener('click',itemClicked)\n            }\n            body.appendChild(newItemDiv);\n        });\n\n        break;\n    case 'Projects':\n        myNav = (0,_navBar__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(items,selected,navClicked)\n        body.appendChild(myNav)\n        myToDoList.getProjects().forEach((projectName)=>body.append((0,_projectView__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(projectName,myToDoList.getColor(projectName))));\n        document.querySelectorAll('.colorInput').forEach((input)=>{\n            input.addEventListener('change',projectColor)\n        \n        })\n        let projects = document.querySelectorAll('.projectDiv')\n        projects.forEach((projectDiv)=>{\n            projectDiv.addEventListener('click',projectClicked)\n        })\n        break;\n\n    case 'Add Item':\n       myNav = (0,_navBar__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(items,selected,navClicked)\n        body.appendChild(myNav)\n        body.appendChild(myAddItem)\n\n        break;\n    default:\n        break; \n } \n}\n\n\n\nif (localStorage.getItem('toDoList')){\n    let storedToDoList = JSON.parse(localStorage.getItem('toDoList'))\n    console.table(storedToDoList)\n    storedToDoList.forEach((item)=>{\n        let newToDo = _toDoItem__WEBPACK_IMPORTED_MODULE_2___default()()\n        newToDo.title = item.title;\n        newToDo.description = item.description;\n        newToDo.dueDate = item.dueDate;\n        newToDo.completed = item.completed;\n        newToDo.selected = false;\n        newToDo.project= item.project;\n        newToDo.color = item.color\n        myToDoList.addItem(newToDo)\n    })\n}\n\n\n\nlet body= document.querySelector('body')\nbody.style.backgroundColor = '#b000b5'\nlet myNav = (0,_navBar__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(items,selected,navClicked)\nlet myAddItem = (0,_addItemForm__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(addItem);\nbody.appendChild(myNav);\nbody.appendChild(myAddItem);\n\n//# sourceURL=webpack://odin-todo2/./src/index.js?");

/***/ }),

/***/ "./src/itemView.js":
/*!*************************!*\
  !*** ./src/itemView.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst itemView = (item) => {\n    let itemDiv = document.createElement('div')\n    itemDiv.classList.add('itemDiv')\n    itemDiv.style.backgroundColor = item.color;\n    if (item.selected){\n        itemDiv.classList.add('selected')\n        let itemTextDiv = document.createElement('div')\n        itemTextDiv.classList.add('itemTextDiv')\n        let itemTitleDiv = document.createElement('div')\n        itemTitleDiv.classList.add('itemTitleDiv')  \n        itemTitleDiv.textContent= item.title\n\n        itemTextDiv.appendChild(itemTitleDiv)\n        let itemDescDiv = document.createElement('div')\n        itemDescDiv.classList.add('itemDescDiv')\n        itemDescDiv.textContent= item.description\n        itemTextDiv.appendChild(itemDescDiv)\n        itemDiv.appendChild(itemTextDiv)\n        let itemDateDiv = document.createElement('div')\n        itemDateDiv.classList.add('itemDatetDiv')\n        itemDateDiv.textContent= item.dueDate\n        itemDiv.appendChild(itemDateDiv)\n        \n        let itemEditButton = document.createElement('button')\n        itemEditButton.textContent= 'edit'\n        itemEditButton.classList.add('editButton')\n        itemDiv.appendChild(itemEditButton)\n        \n        let itemDeleteButton = document.createElement('button')\n        itemDeleteButton.textContent= 'delete'\n        itemDeleteButton.classList.add('deleteButton')\n        itemDiv.appendChild(itemDeleteButton)\n        \n        let priorityContainerDiv = document.createElement('div')\n        priorityContainerDiv.classList.add('priorityContainer')\n        let priorityUpButton = document.createElement('button')\n        priorityUpButton.innerText= '^'\n        priorityUpButton.classList.add('priorityUpButton')\n        priorityContainerDiv.appendChild(priorityUpButton)\n        let priorityDiv = document.createElement('div')\n        priorityDiv.innerText = item.priority\n        priorityContainerDiv.appendChild(priorityDiv)\n        let priorityDownButton = document.createElement('button')\n        priorityDownButton.innerText='v'\n        priorityDownButton.classList.add('priorityDownButton')\n        priorityContainerDiv.appendChild(priorityDownButton)\n        itemDiv.appendChild(priorityContainerDiv)\n    }else{\n        let itemTitleDiv = document.createElement('div')\n        itemTitleDiv.classList.add('itemTitleDiv')  \n        itemTitleDiv.textContent= item.title\n        itemDiv.appendChild(itemTitleDiv)\n    \n    }\n    return itemDiv;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (itemView);\n\n//# sourceURL=webpack://odin-todo2/./src/itemView.js?");

/***/ }),

/***/ "./src/navBar.js":
/*!***********************!*\
  !*** ./src/navBar.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst navBar = (navItems,selected,navItemListener) => {\n\n    let header = document.createElement('div')\n    header.classList.add('header')\n    header.style.cssText =`    display:flex;\n    flex-direction: column;\n    justify-content: space-between;`\n    let title  = document.createElement('div')\n    title.classList.add('title')\n    title.innerText='To Do:'\n    header.appendChild(title)\n    \n    let navBarDiv = document.createElement('div')\n    navBarDiv.classList.add('nav')\n    navBarDiv.style.cssText = `display:flex;\n        flex-direction:row;\n        justify-content:space-evenly;\n        padding:10px;\n        border:2px solid black;`\n    navItems.forEach((navTextItem,index)=>{\n        let navItem = document.createElement('div')\n        navItem.addEventListener('click',navItemListener);\n        navItem.classList.add('navItem')\n        if (index != selected){\n        navItem.style.cssText = `    \n            border:2px solid black;\n            flex:0 0 20px;\n            padding:5px;\n            border-radius:2px;`\n        } else {\n            navItem.style.cssText = `    \n            border:4px solid darkgrey;\n            flex:0 0 20px;\n            padding:5px;\n            border-radius:2px;`\n        }\n        navItem.innerText = navTextItem\n        navBarDiv.appendChild(navItem)\n    });\n    header.appendChild(navBarDiv)\n        return header;\n    }\n    /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (navBar);\n\n//# sourceURL=webpack://odin-todo2/./src/navBar.js?");

/***/ }),

/***/ "./src/projectView.js":
/*!****************************!*\
  !*** ./src/projectView.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst projectView = (project,color)=>{\n    let projectDiv = document.createElement('div');\n    projectDiv.style.backgroundColor  = color;\n    projectDiv.classList.add('projectDiv');\n    let projectTitle = document.createElement('div'); \n    projectTitle.innerText = project;\n    projectDiv.appendChild(projectTitle) ;\n    let colorInput = document.createElement('input');\n    colorInput.classList.add('colorInput')\n    colorInput.value = color;\n    colorInput.type = 'color';\n    projectDiv.appendChild(colorInput);\n\nreturn projectDiv; \n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (projectView);\n\n//# sourceURL=webpack://odin-todo2/./src/projectView.js?");

/***/ }),

/***/ "./src/toDoItem.js":
/*!*************************!*\
  !*** ./src/toDoItem.js ***!
  \*************************/
/***/ (function(module) {

eval("const toDoItem = () => {\n    const tags = new Array(0);\n    let title = \"an item\";\n    let description = \"an item on your todo list\";\n    let completed = false;\n    let dueDate = new Date(); \n    let selected = false;\n    const setTitle = (text) => title = text;\n    const getTitle = () => title;\n    const setDesc = (text) => description = text;\n    const getDesc = () => description;\n    const setDate = (date) => dueDate = date;\n    const getDate = () => dueDate;\n\n    const addTag = (newTag) => this.tags.push(newTag);\n    const removeTag = (tagToRemove) =>{\n        if (tags.indexOf(tagToRemove)>=0){\n            tags.splice(tags.indexOf(tagToRemove), 1)\n        }\n    }\n    const isCompleted= ()=>completed;\n    const setCompleted =(bool) => completed = bool;\n    const getTags = ()=> tags;\n    const setTags = (t) => tags = t;\n    return {\n      title,\n      setTitle,\n      getTitle,\n      description,\n      setDesc,\n      getDesc,\n      dueDate,\n      setDate,\n      getDate,\n      tags,\n      addTag, \n      getTags,\n      setTags,\n      completed,\n      isCompleted,\n      setCompleted,\n      removeTag,\n      selected,\n    };\n  };\n  \n  module.exports = toDoItem;\n\n//# sourceURL=webpack://odin-todo2/./src/toDoItem.js?");

/***/ }),

/***/ "./src/toDoList.js":
/*!*************************!*\
  !*** ./src/toDoList.js ***!
  \*************************/
/***/ ((module) => {

eval("const toDoList = () => {\n    const list = new Array(0);\n    const addItem = (item) => {\n      item.priority = list.length\n      list.push(item)\n    };\n    const deleteItem = (index)=>{\n      list.splice(index,1);\n    }\n    const setBGColor = (project,color) =>{\n      console.log('setting color')\n      list.forEach((item)=>(item.project===project)? item.color = color: color)\n    }\n    const getProjects = ()=>{\n      let projects = list.map((listItem)=> listItem.project)\n      let uniqueProjects = []\n      projects.forEach((project)=>{\n        if (uniqueProjects.indexOf(project) === -1){\n          uniqueProjects.push(project)\n        }\n      })\n      return uniqueProjects;\n    }\n    const getColor=(project)=>{\n      let projectColor = '';\n      list.forEach((item)=>(item.project===project)? projectColor = item.color: item.color)\n      return projectColor;\n    }\n\n\n\n    return {\n      list,\n      getProjects,\n      addItem,\n      deleteItem,\n      getColor,\n      setBGColor,\n    };\n  };\n  \n  module.exports = toDoList;\n\n//# sourceURL=webpack://odin-todo2/./src/toDoList.js?");

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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;