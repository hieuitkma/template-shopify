/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/index.js":
/*!******************************!*\
  !*** ./src/scripts/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sections_sliders_sliders_01__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sections/sliders/sliders-01 */ \"./src/scripts/sections/sliders/sliders-01.js\");\n/* harmony import */ var _pages_products_product_render__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/products/product-render */ \"./src/scripts/pages/products/product-render.js\");\n/* harmony import */ var _pages_products_feature_product_test__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/products/feature-product-test */ \"./src/scripts/pages/products/feature-product-test.js\");\n/* harmony import */ var _pages_products_collection_test__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/products/collection-test */ \"./src/scripts/pages/products/collection-test.js\");\n/* harmony import */ var _pages_products_cart_test__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/products/cart-test */ \"./src/scripts/pages/products/cart-test.js\");\n/**\r\n * Import sections bên dưới\r\n */\n\n\n\n\n\n // From ./sections/slides/sliders-01\n\n(0,_sections_sliders_sliders_01__WEBPACK_IMPORTED_MODULE_0__.doSomething)();\nconsole.log('kmacoders developing...');\nconsole.log(window.location.href);\n\nif (window.location.href == \"https://hieukma.myshopify.com/\") {\n  var featureTest = new _pages_products_feature_product_test__WEBPACK_IMPORTED_MODULE_2__.default();\n  var collectionTestH = new _pages_products_collection_test__WEBPACK_IMPORTED_MODULE_3__.default();\n  var cart = new _pages_products_cart_test__WEBPACK_IMPORTED_MODULE_4__.default();\n} else {\n  var productRende = new _pages_products_product_render__WEBPACK_IMPORTED_MODULE_1__.default();\n}\n\n//# sourceURL=webpack://kmacoders-shopify-theme-starter/./src/scripts/index.js?");

/***/ }),

/***/ "./src/scripts/pages/products/cart-test.js":
/*!*************************************************!*\
  !*** ./src/scripts/pages/products/cart-test.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar CartTest = /*#__PURE__*/function () {\n  function CartTest() {\n    _classCallCheck(this, CartTest);\n\n    this.cart();\n  }\n\n  _createClass(CartTest, [{\n    key: \"cart\",\n    value: function cart() {\n      var addBtn = document.querySelectorAll('.hi-add');\n      Array.from(addBtn).forEach(function (item) {\n        item.addEventListener('click', function (e) {\n          console.log(item);\n        });\n      });\n    }\n  }]);\n\n  return CartTest;\n}();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CartTest);\n\n//# sourceURL=webpack://kmacoders-shopify-theme-starter/./src/scripts/pages/products/cart-test.js?");

/***/ }),

/***/ "./src/scripts/pages/products/collection-test.js":
/*!*******************************************************!*\
  !*** ./src/scripts/pages/products/collection-test.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar CollectionTest = /*#__PURE__*/function () {\n  function CollectionTest() {\n    _classCallCheck(this, CollectionTest);\n\n    this.collectionSpacing();\n  }\n\n  _createClass(CollectionTest, [{\n    key: \"collectionSpacing\",\n    value: function collectionSpacing() {\n      var container = document.querySelector('.hi-collection-container section');\n      var spacing = container.dataset.sectionSpacing;\n      var ulTag = document.querySelector('.hi-collection-container .hi-collection__list');\n\n      if (spacing == 'true') {\n        ulTag.classList.add('hi-collection__list--spacing');\n      } else {\n        ulTag.classList.remove('hi-collection__list--spacing');\n      }\n    }\n  }]);\n\n  return CollectionTest;\n}();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CollectionTest);\n\n//# sourceURL=webpack://kmacoders-shopify-theme-starter/./src/scripts/pages/products/collection-test.js?");

/***/ }),

/***/ "./src/scripts/pages/products/feature-product-test.js":
/*!************************************************************!*\
  !*** ./src/scripts/pages/products/feature-product-test.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar FeaturePrTest = /*#__PURE__*/function () {\n  function FeaturePrTest() {\n    _classCallCheck(this, FeaturePrTest);\n\n    this.slideProduct();\n  }\n\n  _createClass(FeaturePrTest, [{\n    key: \"slideProduct\",\n    value: function slideProduct() {\n      var productContainer = document.querySelector('.hi-products-container');\n      var slidesPerViews = productContainer.dataset.productItem;\n      console.log(slidesPerViews);\n      var container = '.hi-products-container';\n      var swiper = new Swiper(\"\".concat(container, \" .swiper-container\"), {\n        navigation: {\n          nextEl: \"\".concat(container, \" .swiper-button-next\"),\n          prevEl: \"\".concat(container, \" .swiper-button-prev\")\n        },\n        breakpoints: {\n          320: {\n            slidesPerView: 2,\n            spaceBetween: 20\n          },\n          480: {\n            slidesPerView: 3,\n            spaceBetween: 30\n          },\n          640: {\n            slidesPerView: slidesPerViews,\n            spaceBetween: 40\n          }\n        }\n      });\n    }\n  }]);\n\n  return FeaturePrTest;\n}();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FeaturePrTest);\n\n//# sourceURL=webpack://kmacoders-shopify-theme-starter/./src/scripts/pages/products/feature-product-test.js?");

/***/ }),

/***/ "./src/scripts/pages/products/product-render.js":
/*!******************************************************!*\
  !*** ./src/scripts/pages/products/product-render.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n// add product 1 select \n// class ProductRender{\n//     constructor() {\n//         this.addProduct();\n//     }\n//     addProduct() {\n//         addBtn.addEventListener('click', (e) => {\n//             let qty = document.querySelector('#quantity').value;\n//             let listOptions = document.querySelectorAll('select option');\n//             let optionSelected = Array.from(listOptions).filter((item, index) => {\n//               return item.selected == true;\n//             })\n//             let product = Array.from(hieu.variants).filter(item => {\n//               return item.title == optionSelected[0].outerText;\n//             })\n//             var addData = {\n//               'id': product[0].id,\n//               'quantity': qty\n//             };\n//             fetch('/cart/add.js', {\n//               method: 'POST',\n//               headers: {\n//                 'Content-Type': 'application/json'\n//               },\n//               body: JSON.stringify(addData)\n//             })\n//             .then(response => {\n//               return response.json();\n//             })\n//             .catch((error) => {\n//               console.error('Error:', error);\n//             });\n//           });\n//     }\n// }\n// add product 2 select \nvar ProductRender = /*#__PURE__*/function () {\n  function ProductRender() {\n    _classCallCheck(this, ProductRender);\n\n    this.addProduct();\n    this.slideProductRender();\n  }\n\n  _createClass(ProductRender, [{\n    key: \"addProduct\",\n    value: function addProduct() {\n      var addBtn = document.querySelector('.product__add');\n      addBtn.addEventListener('click', function (e) {\n        e.preventDefault();\n        var qty = document.querySelector('#quantity').value;\n        var listOptions = document.querySelectorAll('select option');\n        var optionSelected = Array.from(listOptions).filter(function (item) {\n          return item.selected == true;\n        });\n        var arr = [];\n        Array.from(optionSelected).forEach(function (item) {\n          return arr.push(item.outerText.trim());\n        });\n        var option = Array.from(hieu.variants).filter(function (item) {\n          return JSON.stringify(arr) == JSON.stringify(item.options);\n        });\n        var addData = {\n          'id': option[0].id,\n          'quantity': qty\n        };\n        fetch('/cart/add.js', {\n          method: 'POST',\n          headers: {\n            'Content-Type': 'application/json'\n          },\n          body: JSON.stringify(addData)\n        }).then(function (response) {\n          var click = document.querySelector('#cartTest');\n          click.click();\n          return response.json();\n        }).then(function (json) {\n          console.log(json); // let data = await response.json()\n          // return data;\n        })[\"catch\"](function (error) {\n          console.error('Error:', error);\n        }); // let liTag = document.querySelectorAll('.HorizontalList__Item:last-child')[1];\n        // let cartNumber = liTag.querySelector('.Header__CartCount');\n        // let numberNew = parseInt(cartNumber.textContent) + parseInt(qty);\n        // cartNumber.innerHTML = numberNew;\n      });\n    }\n  }, {\n    key: \"slideProductRender\",\n    value: function slideProductRender() {\n      var swiper = new Swiper('.swiper-container', {\n        spaceBetween: 30,\n        centeredSlides: true,\n        loop: true,\n        autoplay: {\n          delay: 6000,\n          disableOnInteraction: false\n        },\n        pagination: {\n          el: '.swiper-pagination',\n          clickable: true\n        },\n        navigation: {\n          nextEl: '.swiper-button-next',\n          prevEl: '.swiper-button-prev'\n        },\n        breakpoints: {\n          320: {\n            slidesPerView: 1\n          }\n        }\n      });\n    }\n  }]);\n\n  return ProductRender;\n}();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductRender);\n\n//# sourceURL=webpack://kmacoders-shopify-theme-starter/./src/scripts/pages/products/product-render.js?");

/***/ }),

/***/ "./src/scripts/sections/sliders/sliders-01.js":
/*!****************************************************!*\
  !*** ./src/scripts/sections/sliders/sliders-01.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"doSomething\": () => /* binding */ doSomething\n/* harmony export */ });\nvar doSomething = function doSomething() {\n  console.log(\"Do something with slider ... \");\n};\n\n//# sourceURL=webpack://kmacoders-shopify-theme-starter/./src/scripts/sections/sliders/sliders-01.js?");

/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"kmacoders-style.css\");\n\n//# sourceURL=webpack://kmacoders-shopify-theme-starter/./src/styles/main.scss?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/scripts/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ 	__webpack_require__("./src/styles/main.scss");
/******/ })()
;