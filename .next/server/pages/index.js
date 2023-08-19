(function() {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./src/components/Acomplishments/Acomplishments.js":
/*!*********************************************************!*\
  !*** ./src/components/Acomplishments/Acomplishments.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/GlobalComponents */ "./src/styles/GlobalComponents/index.js");
/* harmony import */ var _AcomplishmentsStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AcomplishmentsStyles */ "./src/components/Acomplishments/AcomplishmentsStyles.js");

var _jsxFileName = "C:\\Users\\Vinay\\Desktop\\Projects\\PortFolio\\portfolio\\src\\components\\Acomplishments\\Acomplishments.js";



const data = [{
  number: 6,
  text: ' Projects'
}, {
  number: 1000,
  text: 'Coding Questions'
}];

const Acomplishments = () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__.Section, {
  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__.SectionTitle, {
    children: "Personal Achievements"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 5
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_AcomplishmentsStyles__WEBPACK_IMPORTED_MODULE_3__.Boxes, {
    children: data.map((card, index) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_AcomplishmentsStyles__WEBPACK_IMPORTED_MODULE_3__.Box, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_AcomplishmentsStyles__WEBPACK_IMPORTED_MODULE_3__.BoxNum, {
        children: `${card.number}+`
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 11
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_AcomplishmentsStyles__WEBPACK_IMPORTED_MODULE_3__.BoxText, {
        children: card.text
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 11
      }, undefined)]
    }, index, true, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }, undefined))
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 5
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__.SectionDivider, {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 5
  }, undefined)]
}, void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 12,
  columnNumber: 3
}, undefined);

/* harmony default export */ __webpack_exports__["default"] = (Acomplishments);

/***/ }),

/***/ "./src/components/Acomplishments/AcomplishmentsStyles.js":
/*!***************************************************************!*\
  !*** ./src/components/Acomplishments/AcomplishmentsStyles.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Boxes": function() { return /* binding */ Boxes; },
/* harmony export */   "Box": function() { return /* binding */ Box; },
/* harmony export */   "BoxNum": function() { return /* binding */ BoxNum; },
/* harmony export */   "BoxText": function() { return /* binding */ BoxText; },
/* harmony export */   "Join": function() { return /* binding */ Join; },
/* harmony export */   "JoinText": function() { return /* binding */ JoinText; },
/* harmony export */   "IconContainer": function() { return /* binding */ IconContainer; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Boxes = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  margin: 24px 0 40px;

  @media ${props => props.theme.breakpoints.md}{
    gap: 16px;
    margin: 20px 0 32px;
    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  }

  @media ${props => props.theme.breakpoints.sm}{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    max-width: 500px;
    margin: 24px auto;
  }
`;
const Box = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  background: #212D45;
  border-radius: 12px;
  height: 144px;
  padding: 24px;
  @media ${props => props.theme.breakpoints.lg} {
    height: 210px;

  }

  @media ${props => props.theme.breakpoints.md} {
    height: 135px;
    padding: 16px;
  }

  @media ${props => props.theme.breakpoints.sm} {
    height: 110px;
    padding: 12px;
    
    &:nth-child(2n){
      grid-row:2;
    }
  }
`;
const BoxNum = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().h5)`
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  line-height: 40px;
  letter-spacing: 0.01em;
  color: #FFFFFF;
  margin-bottom: 8px;

  @media ${props => props.theme.breakpoints.md} {
    font-size: 28px;
    line-height: 32px;
  }
  @media ${props => props.theme.breakpoints.sm} {
    font-size: 24px;
    line-height: 26px;
}
`;
const BoxText = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().p)`
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;
  letter-spacing: 0.02em;
  color: rgba(255, 255, 255, 0.75);

  @media ${props => props.theme.breakpoints.md}{
    font-size: 16px;
    line-height: 20px;
  };

  @media ${props => props.theme.breakpoints.sm} {
    font-size: 10px;
    line-height: 14px;
  }
`;
const Join = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  display: flex;
  max-width: 1040px;
  justify-content: center;
  align-items: center;
  padding-bottom: 80px;

  @media ${props => props.theme.breakpoints.md}{
    display: flex;
    justify-content: center;
    padding-bottom: 64px;
  }

  @media ${props => props.theme.breakpoints.sm}{
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 32px;
  }
`;
const JoinText = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().h5)`
  display: flex;
  font-size: 24px;
  line-height: 40px;
  letter-spacing: 0.02em;
  color: rgba(255, 255, 255, 0.5);

@media ${props => props.theme.breakpoints.md}{
  line-height: 32px;
  font-size: 20px;
};

@media ${props => props.theme.breakpoints.sm}{
  font-size: 16px;
  line-height: 24px;
  margin: 0 0 16px;
}
`;
const IconContainer = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  display: flex;

  @media ${props => props.theme.breakpoints.sm}{
    width: 160px;
    justify-content: space-between;
  }
`;

/***/ }),

/***/ "./src/components/BackgrooundAnimation/BackgroundAnimation.js":
/*!********************************************************************!*\
  !*** ./src/components/BackgrooundAnimation/BackgroundAnimation.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\Vinay\\Desktop\\Projects\\PortFolio\\portfolio\\src\\components\\BackgrooundAnimation\\BackgroundAnimation.js";


const BackgroundAnimation = () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("svg", {
    className: "BgAnimation__svg",
    viewBox: "0 0 602 602",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("g", {
      opacity: "0.15",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M201.337 87.437C193.474 79.5738 180.725 79.5738 172.862 87.437L87.437 172.862C79.5739 180.725 79.5739 193.474 87.437 201.337L400.663 514.563C408.526 522.426 421.275 522.426 429.138 514.563L514.563 429.138C522.426 421.275 522.426 408.526 514.563 400.663L201.337 87.437ZM30.4869 115.912C-8.82897 155.228 -8.82897 218.972 30.4869 258.287L343.713 571.513C383.028 610.829 446.772 610.829 486.088 571.513L571.513 486.088C610.829 446.772 610.829 383.028 571.513 343.713L258.287 30.4869C218.972 -8.82896 155.228 -8.82896 115.912 30.4869L30.4869 115.912Z",
        stroke: "url(#paint0_radial)",
        id: "path_0"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
        d: "M514.563 201.337C522.426 193.474 522.426 180.725 514.563 172.862L429.138 87.437C421.275 79.5738 408.526 79.5739 400.663 87.437L358.098 130.002L301.148 73.0516L343.713 30.4869C383.028 -8.82896 446.772 -8.82896 486.088 30.4869L571.513 115.912C610.829 155.228 610.829 218.972 571.513 258.287L357.802 471.999L300.852 415.049L514.563 201.337Z",
        stroke: "url(#paint1_radial)",
        id: "path_1"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
        d: "M243.901 471.999L201.337 514.563C193.474 522.426 180.725 522.426 172.862 514.563L87.437 429.138C79.5739 421.275 79.5739 408.526 87.437 400.663L301.148 186.952L244.198 130.002L30.4869 343.713C-8.82897 383.028 -8.82897 446.772 30.4869 486.088L115.912 571.513C155.228 610.829 218.972 610.829 258.287 571.513L300.852 528.949L243.901 471.999Z",
        stroke: "url(#paint2_radial)",
        id: "path_2"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ellipse", {
      cx: "295.027",
      cy: "193.118",
      transform: "translate(-295.027 -193.118)",
      rx: "1.07306",
      ry: "1.07433",
      fill: "#945DD6",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("animateMotion", {
        dur: "10s",
        repeatCount: "indefinite",
        rotate: "auto",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("mpath", {
          xlinkHref: "#path_2"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M294.685 193.474L268.932 219.258",
      transform: "translate(-294.685 -193.474) rotate(45 294.685 193.474)",
      stroke: "url(#paint3_linear)",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("animateMotion", {
        dur: "10s",
        repeatCount: "indefinite",
        rotate: "auto",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("mpath", {
          xlinkHref: "#path_2"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ellipse", {
      cx: "295.027",
      cy: "193.118",
      transform: "translate(-295.027 -193.118)",
      rx: "1.07306",
      ry: "1.07433",
      fill: "#46737",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("animateMotion", {
        dur: "5s",
        begin: "1",
        repeatCount: "indefinite",
        rotate: "auto",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("mpath", {
          xlinkHref: "#path_2"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M294.685 193.474L268.932 219.258",
      transform: "translate(-294.685 -193.474) rotate(45 294.685 193.474)",
      stroke: "url(#paint7_linear)",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("animateMotion", {
        dur: "5s",
        begin: "1",
        repeatCount: "indefinite",
        rotate: "auto",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("mpath", {
          xlinkHref: "#path_2"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ellipse", {
      cx: "476.525",
      cy: "363.313",
      rx: "1.07433",
      ry: "1.07306",
      transform: "translate(-476.525 -363.313) rotate(90 476.525 363.313)",
      fill: "#945DD6",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("animateMotion", {
        dur: "10s",
        repeatCount: "indefinite",
        rotate: "auto",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("mpath", {
          xlinkHref: "#path_0"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M476.171 362.952L450.417 337.168",
      transform: "translate(-476.525 -363.313) rotate(-45 476.171 362.952)",
      stroke: "url(#paint4_linear)",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("animateMotion", {
        dur: "10s",
        repeatCount: "indefinite",
        rotate: "auto",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("mpath", {
          xlinkHref: "#path_0"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ellipse", {
      cx: "382.164",
      cy: "155.029",
      rx: "1.07433",
      ry: "1.07306",
      transform: "translate(-382.164 -155.029) rotate(90 382.164 155.029)",
      fill: "#F46737",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("animateMotion", {
        dur: "10s",
        begin: "1",
        repeatCount: "indefinite",
        rotate: "auto",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("mpath", {
          xlinkHref: "#path_0"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 117,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M381.81 154.669L356.057 128.885",
      transform: "translate(-381.81 -154.669) rotate(-45 381.81 154.669)",
      stroke: "url(#paint5_linear)",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("animateMotion", {
        dur: "10s",
        begin: "1",
        repeatCount: "indefinite",
        rotate: "auto",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("mpath", {
          xlinkHref: "#path_0"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 131,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 125,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ellipse", {
      cx: "333.324",
      cy: "382.691",
      rx: "1.07306",
      ry: "1.07433",
      transform: "translate(-333.324 -382.691) rotate(-180 333.324 382.691)",
      fill: "#F46737",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("animateMotion", {
        dur: "5s",
        begin: "0",
        repeatCount: "indefinite",
        rotate: "auto",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("mpath", {
          xlinkHref: "#path_1"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 148,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 142,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M333.667 382.335L359.42 356.551",
      transform: "scale(-1 1) translate(-333.667 -382.335) rotate(45 333.667 382.335)",
      stroke: "url(#paint6_linear)",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("animateMotion", {
        dur: "5s",
        begin: "0",
        repeatCount: "indefinite",
        rotate: "auto",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("mpath", {
          xlinkHref: "#path_1"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 162,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 156,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ellipse", {
      cx: "165.524",
      cy: "93.9596",
      rx: "1.07306",
      ry: "1.07433",
      transform: "translate(-165.524 -93.9596)",
      fill: "#F46737",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("animateMotion", {
        dur: "10s",
        begin: "3",
        repeatCount: "indefinite",
        rotate: "auto",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("mpath", {
          xlinkHref: "#path_0"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 179,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 173,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M165.182 94.3159L139.429 120.1",
      transform: "translate(-165.182 -94.3159) rotate(45 165.182 94.3159)",
      stroke: "url(#paint7_linear)",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("animateMotion", {
        dur: "10s",
        begin: "3",
        repeatCount: "indefinite",
        rotate: "auto",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("mpath", {
          xlinkHref: "#path_0"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 193,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 187,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 182,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ellipse", {
      cx: "476.525",
      cy: "363.313",
      rx: "1.07433",
      ry: "1.07306",
      transform: "translate(-476.525 -363.313) rotate(90 476.525 363.313)",
      fill: "#13ADC7",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("animateMotion", {
        dur: "12s",
        begin: "4",
        repeatCount: "indefinite",
        rotate: "auto",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("mpath", {
          xlinkHref: "#path_0"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 210,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 204,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 196,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
      d: "M476.171 362.952L450.417 337.168",
      transform: "translate(-476.525 -363.313) rotate(-45 476.171 362.952)",
      stroke: "url(#paint11_linear)",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("animateMotion", {
        dur: "12s",
        begin: "4",
        repeatCount: "indefinite",
        rotate: "auto",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("mpath", {
          xlinkHref: "#path_0"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 224,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 218,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 213,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("defs", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("radialGradient", {
        id: "paint0_radial",
        cx: "0",
        cy: "0",
        r: "1",
        gradientUnits: "userSpaceOnUse",
        gradientTransform: "translate(301 301) rotate(90) scale(300)",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("stop", {
          offset: "0.333333",
          stopColor: "#FBFBFB"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 236,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("stop", {
          offset: "1",
          stopColor: "white",
          stopOpacity: "0"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 237,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 228,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("radialGradient", {
        id: "paint1_radial",
        cx: "0",
        cy: "0",
        r: "1",
        gradientUnits: "userSpaceOnUse",
        gradientTransform: "translate(301 301) rotate(90) scale(300)",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("stop", {
          offset: "0.333333",
          stopColor: "#FBFBFB"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 247,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("stop", {
          offset: "1",
          stopColor: "white",
          stopOpacity: "0"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 248,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 239,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("radialGradient", {
        id: "paint2_radial",
        cx: "0",
        cy: "0",
        r: "1",
        gradientUnits: "userSpaceOnUse",
        gradientTransform: "translate(301 301) rotate(90) scale(300)",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("stop", {
          offset: "0.333333",
          stopColor: "#FBFBFB"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 258,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("stop", {
          offset: "1",
          stopColor: "white",
          stopOpacity: "0"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 259,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 250,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("linearGradient", {
        id: "paint3_linear",
        x1: "295.043",
        y1: "193.116",
        x2: "269.975",
        y2: "218.154",
        gradientUnits: "userSpaceOnUse",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("stop", {
          stopColor: "#945DD6"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 269,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("stop", {
          offset: "1",
          stopColor: "#945DD6",
          stopOpacity: "0"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 270,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 261,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("linearGradient", {
        id: "paint4_linear",
        x1: "476.529",
        y1: "363.31",
        x2: "451.461",
        y2: "338.272",
        gradientUnits: "userSpaceOnUse",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("stop", {
          stopColor: "#945DD6"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 280,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("stop", {
          offset: "1",
          stopColor: "#945DD6",
          stopOpacity: "0"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 281,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 272,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("linearGradient", {
        id: "paint5_linear",
        x1: "382.168",
        y1: "155.027",
        x2: "357.1",
        y2: "129.989",
        gradientUnits: "userSpaceOnUse",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("stop", {
          stopColor: "#F46737"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 291,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("stop", {
          offset: "1",
          stopColor: "#F46737",
          stopOpacity: "0"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 292,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 283,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("linearGradient", {
        id: "paint6_linear",
        x1: "333.309",
        y1: "382.693",
        x2: "358.376",
        y2: "357.655",
        gradientUnits: "userSpaceOnUse",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("stop", {
          stopColor: "#F46737"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 302,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("stop", {
          offset: "1",
          stopColor: "#F46737",
          stopOpacity: "0"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 303,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 294,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("linearGradient", {
        id: "paint7_linear",
        x1: "165.54",
        y1: "93.9578",
        x2: "140.472",
        y2: "118.996",
        gradientUnits: "userSpaceOnUse",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("stop", {
          stopColor: "#F46737"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 313,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("stop", {
          offset: "1",
          stopColor: "#F46737",
          stopOpacity: "0"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 314,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 305,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("linearGradient", {
        id: "paint8_linear",
        x1: "414.367",
        y1: "301.156",
        x2: "439.435",
        y2: "276.118",
        gradientUnits: "userSpaceOnUse",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("stop", {
          stopColor: "#13ADC7"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 324,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("stop", {
          offset: "1",
          stopColor: "#13ADC7",
          stopOpacity: "0"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 325,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 316,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("linearGradient", {
        id: "paint9_linear",
        x1: "515.943",
        y1: "288.238",
        x2: "541.339",
        y2: "291.454",
        gradientUnits: "userSpaceOnUse",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("stop", {
          stopColor: "#13ADC7"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 335,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("stop", {
          offset: "1",
          stopColor: "#13ADC7",
          stopOpacity: "0"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 336,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 327,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("linearGradient", {
        id: "paint10_linear",
        x1: "117.001",
        y1: "230.619",
        x2: "117.36",
        y2: "258.193",
        gradientUnits: "userSpaceOnUse",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("stop", {
          stopColor: "#945DD6"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 346,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("stop", {
          offset: "1",
          stopColor: "#945DD6",
          stopOpacity: "0"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 347,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 338,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("linearGradient", {
        id: "paint11_linear",
        x1: "476.529",
        y1: "363.31",
        x2: "451.461",
        y2: "338.272",
        gradientUnits: "userSpaceOnUse",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("stop", {
          stopColor: "#13ADC7"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 357,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("stop", {
          offset: "1",
          stopColor: "#13ADC7",
          stopOpacity: "0"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 358,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 349,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 227,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 4,
  columnNumber: 3
}, undefined);

/* harmony default export */ __webpack_exports__["default"] = (BackgroundAnimation);

/***/ }),

/***/ "./src/components/Footer/Footer.js":
/*!*****************************************!*\
  !*** ./src/components/Footer/Footer.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/ai */ "./node_modules/react-icons/ai/index.esm.js");
/* harmony import */ var _Header_HeaderStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Header/HeaderStyles */ "./src/components/Header/HeaderStyles.js");
/* harmony import */ var _FooterStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FooterStyles */ "./src/components/Footer/FooterStyles.js");

var _jsxFileName = "C:\\Users\\Vinay\\Desktop\\Projects\\PortFolio\\portfolio\\src\\components\\Footer\\Footer.js";





const Footer = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_FooterStyles__WEBPACK_IMPORTED_MODULE_3__.FooterWrapper, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_FooterStyles__WEBPACK_IMPORTED_MODULE_3__.LinkList, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_FooterStyles__WEBPACK_IMPORTED_MODULE_3__.LinkColumn, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_FooterStyles__WEBPACK_IMPORTED_MODULE_3__.LinkTitle, {
          children: "Call"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_FooterStyles__WEBPACK_IMPORTED_MODULE_3__.LinkItem, {
          href: "tel:7982279945",
          children: "7982279945"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_FooterStyles__WEBPACK_IMPORTED_MODULE_3__.LinkColumn, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_FooterStyles__WEBPACK_IMPORTED_MODULE_3__.LinkTitle, {
          children: "Email"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_FooterStyles__WEBPACK_IMPORTED_MODULE_3__.LinkItem, {
          href: "mailto:vinaytomar939@gmail.com",
          children: "vinaytomar939@gmail.com"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_FooterStyles__WEBPACK_IMPORTED_MODULE_3__.SocialIconsContainer, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_FooterStyles__WEBPACK_IMPORTED_MODULE_3__.CompanyContainer, {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_FooterStyles__WEBPACK_IMPORTED_MODULE_3__.Slogan, {
          children: "Innovating one project at a time"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_FooterStyles__WEBPACK_IMPORTED_MODULE_3__.SocialContainer, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Header_HeaderStyles__WEBPACK_IMPORTED_MODULE_2__.SocialIcons, {
          target: "_blank",
          href: "https://github.com/vinay320",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_4__.AiFillGithub, {
            size: "3rem"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Header_HeaderStyles__WEBPACK_IMPORTED_MODULE_2__.SocialIcons, {
          target: "_blank",
          href: "https://www.linkedin.com/in/vinay-tomar-12366621b/",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_4__.AiFillLinkedin, {
            size: "3rem"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Header_HeaderStyles__WEBPACK_IMPORTED_MODULE_2__.SocialIcons, {
          target: "_blank",
          href: "https://www.instagram.com/vin_aytomar/",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_4__.AiFillInstagram, {
            size: "3rem"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./src/components/Footer/FooterStyles.js":
/*!***********************************************!*\
  !*** ./src/components/Footer/FooterStyles.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterWrapper": function() { return /* binding */ FooterWrapper; },
/* harmony export */   "LinkItem": function() { return /* binding */ LinkItem; },
/* harmony export */   "SocialIconsContainer": function() { return /* binding */ SocialIconsContainer; },
/* harmony export */   "CompanyContainer": function() { return /* binding */ CompanyContainer; },
/* harmony export */   "Slogan": function() { return /* binding */ Slogan; },
/* harmony export */   "SocialContainer": function() { return /* binding */ SocialContainer; },
/* harmony export */   "LinkList": function() { return /* binding */ LinkList; },
/* harmony export */   "LinkColumn": function() { return /* binding */ LinkColumn; },
/* harmony export */   "LinkTitle": function() { return /* binding */ LinkTitle; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const FooterWrapper = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().section)`
	width: calc(100vw - 96px);
  max-width: 1040px;
  padding: 2rem 48px 40px;
  margin: 1rem auto;
  box-sizing: content-box;


  @media ${props => props.theme.breakpoints.sm} {
    padding: 0 16px 48px;
    width: calc(100vw - 32px);
  }
`;
const LinkItem = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().a)`
	font-size: 18px;
	line-height: 30px;
	color: rgba(255, 255, 255, 0.75);
	margin-bottom: 16px;
	transition: .3s ease;
	position: relative;
	left: 0;

	&:hover {
		color: #fff;
		left: 6px;
	}

	@media ${props => props.theme.breakpoints.md} {
		font-size: 16px;
		line-height: 28px;
		display: flex;
	}

	@media ${props => props.theme.breakpoints.sm} {
		font-size: 8px;
		line-height: 14px;
		margin-bottom: 8px;
		display: flex;
		align-items: center;
	}
`;
const SocialIconsContainer = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
max-width: 1040px;
display: flex;
justify-content: space-between;

@media ${props => props.theme.breakpoints.md}{
  display: flex;
  justify-content: space-between;
}

@media ${props => props.theme.breakpoints.sm}{
  display: flex;
	width: 100%;
  flex-direction: column;
}
`;
const CompanyContainer = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  display: flex;
	align-items:baseline;
	flex-wrap: wrap;
	margin-right: auto;
	

	@media ${props => props.theme.breakpoints.md}{
		flex-direction: column;
		align-items: baseline;
	}

	@media ${props => props.theme.breakpoints.sm}{
		display: flex;
		flex-direction: column;
		margin: 0 0 32px;
		align-items: center;
	}
`;
const Slogan = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().p)`
	color: rgba(255, 255, 255, 0.5);
	min-width: 280px;
	letter-spacing: 0.02em;
	font-size: 18px;
	line-height: 30px;
	padding: 1rem;

	@media ${props => props.theme.breakpoints.md}{
		font-size: 16px;
		line-height: 28px;
	}

	@media ${props => props.theme.breakpoints.sm}{
		line-height: 22px;
		font-size: 14px;
		min-width: 100px;
	}
`;
const SocialContainer = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
	display: flex;
  align-items: center;

	@media ${props => props.theme.breakpoints.md}{
		justify-content: center;
		padding-right: 16px;
		flex-wrap: wrap;
	}
`;
const LinkList = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().ul)`
	border-top: 1px solid rgba(255, 255, 255, 0.1);
  display: grid;
	grid-template-columns: repeat(3, minmax(85px, 220px));
	gap: 40px;
  padding: 40px 0 28px;

	@media ${props => props.theme.breakpoints.lg} {
		padding: 32px 0 16px;
	}

	@media ${props => props.theme.breakpoints.md} {
		width: 100%;
		padding: 32px 0 16px;
		gap: 16px;
	}
	@media ${props => props.theme.breakpoints.sm} {
		width: 100%;
		padding: 32px 4px 16px;
		gap: 5px;
	}
`;
const LinkColumn = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
	display: flex;
	flex-direction: column;
	max-width: 220px;
	width: 100%;
`;
const LinkTitle = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().h4)`
	font-style: normal;
	font-weight: 600;
	font-size: 12px;
	line-height: 24px;
	text-transform: uppercase;
	color: rgba(255, 255, 255, 0.4);
	margin-bottom: 16px;

	@media ${props => props.theme.breakpoints.sm} {
		font-size: 10px;
		line-height: 12px;
		margin-bottom: 8px;
	}
`;

/***/ }),

/***/ "./src/components/Header/Header.js":
/*!*****************************************!*\
  !*** ./src/components/Header/Header.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/ai */ "./node_modules/react-icons/ai/index.esm.js");
/* harmony import */ var react_icons_di__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/di */ "./node_modules/react-icons/di/index.esm.js");
/* harmony import */ var _HeaderStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./HeaderStyles */ "./src/components/Header/HeaderStyles.js");

var _jsxFileName = "C:\\Users\\Vinay\\Desktop\\Projects\\PortFolio\\portfolio\\src\\components\\Header\\Header.js";






const Header = () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_HeaderStyles__WEBPACK_IMPORTED_MODULE_3__.Container, {
  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_HeaderStyles__WEBPACK_IMPORTED_MODULE_3__.Div1, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
      href: "/",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
        style: {
          display: "flex",
          alignItems: "center",
          color: "white"
        },
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_di__WEBPACK_IMPORTED_MODULE_4__.DiCssdeck, {
          size: "3rem"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 11
        }, undefined), " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          children: "Portfolio"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 37
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_HeaderStyles__WEBPACK_IMPORTED_MODULE_3__.Div2, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: "#projects",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_HeaderStyles__WEBPACK_IMPORTED_MODULE_3__.NavLink, {
          children: "Projects"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: "#tech",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_HeaderStyles__WEBPACK_IMPORTED_MODULE_3__.NavLink, {
          children: "Technologies"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: "#about",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_HeaderStyles__WEBPACK_IMPORTED_MODULE_3__.NavLink, {
          children: "About"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 5
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_HeaderStyles__WEBPACK_IMPORTED_MODULE_3__.Div3, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_HeaderStyles__WEBPACK_IMPORTED_MODULE_3__.SocialIcons, {
      target: "_blank",
      href: "https://github.com/vinay320",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_5__.AiFillGithub, {
        size: "3rem"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_HeaderStyles__WEBPACK_IMPORTED_MODULE_3__.SocialIcons, {
      target: "_blank",
      href: "https://www.linkedin.com/in/vinay-tomar-12366621b/",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_5__.AiFillLinkedin, {
        size: "3rem"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_HeaderStyles__WEBPACK_IMPORTED_MODULE_3__.SocialIcons, {
      target: "_blank",
      href: "https://www.instagram.com/vin_aytomar/",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_5__.AiFillInstagram, {
        size: "3rem"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 34,
    columnNumber: 5
  }, undefined)]
}, void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 9,
  columnNumber: 3
}, undefined);

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./src/components/Header/HeaderStyles.js":
/*!***********************************************!*\
  !*** ./src/components/Header/HeaderStyles.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Container": function() { return /* binding */ Container; },
/* harmony export */   "Div1": function() { return /* binding */ Div1; },
/* harmony export */   "Div2": function() { return /* binding */ Div2; },
/* harmony export */   "Div3": function() { return /* binding */ Div3; },
/* harmony export */   "NavLink": function() { return /* binding */ NavLink; },
/* harmony export */   "ContactDropDown": function() { return /* binding */ ContactDropDown; },
/* harmony export */   "NavProductsIcon": function() { return /* binding */ NavProductsIcon; },
/* harmony export */   "SocialIcons": function() { return /* binding */ SocialIcons; }
/* harmony export */ });
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons/io */ "./node_modules/react-icons/io/index.esm.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);


const Container = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 2rem;
  padding: 1rem;
  padding-top: 2rem;

  @media ${props => props.theme.breakpoints.sm} {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(2, 60px);
    grid-column-gap: 0.5rem;
    grid-row-gap: 0.5rem;
  }
`;
const Div1 = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  grid-area: 1 / 1 / 2 / 2;
  display: flex;
  flex-direction: row;
  align-content: center;
  @media ${props => props.theme.breakpoints.sm} {
    grid-area: 1 / 1 / 2 / 3;
  }
`;
const Div2 = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  grid-area: 1 / 2 / 2 / 4;
  display: flex;
  justify-content: space-around;
  @media ${props => props.theme.breakpoints.sm} {
    grid-area: 2 / 2 / 3 / 5;
  }
`;
const Div3 = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  grid-area: 1 / 5 / 2 / 6;
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media ${props => props.theme.breakpoints.sm} {
    align-items: center;
    grid-area: 1 / 4 / 2 / 6;
  }
`; // Navigation Links

const NavLink = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().a)`
  font-size: 2rem;
  line-height: 32px;
  color: rgba(255, 255, 255, 0.75);
  transition: 0.4s ease;
  &:hover {
    color: #fff;
    opacity: 1;
    cursor: pointer;
  }
  @media ${props => props.theme.breakpoints.sm} {
    padding: 0.5rem;
  }
`; /// DropDown Contact

const ContactDropDown = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().button)`
  border: none;
  display: flex;
  position: relative;
  background: none;
  font-size: 1.7rem;

  line-height: 32px;
  color: rgba(255, 255, 255, 0.75);
  cursor: pointer;
  transition: 0.3s ease;

  &:focus {
    outline: none;
  }
  &:hover {
    color: #fff;
  }

  @media ${props => props.theme.breakpoints.sm} {
    padding: 0.4rem 0;
  }
  @media ${props => props.theme.breakpoints.md} {
    padding: 0;
  }
`;
const NavProductsIcon = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(react_icons_io__WEBPACK_IMPORTED_MODULE_1__.IoIosArrowDropdown)`
  margin-left: 8px;
  display: flex;
  align-self: center;
  transition: 0.3s ease;
  opacity: ${({
  isOpen
}) => isOpen ? '1' : '.75'};
  transform: ${({
  isOpen
}) => isOpen ? 'scaleY(-1)' : 'scaleY(1)'};

  &:hover {
    opacity: 1;
  }

  @media ${props => props.theme.breakpoints.sm} {
    margin: 2px 0 0 2px;
    width: 15px;
  }
`; // Social Icons 

const SocialIcons = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().a)`
transition: 0.3s ease;
color: white;
border-radius: 50px;
  padding: 8px;
&:hover {
    background-color: #212d45;
    transform: scale(1.2);
    cursor: pointer;
    
  }
`;

/***/ }),

/***/ "./src/components/Hero/Hero.js":
/*!*************************************!*\
  !*** ./src/components/Hero/Hero.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/GlobalComponents */ "./src/styles/GlobalComponents/index.js");
/* harmony import */ var _styles_GlobalComponents_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/GlobalComponents/Button */ "./src/styles/GlobalComponents/Button.js");
/* harmony import */ var _HeroStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./HeroStyles */ "./src/components/Hero/HeroStyles.js");


var _jsxFileName = "C:\\Users\\Vinay\\Desktop\\Projects\\PortFolio\\portfolio\\src\\components\\Hero\\Hero.js";





const Hero = props => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
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
        }, undefined), "My Personal Portfolio"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__.SectionText, {
        children: ["I'm", " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          style: {
            color: "white"
          },
          children: "Vinay Tomar"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 11
        }, undefined), ", a passionate Full Stack Developer with a commitment to crafting seamless digital experiences. With a background in both front-end and back-end technologies, I specialize in transforming innovative ideas into functional and user-friendly applications."]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents_Button__WEBPACK_IMPORTED_MODULE_3__.default, {
        onClick: props.handleClick,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          href: "https://drive.google.com/file/d/1A8sWJFeBA5vBLNbYnQYxsoIc3BNkH8iA/view?usp=drive_link",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
            style: {
              color: "white"
            },
            children: "Learn More"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 25,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, undefined)
}, void 0, false);

/* harmony default export */ __webpack_exports__["default"] = (Hero);

/***/ }),

/***/ "./src/components/Hero/HeroStyles.js":
/*!*******************************************!*\
  !*** ./src/components/Hero/HeroStyles.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LeftSection": function() { return /* binding */ LeftSection; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const LeftSection = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  width: 100%;
  @media ${props => props.theme.breakpoints.sm} {
    width: 80%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
  @media ${props => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
`;

/***/ }),

/***/ "./src/components/Projects/Projects.js":
/*!*********************************************!*\
  !*** ./src/components/Projects/Projects.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ProjectsStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProjectsStyles */ "./src/components/Projects/ProjectsStyles.js");
/* harmony import */ var _styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/GlobalComponents */ "./src/styles/GlobalComponents/index.js");
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../constants/constants */ "./src/constants/constants.js");

var _jsxFileName = "C:\\Users\\Vinay\\Desktop\\Projects\\PortFolio\\portfolio\\src\\components\\Projects\\Projects.js";





const Projects = () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_3__.Section, {
  nopadding: true,
  id: "projects",
  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_3__.SectionDivider, {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_3__.SectionTitle, {
    main: true,
    children: "Projects"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_2__.GridContainer, {
    children: _constants_constants__WEBPACK_IMPORTED_MODULE_4__.projects.map((p, i) => {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_2__.BlogCard, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_2__.Img, {
          src: p.image
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_2__.TitleContent, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_2__.HeaderThree, {
            title: true,
            children: p.title
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 17,
            columnNumber: 15
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_2__.Hr, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 18,
            columnNumber: 15
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 13
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_2__.CardInfo, {
          className: "card-info",
          children: p.description
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 13
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_2__.TitleContent, {
            children: "Stack"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 22,
            columnNumber: 15
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_2__.TagList, {
            children: p.tags.map((t, i) => {
              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_2__.Tag, {
                children: t
              }, i, false, {
                fileName: _jsxFileName,
                lineNumber: 25,
                columnNumber: 26
              }, undefined);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 23,
            columnNumber: 15
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 13
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_2__.UtilityList, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_2__.ExternalLinks, {
            href: p.visit,
            children: "Code"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 30,
            columnNumber: 15
          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ProjectsStyles__WEBPACK_IMPORTED_MODULE_2__.ExternalLinks, {
            href: p.source,
            children: "Source"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 15
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 13
        }, undefined)]
      }, i, true, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 11
      }, undefined);
    })
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 5
  }, undefined)]
}, void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 8,
  columnNumber: 3
}, undefined);

/* harmony default export */ __webpack_exports__["default"] = (Projects);

/***/ }),

/***/ "./src/components/Projects/ProjectsStyles.js":
/*!***************************************************!*\
  !*** ./src/components/Projects/ProjectsStyles.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Img": function() { return /* binding */ Img; },
/* harmony export */   "GridContainer": function() { return /* binding */ GridContainer; },
/* harmony export */   "BlogCard": function() { return /* binding */ BlogCard; },
/* harmony export */   "TitleContent": function() { return /* binding */ TitleContent; },
/* harmony export */   "HeaderThree": function() { return /* binding */ HeaderThree; },
/* harmony export */   "Hr": function() { return /* binding */ Hr; },
/* harmony export */   "Intro": function() { return /* binding */ Intro; },
/* harmony export */   "CardInfo": function() { return /* binding */ CardInfo; },
/* harmony export */   "UtilityList": function() { return /* binding */ UtilityList; },
/* harmony export */   "ExternalLinks": function() { return /* binding */ ExternalLinks; },
/* harmony export */   "TagList": function() { return /* binding */ TagList; },
/* harmony export */   "Tag": function() { return /* binding */ Tag; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Img = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().img)`
  width:100%;
  height:100%;
  object-fit: cover;
  overflow: hidden;
`;
const GridContainer = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().section)`
display: grid;
grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
padding: 3rem;
place-items: center;
column-gap: 2rem;
row-gap: 3rem;
@media ${props => props.theme.breakpoints.sm} {
  display: flex;
  flex-direction: column;
  padding: 2rem;
  padding-bottom: 0;
}

`;
const BlogCard = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  border-radius: 10px;
  box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);
  text-align: center;
  width: 400px;
  @media ${props => props.theme.breakpoints.sm} {
    width: 100%;
  }
`;
const TitleContent = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  text-align: center;
  z-index: 20;
  width: 100%;

`;
const HeaderThree = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().h3)`
  font-weight: 500;
  letter-spacing: 2px;
  color: #9cc9e3;
  padding: .5rem 0;
  font-size: ${props => props.title ? '3rem' : '2rem'};
`;
const Hr = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().hr)`
  width: 50px;
  height: 3px;
  margin: 20px auto;
  border: 0;
  background: #d0bb57;
`;
const Intro = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  width: 170px;
  margin: 0 auto;
  color: #dce3e7;
  font-family: 'Droid Serif', serif;
  font-size: 13px;
  font-style: italic;
  line-height: 18px;
`;
const CardInfo = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().p)`
  width: 100%;
  padding: 0 50px;
  color: #e4e6e7;
  font-style: 2rem;
  line-height: 24px;
  text-align: justify;
  @media ${props => props.theme.breakpoints.sm} {
    padding:.3rem
  
}
`;
const UtilityList = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().ul)`
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: space-around;
  margin: 2.5rem 0;
`;
const ExternalLinks = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().a)`
color:#d4c0c0;
font-size: 1.6rem;
padding:1rem 1.5rem;
background: #6b3030;
border-radius: 15px;
transition: 0.5s;
&:hover{
  background: #801414;

}
`;
const TagList = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().ul)`
display: flex;
justify-content: space-around;
padding: 2rem;
`;
const Tag = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().li)`
color: #d8bfbf;
font-size: 1.5rem;
`;

/***/ }),

/***/ "./src/components/Technologies/Technologies.js":
/*!*****************************************************!*\
  !*** ./src/components/Technologies/Technologies.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_di__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/di */ "./node_modules/react-icons/di/index.esm.js");
/* harmony import */ var _styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/GlobalComponents */ "./src/styles/GlobalComponents/index.js");
/* harmony import */ var _TechnologiesStyles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TechnologiesStyles */ "./src/components/Technologies/TechnologiesStyles.js");

var _jsxFileName = "C:\\Users\\Vinay\\Desktop\\Projects\\PortFolio\\portfolio\\src\\components\\Technologies\\Technologies.js";





const Technologies = () => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__.Section, {
  id: "tech",
  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__.SectionDivider, {
    divider: true
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__.SectionTitle, {
    children: "Technologies"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__.SectionText, {
    children: "I've worked with a range a technologies in the web development world. From Back-end To Design"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TechnologiesStyles__WEBPACK_IMPORTED_MODULE_3__.List, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TechnologiesStyles__WEBPACK_IMPORTED_MODULE_3__.ListItem, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("picture", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_di__WEBPACK_IMPORTED_MODULE_4__.DiReact, {
          size: "3rem"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TechnologiesStyles__WEBPACK_IMPORTED_MODULE_3__.ListContainer, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TechnologiesStyles__WEBPACK_IMPORTED_MODULE_3__.ListTitle, {
          children: "Front-End"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TechnologiesStyles__WEBPACK_IMPORTED_MODULE_3__.ListParagraph, {
          children: ["Experiece with ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 22,
            columnNumber: 28
          }, undefined), "React.js Material UI Tailwind CSS"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TechnologiesStyles__WEBPACK_IMPORTED_MODULE_3__.ListItem, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("picture", {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_di__WEBPACK_IMPORTED_MODULE_4__.DiFirebase, {
          size: "3rem"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TechnologiesStyles__WEBPACK_IMPORTED_MODULE_3__.ListContainer, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TechnologiesStyles__WEBPACK_IMPORTED_MODULE_3__.ListTitle, {
          children: "Back-End"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 11
        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TechnologiesStyles__WEBPACK_IMPORTED_MODULE_3__.ListParagraph, {
          children: ["Experience with ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 29
          }, undefined), "Node.js Express.js MongoDB"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 5
  }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_2__.SectionDivider, {
    colorAlt: true
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 42,
    columnNumber: 5
  }, undefined)]
}, void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 7,
  columnNumber: 3
}, undefined);

/* harmony default export */ __webpack_exports__["default"] = (Technologies);

/***/ }),

/***/ "./src/components/Technologies/TechnologiesStyles.js":
/*!***********************************************************!*\
  !*** ./src/components/Technologies/TechnologiesStyles.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImageContainer": function() { return /* binding */ ImageContainer; },
/* harmony export */   "MainImage": function() { return /* binding */ MainImage; },
/* harmony export */   "List": function() { return /* binding */ List; },
/* harmony export */   "ListContainer": function() { return /* binding */ ListContainer; },
/* harmony export */   "ListTitle": function() { return /* binding */ ListTitle; },
/* harmony export */   "ListParagraph": function() { return /* binding */ ListParagraph; },
/* harmony export */   "ListItem": function() { return /* binding */ ListItem; },
/* harmony export */   "ListIcon": function() { return /* binding */ ListIcon; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const ImageContainer = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  text-align: center;
  background-image: radial-gradient(50% 50% at 50% 50%, rgba(79, 108, 176, 0.25) 53.8%, rgba(79, 108, 176, 0) 100%);
  width: 100%;
  padding: 60px;
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media ${props => props.theme.breakpoints.lg} {
    background-image: none;
    padding: 0;
    margin-top: 40px;
  }
  @media ${props => props.theme.breakpoints.md} {
    background-image: none;
    padding: 0;
    margin-top: 16px;
  }
`;
const MainImage = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().img)`
  width: 100%;
`;
const List = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().ul)`
  list-style-type: none;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  margin: 3rem 0;
  
  @media ${props => props.theme.breakpoints.lg}{
    margin: 64px 0;
  }

  @media ${props => props.theme.breakpoints.md}{
    margin: 64px 0;
    gap: 24px
  }
  
  @media ${props => props.theme.breakpoints.sm}{
    display: flex;
    flex-direction: column;
    margin: 32px 0;
  }
`;
const ListContainer = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  display: flex;
  flex-direction: column;

  @media ${props => props.theme.breakpoints.sm}{
    display: flex;
    margin-left: 18px;
  }
`;
const ListTitle = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().h4)`
  font-weight: 700;
  font-size: 28px;
  line-height: 32px;
  letter-spacing: 0.02em;
  color: #FFFFFF;
  margin-bottom: 8px;

@media ${props => props.theme.breakpoints.md}{
  font-size: 24px;
  line-height: 28px;
}

@media ${props => props.theme.breakpoints.sm}{
  font-size: 20px;
  line-height: 28px;
  letter-spacing: 0.02em;
  margin-bottom: 4px;
}
`;
const ListParagraph = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().p)`
  font-size: 18px;
  line-height: 30px;
  color: rgba(255, 255, 255, 0.75);

  @media ${props => props.theme.breakpoints.md}{
    font-size: 16px;
    line-height: 28px;
  }

  @media ${props => props.theme.breakpoints.sm}{
    font-size: 14px;
    line-height: 22px;
  }
`;
const ListItem = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().li)`
  max-width: 320px;
  display: flex;
  flex-direction: column;

@media ${props => props.theme.breakpoints.md}{
  max-width: 203px;
}

@media ${props => props.theme.breakpoints.sm}{
  margin-bottom: 14px;
  max-width: 320px;
  flex-direction: row;
}
`;
const ListIcon = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().img)`
  display: block;
  width: 48px;
  height: 48px;
  margin-bottom: 10px;
  
  @media ${props => props.theme.breakpoints.md}{
    width: 40px;
    height: 40px;
    margin-bottom: 8px;
  }

  @media ${props => props.theme.breakpoints.sm}{
    width: 32px;
    height: 32px;
    margin-bottom: 0px;
  }
`;

/***/ }),

/***/ "./src/components/TimeLine/TimeLine.js":
/*!*********************************************!*\
  !*** ./src/components/TimeLine/TimeLine.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TimeLineStyles */ "./src/components/TimeLine/TimeLineStyles.js");
/* harmony import */ var _styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/GlobalComponents */ "./src/styles/GlobalComponents/index.js");
/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../constants/constants */ "./src/constants/constants.js");


var _jsxFileName = "C:\\Users\\Vinay\\Desktop\\Projects\\PortFolio\\portfolio\\src\\components\\TimeLine\\TimeLine.js";




const TOTAL_CAROUSEL_COUNT = _constants_constants__WEBPACK_IMPORTED_MODULE_4__.TimeLineData.length;

const Timeline = () => {
  const {
    0: activeItem,
    1: setActiveItem
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
  const carouselRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();

  const scroll = (node, left) => {
    return node.scrollTo({
      left,
      behavior: 'smooth'
    });
  };

  const handleClick = (e, i) => {
    e.preventDefault();

    if (carouselRef.current) {
      const scrollLeft = Math.floor(carouselRef.current.scrollWidth * 0.7 * (i / _constants_constants__WEBPACK_IMPORTED_MODULE_4__.TimeLineData.length));
      scroll(carouselRef.current, scrollLeft);
    }
  };

  const handleScroll = () => {
    if (carouselRef.current) {
      const index = Math.round(carouselRef.current.scrollLeft / (carouselRef.current.scrollWidth * 0.7) * _constants_constants__WEBPACK_IMPORTED_MODULE_4__.TimeLineData.length);
      setActiveItem(index);
    }
  }; // snap back to beginning of scroll when window is resized
  // avoids a bug where content is covered up if coming from smaller screen


  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    const handleResize = () => {
      scroll(carouselRef.current, 0);
    };

    window.addEventListener('resize', handleResize);
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_3__.Section, {
    id: "about",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_3__.SectionTitle, {
      children: "About Me"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_3__.SectionText, {
      children: ["I've always been fascinated by the dynamic world of web development. My journey began with a strong foundation in programming languages such as HTML, CSS, and JavaScript.", " "]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.CarouselContainer, {
      ref: carouselRef,
      onScroll: handleScroll,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: _constants_constants__WEBPACK_IMPORTED_MODULE_4__.TimeLineData.map((item, index) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.CarouselMobileScrollNode, {
          final: index === TOTAL_CAROUSEL_COUNT - 1,
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.CarouselItem, {
            index: index,
            id: `carousel__item-${index}`,
            active: activeItem,
            onClick: e => handleClick(e, index),
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.CarouselItemTitle, {
              children: [`${item.year}`, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.CarouselItemImg, {
                width: "208",
                height: "6",
                viewBox: "0 0 208 6",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("path", {
                  "fill-rule": "evenodd",
                  "clip-rule": "evenodd",
                  d: "M2.5 5.5C3.88071 5.5 5 4.38071 5 3V3.5L208 3.50002V2.50002L5 2.5V3C5 1.61929 3.88071 0.5 2.5 0.5C1.11929 0.5 0 1.61929 0 3C0 4.38071 1.11929 5.5 2.5 5.5Z",
                  fill: "url(#paint0_linear)",
                  "fill-opacity": "0.33"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 75,
                  columnNumber: 21
                }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("defs", {
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("linearGradient", {
                    id: "paint0_linear",
                    x1: "-4.30412e-10",
                    y1: "0.5",
                    x2: "208",
                    y2: "0.500295",
                    gradientUnits: "userSpaceOnUse",
                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("stop", {
                      "stop-color": "white"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 91,
                      columnNumber: 25
                    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("stop", {
                      offset: "0.79478",
                      "stop-color": "white",
                      "stop-opacity": "0"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 92,
                      columnNumber: 25
                    }, undefined)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 83,
                    columnNumber: 23
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 82,
                  columnNumber: 21
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 68,
                columnNumber: 19
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 66,
              columnNumber: 17
            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.CarouselItemText, {
              children: item.text
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 101,
              columnNumber: 17
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 15
          }, undefined)
        }, index, false, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 13
        }, undefined))
      }, void 0, false)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.CarouselButtons, {
      children: _constants_constants__WEBPACK_IMPORTED_MODULE_4__.TimeLineData.map((item, index) => {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.CarouselButton, {
          index: index,
          active: activeItem,
          onClick: e => handleClick(e, index),
          type: "button",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.CarouselButtonDot, {
            active: activeItem
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 117,
            columnNumber: 15
          }, undefined)
        }, index, false, {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 13
        }, undefined);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_3__.SectionDivider, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 46,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Timeline);

/***/ }),

/***/ "./src/components/TimeLine/TimeLineStyles.js":
/*!***************************************************!*\
  !*** ./src/components/TimeLine/TimeLineStyles.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CarouselContainer": function() { return /* binding */ CarouselContainer; },
/* harmony export */   "CarouselMobileScrollNode": function() { return /* binding */ CarouselMobileScrollNode; },
/* harmony export */   "CarouselItem": function() { return /* binding */ CarouselItem; },
/* harmony export */   "CarouselItemTitle": function() { return /* binding */ CarouselItemTitle; },
/* harmony export */   "CarouselItemImg": function() { return /* binding */ CarouselItemImg; },
/* harmony export */   "CarouselItemText": function() { return /* binding */ CarouselItemText; },
/* harmony export */   "CarouselButtons": function() { return /* binding */ CarouselButtons; },
/* harmony export */   "CarouselButton": function() { return /* binding */ CarouselButton; },
/* harmony export */   "CarouselButtonDot": function() { return /* binding */ CarouselButtonDot; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const CarouselContainer = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().ul)`
  max-width: 1040px;
  background: #0F1624;
  padding: 0rem;
  list-style:none;
  display: flex;
  justify-content: space-between; 
  /* overflow-x: hidden; */

  margin-left: 32px;
  &:first-of-type{
    margin-left: 0px;
  }

  margin-bottom: 80px;

  //remove scrollbar
  scrollbar-width: none;  
   &::-webkit-scrollbar {
     display: none;
   }

  @media ${props => props.theme.breakpoints.sm} {
    overflow-x: scroll;
    -webkit-overflow-scrolling: touch;
    scroll-snap-type: x mandatory;
    touch-action: pan-x;
    justify-content: initial;
    margin-bottom: 8px;
  }
`;
const CarouselMobileScrollNode = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  @media ${props => props.theme.breakpoints.sm} {
    display: flex;
    min-width: ${({
  final
}) => final ? `120%;` : `min-content`}
  }
`;
const CarouselItem = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  background: #0F1624;
  border-radius: 3px;
  max-width: 196px;

  @media ${props => props.theme.breakpoints.md} {
    max-width: 124px;
  }
  
  @media ${props => props.theme.breakpoints.sm} {
    margin-left: 32px;
    min-width: 120px;
    background: #0E131F;
    padding: 4px;
    align-content: start;
    scroll-snap-align: start;
    border-radius: 3px;
    overflow: visible;
    position: relative;
    height: fit-content;
    
    ${props => props.active === props.index ? `opacity: 1` : `opacity: 0.5`}; 
  }
`;
const CarouselItemTitle = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().h4)`
  font-weight: bold;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: 0.02em;
  display: flex;
  /* This gradient is different due to the size of the Title container, it must transition sooner to be visible on the text */
  background: linear-gradient(121.57deg, #FFFFFF 10%, rgba(255, 255, 255, 0.66) 30.15%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 8px;

  @media ${props => props.theme.breakpoints.md} {
    font-size: 20px;
    line-height: 28px;
    margin-bottom: 4px;
  }
  
  @media ${props => props.theme.breakpoints.sm} {
    font-size: 16px;
    line-height: 24px;
  }
`;
const CarouselItemImg = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().svg)`
  margin-left: 21px;
  -webkit-mask-image: linear-gradient(to right, rgba(0,0,0,1), rgba(0,0,0,0));
  width: 100%;

  @media ${props => props.theme.breakpoints.sm} {
    -webkit-mask-image: none;
    margin-left: 16px;
    overflow: visible;
  }
`;
const CarouselItemText = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().p)`
  font-size: 14px;
  line-height: 22px;
  letter-spacing: 0.02em;
  color: rgba(255, 255, 255, 0.75);
  padding-right: 16px;

  @media ${props => props.theme.breakpoints.md} {
    font-size: 12px;
    line-height: 18px;
    padding-right: 32px;
  }
  @media ${props => props.theme.breakpoints.sm} {
    font-size: 10px;
    line-height: 16px;
    padding-right: 0;
  }
`;
const CarouselButtons = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  width: 288px;

  display: none;
  visibility: hidden;

  @media ${props => props.theme.breakpoints.sm} {
    display: flex;
    visibility: visible;
    margin-bottom: 48px;
  }
`;
const CarouselButton = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().button)`
  box-sizing: border-box;
  background: none;
  padding: 4px;
  border: none;
  cursor: pointer;
  margin-right: 4px;
  opacity: ${props => props.active === props.index ? `1` : `.33`};
  transform: ${props => props.active === props.index ? `scale(1.6)` : `scale(1)`};

  &:focus {
    outline: none;
  }
`;
const CarouselButtonDot = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  background-color: white;
  border-radius: 10px;
  margin: auto;
  width: 3px;
  height: 3px;
`;

/***/ }),

/***/ "./src/constants/constants.js":
/*!************************************!*\
  !*** ./src/constants/constants.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "projects": function() { return /* binding */ projects; },
/* harmony export */   "TimeLineData": function() { return /* binding */ TimeLineData; }
/* harmony export */ });
const projects = [{
  title: "Travel Advisor",
  description: "Using React, you'll learn how to build a React Application - from start to finish. The App is called Travel Advisor and it is a Travel app that allows users to search places to stay and visit anyware in the world.",
  image: "/images/Travel.png",
  tags: ["React", "MUI"],
  visit: "https://github.com/vinay320/Travel",
  source: "https://travel-59fm.onrender.com/",
  id: 0
}, {
  title: "E-Commerce",
  description: "While building it you're going to learn many advanced Node, Express & JavaScript topics. you will have this unique and complex webshop app. And trust me, e-commerce applications is impressive.",
  image: "/images/Ecom.png",
  tags: ["Node", "Express", "Ejs", "JavaScript", "MongoDB", "Passport"],
  visit: "https://github.com/vinay320/Ecom-M",
  source: "https://ecom-m.onrender.com/",
  id: 1
}, {
  title: "Gesture Recognation",
  description: "This is a React app which uses mediapipe from google to find point on hand and can predict hand gestures.",
  image: "/images/hand.jpeg",
  tags: ["React", "MediaPipe"],
  source: "https://vinay320.github.io/MediaPipe_/",
  visit: "https://github.com/vinay320/MediaPipe_",
  id: 2
}, {
  title: "Recipe",
  description: "This is a code repository for the corresponding Recipe Website. In this website, we will create recipes which are available to all and one can save any recipe the want.",
  image: "/images/Recipe.png",
  tags: ["Node", "React", "Express", "MongoDB"],
  source: "https://github.com/vinay320/Recipe-Website",
  visit: "https://github.com/vinay320/Recipe-Website",
  id: 3
}];
const TimeLineData = [];

/***/ }),

/***/ "./src/layout/Layout.js":
/*!******************************!*\
  !*** ./src/layout/Layout.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Layout": function() { return /* binding */ Layout; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Footer_Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Footer/Footer */ "./src/components/Footer/Footer.js");
/* harmony import */ var _components_Header_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Header/Header */ "./src/components/Header/Header.js");
/* harmony import */ var _LayoutStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./LayoutStyles */ "./src/layout/LayoutStyles.js");

var _jsxFileName = "C:\\Users\\Vinay\\Desktop\\Projects\\PortFolio\\portfolio\\src\\layout\\Layout.js";




const Layout = ({
  children
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_LayoutStyles__WEBPACK_IMPORTED_MODULE_4__.Container, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header_Header__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 6
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("main", {
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 6
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Footer_Footer__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 6
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, undefined);
};

/***/ }),

/***/ "./src/layout/LayoutStyles.js":
/*!************************************!*\
  !*** ./src/layout/LayoutStyles.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Container": function() { return /* binding */ Container; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Container = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
max-width: 1280px;
width: 100%;
margin: auto;
`;

/***/ }),

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Acomplishments_Acomplishments__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Acomplishments/Acomplishments */ "./src/components/Acomplishments/Acomplishments.js");
/* harmony import */ var _components_BackgrooundAnimation_BackgroundAnimation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/BackgrooundAnimation/BackgroundAnimation */ "./src/components/BackgrooundAnimation/BackgroundAnimation.js");
/* harmony import */ var _components_Hero_Hero__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Hero/Hero */ "./src/components/Hero/Hero.js");
/* harmony import */ var _components_Projects_Projects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Projects/Projects */ "./src/components/Projects/Projects.js");
/* harmony import */ var _components_Technologies_Technologies__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Technologies/Technologies */ "./src/components/Technologies/Technologies.js");
/* harmony import */ var _components_TimeLine_TimeLine__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/TimeLine/TimeLine */ "./src/components/TimeLine/TimeLine.js");
/* harmony import */ var _layout_Layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../layout/Layout */ "./src/layout/Layout.js");
/* harmony import */ var _styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/GlobalComponents */ "./src/styles/GlobalComponents/index.js");

var _jsxFileName = "C:\\Users\\Vinay\\Desktop\\Projects\\PortFolio\\portfolio\\src\\pages\\index.js";









const Home = () => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_layout_Layout__WEBPACK_IMPORTED_MODULE_7__.Layout, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_8__.Section, {
      grid: true,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Hero_Hero__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_BackgrooundAnimation_BackgroundAnimation__WEBPACK_IMPORTED_MODULE_2__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Projects_Projects__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Technologies_Technologies__WEBPACK_IMPORTED_MODULE_5__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_TimeLine_TimeLine__WEBPACK_IMPORTED_MODULE_6__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Acomplishments_Acomplishments__WEBPACK_IMPORTED_MODULE_1__.default, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./src/styles/GlobalComponents/Button.js":
/*!***********************************************!*\
  !*** ./src/styles/GlobalComponents/Button.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index */ "./src/styles/GlobalComponents/index.js");

var _jsxFileName = "C:\\Users\\Vinay\\Desktop\\Projects\\PortFolio\\portfolio\\src\\styles\\GlobalComponents\\Button.js";



const Button = props => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_index__WEBPACK_IMPORTED_MODULE_2__.ButtonBack, {
  alt: props.alt,
  form: props.form,
  disabled: props.disabled,
  children: [props.children, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_index__WEBPACK_IMPORTED_MODULE_2__.ButtonFront, {
    alt: props.alt,
    onClick: props.onClick,
    disabled: props.disabled,
    children: props.children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }, undefined)]
}, void 0, true, {
  fileName: _jsxFileName,
  lineNumber: 6,
  columnNumber: 3
}, undefined);

/* harmony default export */ __webpack_exports__["default"] = (Button);

/***/ }),

/***/ "./src/styles/GlobalComponents/index.js":
/*!**********************************************!*\
  !*** ./src/styles/GlobalComponents/index.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Section": function() { return /* binding */ Section; },
/* harmony export */   "SectionTitle": function() { return /* binding */ SectionTitle; },
/* harmony export */   "SectionText": function() { return /* binding */ SectionText; },
/* harmony export */   "SectionDivider": function() { return /* binding */ SectionDivider; },
/* harmony export */   "SectionSubText": function() { return /* binding */ SectionSubText; },
/* harmony export */   "SecondaryBtn": function() { return /* binding */ SecondaryBtn; },
/* harmony export */   "ButtonBack": function() { return /* binding */ ButtonBack; },
/* harmony export */   "ButtonFront": function() { return /* binding */ ButtonFront; },
/* harmony export */   "LinkContainer": function() { return /* binding */ LinkContainer; },
/* harmony export */   "LinkIconImg": function() { return /* binding */ LinkIconImg; }
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Section = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().section)`
  display: ${props => props.grid ? "grid" : "flex"};
  flex-direction: ${props => props.row ? "row" : "column"};
  padding: ${props => props.nopadding ? "0" : "32px 48px 0"} ;
  margin: 0 auto;
  max-width: 1040px;
  box-sizing: content-box;
  position: relative;
  overflow: hidden;
  grid-template-columns: 1fr 1fr;

  @media ${props => props.theme.breakpoints.md} {
    padding: 24px 48px 0;
    flex-direction: column;
  }

  @media ${props => props.theme.breakpoints.sm} {
    padding: ${props => props.nopadding ? "0" : "16px 16px 0"} ;

    width: calc(100vw - 32px);
    flex-direction: column;
  }
`;
const SectionTitle = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().h2)`
  font-weight: 800;
  font-size: ${props => props.main ? '65px' : '56px'};
  line-height: ${props => props.main ? '72px' : '56px'};
  width: max-content;
  max-width: 100%;
  background: linear-gradient(121.57deg, #FFFFFF 18.77%, rgba(255, 255, 255, 0.66) 60.15%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 16px;
  padding: ${props => props.main ? '58px 0 16px' : '0'};

  @media ${props => props.theme.breakpoints.md}{
    font-size: ${props => props.main ? '56px' : '48px'};
    line-height: ${props => props.main ? '56px' : '48px'};
    margin-bottom: 12px;
    padding: ${props => props.main ? '40px 0 12px' : '0'};
  }

  @media ${props => props.theme.breakpoints.sm}{
    font-size: 32px;
    line-height: 40px;
    font-size: ${props => props.main ? '28px' : '32px'};
    line-height: ${props => props.main ? '32px' : '40px'};
    margin-bottom: 8px;
    padding: ${props => props.main ? '16px 0 8px' : '0'};
    max-width: 100%;
  }
`;
const SectionText = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().p)`
  max-width: 800px;
  font-size: 24px;
  line-height: 40px;
  font-weight: 300;
  padding-bottom: 3.6rem;
  color: rgba(255, 255, 255, 0.5);

  @media ${props => props.theme.breakpoints.md} {
    max-width: 670px;
    font-size: 20px;
    line-height: 32px;
    padding-bottom: 24px;
  }

  @media ${props => props.theme.breakpoints.sm} {
    font-size: 16px;
    line-height: 24px;
    padding-bottom: 16px;
  }
`;
const SectionDivider = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`

  width: 64px;
  height: 6px;
  border-radius: 10px;
  background-color: #fff;
  background: ${props => props.colorAlt ? 'linear-gradient(270deg, #F46737 0%, #945DD6 100%)' : 'linear-gradient(270deg, #13ADC7 0%, #945DD6 100%)'};

    margin: ${props => props.divider ? "4rem 0" : ""};

  @media ${props => props.theme.breakpoints.md} {
    width: 48px;
    height: 4px;
  }

  @media ${props => props.theme.breakpoints.sm} {
    width: 32px;
    height: 2px;
  }
`;
const SectionSubText = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().p)`
  max-width: 800px;
  font-weight: 300;
  font-size: 18px;
  line-height: 32px;
  color: rgba(255, 255, 255, 0.75);

@media ${props => props.theme.breakpoints.md} {
    max-width: 672px;
    font-size: 16px;
    line-height: 25px;
  }

  @media ${props => props.theme.breakpoints.sm} {
    font-size: 14px;
    line-height: 22px;
  }
`;
const SecondaryBtn = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().button)`
  color: #FFF;
  background: none;
  border: 1px solid rgba(255, 255, 255, 0.33);
  box-sizing: border-box;
  border-radius: 999px;
  padding: 16px 24px;
  font-weight: 600;
  font-size: 18px;
  line-height: 16px;
  width: fit-content;
  margin-top: 32px;
  margin-bottom: 80px;
  cursor: pointer;
  transition: 0.4s ease;
  &:focus {
    outline: none;
  }

  &:hover {
    color: #0f1624;
    background: #fff;
    border: 1px solid #fff;
  }

  &:active {
    background: #e0e4eb;
    border: 1px solid #304169;
    box-shadow: inset 0px 2px 1px rgba(46, 49, 55, 0.15), inset 0px 0px 4px rgba(20, 20, 55, 0.3);
  }

  @media ${props => props.theme.breakpoints.md}{
    margin-top: 24px; 
    margin-bottom: 64px;
    padding: 16px 24px;
    width: fit-content;
    font-size: 20px;
    line-height: 20px;
  }

  @media ${props => props.theme.breakpoints.sm} {
    margin-top: 16px;
    margin-bottom: 40px;
    padding: 8px 16px;
    width: 100%;
    font-size: 14px;
    line-height: 16px;
  }
`;
const ButtonBack = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  width: ${({
  alt
}) => alt ? '150px' : '262px'};
  height: ${({
  alt
}) => alt ? '52px' : '64px'};
  border-radius: 50px;
  font-size: ${({
  alt
}) => alt ? '20px' : '24px'};
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: ${({
  alt,
  form
}) => alt || form ? '0' : '0 0 80px'};
  color: #fff;
  background: ${({
  alt
}) => alt ? 'linear-gradient(270deg, #ff622e 0%, #B133FF 100%)' : 'linear-gradient(270deg, #00DBD8 0%, #B133FF 100%)'};
  cursor: pointer;
  transition: 0.5s ease;
  position: relative;
  overflow: hidden;
  opacity: ${({
  disabled
}) => disabled ? '.5' : '1'};

  @media ${props => props.theme.breakpoints.md} {
    width: ${({
  alt
}) => alt ? '150px' : '184px'};
    height: ${({
  alt
}) => alt ? '52px' : '48px'};
    font-size: ${({
  alt
}) => alt ? '20px' : '16px'};
    margin-bottom: ${({
  alt
}) => alt ? '0' : '64px'};
  }

  @media ${props => props.theme.breakpoints.sm} {
    width: 100%;
    height: 32px;
    font-size: 14px;
    margin-bottom: ${({
  alt
}) => alt ? '0' : '32px'};
  }
`;
const ButtonFront = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().button)`
  border: none;
  border-radius: 50px;
  color: #fff;
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${({
  alt
}) => alt ? 'linear-gradient(270deg, #F46737 0%, #945DD6 100%)' : 'linear-gradient(270deg, #13ADC7 0%, #945DD6 100%)'};
  opacity: ${({
  disabled
}) => disabled ? '.5' : '1'};
  transition: .4s ease;
  font-size: ${({
  alt
}) => alt ? '20px' : '24px'};
  font-weight: 600;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: ${({
  disabled
}) => disabled ? 'inset 0px 2px 1px rgba(46, 49, 55, 0.15), inset 0px 0px 4px rgba(20, 20, 55, 0.3)' : 'none'};

  &:hover {
    opacity: 0;
  }
  &:focus {
    outline: none;
  }
  &:active {
    opacity: 1;
    box-shadow: inset 0px 2px 1px rgba(46, 49, 55, 0.15), inset 0px 0px 4px rgba(20, 20, 55, 0.3);
  }

  &:disabled{
    background: linear-gradient(270deg, #00DBD8 0%, #B133FF 100%);
    opacity: 0.5;
    box-shadow: inset 0px 2px 1px rgba(46, 49, 55, 0.15), inset 0px 0px 4px rgba(20, 20, 55, 0.3);
  }

  @media ${props => props.theme.breakpoints.md} {
    font-size: ${({
  alt
}) => alt ? '20px' : '16px'};
  }

  @media ${props => props.theme.breakpoints.sm} {
    font-size: 14px;
  }
`;
const LinkContainer = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  margin-left: ${({
  large
}) => large ? '24px' : '16px'};
  transition: 0.3s ease;
  justify-content: center;
  border-radius: 50px;
  padding: 8px;

  &:hover {
    background-color: #212d45;
    transform: scale(1.2);
    cursor: pointer;
  }

  @media ${props => props.theme.breakpoints.md} {
    margin-left: ${({
  large
}) => large ? '16px' : '8px'};

  }
  @media ${props => props.theme.breakpoints.sm} {
    margin-left: ${({
  large
}) => large ? '0' : '8px'};
  }
`;
const LinkIconImg = (styled_components__WEBPACK_IMPORTED_MODULE_0___default().div)`
  display: flex;  
  height: ${({
  large
}) => large ? '32px' : '24px'};

  @media ${props => props.theme.breakpoints.md} {
    height: ${({
  nav
}) => nav ? '16px' : '24px'};
  }

  @media ${props => props.theme.breakpoints.sm} {
    height: ${({
  large
}) => large ? '32px' : '16px'};
  }
`;

/***/ }),

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = require("styled-components");;

/***/ }),

/***/ "?ca47":
/*!******************************************!*\
  !*** ./utils/resolve-rewrites (ignored) ***!
  \******************************************/
/***/ (function() {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_dist_client_request-idle-callback_js-node_modules_next_node_modules-847d74","vendors-node_modules_next_link_js-node_modules_react-icons_ai_index_esm_js-node_modules_react-92d9c1"], function() { return __webpack_exec__("./src/pages/index.js"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb3J0Zm9saW9fbmV4dGpzLy4vc3JjL2NvbXBvbmVudHMvQWNvbXBsaXNobWVudHMvQWNvbXBsaXNobWVudHMuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvX25leHRqcy8uL3NyYy9jb21wb25lbnRzL0Fjb21wbGlzaG1lbnRzL0Fjb21wbGlzaG1lbnRzU3R5bGVzLmpzIiwid2VicGFjazovL3BvcnRmb2xpb19uZXh0anMvLi9zcmMvY29tcG9uZW50cy9CYWNrZ3Jvb3VuZEFuaW1hdGlvbi9CYWNrZ3JvdW5kQW5pbWF0aW9uLmpzIiwid2VicGFjazovL3BvcnRmb2xpb19uZXh0anMvLi9zcmMvY29tcG9uZW50cy9Gb290ZXIvRm9vdGVyLmpzIiwid2VicGFjazovL3BvcnRmb2xpb19uZXh0anMvLi9zcmMvY29tcG9uZW50cy9Gb290ZXIvRm9vdGVyU3R5bGVzLmpzIiwid2VicGFjazovL3BvcnRmb2xpb19uZXh0anMvLi9zcmMvY29tcG9uZW50cy9IZWFkZXIvSGVhZGVyLmpzIiwid2VicGFjazovL3BvcnRmb2xpb19uZXh0anMvLi9zcmMvY29tcG9uZW50cy9IZWFkZXIvSGVhZGVyU3R5bGVzLmpzIiwid2VicGFjazovL3BvcnRmb2xpb19uZXh0anMvLi9zcmMvY29tcG9uZW50cy9IZXJvL0hlcm8uanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvX25leHRqcy8uL3NyYy9jb21wb25lbnRzL0hlcm8vSGVyb1N0eWxlcy5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW9fbmV4dGpzLy4vc3JjL2NvbXBvbmVudHMvUHJvamVjdHMvUHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvX25leHRqcy8uL3NyYy9jb21wb25lbnRzL1Byb2plY3RzL1Byb2plY3RzU3R5bGVzLmpzIiwid2VicGFjazovL3BvcnRmb2xpb19uZXh0anMvLi9zcmMvY29tcG9uZW50cy9UZWNobm9sb2dpZXMvVGVjaG5vbG9naWVzLmpzIiwid2VicGFjazovL3BvcnRmb2xpb19uZXh0anMvLi9zcmMvY29tcG9uZW50cy9UZWNobm9sb2dpZXMvVGVjaG5vbG9naWVzU3R5bGVzLmpzIiwid2VicGFjazovL3BvcnRmb2xpb19uZXh0anMvLi9zcmMvY29tcG9uZW50cy9UaW1lTGluZS9UaW1lTGluZS5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW9fbmV4dGpzLy4vc3JjL2NvbXBvbmVudHMvVGltZUxpbmUvVGltZUxpbmVTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvX25leHRqcy8uL3NyYy9jb25zdGFudHMvY29uc3RhbnRzLmpzIiwid2VicGFjazovL3BvcnRmb2xpb19uZXh0anMvLi9zcmMvbGF5b3V0L0xheW91dC5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW9fbmV4dGpzLy4vc3JjL2xheW91dC9MYXlvdXRTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvX25leHRqcy8uL3NyYy9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW9fbmV4dGpzLy4vc3JjL3N0eWxlcy9HbG9iYWxDb21wb25lbnRzL0J1dHRvbi5qcyIsIndlYnBhY2s6Ly9wb3J0Zm9saW9fbmV4dGpzLy4vc3JjL3N0eWxlcy9HbG9iYWxDb21wb25lbnRzL2luZGV4LmpzIiwid2VicGFjazovL3BvcnRmb2xpb19uZXh0anMvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvX25leHRqcy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIiIsIndlYnBhY2s6Ly9wb3J0Zm9saW9fbmV4dGpzL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9wb3J0Zm9saW9fbmV4dGpzL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvX25leHRqcy9leHRlcm5hbCBcInN0eWxlZC1jb21wb25lbnRzXCIiLCJ3ZWJwYWNrOi8vcG9ydGZvbGlvX25leHRqcy9pZ25vcmVkfEM6XFxVc2Vyc1xcVmluYXlcXERlc2t0b3BcXFByb2plY3RzXFxQb3J0Rm9saW9cXHBvcnRmb2xpb1xcbm9kZV9tb2R1bGVzXFxuZXh0XFxkaXN0XFxuZXh0LXNlcnZlclxcbGliXFxyb3V0ZXJ8Li91dGlscy9yZXNvbHZlLXJld3JpdGVzIl0sIm5hbWVzIjpbImRhdGEiLCJudW1iZXIiLCJ0ZXh0IiwiQWNvbXBsaXNobWVudHMiLCJtYXAiLCJjYXJkIiwiaW5kZXgiLCJCb3hlcyIsInN0eWxlZCIsInByb3BzIiwidGhlbWUiLCJicmVha3BvaW50cyIsIm1kIiwic20iLCJCb3giLCJsZyIsIkJveE51bSIsIkJveFRleHQiLCJKb2luIiwiSm9pblRleHQiLCJJY29uQ29udGFpbmVyIiwiQmFja2dyb3VuZEFuaW1hdGlvbiIsIkZvb3RlciIsIkZvb3RlcldyYXBwZXIiLCJMaW5rSXRlbSIsIlNvY2lhbEljb25zQ29udGFpbmVyIiwiQ29tcGFueUNvbnRhaW5lciIsIlNsb2dhbiIsIlNvY2lhbENvbnRhaW5lciIsIkxpbmtMaXN0IiwiTGlua0NvbHVtbiIsIkxpbmtUaXRsZSIsIkhlYWRlciIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwiY29sb3IiLCJDb250YWluZXIiLCJEaXYxIiwiRGl2MiIsIkRpdjMiLCJOYXZMaW5rIiwiQ29udGFjdERyb3BEb3duIiwiTmF2UHJvZHVjdHNJY29uIiwiSW9Jb3NBcnJvd0Ryb3Bkb3duIiwiaXNPcGVuIiwiU29jaWFsSWNvbnMiLCJIZXJvIiwiaGFuZGxlQ2xpY2siLCJMZWZ0U2VjdGlvbiIsIlByb2plY3RzIiwicHJvamVjdHMiLCJwIiwiaSIsImltYWdlIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInRhZ3MiLCJ0IiwidmlzaXQiLCJzb3VyY2UiLCJJbWciLCJHcmlkQ29udGFpbmVyIiwiQmxvZ0NhcmQiLCJUaXRsZUNvbnRlbnQiLCJIZWFkZXJUaHJlZSIsIkhyIiwiSW50cm8iLCJDYXJkSW5mbyIsIlV0aWxpdHlMaXN0IiwiRXh0ZXJuYWxMaW5rcyIsIlRhZ0xpc3QiLCJUYWciLCJUZWNobm9sb2dpZXMiLCJJbWFnZUNvbnRhaW5lciIsIk1haW5JbWFnZSIsIkxpc3QiLCJMaXN0Q29udGFpbmVyIiwiTGlzdFRpdGxlIiwiTGlzdFBhcmFncmFwaCIsIkxpc3RJdGVtIiwiTGlzdEljb24iLCJUT1RBTF9DQVJPVVNFTF9DT1VOVCIsIlRpbWVMaW5lRGF0YSIsIlRpbWVsaW5lIiwiYWN0aXZlSXRlbSIsInNldEFjdGl2ZUl0ZW0iLCJ1c2VTdGF0ZSIsImNhcm91c2VsUmVmIiwidXNlUmVmIiwic2Nyb2xsIiwibm9kZSIsImxlZnQiLCJzY3JvbGxUbyIsImJlaGF2aW9yIiwiZSIsInByZXZlbnREZWZhdWx0IiwiY3VycmVudCIsInNjcm9sbExlZnQiLCJNYXRoIiwiZmxvb3IiLCJzY3JvbGxXaWR0aCIsImhhbmRsZVNjcm9sbCIsInJvdW5kIiwidXNlRWZmZWN0IiwiaGFuZGxlUmVzaXplIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsIml0ZW0iLCJ5ZWFyIiwiQ2Fyb3VzZWxDb250YWluZXIiLCJDYXJvdXNlbE1vYmlsZVNjcm9sbE5vZGUiLCJmaW5hbCIsIkNhcm91c2VsSXRlbSIsImFjdGl2ZSIsIkNhcm91c2VsSXRlbVRpdGxlIiwiQ2Fyb3VzZWxJdGVtSW1nIiwiQ2Fyb3VzZWxJdGVtVGV4dCIsIkNhcm91c2VsQnV0dG9ucyIsIkNhcm91c2VsQnV0dG9uIiwiQ2Fyb3VzZWxCdXR0b25Eb3QiLCJpZCIsIkxheW91dCIsImNoaWxkcmVuIiwiSG9tZSIsIkJ1dHRvbiIsImFsdCIsImZvcm0iLCJkaXNhYmxlZCIsIm9uQ2xpY2siLCJTZWN0aW9uIiwiZ3JpZCIsInJvdyIsIm5vcGFkZGluZyIsIlNlY3Rpb25UaXRsZSIsIm1haW4iLCJTZWN0aW9uVGV4dCIsIlNlY3Rpb25EaXZpZGVyIiwiY29sb3JBbHQiLCJkaXZpZGVyIiwiU2VjdGlvblN1YlRleHQiLCJTZWNvbmRhcnlCdG4iLCJCdXR0b25CYWNrIiwiQnV0dG9uRnJvbnQiLCJMaW5rQ29udGFpbmVyIiwibGFyZ2UiLCJMaW5rSWNvbkltZyIsIm5hdiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUVBLE1BQU1BLElBQUksR0FBRyxDQUNYO0FBQUVDLFFBQU0sRUFBRSxDQUFWO0FBQWFDLE1BQUksRUFBRTtBQUFuQixDQURXLEVBRVg7QUFBRUQsUUFBTSxFQUFFLElBQVY7QUFBZ0JDLE1BQUksRUFBRTtBQUF0QixDQUZXLENBQWI7O0FBS0EsTUFBTUMsY0FBYyxHQUFHLG1CQUNyQiw4REFBQyw2REFBRDtBQUFBLDBCQUNFLDhEQUFDLGtFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFFRSw4REFBQyx3REFBRDtBQUFBLGNBQ0dILElBQUksQ0FBQ0ksR0FBTCxDQUFTLENBQUNDLElBQUQsRUFBT0MsS0FBUCxrQkFDUiw4REFBQyxzREFBRDtBQUFBLDhCQUNFLDhEQUFDLHlEQUFEO0FBQUEsa0JBQVUsR0FBRUQsSUFBSSxDQUFDSixNQUFPO0FBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFFRSw4REFBQywwREFBRDtBQUFBLGtCQUFVSSxJQUFJLENBQUNIO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRjtBQUFBLE9BQVVJLEtBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERDtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRixlQVVFLDhEQUFDLG9FQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFWRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERjs7QUFlQSwrREFBZUgsY0FBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pCQTtBQUVPLE1BQU1JLEtBQUssR0FBR0MsOERBQVc7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBV0MsS0FBSyxJQUFJQSxLQUFLLENBQUND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UmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuaW1wb3J0IHsgU2VjdGlvbiwgU2VjdGlvbkRpdmlkZXIsIFNlY3Rpb25UaXRsZSB9IGZyb20gJy4uLy4uL3N0eWxlcy9HbG9iYWxDb21wb25lbnRzJztcclxuaW1wb3J0IHsgQm94LCBCb3hlcywgQm94TnVtLCBCb3hUZXh0IH0gZnJvbSAnLi9BY29tcGxpc2htZW50c1N0eWxlcyc7XHJcblxyXG5jb25zdCBkYXRhID0gW1xyXG4gIHsgbnVtYmVyOiA2LCB0ZXh0OiAnIFByb2plY3RzJ30sXHJcbiAgeyBudW1iZXI6IDEwMDAsIHRleHQ6ICdDb2RpbmcgUXVlc3Rpb25zJywgfSxcclxuXTtcclxuXHJcbmNvbnN0IEFjb21wbGlzaG1lbnRzID0gKCkgPT4gKFxyXG4gIDxTZWN0aW9uPlxyXG4gICAgPFNlY3Rpb25UaXRsZT5QZXJzb25hbCBBY2hpZXZlbWVudHM8L1NlY3Rpb25UaXRsZT5cclxuICAgIDxCb3hlcz5cclxuICAgICAge2RhdGEubWFwKChjYXJkLCBpbmRleCkgPT4gKFxyXG4gICAgICAgIDxCb3gga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICA8Qm94TnVtPntgJHtjYXJkLm51bWJlcn0rYH08L0JveE51bT5cclxuICAgICAgICAgIDxCb3hUZXh0PntjYXJkLnRleHR9PC9Cb3hUZXh0PlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICApKX1cclxuICAgIDwvQm94ZXM+XHJcbiAgICA8U2VjdGlvbkRpdmlkZXIvPlxyXG4gIDwvU2VjdGlvbj5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFjb21wbGlzaG1lbnRzO1xyXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiXHJcblxyXG5leHBvcnQgY29uc3QgQm94ZXMgPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcclxuICBnYXA6IDI0cHg7XHJcbiAgbWFyZ2luOiAyNHB4IDAgNDBweDtcclxuXHJcbiAgQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMubWR9e1xyXG4gICAgZ2FwOiAxNnB4O1xyXG4gICAgbWFyZ2luOiAyMHB4IDAgMzJweDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMTQwcHgsIDFmcikpO1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219e1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XHJcbiAgICBnYXA6IDEwcHg7XHJcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xyXG4gICAgbWFyZ2luOiAyNHB4IGF1dG87XHJcbiAgfVxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgQm94ID0gc3R5bGVkLmRpdmBcclxuICBiYWNrZ3JvdW5kOiAjMjEyRDQ1O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgaGVpZ2h0OiAxNDRweDtcclxuICBwYWRkaW5nOiAyNHB4O1xyXG4gIEBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLmxnfSB7XHJcbiAgICBoZWlnaHQ6IDIxMHB4O1xyXG5cclxuICB9XHJcblxyXG4gIEBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLm1kfSB7XHJcbiAgICBoZWlnaHQ6IDEzNXB4O1xyXG4gICAgcGFkZGluZzogMTZweDtcclxuICB9XHJcblxyXG4gIEBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfSB7XHJcbiAgICBoZWlnaHQ6IDExMHB4O1xyXG4gICAgcGFkZGluZzogMTJweDtcclxuICAgIFxyXG4gICAgJjpudGgtY2hpbGQoMm4pe1xyXG4gICAgICBncmlkLXJvdzoyO1xyXG4gICAgfVxyXG4gIH1cclxuYFxyXG5leHBvcnQgY29uc3QgQm94TnVtID0gc3R5bGVkLmg1YFxyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGZvbnQtc2l6ZTogMzZweDtcclxuICBsaW5lLWhlaWdodDogNDBweDtcclxuICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xyXG4gIGNvbG9yOiAjRkZGRkZGO1xyXG4gIG1hcmdpbi1ib3R0b206IDhweDtcclxuXHJcbiAgQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMubWR9IHtcclxuICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAzMnB4O1xyXG4gIH1cclxuICBAbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX0ge1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI2cHg7XHJcbn1cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IEJveFRleHQgPSBzdHlsZWQucGBcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDJlbTtcclxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjc1KTtcclxuXHJcbiAgQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMubWR9e1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgfTtcclxuXHJcbiAgQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219IHtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxNHB4O1xyXG4gIH1cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IEpvaW4gPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgbWF4LXdpZHRoOiAxMDQwcHg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwYWRkaW5nLWJvdHRvbTogODBweDtcclxuXHJcbiAgQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMubWR9e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDY0cHg7XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX17XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMzJweDtcclxuICB9XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBKb2luVGV4dCA9IHN0eWxlZC5oNWBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxuICBsaW5lLWhlaWdodDogNDBweDtcclxuICBsZXR0ZXItc3BhY2luZzogMC4wMmVtO1xyXG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XHJcblxyXG5AbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5tZH17XHJcbiAgbGluZS1oZWlnaHQ6IDMycHg7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG59O1xyXG5cclxuQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219e1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBsaW5lLWhlaWdodDogMjRweDtcclxuICBtYXJnaW46IDAgMCAxNnB4O1xyXG59XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBJY29uQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG5cclxuICBAbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX17XHJcbiAgICB3aWR0aDogMTYwcHg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgfVxyXG5gXHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBCYWNrZ3JvdW5kQW5pbWF0aW9uID0gKCkgPT4gKFxyXG4gIDxkaXY+XHJcbiAgICA8c3ZnXHJcbiAgICAgIGNsYXNzTmFtZT1cIkJnQW5pbWF0aW9uX19zdmdcIlxyXG4gICAgICB2aWV3Qm94PVwiMCAwIDYwMiA2MDJcIlxyXG4gICAgICBmaWxsPVwibm9uZVwiXHJcbiAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgPlxyXG4gICAgICA8ZyBvcGFjaXR5PVwiMC4xNVwiPlxyXG4gICAgICAgIDxwYXRoXHJcbiAgICAgICAgICBmaWxsUnVsZT1cImV2ZW5vZGRcIlxyXG4gICAgICAgICAgY2xpcFJ1bGU9XCJldmVub2RkXCJcclxuICAgICAgICAgIGQ9XCJNMjAxLjMzNyA4Ny40MzdDMTkzLjQ3NCA3OS41NzM4IDE4MC43MjUgNzkuNTczOCAxNzIuODYyIDg3LjQzN0w4Ny40MzcgMTcyLjg2MkM3OS41NzM5IDE4MC43MjUgNzkuNTczOSAxOTMuNDc0IDg3LjQzNyAyMDEuMzM3TDQwMC42NjMgNTE0LjU2M0M0MDguNTI2IDUyMi40MjYgNDIxLjI3NSA1MjIuNDI2IDQyOS4xMzggNTE0LjU2M0w1MTQuNTYzIDQyOS4xMzhDNTIyLjQyNiA0MjEuMjc1IDUyMi40MjYgNDA4LjUyNiA1MTQuNTYzIDQwMC42NjNMMjAxLjMzNyA4Ny40MzdaTTMwLjQ4NjkgMTE1LjkxMkMtOC44Mjg5NyAxNTUuMjI4IC04LjgyODk3IDIxOC45NzIgMzAuNDg2OSAyNTguMjg3TDM0My43MTMgNTcxLjUxM0MzODMuMDI4IDYxMC44MjkgNDQ2Ljc3MiA2MTAuODI5IDQ4Ni4wODggNTcxLjUxM0w1NzEuNTEzIDQ4Ni4wODhDNjEwLjgyOSA0NDYuNzcyIDYxMC44MjkgMzgzLjAyOCA1NzEuNTEzIDM0My43MTNMMjU4LjI4NyAzMC40ODY5QzIxOC45NzIgLTguODI4OTYgMTU1LjIyOCAtOC44Mjg5NiAxMTUuOTEyIDMwLjQ4NjlMMzAuNDg2OSAxMTUuOTEyWlwiXHJcbiAgICAgICAgICBzdHJva2U9XCJ1cmwoI3BhaW50MF9yYWRpYWwpXCJcclxuICAgICAgICAgIGlkPVwicGF0aF8wXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxwYXRoXHJcbiAgICAgICAgICBkPVwiTTUxNC41NjMgMjAxLjMzN0M1MjIuNDI2IDE5My40NzQgNTIyLjQyNiAxODAuNzI1IDUxNC41NjMgMTcyLjg2Mkw0MjkuMTM4IDg3LjQzN0M0MjEuMjc1IDc5LjU3MzggNDA4LjUyNiA3OS41NzM5IDQwMC42NjMgODcuNDM3TDM1OC4wOTggMTMwLjAwMkwzMDEuMTQ4IDczLjA1MTZMMzQzLjcxMyAzMC40ODY5QzM4My4wMjggLTguODI4OTYgNDQ2Ljc3MiAtOC44Mjg5NiA0ODYuMDg4IDMwLjQ4NjlMNTcxLjUxMyAxMTUuOTEyQzYxMC44MjkgMTU1LjIyOCA2MTAuODI5IDIxOC45NzIgNTcxLjUxMyAyNTguMjg3TDM1Ny44MDIgNDcxLjk5OUwzMDAuODUyIDQxNS4wNDlMNTE0LjU2MyAyMDEuMzM3WlwiXHJcbiAgICAgICAgICBzdHJva2U9XCJ1cmwoI3BhaW50MV9yYWRpYWwpXCJcclxuICAgICAgICAgIGlkPVwicGF0aF8xXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxwYXRoXHJcbiAgICAgICAgICBkPVwiTTI0My45MDEgNDcxLjk5OUwyMDEuMzM3IDUxNC41NjNDMTkzLjQ3NCA1MjIuNDI2IDE4MC43MjUgNTIyLjQyNiAxNzIuODYyIDUxNC41NjNMODcuNDM3IDQyOS4xMzhDNzkuNTczOSA0MjEuMjc1IDc5LjU3MzkgNDA4LjUyNiA4Ny40MzcgNDAwLjY2M0wzMDEuMTQ4IDE4Ni45NTJMMjQ0LjE5OCAxMzAuMDAyTDMwLjQ4NjkgMzQzLjcxM0MtOC44Mjg5NyAzODMuMDI4IC04LjgyODk3IDQ0Ni43NzIgMzAuNDg2OSA0ODYuMDg4TDExNS45MTIgNTcxLjUxM0MxNTUuMjI4IDYxMC44MjkgMjE4Ljk3MiA2MTAuODI5IDI1OC4yODcgNTcxLjUxM0wzMDAuODUyIDUyOC45NDlMMjQzLjkwMSA0NzEuOTk5WlwiXHJcbiAgICAgICAgICBzdHJva2U9XCJ1cmwoI3BhaW50Ml9yYWRpYWwpXCJcclxuICAgICAgICAgIGlkPVwicGF0aF8yXCJcclxuICAgICAgICAvPlxyXG4gICAgICA8L2c+XHJcbiAgICAgIDxlbGxpcHNlXHJcbiAgICAgICAgY3g9XCIyOTUuMDI3XCJcclxuICAgICAgICBjeT1cIjE5My4xMThcIlxyXG4gICAgICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgtMjk1LjAyNyAtMTkzLjExOClcIlxyXG4gICAgICAgIHJ4PVwiMS4wNzMwNlwiXHJcbiAgICAgICAgcnk9XCIxLjA3NDMzXCJcclxuICAgICAgICBmaWxsPVwiIzk0NURENlwiXHJcbiAgICAgID5cclxuICAgICAgICA8YW5pbWF0ZU1vdGlvbiBkdXI9XCIxMHNcIiByZXBlYXRDb3VudD1cImluZGVmaW5pdGVcIiByb3RhdGU9XCJhdXRvXCI+XHJcbiAgICAgICAgICA8bXBhdGggeGxpbmtIcmVmPVwiI3BhdGhfMlwiIC8+XHJcbiAgICAgICAgPC9hbmltYXRlTW90aW9uPlxyXG4gICAgICA8L2VsbGlwc2U+XHJcbiAgICAgIDxwYXRoXHJcbiAgICAgICAgZD1cIk0yOTQuNjg1IDE5My40NzRMMjY4LjkzMiAyMTkuMjU4XCJcclxuICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTI5NC42ODUgLTE5My40NzQpIHJvdGF0ZSg0NSAyOTQuNjg1IDE5My40NzQpXCJcclxuICAgICAgICBzdHJva2U9XCJ1cmwoI3BhaW50M19saW5lYXIpXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxhbmltYXRlTW90aW9uIGR1cj1cIjEwc1wiIHJlcGVhdENvdW50PVwiaW5kZWZpbml0ZVwiIHJvdGF0ZT1cImF1dG9cIj5cclxuICAgICAgICAgIDxtcGF0aCB4bGlua0hyZWY9XCIjcGF0aF8yXCIgLz5cclxuICAgICAgICA8L2FuaW1hdGVNb3Rpb24+XHJcbiAgICAgIDwvcGF0aD5cclxuICAgICAgPGVsbGlwc2VcclxuICAgICAgICBjeD1cIjI5NS4wMjdcIlxyXG4gICAgICAgIGN5PVwiMTkzLjExOFwiXHJcbiAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC0yOTUuMDI3IC0xOTMuMTE4KVwiXHJcbiAgICAgICAgcng9XCIxLjA3MzA2XCJcclxuICAgICAgICByeT1cIjEuMDc0MzNcIlxyXG4gICAgICAgIGZpbGw9XCIjNDY3MzdcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPGFuaW1hdGVNb3Rpb25cclxuICAgICAgICAgIGR1cj1cIjVzXCJcclxuICAgICAgICAgIGJlZ2luPVwiMVwiXHJcbiAgICAgICAgICByZXBlYXRDb3VudD1cImluZGVmaW5pdGVcIlxyXG4gICAgICAgICAgcm90YXRlPVwiYXV0b1wiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPG1wYXRoIHhsaW5rSHJlZj1cIiNwYXRoXzJcIiAvPlxyXG4gICAgICAgIDwvYW5pbWF0ZU1vdGlvbj5cclxuICAgICAgPC9lbGxpcHNlPlxyXG4gICAgICA8cGF0aFxyXG4gICAgICAgIGQ9XCJNMjk0LjY4NSAxOTMuNDc0TDI2OC45MzIgMjE5LjI1OFwiXHJcbiAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC0yOTQuNjg1IC0xOTMuNDc0KSByb3RhdGUoNDUgMjk0LjY4NSAxOTMuNDc0KVwiXHJcbiAgICAgICAgc3Ryb2tlPVwidXJsKCNwYWludDdfbGluZWFyKVwiXHJcbiAgICAgID5cclxuICAgICAgICA8YW5pbWF0ZU1vdGlvblxyXG4gICAgICAgICAgZHVyPVwiNXNcIlxyXG4gICAgICAgICAgYmVnaW49XCIxXCJcclxuICAgICAgICAgIHJlcGVhdENvdW50PVwiaW5kZWZpbml0ZVwiXHJcbiAgICAgICAgICByb3RhdGU9XCJhdXRvXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8bXBhdGggeGxpbmtIcmVmPVwiI3BhdGhfMlwiIC8+XHJcbiAgICAgICAgPC9hbmltYXRlTW90aW9uPlxyXG4gICAgICA8L3BhdGg+XHJcbiAgICAgIDxlbGxpcHNlXHJcbiAgICAgICAgY3g9XCI0NzYuNTI1XCJcclxuICAgICAgICBjeT1cIjM2My4zMTNcIlxyXG4gICAgICAgIHJ4PVwiMS4wNzQzM1wiXHJcbiAgICAgICAgcnk9XCIxLjA3MzA2XCJcclxuICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTQ3Ni41MjUgLTM2My4zMTMpIHJvdGF0ZSg5MCA0NzYuNTI1IDM2My4zMTMpXCJcclxuICAgICAgICBmaWxsPVwiIzk0NURENlwiXHJcbiAgICAgID5cclxuICAgICAgICA8YW5pbWF0ZU1vdGlvbiBkdXI9XCIxMHNcIiByZXBlYXRDb3VudD1cImluZGVmaW5pdGVcIiByb3RhdGU9XCJhdXRvXCI+XHJcbiAgICAgICAgICA8bXBhdGggeGxpbmtIcmVmPVwiI3BhdGhfMFwiIC8+XHJcbiAgICAgICAgPC9hbmltYXRlTW90aW9uPlxyXG4gICAgICA8L2VsbGlwc2U+XHJcbiAgICAgIDxwYXRoXHJcbiAgICAgICAgZD1cIk00NzYuMTcxIDM2Mi45NTJMNDUwLjQxNyAzMzcuMTY4XCJcclxuICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTQ3Ni41MjUgLTM2My4zMTMpIHJvdGF0ZSgtNDUgNDc2LjE3MSAzNjIuOTUyKVwiXHJcbiAgICAgICAgc3Ryb2tlPVwidXJsKCNwYWludDRfbGluZWFyKVwiXHJcbiAgICAgID5cclxuICAgICAgICA8YW5pbWF0ZU1vdGlvbiBkdXI9XCIxMHNcIiByZXBlYXRDb3VudD1cImluZGVmaW5pdGVcIiByb3RhdGU9XCJhdXRvXCI+XHJcbiAgICAgICAgICA8bXBhdGggeGxpbmtIcmVmPVwiI3BhdGhfMFwiIC8+XHJcbiAgICAgICAgPC9hbmltYXRlTW90aW9uPlxyXG4gICAgICA8L3BhdGg+XHJcbiAgICAgIDxlbGxpcHNlXHJcbiAgICAgICAgY3g9XCIzODIuMTY0XCJcclxuICAgICAgICBjeT1cIjE1NS4wMjlcIlxyXG4gICAgICAgIHJ4PVwiMS4wNzQzM1wiXHJcbiAgICAgICAgcnk9XCIxLjA3MzA2XCJcclxuICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTM4Mi4xNjQgLTE1NS4wMjkpIHJvdGF0ZSg5MCAzODIuMTY0IDE1NS4wMjkpXCJcclxuICAgICAgICBmaWxsPVwiI0Y0NjczN1wiXHJcbiAgICAgID5cclxuICAgICAgICA8YW5pbWF0ZU1vdGlvblxyXG4gICAgICAgICAgZHVyPVwiMTBzXCJcclxuICAgICAgICAgIGJlZ2luPVwiMVwiXHJcbiAgICAgICAgICByZXBlYXRDb3VudD1cImluZGVmaW5pdGVcIlxyXG4gICAgICAgICAgcm90YXRlPVwiYXV0b1wiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPG1wYXRoIHhsaW5rSHJlZj1cIiNwYXRoXzBcIiAvPlxyXG4gICAgICAgIDwvYW5pbWF0ZU1vdGlvbj5cclxuICAgICAgPC9lbGxpcHNlPlxyXG4gICAgICA8cGF0aFxyXG4gICAgICAgIGQ9XCJNMzgxLjgxIDE1NC42NjlMMzU2LjA1NyAxMjguODg1XCJcclxuICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTM4MS44MSAtMTU0LjY2OSkgcm90YXRlKC00NSAzODEuODEgMTU0LjY2OSlcIlxyXG4gICAgICAgIHN0cm9rZT1cInVybCgjcGFpbnQ1X2xpbmVhcilcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPGFuaW1hdGVNb3Rpb25cclxuICAgICAgICAgIGR1cj1cIjEwc1wiXHJcbiAgICAgICAgICBiZWdpbj1cIjFcIlxyXG4gICAgICAgICAgcmVwZWF0Q291bnQ9XCJpbmRlZmluaXRlXCJcclxuICAgICAgICAgIHJvdGF0ZT1cImF1dG9cIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxtcGF0aCB4bGlua0hyZWY9XCIjcGF0aF8wXCIgLz5cclxuICAgICAgICA8L2FuaW1hdGVNb3Rpb24+XHJcbiAgICAgIDwvcGF0aD5cclxuICAgICAgPGVsbGlwc2VcclxuICAgICAgICBjeD1cIjMzMy4zMjRcIlxyXG4gICAgICAgIGN5PVwiMzgyLjY5MVwiXHJcbiAgICAgICAgcng9XCIxLjA3MzA2XCJcclxuICAgICAgICByeT1cIjEuMDc0MzNcIlxyXG4gICAgICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgtMzMzLjMyNCAtMzgyLjY5MSkgcm90YXRlKC0xODAgMzMzLjMyNCAzODIuNjkxKVwiXHJcbiAgICAgICAgZmlsbD1cIiNGNDY3MzdcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPGFuaW1hdGVNb3Rpb25cclxuICAgICAgICAgIGR1cj1cIjVzXCJcclxuICAgICAgICAgIGJlZ2luPVwiMFwiXHJcbiAgICAgICAgICByZXBlYXRDb3VudD1cImluZGVmaW5pdGVcIlxyXG4gICAgICAgICAgcm90YXRlPVwiYXV0b1wiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPG1wYXRoIHhsaW5rSHJlZj1cIiNwYXRoXzFcIiAvPlxyXG4gICAgICAgIDwvYW5pbWF0ZU1vdGlvbj5cclxuICAgICAgPC9lbGxpcHNlPlxyXG4gICAgICA8cGF0aFxyXG4gICAgICAgIGQ9XCJNMzMzLjY2NyAzODIuMzM1TDM1OS40MiAzNTYuNTUxXCJcclxuICAgICAgICB0cmFuc2Zvcm09XCJzY2FsZSgtMSAxKSB0cmFuc2xhdGUoLTMzMy42NjcgLTM4Mi4zMzUpIHJvdGF0ZSg0NSAzMzMuNjY3IDM4Mi4zMzUpXCJcclxuICAgICAgICBzdHJva2U9XCJ1cmwoI3BhaW50Nl9saW5lYXIpXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxhbmltYXRlTW90aW9uXHJcbiAgICAgICAgICBkdXI9XCI1c1wiXHJcbiAgICAgICAgICBiZWdpbj1cIjBcIlxyXG4gICAgICAgICAgcmVwZWF0Q291bnQ9XCJpbmRlZmluaXRlXCJcclxuICAgICAgICAgIHJvdGF0ZT1cImF1dG9cIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxtcGF0aCB4bGlua0hyZWY9XCIjcGF0aF8xXCIgLz5cclxuICAgICAgICA8L2FuaW1hdGVNb3Rpb24+XHJcbiAgICAgIDwvcGF0aD5cclxuICAgICAgPGVsbGlwc2VcclxuICAgICAgICBjeD1cIjE2NS41MjRcIlxyXG4gICAgICAgIGN5PVwiOTMuOTU5NlwiXHJcbiAgICAgICAgcng9XCIxLjA3MzA2XCJcclxuICAgICAgICByeT1cIjEuMDc0MzNcIlxyXG4gICAgICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgtMTY1LjUyNCAtOTMuOTU5NilcIlxyXG4gICAgICAgIGZpbGw9XCIjRjQ2NzM3XCJcclxuICAgICAgPlxyXG4gICAgICAgIDxhbmltYXRlTW90aW9uXHJcbiAgICAgICAgICBkdXI9XCIxMHNcIlxyXG4gICAgICAgICAgYmVnaW49XCIzXCJcclxuICAgICAgICAgIHJlcGVhdENvdW50PVwiaW5kZWZpbml0ZVwiXHJcbiAgICAgICAgICByb3RhdGU9XCJhdXRvXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8bXBhdGggeGxpbmtIcmVmPVwiI3BhdGhfMFwiIC8+XHJcbiAgICAgICAgPC9hbmltYXRlTW90aW9uPlxyXG4gICAgICA8L2VsbGlwc2U+XHJcbiAgICAgIDxwYXRoXHJcbiAgICAgICAgZD1cIk0xNjUuMTgyIDk0LjMxNTlMMTM5LjQyOSAxMjAuMVwiXHJcbiAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC0xNjUuMTgyIC05NC4zMTU5KSByb3RhdGUoNDUgMTY1LjE4MiA5NC4zMTU5KVwiXHJcbiAgICAgICAgc3Ryb2tlPVwidXJsKCNwYWludDdfbGluZWFyKVwiXHJcbiAgICAgID5cclxuICAgICAgICA8YW5pbWF0ZU1vdGlvblxyXG4gICAgICAgICAgZHVyPVwiMTBzXCJcclxuICAgICAgICAgIGJlZ2luPVwiM1wiXHJcbiAgICAgICAgICByZXBlYXRDb3VudD1cImluZGVmaW5pdGVcIlxyXG4gICAgICAgICAgcm90YXRlPVwiYXV0b1wiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPG1wYXRoIHhsaW5rSHJlZj1cIiNwYXRoXzBcIiAvPlxyXG4gICAgICAgIDwvYW5pbWF0ZU1vdGlvbj5cclxuICAgICAgPC9wYXRoPlxyXG4gICAgICA8ZWxsaXBzZVxyXG4gICAgICAgIGN4PVwiNDc2LjUyNVwiXHJcbiAgICAgICAgY3k9XCIzNjMuMzEzXCJcclxuICAgICAgICByeD1cIjEuMDc0MzNcIlxyXG4gICAgICAgIHJ5PVwiMS4wNzMwNlwiXHJcbiAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC00NzYuNTI1IC0zNjMuMzEzKSByb3RhdGUoOTAgNDc2LjUyNSAzNjMuMzEzKVwiXHJcbiAgICAgICAgZmlsbD1cIiMxM0FEQzdcIlxyXG4gICAgICA+XHJcbiAgICAgICAgPGFuaW1hdGVNb3Rpb25cclxuICAgICAgICAgIGR1cj1cIjEyc1wiXHJcbiAgICAgICAgICBiZWdpbj1cIjRcIlxyXG4gICAgICAgICAgcmVwZWF0Q291bnQ9XCJpbmRlZmluaXRlXCJcclxuICAgICAgICAgIHJvdGF0ZT1cImF1dG9cIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxtcGF0aCB4bGlua0hyZWY9XCIjcGF0aF8wXCIgLz5cclxuICAgICAgICA8L2FuaW1hdGVNb3Rpb24+XHJcbiAgICAgIDwvZWxsaXBzZT5cclxuICAgICAgPHBhdGhcclxuICAgICAgICBkPVwiTTQ3Ni4xNzEgMzYyLjk1Mkw0NTAuNDE3IDMzNy4xNjhcIlxyXG4gICAgICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgtNDc2LjUyNSAtMzYzLjMxMykgcm90YXRlKC00NSA0NzYuMTcxIDM2Mi45NTIpXCJcclxuICAgICAgICBzdHJva2U9XCJ1cmwoI3BhaW50MTFfbGluZWFyKVwiXHJcbiAgICAgID5cclxuICAgICAgICA8YW5pbWF0ZU1vdGlvblxyXG4gICAgICAgICAgZHVyPVwiMTJzXCJcclxuICAgICAgICAgIGJlZ2luPVwiNFwiXHJcbiAgICAgICAgICByZXBlYXRDb3VudD1cImluZGVmaW5pdGVcIlxyXG4gICAgICAgICAgcm90YXRlPVwiYXV0b1wiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPG1wYXRoIHhsaW5rSHJlZj1cIiNwYXRoXzBcIiAvPlxyXG4gICAgICAgIDwvYW5pbWF0ZU1vdGlvbj5cclxuICAgICAgPC9wYXRoPlxyXG4gICAgICA8ZGVmcz5cclxuICAgICAgICA8cmFkaWFsR3JhZGllbnRcclxuICAgICAgICAgIGlkPVwicGFpbnQwX3JhZGlhbFwiXHJcbiAgICAgICAgICBjeD1cIjBcIlxyXG4gICAgICAgICAgY3k9XCIwXCJcclxuICAgICAgICAgIHI9XCIxXCJcclxuICAgICAgICAgIGdyYWRpZW50VW5pdHM9XCJ1c2VyU3BhY2VPblVzZVwiXHJcbiAgICAgICAgICBncmFkaWVudFRyYW5zZm9ybT1cInRyYW5zbGF0ZSgzMDEgMzAxKSByb3RhdGUoOTApIHNjYWxlKDMwMClcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxzdG9wIG9mZnNldD1cIjAuMzMzMzMzXCIgc3RvcENvbG9yPVwiI0ZCRkJGQlwiIC8+XHJcbiAgICAgICAgICA8c3RvcCBvZmZzZXQ9XCIxXCIgc3RvcENvbG9yPVwid2hpdGVcIiBzdG9wT3BhY2l0eT1cIjBcIiAvPlxyXG4gICAgICAgIDwvcmFkaWFsR3JhZGllbnQ+XHJcbiAgICAgICAgPHJhZGlhbEdyYWRpZW50XHJcbiAgICAgICAgICBpZD1cInBhaW50MV9yYWRpYWxcIlxyXG4gICAgICAgICAgY3g9XCIwXCJcclxuICAgICAgICAgIGN5PVwiMFwiXHJcbiAgICAgICAgICByPVwiMVwiXHJcbiAgICAgICAgICBncmFkaWVudFVuaXRzPVwidXNlclNwYWNlT25Vc2VcIlxyXG4gICAgICAgICAgZ3JhZGllbnRUcmFuc2Zvcm09XCJ0cmFuc2xhdGUoMzAxIDMwMSkgcm90YXRlKDkwKSBzY2FsZSgzMDApXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8c3RvcCBvZmZzZXQ9XCIwLjMzMzMzM1wiIHN0b3BDb2xvcj1cIiNGQkZCRkJcIiAvPlxyXG4gICAgICAgICAgPHN0b3Agb2Zmc2V0PVwiMVwiIHN0b3BDb2xvcj1cIndoaXRlXCIgc3RvcE9wYWNpdHk9XCIwXCIgLz5cclxuICAgICAgICA8L3JhZGlhbEdyYWRpZW50PlxyXG4gICAgICAgIDxyYWRpYWxHcmFkaWVudFxyXG4gICAgICAgICAgaWQ9XCJwYWludDJfcmFkaWFsXCJcclxuICAgICAgICAgIGN4PVwiMFwiXHJcbiAgICAgICAgICBjeT1cIjBcIlxyXG4gICAgICAgICAgcj1cIjFcIlxyXG4gICAgICAgICAgZ3JhZGllbnRVbml0cz1cInVzZXJTcGFjZU9uVXNlXCJcclxuICAgICAgICAgIGdyYWRpZW50VHJhbnNmb3JtPVwidHJhbnNsYXRlKDMwMSAzMDEpIHJvdGF0ZSg5MCkgc2NhbGUoMzAwKVwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPHN0b3Agb2Zmc2V0PVwiMC4zMzMzMzNcIiBzdG9wQ29sb3I9XCIjRkJGQkZCXCIgLz5cclxuICAgICAgICAgIDxzdG9wIG9mZnNldD1cIjFcIiBzdG9wQ29sb3I9XCJ3aGl0ZVwiIHN0b3BPcGFjaXR5PVwiMFwiIC8+XHJcbiAgICAgICAgPC9yYWRpYWxHcmFkaWVudD5cclxuICAgICAgICA8bGluZWFyR3JhZGllbnRcclxuICAgICAgICAgIGlkPVwicGFpbnQzX2xpbmVhclwiXHJcbiAgICAgICAgICB4MT1cIjI5NS4wNDNcIlxyXG4gICAgICAgICAgeTE9XCIxOTMuMTE2XCJcclxuICAgICAgICAgIHgyPVwiMjY5Ljk3NVwiXHJcbiAgICAgICAgICB5Mj1cIjIxOC4xNTRcIlxyXG4gICAgICAgICAgZ3JhZGllbnRVbml0cz1cInVzZXJTcGFjZU9uVXNlXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8c3RvcCBzdG9wQ29sb3I9XCIjOTQ1REQ2XCIgLz5cclxuICAgICAgICAgIDxzdG9wIG9mZnNldD1cIjFcIiBzdG9wQ29sb3I9XCIjOTQ1REQ2XCIgc3RvcE9wYWNpdHk9XCIwXCIgLz5cclxuICAgICAgICA8L2xpbmVhckdyYWRpZW50PlxyXG4gICAgICAgIDxsaW5lYXJHcmFkaWVudFxyXG4gICAgICAgICAgaWQ9XCJwYWludDRfbGluZWFyXCJcclxuICAgICAgICAgIHgxPVwiNDc2LjUyOVwiXHJcbiAgICAgICAgICB5MT1cIjM2My4zMVwiXHJcbiAgICAgICAgICB4Mj1cIjQ1MS40NjFcIlxyXG4gICAgICAgICAgeTI9XCIzMzguMjcyXCJcclxuICAgICAgICAgIGdyYWRpZW50VW5pdHM9XCJ1c2VyU3BhY2VPblVzZVwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPHN0b3Agc3RvcENvbG9yPVwiIzk0NURENlwiIC8+XHJcbiAgICAgICAgICA8c3RvcCBvZmZzZXQ9XCIxXCIgc3RvcENvbG9yPVwiIzk0NURENlwiIHN0b3BPcGFjaXR5PVwiMFwiIC8+XHJcbiAgICAgICAgPC9saW5lYXJHcmFkaWVudD5cclxuICAgICAgICA8bGluZWFyR3JhZGllbnRcclxuICAgICAgICAgIGlkPVwicGFpbnQ1X2xpbmVhclwiXHJcbiAgICAgICAgICB4MT1cIjM4Mi4xNjhcIlxyXG4gICAgICAgICAgeTE9XCIxNTUuMDI3XCJcclxuICAgICAgICAgIHgyPVwiMzU3LjFcIlxyXG4gICAgICAgICAgeTI9XCIxMjkuOTg5XCJcclxuICAgICAgICAgIGdyYWRpZW50VW5pdHM9XCJ1c2VyU3BhY2VPblVzZVwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPHN0b3Agc3RvcENvbG9yPVwiI0Y0NjczN1wiIC8+XHJcbiAgICAgICAgICA8c3RvcCBvZmZzZXQ9XCIxXCIgc3RvcENvbG9yPVwiI0Y0NjczN1wiIHN0b3BPcGFjaXR5PVwiMFwiIC8+XHJcbiAgICAgICAgPC9saW5lYXJHcmFkaWVudD5cclxuICAgICAgICA8bGluZWFyR3JhZGllbnRcclxuICAgICAgICAgIGlkPVwicGFpbnQ2X2xpbmVhclwiXHJcbiAgICAgICAgICB4MT1cIjMzMy4zMDlcIlxyXG4gICAgICAgICAgeTE9XCIzODIuNjkzXCJcclxuICAgICAgICAgIHgyPVwiMzU4LjM3NlwiXHJcbiAgICAgICAgICB5Mj1cIjM1Ny42NTVcIlxyXG4gICAgICAgICAgZ3JhZGllbnRVbml0cz1cInVzZXJTcGFjZU9uVXNlXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8c3RvcCBzdG9wQ29sb3I9XCIjRjQ2NzM3XCIgLz5cclxuICAgICAgICAgIDxzdG9wIG9mZnNldD1cIjFcIiBzdG9wQ29sb3I9XCIjRjQ2NzM3XCIgc3RvcE9wYWNpdHk9XCIwXCIgLz5cclxuICAgICAgICA8L2xpbmVhckdyYWRpZW50PlxyXG4gICAgICAgIDxsaW5lYXJHcmFkaWVudFxyXG4gICAgICAgICAgaWQ9XCJwYWludDdfbGluZWFyXCJcclxuICAgICAgICAgIHgxPVwiMTY1LjU0XCJcclxuICAgICAgICAgIHkxPVwiOTMuOTU3OFwiXHJcbiAgICAgICAgICB4Mj1cIjE0MC40NzJcIlxyXG4gICAgICAgICAgeTI9XCIxMTguOTk2XCJcclxuICAgICAgICAgIGdyYWRpZW50VW5pdHM9XCJ1c2VyU3BhY2VPblVzZVwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPHN0b3Agc3RvcENvbG9yPVwiI0Y0NjczN1wiIC8+XHJcbiAgICAgICAgICA8c3RvcCBvZmZzZXQ9XCIxXCIgc3RvcENvbG9yPVwiI0Y0NjczN1wiIHN0b3BPcGFjaXR5PVwiMFwiIC8+XHJcbiAgICAgICAgPC9saW5lYXJHcmFkaWVudD5cclxuICAgICAgICA8bGluZWFyR3JhZGllbnRcclxuICAgICAgICAgIGlkPVwicGFpbnQ4X2xpbmVhclwiXHJcbiAgICAgICAgICB4MT1cIjQxNC4zNjdcIlxyXG4gICAgICAgICAgeTE9XCIzMDEuMTU2XCJcclxuICAgICAgICAgIHgyPVwiNDM5LjQzNVwiXHJcbiAgICAgICAgICB5Mj1cIjI3Ni4xMThcIlxyXG4gICAgICAgICAgZ3JhZGllbnRVbml0cz1cInVzZXJTcGFjZU9uVXNlXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8c3RvcCBzdG9wQ29sb3I9XCIjMTNBREM3XCIgLz5cclxuICAgICAgICAgIDxzdG9wIG9mZnNldD1cIjFcIiBzdG9wQ29sb3I9XCIjMTNBREM3XCIgc3RvcE9wYWNpdHk9XCIwXCIgLz5cclxuICAgICAgICA8L2xpbmVhckdyYWRpZW50PlxyXG4gICAgICAgIDxsaW5lYXJHcmFkaWVudFxyXG4gICAgICAgICAgaWQ9XCJwYWludDlfbGluZWFyXCJcclxuICAgICAgICAgIHgxPVwiNTE1Ljk0M1wiXHJcbiAgICAgICAgICB5MT1cIjI4OC4yMzhcIlxyXG4gICAgICAgICAgeDI9XCI1NDEuMzM5XCJcclxuICAgICAgICAgIHkyPVwiMjkxLjQ1NFwiXHJcbiAgICAgICAgICBncmFkaWVudFVuaXRzPVwidXNlclNwYWNlT25Vc2VcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxzdG9wIHN0b3BDb2xvcj1cIiMxM0FEQzdcIiAvPlxyXG4gICAgICAgICAgPHN0b3Agb2Zmc2V0PVwiMVwiIHN0b3BDb2xvcj1cIiMxM0FEQzdcIiBzdG9wT3BhY2l0eT1cIjBcIiAvPlxyXG4gICAgICAgIDwvbGluZWFyR3JhZGllbnQ+XHJcbiAgICAgICAgPGxpbmVhckdyYWRpZW50XHJcbiAgICAgICAgICBpZD1cInBhaW50MTBfbGluZWFyXCJcclxuICAgICAgICAgIHgxPVwiMTE3LjAwMVwiXHJcbiAgICAgICAgICB5MT1cIjIzMC42MTlcIlxyXG4gICAgICAgICAgeDI9XCIxMTcuMzZcIlxyXG4gICAgICAgICAgeTI9XCIyNTguMTkzXCJcclxuICAgICAgICAgIGdyYWRpZW50VW5pdHM9XCJ1c2VyU3BhY2VPblVzZVwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPHN0b3Agc3RvcENvbG9yPVwiIzk0NURENlwiIC8+XHJcbiAgICAgICAgICA8c3RvcCBvZmZzZXQ9XCIxXCIgc3RvcENvbG9yPVwiIzk0NURENlwiIHN0b3BPcGFjaXR5PVwiMFwiIC8+XHJcbiAgICAgICAgPC9saW5lYXJHcmFkaWVudD5cclxuICAgICAgICA8bGluZWFyR3JhZGllbnRcclxuICAgICAgICAgIGlkPVwicGFpbnQxMV9saW5lYXJcIlxyXG4gICAgICAgICAgeDE9XCI0NzYuNTI5XCJcclxuICAgICAgICAgIHkxPVwiMzYzLjMxXCJcclxuICAgICAgICAgIHgyPVwiNDUxLjQ2MVwiXHJcbiAgICAgICAgICB5Mj1cIjMzOC4yNzJcIlxyXG4gICAgICAgICAgZ3JhZGllbnRVbml0cz1cInVzZXJTcGFjZU9uVXNlXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8c3RvcCBzdG9wQ29sb3I9XCIjMTNBREM3XCIgLz5cclxuICAgICAgICAgIDxzdG9wIG9mZnNldD1cIjFcIiBzdG9wQ29sb3I9XCIjMTNBREM3XCIgc3RvcE9wYWNpdHk9XCIwXCIgLz5cclxuICAgICAgICA8L2xpbmVhckdyYWRpZW50PlxyXG4gICAgICA8L2RlZnM+XHJcbiAgICA8L3N2Zz5cclxuICA8L2Rpdj5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJhY2tncm91bmRBbmltYXRpb247IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgQWlGaWxsR2l0aHViLCBBaUZpbGxJbnN0YWdyYW0sIEFpRmlsbExpbmtlZGluIH0gZnJvbSAncmVhY3QtaWNvbnMvYWknO1xyXG5cclxuaW1wb3J0IHsgU29jaWFsSWNvbnMgfSBmcm9tICcuLi9IZWFkZXIvSGVhZGVyU3R5bGVzJztcclxuaW1wb3J0IHsgQ29tcGFueUNvbnRhaW5lciwgRm9vdGVyV3JhcHBlciwgTGlua0NvbHVtbiwgTGlua0l0ZW0sIExpbmtMaXN0LCBMaW5rVGl0bGUsIFNsb2dhbiwgU29jaWFsQ29udGFpbmVyLCBTb2NpYWxJY29uc0NvbnRhaW5lciB9IGZyb20gJy4vRm9vdGVyU3R5bGVzJztcclxuXHJcbmNvbnN0IEZvb3RlciA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPEZvb3RlcldyYXBwZXI+XHJcbiAgICAgIDxMaW5rTGlzdD5cclxuICAgICAgICA8TGlua0NvbHVtbj5cclxuICAgICAgICAgIDxMaW5rVGl0bGU+Q2FsbDwvTGlua1RpdGxlPlxyXG4gICAgICAgICAgPExpbmtJdGVtIGhyZWY9XCJ0ZWw6Nzk4MjI3OTk0NVwiPjc5ODIyNzk5NDU8L0xpbmtJdGVtPlxyXG4gICAgICAgIDwvTGlua0NvbHVtbj5cclxuICAgICAgICA8TGlua0NvbHVtbj5cclxuICAgICAgICAgIDxMaW5rVGl0bGU+RW1haWw8L0xpbmtUaXRsZT5cclxuICAgICAgICAgIDxMaW5rSXRlbSBocmVmPVwibWFpbHRvOnZpbmF5dG9tYXI5MzlAZ21haWwuY29tXCI+XHJcbiAgICAgICAgICAgIHZpbmF5dG9tYXI5MzlAZ21haWwuY29tXHJcbiAgICAgICAgICA8L0xpbmtJdGVtPlxyXG4gICAgICAgIDwvTGlua0NvbHVtbj5cclxuICAgICAgPC9MaW5rTGlzdD5cclxuICAgICAgPFNvY2lhbEljb25zQ29udGFpbmVyPlxyXG4gICAgICAgIDxDb21wYW55Q29udGFpbmVyPlxyXG4gICAgICAgICAgPFNsb2dhbj5Jbm5vdmF0aW5nIG9uZSBwcm9qZWN0IGF0IGEgdGltZTwvU2xvZ2FuPlxyXG4gICAgICAgIDwvQ29tcGFueUNvbnRhaW5lcj5cclxuICAgICAgICA8U29jaWFsQ29udGFpbmVyPlxyXG4gICAgICAgICAgPFNvY2lhbEljb25zICB0YXJnZXQ9J19ibGFuaycgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS92aW5heTMyMFwiPlxyXG4gICAgICAgICAgICA8QWlGaWxsR2l0aHViIHNpemU9XCIzcmVtXCIgLz5cclxuICAgICAgICAgIDwvU29jaWFsSWNvbnM+XHJcbiAgICAgICAgICA8U29jaWFsSWNvbnMgdGFyZ2V0PSdfYmxhbmsnIGhyZWY9XCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vdmluYXktdG9tYXItMTIzNjY2MjFiL1wiPlxyXG4gICAgICAgICAgICA8QWlGaWxsTGlua2VkaW4gc2l6ZT1cIjNyZW1cIiAvPlxyXG4gICAgICAgICAgPC9Tb2NpYWxJY29ucz5cclxuICAgICAgICAgIDxTb2NpYWxJY29ucyB0YXJnZXQ9J19ibGFuaycgaHJlZj1cImh0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vdmluX2F5dG9tYXIvXCI+XHJcbiAgICAgICAgICAgIDxBaUZpbGxJbnN0YWdyYW0gc2l6ZT1cIjNyZW1cIiAvPlxyXG4gICAgICAgICAgPC9Tb2NpYWxJY29ucz5cclxuICAgICAgICA8L1NvY2lhbENvbnRhaW5lcj5cclxuICAgICAgPC9Tb2NpYWxJY29uc0NvbnRhaW5lcj5cclxuICAgIDwvRm9vdGVyV3JhcHBlcj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyO1xyXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiXHJcblxyXG5leHBvcnQgY29uc3QgRm9vdGVyV3JhcHBlciA9IHN0eWxlZC5zZWN0aW9uYFxyXG5cdHdpZHRoOiBjYWxjKDEwMHZ3IC0gOTZweCk7XHJcbiAgbWF4LXdpZHRoOiAxMDQwcHg7XHJcbiAgcGFkZGluZzogMnJlbSA0OHB4IDQwcHg7XHJcbiAgbWFyZ2luOiAxcmVtIGF1dG87XHJcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7XHJcblxyXG5cclxuICBAbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX0ge1xyXG4gICAgcGFkZGluZzogMCAxNnB4IDQ4cHg7XHJcbiAgICB3aWR0aDogY2FsYygxMDB2dyAtIDMycHgpO1xyXG4gIH1cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IExpbmtJdGVtID0gc3R5bGVkLmFgXHJcblx0Zm9udC1zaXplOiAxOHB4O1xyXG5cdGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG5cdGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzUpO1xyXG5cdG1hcmdpbi1ib3R0b206IDE2cHg7XHJcblx0dHJhbnNpdGlvbjogLjNzIGVhc2U7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdGxlZnQ6IDA7XHJcblxyXG5cdCY6aG92ZXIge1xyXG5cdFx0Y29sb3I6ICNmZmY7XHJcblx0XHRsZWZ0OiA2cHg7XHJcblx0fVxyXG5cclxuXHRAbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5tZH0ge1xyXG5cdFx0Zm9udC1zaXplOiAxNnB4O1xyXG5cdFx0bGluZS1oZWlnaHQ6IDI4cHg7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdH1cclxuXHJcblx0QG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219IHtcclxuXHRcdGZvbnQtc2l6ZTogOHB4O1xyXG5cdFx0bGluZS1oZWlnaHQ6IDE0cHg7XHJcblx0XHRtYXJnaW4tYm90dG9tOiA4cHg7XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHR9XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBTb2NpYWxJY29uc0NvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbm1heC13aWR0aDogMTA0MHB4O1xyXG5kaXNwbGF5OiBmbGV4O1xyXG5qdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblxyXG5AbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5tZH17XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbkBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfXtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG5cdHdpZHRoOiAxMDAlO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IENvbXBhbnlDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcblx0YWxpZ24taXRlbXM6YmFzZWxpbmU7XHJcblx0ZmxleC13cmFwOiB3cmFwO1xyXG5cdG1hcmdpbi1yaWdodDogYXV0bztcclxuXHRcclxuXHJcblx0QG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMubWR9e1xyXG5cdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRcdGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcclxuXHR9XHJcblxyXG5cdEBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfXtcclxuXHRcdGRpc3BsYXk6IGZsZXg7XHJcblx0XHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cdFx0bWFyZ2luOiAwIDAgMzJweDtcclxuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblx0fVxyXG5gXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IFNsb2dhbiA9IHN0eWxlZC5wYFxyXG5cdGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XHJcblx0bWluLXdpZHRoOiAyODBweDtcclxuXHRsZXR0ZXItc3BhY2luZzogMC4wMmVtO1xyXG5cdGZvbnQtc2l6ZTogMThweDtcclxuXHRsaW5lLWhlaWdodDogMzBweDtcclxuXHRwYWRkaW5nOiAxcmVtO1xyXG5cclxuXHRAbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5tZH17XHJcblx0XHRmb250LXNpemU6IDE2cHg7XHJcblx0XHRsaW5lLWhlaWdodDogMjhweDtcclxuXHR9XHJcblxyXG5cdEBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfXtcclxuXHRcdGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG5cdFx0Zm9udC1zaXplOiAxNHB4O1xyXG5cdFx0bWluLXdpZHRoOiAxMDBweDtcclxuXHR9XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBTb2NpYWxDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG5cdGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcblx0QG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMubWR9e1xyXG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0XHRwYWRkaW5nLXJpZ2h0OiAxNnB4O1xyXG5cdFx0ZmxleC13cmFwOiB3cmFwO1xyXG5cdH1cclxuYFxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBMaW5rTGlzdCA9IHN0eWxlZC51bGBcclxuXHRib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcblx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgbWlubWF4KDg1cHgsIDIyMHB4KSk7XHJcblx0Z2FwOiA0MHB4O1xyXG4gIHBhZGRpbmc6IDQwcHggMCAyOHB4O1xyXG5cclxuXHRAbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5sZ30ge1xyXG5cdFx0cGFkZGluZzogMzJweCAwIDE2cHg7XHJcblx0fVxyXG5cclxuXHRAbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5tZH0ge1xyXG5cdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRwYWRkaW5nOiAzMnB4IDAgMTZweDtcclxuXHRcdGdhcDogMTZweDtcclxuXHR9XHJcblx0QG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219IHtcclxuXHRcdHdpZHRoOiAxMDAlO1xyXG5cdFx0cGFkZGluZzogMzJweCA0cHggMTZweDtcclxuXHRcdGdhcDogNXB4O1xyXG5cdH1cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IExpbmtDb2x1bW4gPSBzdHlsZWQuZGl2YFxyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHRtYXgtd2lkdGg6IDIyMHB4O1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5gXHJcbmV4cG9ydCBjb25zdCBMaW5rVGl0bGUgPSBzdHlsZWQuaDRgXHJcblx0Zm9udC1zdHlsZTogbm9ybWFsO1xyXG5cdGZvbnQtd2VpZ2h0OiA2MDA7XHJcblx0Zm9udC1zaXplOiAxMnB4O1xyXG5cdGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG5cdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcblx0Y29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KTtcclxuXHRtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG5cclxuXHRAbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX0ge1xyXG5cdFx0Zm9udC1zaXplOiAxMHB4O1xyXG5cdFx0bGluZS1oZWlnaHQ6IDEycHg7XHJcblx0XHRtYXJnaW4tYm90dG9tOiA4cHg7XHJcblx0fVxyXG5gXHJcbiIsImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEFpRmlsbEdpdGh1YiwgQWlGaWxsSW5zdGFncmFtLCBBaUZpbGxMaW5rZWRpbiB9IGZyb20gJ3JlYWN0LWljb25zL2FpJztcclxuaW1wb3J0IHsgRGlDc3NkZWNrIH0gZnJvbSAncmVhY3QtaWNvbnMvZGknO1xyXG5cclxuaW1wb3J0IHsgQ29udGFpbmVyLCBEaXYxLCBEaXYyLCBEaXYzLCBOYXZMaW5rLCBTb2NpYWxJY29ucyB9IGZyb20gJy4vSGVhZGVyU3R5bGVzJztcclxuXHJcbmNvbnN0IEhlYWRlciA9ICgpID0+IChcclxuICA8Q29udGFpbmVyPlxyXG4gICAgPERpdjE+XHJcbiAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgPGEgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsIGNvbG9yOiBcIndoaXRlXCIgfX0+XHJcbiAgICAgICAgICA8RGlDc3NkZWNrIHNpemU9XCIzcmVtXCIgLz4gPHNwYW4+UG9ydGZvbGlvPC9zcGFuPlxyXG4gICAgICAgIDwvYT5cclxuICAgICAgPC9MaW5rPlxyXG4gICAgPC9EaXYxPlxyXG4gICAgPERpdjI+XHJcbiAgICAgIDxsaT5cclxuICAgICAgICA8TGluayBocmVmPVwiI3Byb2plY3RzXCI+XHJcbiAgICAgICAgICA8TmF2TGluaz5Qcm9qZWN0czwvTmF2TGluaz5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgIDwvbGk+XHJcbiAgICAgIDxsaT5cclxuICAgICAgICA8TGluayBocmVmPVwiI3RlY2hcIj5cclxuICAgICAgICAgIDxOYXZMaW5rPlRlY2hub2xvZ2llczwvTmF2TGluaz5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgIDwvbGk+XHJcbiAgICAgIDxsaT5cclxuICAgICAgICA8TGluayBocmVmPVwiI2Fib3V0XCI+XHJcbiAgICAgICAgICA8TmF2TGluaz5BYm91dDwvTmF2TGluaz5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgIDwvbGk+XHJcbiAgICA8L0RpdjI+XHJcbiAgICA8RGl2Mz5cclxuICAgICAgPFNvY2lhbEljb25zIHRhcmdldD0nX2JsYW5rJyBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL3ZpbmF5MzIwXCI+XHJcbiAgICAgICAgPEFpRmlsbEdpdGh1YiBzaXplPVwiM3JlbVwiIC8+XHJcbiAgICAgIDwvU29jaWFsSWNvbnM+XHJcbiAgICAgIDxTb2NpYWxJY29ucyB0YXJnZXQ9J19ibGFuaycgaHJlZj1cImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi92aW5heS10b21hci0xMjM2NjYyMWIvXCI+XHJcbiAgICAgICAgPEFpRmlsbExpbmtlZGluIHNpemU9XCIzcmVtXCIgLz5cclxuICAgICAgPC9Tb2NpYWxJY29ucz5cclxuICAgICAgPFNvY2lhbEljb25zIHRhcmdldD0nX2JsYW5rJyBocmVmPVwiaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS92aW5fYXl0b21hci9cIj5cclxuICAgICAgICA8QWlGaWxsSW5zdGFncmFtIHNpemU9XCIzcmVtXCIgLz5cclxuICAgICAgPC9Tb2NpYWxJY29ucz5cclxuICAgIDwvRGl2Mz5cclxuICA8L0NvbnRhaW5lcj5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcclxuIiwiaW1wb3J0IHsgSW9Jb3NBcnJvd0Ryb3Bkb3duIH0gZnJvbSAncmVhY3QtaWNvbnMvaW8nO1xyXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuXHJcbmV4cG9ydCBjb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNSwgMWZyKTtcclxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcclxuICBncmlkLWNvbHVtbi1nYXA6IDJyZW07XHJcbiAgcGFkZGluZzogMXJlbTtcclxuICBwYWRkaW5nLXRvcDogMnJlbTtcclxuXHJcbiAgQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX0ge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDUsIDFmcik7XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLCA2MHB4KTtcclxuICAgIGdyaWQtY29sdW1uLWdhcDogMC41cmVtO1xyXG4gICAgZ3JpZC1yb3ctZ2FwOiAwLjVyZW07XHJcbiAgfVxyXG5gO1xyXG5leHBvcnQgY29uc3QgRGl2MSA9IHN0eWxlZC5kaXZgXHJcbiAgZ3JpZC1hcmVhOiAxIC8gMSAvIDIgLyAyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX0ge1xyXG4gICAgZ3JpZC1hcmVhOiAxIC8gMSAvIDIgLyAzO1xyXG4gIH1cclxuYDtcclxuZXhwb3J0IGNvbnN0IERpdjIgPSBzdHlsZWQuZGl2YFxyXG4gIGdyaWQtYXJlYTogMSAvIDIgLyAyIC8gNDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219IHtcclxuICAgIGdyaWQtYXJlYTogMiAvIDIgLyAzIC8gNTtcclxuICB9XHJcbmA7XHJcbmV4cG9ydCBjb25zdCBEaXYzID0gc3R5bGVkLmRpdmBcclxuICBncmlkLWFyZWE6IDEgLyA1IC8gMiAvIDY7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219IHtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBncmlkLWFyZWE6IDEgLyA0IC8gMiAvIDY7XHJcbiAgfVxyXG5gO1xyXG5cclxuLy8gTmF2aWdhdGlvbiBMaW5rc1xyXG5leHBvcnQgY29uc3QgTmF2TGluayA9IHN0eWxlZC5hYFxyXG4gIGZvbnQtc2l6ZTogMnJlbTtcclxuICBsaW5lLWhlaWdodDogMzJweDtcclxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjc1KTtcclxuICB0cmFuc2l0aW9uOiAwLjRzIGVhc2U7XHJcbiAgJjpob3ZlciB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG4gIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219IHtcclxuICAgIHBhZGRpbmc6IDAuNXJlbTtcclxuICB9XHJcbmA7XHJcblxyXG4vLy8gRHJvcERvd24gQ29udGFjdFxyXG5leHBvcnQgY29uc3QgQ29udGFjdERyb3BEb3duID0gc3R5bGVkLmJ1dHRvbmBcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYmFja2dyb3VuZDogbm9uZTtcclxuICBmb250LXNpemU6IDEuN3JlbTtcclxuXHJcbiAgbGluZS1oZWlnaHQ6IDMycHg7XHJcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43NSk7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRyYW5zaXRpb246IDAuM3MgZWFzZTtcclxuXHJcbiAgJjpmb2N1cyB7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gIH1cclxuICAmOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX0ge1xyXG4gICAgcGFkZGluZzogMC40cmVtIDA7XHJcbiAgfVxyXG4gIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMubWR9IHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IE5hdlByb2R1Y3RzSWNvbiA9IHN0eWxlZChJb0lvc0Fycm93RHJvcGRvd24pYFxyXG4gIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogMC4zcyBlYXNlO1xyXG4gIG9wYWNpdHk6ICR7KHsgaXNPcGVuIH0pID0+IChpc09wZW4gPyAnMScgOiAnLjc1Jyl9O1xyXG4gIHRyYW5zZm9ybTogJHsoeyBpc09wZW4gfSkgPT4gKGlzT3BlbiA/ICdzY2FsZVkoLTEpJyA6ICdzY2FsZVkoMSknKX07XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcblxyXG4gIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219IHtcclxuICAgIG1hcmdpbjogMnB4IDAgMCAycHg7XHJcbiAgICB3aWR0aDogMTVweDtcclxuICB9XHJcbmA7XHJcblxyXG5cclxuLy8gU29jaWFsIEljb25zIFxyXG5cclxuZXhwb3J0IGNvbnN0IFNvY2lhbEljb25zID0gc3R5bGVkLmFgXHJcbnRyYW5zaXRpb246IDAuM3MgZWFzZTtcclxuY29sb3I6IHdoaXRlO1xyXG5ib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gIHBhZGRpbmc6IDhweDtcclxuJjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjEyZDQ1O1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgXHJcbiAgfVxyXG5gIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmltcG9ydCB7IFNlY3Rpb24sIFNlY3Rpb25UZXh0LCBTZWN0aW9uVGl0bGUgfSBmcm9tICcuLi8uLi9zdHlsZXMvR2xvYmFsQ29tcG9uZW50cyc7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vLi4vc3R5bGVzL0dsb2JhbENvbXBvbmVudHMvQnV0dG9uJztcclxuaW1wb3J0IHsgTGVmdFNlY3Rpb24gfSBmcm9tICcuL0hlcm9TdHlsZXMnO1xyXG5cclxuY29uc3QgSGVybyA9IChwcm9wcykgPT4gKFxyXG4gIDw+XHJcbiAgICA8U2VjdGlvbiByb3cgbm9wYWRkaW5nPlxyXG4gICAgICA8TGVmdFNlY3Rpb24+XHJcbiAgICAgICAgPFNlY3Rpb25UaXRsZSBtYWluIGNlbnRlcj5cclxuICAgICAgICAgIFdlbGNvbWUgVG8gPGJyIC8+XHJcbiAgICAgICAgICBNeSBQZXJzb25hbCBQb3J0Zm9saW9cclxuICAgICAgICA8L1NlY3Rpb25UaXRsZT5cclxuICAgICAgICA8U2VjdGlvblRleHQ+XHJcbiAgICAgICAgICAgSSdte1wiIFwifVxyXG4gICAgICAgICAgPHNwYW4gc3R5bGU9e3sgY29sb3I6IFwid2hpdGVcIiB9fT5WaW5heSBUb21hcjwvc3Bhbj4sIGEgcGFzc2lvbmF0ZSBGdWxsXHJcbiAgICAgICAgICBTdGFjayBEZXZlbG9wZXIgd2l0aCBhIGNvbW1pdG1lbnQgdG8gY3JhZnRpbmcgc2VhbWxlc3MgZGlnaXRhbFxyXG4gICAgICAgICAgZXhwZXJpZW5jZXMuIFdpdGggYSBiYWNrZ3JvdW5kIGluIGJvdGggZnJvbnQtZW5kIGFuZCBiYWNrLWVuZFxyXG4gICAgICAgICAgdGVjaG5vbG9naWVzLCBJIHNwZWNpYWxpemUgaW4gdHJhbnNmb3JtaW5nIGlubm92YXRpdmUgaWRlYXMgaW50b1xyXG4gICAgICAgICAgZnVuY3Rpb25hbCBhbmQgdXNlci1mcmllbmRseSBhcHBsaWNhdGlvbnMuXHJcbiAgICAgICAgPC9TZWN0aW9uVGV4dD5cclxuICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e3Byb3BzLmhhbmRsZUNsaWNrfT5cclxuICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2RyaXZlLmdvb2dsZS5jb20vZmlsZS9kLzFBOHNXSkZlQkE1dkJMTmJZblFZeHNvSWMzQk5rSDhpQS92aWV3P3VzcD1kcml2ZV9saW5rXCI+XHJcbiAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGNvbG9yOiBcIndoaXRlXCIgfX0+TGVhcm4gTW9yZTwvc3Bhbj5cclxuICAgICAgICAgIDwvYT5cclxuICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgPC9MZWZ0U2VjdGlvbj5cclxuICAgIDwvU2VjdGlvbj5cclxuICA8Lz5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlcm87IiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5leHBvcnQgY29uc3QgTGVmdFNlY3Rpb24gPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219IHtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICB9XHJcbiAgQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5tZH0ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICB9XHJcbmA7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgeyBCbG9nQ2FyZCwgQ2FyZEluZm8sIEV4dGVybmFsTGlua3MsIEdyaWRDb250YWluZXIsIEhlYWRlclRocmVlLCBIciwgVGFnLCBUYWdMaXN0LCBUaXRsZUNvbnRlbnQsIFV0aWxpdHlMaXN0LCBJbWcgfSBmcm9tICcuL1Byb2plY3RzU3R5bGVzJztcclxuaW1wb3J0IHsgU2VjdGlvbiwgU2VjdGlvbkRpdmlkZXIsIFNlY3Rpb25UaXRsZSB9IGZyb20gJy4uLy4uL3N0eWxlcy9HbG9iYWxDb21wb25lbnRzJztcclxuaW1wb3J0IHsgcHJvamVjdHMgfSBmcm9tICcuLi8uLi9jb25zdGFudHMvY29uc3RhbnRzJztcclxuXHJcbmNvbnN0IFByb2plY3RzID0gKCkgPT4gKFxyXG4gIDxTZWN0aW9uIG5vcGFkZGluZyBpZD1cInByb2plY3RzXCI+XHJcbiAgICA8U2VjdGlvbkRpdmlkZXIgLz5cclxuICAgIDxTZWN0aW9uVGl0bGUgbWFpbj5Qcm9qZWN0czwvU2VjdGlvblRpdGxlPlxyXG4gICAgPEdyaWRDb250YWluZXI+XHJcbiAgICAgIHtwcm9qZWN0cy5tYXAoKHAsIGkpID0+IHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgPEJsb2dDYXJkIGtleT17aX0+XHJcbiAgICAgICAgICA8SW1nIHNyYz17cC5pbWFnZX0gLz5cclxuICAgICAgICAgICAgPFRpdGxlQ29udGVudD5cclxuICAgICAgICAgICAgICA8SGVhZGVyVGhyZWUgdGl0bGU+e3AudGl0bGV9PC9IZWFkZXJUaHJlZT5cclxuICAgICAgICAgICAgICA8SHIgLz5cclxuICAgICAgICAgICAgPC9UaXRsZUNvbnRlbnQ+XHJcbiAgICAgICAgICAgIDxDYXJkSW5mbyBjbGFzc05hbWU9XCJjYXJkLWluZm9cIj57cC5kZXNjcmlwdGlvbn08L0NhcmRJbmZvPlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxUaXRsZUNvbnRlbnQ+U3RhY2s8L1RpdGxlQ29udGVudD5cclxuICAgICAgICAgICAgICA8VGFnTGlzdD5cclxuICAgICAgICAgICAgICAgIHtwLnRhZ3MubWFwKCh0LCBpKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIHJldHVybiA8VGFnIGtleT17aX0+e3R9PC9UYWc+O1xyXG4gICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgPC9UYWdMaXN0PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPFV0aWxpdHlMaXN0PlxyXG4gICAgICAgICAgICAgIDxFeHRlcm5hbExpbmtzIGhyZWY9e3AudmlzaXR9PkNvZGU8L0V4dGVybmFsTGlua3M+XHJcbiAgICAgICAgICAgICAgPEV4dGVybmFsTGlua3MgaHJlZj17cC5zb3VyY2V9PlNvdXJjZTwvRXh0ZXJuYWxMaW5rcz5cclxuICAgICAgICAgICAgPC9VdGlsaXR5TGlzdD5cclxuICAgICAgICAgIDwvQmxvZ0NhcmQ+XHJcbiAgICAgICAgKTtcclxuICAgICAgfSl9XHJcbiAgICA8L0dyaWRDb250YWluZXI+XHJcbiAgPC9TZWN0aW9uPlxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdHM7IiwiaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcblxyXG5leHBvcnQgY29uc3QgSW1nID0gc3R5bGVkLmltZ2BcclxuICB3aWR0aDoxMDAlO1xyXG4gIGhlaWdodDoxMDAlO1xyXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBHcmlkQ29udGFpbmVyID0gc3R5bGVkLnNlY3Rpb25gXHJcbmRpc3BsYXk6IGdyaWQ7XHJcbmdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDQwMHB4LCAxZnIpKTtcclxucGFkZGluZzogM3JlbTtcclxucGxhY2UtaXRlbXM6IGNlbnRlcjtcclxuY29sdW1uLWdhcDogMnJlbTtcclxucm93LWdhcDogM3JlbTtcclxuQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX0ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBwYWRkaW5nOiAycmVtO1xyXG4gIHBhZGRpbmctYm90dG9tOiAwO1xyXG59XHJcblxyXG5gXHJcbmV4cG9ydCBjb25zdCBCbG9nQ2FyZCA9IHN0eWxlZC5kaXZgXHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBib3gtc2hhZG93OiAzcHggM3B4IDIwcHggcmdiYSg4MCwgNzgsIDc4LCAwLjUpO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB3aWR0aDogNDAwcHg7XHJcbiAgQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX0ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5gO1xyXG5leHBvcnQgY29uc3QgVGl0bGVDb250ZW50ID0gc3R5bGVkLmRpdmBcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgei1pbmRleDogMjA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcblxyXG5gO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBIZWFkZXJUaHJlZSA9IHN0eWxlZC5oM2BcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgY29sb3I6ICM5Y2M5ZTM7XHJcbiAgcGFkZGluZzogLjVyZW0gMDtcclxuICBmb250LXNpemU6ICR7KHByb3BzKSA9PiBwcm9wcy50aXRsZSA/ICczcmVtJyA6ICcycmVtJ307XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgSHIgPSBzdHlsZWQuaHJgXHJcbiAgd2lkdGg6IDUwcHg7XHJcbiAgaGVpZ2h0OiAzcHg7XHJcbiAgbWFyZ2luOiAyMHB4IGF1dG87XHJcbiAgYm9yZGVyOiAwO1xyXG4gIGJhY2tncm91bmQ6ICNkMGJiNTc7XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgSW50cm8gPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiAxNzBweDtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBjb2xvcjogI2RjZTNlNztcclxuICBmb250LWZhbWlseTogJ0Ryb2lkIFNlcmlmJywgc2VyaWY7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICBsaW5lLWhlaWdodDogMThweDtcclxuYDtcclxuXHJcblxyXG5leHBvcnQgY29uc3QgQ2FyZEluZm8gPSBzdHlsZWQucGBcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAwIDUwcHg7XHJcbiAgY29sb3I6ICNlNGU2ZTc7XHJcbiAgZm9udC1zdHlsZTogMnJlbTtcclxuICBsaW5lLWhlaWdodDogMjRweDtcclxuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219IHtcclxuICAgIHBhZGRpbmc6LjNyZW1cclxuICBcclxufVxyXG5gO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBVdGlsaXR5TGlzdCA9IHN0eWxlZC51bGBcclxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgcGFkZGluZzogMDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gIG1hcmdpbjogMi41cmVtIDA7XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgRXh0ZXJuYWxMaW5rcyA9IHN0eWxlZC5hYFxyXG5jb2xvcjojZDRjMGMwO1xyXG5mb250LXNpemU6IDEuNnJlbTtcclxucGFkZGluZzoxcmVtIDEuNXJlbTtcclxuYmFja2dyb3VuZDogIzZiMzAzMDtcclxuYm9yZGVyLXJhZGl1czogMTVweDtcclxudHJhbnNpdGlvbjogMC41cztcclxuJjpob3ZlcntcclxuICBiYWNrZ3JvdW5kOiAjODAxNDE0O1xyXG5cclxufVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IFRhZ0xpc3QgPSBzdHlsZWQudWxgXHJcbmRpc3BsYXk6IGZsZXg7XHJcbmp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG5wYWRkaW5nOiAycmVtO1xyXG5gXHJcbmV4cG9ydCBjb25zdCBUYWcgPSBzdHlsZWQubGlgXHJcbmNvbG9yOiAjZDhiZmJmO1xyXG5mb250LXNpemU6IDEuNXJlbTtcclxuYCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IERpRmlyZWJhc2UsIERpUmVhY3QsIERpWmVuZCB9IGZyb20gJ3JlYWN0LWljb25zL2RpJztcclxuaW1wb3J0IHsgU2VjdGlvbiwgU2VjdGlvbkRpdmlkZXIsIFNlY3Rpb25UZXh0LCBTZWN0aW9uVGl0bGUgfSBmcm9tICcuLi8uLi9zdHlsZXMvR2xvYmFsQ29tcG9uZW50cyc7XHJcbmltcG9ydCB7IExpc3QsIExpc3RDb250YWluZXIsIExpc3RJdGVtLCBMaXN0UGFyYWdyYXBoLCBMaXN0VGl0bGUgfSBmcm9tICcuL1RlY2hub2xvZ2llc1N0eWxlcyc7XHJcblxyXG5jb25zdCBUZWNobm9sb2dpZXMgPSAoKSA9PiAoXHJcbiAgPFNlY3Rpb24gaWQ9XCJ0ZWNoXCI+XHJcbiAgICA8U2VjdGlvbkRpdmlkZXIgZGl2aWRlciAvPlxyXG4gICAgPFNlY3Rpb25UaXRsZT5UZWNobm9sb2dpZXM8L1NlY3Rpb25UaXRsZT5cclxuICAgIDxTZWN0aW9uVGV4dD5cclxuICAgICAgSSd2ZSB3b3JrZWQgd2l0aCBhIHJhbmdlIGEgdGVjaG5vbG9naWVzIGluIHRoZSB3ZWIgZGV2ZWxvcG1lbnQgd29ybGQuIEZyb21cclxuICAgICAgQmFjay1lbmQgVG8gRGVzaWduXHJcbiAgICA8L1NlY3Rpb25UZXh0PlxyXG4gICAgPExpc3Q+XHJcbiAgICAgIDxMaXN0SXRlbT5cclxuICAgICAgICA8cGljdHVyZT5cclxuICAgICAgICAgIDxEaVJlYWN0IHNpemU9XCIzcmVtXCIgLz5cclxuICAgICAgICA8L3BpY3R1cmU+XHJcbiAgICAgICAgPExpc3RDb250YWluZXI+XHJcbiAgICAgICAgICA8TGlzdFRpdGxlPkZyb250LUVuZDwvTGlzdFRpdGxlPlxyXG4gICAgICAgICAgPExpc3RQYXJhZ3JhcGg+XHJcbiAgICAgICAgICAgIEV4cGVyaWVjZSB3aXRoIDxiciAvPlxyXG4gICAgICAgICAgICBSZWFjdC5qc1xyXG4gICAgICAgICAgICBNYXRlcmlhbCBVSVxyXG4gICAgICAgICAgICBUYWlsd2luZCBDU1MgXHJcbiAgICAgICAgICAgPC9MaXN0UGFyYWdyYXBoPlxyXG4gICAgICAgIDwvTGlzdENvbnRhaW5lcj5cclxuICAgICAgPC9MaXN0SXRlbT5cclxuICAgICAgPExpc3RJdGVtPlxyXG4gICAgICAgIDxwaWN0dXJlPlxyXG4gICAgICAgICAgPERpRmlyZWJhc2Ugc2l6ZT1cIjNyZW1cIiAvPlxyXG4gICAgICAgIDwvcGljdHVyZT5cclxuICAgICAgICA8TGlzdENvbnRhaW5lcj5cclxuICAgICAgICAgIDxMaXN0VGl0bGU+QmFjay1FbmQ8L0xpc3RUaXRsZT5cclxuICAgICAgICAgIDxMaXN0UGFyYWdyYXBoPlxyXG4gICAgICAgICAgICBFeHBlcmllbmNlIHdpdGggPGJyIC8+XHJcbiAgICAgICAgICAgIE5vZGUuanMgRXhwcmVzcy5qcyBNb25nb0RCXHJcbiAgICAgICAgICA8L0xpc3RQYXJhZ3JhcGg+XHJcbiAgICAgICAgPC9MaXN0Q29udGFpbmVyPlxyXG4gICAgICA8L0xpc3RJdGVtPlxyXG4gICAgPC9MaXN0PlxyXG4gICAgPFNlY3Rpb25EaXZpZGVyIGNvbG9yQWx0IC8+XHJcbiAgPC9TZWN0aW9uPlxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGVjaG5vbG9naWVzO1xyXG4iLCJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xyXG5cclxuZXhwb3J0IGNvbnN0IEltYWdlQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogcmFkaWFsLWdyYWRpZW50KDUwJSA1MCUgYXQgNTAlIDUwJSwgcmdiYSg3OSwgMTA4LCAxNzYsIDAuMjUpIDUzLjglLCByZ2JhKDc5LCAxMDgsIDE3NiwgMCkgMTAwJSk7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogNjBweDtcclxuICBtYXJnaW4tdG9wOiA0OHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICBAbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5sZ30ge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xyXG4gIH1cclxuICBAbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5tZH0ge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xyXG4gIH1cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IE1haW5JbWFnZSA9IHN0eWxlZC5pbWdgXHJcbiAgd2lkdGg6IDEwMCU7XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBMaXN0ID0gc3R5bGVkLnVsYFxyXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XHJcbiAgZ2FwOiA0MHB4O1xyXG4gIG1hcmdpbjogM3JlbSAwO1xyXG4gIFxyXG4gIEBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLmxnfXtcclxuICAgIG1hcmdpbjogNjRweCAwO1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMubWR9e1xyXG4gICAgbWFyZ2luOiA2NHB4IDA7XHJcbiAgICBnYXA6IDI0cHhcclxuICB9XHJcbiAgXHJcbiAgQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBtYXJnaW46IDMycHggMDtcclxuICB9XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBMaXN0Q29udGFpbmVyID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblxyXG4gIEBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfXtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBtYXJnaW4tbGVmdDogMThweDtcclxuICB9XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBMaXN0VGl0bGUgPSBzdHlsZWQuaDRgXHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBmb250LXNpemU6IDI4cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDMycHg7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDJlbTtcclxuICBjb2xvcjogI0ZGRkZGRjtcclxuICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcblxyXG5AbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5tZH17XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyOHB4O1xyXG59XHJcblxyXG5AbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX17XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyOHB4O1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjAyZW07XHJcbiAgbWFyZ2luLWJvdHRvbTogNHB4O1xyXG59XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBMaXN0UGFyYWdyYXBoID0gc3R5bGVkLnBgXHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzUpO1xyXG5cclxuICBAbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5tZH17XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjhweDtcclxuICB9XHJcblxyXG4gIEBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfXtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG4gIH1cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IExpc3RJdGVtID0gc3R5bGVkLmxpYFxyXG4gIG1heC13aWR0aDogMzIwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMubWR9e1xyXG4gIG1heC13aWR0aDogMjAzcHg7XHJcbn1cclxuXHJcbkBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfXtcclxuICBtYXJnaW4tYm90dG9tOiAxNHB4O1xyXG4gIG1heC13aWR0aDogMzIwcHg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxufVxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgTGlzdEljb24gPSBzdHlsZWQuaW1nYFxyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOiA0OHB4O1xyXG4gIGhlaWdodDogNDhweDtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIFxyXG4gIEBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLm1kfXtcclxuICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219e1xyXG4gICAgd2lkdGg6IDMycHg7XHJcbiAgICBoZWlnaHQ6IDMycHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgfVxyXG5gXHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlUmVmLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgeyBDYXJvdXNlbEJ1dHRvbiwgQ2Fyb3VzZWxCdXR0b25Eb3QsIENhcm91c2VsQnV0dG9ucywgQ2Fyb3VzZWxDb250YWluZXIsIENhcm91c2VsSXRlbSwgQ2Fyb3VzZWxJdGVtSW1nLCBDYXJvdXNlbEl0ZW1UZXh0LCBDYXJvdXNlbEl0ZW1UaXRsZSwgQ2Fyb3VzZWxNb2JpbGVTY3JvbGxOb2RlIH0gZnJvbSAnLi9UaW1lTGluZVN0eWxlcyc7XHJcbmltcG9ydCB7IFNlY3Rpb24sIFNlY3Rpb25EaXZpZGVyLCBTZWN0aW9uVGV4dCwgU2VjdGlvblRpdGxlIH0gZnJvbSAnLi4vLi4vc3R5bGVzL0dsb2JhbENvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyBUaW1lTGluZURhdGEgfSBmcm9tICcuLi8uLi9jb25zdGFudHMvY29uc3RhbnRzJztcclxuXHJcbmNvbnN0IFRPVEFMX0NBUk9VU0VMX0NPVU5UID0gVGltZUxpbmVEYXRhLmxlbmd0aDtcclxuXHJcbmNvbnN0IFRpbWVsaW5lID0gKCkgPT4ge1xyXG4gIGNvbnN0IFthY3RpdmVJdGVtLCBzZXRBY3RpdmVJdGVtXSA9IHVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IGNhcm91c2VsUmVmID0gdXNlUmVmKCk7XHJcblxyXG4gIGNvbnN0IHNjcm9sbCA9IChub2RlLCBsZWZ0KSA9PiB7XHJcbiAgICByZXR1cm4gbm9kZS5zY3JvbGxUbyh7IGxlZnQsIGJlaGF2aW9yOiAnc21vb3RoJyB9KTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNsaWNrID0gKGUsIGkpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICBpZiAoY2Fyb3VzZWxSZWYuY3VycmVudCkge1xyXG4gICAgICBjb25zdCBzY3JvbGxMZWZ0ID0gTWF0aC5mbG9vcihjYXJvdXNlbFJlZi5jdXJyZW50LnNjcm9sbFdpZHRoICogMC43ICogKGkgLyBUaW1lTGluZURhdGEubGVuZ3RoKSk7XHJcbiAgICAgIFxyXG4gICAgICBzY3JvbGwoY2Fyb3VzZWxSZWYuY3VycmVudCwgc2Nyb2xsTGVmdCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCBoYW5kbGVTY3JvbGwgPSAoKSA9PiB7XHJcbiAgICBpZiAoY2Fyb3VzZWxSZWYuY3VycmVudCkge1xyXG4gICAgICBjb25zdCBpbmRleCA9IE1hdGgucm91bmQoKGNhcm91c2VsUmVmLmN1cnJlbnQuc2Nyb2xsTGVmdCAvIChjYXJvdXNlbFJlZi5jdXJyZW50LnNjcm9sbFdpZHRoICogMC43KSkgKiBUaW1lTGluZURhdGEubGVuZ3RoKTtcclxuXHJcbiAgICAgIHNldEFjdGl2ZUl0ZW0oaW5kZXgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gc25hcCBiYWNrIHRvIGJlZ2lubmluZyBvZiBzY3JvbGwgd2hlbiB3aW5kb3cgaXMgcmVzaXplZFxyXG4gIC8vIGF2b2lkcyBhIGJ1ZyB3aGVyZSBjb250ZW50IGlzIGNvdmVyZWQgdXAgaWYgY29taW5nIGZyb20gc21hbGxlciBzY3JlZW5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgaGFuZGxlUmVzaXplID0gKCkgPT4ge1xyXG4gICAgICBzY3JvbGwoY2Fyb3VzZWxSZWYuY3VycmVudCwgMCk7XHJcbiAgICB9XHJcblxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGhhbmRsZVJlc2l6ZSk7XHJcbiAgfSwgW10pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFNlY3Rpb24gaWQ9XCJhYm91dFwiPlxyXG4gICAgICA8U2VjdGlvblRpdGxlPkFib3V0IE1lPC9TZWN0aW9uVGl0bGU+XHJcbiAgICAgIDxTZWN0aW9uVGV4dD5cclxuICAgICAgICBJJ3ZlIGFsd2F5cyBiZWVuIGZhc2NpbmF0ZWQgYnkgdGhlIGR5bmFtaWMgd29ybGQgb2Ygd2ViIGRldmVsb3BtZW50LiBNeVxyXG4gICAgICAgIGpvdXJuZXkgYmVnYW4gd2l0aCBhIHN0cm9uZyBmb3VuZGF0aW9uIGluIHByb2dyYW1taW5nIGxhbmd1YWdlcyBzdWNoIGFzXHJcbiAgICAgICAgSFRNTCwgQ1NTLCBhbmQgSmF2YVNjcmlwdC57XCIgXCJ9XHJcbiAgICAgIDwvU2VjdGlvblRleHQ+XHJcbiAgICAgIDxDYXJvdXNlbENvbnRhaW5lciByZWY9e2Nhcm91c2VsUmVmfSBvblNjcm9sbD17aGFuZGxlU2Nyb2xsfT5cclxuICAgICAgICA8PlxyXG4gICAgICAgICAge1RpbWVMaW5lRGF0YS5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgIDxDYXJvdXNlbE1vYmlsZVNjcm9sbE5vZGVcclxuICAgICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICAgIGZpbmFsPXtpbmRleCA9PT0gVE9UQUxfQ0FST1VTRUxfQ09VTlQgLSAxfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPENhcm91c2VsSXRlbVxyXG4gICAgICAgICAgICAgICAgaW5kZXg9e2luZGV4fVxyXG4gICAgICAgICAgICAgICAgaWQ9e2BjYXJvdXNlbF9faXRlbS0ke2luZGV4fWB9XHJcbiAgICAgICAgICAgICAgICBhY3RpdmU9e2FjdGl2ZUl0ZW19XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gaGFuZGxlQ2xpY2soZSwgaW5kZXgpfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxDYXJvdXNlbEl0ZW1UaXRsZT5cclxuICAgICAgICAgICAgICAgICAge2Ake2l0ZW0ueWVhcn1gfVxyXG4gICAgICAgICAgICAgICAgICA8Q2Fyb3VzZWxJdGVtSW1nXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIyMDhcIlxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjZcIlxyXG4gICAgICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjA4IDZcIlxyXG4gICAgICAgICAgICAgICAgICAgIGZpbGw9XCJub25lXCJcclxuICAgICAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgICBmaWxsLXJ1bGU9XCJldmVub2RkXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGNsaXAtcnVsZT1cImV2ZW5vZGRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgZD1cIk0yLjUgNS41QzMuODgwNzEgNS41IDUgNC4zODA3MSA1IDNWMy41TDIwOCAzLjUwMDAyVjIuNTAwMDJMNSAyLjVWM0M1IDEuNjE5MjkgMy44ODA3MSAwLjUgMi41IDAuNUMxLjExOTI5IDAuNSAwIDEuNjE5MjkgMCAzQzAgNC4zODA3MSAxLjExOTI5IDUuNSAyLjUgNS41WlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwidXJsKCNwYWludDBfbGluZWFyKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBmaWxsLW9wYWNpdHk9XCIwLjMzXCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkZWZzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGxpbmVhckdyYWRpZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwicGFpbnQwX2xpbmVhclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHgxPVwiLTQuMzA0MTJlLTEwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgeTE9XCIwLjVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB4Mj1cIjIwOFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHkyPVwiMC41MDAyOTVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBncmFkaWVudFVuaXRzPVwidXNlclNwYWNlT25Vc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3RvcCBzdG9wLWNvbG9yPVwid2hpdGVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3RvcFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9mZnNldD1cIjAuNzk0NzhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0b3AtY29sb3I9XCJ3aGl0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RvcC1vcGFjaXR5PVwiMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2xpbmVhckdyYWRpZW50PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGVmcz5cclxuICAgICAgICAgICAgICAgICAgPC9DYXJvdXNlbEl0ZW1JbWc+XHJcbiAgICAgICAgICAgICAgICA8L0Nhcm91c2VsSXRlbVRpdGxlPlxyXG4gICAgICAgICAgICAgICAgPENhcm91c2VsSXRlbVRleHQ+e2l0ZW0udGV4dH08L0Nhcm91c2VsSXRlbVRleHQ+XHJcbiAgICAgICAgICAgICAgPC9DYXJvdXNlbEl0ZW0+XHJcbiAgICAgICAgICAgIDwvQ2Fyb3VzZWxNb2JpbGVTY3JvbGxOb2RlPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC8+XHJcbiAgICAgIDwvQ2Fyb3VzZWxDb250YWluZXI+XHJcbiAgICAgIDxDYXJvdXNlbEJ1dHRvbnM+XHJcbiAgICAgICAge1RpbWVMaW5lRGF0YS5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8Q2Fyb3VzZWxCdXR0b25cclxuICAgICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICAgIGluZGV4PXtpbmRleH1cclxuICAgICAgICAgICAgICBhY3RpdmU9e2FjdGl2ZUl0ZW19XHJcbiAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IGhhbmRsZUNsaWNrKGUsIGluZGV4KX1cclxuICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxDYXJvdXNlbEJ1dHRvbkRvdCBhY3RpdmU9e2FjdGl2ZUl0ZW19IC8+XHJcbiAgICAgICAgICAgIDwvQ2Fyb3VzZWxCdXR0b24+XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0pfVxyXG4gICAgICA8L0Nhcm91c2VsQnV0dG9ucz5cclxuICAgICAgPFNlY3Rpb25EaXZpZGVyIC8+XHJcbiAgICA8L1NlY3Rpb24+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRpbWVsaW5lO1xyXG4iLCJcclxuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcclxuXHJcbmV4cG9ydCBjb25zdCBDYXJvdXNlbENvbnRhaW5lciA9IHN0eWxlZC51bGBcclxuICBtYXgtd2lkdGg6IDEwNDBweDtcclxuICBiYWNrZ3JvdW5kOiAjMEYxNjI0O1xyXG4gIHBhZGRpbmc6IDByZW07XHJcbiAgbGlzdC1zdHlsZTpub25lO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyBcclxuICAvKiBvdmVyZmxvdy14OiBoaWRkZW47ICovXHJcblxyXG4gIG1hcmdpbi1sZWZ0OiAzMnB4O1xyXG4gICY6Zmlyc3Qtb2YtdHlwZXtcclxuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgfVxyXG5cclxuICBtYXJnaW4tYm90dG9tOiA4MHB4O1xyXG5cclxuICAvL3JlbW92ZSBzY3JvbGxiYXJcclxuICBzY3JvbGxiYXItd2lkdGg6IG5vbmU7ICBcclxuICAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgIH1cclxuXHJcbiAgQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219IHtcclxuICAgIG92ZXJmbG93LXg6IHNjcm9sbDtcclxuICAgIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcclxuICAgIHNjcm9sbC1zbmFwLXR5cGU6IHggbWFuZGF0b3J5O1xyXG4gICAgdG91Y2gtYWN0aW9uOiBwYW4teDtcclxuICAgIGp1c3RpZnktY29udGVudDogaW5pdGlhbDtcclxuICAgIG1hcmdpbi1ib3R0b206IDhweDtcclxuICB9XHJcbmBcclxuZXhwb3J0IGNvbnN0IENhcm91c2VsTW9iaWxlU2Nyb2xsTm9kZSA9IHN0eWxlZC5kaXZgXHJcbiAgQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBtaW4td2lkdGg6ICR7KHsgZmluYWwgfSkgPT4gZmluYWwgPyBgMTIwJTtgIDogYG1pbi1jb250ZW50YH1cclxuICB9XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBDYXJvdXNlbEl0ZW0gPSBzdHlsZWQuZGl2YFxyXG4gIGJhY2tncm91bmQ6ICMwRjE2MjQ7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIG1heC13aWR0aDogMTk2cHg7XHJcblxyXG4gIEBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLm1kfSB7XHJcbiAgICBtYXgtd2lkdGg6IDEyNHB4O1xyXG4gIH1cclxuICBcclxuICBAbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX0ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDMycHg7XHJcbiAgICBtaW4td2lkdGg6IDEyMHB4O1xyXG4gICAgYmFja2dyb3VuZDogIzBFMTMxRjtcclxuICAgIHBhZGRpbmc6IDRweDtcclxuICAgIGFsaWduLWNvbnRlbnQ6IHN0YXJ0O1xyXG4gICAgc2Nyb2xsLXNuYXAtYWxpZ246IHN0YXJ0O1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xyXG4gICAgXHJcbiAgICAkeyhwcm9wcykgPT4gcHJvcHMuYWN0aXZlID09PSBwcm9wcy5pbmRleCA/IGBvcGFjaXR5OiAxYCA6IGBvcGFjaXR5OiAwLjVgfTsgXHJcbiAgfVxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgQ2Fyb3VzZWxJdGVtVGl0bGUgPSBzdHlsZWQuaDRgXHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAzMnB4O1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjAyZW07XHJcbiAgZGlzcGxheTogZmxleDtcclxuICAvKiBUaGlzIGdyYWRpZW50IGlzIGRpZmZlcmVudCBkdWUgdG8gdGhlIHNpemUgb2YgdGhlIFRpdGxlIGNvbnRhaW5lciwgaXQgbXVzdCB0cmFuc2l0aW9uIHNvb25lciB0byBiZSB2aXNpYmxlIG9uIHRoZSB0ZXh0ICovXHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEyMS41N2RlZywgI0ZGRkZGRiAxMCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42NikgMzAuMTUlKTtcclxuICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcclxuICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG5cclxuICBAbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5tZH0ge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI4cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0cHg7XHJcbiAgfVxyXG4gIFxyXG4gIEBtZWRpYSAke3Byb3BzID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfSB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjRweDtcclxuICB9XHJcbmBcclxuZXhwb3J0IGNvbnN0IENhcm91c2VsSXRlbUltZyA9IHN0eWxlZC5zdmdgXHJcbiAgbWFyZ2luLWxlZnQ6IDIxcHg7XHJcbiAgLXdlYmtpdC1tYXNrLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJnYmEoMCwwLDAsMSksIHJnYmEoMCwwLDAsMCkpO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG5cclxuICBAbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX0ge1xyXG4gICAgLXdlYmtpdC1tYXNrLWltYWdlOiBub25lO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE2cHg7XHJcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcclxuICB9XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBDYXJvdXNlbEl0ZW1UZXh0ID0gc3R5bGVkLnBgXHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjAyZW07XHJcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43NSk7XHJcbiAgcGFkZGluZy1yaWdodDogMTZweDtcclxuXHJcbiAgQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMubWR9IHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMzJweDtcclxuICB9XHJcbiAgQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219IHtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMDtcclxuICB9XHJcbmBcclxuZXhwb3J0IGNvbnN0IENhcm91c2VsQnV0dG9ucyA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDI4OHB4O1xyXG5cclxuICBkaXNwbGF5OiBub25lO1xyXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuXHJcbiAgQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNDhweDtcclxuICB9XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBDYXJvdXNlbEJ1dHRvbiA9IHN0eWxlZC5idXR0b25gXHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBiYWNrZ3JvdW5kOiBub25lO1xyXG4gIHBhZGRpbmc6IDRweDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIG1hcmdpbi1yaWdodDogNHB4O1xyXG4gIG9wYWNpdHk6ICR7KHByb3BzKSA9PiBwcm9wcy5hY3RpdmUgPT09IHByb3BzLmluZGV4ID8gYDFgIDogYC4zM2B9O1xyXG4gIHRyYW5zZm9ybTogJHsocHJvcHMpID0+IHByb3BzLmFjdGl2ZSA9PT0gcHJvcHMuaW5kZXggPyBgc2NhbGUoMS42KWAgOiBgc2NhbGUoMSlgfTtcclxuXHJcbiAgJjpmb2N1cyB7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gIH1cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IENhcm91c2VsQnV0dG9uRG90ID0gc3R5bGVkLmRpdmBcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIG1hcmdpbjogYXV0bztcclxuICB3aWR0aDogM3B4O1xyXG4gIGhlaWdodDogM3B4O1xyXG5gXHJcbiIsImV4cG9ydCBjb25zdCBwcm9qZWN0cyA9IFtcclxuICB7XHJcbiAgICB0aXRsZTogXCJUcmF2ZWwgQWR2aXNvclwiLFxyXG4gICAgZGVzY3JpcHRpb246XHJcbiAgICAgIFwiVXNpbmcgUmVhY3QsIHlvdSdsbCBsZWFybiBob3cgdG8gYnVpbGQgYSBSZWFjdCBBcHBsaWNhdGlvbiAtIGZyb20gc3RhcnQgdG8gZmluaXNoLiBUaGUgQXBwIGlzIGNhbGxlZCBUcmF2ZWwgQWR2aXNvciBhbmQgaXQgaXMgYSBUcmF2ZWwgYXBwIHRoYXQgYWxsb3dzIHVzZXJzIHRvIHNlYXJjaCBwbGFjZXMgdG8gc3RheSBhbmQgdmlzaXQgYW55d2FyZSBpbiB0aGUgd29ybGQuXCIsXHJcbiAgICBpbWFnZTogXCIvaW1hZ2VzL1RyYXZlbC5wbmdcIixcclxuICAgIHRhZ3M6IFtcIlJlYWN0XCIsIFwiTVVJXCJdLFxyXG4gICAgdmlzaXQ6IFwiaHR0cHM6Ly9naXRodWIuY29tL3ZpbmF5MzIwL1RyYXZlbFwiLFxyXG4gICAgc291cmNlOiBcImh0dHBzOi8vdHJhdmVsLTU5Zm0ub25yZW5kZXIuY29tL1wiLFxyXG4gICAgaWQ6IDAsXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCJFLUNvbW1lcmNlXCIsXHJcbiAgICBkZXNjcmlwdGlvbjpcclxuICAgICAgXCJXaGlsZSBidWlsZGluZyBpdCB5b3UncmUgZ29pbmcgdG8gbGVhcm4gbWFueSBhZHZhbmNlZCBOb2RlLCBFeHByZXNzICYgSmF2YVNjcmlwdCB0b3BpY3MuIHlvdSB3aWxsIGhhdmUgdGhpcyB1bmlxdWUgYW5kIGNvbXBsZXggd2Vic2hvcCBhcHAuIEFuZCB0cnVzdCBtZSwgZS1jb21tZXJjZSBhcHBsaWNhdGlvbnMgaXMgaW1wcmVzc2l2ZS5cIixcclxuICAgIGltYWdlOiBcIi9pbWFnZXMvRWNvbS5wbmdcIixcclxuICAgIHRhZ3M6IFtcIk5vZGVcIiwgXCJFeHByZXNzXCIsIFwiRWpzXCIsIFwiSmF2YVNjcmlwdFwiLCBcIk1vbmdvREJcIiwgXCJQYXNzcG9ydFwiXSxcclxuICAgIHZpc2l0OiBcImh0dHBzOi8vZ2l0aHViLmNvbS92aW5heTMyMC9FY29tLU1cIixcclxuICAgIHNvdXJjZTogXCJodHRwczovL2Vjb20tbS5vbnJlbmRlci5jb20vXCIsXHJcbiAgICBpZDogMSxcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBcIkdlc3R1cmUgUmVjb2duYXRpb25cIixcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICBcIlRoaXMgaXMgYSBSZWFjdCBhcHAgd2hpY2ggdXNlcyBtZWRpYXBpcGUgZnJvbSBnb29nbGUgdG8gZmluZCBwb2ludCBvbiBoYW5kIGFuZCBjYW4gcHJlZGljdCBoYW5kIGdlc3R1cmVzLlwiLFxyXG4gICAgaW1hZ2U6IFwiL2ltYWdlcy9oYW5kLmpwZWdcIixcclxuICAgIHRhZ3M6IFtcIlJlYWN0XCIsIFwiTWVkaWFQaXBlXCJdLFxyXG4gICAgc291cmNlOiBcImh0dHBzOi8vdmluYXkzMjAuZ2l0aHViLmlvL01lZGlhUGlwZV8vXCIsXHJcbiAgICB2aXNpdDogXCJodHRwczovL2dpdGh1Yi5jb20vdmluYXkzMjAvTWVkaWFQaXBlX1wiLFxyXG4gICAgaWQ6IDIsXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogXCJSZWNpcGVcIixcclxuICAgIGRlc2NyaXB0aW9uOlxyXG4gICAgICBcIlRoaXMgaXMgYSBjb2RlIHJlcG9zaXRvcnkgZm9yIHRoZSBjb3JyZXNwb25kaW5nIFJlY2lwZSBXZWJzaXRlLiBJbiB0aGlzIHdlYnNpdGUsIHdlIHdpbGwgY3JlYXRlIHJlY2lwZXMgd2hpY2ggYXJlIGF2YWlsYWJsZSB0byBhbGwgYW5kIG9uZSBjYW4gc2F2ZSBhbnkgcmVjaXBlIHRoZSB3YW50LlwiLFxyXG4gICAgaW1hZ2U6IFwiL2ltYWdlcy9SZWNpcGUucG5nXCIsXHJcbiAgICB0YWdzOiBbXCJOb2RlXCIsIFwiUmVhY3RcIiwgXCJFeHByZXNzXCIsIFwiTW9uZ29EQlwiXSxcclxuICAgIHNvdXJjZTogXCJodHRwczovL2dpdGh1Yi5jb20vdmluYXkzMjAvUmVjaXBlLVdlYnNpdGVcIixcclxuICAgIHZpc2l0OiBcImh0dHBzOi8vZ2l0aHViLmNvbS92aW5heTMyMC9SZWNpcGUtV2Vic2l0ZVwiLFxyXG4gICAgaWQ6IDMsXHJcbiAgfSxcclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCBUaW1lTGluZURhdGEgPSBbXHJcbiAgXHJcbl07IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9jb21wb25lbnRzL0Zvb3Rlci9Gb290ZXInXHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9IZWFkZXIvSGVhZGVyJ1xyXG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tICcuL0xheW91dFN0eWxlcydcclxuXHJcbmV4cG9ydCBjb25zdCBMYXlvdXQgPSAoe2NoaWxkcmVufSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Q29udGFpbmVyPlxyXG4gICAgIDxIZWFkZXIvPlxyXG4gICAgIDxtYWluPntjaGlsZHJlbn08L21haW4+IFxyXG4gICAgIDxGb290ZXIvPlxyXG4gICAgPC9Db250YWluZXI+XHJcbiAgKVxyXG59XHJcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbm1heC13aWR0aDogMTI4MHB4O1xyXG53aWR0aDogMTAwJTtcclxubWFyZ2luOiBhdXRvO1xyXG5gO1xyXG4iLCJpbXBvcnQgQWNvbXBsaXNobWVudHMgZnJvbSAnLi4vY29tcG9uZW50cy9BY29tcGxpc2htZW50cy9BY29tcGxpc2htZW50cyc7XHJcbmltcG9ydCBCZ0FuaW1hdGlvbiBmcm9tICcuLi9jb21wb25lbnRzL0JhY2tncm9vdW5kQW5pbWF0aW9uL0JhY2tncm91bmRBbmltYXRpb24nO1xyXG5pbXBvcnQgSGVybyBmcm9tICcuLi9jb21wb25lbnRzL0hlcm8vSGVybyc7XHJcbmltcG9ydCBQcm9qZWN0cyBmcm9tICcuLi9jb21wb25lbnRzL1Byb2plY3RzL1Byb2plY3RzJztcclxuaW1wb3J0IFRlY2hub2xvZ2llcyBmcm9tICcuLi9jb21wb25lbnRzL1RlY2hub2xvZ2llcy9UZWNobm9sb2dpZXMnO1xyXG5pbXBvcnQgVGltZWxpbmUgZnJvbSAnLi4vY29tcG9uZW50cy9UaW1lTGluZS9UaW1lTGluZSc7XHJcbmltcG9ydCB7IExheW91dCB9IGZyb20gJy4uL2xheW91dC9MYXlvdXQnO1xyXG5pbXBvcnQgeyBTZWN0aW9uIH0gZnJvbSAnLi4vc3R5bGVzL0dsb2JhbENvbXBvbmVudHMnO1xyXG5cclxuY29uc3QgSG9tZSA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPExheW91dD5cclxuICAgICAgPFNlY3Rpb24gZ3JpZD5cclxuICAgICAgICA8SGVybyAvPlxyXG4gICAgICAgIDxCZ0FuaW1hdGlvbiAvPlxyXG4gICAgICA8L1NlY3Rpb24+XHJcbiAgICAgIDxQcm9qZWN0cyAvPlxyXG4gICAgICA8VGVjaG5vbG9naWVzIC8+XHJcbiAgICAgIDxUaW1lbGluZSAvPlxyXG4gICAgICA8QWNvbXBsaXNobWVudHMgLz5cclxuICAgIDwvTGF5b3V0PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5pbXBvcnQgeyBCdXR0b25CYWNrLCBCdXR0b25Gcm9udCB9IGZyb20gJy4vaW5kZXgnXHJcblxyXG5jb25zdCBCdXR0b24gPSAocHJvcHMpID0+IChcclxuICA8QnV0dG9uQmFjayBhbHQ9e3Byb3BzLmFsdH0gZm9ybT17cHJvcHMuZm9ybX0gZGlzYWJsZWQ9e3Byb3BzLmRpc2FibGVkfT57cHJvcHMuY2hpbGRyZW59XHJcbiAgICA8QnV0dG9uRnJvbnQgYWx0PXtwcm9wcy5hbHR9IG9uQ2xpY2s9e3Byb3BzLm9uQ2xpY2t9IGRpc2FibGVkPXtwcm9wcy5kaXNhYmxlZH0+e3Byb3BzLmNoaWxkcmVufTwvQnV0dG9uRnJvbnQ+XHJcbiAgPC9CdXR0b25CYWNrPlxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQnV0dG9uXHJcbiIsImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXHJcblxyXG5leHBvcnQgY29uc3QgU2VjdGlvbiA9IHN0eWxlZC5zZWN0aW9uYFxyXG4gIGRpc3BsYXk6ICR7KHByb3BzKSA9PiBwcm9wcy5ncmlkID8gXCJncmlkXCIgOiBcImZsZXhcIiB9O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiAkeyhwcm9wcykgPT4gcHJvcHMucm93ID8gXCJyb3dcIiA6IFwiY29sdW1uXCIgfTtcclxuICBwYWRkaW5nOiAkeyhwcm9wcykgPT4gcHJvcHMubm9wYWRkaW5nID8gXCIwXCIgOiBcIjMycHggNDhweCAwXCIgfSA7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgbWF4LXdpZHRoOiAxMDQwcHg7XHJcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xyXG5cclxuICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLm1kfSB7XHJcbiAgICBwYWRkaW5nOiAyNHB4IDQ4cHggMDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfSB7XHJcbiAgICBwYWRkaW5nOiAkeyhwcm9wcykgPT4gcHJvcHMubm9wYWRkaW5nID8gXCIwXCIgOiBcIjE2cHggMTZweCAwXCIgfSA7XHJcblxyXG4gICAgd2lkdGg6IGNhbGMoMTAwdncgLSAzMnB4KTtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgfVxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgU2VjdGlvblRpdGxlID0gc3R5bGVkLmgyYFxyXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgZm9udC1zaXplOiAkeyhwcm9wcykgPT4gcHJvcHMubWFpbiA/ICc2NXB4JyA6ICc1NnB4J307XHJcbiAgbGluZS1oZWlnaHQ6ICR7KHByb3BzKSA9PiBwcm9wcy5tYWluID8gJzcycHgnIDogJzU2cHgnfTtcclxuICB3aWR0aDogbWF4LWNvbnRlbnQ7XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMjEuNTdkZWcsICNGRkZGRkYgMTguNzclLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNjYpIDYwLjE1JSk7XHJcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XHJcbiAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XHJcbiAgcGFkZGluZzogJHsocHJvcHMpID0+IHByb3BzLm1haW4gPyAnNThweCAwIDE2cHgnIDogJzAnfTtcclxuXHJcbiAgQG1lZGlhICR7cHJvcHMgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMubWR9e1xyXG4gICAgZm9udC1zaXplOiAkeyhwcm9wcykgPT4gcHJvcHMubWFpbiA/ICc1NnB4JyA6ICc0OHB4J307XHJcbiAgICBsaW5lLWhlaWdodDogJHsocHJvcHMpID0+IHByb3BzLm1haW4gPyAnNTZweCcgOiAnNDhweCd9O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTJweDtcclxuICAgIHBhZGRpbmc6ICR7KHByb3BzKSA9PiBwcm9wcy5tYWluID8gJzQwcHggMCAxMnB4JyA6ICcwJ307XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgJHtwcm9wcyA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5zbX17XHJcbiAgICBmb250LXNpemU6IDMycHg7XHJcbiAgICBsaW5lLWhlaWdodDogNDBweDtcclxuICAgIGZvbnQtc2l6ZTogJHsocHJvcHMpID0+IHByb3BzLm1haW4gPyAnMjhweCcgOiAnMzJweCd9O1xyXG4gICAgbGluZS1oZWlnaHQ6ICR7KHByb3BzKSA9PiBwcm9wcy5tYWluID8gJzMycHgnIDogJzQwcHgnfTtcclxuICAgIG1hcmdpbi1ib3R0b206IDhweDtcclxuICAgIHBhZGRpbmc6ICR7KHByb3BzKSA9PiBwcm9wcy5tYWluID8gJzE2cHggMCA4cHgnIDogJzAnfTtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICB9XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBTZWN0aW9uVGV4dCA9IHN0eWxlZC5wYFxyXG4gIG1heC13aWR0aDogODAwcHg7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgcGFkZGluZy1ib3R0b206IDMuNnJlbTtcclxuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xyXG5cclxuICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLm1kfSB7XHJcbiAgICBtYXgtd2lkdGg6IDY3MHB4O1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDMycHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMjRweDtcclxuICB9XHJcblxyXG4gIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219IHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDE2cHg7XHJcbiAgfVxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgU2VjdGlvbkRpdmlkZXIgPSBzdHlsZWQuZGl2YFxyXG5cclxuICB3aWR0aDogNjRweDtcclxuICBoZWlnaHQ6IDZweDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgYmFja2dyb3VuZDogJHsocHJvcHMpID0+IHByb3BzLmNvbG9yQWx0ID8gXHJcbiAgICAnbGluZWFyLWdyYWRpZW50KDI3MGRlZywgI0Y0NjczNyAwJSwgIzk0NURENiAxMDAlKScgOlxyXG4gICAgJ2xpbmVhci1ncmFkaWVudCgyNzBkZWcsICMxM0FEQzcgMCUsICM5NDVERDYgMTAwJSknfTtcclxuXHJcbiAgICBtYXJnaW46ICR7KHByb3BzKSA9PiBwcm9wcy5kaXZpZGVyID8gXCI0cmVtIDBcIiA6IFwiXCIgfTtcclxuXHJcbiAgQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5tZH0ge1xyXG4gICAgd2lkdGg6IDQ4cHg7XHJcbiAgICBoZWlnaHQ6IDRweDtcclxuICB9XHJcblxyXG4gIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219IHtcclxuICAgIHdpZHRoOiAzMnB4O1xyXG4gICAgaGVpZ2h0OiAycHg7XHJcbiAgfVxyXG5gXHJcbmV4cG9ydCBjb25zdCBTZWN0aW9uU3ViVGV4dCA9IHN0eWxlZC5wYFxyXG4gIG1heC13aWR0aDogODAwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDMycHg7XHJcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43NSk7XHJcblxyXG5AbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLm1kfSB7XHJcbiAgICBtYXgtd2lkdGg6IDY3MnB4O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI1cHg7XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfSB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjJweDtcclxuICB9XHJcbmBcclxuZXhwb3J0IGNvbnN0IFNlY29uZGFyeUJ0biA9IHN0eWxlZC5idXR0b25gXHJcbiAgY29sb3I6ICNGRkY7XHJcbiAgYmFja2dyb3VuZDogbm9uZTtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMzMpO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgYm9yZGVyLXJhZGl1czogOTk5cHg7XHJcbiAgcGFkZGluZzogMTZweCAyNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xyXG4gIHdpZHRoOiBmaXQtY29udGVudDtcclxuICBtYXJnaW4tdG9wOiAzMnB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDgwcHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRyYW5zaXRpb246IDAuNHMgZWFzZTtcclxuICAmOmZvY3VzIHtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjMGYxNjI0O1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XHJcbiAgfVxyXG5cclxuICAmOmFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZTBlNGViO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzMwNDE2OTtcclxuICAgIGJveC1zaGFkb3c6IGluc2V0IDBweCAycHggMXB4IHJnYmEoNDYsIDQ5LCA1NSwgMC4xNSksIGluc2V0IDBweCAwcHggNHB4IHJnYmEoMjAsIDIwLCA1NSwgMC4zKTtcclxuICB9XHJcblxyXG4gIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMubWR9e1xyXG4gICAgbWFyZ2luLXRvcDogMjRweDsgXHJcbiAgICBtYXJnaW4tYm90dG9tOiA2NHB4O1xyXG4gICAgcGFkZGluZzogMTZweCAyNHB4O1xyXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfSB7XHJcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxuICAgIHBhZGRpbmc6IDhweCAxNnB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTZweDtcclxuICB9XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBCdXR0b25CYWNrID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogJHsoeyBhbHQgfSkgPT4gYWx0ID8gJzE1MHB4JyA6ICcyNjJweCd9O1xyXG4gIGhlaWdodDogJHsoeyBhbHQgfSkgPT4gYWx0ID8gJzUycHgnIDogJzY0cHgnfTtcclxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gIGZvbnQtc2l6ZTogJHsoeyBhbHQgfSkgPT4gYWx0ID8gJzIwcHgnIDogJzI0cHgnfTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBtYXJnaW46ICR7KHsgYWx0LCBmb3JtIH0pID0+IChhbHQgfHwgZm9ybSkgPyAnMCcgOiAnMCAwIDgwcHgnfTtcclxuICBjb2xvcjogI2ZmZjtcclxuICBiYWNrZ3JvdW5kOiAkeyh7IGFsdCB9KSA9PiBhbHQgPyAnbGluZWFyLWdyYWRpZW50KDI3MGRlZywgI2ZmNjIyZSAwJSwgI0IxMzNGRiAxMDAlKScgOiAnbGluZWFyLWdyYWRpZW50KDI3MGRlZywgIzAwREJEOCAwJSwgI0IxMzNGRiAxMDAlKSd9O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0cmFuc2l0aW9uOiAwLjVzIGVhc2U7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgb3BhY2l0eTogJHsoeyBkaXNhYmxlZCB9KSA9PiBkaXNhYmxlZCA/ICcuNScgOiAnMSd9O1xyXG5cclxuICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLm1kfSB7XHJcbiAgICB3aWR0aDogJHsoeyBhbHQgfSkgPT4gYWx0ID8gJzE1MHB4JyA6ICcxODRweCd9O1xyXG4gICAgaGVpZ2h0OiAkeyh7IGFsdCB9KSA9PiBhbHQgPyAnNTJweCcgOiAnNDhweCd9O1xyXG4gICAgZm9udC1zaXplOiAkeyh7IGFsdCB9KSA9PiBhbHQgPyAnMjBweCcgOiAnMTZweCd9O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogJHsoeyBhbHQgfSkgPT4gYWx0ID8gJzAnIDogJzY0cHgnfTtcclxuICB9XHJcblxyXG4gIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAzMnB4O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogJHsoeyBhbHQgfSkgPT4gYWx0ID8gJzAnIDogJzMycHgnfTtcclxuICB9XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBCdXR0b25Gcm9udCA9IHN0eWxlZC5idXR0b25gXHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJhY2tncm91bmQ6ICR7KHsgYWx0IH0pID0+IGFsdCA/ICdsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCAjRjQ2NzM3IDAlLCAjOTQ1REQ2IDEwMCUpJyA6ICdsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCAjMTNBREM3IDAlLCAjOTQ1REQ2IDEwMCUpJ307XHJcbiAgb3BhY2l0eTogJHsoeyBkaXNhYmxlZCB9KSA9PiBkaXNhYmxlZCA/ICcuNScgOiAnMSd9O1xyXG4gIHRyYW5zaXRpb246IC40cyBlYXNlO1xyXG4gIGZvbnQtc2l6ZTogJHsoeyBhbHQgfSkgPT4gYWx0ID8gJzIwcHgnIDogJzI0cHgnfTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGJveC1zaGFkb3c6ICR7KHsgZGlzYWJsZWQgfSkgPT4gZGlzYWJsZWQgPyAnaW5zZXQgMHB4IDJweCAxcHggcmdiYSg0NiwgNDksIDU1LCAwLjE1KSwgaW5zZXQgMHB4IDBweCA0cHggcmdiYSgyMCwgMjAsIDU1LCAwLjMpJyA6ICdub25lJ307XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICB9XHJcbiAgJjpmb2N1cyB7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gIH1cclxuICAmOmFjdGl2ZSB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMHB4IDJweCAxcHggcmdiYSg0NiwgNDksIDU1LCAwLjE1KSwgaW5zZXQgMHB4IDBweCA0cHggcmdiYSgyMCwgMjAsIDU1LCAwLjMpO1xyXG4gIH1cclxuXHJcbiAgJjpkaXNhYmxlZHtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgyNzBkZWcsICMwMERCRDggMCUsICNCMTMzRkYgMTAwJSk7XHJcbiAgICBvcGFjaXR5OiAwLjU7XHJcbiAgICBib3gtc2hhZG93OiBpbnNldCAwcHggMnB4IDFweCByZ2JhKDQ2LCA0OSwgNTUsIDAuMTUpLCBpbnNldCAwcHggMHB4IDRweCByZ2JhKDIwLCAyMCwgNTUsIDAuMyk7XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLm1kfSB7XHJcbiAgICBmb250LXNpemU6ICR7KHsgYWx0IH0pID0+IGFsdCA/ICcyMHB4JyA6ICcxNnB4J307XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfSB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgfVxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgTGlua0NvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgbWFyZ2luLWxlZnQ6ICR7KHsgbGFyZ2UgfSkgPT4gbGFyZ2UgPyAnMjRweCcgOiAnMTZweCd9O1xyXG4gIHRyYW5zaXRpb246IDAuM3MgZWFzZTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gIHBhZGRpbmc6IDhweDtcclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjEyZDQ1O1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhICR7KHByb3BzKSA9PiBwcm9wcy50aGVtZS5icmVha3BvaW50cy5tZH0ge1xyXG4gICAgbWFyZ2luLWxlZnQ6ICR7KHsgbGFyZ2UgfSkgPT4gbGFyZ2UgPyAnMTZweCcgOiAnOHB4J307XHJcblxyXG4gIH1cclxuICBAbWVkaWEgJHsocHJvcHMpID0+IHByb3BzLnRoZW1lLmJyZWFrcG9pbnRzLnNtfSB7XHJcbiAgICBtYXJnaW4tbGVmdDogJHsoeyBsYXJnZSB9KSA9PiBsYXJnZSA/ICcwJyA6ICc4cHgnfTtcclxuICB9XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBMaW5rSWNvbkltZyA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDsgIFxyXG4gIGhlaWdodDogJHsoeyBsYXJnZSB9KSA9PiBsYXJnZSA/ICczMnB4JyA6ICcyNHB4J307XHJcblxyXG4gIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMubWR9IHtcclxuICAgIGhlaWdodDogJHsoeyBuYXYgfSkgPT4gbmF2ID8gJzE2cHgnIDogJzI0cHgnfTtcclxuICB9XHJcblxyXG4gIEBtZWRpYSAkeyhwcm9wcykgPT4gcHJvcHMudGhlbWUuYnJlYWtwb2ludHMuc219IHtcclxuICAgIGhlaWdodDogJHsoeyBsYXJnZSB9KSA9PiBsYXJnZSA/ICczMnB4JyA6ICcxNnB4J307XHJcbiAgfVxyXG5gXHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1jb21wb25lbnRzXCIpOzsiLCIvKiAoaWdub3JlZCkgKi8iXSwic291cmNlUm9vdCI6IiJ9