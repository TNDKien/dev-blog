"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./app/globals.css":
/*!*************************!*\
  !*** ./app/globals.css ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"8b788e000a25\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9nbG9iYWxzLmNzcyIsIm1hcHBpbmdzIjoiO0FBQUEsK0RBQWUsY0FBYztBQUM3QixJQUFJLElBQVUsSUFBSSxpQkFBaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2dsb2JhbHMuY3NzP2YwMGUiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgXCI4Yjc4OGUwMDBhMjVcIlxuaWYgKG1vZHVsZS5ob3QpIHsgbW9kdWxlLmhvdC5hY2NlcHQoKSB9XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./components/Sidebar/Sidebar.tsx":
/*!****************************************!*\
  !*** ./components/Sidebar/Sidebar.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Sidebar; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nfunction Sidebar() {\n    _s();\n    const [openSections, setOpenSections] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        gettingStarted: true,\n        courses: false,\n        article: false,\n        scroll: false,\n        mouse: false,\n        misc: false,\n        \"3d\": false\n    });\n    const toggleSection = (section)=>{\n        setOpenSections((prev)=>({\n                ...prev,\n                [section]: !prev[section]\n            }));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"aside\", {\n        className: \"w-64 bg-white border-r border-gray-200 p-4 space-y-4 h-screen overflow-y-auto\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mb-8\"\n            }, void 0, false, {\n                fileName: \"/Users/kiendang/Git/dev-blog/components/Sidebar/Sidebar.tsx\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                className: \"space-y-2\"\n            }, void 0, false, {\n                fileName: \"/Users/kiendang/Git/dev-blog/components/Sidebar/Sidebar.tsx\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/kiendang/Git/dev-blog/components/Sidebar/Sidebar.tsx\",\n        lineNumber: 27,\n        columnNumber: 5\n    }, this);\n}\n_s(Sidebar, \"3KPMpryaUektgZWFIbTD//SGkhI=\");\n_c = Sidebar;\nvar _c;\n$RefreshReg$(_c, \"Sidebar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvU2lkZWJhci9TaWRlYmFyLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFLaUM7QUFFbEIsU0FBU0M7O0lBQ3RCLE1BQU0sQ0FBQ0MsY0FBY0MsZ0JBQWdCLEdBQUdILCtDQUFRQSxDQUFDO1FBQy9DSSxnQkFBZ0I7UUFDaEJDLFNBQVM7UUFDVEMsU0FBUztRQUNUQyxRQUFRO1FBQ1JDLE9BQU87UUFDUEMsTUFBTTtRQUNOLE1BQU07SUFDUjtJQUVBLE1BQU1DLGdCQUFnQixDQUFDQztRQUNyQlIsZ0JBQWdCLENBQUNTLE9BQVU7Z0JBQ3pCLEdBQUdBLElBQUk7Z0JBQ1AsQ0FBQ0QsUUFBUSxFQUFFLENBQUNDLElBQUksQ0FBQ0QsUUFBUTtZQUMzQjtJQUNGO0lBRUEscUJBQ0UsOERBQUNFO1FBQU1DLFdBQVU7OzBCQUNmLDhEQUFDQztnQkFBSUQsV0FBVTs7Ozs7OzBCQUVmLDhEQUFDRTtnQkFBSUYsV0FBVTs7Ozs7Ozs7Ozs7O0FBR3JCO0dBekJ3QmI7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TaWRlYmFyL1NpZGViYXIudHN4PzY5NDMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IHsgQ2hldnJvbkRvd24sIExvY2sgfSBmcm9tIFwibHVjaWRlLXJlYWN0XCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaWRlYmFyKCkge1xuICBjb25zdCBbb3BlblNlY3Rpb25zLCBzZXRPcGVuU2VjdGlvbnNdID0gdXNlU3RhdGUoe1xuICAgIGdldHRpbmdTdGFydGVkOiB0cnVlLFxuICAgIGNvdXJzZXM6IGZhbHNlLFxuICAgIGFydGljbGU6IGZhbHNlLFxuICAgIHNjcm9sbDogZmFsc2UsXG4gICAgbW91c2U6IGZhbHNlLFxuICAgIG1pc2M6IGZhbHNlLFxuICAgIFwiM2RcIjogZmFsc2UsXG4gIH0pO1xuXG4gIGNvbnN0IHRvZ2dsZVNlY3Rpb24gPSAoc2VjdGlvbjoga2V5b2YgdHlwZW9mIG9wZW5TZWN0aW9ucykgPT4ge1xuICAgIHNldE9wZW5TZWN0aW9ucygocHJldikgPT4gKHtcbiAgICAgIC4uLnByZXYsXG4gICAgICBbc2VjdGlvbl06ICFwcmV2W3NlY3Rpb25dLFxuICAgIH0pKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxhc2lkZSBjbGFzc05hbWU9XCJ3LTY0IGJnLXdoaXRlIGJvcmRlci1yIGJvcmRlci1ncmF5LTIwMCBwLTQgc3BhY2UteS00IGgtc2NyZWVuIG92ZXJmbG93LXktYXV0b1wiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi04XCI+PC9kaXY+XG5cbiAgICAgIDxuYXYgY2xhc3NOYW1lPVwic3BhY2UteS0yXCI+PC9uYXY+XG4gICAgPC9hc2lkZT5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIlNpZGViYXIiLCJvcGVuU2VjdGlvbnMiLCJzZXRPcGVuU2VjdGlvbnMiLCJnZXR0aW5nU3RhcnRlZCIsImNvdXJzZXMiLCJhcnRpY2xlIiwic2Nyb2xsIiwibW91c2UiLCJtaXNjIiwidG9nZ2xlU2VjdGlvbiIsInNlY3Rpb24iLCJwcmV2IiwiYXNpZGUiLCJjbGFzc05hbWUiLCJkaXYiLCJuYXYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/Sidebar/Sidebar.tsx\n"));

/***/ })

});