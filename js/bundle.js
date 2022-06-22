/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/carculator.js":
/*!**********************************!*\
  !*** ./js/modules/carculator.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });


function calculator() {
    let display = document.querySelector('.numbers-safe');
    const allCancel = document.querySelector('.ac'),
        one = document.querySelector('.one'),
        two = document.querySelector('.two'),
        three = document.querySelector('.three'),
        four = document.querySelector('.four'),
        five = document.querySelector('.five'),
        six = document.querySelector('.six'),
        seven = document.querySelector('.seven'),
        eigth = document.querySelector('.eigth'),
        nine = document.querySelector('.nine'),
        zero = document.querySelector('.zero'),
        plus = document.querySelector('.plus'),
        minus = document.querySelector('.minus'),
        divide = document.querySelector('.divide'),
        multiply = document.querySelector('.multiply'),
        sumAnswer = document.querySelector('.sum_answer'),
        dut = document.querySelector('.dut'),
        del = document.querySelector('.del'),
        allButton = document.querySelectorAll('button');

    display.innerText = '0';
    let num = '';
    let numSecond = '';
    let sum = 0;
    let turn = true;
    let plusTurn = false,
        minusTurn = false,
        divideTurn = false,
        multiplyTurn = false;

    console.log(num);
    allButton.forEach((item) => {
        item.addEventListener('click', (event) => {
            event.preventDefault();
            writeNum(item, one, 1);
            writeNum(item, two, 2);
            writeNum(item, three, 3);
            writeNum(item, four, 4);
            writeNum(item, five, 5);
            writeNum(item, six, 6);
            writeNum(item, seven, 7);
            writeNum(item, eigth, 8);
            writeNum(item, nine, 9);
            writeNum(item, zero, 0);

            if (num.length === 0) {
                display.innerHTML += 0;
            }

            if (!num.includes('.')) {
                writeNum(item, dut, '.');
            } else {
                writeNum(item, dut, '');
            }

            if (!numSecond.includes('.') && !turn) {
                writeNum(item, dut, '.');
            } else {
                writeNum(item, dut, '');
            }


            if (num.length > 9) {
                num = num.slice(0, 9);
                display.innerHTML += ' Max numbers';
            }
            if (numSecond.length > 9) {
                numSecond = numSecond.slice(0, 9);
                display.innerHTML += ' Max numbers';
            }
            if (item === del) {
                if (turn) {
                    num = num.substring(0, num.length - 1);
                    display.innerHTML = num;
                } else {
                    numSecond = numSecond.slice(0, -1);
                    display.innerHTML = numSecond;
                }
            }
            if (item === plus) {
                turn = false;
                plusTurn = true;
            }
            if (item === minus) {
                turn = false;
                minusTurn = true;
            }
            if (item === divide) {
                turn = false;
                divideTurn = true;
            }
            if (item === multiply) {
                turn = false;
                multiplyTurn = true;
            }
            if (item === allCancel) {
                location.reload();
            }
            if (item === sumAnswer) {
                if (plusTurn) {
                    sum = countPlusSum(num, numSecond);
                }
                if (minusTurn) {
                    sum = countMinusSum(num, numSecond);
                }
                if (divideTurn) {
                    sum = countDivideSum(num, numSecond);
                }
                if (multiplyTurn) {
                    sum = countMultiplySum(num, numSecond);
                }
                display.innerHTML = sum;
            }
            console.log([
                num, + numSecond,
                typeof (turn),
                sum
            ]);
        });
    });

    function writeNum(i, n, c) {
        if (i == n && turn) {
            num += c;
            display.innerHTML = num;

        }
        if (i == n && !turn) {
            numSecond += c;
            display.innerHTML = numSecond;
        }
    }

    const countPlusSum = (a, b) => +a + (+b);
    const countMinusSum = (a, b) => +a - +b;
    const countDivideSum = (a, b) => +a / +b;
    const countMultiplySum = (a, b) => +a * +b;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calculator);

/***/ }),

/***/ "./js/modules/exchange.js":
/*!********************************!*\
  !*** ./js/modules/exchange.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function exchange() {
    const inputUAH = document.querySelector('.UAH'),
        inputEUR = document.querySelector('.EUR');

    inputUAH.addEventListener('input', () => {
        const request = new XMLHttpRequest();

        request.open('GET', 'js/current1.json');
        request.setRequestHeader('content-type', 'application/json', 'charset = UTF-8');
        request.send();

        request.addEventListener('load', () => {
            if (request.status === 200) {
                console.log(request.response);
                const data = JSON.parse(request.response);
                inputEUR.value = +inputUAH.value * data.current.eur;
            } else {
                inputEUR.value = 'Error - Что-то случилось, попробуйте через 1 час';
            }
        });
    });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (exchange);

/***/ }),

/***/ "./js/modules/tabs.js":
/*!****************************!*\
  !*** ./js/modules/tabs.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function tabs() {
    const tabs = document.querySelectorAll('.tabheader_item'),
        tabsContent = document.querySelectorAll('.content'),
        tabsParent = document.querySelector('.tabheader_items');

    function hideTabsContent() {
        tabsContent.forEach(item => {
            item.style.display = 'none';
        });

        tabs.forEach(item => {
            item.classList.remove('tabheader_items_active');
        });
    }

    function showTabsContent(i = 0) {
        tabsContent[i].style.display = 'block';
        tabs[i].classList.add('tabheader_items_active');

    }

    hideTabsContent();
    showTabsContent();


    tabsParent.addEventListener('click', (e) => {
        const target = e.target;
        if (target && target.classList.contains('tabheader_item')) {
            tabs.forEach((item, i) => {
                if (item === target) {
                    hideTabsContent();
                    showTabsContent(i);
                }
            });
        }
    });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tabs);

/***/ }),

/***/ "./js/modules/watch.js":
/*!*****************************!*\
  !*** ./js/modules/watch.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function watch() {
    const timeInterval = setInterval(upDateTime, 1000);

    function upDateTime() {
        const watchOnPage = document.querySelector('.watch');
        let t = new Date();
        let hours, mins, seconds;
        
        hours = Math.floor(t / (1000 * 60 * 60) % 24) + 3;
        mins = Math.floor(t / (1000 * 60) % 60);
        seconds = Math.floor((t / 1000) % 60);
        
        watchOnPage.textContent = `${hours}:${plusZero(mins)}:${plusZero(seconds)}`;
    
        function plusZero(n) {
            if (n < 10) {
                return `0${n}`; 
            } else {
                return n;
            }
        }
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (watch);

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_carculator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/carculator */ "./js/modules/carculator.js");
/* harmony import */ var _modules_exchange__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/exchange */ "./js/modules/exchange.js");
/* harmony import */ var _modules_tabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/tabs */ "./js/modules/tabs.js");
/* harmony import */ var _modules_watch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/watch */ "./js/modules/watch.js");
'use-strict';







window.addEventListener('DOMContentLoaded', function () {
    (0,_modules_carculator__WEBPACK_IMPORTED_MODULE_0__["default"])();
    (0,_modules_exchange__WEBPACK_IMPORTED_MODULE_1__["default"])();
    (0,_modules_tabs__WEBPACK_IMPORTED_MODULE_2__["default"])();
    (0,_modules_watch__WEBPACK_IMPORTED_MODULE_3__["default"])();
});
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map