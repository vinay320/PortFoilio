self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Hero/Hero.js":
/*!*************************************!*\
  !*** ./src/components/Hero/Hero.js ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/GlobalComponents */ "./src/styles/GlobalComponents/index.js");
/* harmony import */ var _styles_GlobalComponents_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/GlobalComponents/Button */ "./src/styles/GlobalComponents/Button.js");
/* harmony import */ var _HeroStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./HeroStyles */ "./src/components/Hero/HeroStyles.js");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\Vinay\\Desktop\\Projects\\PortFolio\\portfolio\\src\\components\\Hero\\Hero.js",
    _this = undefined;






var Hero = function Hero(props) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__.Section, {
      row: true,
      nopadding: true,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_HeroStyles__WEBPACK_IMPORTED_MODULE_4__.LeftSection, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__.SectionTitle, {
          main: true,
          center: true,
          children: ["Welcome To ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 12,
            columnNumber: 22
          }, _this), "My Personal Portfolio"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 11,
          columnNumber: 9
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__.SectionText, {
          children: ["Welcome to my portfolio! I'm ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            style: {
              color: Re
            },
            children: "Vinay Tomar"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 16,
            columnNumber: 40
          }, _this), ", a passionate Full Stack Developer with a commitment to crafting seamless digital experiences. With a background in both front-end and back-end technologies, I specialize in transforming innovative ideas into functional and user-friendly applications."]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 9
        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents_Button__WEBPACK_IMPORTED_MODULE_3__.default, {
          onClick: props.handleClick,
          children: "Learn More"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 9
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 7
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }, _this)
  }, void 0, false);
};

_c = Hero;
/* harmony default export */ __webpack_exports__["default"] = (Hero);

var _c;

$RefreshReg$(_c, "Hero");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvSGVyby9IZXJvLmpzIl0sIm5hbWVzIjpbIkhlcm8iLCJwcm9wcyIsImNvbG9yIiwiUmUiLCJoYW5kbGVDbGljayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sQ0FBQ0MsS0FBRDtBQUFBLHNCQUNYO0FBQUEsMkJBQ0UsOERBQUMsNkRBQUQ7QUFBUyxTQUFHLE1BQVo7QUFBYSxlQUFTLE1BQXRCO0FBQUEsNkJBQ0UsOERBQUMsb0RBQUQ7QUFBQSxnQ0FDRSw4REFBQyxrRUFBRDtBQUFjLGNBQUksTUFBbEI7QUFBbUIsZ0JBQU0sTUFBekI7QUFBQSxpREFDYTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUtFLDhEQUFDLGlFQUFEO0FBQUEsbUVBQytCO0FBQU0saUJBQUssRUFBRTtBQUFDQyxtQkFBSyxFQUFDQztBQUFQLGFBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRC9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFMRixlQVlFLDhEQUFDLG9FQUFEO0FBQVEsaUJBQU8sRUFBRUYsS0FBSyxDQUFDRyxXQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFaRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsbUJBRFc7QUFBQSxDQUFiOztLQUFNSixJO0FBcUJOLCtEQUFlQSxJQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmU1YTJiZGZiY2UyZTQ2ZDBmYjIyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IHsgU2VjdGlvbiwgU2VjdGlvblRleHQsIFNlY3Rpb25UaXRsZSB9IGZyb20gJy4uLy4uL3N0eWxlcy9HbG9iYWxDb21wb25lbnRzJztcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi8uLi9zdHlsZXMvR2xvYmFsQ29tcG9uZW50cy9CdXR0b24nO1xyXG5pbXBvcnQgeyBMZWZ0U2VjdGlvbiB9IGZyb20gJy4vSGVyb1N0eWxlcyc7XHJcblxyXG5jb25zdCBIZXJvID0gKHByb3BzKSA9PiAoXHJcbiAgPD5cclxuICAgIDxTZWN0aW9uIHJvdyBub3BhZGRpbmc+XHJcbiAgICAgIDxMZWZ0U2VjdGlvbj5cclxuICAgICAgICA8U2VjdGlvblRpdGxlIG1haW4gY2VudGVyPlxyXG4gICAgICAgICAgV2VsY29tZSBUbyA8YnIgLz5cclxuICAgICAgICAgIE15IFBlcnNvbmFsIFBvcnRmb2xpb1xyXG4gICAgICAgIDwvU2VjdGlvblRpdGxlPlxyXG4gICAgICAgIDxTZWN0aW9uVGV4dD5cclxuICAgICAgICAgIFdlbGNvbWUgdG8gbXkgcG9ydGZvbGlvISBJJ20gPHNwYW4gc3R5bGU9e3tjb2xvcjpSZX19PlZpbmF5IFRvbWFyPC9zcGFuPiwgYSBwYXNzaW9uYXRlXHJcbiAgICAgICAgICBGdWxsIFN0YWNrIERldmVsb3BlciB3aXRoIGEgY29tbWl0bWVudCB0byBjcmFmdGluZyBzZWFtbGVzcyBkaWdpdGFsXHJcbiAgICAgICAgICBleHBlcmllbmNlcy4gV2l0aCBhIGJhY2tncm91bmQgaW4gYm90aCBmcm9udC1lbmQgYW5kIGJhY2stZW5kXHJcbiAgICAgICAgICB0ZWNobm9sb2dpZXMsIEkgc3BlY2lhbGl6ZSBpbiB0cmFuc2Zvcm1pbmcgaW5ub3ZhdGl2ZSBpZGVhcyBpbnRvXHJcbiAgICAgICAgICBmdW5jdGlvbmFsIGFuZCB1c2VyLWZyaWVuZGx5IGFwcGxpY2F0aW9ucy5cclxuICAgICAgICA8L1NlY3Rpb25UZXh0PlxyXG4gICAgICAgIDxCdXR0b24gb25DbGljaz17cHJvcHMuaGFuZGxlQ2xpY2t9PkxlYXJuIE1vcmU8L0J1dHRvbj5cclxuICAgICAgPC9MZWZ0U2VjdGlvbj5cclxuICAgIDwvU2VjdGlvbj5cclxuICA8Lz5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlcm87Il0sInNvdXJjZVJvb3QiOiIifQ==