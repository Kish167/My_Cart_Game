/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");


const app = document.querySelector('.app');

const chooseLevel = document.createElement('div');
app.appendChild(chooseLevel); 

window.application = {};

function renderLevel() {

  const box = document.createElement('div');
  box.className = 'box';

  const title = document.createElement('h1');
  title.className = 'title';
  title.textContent = 'Выбери сложность';

  const level = document.createElement ('div');
  level.className = 'level';
  

  const label = document.createElement ('label');
  label.className = "label";
  label.textContent = '1';
  label.onclick = function () {
    label.className = "label_hide"
  }

  
  
  const label2 = document.createElement ('label');
  label2.className = "label";
  label2.textContent = '2';
  label2.onclick = function () {
    label2.className = "label_hide"
  }

  const label3 = document.createElement ('label');
  label3.className = "label";
  label3.textContent = '3';
  label3.onclick = function () {
    label3.className = "label_hide"
  }


  const choose = document.createElement('input');
  choose.type = "radio"
  choose.name = "level"
  choose.className = 'choose';
  choose.value = '1';
  localStorage.choose;


  const choose2 = document.createElement('input');
  choose2.type = "radio"
  choose2.name = "level"
  choose2.className = 'choose';
  choose2.value = '2';
  localStorage.choose2;

  const choose3 = document.createElement('input');
  choose3.type = "radio"
  choose3.name = "level"
  choose3.className = 'choose';
  choose3.value = '3';
  localStorage.choose3;


  const button = document.createElement('button');
  button.className = 'button';
  button.textContent = 'Старт'
  button.onclick = function selectLevel (){
    if(choose.checked) {
      console.log('Вы выбрали легкий уровень')
      renderEasy()
    }
    if(choose2.checked) {
      console.log('Вы выбрали средний уровень')
      renderMedium()
    }
    if(choose3.checked) {
      console.log('Вы выбрали сложный уровень')
      renderHard()
    }
  }

  chooseLevel.appendChild(box);
  box.appendChild(title);
  box.appendChild(level);
  level.appendChild(label);
  level.appendChild(label2);
  level.appendChild(label3);
  label.appendChild(choose);
  label2.appendChild(choose2);
  label3.appendChild(choose3); 
  box.appendChild(button);
}

renderLevel();

function renderEasy() {
  
  const app = document.querySelector('.app');

  
  const game = document.createElement('div');

  const timer = document.createElement('div');

  const timer_minute = document('div');
  timer_minute.textContent = '00';
  timer_minute.className = 'timer'

  const timer_seconds = document('div');
  timer_seconds.textContent = '00';
  timer_seconds.className = 'timer';





  


  app.appendChild(game);
  game.appendChild(timer);
  timer.appendChild(timer_minute);
  timer.appendChild(timer_seconds);

  

}

renderEasy()

;
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map