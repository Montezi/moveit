module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./challenges.json":
/*!*************************!*\
  !*** ./challenges.json ***!
  \*************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, default */
/***/ (function(module) {

eval("module.exports = JSON.parse(\"[{\\\"type\\\":\\\"body\\\",\\\"description\\\":\\\"Estique um de seus braços com a palma da mão virada para frente e puxe os dedos para cima por 10 segundos por mão.\\\",\\\"amount\\\":80},{\\\"type\\\":\\\"body\\\",\\\"description\\\":\\\"Estique seu braço contra o peito e puxe-o utilizando o outro braço por 10 segundos por braço.\\\",\\\"amount\\\":60},{\\\"type\\\":\\\"body\\\",\\\"description\\\":\\\"Puxe seu pescoço com a ajuda da mão para a direita e para a esquerda, permanecendo na posição por alguns segundos.\\\",\\\"amount\\\":70},{\\\"type\\\":\\\"body\\\",\\\"description\\\":\\\"Com as duas mãos na parte de trás da cabeça, leve-a para baixo, alongando a parte de trás da região.\\\",\\\"amount\\\":60},{\\\"type\\\":\\\"body\\\",\\\"description\\\":\\\"Cruze as pernas e desça com as mãos esticadas em direção ao chão. Repita o movimento com a outra perna na frente.\\\",\\\"amount\\\":100},{\\\"type\\\":\\\"body\\\",\\\"description\\\":\\\"Sentado, abra as pernas e tente encostar as palmas das mãos no chão, repita 3 vezes por 5 segundos.\\\",\\\"amount\\\":80},{\\\"type\\\":\\\"body\\\",\\\"description\\\":\\\"Puxe o joelho de encontro ao peito e segure, troque de perna após 10 segundos.\\\",\\\"amount\\\":50},{\\\"type\\\":\\\"body\\\",\\\"description\\\":\\\"Sentado, cruze uma perna e incline seu tronco à frente, troque de perna após 10 segundos.\\\",\\\"amount\\\":80},{\\\"type\\\":\\\"eye\\\",\\\"description\\\":\\\"Sentado, feche os olhos e cubra-os com as palmas da mão durante 2 minutos, depois abra normalmente.\\\",\\\"amount\\\":90},{\\\"type\\\":\\\"eye\\\",\\\"description\\\":\\\"Em algum ambiente aberto, olhe o mais longe que puder em quatro direções por 3s, mexa apenas os olhos. Repita 3 vezes.\\\",\\\"amount\\\":140},{\\\"type\\\":\\\"eye\\\",\\\"description\\\":\\\"Usando os polegares, massage a área abaixo das sobrancelhas em movimentos circulares por 15 segundos.\\\",\\\"amount\\\":70},{\\\"type\\\":\\\"body\\\",\\\"description\\\":\\\"Em pé, gire a cintura o máximo que puder para a esquerda, segure por cinco segundos. Repita para a direita.\\\",\\\"amount\\\":90}]\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL2NoYWxsZW5nZXMuanNvbi5qcyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./challenges.json\n");

/***/ }),

/***/ "./src/contexts/ChallengesContext.tsx":
/*!********************************************!*\
  !*** ./src/contexts/ChallengesContext.tsx ***!
  \********************************************/
/*! exports provided: ChallengesContext, ChallengesProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ChallengesContext\", function() { return ChallengesContext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ChallengesProvider\", function() { return ChallengesProvider; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _challenges_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../challenges.json */ \"./challenges.json\");\nvar _challenges_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../challenges.json */ \"./challenges.json\", 1);\n\nvar _jsxFileName = \"/Users/mirianlima/Documents/Docs /Personal/NLW4/moveit-next/src/contexts/ChallengesContext.tsx\";\n\n\nconst ChallengesContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__[\"createContext\"])({});\nfunction ChallengesProvider({\n  children\n}) {\n  const {\n    0: level,\n    1: setLevel\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(1);\n  const {\n    0: currentExperience,\n    1: setCurrentExperience\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0);\n  const {\n    0: challengesCompleted,\n    1: setChallengesCompleted\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0);\n  const {\n    0: activeChallenge,\n    1: setActiveChallenge\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(null);\n  const experienceToNextLevel = Math.pow((level + 1) * 4, 2);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(() => {\n    Notification.requestPermission();\n  }, []);\n\n  function levelUp() {\n    setLevel(level + 1);\n  }\n\n  function startNewChallenge() {\n    const randomChallengeIndex = Math.floor(Math.random() * _challenges_json__WEBPACK_IMPORTED_MODULE_2__.length);\n    const challenge = _challenges_json__WEBPACK_IMPORTED_MODULE_2__[randomChallengeIndex];\n    setActiveChallenge(challenge);\n\n    if (Notification.permission === 'granted') {\n      new Notification('Novo desafio 🎉', {\n        body: `Valendo ${challenge.amount} xp!`\n      });\n    }\n  }\n\n  function resetChallenge() {\n    setActiveChallenge(null);\n  }\n\n  function completeChallenge() {\n    if (!activeChallenge) {\n      return;\n    }\n\n    const {\n      amount\n    } = activeChallenge;\n    let finalExperience = currentExperience + amount;\n\n    if (finalExperience >= experienceToNextLevel) {\n      finalExperience = finalExperience - experienceToNextLevel;\n      levelUp();\n    }\n\n    setCurrentExperience(finalExperience);\n    setActiveChallenge(null);\n    setChallengesCompleted(challengesCompleted + 1);\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(ChallengesContext.Provider, {\n    value: {\n      level,\n      currentExperience,\n      challengesCompleted,\n      experienceToNextLevel,\n      levelUp,\n      startNewChallenge,\n      activeChallenge,\n      resetChallenge,\n      completeChallenge\n    },\n    children: children\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 82,\n    columnNumber: 5\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29udGV4dHMvQ2hhbGxlbmdlc0NvbnRleHQudHN4P2ViMjgiXSwibmFtZXMiOlsiQ2hhbGxlbmdlc0NvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiQ2hhbGxlbmdlc1Byb3ZpZGVyIiwiY2hpbGRyZW4iLCJsZXZlbCIsInNldExldmVsIiwidXNlU3RhdGUiLCJjdXJyZW50RXhwZXJpZW5jZSIsInNldEN1cnJlbnRFeHBlcmllbmNlIiwiY2hhbGxlbmdlc0NvbXBsZXRlZCIsInNldENoYWxsZW5nZXNDb21wbGV0ZWQiLCJhY3RpdmVDaGFsbGVuZ2UiLCJzZXRBY3RpdmVDaGFsbGVuZ2UiLCJleHBlcmllbmNlVG9OZXh0TGV2ZWwiLCJNYXRoIiwicG93IiwidXNlRWZmZWN0IiwiTm90aWZpY2F0aW9uIiwicmVxdWVzdFBlcm1pc3Npb24iLCJsZXZlbFVwIiwic3RhcnROZXdDaGFsbGVuZ2UiLCJyYW5kb21DaGFsbGVuZ2VJbmRleCIsImZsb29yIiwicmFuZG9tIiwiY2hhbGxlbmdlcyIsImxlbmd0aCIsImNoYWxsZW5nZSIsInBlcm1pc3Npb24iLCJib2R5IiwiYW1vdW50IiwicmVzZXRDaGFsbGVuZ2UiLCJjb21wbGV0ZUNoYWxsZW5nZSIsImZpbmFsRXhwZXJpZW5jZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBc0JPLE1BQU1BLGlCQUFpQixnQkFBR0MsMkRBQWEsQ0FBQyxFQUFELENBQXZDO0FBRUEsU0FBU0Msa0JBQVQsQ0FBNEI7QUFBQ0M7QUFBRCxDQUE1QixFQUErRDtBQUNwRSxRQUFNO0FBQUEsT0FBQ0MsS0FBRDtBQUFBLE9BQVFDO0FBQVIsTUFBbUJDLHNEQUFRLENBQUMsQ0FBRCxDQUFqQztBQUNBLFFBQU07QUFBQSxPQUFDQyxpQkFBRDtBQUFBLE9BQW9CQztBQUFwQixNQUEyQ0Ysc0RBQVEsQ0FBQyxDQUFELENBQXpEO0FBQ0EsUUFBTTtBQUFBLE9BQUNHLG1CQUFEO0FBQUEsT0FBc0JDO0FBQXRCLE1BQStDSixzREFBUSxDQUFDLENBQUQsQ0FBN0Q7QUFFQSxRQUFNO0FBQUEsT0FBQ0ssZUFBRDtBQUFBLE9BQWtCQztBQUFsQixNQUF3Q04sc0RBQVEsQ0FBQyxJQUFELENBQXREO0FBRUEsUUFBTU8scUJBQXFCLEdBQUdDLElBQUksQ0FBQ0MsR0FBTCxDQUFTLENBQUNYLEtBQUssR0FBRyxDQUFULElBQWMsQ0FBdkIsRUFBMkIsQ0FBM0IsQ0FBOUI7QUFFQVkseURBQVMsQ0FBQyxNQUFJO0FBQ1pDLGdCQUFZLENBQUNDLGlCQUFiO0FBQ0QsR0FGUSxFQUVQLEVBRk8sQ0FBVDs7QUFJQSxXQUFTQyxPQUFULEdBQWtCO0FBQ2hCZCxZQUFRLENBQUNELEtBQUssR0FBQyxDQUFQLENBQVI7QUFDRDs7QUFFRCxXQUFTZ0IsaUJBQVQsR0FBNEI7QUFDMUIsVUFBTUMsb0JBQW9CLEdBQUdQLElBQUksQ0FBQ1EsS0FBTCxDQUFXUixJQUFJLENBQUNTLE1BQUwsS0FBZ0JDLDZDQUFVLENBQUNDLE1BQXRDLENBQTdCO0FBQ0EsVUFBTUMsU0FBUyxHQUFHRiw2Q0FBVSxDQUFDSCxvQkFBRCxDQUE1QjtBQUVBVCxzQkFBa0IsQ0FBQ2MsU0FBRCxDQUFsQjs7QUFFQSxRQUFHVCxZQUFZLENBQUNVLFVBQWIsS0FBMEIsU0FBN0IsRUFBdUM7QUFDckMsVUFBSVYsWUFBSixDQUFpQixpQkFBakIsRUFBbUM7QUFDakNXLFlBQUksRUFBRSxXQUFVRixTQUFTLENBQUNHLE1BQU87QUFEQSxPQUFuQztBQUdEO0FBRUY7O0FBRUQsV0FBU0MsY0FBVCxHQUF5QjtBQUN2QmxCLHNCQUFrQixDQUFDLElBQUQsQ0FBbEI7QUFDRDs7QUFFRCxXQUFTbUIsaUJBQVQsR0FBNEI7QUFDMUIsUUFBRyxDQUFDcEIsZUFBSixFQUFvQjtBQUNsQjtBQUNEOztBQUVELFVBQU07QUFBRWtCO0FBQUYsUUFBYWxCLGVBQW5CO0FBRUEsUUFBSXFCLGVBQWUsR0FBR3pCLGlCQUFpQixHQUFHc0IsTUFBMUM7O0FBRUEsUUFBR0csZUFBZSxJQUFJbkIscUJBQXRCLEVBQTRDO0FBQzFDbUIscUJBQWUsR0FBR0EsZUFBZSxHQUFHbkIscUJBQXBDO0FBQ0FNLGFBQU87QUFDUjs7QUFFRFgsd0JBQW9CLENBQUN3QixlQUFELENBQXBCO0FBQ0FwQixzQkFBa0IsQ0FBQyxJQUFELENBQWxCO0FBQ0FGLDBCQUFzQixDQUFDRCxtQkFBbUIsR0FBQyxDQUFyQixDQUF0QjtBQUVEOztBQUVELHNCQUNFLHFFQUFDLGlCQUFELENBQW1CLFFBQW5CO0FBQ0EsU0FBSyxFQUFFO0FBQ0xMLFdBREs7QUFFTEcsdUJBRks7QUFHTEUseUJBSEs7QUFJTEksMkJBSks7QUFLTE0sYUFMSztBQU1MQyx1QkFOSztBQU9MVCxxQkFQSztBQVFMbUIsb0JBUks7QUFTTEM7QUFUSyxLQURQO0FBQUEsY0FZRzVCO0FBWkg7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBZ0JEIiwiZmlsZSI6Ii4vc3JjL2NvbnRleHRzL0NoYWxsZW5nZXNDb250ZXh0LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZVN0YXRlLCBSZWFjdE5vZGUsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGNoYWxsZW5nZXMgZnJvbSAnLi4vLi4vY2hhbGxlbmdlcy5qc29uJztcblxuaW50ZXJmYWNlIENoYWxsZW5nZXtcbiAgdHlwZTogJ2JvZHknIHwgJ2V5ZSc7XG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gIGFtb3VudDogbnVtYmVyO1xufVxuaW50ZXJmYWNlIENoYWxsZW5nZXNDb250ZXh0RGF0YXtcbiAgbGV2ZWw6bnVtYmVyO1xuICBjdXJyZW50RXhwZXJpZW5jZTogbnVtYmVyO1xuICBjaGFsbGVuZ2VzQ29tcGxldGVkOiBudW1iZXI7XG4gIGV4cGVyaWVuY2VUb05leHRMZXZlbDpudW1iZXI7XG4gIGFjdGl2ZUNoYWxsZW5nZTogQ2hhbGxlbmdlO1xuICBsZXZlbFVwOiAoKT0+dm9pZDtcbiAgc3RhcnROZXdDaGFsbGVuZ2U6ICgpPT52b2lkO1xuICByZXNldENoYWxsZW5nZTogKCk9PnZvaWQ7XG4gIGNvbXBsZXRlQ2hhbGxlbmdlOiAoKT0+dm9pZDtcbn1cbmludGVyZmFjZSBDaGFsbGVuZ2VzUHJvdmlkZXJQcm9wc3tcbiAgY2hpbGRyZW46IFJlYWN0Tm9kZTtcbn1cblxuZXhwb3J0IGNvbnN0IENoYWxsZW5nZXNDb250ZXh0ID0gY3JlYXRlQ29udGV4dCh7fSBhcyBDaGFsbGVuZ2VzQ29udGV4dERhdGEpO1xuXG5leHBvcnQgZnVuY3Rpb24gQ2hhbGxlbmdlc1Byb3ZpZGVyKHtjaGlsZHJlbn06Q2hhbGxlbmdlc1Byb3ZpZGVyUHJvcHMpe1xuICBjb25zdCBbbGV2ZWwsIHNldExldmVsXSA9dXNlU3RhdGUoMSk7XG4gIGNvbnN0IFtjdXJyZW50RXhwZXJpZW5jZSwgc2V0Q3VycmVudEV4cGVyaWVuY2VdID11c2VTdGF0ZSgwKTtcbiAgY29uc3QgW2NoYWxsZW5nZXNDb21wbGV0ZWQsIHNldENoYWxsZW5nZXNDb21wbGV0ZWRdID11c2VTdGF0ZSgwKTtcblxuICBjb25zdCBbYWN0aXZlQ2hhbGxlbmdlLCBzZXRBY3RpdmVDaGFsbGVuZ2VdID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgY29uc3QgZXhwZXJpZW5jZVRvTmV4dExldmVsID0gTWF0aC5wb3coKGxldmVsICsgMSkgKiA0ICwgMik7XG5cbiAgdXNlRWZmZWN0KCgpPT57XG4gICAgTm90aWZpY2F0aW9uLnJlcXVlc3RQZXJtaXNzaW9uKCk7XG4gIH0sW10pO1xuXG4gIGZ1bmN0aW9uIGxldmVsVXAoKXtcbiAgICBzZXRMZXZlbChsZXZlbCsxKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHN0YXJ0TmV3Q2hhbGxlbmdlKCl7XG4gICAgY29uc3QgcmFuZG9tQ2hhbGxlbmdlSW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjaGFsbGVuZ2VzLmxlbmd0aCk7XG4gICAgY29uc3QgY2hhbGxlbmdlID0gY2hhbGxlbmdlc1tyYW5kb21DaGFsbGVuZ2VJbmRleF07XG5cbiAgICBzZXRBY3RpdmVDaGFsbGVuZ2UoY2hhbGxlbmdlKTtcblxuICAgIGlmKE5vdGlmaWNhdGlvbi5wZXJtaXNzaW9uPT09J2dyYW50ZWQnKXtcbiAgICAgIG5ldyBOb3RpZmljYXRpb24oJ05vdm8gZGVzYWZpbyDwn46JJyx7XG4gICAgICAgIGJvZHk6YFZhbGVuZG8gJHtjaGFsbGVuZ2UuYW1vdW50fSB4cCFgXG4gICAgICB9KVxuICAgIH1cblxuICB9IFxuXG4gIGZ1bmN0aW9uIHJlc2V0Q2hhbGxlbmdlKCl7XG4gICAgc2V0QWN0aXZlQ2hhbGxlbmdlKG51bGwpO1xuICB9XG5cbiAgZnVuY3Rpb24gY29tcGxldGVDaGFsbGVuZ2UoKXtcbiAgICBpZighYWN0aXZlQ2hhbGxlbmdlKXtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCB7IGFtb3VudCB9ID0gYWN0aXZlQ2hhbGxlbmdlO1xuXG4gICAgbGV0IGZpbmFsRXhwZXJpZW5jZSA9IGN1cnJlbnRFeHBlcmllbmNlICsgYW1vdW50O1xuXG4gICAgaWYoZmluYWxFeHBlcmllbmNlID49IGV4cGVyaWVuY2VUb05leHRMZXZlbCl7XG4gICAgICBmaW5hbEV4cGVyaWVuY2UgPSBmaW5hbEV4cGVyaWVuY2UgLSBleHBlcmllbmNlVG9OZXh0TGV2ZWw7XG4gICAgICBsZXZlbFVwKCk7IFxuICAgIH1cblxuICAgIHNldEN1cnJlbnRFeHBlcmllbmNlKGZpbmFsRXhwZXJpZW5jZSk7XG4gICAgc2V0QWN0aXZlQ2hhbGxlbmdlKG51bGwpO1xuICAgIHNldENoYWxsZW5nZXNDb21wbGV0ZWQoY2hhbGxlbmdlc0NvbXBsZXRlZCsxKTtcblxuICB9XG5cbiAgcmV0dXJuKFxuICAgIDxDaGFsbGVuZ2VzQ29udGV4dC5Qcm92aWRlciBcbiAgICB2YWx1ZT17e1xuICAgICAgbGV2ZWwsIFxuICAgICAgY3VycmVudEV4cGVyaWVuY2UsXG4gICAgICBjaGFsbGVuZ2VzQ29tcGxldGVkLFxuICAgICAgZXhwZXJpZW5jZVRvTmV4dExldmVsLFxuICAgICAgbGV2ZWxVcCxcbiAgICAgIHN0YXJ0TmV3Q2hhbGxlbmdlLFxuICAgICAgYWN0aXZlQ2hhbGxlbmdlLFxuICAgICAgcmVzZXRDaGFsbGVuZ2UsXG4gICAgICBjb21wbGV0ZUNoYWxsZW5nZVxuICAgIH19PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvQ2hhbGxlbmdlc0NvbnRleHQuUHJvdmlkZXI+XG4gIClcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/contexts/ChallengesContext.tsx\n");

/***/ }),

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/global.css */ \"./src/styles/global.css\");\n/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_global_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _contexts_ChallengesContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contexts/ChallengesContext */ \"./src/contexts/ChallengesContext.tsx\");\n\nvar _jsxFileName = \"/Users/mirianlima/Documents/Docs /Personal/NLW4/moveit-next/src/pages/_app.tsx\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\nfunction MyApp({\n  Component,\n  pageProps\n}) {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_contexts_ChallengesContext__WEBPACK_IMPORTED_MODULE_2__[\"ChallengesProvider\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Component, _objectSpread({}, pageProps), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 8,\n    columnNumber: 5\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvX2FwcC50c3g/ODU0OCJdLCJuYW1lcyI6WyJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFJQSxTQUFTQSxLQUFULENBQWU7QUFBRUMsV0FBRjtBQUFhQztBQUFiLENBQWYsRUFBeUM7QUFDdkMsc0JBQ0UscUVBQUMsOEVBQUQ7QUFBQSwyQkFDRSxxRUFBQyxTQUFELG9CQUFlQSxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFLRDs7QUFFY0Ysb0VBQWYiLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWwuY3NzJztcbmltcG9ydCB7IENoYWxsZW5nZXNQcm92aWRlciB9IGZyb20gJy4uL2NvbnRleHRzL0NoYWxsZW5nZXNDb250ZXh0JztcblxuXG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICByZXR1cm4oXG4gICAgPENoYWxsZW5nZXNQcm92aWRlcj5cbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICA8L0NoYWxsZW5nZXNQcm92aWRlcj5cbiAgKSA7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "./src/styles/global.css":
/*!*******************************!*\
  !*** ./src/styles/global.css ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL3NyYy9zdHlsZXMvZ2xvYmFsLmNzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/styles/global.css\n");

/***/ }),

/***/ 0:
/*!*****************************************!*\
  !*** multi private-next-pages/_app.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.tsx */"./src/pages/_app.tsx");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });