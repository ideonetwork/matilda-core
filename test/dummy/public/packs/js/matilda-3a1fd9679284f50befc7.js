/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	__webpack_require__.p = "/packs/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/javascript/packs/matilda.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../front/images/locales/_en.png":
/*!******************************************************************************************!*\
  !*** /Users/gregoriogalante/Workspace/matilda/matilda-core/front/images/locales/_en.png ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "media/locales/_en-6f382b2d.png";

/***/ }),

/***/ "../../front/images/locales/_it.png":
/*!******************************************************************************************!*\
  !*** /Users/gregoriogalante/Workspace/matilda/matilda-core/front/images/locales/_it.png ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "media/locales/_it-cc79b186.png";

/***/ }),

/***/ "../../front/images/locales/_us.png":
/*!******************************************************************************************!*\
  !*** /Users/gregoriogalante/Workspace/matilda/matilda-core/front/images/locales/_us.png ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "media/locales/_us-e499f1fb.png";

/***/ }),

/***/ "../../front/loader.js":
/*!*****************************************************************************!*\
  !*** /Users/gregoriogalante/Workspace/matilda/matilda-core/front/loader.js ***!
  \*****************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _loader_assets__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loader_assets */ "../../front/loader_assets.js");
/* harmony import */ var _loader_code__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loader_code */ "../../front/loader_code.js");



/***/ }),

/***/ "../../front/loader_assets.js":
/*!************************************************************************************!*\
  !*** /Users/gregoriogalante/Workspace/matilda/matilda-core/front/loader_assets.js ***!
  \************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fortawesome_fontawesome_free_css_all_min_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/fontawesome-free/css/all.min.css */ "../../front/node_modules/@fortawesome/fontawesome-free/css/all.min.css");
/* harmony import */ var _fortawesome_fontawesome_free_css_all_min_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_free_css_all_min_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tippy_js_dist_tippy_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tippy.js/dist/tippy.css */ "../../front/node_modules/tippy.js/dist/tippy.css");
/* harmony import */ var tippy_js_dist_tippy_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tippy_js_dist_tippy_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _images_locales_en_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/locales/_en.png */ "../../front/images/locales/_en.png");
/* harmony import */ var _images_locales_en_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_images_locales_en_png__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _images_locales_us_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/locales/_us.png */ "../../front/images/locales/_us.png");
/* harmony import */ var _images_locales_us_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_images_locales_us_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _images_locales_it_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/locales/_it.png */ "../../front/images/locales/_it.png");
/* harmony import */ var _images_locales_it_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_images_locales_it_png__WEBPACK_IMPORTED_MODULE_4__);






/***/ }),

/***/ "../../front/loader_code.js":
/*!**********************************************************************************!*\
  !*** /Users/gregoriogalante/Workspace/matilda/matilda-core/front/loader_code.js ***!
  \**********************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scripts_main_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/main.js */ "../../front/scripts/main.js");
/* harmony import */ var _style_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style/main.scss */ "../../front/style/main.scss");
/* harmony import */ var _style_main_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_main_scss__WEBPACK_IMPORTED_MODULE_1__);



/***/ }),

/***/ "../../front/node_modules/@fortawesome/fontawesome-free/css/all.min.css":
/*!******************************************************************************************************************************!*\
  !*** /Users/gregoriogalante/Workspace/matilda/matilda-core/front/node_modules/@fortawesome/fontawesome-free/css/all.min.css ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../../../test/dummy/node_modules/css-loader/dist/cjs.js??ref--6-1!../../../../../test/dummy/node_modules/postcss-loader/src??ref--6-2!./all.min.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!../../front/node_modules/@fortawesome/fontawesome-free/css/all.min.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../../../../test/dummy/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ "../../front/node_modules/@fortawesome/fontawesome-free/webfonts/fa-brands-400.eot":
/*!*****************************************************************************************************************************************!*\
  !*** /Users/gregoriogalante/Workspace/matilda/matilda-core/front/node_modules/@fortawesome/fontawesome-free/webfonts/fa-brands-400.eot ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "media/webfonts/fa-brands-400-088a34f7.eot";

/***/ }),

/***/ "../../front/node_modules/@fortawesome/fontawesome-free/webfonts/fa-brands-400.svg":
/*!*****************************************************************************************************************************************!*\
  !*** /Users/gregoriogalante/Workspace/matilda/matilda-core/front/node_modules/@fortawesome/fontawesome-free/webfonts/fa-brands-400.svg ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "media/webfonts/fa-brands-400-d7229311.svg";

/***/ }),

/***/ "../../front/node_modules/@fortawesome/fontawesome-free/webfonts/fa-brands-400.ttf":
/*!*****************************************************************************************************************************************!*\
  !*** /Users/gregoriogalante/Workspace/matilda/matilda-core/front/node_modules/@fortawesome/fontawesome-free/webfonts/fa-brands-400.ttf ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "media/webfonts/fa-brands-400-273dc9bf.ttf";

/***/ }),

/***/ "../../front/node_modules/@fortawesome/fontawesome-free/webfonts/fa-brands-400.woff":
/*!******************************************************************************************************************************************!*\
  !*** /Users/gregoriogalante/Workspace/matilda/matilda-core/front/node_modules/@fortawesome/fontawesome-free/webfonts/fa-brands-400.woff ***!
  \******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "media/webfonts/fa-brands-400-f4920c94.woff";

/***/ }),

/***/ "../../front/node_modules/@fortawesome/fontawesome-free/webfonts/fa-brands-400.woff2":
/*!*******************************************************************************************************************************************!*\
  !*** /Users/gregoriogalante/Workspace/matilda/matilda-core/front/node_modules/@fortawesome/fontawesome-free/webfonts/fa-brands-400.woff2 ***!
  \*******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "media/webfonts/fa-brands-400-822d94f1.woff2";

/***/ }),

/***/ "../../front/node_modules/@fortawesome/fontawesome-free/webfonts/fa-regular-400.eot":
/*!******************************************************************************************************************************************!*\
  !*** /Users/gregoriogalante/Workspace/matilda/matilda-core/front/node_modules/@fortawesome/fontawesome-free/webfonts/fa-regular-400.eot ***!
  \******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "media/webfonts/fa-regular-400-3ac49cb3.eot";

/***/ }),

/***/ "../../front/node_modules/@fortawesome/fontawesome-free/webfonts/fa-regular-400.svg":
/*!******************************************************************************************************************************************!*\
  !*** /Users/gregoriogalante/Workspace/matilda/matilda-core/front/node_modules/@fortawesome/fontawesome-free/webfonts/fa-regular-400.svg ***!
  \******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "media/webfonts/fa-regular-400-d2e53334.svg";

/***/ }),

/***/ "../../front/node_modules/@fortawesome/fontawesome-free/webfonts/fa-regular-400.ttf":
/*!******************************************************************************************************************************************!*\
  !*** /Users/gregoriogalante/Workspace/matilda/matilda-core/front/node_modules/@fortawesome/fontawesome-free/webfonts/fa-regular-400.ttf ***!
  \******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "media/webfonts/fa-regular-400-ece54318.ttf";

/***/ }),

/***/ "../../front/node_modules/@fortawesome/fontawesome-free/webfonts/fa-regular-400.woff":
/*!*******************************************************************************************************************************************!*\
  !*** /Users/gregoriogalante/Workspace/matilda/matilda-core/front/node_modules/@fortawesome/fontawesome-free/webfonts/fa-regular-400.woff ***!
  \*******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "media/webfonts/fa-regular-400-a57bcf76.woff";

/***/ }),

/***/ "../../front/node_modules/@fortawesome/fontawesome-free/webfonts/fa-regular-400.woff2":
/*!********************************************************************************************************************************************!*\
  !*** /Users/gregoriogalante/Workspace/matilda/matilda-core/front/node_modules/@fortawesome/fontawesome-free/webfonts/fa-regular-400.woff2 ***!
  \********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "media/webfonts/fa-regular-400-9efb8697.woff2";

/***/ }),

/***/ "../../front/node_modules/@fortawesome/fontawesome-free/webfonts/fa-solid-900.eot":
/*!****************************************************************************************************************************************!*\
  !*** /Users/gregoriogalante/Workspace/matilda/matilda-core/front/node_modules/@fortawesome/fontawesome-free/webfonts/fa-solid-900.eot ***!
  \****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "media/webfonts/fa-solid-900-7fb1cdd9.eot";

/***/ }),

/***/ "../../front/node_modules/@fortawesome/fontawesome-free/webfonts/fa-solid-900.svg":
/*!****************************************************************************************************************************************!*\
  !*** /Users/gregoriogalante/Workspace/matilda/matilda-core/front/node_modules/@fortawesome/fontawesome-free/webfonts/fa-solid-900.svg ***!
  \****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "media/webfonts/fa-solid-900-7a5de9b0.svg";

/***/ }),

/***/ "../../front/node_modules/@fortawesome/fontawesome-free/webfonts/fa-solid-900.ttf":
/*!****************************************************************************************************************************************!*\
  !*** /Users/gregoriogalante/Workspace/matilda/matilda-core/front/node_modules/@fortawesome/fontawesome-free/webfonts/fa-solid-900.ttf ***!
  \****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "media/webfonts/fa-solid-900-2aa6edf8.ttf";

/***/ }),

/***/ "../../front/node_modules/@fortawesome/fontawesome-free/webfonts/fa-solid-900.woff":
/*!*****************************************************************************************************************************************!*\
  !*** /Users/gregoriogalante/Workspace/matilda/matilda-core/front/node_modules/@fortawesome/fontawesome-free/webfonts/fa-solid-900.woff ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "media/webfonts/fa-solid-900-93f28454.woff";

/***/ }),

/***/ "../../front/node_modules/@fortawesome/fontawesome-free/webfonts/fa-solid-900.woff2":
/*!******************************************************************************************************************************************!*\
  !*** /Users/gregoriogalante/Workspace/matilda/matilda-core/front/node_modules/@fortawesome/fontawesome-free/webfonts/fa-solid-900.woff2 ***!
  \******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "media/webfonts/fa-solid-900-f6121be5.woff2";

/***/ }),

/***/ "../../front/node_modules/@rails/ujs/lib/assets/compiled/rails-ujs.js":
/*!****************************************************************************************************************************!*\
  !*** /Users/gregoriogalante/Workspace/matilda/matilda-core/front/node_modules/@rails/ujs/lib/assets/compiled/rails-ujs.js ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*
Unobtrusive JavaScript
https://github.com/rails/rails/blob/master/actionview/app/assets/javascripts
Released under the MIT license
 */
;
(function () {
  var context = this;
  (function () {
    (function () {
      this.Rails = {
        linkClickSelector: 'a[data-confirm], a[data-method], a[data-remote]:not([disabled]), a[data-disable-with], a[data-disable]',
        buttonClickSelector: {
          selector: 'button[data-remote]:not([form]), button[data-confirm]:not([form])',
          exclude: 'form button'
        },
        inputChangeSelector: 'select[data-remote], input[data-remote], textarea[data-remote]',
        formSubmitSelector: 'form',
        formInputClickSelector: 'form input[type=submit], form input[type=image], form button[type=submit], form button:not([type]), input[type=submit][form], input[type=image][form], button[type=submit][form], button[form]:not([type])',
        formDisableSelector: 'input[data-disable-with]:enabled, button[data-disable-with]:enabled, textarea[data-disable-with]:enabled, input[data-disable]:enabled, button[data-disable]:enabled, textarea[data-disable]:enabled',
        formEnableSelector: 'input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled, input[data-disable]:disabled, button[data-disable]:disabled, textarea[data-disable]:disabled',
        fileInputSelector: 'input[name][type=file]:not([disabled])',
        linkDisableSelector: 'a[data-disable-with], a[data-disable]',
        buttonDisableSelector: 'button[data-remote][data-disable-with], button[data-remote][data-disable]'
      };
    }).call(this);
  }).call(context);
  var Rails = context.Rails;
  (function () {
    (function () {
      var nonce;
      nonce = null;

      Rails.loadCSPNonce = function () {
        var ref;
        return nonce = (ref = document.querySelector("meta[name=csp-nonce]")) != null ? ref.content : void 0;
      };

      Rails.cspNonce = function () {
        return nonce != null ? nonce : Rails.loadCSPNonce();
      };
    }).call(this);
    (function () {
      var expando, m;
      m = Element.prototype.matches || Element.prototype.matchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.webkitMatchesSelector;

      Rails.matches = function (element, selector) {
        if (selector.exclude != null) {
          return m.call(element, selector.selector) && !m.call(element, selector.exclude);
        } else {
          return m.call(element, selector);
        }
      };

      expando = '_ujsData';

      Rails.getData = function (element, key) {
        var ref;
        return (ref = element[expando]) != null ? ref[key] : void 0;
      };

      Rails.setData = function (element, key, value) {
        if (element[expando] == null) {
          element[expando] = {};
        }

        return element[expando][key] = value;
      };

      Rails.$ = function (selector) {
        return Array.prototype.slice.call(document.querySelectorAll(selector));
      };
    }).call(this);
    (function () {
      var $, csrfParam, csrfToken;
      $ = Rails.$;

      csrfToken = Rails.csrfToken = function () {
        var meta;
        meta = document.querySelector('meta[name=csrf-token]');
        return meta && meta.content;
      };

      csrfParam = Rails.csrfParam = function () {
        var meta;
        meta = document.querySelector('meta[name=csrf-param]');
        return meta && meta.content;
      };

      Rails.CSRFProtection = function (xhr) {
        var token;
        token = csrfToken();

        if (token != null) {
          return xhr.setRequestHeader('X-CSRF-Token', token);
        }
      };

      Rails.refreshCSRFTokens = function () {
        var param, token;
        token = csrfToken();
        param = csrfParam();

        if (token != null && param != null) {
          return $('form input[name="' + param + '"]').forEach(function (input) {
            return input.value = token;
          });
        }
      };
    }).call(this);
    (function () {
      var CustomEvent, fire, matches, preventDefault;
      matches = Rails.matches;
      CustomEvent = window.CustomEvent;

      if (typeof CustomEvent !== 'function') {
        CustomEvent = function CustomEvent(event, params) {
          var evt;
          evt = document.createEvent('CustomEvent');
          evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
          return evt;
        };

        CustomEvent.prototype = window.Event.prototype;
        preventDefault = CustomEvent.prototype.preventDefault;

        CustomEvent.prototype.preventDefault = function () {
          var result;
          result = preventDefault.call(this);

          if (this.cancelable && !this.defaultPrevented) {
            Object.defineProperty(this, 'defaultPrevented', {
              get: function get() {
                return true;
              }
            });
          }

          return result;
        };
      }

      fire = Rails.fire = function (obj, name, data) {
        var event;
        event = new CustomEvent(name, {
          bubbles: true,
          cancelable: true,
          detail: data
        });
        obj.dispatchEvent(event);
        return !event.defaultPrevented;
      };

      Rails.stopEverything = function (e) {
        fire(e.target, 'ujs:everythingStopped');
        e.preventDefault();
        e.stopPropagation();
        return e.stopImmediatePropagation();
      };

      Rails.delegate = function (element, selector, eventType, handler) {
        return element.addEventListener(eventType, function (e) {
          var target;
          target = e.target;

          while (!(!(target instanceof Element) || matches(target, selector))) {
            target = target.parentNode;
          }

          if (target instanceof Element && handler.call(target, e) === false) {
            e.preventDefault();
            return e.stopPropagation();
          }
        });
      };
    }).call(this);
    (function () {
      var AcceptHeaders, CSRFProtection, createXHR, cspNonce, fire, prepareOptions, processResponse;
      cspNonce = Rails.cspNonce, CSRFProtection = Rails.CSRFProtection, fire = Rails.fire;
      AcceptHeaders = {
        '*': '*/*',
        text: 'text/plain',
        html: 'text/html',
        xml: 'application/xml, text/xml',
        json: 'application/json, text/javascript',
        script: 'text/javascript, application/javascript, application/ecmascript, application/x-ecmascript'
      };

      Rails.ajax = function (options) {
        var xhr;
        options = prepareOptions(options);
        xhr = createXHR(options, function () {
          var ref, response;
          response = processResponse((ref = xhr.response) != null ? ref : xhr.responseText, xhr.getResponseHeader('Content-Type'));

          if (Math.floor(xhr.status / 100) === 2) {
            if (typeof options.success === "function") {
              options.success(response, xhr.statusText, xhr);
            }
          } else {
            if (typeof options.error === "function") {
              options.error(response, xhr.statusText, xhr);
            }
          }

          return typeof options.complete === "function" ? options.complete(xhr, xhr.statusText) : void 0;
        });

        if (options.beforeSend != null && !options.beforeSend(xhr, options)) {
          return false;
        }

        if (xhr.readyState === XMLHttpRequest.OPENED) {
          return xhr.send(options.data);
        }
      };

      prepareOptions = function prepareOptions(options) {
        options.url = options.url || location.href;
        options.type = options.type.toUpperCase();

        if (options.type === 'GET' && options.data) {
          if (options.url.indexOf('?') < 0) {
            options.url += '?' + options.data;
          } else {
            options.url += '&' + options.data;
          }
        }

        if (AcceptHeaders[options.dataType] == null) {
          options.dataType = '*';
        }

        options.accept = AcceptHeaders[options.dataType];

        if (options.dataType !== '*') {
          options.accept += ', */*; q=0.01';
        }

        return options;
      };

      createXHR = function createXHR(options, done) {
        var xhr;
        xhr = new XMLHttpRequest();
        xhr.open(options.type, options.url, true);
        xhr.setRequestHeader('Accept', options.accept);

        if (typeof options.data === 'string') {
          xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
        }

        if (!options.crossDomain) {
          xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
        }

        CSRFProtection(xhr);
        xhr.withCredentials = !!options.withCredentials;

        xhr.onreadystatechange = function () {
          if (xhr.readyState === XMLHttpRequest.DONE) {
            return done(xhr);
          }
        };

        return xhr;
      };

      processResponse = function processResponse(response, type) {
        var parser, script;

        if (typeof response === 'string' && typeof type === 'string') {
          if (type.match(/\bjson\b/)) {
            try {
              response = JSON.parse(response);
            } catch (error) {}
          } else if (type.match(/\b(?:java|ecma)script\b/)) {
            script = document.createElement('script');
            script.setAttribute('nonce', cspNonce());
            script.text = response;
            document.head.appendChild(script).parentNode.removeChild(script);
          } else if (type.match(/\b(xml|html|svg)\b/)) {
            parser = new DOMParser();
            type = type.replace(/;.+/, '');

            try {
              response = parser.parseFromString(response, type);
            } catch (error) {}
          }
        }

        return response;
      };

      Rails.href = function (element) {
        return element.href;
      };

      Rails.isCrossDomain = function (url) {
        var e, originAnchor, urlAnchor;
        originAnchor = document.createElement('a');
        originAnchor.href = location.href;
        urlAnchor = document.createElement('a');

        try {
          urlAnchor.href = url;
          return !((!urlAnchor.protocol || urlAnchor.protocol === ':') && !urlAnchor.host || originAnchor.protocol + '//' + originAnchor.host === urlAnchor.protocol + '//' + urlAnchor.host);
        } catch (error) {
          e = error;
          return true;
        }
      };
    }).call(this);
    (function () {
      var matches, toArray;
      matches = Rails.matches;

      toArray = function toArray(e) {
        return Array.prototype.slice.call(e);
      };

      Rails.serializeElement = function (element, additionalParam) {
        var inputs, params;
        inputs = [element];

        if (matches(element, 'form')) {
          inputs = toArray(element.elements);
        }

        params = [];
        inputs.forEach(function (input) {
          if (!input.name || input.disabled) {
            return;
          }

          if (matches(input, 'fieldset[disabled] *')) {
            return;
          }

          if (matches(input, 'select')) {
            return toArray(input.options).forEach(function (option) {
              if (option.selected) {
                return params.push({
                  name: input.name,
                  value: option.value
                });
              }
            });
          } else if (input.checked || ['radio', 'checkbox', 'submit'].indexOf(input.type) === -1) {
            return params.push({
              name: input.name,
              value: input.value
            });
          }
        });

        if (additionalParam) {
          params.push(additionalParam);
        }

        return params.map(function (param) {
          if (param.name != null) {
            return encodeURIComponent(param.name) + "=" + encodeURIComponent(param.value);
          } else {
            return param;
          }
        }).join('&');
      };

      Rails.formElements = function (form, selector) {
        if (matches(form, 'form')) {
          return toArray(form.elements).filter(function (el) {
            return matches(el, selector);
          });
        } else {
          return toArray(form.querySelectorAll(selector));
        }
      };
    }).call(this);
    (function () {
      var allowAction, fire, stopEverything;
      fire = Rails.fire, stopEverything = Rails.stopEverything;

      Rails.handleConfirm = function (e) {
        if (!allowAction(this)) {
          return stopEverything(e);
        }
      };

      Rails.confirm = function (message, element) {
        return confirm(message);
      };

      allowAction = function allowAction(element) {
        var answer, callback, message;
        message = element.getAttribute('data-confirm');

        if (!message) {
          return true;
        }

        answer = false;

        if (fire(element, 'confirm')) {
          try {
            answer = Rails.confirm(message, element);
          } catch (error) {}

          callback = fire(element, 'confirm:complete', [answer]);
        }

        return answer && callback;
      };
    }).call(this);
    (function () {
      var disableFormElement, disableFormElements, disableLinkElement, enableFormElement, enableFormElements, enableLinkElement, formElements, getData, isXhrRedirect, matches, setData, stopEverything;
      matches = Rails.matches, getData = Rails.getData, setData = Rails.setData, stopEverything = Rails.stopEverything, formElements = Rails.formElements;

      Rails.handleDisabledElement = function (e) {
        var element;
        element = this;

        if (element.disabled) {
          return stopEverything(e);
        }
      };

      Rails.enableElement = function (e) {
        var element;

        if (e instanceof Event) {
          if (isXhrRedirect(e)) {
            return;
          }

          element = e.target;
        } else {
          element = e;
        }

        if (matches(element, Rails.linkDisableSelector)) {
          return enableLinkElement(element);
        } else if (matches(element, Rails.buttonDisableSelector) || matches(element, Rails.formEnableSelector)) {
          return enableFormElement(element);
        } else if (matches(element, Rails.formSubmitSelector)) {
          return enableFormElements(element);
        }
      };

      Rails.disableElement = function (e) {
        var element;
        element = e instanceof Event ? e.target : e;

        if (matches(element, Rails.linkDisableSelector)) {
          return disableLinkElement(element);
        } else if (matches(element, Rails.buttonDisableSelector) || matches(element, Rails.formDisableSelector)) {
          return disableFormElement(element);
        } else if (matches(element, Rails.formSubmitSelector)) {
          return disableFormElements(element);
        }
      };

      disableLinkElement = function disableLinkElement(element) {
        var replacement;

        if (getData(element, 'ujs:disabled')) {
          return;
        }

        replacement = element.getAttribute('data-disable-with');

        if (replacement != null) {
          setData(element, 'ujs:enable-with', element.innerHTML);
          element.innerHTML = replacement;
        }

        element.addEventListener('click', stopEverything);
        return setData(element, 'ujs:disabled', true);
      };

      enableLinkElement = function enableLinkElement(element) {
        var originalText;
        originalText = getData(element, 'ujs:enable-with');

        if (originalText != null) {
          element.innerHTML = originalText;
          setData(element, 'ujs:enable-with', null);
        }

        element.removeEventListener('click', stopEverything);
        return setData(element, 'ujs:disabled', null);
      };

      disableFormElements = function disableFormElements(form) {
        return formElements(form, Rails.formDisableSelector).forEach(disableFormElement);
      };

      disableFormElement = function disableFormElement(element) {
        var replacement;

        if (getData(element, 'ujs:disabled')) {
          return;
        }

        replacement = element.getAttribute('data-disable-with');

        if (replacement != null) {
          if (matches(element, 'button')) {
            setData(element, 'ujs:enable-with', element.innerHTML);
            element.innerHTML = replacement;
          } else {
            setData(element, 'ujs:enable-with', element.value);
            element.value = replacement;
          }
        }

        element.disabled = true;
        return setData(element, 'ujs:disabled', true);
      };

      enableFormElements = function enableFormElements(form) {
        return formElements(form, Rails.formEnableSelector).forEach(enableFormElement);
      };

      enableFormElement = function enableFormElement(element) {
        var originalText;
        originalText = getData(element, 'ujs:enable-with');

        if (originalText != null) {
          if (matches(element, 'button')) {
            element.innerHTML = originalText;
          } else {
            element.value = originalText;
          }

          setData(element, 'ujs:enable-with', null);
        }

        element.disabled = false;
        return setData(element, 'ujs:disabled', null);
      };

      isXhrRedirect = function isXhrRedirect(event) {
        var ref, xhr;
        xhr = (ref = event.detail) != null ? ref[0] : void 0;
        return (xhr != null ? xhr.getResponseHeader("X-Xhr-Redirect") : void 0) != null;
      };
    }).call(this);
    (function () {
      var stopEverything;
      stopEverything = Rails.stopEverything;

      Rails.handleMethod = function (e) {
        var csrfParam, csrfToken, form, formContent, href, link, method;
        link = this;
        method = link.getAttribute('data-method');

        if (!method) {
          return;
        }

        href = Rails.href(link);
        csrfToken = Rails.csrfToken();
        csrfParam = Rails.csrfParam();
        form = document.createElement('form');
        formContent = "<input name='_method' value='" + method + "' type='hidden' />";

        if (csrfParam != null && csrfToken != null && !Rails.isCrossDomain(href)) {
          formContent += "<input name='" + csrfParam + "' value='" + csrfToken + "' type='hidden' />";
        }

        formContent += '<input type="submit" />';
        form.method = 'post';
        form.action = href;
        form.target = link.target;
        form.innerHTML = formContent;
        form.style.display = 'none';
        document.body.appendChild(form);
        form.querySelector('[type="submit"]').click();
        return stopEverything(e);
      };
    }).call(this);
    (function () {
      var ajax,
          fire,
          getData,
          isCrossDomain,
          isRemote,
          matches,
          serializeElement,
          setData,
          stopEverything,
          slice = [].slice;
      matches = Rails.matches, getData = Rails.getData, setData = Rails.setData, fire = Rails.fire, stopEverything = Rails.stopEverything, ajax = Rails.ajax, isCrossDomain = Rails.isCrossDomain, serializeElement = Rails.serializeElement;

      isRemote = function isRemote(element) {
        var value;
        value = element.getAttribute('data-remote');
        return value != null && value !== 'false';
      };

      Rails.handleRemote = function (e) {
        var button, data, dataType, element, method, url, withCredentials;
        element = this;

        if (!isRemote(element)) {
          return true;
        }

        if (!fire(element, 'ajax:before')) {
          fire(element, 'ajax:stopped');
          return false;
        }

        withCredentials = element.getAttribute('data-with-credentials');
        dataType = element.getAttribute('data-type') || 'script';

        if (matches(element, Rails.formSubmitSelector)) {
          button = getData(element, 'ujs:submit-button');
          method = getData(element, 'ujs:submit-button-formmethod') || element.method;
          url = getData(element, 'ujs:submit-button-formaction') || element.getAttribute('action') || location.href;

          if (method.toUpperCase() === 'GET') {
            url = url.replace(/\?.*$/, '');
          }

          if (element.enctype === 'multipart/form-data') {
            data = new FormData(element);

            if (button != null) {
              data.append(button.name, button.value);
            }
          } else {
            data = serializeElement(element, button);
          }

          setData(element, 'ujs:submit-button', null);
          setData(element, 'ujs:submit-button-formmethod', null);
          setData(element, 'ujs:submit-button-formaction', null);
        } else if (matches(element, Rails.buttonClickSelector) || matches(element, Rails.inputChangeSelector)) {
          method = element.getAttribute('data-method');
          url = element.getAttribute('data-url');
          data = serializeElement(element, element.getAttribute('data-params'));
        } else {
          method = element.getAttribute('data-method');
          url = Rails.href(element);
          data = element.getAttribute('data-params');
        }

        ajax({
          type: method || 'GET',
          url: url,
          data: data,
          dataType: dataType,
          beforeSend: function beforeSend(xhr, options) {
            if (fire(element, 'ajax:beforeSend', [xhr, options])) {
              return fire(element, 'ajax:send', [xhr]);
            } else {
              fire(element, 'ajax:stopped');
              return false;
            }
          },
          success: function success() {
            var args;
            args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
            return fire(element, 'ajax:success', args);
          },
          error: function error() {
            var args;
            args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
            return fire(element, 'ajax:error', args);
          },
          complete: function complete() {
            var args;
            args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
            return fire(element, 'ajax:complete', args);
          },
          crossDomain: isCrossDomain(url),
          withCredentials: withCredentials != null && withCredentials !== 'false'
        });
        return stopEverything(e);
      };

      Rails.formSubmitButtonClick = function (e) {
        var button, form;
        button = this;
        form = button.form;

        if (!form) {
          return;
        }

        if (button.name) {
          setData(form, 'ujs:submit-button', {
            name: button.name,
            value: button.value
          });
        }

        setData(form, 'ujs:formnovalidate-button', button.formNoValidate);
        setData(form, 'ujs:submit-button-formaction', button.getAttribute('formaction'));
        return setData(form, 'ujs:submit-button-formmethod', button.getAttribute('formmethod'));
      };

      Rails.preventInsignificantClick = function (e) {
        var data, insignificantMetaClick, link, metaClick, method, nonPrimaryMouseClick;
        link = this;
        method = (link.getAttribute('data-method') || 'GET').toUpperCase();
        data = link.getAttribute('data-params');
        metaClick = e.metaKey || e.ctrlKey;
        insignificantMetaClick = metaClick && method === 'GET' && !data;
        nonPrimaryMouseClick = e.button != null && e.button !== 0;

        if (nonPrimaryMouseClick || insignificantMetaClick) {
          return e.stopImmediatePropagation();
        }
      };
    }).call(this);
    (function () {
      var $, CSRFProtection, delegate, disableElement, enableElement, fire, formSubmitButtonClick, getData, handleConfirm, handleDisabledElement, handleMethod, handleRemote, loadCSPNonce, preventInsignificantClick, refreshCSRFTokens;
      fire = Rails.fire, delegate = Rails.delegate, getData = Rails.getData, $ = Rails.$, refreshCSRFTokens = Rails.refreshCSRFTokens, CSRFProtection = Rails.CSRFProtection, loadCSPNonce = Rails.loadCSPNonce, enableElement = Rails.enableElement, disableElement = Rails.disableElement, handleDisabledElement = Rails.handleDisabledElement, handleConfirm = Rails.handleConfirm, preventInsignificantClick = Rails.preventInsignificantClick, handleRemote = Rails.handleRemote, formSubmitButtonClick = Rails.formSubmitButtonClick, handleMethod = Rails.handleMethod;

      if (typeof jQuery !== "undefined" && jQuery !== null && jQuery.ajax != null) {
        if (jQuery.rails) {
          throw new Error('If you load both jquery_ujs and rails-ujs, use rails-ujs only.');
        }

        jQuery.rails = Rails;
        jQuery.ajaxPrefilter(function (options, originalOptions, xhr) {
          if (!options.crossDomain) {
            return CSRFProtection(xhr);
          }
        });
      }

      Rails.start = function () {
        if (window._rails_loaded) {
          throw new Error('rails-ujs has already been loaded!');
        }

        window.addEventListener('pageshow', function () {
          $(Rails.formEnableSelector).forEach(function (el) {
            if (getData(el, 'ujs:disabled')) {
              return enableElement(el);
            }
          });
          return $(Rails.linkDisableSelector).forEach(function (el) {
            if (getData(el, 'ujs:disabled')) {
              return enableElement(el);
            }
          });
        });
        delegate(document, Rails.linkDisableSelector, 'ajax:complete', enableElement);
        delegate(document, Rails.linkDisableSelector, 'ajax:stopped', enableElement);
        delegate(document, Rails.buttonDisableSelector, 'ajax:complete', enableElement);
        delegate(document, Rails.buttonDisableSelector, 'ajax:stopped', enableElement);
        delegate(document, Rails.linkClickSelector, 'click', preventInsignificantClick);
        delegate(document, Rails.linkClickSelector, 'click', handleDisabledElement);
        delegate(document, Rails.linkClickSelector, 'click', handleConfirm);
        delegate(document, Rails.linkClickSelector, 'click', disableElement);
        delegate(document, Rails.linkClickSelector, 'click', handleRemote);
        delegate(document, Rails.linkClickSelector, 'click', handleMethod);
        delegate(document, Rails.buttonClickSelector, 'click', preventInsignificantClick);
        delegate(document, Rails.buttonClickSelector, 'click', handleDisabledElement);
        delegate(document, Rails.buttonClickSelector, 'click', handleConfirm);
        delegate(document, Rails.buttonClickSelector, 'click', disableElement);
        delegate(document, Rails.buttonClickSelector, 'click', handleRemote);
        delegate(document, Rails.inputChangeSelector, 'change', handleDisabledElement);
        delegate(document, Rails.inputChangeSelector, 'change', handleConfirm);
        delegate(document, Rails.inputChangeSelector, 'change', handleRemote);
        delegate(document, Rails.formSubmitSelector, 'submit', handleDisabledElement);
        delegate(document, Rails.formSubmitSelector, 'submit', handleConfirm);
        delegate(document, Rails.formSubmitSelector, 'submit', handleRemote);
        delegate(document, Rails.formSubmitSelector, 'submit', function (e) {
          return setTimeout(function () {
            return disableElement(e);
          }, 13);
        });
        delegate(document, Rails.formSubmitSelector, 'ajax:send', disableElement);
        delegate(document, Rails.formSubmitSelector, 'ajax:complete', enableElement);
        delegate(document, Rails.formInputClickSelector, 'click', preventInsignificantClick);
        delegate(document, Rails.formInputClickSelector, 'click', handleDisabledElement);
        delegate(document, Rails.formInputClickSelector, 'click', handleConfirm);
        delegate(document, Rails.formInputClickSelector, 'click', formSubmitButtonClick);
        document.addEventListener('DOMContentLoaded', refreshCSRFTokens);
        document.addEventListener('DOMContentLoaded', loadCSPNonce);
        return window._rails_loaded = true;
      };

      if (window.Rails === Rails && fire(document, 'rails:attachBindings')) {
        Rails.start();
      }
    }).call(this);
  }).call(this);

  if (( false ? undefined : _typeof(module)) === "object" && module.exports) {
    module.exports = Rails;
  } else if (true) {
    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (Rails),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  }
}).call(this);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../../test/dummy/node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "../../front/node_modules/@stimulus/core/dist/index.js":
/*!*************************************************************************************************************!*\
  !*** /Users/gregoriogalante/Workspace/matilda/matilda-core/front/node_modules/@stimulus/core/dist/index.js ***!
  \*************************************************************************************************************/
/*! exports provided: Application, Context, Controller, defaultSchema */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_application__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/application */ "../../front/node_modules/@stimulus/core/dist/src/application.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Application", function() { return _src_application__WEBPACK_IMPORTED_MODULE_0__["Application"]; });

/* harmony import */ var _src_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/context */ "../../front/node_modules/@stimulus/core/dist/src/context.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Context", function() { return _src_context__WEBPACK_IMPORTED_MODULE_1__["Context"]; });

/* harmony import */ var _src_controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/controller */ "../../front/node_modules/@stimulus/core/dist/src/controller.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Controller", function() { return _src_controller__WEBPACK_IMPORTED_MODULE_2__["Controller"]; });

/* harmony import */ var _src_schema__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/schema */ "../../front/node_modules/@stimulus/core/dist/src/schema.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultSchema", function() { return _src_schema__WEBPACK_IMPORTED_MODULE_3__["defaultSchema"]; });






/***/ }),

/***/ "../../front/node_modules/@stimulus/core/dist/src/action.js":
/*!******************************************************************************************************************!*\
  !*** /Users/gregoriogalante/Workspace/matilda/matilda-core/front/node_modules/@stimulus/core/dist/src/action.js ***!
  \******************************************************************************************************************/
/*! exports provided: Action, getDefaultEventNameForElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Action", function() { return Action; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDefaultEventNameForElement", function() { return getDefaultEventNameForElement; });
/* harmony import */ var _action_descriptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./action_descriptor */ "../../front/node_modules/@stimulus/core/dist/src/action_descriptor.js");


var Action =
/** @class */
function () {
  function Action(element, index, descriptor) {
    this.element = element;
    this.index = index;
    this.eventTarget = descriptor.eventTarget || element;
    this.eventName = descriptor.eventName || getDefaultEventNameForElement(element) || error("missing event name");
    this.identifier = descriptor.identifier || error("missing identifier");
    this.methodName = descriptor.methodName || error("missing method name");
  }

  Action.forToken = function (token) {
    return new this(token.element, token.index, Object(_action_descriptor__WEBPACK_IMPORTED_MODULE_0__["parseDescriptorString"])(token.content));
  };

  Action.prototype.toString = function () {
    var eventNameSuffix = this.eventTargetName ? "@" + this.eventTargetName : "";
    return "" + this.eventName + eventNameSuffix + "->" + this.identifier + "#" + this.methodName;
  };

  Object.defineProperty(Action.prototype, "eventTargetName", {
    get: function get() {
      return Object(_action_descriptor__WEBPACK_IMPORTED_MODULE_0__["stringifyEventTarget"])(this.eventTarget);
    },
    enumerable: true,
    configurable: true
  });
  return Action;
}();


var defaultEventNames = {
  "a": function a(e) {
    return "click";
  },
  "button": function button(e) {
    return "click";
  },
  "form": function form(e) {
    return "submit";
  },
  "input": function input(e) {
    return e.getAttribute("type") == "submit" ? "click" : "change";
  },
  "select": function select(e) {
    return "change";
  },
  "textarea": function textarea(e) {
    return "change";
  }
};
function getDefaultEventNameForElement(element) {
  var tagName = element.tagName.toLowerCase();

  if (tagName in defaultEventNames) {
    return defaultEventNames[tagName](element);
  }
}

function error(message) {
  throw new Error(message);
}

/***/ }),

/***/ "../../front/node_modules/@stimulus/core/dist/src/action_descriptor.js":
/*!*****************************************************************************************************************************!*\
  !*** /Users/gregoriogalante/Workspace/matilda/matilda-core/front/node_modules/@stimulus/core/dist/src/action_descriptor.js ***!
  \*****************************************************************************************************************************/
/*! exports provided: parseDescriptorString, stringifyEventTarget */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseDescriptorString", function() { return parseDescriptorString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stringifyEventTarget", function() { return stringifyEventTarget; });
// capture nos.:            12   23 4               43   1 5   56 7  76
var descriptorPattern = /^((.+?)(@(window|document))?->)?(.+?)(#(.+))?$/;
function parseDescriptorString(descriptorString) {
  var source = descriptorString.trim();
  var matches = source.match(descriptorPattern) || [];
  return {
    eventTarget: parseEventTarget(matches[4]),
    eventName: matches[2],
    identifier: matches[5],
    methodName: matches[7]
  };
}

function parseEventTarget(eventTargetName) {
  if (eventTargetName == "window") {
    return window;
  } else if (eventTargetName == "document") {
    return document;
  }
}

function stringifyEventTarget(eventTarget) {
  if (eventTarget == window) {
    return "window";
  } else if (eventTarget == document) {
    return "document";
  }
}

/***/ }),

/***/ "../../front/node_modules/@stimulus/core/dist/src/application.js":
/*!***********************************************************************************************************************!*\
  !*** /Users/gregoriogalante/Workspace/matilda/matilda-core/front/node_modules/@stimulus/core/dist/src/application.js ***!
  \***********************************************************************************************************************/
/*! exports provided: Application */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Application", function() { return Application; });
/* harmony import */ var _dispatcher__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dispatcher */ "../../front/node_modules/@stimulus/core/dist/src/dispatcher.js");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./router */ "../../front/node_modules/@stimulus/core/dist/src/router.js");
/* harmony import */ var _schema__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./schema */ "../../front/node_modules/@stimulus/core/dist/src/schema.js");
var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : new P(function (resolve) {
        resolve(result.value);
      }).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var __generator = undefined && undefined.__generator || function (thisArg, body) {
  var _ = {
    label: 0,
    sent: function sent() {
      if (t[0] & 1) throw t[1];
      return t[1];
    },
    trys: [],
    ops: []
  },
      f,
      y,
      t,
      g;
  return g = {
    next: verb(0),
    "throw": verb(1),
    "return": verb(2)
  }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
    return this;
  }), g;

  function verb(n) {
    return function (v) {
      return step([n, v]);
    };
  }

  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");

    while (_) {
      try {
        if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
        if (y = 0, t) op = [0, t.value];

        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;

          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;

          case 7:
            op = _.ops.pop();

            _.trys.pop();

            continue;

          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }

            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }

            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }

            if (t && _.label < t[2]) {
              _.label = t[2];

              _.ops.push(op);

              break;
            }

            if (t[2]) _.ops.pop();

            _.trys.pop();

            continue;
        }

        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
    }

    if (op[0] & 5) throw op[1];
    return {
      value: op[0] ? op[1] : void 0,
      done: true
    };
  }
};





var Application =
/** @class */
function () {
  function Application(element, schema) {
    if (element === void 0) {
      element = document.documentElement;
    }

    if (schema === void 0) {
      schema = _schema__WEBPACK_IMPORTED_MODULE_2__["defaultSchema"];
    }

    this.element = element;
    this.schema = schema;
    this.dispatcher = new _dispatcher__WEBPACK_IMPORTED_MODULE_0__["Dispatcher"](this);
    this.router = new _router__WEBPACK_IMPORTED_MODULE_1__["Router"](this);
  }

  Application.start = function (element, schema) {
    var application = new Application(element, schema);
    application.start();
    return application;
  };

  Application.prototype.start = function () {
    return __awaiter(this, void 0, void 0, function () {
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            return [4
            /*yield*/
            , domReady()];

          case 1:
            _a.sent();

            this.router.start();
            this.dispatcher.start();
            return [2
            /*return*/
            ];
        }
      });
    });
  };

  Application.prototype.stop = function () {
    this.router.stop();
    this.dispatcher.stop();
  };

  Application.prototype.register = function (identifier, controllerConstructor) {
    this.load({
      identifier: identifier,
      controllerConstructor: controllerConstructor
    });
  };

  Application.prototype.load = function (head) {
    var _this = this;

    var rest = [];

    for (var _i = 1; _i < arguments.length; _i++) {
      rest[_i - 1] = arguments[_i];
    }

    var definitions = Array.isArray(head) ? head : [head].concat(rest);
    definitions.forEach(function (definition) {
      return _this.router.loadDefinition(definition);
    });
  };

  Application.prototype.unload = function (head) {
    var _this = this;

    var rest = [];

    for (var _i = 1; _i < arguments.length; _i++) {
      rest[_i - 1] = arguments[_i];
    }

    var identifiers = Array.isArray(head) ? head : [head].concat(rest);
    identifiers.forEach(function (identifier) {
      return _this.router.unloadIdentifier(identifier);
    });
  };

  Object.defineProperty(Application.prototype, "controllers", {
    // Controllers
    get: function get() {
      return this.router.contexts.map(function (context) {
        return context.controller;
      });
    },
    enumerable: true,
    configurable: true
  });

  Application.prototype.getControllerForElementAndIdentifier = function (element, identifier) {
    var context = this.router.getContextForElementAndIdentifier(element, identifier);
    return context ? context.controller : null;
  }; // Error handling


  Application.prototype.handleError = function (error, message, detail) {
    console.error("%s\n\n%o\n\n%o", message, error, detail);
  };

  return Application;
}();



function domReady() {
  return new Promise(function (resolve) {
    if (document.readyState == "loading") {
      document.addEventListener("DOMContentLoaded", resolve);
    } else {
      resolve();
    }
  });
}

/***/ }),

/***/ "../../front/node_modules/@stimulus/core/dist/src/binding.js":
/*!*******************************************************************************************************************!*\
  !*** /Users/gregoriogalante/Workspace/matilda/matilda-core/front/node_modules/@stimulus/core/dist/src/binding.js ***!
  \*******************************************************************************************************************/
/*! exports provided: Binding */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Binding", function() { return Binding; });
var Binding =
/** @class */
function () {
  function Binding(context, action) {
    this.context = context;
    this.action = action;
  }

  Object.defineProperty(Binding.prototype, "index", {
    get: function get() {
      return this.action.index;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Binding.prototype, "eventTarget", {
    get: function get() {
      return this.action.eventTarget;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Binding.prototype, "identifier", {
    get: function get() {
      return this.context.identifier;
    },
    enumerable: true,
    configurable: true
  });

  Binding.prototype.handleEvent = function (event) {
    if (this.willBeInvokedByEvent(event)) {
      this.invokeWithEvent(event);
    }
  };

  Object.defineProperty(Binding.prototype, "eventName", {
    get: function get() {
      return this.action.eventName;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Binding.prototype, "method", {
    get: function get() {
      var method = this.controller[this.methodName];

      if (typeof method == "function") {
        return method;
      }

      throw new Error("Action \"" + this.action + "\" references undefined method \"" + this.methodName + "\"");
    },
    enumerable: true,
    configurable: true
  });

  Binding.prototype.invokeWithEvent = function (event) {
    try {
      this.method.call(this.controller, event);
    } catch (error) {
      var _a = this,
          identifier = _a.identifier,
          controller = _a.controller,
          element = _a.element,
          index = _a.index;

      var detail = {
        identifier: identifier,
        controller: controller,
        element: element,
        index: index,
        event: event
      };
      this.context.handleError(error, "invoking action \"" + this.action + "\"", detail);
    }
  };

  Binding.prototype.willBeInvokedByEvent = function (event) {
    var eventTarget = event.target;

    if (this.element === eventTarget) {
      return true;
    } else if (eventTarget instanceof Element && this.element.contains(eventTarget)) {
      return this.scope.containsElement(eventTarget);
    } else {
      return true;
    }
  };

  Object.defineProperty(Binding.prototype, "controller", {
    get: function get() {
      return this.context.controller;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Binding.prototype, "methodName", {
    get: function get() {
      return this.action.methodName;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Binding.prototype, "element", {
    get: function get() {
      return this.scope.element;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Binding.prototype, "scope", {
    get: function get() {
      return this.context.scope;
    },
    enumerable: true,
    configurable: true
  });
  return Binding;
}();



/***/ }),

/***/ "../../front/node_modules/@stimulus/core/dist/src/binding_observer.js":
/*!****************************************************************************************************************************!*\
  !*** /Users/gregoriogalante/Workspace/matilda/matilda-core/front/node_modules/@stimulus/core/dist/src/binding_observer.js ***!
  \****************************************************************************************************************************/
/*! exports provided: BindingObserver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BindingObserver", function() { return BindingObserver; });
/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./action */ "../../front/node_modules/@stimulus/core/dist/src/action.js");
/* harmony import */ var _binding__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./binding */ "../../front/node_modules/@stimulus/core/dist/src/binding.js");
/* harmony import */ var _stimulus_mutation_observers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @stimulus/mutation-observers */ "../../front/node_modules/@stimulus/mutation-observers/dist/index.js");




var BindingObserver =
/** @class */
function () {
  function BindingObserver(context, delegate) {
    this.context = context;
    this.delegate = delegate;
    this.bindingsByAction = new Map();
  }

  BindingObserver.prototype.start = function () {
    if (!this.valueListObserver) {
      this.valueListObserver = new _stimulus_mutation_observers__WEBPACK_IMPORTED_MODULE_2__["ValueListObserver"](this.element, this.actionAttribute, this);
      this.valueListObserver.start();
    }
  };

  BindingObserver.prototype.stop = function () {
    if (this.valueListObserver) {
      this.valueListObserver.stop();
      delete this.valueListObserver;
      this.disconnectAllActions();
    }
  };

  Object.defineProperty(BindingObserver.prototype, "element", {
    get: function get() {
      return this.context.element;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BindingObserver.prototype, "identifier", {
    get: function get() {
      return this.context.identifier;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BindingObserver.prototype, "actionAttribute", {
    get: function get() {
      return this.schema.actionAttribute;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BindingObserver.prototype, "schema", {
    get: function get() {
      return this.context.schema;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BindingObserver.prototype, "bindings", {
    get: function get() {
      return Array.from(this.bindingsByAction.values());
    },
    enumerable: true,
    configurable: true
  });

  BindingObserver.prototype.connectAction = function (action) {
    var binding = new _binding__WEBPACK_IMPORTED_MODULE_1__["Binding"](this.context, action);
    this.bindingsByAction.set(action, binding);
    this.delegate.bindingConnected(binding);
  };

  BindingObserver.prototype.disconnectAction = function (action) {
    var binding = this.bindingsByAction.get(action);

    if (binding) {
      this.bindingsByAction["delete"](action);
      this.delegate.bindingDisconnected(binding);
    }
  };

  BindingObserver.prototype.disconnectAllActions = function () {
    var _this = this;

    this.bindings.forEach(function (binding) {
      return _this.delegate.bindingDisconnected(binding);
    });
    this.bindingsByAction.clear();
  }; // Value observer delegate


  BindingObserver.prototype.parseValueForToken = function (token) {
    var action = _action__WEBPACK_IMPORTED_MODULE_0__["Action"].forToken(token);

    if (action.identifier == this.identifier) {
      return action;
    }
  };

  BindingObserver.prototype.elementMatchedValue = function (element, action) {
    this.connectAction(action);
  };

  BindingObserver.prototype.elementUnmatchedValue = function (element, action) {
    this.disconnectAction(action);
  };

  return BindingObserver;
}();



/***/ }),

/***/ "../../front/node_modules/@stimulus/core/dist/src/context.js":
/*!*******************************************************************************************************************!*\
  !*** /Users/gregoriogalante/Workspace/matilda/matilda-core/front/node_modules/@stimulus/core/dist/src/context.js ***!
  \*******************************************************************************************************************/
/*! exports provided: Context */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Context", function() { return Context; });
/* harmony import */ var _binding_observer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./binding_observer */ "../../front/node_modules/@stimulus/core/dist/src/binding_observer.js");


var Context =
/** @class */
function () {
  function Context(module, scope) {
    this.module = module;
    this.scope = scope;
    this.controller = new module.controllerConstructor(this);
    this.bindingObserver = new _binding_observer__WEBPACK_IMPORTED_MODULE_0__["BindingObserver"](this, this.dispatcher);

    try {
      this.controller.initialize();
    } catch (error) {
      this.handleError(error, "initializing controller");
    }
  }

  Context.prototype.connect = function () {
    this.bindingObserver.start();

    try {
      this.controller.connect();
    } catch (error) {
      this.handleError(error, "connecting controller");
    }
  };

  Context.prototype.disconnect = function () {
    try {
      this.controller.disconnect();
    } catch (error) {
      this.handleError(error, "disconnecting controller");
    }

    this.bindingObserver.stop();
  };

  Object.defineProperty(Context.prototype, "application", {
    get: function get() {
      return this.module.application;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Context.prototype, "identifier", {
    get: function get() {
      return this.module.identifier;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Context.prototype, "schema", {
    get: function get() {
      return this.application.schema;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Context.prototype, "dispatcher", {
    get: function get() {
      return this.application.dispatcher;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Context.prototype, "element", {
    get: function get() {
      return this.scope.element;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Context.prototype, "parentElement", {
    get: function get() {
      return this.element.parentElement;
    },
    enumerable: true,
    configurable: true
  }); // Error handling

  Context.prototype.handleError = function (error, message, detail) {
    if (detail === void 0) {
      detail = {};
    }

    var _a = this,
        identifier = _a.identifier,
        controller = _a.controller,
        element = _a.element;

    detail = Object.assign({
      identifier: identifier,
      controller: controller,
      element: element
    }, detail);
    this.application.handleError(error, "Error " + message, detail);
  };

  return Context;
}();



/***/ }),

/***/ "../../front/node_modules/@stimulus/core/dist/src/controller.js":
/*!**********************************************************************************************************************!*\
  !*** /Users/gregoriogalante/Workspace/matilda/matilda-core/front/node_modules/@stimulus/core/dist/src/controller.js ***!
  \**********************************************************************************************************************/
/*! exports provided: Controller */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Controller", function() { return Controller; });
/* harmony import */ var _target_properties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./target_properties */ "../../front/node_modules/@stimulus/core/dist/src/target_properties.js");


var Controller =
/** @class */
function () {
  function Controller(context) {
    this.context = context;
  }

  Controller.bless = function () {
    Object(_target_properties__WEBPACK_IMPORTED_MODULE_0__["defineTargetProperties"])(this);
  };

  Object.defineProperty(Controller.prototype, "application", {
    get: function get() {
      return this.context.application;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Controller.prototype, "scope", {
    get: function get() {
      return this.context.scope;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Controller.prototype, "element", {
    get: function get() {
      return this.scope.element;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Controller.prototype, "identifier", {
    get: function get() {
      return this.scope.identifier;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Controller.prototype, "targets", {
    get: function get() {
      return this.scope.targets;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Controller.prototype, "data", {
    get: function get() {
      return this.scope.data;
    },
    enumerable: true,
    configurable: true
  });

  Controller.prototype.initialize = function () {// Override in your subclass to set up initial controller state
  };

  Controller.prototype.connect = function () {// Override in your subclass to respond when the controller is connected to the DOM
  };

  Controller.prototype.disconnect = function () {// Override in your subclass to respond when the controller is disconnected from the DOM
  };

  Controller.targets = [];
  return Controller;
}();



/***/ }),

/***/ "../../front/node_modules/@stimulus/core/dist/src/data_map.js":
/*!********************************************************************************************************************!*\
  !*** /Users/gregoriogalante/Workspace/matilda/matilda-core/front/node_modules/@stimulus/core/dist/src/data_map.js ***!
  \********************************************************************************************************************/
/*! exports provided: DataMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataMap", function() { return DataMap; });
var DataMap =
/** @class */
function () {
  function DataMap(scope) {
    this.scope = scope;
  }

  Object.defineProperty(DataMap.prototype, "element", {
    get: function get() {
      return this.scope.element;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DataMap.prototype, "identifier", {
    get: function get() {
      return this.scope.identifier;
    },
    enumerable: true,
    configurable: true
  });

  DataMap.prototype.get = function (key) {
    key = this.getFormattedKey(key);
    return this.element.getAttribute(key);
  };

  DataMap.prototype.set = function (key, value) {
    key = this.getFormattedKey(key);
    this.element.setAttribute(key, value);
    return this.get(key);
  };

  DataMap.prototype.has = function (key) {
    key = this.getFormattedKey(key);
    return this.element.hasAttribute(key);
  };

  DataMap.prototype["delete"] = function (key) {
    if (this.has(key)) {
      key = this.getFormattedKey(key);
      this.element.removeAttribute(key);
      return true;
    } else {
      return false;
    }
  };

  DataMap.prototype.getFormattedKey = function (key) {
    return "data-" + this.identifier + "-" + dasherize(key);
  };

  return DataMap;
}();



function dasherize(value) {
  return value.replace(/([A-Z])/g, function (_, _char) {
    return "-" + _char.toLowerCase();
  });
}

/***/ }),

/***/ "../../front/node_modules/@stimulus/core/dist/src/definition.js":
/*!**********************************************************************************************************************!*\
  !*** /Users/gregoriogalante/Workspace/matilda/matilda-core/front/node_modules/@stimulus/core/dist/src/definition.js ***!
  \**********************************************************************************************************************/
/*! exports provided: blessDefinition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blessDefinition", function() { return blessDefinition; });
var __extends = undefined && undefined.__extends || function () {
  var extendStatics = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function (d, b) {
    d.__proto__ = b;
  } || function (d, b) {
    for (var p in b) {
      if (b.hasOwnProperty(p)) d[p] = b[p];
    }
  };

  return function (d, b) {
    extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();
/** @hidden */


function blessDefinition(definition) {
  return {
    identifier: definition.identifier,
    controllerConstructor: blessControllerConstructor(definition.controllerConstructor)
  };
}

function blessControllerConstructor(controllerConstructor) {
  var constructor = extend(controllerConstructor);
  constructor.bless();
  return constructor;
}

var extend = function () {
  function extendWithReflect(constructor) {
    function Controller() {
      var _newTarget = this && this instanceof Controller ? this.constructor : void 0;

      return Reflect.construct(constructor, arguments, _newTarget);
    }

    Controller.prototype = Object.create(constructor.prototype, {
      constructor: {
        value: Controller
      }
    });
    Reflect.setPrototypeOf(Controller, constructor);
    return Controller;
  }

  function testReflectExtension() {
    var a = function a() {
      this.a.call(this);
    };

    var b = extendWithReflect(a);

    b.prototype.a = function () {};

    return new b();
  }

  try {
    testReflectExtension();
    return extendWithReflect;
  } catch (error) {
    return function (constructor) {
      return (
        /** @class */
        function (_super) {
          __extends(Controller, _super);

          function Controller() {
            return _super !== null && _super.apply(this, arguments) || this;
          }

          return Controller;
        }(constructor)
      );
    };
  }
}();

/***/ }),

/***/ "../../front/node_modules/@stimulus/core/dist/src/dispatcher.js":
/*!**********************************************************************************************************************!*\
  !*** /Users/gregoriogalante/Workspace/matilda/matilda-core/front/node_modules/@stimulus/core/dist/src/dispatcher.js ***!
  \**********************************************************************************************************************/
/*! exports provided: Dispatcher */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dispatcher", function() { return Dispatcher; });
/* harmony import */ var _event_listener__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./event_listener */ "../../front/node_modules/@stimulus/core/dist/src/event_listener.js");


var Dispatcher =
/** @class */
function () {
  function Dispatcher(application) {
    this.application = application;
    this.eventListenerMaps = new Map();
    this.started = false;
  }

  Dispatcher.prototype.start = function () {
    if (!this.started) {
      this.started = true;
      this.eventListeners.forEach(function (eventListener) {
        return eventListener.connect();
      });
    }
  };

  Dispatcher.prototype.stop = function () {
    if (this.started) {
      this.started = false;
      this.eventListeners.forEach(function (eventListener) {
        return eventListener.disconnect();
      });
    }
  };

  Object.defineProperty(Dispatcher.prototype, "eventListeners", {
    get: function get() {
      return Array.from(this.eventListenerMaps.values()).reduce(function (listeners, map) {
        return listeners.concat(Array.from(map.values()));
      }, []);
    },
    enumerable: true,
    configurable: true
  }); // Binding observer delegate

  /** @hidden */

  Dispatcher.prototype.bindingConnected = function (binding) {
    this.fetchEventListenerForBinding(binding).bindingConnected(binding);
  };
  /** @hidden */


  Dispatcher.prototype.bindingDisconnected = function (binding) {
    this.fetchEventListenerForBinding(binding).bindingDisconnected(binding);
  }; // Error handling


  Dispatcher.prototype.handleError = function (error, message, detail) {
    if (detail === void 0) {
      detail = {};
    }

    this.application.handleError(error, "Error " + message, detail);
  };

  Dispatcher.prototype.fetchEventListenerForBinding = function (binding) {
    var eventTarget = binding.eventTarget,
        eventName = binding.eventName;
    return this.fetchEventListener(eventTarget, eventName);
  };

  Dispatcher.prototype.fetchEventListener = function (eventTarget, eventName) {
    var eventListenerMap = this.fetchEventListenerMapForEventTarget(eventTarget);
    var eventListener = eventListenerMap.get(eventName);

    if (!eventListener) {
      eventListener = this.createEventListener(eventTarget, eventName);
      eventListenerMap.set(eventName, eventListener);
    }

    return eventListener;
  };

  Dispatcher.prototype.createEventListener = function (eventTarget, eventName) {
    var eventListener = new _event_listener__WEBPACK_IMPORTED_MODULE_0__["EventListener"](eventTarget, eventName);

    if (this.started) {
      eventListener.connect();
    }

    return eventListener;
  };

  Dispatcher.prototype.fetchEventListenerMapForEventTarget = function (eventTarget) {
    var eventListenerMap = this.eventListenerMaps.get(eventTarget);

    if (!eventListenerMap) {
      eventListenerMap = new Map();
      this.eventListenerMaps.set(eventTarget, eventListenerMap);
    }

    return eventListenerMap;
  };

  return Dispatcher;
}();



/***/ }),

/***/ "../../front/node_modules/@stimulus/core/dist/src/event_listener.js":
/*!**************************************************************************************************************************!*\
  !*** /Users/gregoriogalante/Workspace/matilda/matilda-core/front/node_modules/@stimulus/core/dist/src/event_listener.js ***!
  \**************************************************************************************************************************/
/*! exports provided: EventListener */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventListener", function() { return EventListener; });
var EventListener =
/** @class */
function () {
  function EventListener(eventTarget, eventName) {
    this.eventTarget = eventTarget;
    this.eventName = eventName;
    this.unorderedBindings = new Set();
  }

  EventListener.prototype.connect = function () {
    this.eventTarget.addEventListener(this.eventName, this, false);
  };

  EventListener.prototype.disconnect = function () {
    this.eventTarget.removeEventListener(this.eventName, this, false);
  }; // Binding observer delegate

  /** @hidden */


  EventListener.prototype.bindingConnected = function (binding) {
    this.unorderedBindings.add(binding);
  };
  /** @hidden */


  EventListener.prototype.bindingDisconnected = function (binding) {
    this.unorderedBindings["delete"](binding);
  };

  EventListener.prototype.handleEvent = function (event) {
    var extendedEvent = extendEvent(event);

    for (var _i = 0, _a = this.bindings; _i < _a.length; _i++) {
      var binding = _a[_i];

      if (extendedEvent.immediatePropagationStopped) {
        break;
      } else {
        binding.handleEvent(extendedEvent);
      }
    }
  };

  Object.defineProperty(EventListener.prototype, "bindings", {
    get: function get() {
      return Array.from(this.unorderedBindings).sort(function (left, right) {
        var leftIndex = left.index,
            rightIndex = right.index;
        return leftIndex < rightIndex ? -1 : leftIndex > rightIndex ? 1 : 0;
      });
    },
    enumerable: true,
    configurable: true
  });
  return EventListener;
}();



function extendEvent(event) {
  if ("immediatePropagationStopped" in event) {
    return event;
  } else {
    var stopImmediatePropagation_1 = event.stopImmediatePropagation;
    return Object.assign(event, {
      immediatePropagationStopped: false,
      stopImmediatePropagation: function stopImmediatePropagation() {
        this.immediatePropagationStopped = true;
        stopImmediatePropagation_1.call(this);
      }
    });
  }
}

/***/ }),

/***/ "../../front/node_modules/@stimulus/core/dist/src/module.js":
/*!******************************************************************************************************************!*\
  !*** /Users/gregoriogalante/Workspace/matilda/matilda-core/front/node_modules/@stimulus/core/dist/src/module.js ***!
  \******************************************************************************************************************/
/*! exports provided: Module */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Module", function() { return Module; });
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./context */ "../../front/node_modules/@stimulus/core/dist/src/context.js");
/* harmony import */ var _definition__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./definition */ "../../front/node_modules/@stimulus/core/dist/src/definition.js");



var Module =
/** @class */
function () {
  function Module(application, definition) {
    this.application = application;
    this.definition = Object(_definition__WEBPACK_IMPORTED_MODULE_1__["blessDefinition"])(definition);
    this.contextsByScope = new WeakMap();
    this.connectedContexts = new Set();
  }

  Object.defineProperty(Module.prototype, "identifier", {
    get: function get() {
      return this.definition.identifier;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Module.prototype, "controllerConstructor", {
    get: function get() {
      return this.definition.controllerConstructor;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Module.prototype, "contexts", {
    get: function get() {
      return Array.from(this.connectedContexts);
    },
    enumerable: true,
    configurable: true
  });

  Module.prototype.connectContextForScope = function (scope) {
    var context = this.fetchContextForScope(scope);
    this.connectedContexts.add(context);
    context.connect();
  };

  Module.prototype.disconnectContextForScope = function (scope) {
    var context = this.contextsByScope.get(scope);

    if (context) {
      this.connectedContexts["delete"](context);
      context.disconnect();
    }
  };

  Module.prototype.fetchContextForScope = function (scope) {
    var context = this.contextsByScope.get(scope);

    if (!context) {
      context = new _context__WEBPACK_IMPORTED_MODULE_0__["Context"](this, scope);
      this.contextsByScope.set(scope, context);
    }

    return context;
  };

  return Module;
}();



/***/ }),

/***/ "../../front/node_modules/@stimulus/core/dist/src/router.js":
/*!******************************************************************************************************************!*\
  !*** /Users/gregoriogalante/Workspace/matilda/matilda-core/front/node_modules/@stimulus/core/dist/src/router.js ***!
  \******************************************************************************************************************/
/*! exports provided: Router */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Router", function() { return Router; });
/* harmony import */ var _module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./module */ "../../front/node_modules/@stimulus/core/dist/src/module.js");
/* harmony import */ var _stimulus_multimap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @stimulus/multimap */ "../../front/node_modules/@stimulus/multimap/dist/index.js");
/* harmony import */ var _scope_observer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scope_observer */ "../../front/node_modules/@stimulus/core/dist/src/scope_observer.js");




var Router =
/** @class */
function () {
  function Router(application) {
    this.application = application;
    this.scopeObserver = new _scope_observer__WEBPACK_IMPORTED_MODULE_2__["ScopeObserver"](this.element, this.schema, this);
    this.scopesByIdentifier = new _stimulus_multimap__WEBPACK_IMPORTED_MODULE_1__["Multimap"]();
    this.modulesByIdentifier = new Map();
  }

  Object.defineProperty(Router.prototype, "element", {
    get: function get() {
      return this.application.element;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Router.prototype, "schema", {
    get: function get() {
      return this.application.schema;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Router.prototype, "controllerAttribute", {
    get: function get() {
      return this.schema.controllerAttribute;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Router.prototype, "modules", {
    get: function get() {
      return Array.from(this.modulesByIdentifier.values());
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Router.prototype, "contexts", {
    get: function get() {
      return this.modules.reduce(function (contexts, module) {
        return contexts.concat(module.contexts);
      }, []);
    },
    enumerable: true,
    configurable: true
  });

  Router.prototype.start = function () {
    this.scopeObserver.start();
  };

  Router.prototype.stop = function () {
    this.scopeObserver.stop();
  };

  Router.prototype.loadDefinition = function (definition) {
    this.unloadIdentifier(definition.identifier);
    var module = new _module__WEBPACK_IMPORTED_MODULE_0__["Module"](this.application, definition);
    this.connectModule(module);
  };

  Router.prototype.unloadIdentifier = function (identifier) {
    var module = this.modulesByIdentifier.get(identifier);

    if (module) {
      this.disconnectModule(module);
    }
  };

  Router.prototype.getContextForElementAndIdentifier = function (element, identifier) {
    var module = this.modulesByIdentifier.get(identifier);

    if (module) {
      return module.contexts.find(function (context) {
        return context.element == element;
      });
    }
  }; // Error handler delegate

  /** @hidden */


  Router.prototype.handleError = function (error, message, detail) {
    this.application.handleError(error, message, detail);
  }; // Scope observer delegate

  /** @hidden */


  Router.prototype.scopeConnected = function (scope) {
    this.scopesByIdentifier.add(scope.identifier, scope);
    var module = this.modulesByIdentifier.get(scope.identifier);

    if (module) {
      module.connectContextForScope(scope);
    }
  };
  /** @hidden */


  Router.prototype.scopeDisconnected = function (scope) {
    this.scopesByIdentifier["delete"](scope.identifier, scope);
    var module = this.modulesByIdentifier.get(scope.identifier);

    if (module) {
      module.disconnectContextForScope(scope);
    }
  }; // Modules


  Router.prototype.connectModule = function (module) {
    this.modulesByIdentifier.set(module.identifier, module);
    var scopes = this.scopesByIdentifier.getValuesForKey(module.identifier);
    scopes.forEach(function (scope) {
      return module.connectContextForScope(scope);
    });
  };

  Router.prototype.disconnectModule = function (module) {
    this.modulesByIdentifier["delete"](module.identifier);
    var scopes = this.scopesByIdentifier.getValuesForKey(module.identifier);
    scopes.forEach(function (scope) {
      return module.disconnectContextForScope(scope);
    });
  };

  return Router;
}();



/***/ }),

/***/ "../../front/node_modules/@stimulus/core/dist/src/schema.js":
/*!******************************************************************************************************************!*\
  !*** /Users/gregoriogalante/Workspace/matilda/matilda-core/front/node_modules/@stimulus/core/dist/src/schema.js ***!
  \******************************************************************************************************************/
/*! exports provided: defaultSchema */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultSchema", function() { return defaultSchema; });
var defaultSchema = {
  controllerAttribute: "data-controller",
  actionAttribute: "data-action",
  targetAttribute: "data-target"
};

/***/ }),

/***/ "../../front/node_modules/@stimulus/core/dist/src/scope.js":
/*!*****************************************************************************************************************!*\
  !*** /Users/gregoriogalante/Workspace/matilda/matilda-core/front/node_modules/@stimulus/core/dist/src/scope.js ***!
  \*****************************************************************************************************************/
/*! exports provided: Scope */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Scope", function() { return Scope; });
/* harmony import */ var _data_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data_map */ "../../front/node_modules/@stimulus/core/dist/src/data_map.js");
/* harmony import */ var _target_set__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./target_set */ "../../front/node_modules/@stimulus/core/dist/src/target_set.js");
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./selectors */ "../../front/node_modules/@stimulus/core/dist/src/selectors.js");




var Scope =
/** @class */
function () {
  function Scope(schema, identifier, element) {
    this.schema = schema;
    this.identifier = identifier;
    this.element = element;
    this.targets = new _target_set__WEBPACK_IMPORTED_MODULE_1__["TargetSet"](this);
    this.data = new _data_map__WEBPACK_IMPORTED_MODULE_0__["DataMap"](this);
  }

  Scope.prototype.findElement = function (selector) {
    return this.findAllElements(selector)[0];
  };

  Scope.prototype.findAllElements = function (selector) {
    var head = this.element.matches(selector) ? [this.element] : [];
    var tail = this.filterElements(Array.from(this.element.querySelectorAll(selector)));
    return head.concat(tail);
  };

  Scope.prototype.filterElements = function (elements) {
    var _this = this;

    return elements.filter(function (element) {
      return _this.containsElement(element);
    });
  };

  Scope.prototype.containsElement = function (element) {
    return element.closest(this.controllerSelector) === this.element;
  };

  Object.defineProperty(Scope.prototype, "controllerSelector", {
    get: function get() {
      return Object(_selectors__WEBPACK_IMPORTED_MODULE_2__["attributeValueContainsToken"])(this.schema.controllerAttribute, this.identifier);
    },
    enumerable: true,
    configurable: true
  });
  return Scope;
}();



/***/ }),

/***/ "../../front/node_modules/@stimulus/core/dist/src/scope_observer.js":
/*!**************************************************************************************************************************!*\
  !*** /Users/gregoriogalante/Workspace/matilda/matilda-core/front/node_modules/@stimulus/core/dist/src/scope_observer.js ***!
  \**************************************************************************************************************************/
/*! exports provided: ScopeObserver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScopeObserver", function() { return ScopeObserver; });
/* harmony import */ var _scope__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scope */ "../../front/node_modules/@stimulus/core/dist/src/scope.js");
/* harmony import */ var _stimulus_mutation_observers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @stimulus/mutation-observers */ "../../front/node_modules/@stimulus/mutation-observers/dist/index.js");



var ScopeObserver =
/** @class */
function () {
  function ScopeObserver(element, schema, delegate) {
    this.element = element;
    this.schema = schema;
    this.delegate = delegate;
    this.valueListObserver = new _stimulus_mutation_observers__WEBPACK_IMPORTED_MODULE_1__["ValueListObserver"](this.element, this.controllerAttribute, this);
    this.scopesByIdentifierByElement = new WeakMap();
    this.scopeReferenceCounts = new WeakMap();
  }

  ScopeObserver.prototype.start = function () {
    this.valueListObserver.start();
  };

  ScopeObserver.prototype.stop = function () {
    this.valueListObserver.stop();
  };

  Object.defineProperty(ScopeObserver.prototype, "controllerAttribute", {
    get: function get() {
      return this.schema.controllerAttribute;
    },
    enumerable: true,
    configurable: true
  }); // Value observer delegate

  /** @hidden */

  ScopeObserver.prototype.parseValueForToken = function (token) {
    var element = token.element,
        identifier = token.content;
    var scopesByIdentifier = this.fetchScopesByIdentifierForElement(element);
    var scope = scopesByIdentifier.get(identifier);

    if (!scope) {
      scope = new _scope__WEBPACK_IMPORTED_MODULE_0__["Scope"](this.schema, identifier, element);
      scopesByIdentifier.set(identifier, scope);
    }

    return scope;
  };
  /** @hidden */


  ScopeObserver.prototype.elementMatchedValue = function (element, value) {
    var referenceCount = (this.scopeReferenceCounts.get(value) || 0) + 1;
    this.scopeReferenceCounts.set(value, referenceCount);

    if (referenceCount == 1) {
      this.delegate.scopeConnected(value);
    }
  };
  /** @hidden */


  ScopeObserver.prototype.elementUnmatchedValue = function (element, value) {
    var referenceCount = this.scopeReferenceCounts.get(value);

    if (referenceCount) {
      this.scopeReferenceCounts.set(value, referenceCount - 1);

      if (referenceCount == 1) {
        this.delegate.scopeDisconnected(value);
      }
    }
  };

  ScopeObserver.prototype.fetchScopesByIdentifierForElement = function (element) {
    var scopesByIdentifier = this.scopesByIdentifierByElement.get(element);

    if (!scopesByIdentifier) {
      scopesByIdentifier = new Map();
      this.scopesByIdentifierByElement.set(element, scopesByIdentifier);
    }

    return scopesByIdentifier;
  };

  return ScopeObserver;
}();



/***/ }),

/***/ "../../front/node_modules/@stimulus/core/dist/src/selectors.js":
/*!*********************************************************************************************************************!*\
  !*** /Users/gregoriogalante/Workspace/matilda/matilda-core/front/node_modules/@stimulus/core/dist/src/selectors.js ***!
  \*********************************************************************************************************************/
/*! exports provided: attributeValueContainsToken */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "attributeValueContainsToken", function() { return attributeValueContainsToken; });
/** @hidden */
function attributeValueContainsToken(attributeName, token) {
  return "[" + attributeName + "~=\"" + token + "\"]";
}

/***/ }),

/***/ "../../front/node_modules/@stimulus/core/dist/src/target_properties.js":
/*!*****************************************************************************************************************************!*\
  !*** /Users/gregoriogalante/Workspace/matilda/matilda-core/front/node_modules/@stimulus/core/dist/src/target_properties.js ***!
  \*****************************************************************************************************************************/
/*! exports provided: defineTargetProperties */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defineTargetProperties", function() { return defineTargetProperties; });
/** @hidden */
function defineTargetProperties(constructor) {
  var prototype = constructor.prototype;
  var targetNames = getTargetNamesForConstructor(constructor);
  targetNames.forEach(function (name) {
    var _a;

    return defineLinkedProperties(prototype, (_a = {}, _a[name + "Target"] = {
      get: function get() {
        var target = this.targets.find(name);

        if (target) {
          return target;
        } else {
          throw new Error("Missing target element \"" + this.identifier + "." + name + "\"");
        }
      }
    }, _a[name + "Targets"] = {
      get: function get() {
        return this.targets.findAll(name);
      }
    }, _a["has" + capitalize(name) + "Target"] = {
      get: function get() {
        return this.targets.has(name);
      }
    }, _a));
  });
}

function getTargetNamesForConstructor(constructor) {
  var ancestors = getAncestorsForConstructor(constructor);
  return Array.from(ancestors.reduce(function (targetNames, constructor) {
    getOwnTargetNamesForConstructor(constructor).forEach(function (name) {
      return targetNames.add(name);
    });
    return targetNames;
  }, new Set()));
}

function getAncestorsForConstructor(constructor) {
  var ancestors = [];

  while (constructor) {
    ancestors.push(constructor);
    constructor = Object.getPrototypeOf(constructor);
  }

  return ancestors;
}

function getOwnTargetNamesForConstructor(constructor) {
  var definition = constructor["targets"];
  return Array.isArray(definition) ? definition : [];
}

function defineLinkedProperties(object, properties) {
  Object.keys(properties).forEach(function (name) {
    if (!(name in object)) {
      var descriptor = properties[name];
      Object.defineProperty(object, name, descriptor);
    }
  });
}

function capitalize(name) {
  return name.charAt(0).toUpperCase() + name.slice(1);
}

/***/ }),

/***/ "../../front/node_modules/@stimulus/core/dist/src/target_set.js":
/*!**********************************************************************************************************************!*\
  !*** /Users/gregoriogalante/Workspace/matilda/matilda-core/front/node_modules/@stimulus/core/dist/src/target_set.js ***!
  \**********************************************************************************************************************/
/*! exports provided: TargetSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TargetSet", function() { return TargetSet; });
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./selectors */ "../../front/node_modules/@stimulus/core/dist/src/selectors.js");


var TargetSet =
/** @class */
function () {
  function TargetSet(scope) {
    this.scope = scope;
  }

  Object.defineProperty(TargetSet.prototype, "element", {
    get: function get() {
      return this.scope.element;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TargetSet.prototype, "identifier", {
    get: function get() {
      return this.scope.identifier;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TargetSet.prototype, "schema", {
    get: function get() {
      return this.scope.schema;
    },
    enumerable: true,
    configurable: true
  });

  TargetSet.prototype.has = function (targetName) {
    return this.find(targetName) != null;
  };

  TargetSet.prototype.find = function () {
    var targetNames = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      targetNames[_i] = arguments[_i];
    }

    var selector = this.getSelectorForTargetNames(targetNames);
    return this.scope.findElement(selector);
  };

  TargetSet.prototype.findAll = function () {
    var targetNames = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      targetNames[_i] = arguments[_i];
    }

    var selector = this.getSelectorForTargetNames(targetNames);
    return this.scope.findAllElements(selector);
  };

  TargetSet.prototype.getSelectorForTargetNames = function (targetNames) {
    var _this = this;

    return targetNames.map(function (targetName) {
      return _this.getSelectorForTargetName(targetName);
    }).join(", ");
  };

  TargetSet.prototype.getSelectorForTargetName = function (targetName) {
    var targetDescriptor = this.identifier + "." + targetName;
    return Object(_selectors__WEBPACK_IMPORTED_MODULE_0__["attributeValueContainsToken"])(this.schema.targetAttribute, targetDescriptor);
  };

  return TargetSet;
}();



/***/ }),

/***/ "../../front/node_modules/@stimulus/multimap/dist/index.js":
/*!*****************************************************************************************************************!*\
  !*** /Users/gregoriogalante/Workspace/matilda/matilda-core/front/node_modules/@stimulus/multimap/dist/index.js ***!
  \*****************************************************************************************************************/
/*! exports provided: Multimap, IndexedMultimap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_multimap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/multimap */ "../../front/node_modules/@stimulus/multimap/dist/src/multimap.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Multimap", function() { return _src_multimap__WEBPACK_IMPORTED_MODULE_0__["Multimap"]; });

/* harmony import */ var _src_indexed_multimap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/indexed_multimap */ "../../front/node_modules/@stimulus/multimap/dist/src/indexed_multimap.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IndexedMultimap", function() { return _src_indexed_multimap__WEBPACK_IMPORTED_MODULE_1__["IndexedMultimap"]; });




/***/ }),

/***/ "../../front/node_modules/@stimulus/multimap/dist/src/indexed_multimap.js":
/*!********************************************************************************************************************************!*\
  !*** /Users/gregoriogalante/Workspace/matilda/matilda-core/front/node_modules/@stimulus/multimap/dist/src/indexed_multimap.js ***!
  \********************************************************************************************************************************/
/*! exports provided: IndexedMultimap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexedMultimap", function() { return IndexedMultimap; });
/* harmony import */ var _multimap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./multimap */ "../../front/node_modules/@stimulus/multimap/dist/src/multimap.js");
/* harmony import */ var _set_operations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./set_operations */ "../../front/node_modules/@stimulus/multimap/dist/src/set_operations.js");
var __extends = undefined && undefined.__extends || function () {
  var extendStatics = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function (d, b) {
    d.__proto__ = b;
  } || function (d, b) {
    for (var p in b) {
      if (b.hasOwnProperty(p)) d[p] = b[p];
    }
  };

  return function (d, b) {
    extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
}();




var IndexedMultimap =
/** @class */
function (_super) {
  __extends(IndexedMultimap, _super);

  function IndexedMultimap() {
    var _this = _super.call(this) || this;

    _this.keysByValue = new Map();
    return _this;
  }

  Object.defineProperty(IndexedMultimap.prototype, "values", {
    get: function get() {
      return Array.from(this.keysByValue.keys());
    },
    enumerable: true,
    configurable: true
  });

  IndexedMultimap.prototype.add = function (key, value) {
    _super.prototype.add.call(this, key, value);

    Object(_set_operations__WEBPACK_IMPORTED_MODULE_1__["add"])(this.keysByValue, value, key);
  };

  IndexedMultimap.prototype["delete"] = function (key, value) {
    _super.prototype["delete"].call(this, key, value);

    Object(_set_operations__WEBPACK_IMPORTED_MODULE_1__["del"])(this.keysByValue, value, key);
  };

  IndexedMultimap.prototype.hasValue = function (value) {
    return this.keysByValue.has(value);
  };

  IndexedMultimap.prototype.getKeysForValue = function (value) {
    var set = this.keysByValue.get(value);
    return set ? Array.from(set) : [];
  };

  return IndexedMultimap;
}(_multimap__WEBPACK_IMPORTED_MODULE_0__["Multimap"]);



/***/ }),

/***/ "../../front/node_modules/@stimulus/multimap/dist/src/multimap.js":
/*!************************************************************************************************************************!*\
  !*** /Users/gregoriogalante/Workspace/matilda/matilda-core/front/node_modules/@stimulus/multimap/dist/src/multimap.js ***!
  \************************************************************************************************************************/
/*! exports provided: Multimap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Multimap", function() { return Multimap; });
/* harmony import */ var _set_operations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./set_operations */ "../../front/node_modules/@stimulus/multimap/dist/src/set_operations.js");


var Multimap =
/** @class */
function () {
  function Multimap() {
    this.valuesByKey = new Map();
  }

  Object.defineProperty(Multimap.prototype, "values", {
    get: function get() {
      var sets = Array.from(this.valuesByKey.values());
      return sets.reduce(function (values, set) {
        return values.concat(Array.from(set));
      }, []);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(Multimap.prototype, "size", {
    get: function get() {
      var sets = Array.from(this.valuesByKey.values());
      return sets.reduce(function (size, set) {
        return size + set.size;
      }, 0);
    },
    enumerable: true,
    configurable: true
  });

  Multimap.prototype.add = function (key, value) {
    Object(_set_operations__WEBPACK_IMPORTED_MODULE_0__["add"])(this.valuesByKey, key, value);
  };

  Multimap.prototype["delete"] = function (key, value) {
    Object(_set_operations__WEBPACK_IMPORTED_MODULE_0__["del"])(this.valuesByKey, key, value);
  };

  Multimap.prototype.has = function (key, value) {
    var values = this.valuesByKey.get(key);
    return values != null && values.has(value);
  };

  Multimap.prototype.hasKey = function (key) {
    return this.valuesByKey.has(key);
  };

  Multimap.prototype.hasValue = function (value) {
    var sets = Array.from(this.valuesByKey.values());
    return sets.some(function (set) {
      return set.has(value);
    });
  };

  Multimap.prototype.getValuesForKey = function (key) {
    var values = this.valuesByKey.get(key);
    return values ? Array.from(values) : [];
  };

  Multimap.prototype.getKeysForValue = function (value) {
    return Array.from(this.valuesByKey).filter(function (_a) {
      var key = _a[0],
          values = _a[1];
      return values.has(value);
    }).map(function (_a) {
      var key = _a[0],
          values = _a[1];
      return key;
    });
  };

  return Multimap;
}();



/***/ }),

/***/ "../../front/node_modules/@stimulus/multimap/dist/src/set_operations.js":
/*!******************************************************************************************************************************!*\
  !*** /Users/gregoriogalante/Workspace/matilda/matilda-core/front/node_modules/@stimulus/multimap/dist/src/set_operations.js ***!
  \******************************************************************************************************************************/
/*! exports provided: add, del, fetch, prune */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add", function() { return add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "del", function() { return del; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetch", function() { return fetch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prune", function() { return prune; });
function add(map, key, value) {
  fetch(map, key).add(value);
}
function del(map, key, value) {
  fetch(map, key)["delete"](value);
  prune(map, key);
}
function fetch(map, key) {
  var values = map.get(key);

  if (!values) {
    values = new Set();
    map.set(key, values);
  }

  return values;
}
function prune(map, key) {
  var values = map.get(key);

  if (values != null && values.size == 0) {
    map["delete"](key);
  }
}

/***/ }),

/***/ "../../front/node_modules/@stimulus/mutation-observers/dist/index.js":
/*!***************************************************************************************************************************!*\
  !*** /Users/gregoriogalante/Workspace/matilda/matilda-core/front/node_modules/@stimulus/mutation-observers/dist/index.js ***!
  \***************************************************************************************************************************/
/*! exports provided: AttributeObserver, ElementObserver, TokenListObserver, ValueListObserver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_attribute_observer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/attribute_observer */ "../../front/node_modules/@stimulus/mutation-observers/dist/src/attribute_observer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AttributeObserver", function() { return _src_attribute_observer__WEBPACK_IMPORTED_MODULE_0__["AttributeObserver"]; });

/* harmony import */ var _src_element_observer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/element_observer */ "../../front/node_modules/@stimulus/mutation-observers/dist/src/element_observer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ElementObserver", function() { return _src_element_observer__WEBPACK_IMPORTED_MODULE_1__["ElementObserver"]; });

/* harmony import */ var _src_token_list_observer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/token_list_observer */ "../../front/node_modules/@stimulus/mutation-observers/dist/src/token_list_observer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TokenListObserver", function() { return _src_token_list_observer__WEBPACK_IMPORTED_MODULE_2__["TokenListObserver"]; });

/* harmony import */ var _src_value_list_observer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/value_list_observer */ "../../front/node_modules/@stimulus/mutation-observers/dist/src/value_list_observer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ValueListObserver", function() { return _src_value_list_observer__WEBPACK_IMPORTED_MODULE_3__["ValueListObserver"]; });






/***/ }),

/***/ "../../front/node_modules/@stimulus/mutation-observers/dist/src/attribute_observer.js":
/*!********************************************************************************************************************************************!*\
  !*** /Users/gregoriogalante/Workspace/matilda/matilda-core/front/node_modules/@stimulus/mutation-observers/dist/src/attribute_observer.js ***!
  \********************************************************************************************************************************************/
/*! exports provided: AttributeObserver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttributeObserver", function() { return AttributeObserver; });
/* harmony import */ var _element_observer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./element_observer */ "../../front/node_modules/@stimulus/mutation-observers/dist/src/element_observer.js");


var AttributeObserver =
/** @class */
function () {
  function AttributeObserver(element, attributeName, delegate) {
    this.attributeName = attributeName;
    this.delegate = delegate;
    this.elementObserver = new _element_observer__WEBPACK_IMPORTED_MODULE_0__["ElementObserver"](element, this);
  }

  Object.defineProperty(AttributeObserver.prototype, "element", {
    get: function get() {
      return this.elementObserver.element;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AttributeObserver.prototype, "selector", {
    get: function get() {
      return "[" + this.attributeName + "]";
    },
    enumerable: true,
    configurable: true
  });

  AttributeObserver.prototype.start = function () {
    this.elementObserver.start();
  };

  AttributeObserver.prototype.stop = function () {
    this.elementObserver.stop();
  };

  AttributeObserver.prototype.refresh = function () {
    this.elementObserver.refresh();
  };

  Object.defineProperty(AttributeObserver.prototype, "started", {
    get: function get() {
      return this.elementObserver.started;
    },
    enumerable: true,
    configurable: true
  }); // Element observer delegate

  AttributeObserver.prototype.matchElement = function (element) {
    return element.hasAttribute(this.attributeName);
  };

  AttributeObserver.prototype.matchElementsInTree = function (tree) {
    var match = this.matchElement(tree) ? [tree] : [];
    var matches = Array.from(tree.querySelectorAll(this.selector));
    return match.concat(matches);
  };

  AttributeObserver.prototype.elementMatched = function (element) {
    if (this.delegate.elementMatchedAttribute) {
      this.delegate.elementMatchedAttribute(element, this.attributeName);
    }
  };

  AttributeObserver.prototype.elementUnmatched = function (element) {
    if (this.delegate.elementUnmatchedAttribute) {
      this.delegate.elementUnmatchedAttribute(element, this.attributeName);
    }
  };

  AttributeObserver.prototype.elementAttributeChanged = function (element, attributeName) {
    if (this.delegate.elementAttributeValueChanged && this.attributeName == attributeName) {
      this.delegate.elementAttributeValueChanged(element, attributeName);
    }
  };

  return AttributeObserver;
}();



/***/ }),

/***/ "../../front/node_modules/@stimulus/mutation-observers/dist/src/element_observer.js":
/*!******************************************************************************************************************************************!*\
  !*** /Users/gregoriogalante/Workspace/matilda/matilda-core/front/node_modules/@stimulus/mutation-observers/dist/src/element_observer.js ***!
  \******************************************************************************************************************************************/
/*! exports provided: ElementObserver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElementObserver", function() { return ElementObserver; });
var ElementObserver =
/** @class */
function () {
  function ElementObserver(element, delegate) {
    var _this = this;

    this.element = element;
    this.started = false;
    this.delegate = delegate;
    this.elements = new Set();
    this.mutationObserver = new MutationObserver(function (mutations) {
      return _this.processMutations(mutations);
    });
  }

  ElementObserver.prototype.start = function () {
    if (!this.started) {
      this.started = true;
      this.mutationObserver.observe(this.element, {
        attributes: true,
        childList: true,
        subtree: true
      });
      this.refresh();
    }
  };

  ElementObserver.prototype.stop = function () {
    if (this.started) {
      this.mutationObserver.takeRecords();
      this.mutationObserver.disconnect();
      this.started = false;
    }
  };

  ElementObserver.prototype.refresh = function () {
    if (this.started) {
      var matches = new Set(this.matchElementsInTree());

      for (var _i = 0, _a = Array.from(this.elements); _i < _a.length; _i++) {
        var element = _a[_i];

        if (!matches.has(element)) {
          this.removeElement(element);
        }
      }

      for (var _b = 0, _c = Array.from(matches); _b < _c.length; _b++) {
        var element = _c[_b];
        this.addElement(element);
      }
    }
  }; // Mutation record processing


  ElementObserver.prototype.processMutations = function (mutations) {
    if (this.started) {
      for (var _i = 0, mutations_1 = mutations; _i < mutations_1.length; _i++) {
        var mutation = mutations_1[_i];
        this.processMutation(mutation);
      }
    }
  };

  ElementObserver.prototype.processMutation = function (mutation) {
    if (mutation.type == "attributes") {
      this.processAttributeChange(mutation.target, mutation.attributeName);
    } else if (mutation.type == "childList") {
      this.processRemovedNodes(mutation.removedNodes);
      this.processAddedNodes(mutation.addedNodes);
    }
  };

  ElementObserver.prototype.processAttributeChange = function (node, attributeName) {
    var element = node;

    if (this.elements.has(element)) {
      if (this.delegate.elementAttributeChanged && this.matchElement(element)) {
        this.delegate.elementAttributeChanged(element, attributeName);
      } else {
        this.removeElement(element);
      }
    } else if (this.matchElement(element)) {
      this.addElement(element);
    }
  };

  ElementObserver.prototype.processRemovedNodes = function (nodes) {
    for (var _i = 0, _a = Array.from(nodes); _i < _a.length; _i++) {
      var node = _a[_i];
      var element = this.elementFromNode(node);

      if (element) {
        this.processTree(element, this.removeElement);
      }
    }
  };

  ElementObserver.prototype.processAddedNodes = function (nodes) {
    for (var _i = 0, _a = Array.from(nodes); _i < _a.length; _i++) {
      var node = _a[_i];
      var element = this.elementFromNode(node);

      if (element && this.elementIsActive(element)) {
        this.processTree(element, this.addElement);
      }
    }
  }; // Element matching


  ElementObserver.prototype.matchElement = function (element) {
    return this.delegate.matchElement(element);
  };

  ElementObserver.prototype.matchElementsInTree = function (tree) {
    if (tree === void 0) {
      tree = this.element;
    }

    return this.delegate.matchElementsInTree(tree);
  };

  ElementObserver.prototype.processTree = function (tree, processor) {
    for (var _i = 0, _a = this.matchElementsInTree(tree); _i < _a.length; _i++) {
      var element = _a[_i];
      processor.call(this, element);
    }
  };

  ElementObserver.prototype.elementFromNode = function (node) {
    if (node.nodeType == Node.ELEMENT_NODE) {
      return node;
    }
  };

  ElementObserver.prototype.elementIsActive = function (element) {
    if (element.isConnected != this.element.isConnected) {
      return false;
    } else {
      return this.element.contains(element);
    }
  }; // Element tracking


  ElementObserver.prototype.addElement = function (element) {
    if (!this.elements.has(element)) {
      if (this.elementIsActive(element)) {
        this.elements.add(element);

        if (this.delegate.elementMatched) {
          this.delegate.elementMatched(element);
        }
      }
    }
  };

  ElementObserver.prototype.removeElement = function (element) {
    if (this.elements.has(element)) {
      this.elements["delete"](element);

      if (this.delegate.elementUnmatched) {
        this.delegate.elementUnmatched(element);
      }
    }
  };

  return ElementObserver;
}();



/***/ }),

/***/ "../../front/node_modules/@stimulus/mutation-observers/dist/src/token_list_observer.js":
/*!*********************************************************************************************************************************************!*\
  !*** /Users/gregoriogalante/Workspace/matilda/matilda-core/front/node_modules/@stimulus/mutation-observers/dist/src/token_list_observer.js ***!
  \*********************************************************************************************************************************************/
/*! exports provided: TokenListObserver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenListObserver", function() { return TokenListObserver; });
/* harmony import */ var _attribute_observer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./attribute_observer */ "../../front/node_modules/@stimulus/mutation-observers/dist/src/attribute_observer.js");
/* harmony import */ var _stimulus_multimap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @stimulus/multimap */ "../../front/node_modules/@stimulus/multimap/dist/index.js");



var TokenListObserver =
/** @class */
function () {
  function TokenListObserver(element, attributeName, delegate) {
    this.attributeObserver = new _attribute_observer__WEBPACK_IMPORTED_MODULE_0__["AttributeObserver"](element, attributeName, this);
    this.delegate = delegate;
    this.tokensByElement = new _stimulus_multimap__WEBPACK_IMPORTED_MODULE_1__["Multimap"]();
  }

  Object.defineProperty(TokenListObserver.prototype, "started", {
    get: function get() {
      return this.attributeObserver.started;
    },
    enumerable: true,
    configurable: true
  });

  TokenListObserver.prototype.start = function () {
    this.attributeObserver.start();
  };

  TokenListObserver.prototype.stop = function () {
    this.attributeObserver.stop();
  };

  TokenListObserver.prototype.refresh = function () {
    this.attributeObserver.refresh();
  };

  Object.defineProperty(TokenListObserver.prototype, "element", {
    get: function get() {
      return this.attributeObserver.element;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(TokenListObserver.prototype, "attributeName", {
    get: function get() {
      return this.attributeObserver.attributeName;
    },
    enumerable: true,
    configurable: true
  }); // Attribute observer delegate

  TokenListObserver.prototype.elementMatchedAttribute = function (element) {
    this.tokensMatched(this.readTokensForElement(element));
  };

  TokenListObserver.prototype.elementAttributeValueChanged = function (element) {
    var _a = this.refreshTokensForElement(element),
        unmatchedTokens = _a[0],
        matchedTokens = _a[1];

    this.tokensUnmatched(unmatchedTokens);
    this.tokensMatched(matchedTokens);
  };

  TokenListObserver.prototype.elementUnmatchedAttribute = function (element) {
    this.tokensUnmatched(this.tokensByElement.getValuesForKey(element));
  };

  TokenListObserver.prototype.tokensMatched = function (tokens) {
    var _this = this;

    tokens.forEach(function (token) {
      return _this.tokenMatched(token);
    });
  };

  TokenListObserver.prototype.tokensUnmatched = function (tokens) {
    var _this = this;

    tokens.forEach(function (token) {
      return _this.tokenUnmatched(token);
    });
  };

  TokenListObserver.prototype.tokenMatched = function (token) {
    this.delegate.tokenMatched(token);
    this.tokensByElement.add(token.element, token);
  };

  TokenListObserver.prototype.tokenUnmatched = function (token) {
    this.delegate.tokenUnmatched(token);
    this.tokensByElement["delete"](token.element, token);
  };

  TokenListObserver.prototype.refreshTokensForElement = function (element) {
    var previousTokens = this.tokensByElement.getValuesForKey(element);
    var currentTokens = this.readTokensForElement(element);
    var firstDifferingIndex = zip(previousTokens, currentTokens).findIndex(function (_a) {
      var previousToken = _a[0],
          currentToken = _a[1];
      return !tokensAreEqual(previousToken, currentToken);
    });

    if (firstDifferingIndex == -1) {
      return [[], []];
    } else {
      return [previousTokens.slice(firstDifferingIndex), currentTokens.slice(firstDifferingIndex)];
    }
  };

  TokenListObserver.prototype.readTokensForElement = function (element) {
    var attributeName = this.attributeName;
    var tokenString = element.getAttribute(attributeName) || "";
    return parseTokenString(tokenString, element, attributeName);
  };

  return TokenListObserver;
}();



function parseTokenString(tokenString, element, attributeName) {
  return tokenString.trim().split(/\s+/).filter(function (content) {
    return content.length;
  }).map(function (content, index) {
    return {
      element: element,
      attributeName: attributeName,
      content: content,
      index: index
    };
  });
}

function zip(left, right) {
  var length = Math.max(left.length, right.length);
  return Array.from({
    length: length
  }, function (_, index) {
    return [left[index], right[index]];
  });
}

function tokensAreEqual(left, right) {
  return left && right && left.index == right.index && left.content == right.content;
}

/***/ }),

/***/ "../../front/node_modules/@stimulus/mutation-observers/dist/src/value_list_observer.js":
/*!*********************************************************************************************************************************************!*\
  !*** /Users/gregoriogalante/Workspace/matilda/matilda-core/front/node_modules/@stimulus/mutation-observers/dist/src/value_list_observer.js ***!
  \*********************************************************************************************************************************************/
/*! exports provided: ValueListObserver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValueListObserver", function() { return ValueListObserver; });
/* harmony import */ var _token_list_observer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./token_list_observer */ "../../front/node_modules/@stimulus/mutation-observers/dist/src/token_list_observer.js");


var ValueListObserver =
/** @class */
function () {
  function ValueListObserver(element, attributeName, delegate) {
    this.tokenListObserver = new _token_list_observer__WEBPACK_IMPORTED_MODULE_0__["TokenListObserver"](element, attributeName, this);
    this.delegate = delegate;
    this.parseResultsByToken = new WeakMap();
    this.valuesByTokenByElement = new WeakMap();
  }

  Object.defineProperty(ValueListObserver.prototype, "started", {
    get: function get() {
      return this.tokenListObserver.started;
    },
    enumerable: true,
    configurable: true
  });

  ValueListObserver.prototype.start = function () {
    this.tokenListObserver.start();
  };

  ValueListObserver.prototype.stop = function () {
    this.tokenListObserver.stop();
  };

  ValueListObserver.prototype.refresh = function () {
    this.tokenListObserver.refresh();
  };

  Object.defineProperty(ValueListObserver.prototype, "element", {
    get: function get() {
      return this.tokenListObserver.element;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ValueListObserver.prototype, "attributeName", {
    get: function get() {
      return this.tokenListObserver.attributeName;
    },
    enumerable: true,
    configurable: true
  });

  ValueListObserver.prototype.tokenMatched = function (token) {
    var element = token.element;
    var value = this.fetchParseResultForToken(token).value;

    if (value) {
      this.fetchValuesByTokenForElement(element).set(token, value);
      this.delegate.elementMatchedValue(element, value);
    }
  };

  ValueListObserver.prototype.tokenUnmatched = function (token) {
    var element = token.element;
    var value = this.fetchParseResultForToken(token).value;

    if (value) {
      this.fetchValuesByTokenForElement(element)["delete"](token);
      this.delegate.elementUnmatchedValue(element, value);
    }
  };

  ValueListObserver.prototype.fetchParseResultForToken = function (token) {
    var parseResult = this.parseResultsByToken.get(token);

    if (!parseResult) {
      parseResult = this.parseToken(token);
      this.parseResultsByToken.set(token, parseResult);
    }

    return parseResult;
  };

  ValueListObserver.prototype.fetchValuesByTokenForElement = function (element) {
    var valuesByToken = this.valuesByTokenByElement.get(element);

    if (!valuesByToken) {
      valuesByToken = new Map();
      this.valuesByTokenByElement.set(element, valuesByToken);
    }

    return valuesByToken;
  };

  ValueListObserver.prototype.parseToken = function (token) {
    try {
      var value = this.delegate.parseValueForToken(token);
      return {
        value: value
      };
    } catch (error) {
      return {
        error: error
      };
    }
  };

  return ValueListObserver;
}();



/***/ }),

/***/ "../../front/node_modules/popper.js/dist/esm/popper.js":
/*!*************************************************************************************************************!*\
  !*** /Users/gregoriogalante/Workspace/matilda/matilda-core/front/node_modules/popper.js/dist/esm/popper.js ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/**!
 * @fileOverview Kickass library to create and place poppers near their reference elements.
 * @version 1.16.0
 * @license
 * Copyright (c) 2016 Federico Zivolo and contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined' && typeof navigator !== 'undefined';

var timeoutDuration = function () {
  var longerTimeoutBrowsers = ['Edge', 'Trident', 'Firefox'];

  for (var i = 0; i < longerTimeoutBrowsers.length; i += 1) {
    if (isBrowser && navigator.userAgent.indexOf(longerTimeoutBrowsers[i]) >= 0) {
      return 1;
    }
  }

  return 0;
}();

function microtaskDebounce(fn) {
  var called = false;
  return function () {
    if (called) {
      return;
    }

    called = true;
    window.Promise.resolve().then(function () {
      called = false;
      fn();
    });
  };
}

function taskDebounce(fn) {
  var scheduled = false;
  return function () {
    if (!scheduled) {
      scheduled = true;
      setTimeout(function () {
        scheduled = false;
        fn();
      }, timeoutDuration);
    }
  };
}

var supportsMicroTasks = isBrowser && window.Promise;
/**
* Create a debounced version of a method, that's asynchronously deferred
* but called in the minimum time possible.
*
* @method
* @memberof Popper.Utils
* @argument {Function} fn
* @returns {Function}
*/

var debounce = supportsMicroTasks ? microtaskDebounce : taskDebounce;
/**
 * Check if the given variable is a function
 * @method
 * @memberof Popper.Utils
 * @argument {Any} functionToCheck - variable to check
 * @returns {Boolean} answer to: is a function?
 */

function isFunction(functionToCheck) {
  var getType = {};
  return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
}
/**
 * Get CSS computed property of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Eement} element
 * @argument {String} property
 */


function getStyleComputedProperty(element, property) {
  if (element.nodeType !== 1) {
    return [];
  } // NOTE: 1 DOM access here


  var window = element.ownerDocument.defaultView;
  var css = window.getComputedStyle(element, null);
  return property ? css[property] : css;
}
/**
 * Returns the parentNode or the host of the element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} parent
 */


function getParentNode(element) {
  if (element.nodeName === 'HTML') {
    return element;
  }

  return element.parentNode || element.host;
}
/**
 * Returns the scrolling parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} scroll parent
 */


function getScrollParent(element) {
  // Return body, `getScroll` will take care to get the correct `scrollTop` from it
  if (!element) {
    return document.body;
  }

  switch (element.nodeName) {
    case 'HTML':
    case 'BODY':
      return element.ownerDocument.body;

    case '#document':
      return element.body;
  } // Firefox want us to check `-x` and `-y` variations as well


  var _getStyleComputedProp = getStyleComputedProperty(element),
      overflow = _getStyleComputedProp.overflow,
      overflowX = _getStyleComputedProp.overflowX,
      overflowY = _getStyleComputedProp.overflowY;

  if (/(auto|scroll|overlay)/.test(overflow + overflowY + overflowX)) {
    return element;
  }

  return getScrollParent(getParentNode(element));
}
/**
 * Returns the reference node of the reference object, or the reference object itself.
 * @method
 * @memberof Popper.Utils
 * @param {Element|Object} reference - the reference element (the popper will be relative to this)
 * @returns {Element} parent
 */


function getReferenceNode(reference) {
  return reference && reference.referenceNode ? reference.referenceNode : reference;
}

var isIE11 = isBrowser && !!(window.MSInputMethodContext && document.documentMode);
var isIE10 = isBrowser && /MSIE 10/.test(navigator.userAgent);
/**
 * Determines if the browser is Internet Explorer
 * @method
 * @memberof Popper.Utils
 * @param {Number} version to check
 * @returns {Boolean} isIE
 */

function isIE(version) {
  if (version === 11) {
    return isIE11;
  }

  if (version === 10) {
    return isIE10;
  }

  return isIE11 || isIE10;
}
/**
 * Returns the offset parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} offset parent
 */


function getOffsetParent(element) {
  if (!element) {
    return document.documentElement;
  }

  var noOffsetParent = isIE(10) ? document.body : null; // NOTE: 1 DOM access here

  var offsetParent = element.offsetParent || null; // Skip hidden elements which don't have an offsetParent

  while (offsetParent === noOffsetParent && element.nextElementSibling) {
    offsetParent = (element = element.nextElementSibling).offsetParent;
  }

  var nodeName = offsetParent && offsetParent.nodeName;

  if (!nodeName || nodeName === 'BODY' || nodeName === 'HTML') {
    return element ? element.ownerDocument.documentElement : document.documentElement;
  } // .offsetParent will return the closest TH, TD or TABLE in case
  // no offsetParent is present, I hate this job...


  if (['TH', 'TD', 'TABLE'].indexOf(offsetParent.nodeName) !== -1 && getStyleComputedProperty(offsetParent, 'position') === 'static') {
    return getOffsetParent(offsetParent);
  }

  return offsetParent;
}

function isOffsetContainer(element) {
  var nodeName = element.nodeName;

  if (nodeName === 'BODY') {
    return false;
  }

  return nodeName === 'HTML' || getOffsetParent(element.firstElementChild) === element;
}
/**
 * Finds the root node (document, shadowDOM root) of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} node
 * @returns {Element} root node
 */


function getRoot(node) {
  if (node.parentNode !== null) {
    return getRoot(node.parentNode);
  }

  return node;
}
/**
 * Finds the offset parent common to the two provided nodes
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element1
 * @argument {Element} element2
 * @returns {Element} common offset parent
 */


function findCommonOffsetParent(element1, element2) {
  // This check is needed to avoid errors in case one of the elements isn't defined for any reason
  if (!element1 || !element1.nodeType || !element2 || !element2.nodeType) {
    return document.documentElement;
  } // Here we make sure to give as "start" the element that comes first in the DOM


  var order = element1.compareDocumentPosition(element2) & Node.DOCUMENT_POSITION_FOLLOWING;
  var start = order ? element1 : element2;
  var end = order ? element2 : element1; // Get common ancestor container

  var range = document.createRange();
  range.setStart(start, 0);
  range.setEnd(end, 0);
  var commonAncestorContainer = range.commonAncestorContainer; // Both nodes are inside #document

  if (element1 !== commonAncestorContainer && element2 !== commonAncestorContainer || start.contains(end)) {
    if (isOffsetContainer(commonAncestorContainer)) {
      return commonAncestorContainer;
    }

    return getOffsetParent(commonAncestorContainer);
  } // one of the nodes is inside shadowDOM, find which one


  var element1root = getRoot(element1);

  if (element1root.host) {
    return findCommonOffsetParent(element1root.host, element2);
  } else {
    return findCommonOffsetParent(element1, getRoot(element2).host);
  }
}
/**
 * Gets the scroll value of the given element in the given side (top and left)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {String} side `top` or `left`
 * @returns {number} amount of scrolled pixels
 */


function getScroll(element) {
  var side = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'top';
  var upperSide = side === 'top' ? 'scrollTop' : 'scrollLeft';
  var nodeName = element.nodeName;

  if (nodeName === 'BODY' || nodeName === 'HTML') {
    var html = element.ownerDocument.documentElement;
    var scrollingElement = element.ownerDocument.scrollingElement || html;
    return scrollingElement[upperSide];
  }

  return element[upperSide];
}
/*
 * Sum or subtract the element scroll values (left and top) from a given rect object
 * @method
 * @memberof Popper.Utils
 * @param {Object} rect - Rect object you want to change
 * @param {HTMLElement} element - The element from the function reads the scroll values
 * @param {Boolean} subtract - set to true if you want to subtract the scroll values
 * @return {Object} rect - The modifier rect object
 */


function includeScroll(rect, element) {
  var subtract = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var scrollTop = getScroll(element, 'top');
  var scrollLeft = getScroll(element, 'left');
  var modifier = subtract ? -1 : 1;
  rect.top += scrollTop * modifier;
  rect.bottom += scrollTop * modifier;
  rect.left += scrollLeft * modifier;
  rect.right += scrollLeft * modifier;
  return rect;
}
/*
 * Helper to detect borders of a given element
 * @method
 * @memberof Popper.Utils
 * @param {CSSStyleDeclaration} styles
 * Result of `getStyleComputedProperty` on the given element
 * @param {String} axis - `x` or `y`
 * @return {number} borders - The borders size of the given axis
 */


function getBordersSize(styles, axis) {
  var sideA = axis === 'x' ? 'Left' : 'Top';
  var sideB = sideA === 'Left' ? 'Right' : 'Bottom';
  return parseFloat(styles['border' + sideA + 'Width'], 10) + parseFloat(styles['border' + sideB + 'Width'], 10);
}

function getSize(axis, body, html, computedStyle) {
  return Math.max(body['offset' + axis], body['scroll' + axis], html['client' + axis], html['offset' + axis], html['scroll' + axis], isIE(10) ? parseInt(html['offset' + axis]) + parseInt(computedStyle['margin' + (axis === 'Height' ? 'Top' : 'Left')]) + parseInt(computedStyle['margin' + (axis === 'Height' ? 'Bottom' : 'Right')]) : 0);
}

function getWindowSizes(document) {
  var body = document.body;
  var html = document.documentElement;
  var computedStyle = isIE(10) && getComputedStyle(html);
  return {
    height: getSize('Height', body, html, computedStyle),
    width: getSize('Width', body, html, computedStyle)
  };
}

var classCallCheck = function classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

var defineProperty = function defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};
/**
 * Given element offsets, generate an output similar to getBoundingClientRect
 * @method
 * @memberof Popper.Utils
 * @argument {Object} offsets
 * @returns {Object} ClientRect like output
 */


function getClientRect(offsets) {
  return _extends({}, offsets, {
    right: offsets.left + offsets.width,
    bottom: offsets.top + offsets.height
  });
}
/**
 * Get bounding client rect of given element
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} element
 * @return {Object} client rect
 */


function getBoundingClientRect(element) {
  var rect = {}; // IE10 10 FIX: Please, don't ask, the element isn't
  // considered in DOM in some circumstances...
  // This isn't reproducible in IE10 compatibility mode of IE11

  try {
    if (isIE(10)) {
      rect = element.getBoundingClientRect();
      var scrollTop = getScroll(element, 'top');
      var scrollLeft = getScroll(element, 'left');
      rect.top += scrollTop;
      rect.left += scrollLeft;
      rect.bottom += scrollTop;
      rect.right += scrollLeft;
    } else {
      rect = element.getBoundingClientRect();
    }
  } catch (e) {}

  var result = {
    left: rect.left,
    top: rect.top,
    width: rect.right - rect.left,
    height: rect.bottom - rect.top
  }; // subtract scrollbar size from sizes

  var sizes = element.nodeName === 'HTML' ? getWindowSizes(element.ownerDocument) : {};
  var width = sizes.width || element.clientWidth || result.width;
  var height = sizes.height || element.clientHeight || result.height;
  var horizScrollbar = element.offsetWidth - width;
  var vertScrollbar = element.offsetHeight - height; // if an hypothetical scrollbar is detected, we must be sure it's not a `border`
  // we make this check conditional for performance reasons

  if (horizScrollbar || vertScrollbar) {
    var styles = getStyleComputedProperty(element);
    horizScrollbar -= getBordersSize(styles, 'x');
    vertScrollbar -= getBordersSize(styles, 'y');
    result.width -= horizScrollbar;
    result.height -= vertScrollbar;
  }

  return getClientRect(result);
}

function getOffsetRectRelativeToArbitraryNode(children, parent) {
  var fixedPosition = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var isIE10 = isIE(10);
  var isHTML = parent.nodeName === 'HTML';
  var childrenRect = getBoundingClientRect(children);
  var parentRect = getBoundingClientRect(parent);
  var scrollParent = getScrollParent(children);
  var styles = getStyleComputedProperty(parent);
  var borderTopWidth = parseFloat(styles.borderTopWidth, 10);
  var borderLeftWidth = parseFloat(styles.borderLeftWidth, 10); // In cases where the parent is fixed, we must ignore negative scroll in offset calc

  if (fixedPosition && isHTML) {
    parentRect.top = Math.max(parentRect.top, 0);
    parentRect.left = Math.max(parentRect.left, 0);
  }

  var offsets = getClientRect({
    top: childrenRect.top - parentRect.top - borderTopWidth,
    left: childrenRect.left - parentRect.left - borderLeftWidth,
    width: childrenRect.width,
    height: childrenRect.height
  });
  offsets.marginTop = 0;
  offsets.marginLeft = 0; // Subtract margins of documentElement in case it's being used as parent
  // we do this only on HTML because it's the only element that behaves
  // differently when margins are applied to it. The margins are included in
  // the box of the documentElement, in the other cases not.

  if (!isIE10 && isHTML) {
    var marginTop = parseFloat(styles.marginTop, 10);
    var marginLeft = parseFloat(styles.marginLeft, 10);
    offsets.top -= borderTopWidth - marginTop;
    offsets.bottom -= borderTopWidth - marginTop;
    offsets.left -= borderLeftWidth - marginLeft;
    offsets.right -= borderLeftWidth - marginLeft; // Attach marginTop and marginLeft because in some circumstances we may need them

    offsets.marginTop = marginTop;
    offsets.marginLeft = marginLeft;
  }

  if (isIE10 && !fixedPosition ? parent.contains(scrollParent) : parent === scrollParent && scrollParent.nodeName !== 'BODY') {
    offsets = includeScroll(offsets, parent);
  }

  return offsets;
}

function getViewportOffsetRectRelativeToArtbitraryNode(element) {
  var excludeScroll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var html = element.ownerDocument.documentElement;
  var relativeOffset = getOffsetRectRelativeToArbitraryNode(element, html);
  var width = Math.max(html.clientWidth, window.innerWidth || 0);
  var height = Math.max(html.clientHeight, window.innerHeight || 0);
  var scrollTop = !excludeScroll ? getScroll(html) : 0;
  var scrollLeft = !excludeScroll ? getScroll(html, 'left') : 0;
  var offset = {
    top: scrollTop - relativeOffset.top + relativeOffset.marginTop,
    left: scrollLeft - relativeOffset.left + relativeOffset.marginLeft,
    width: width,
    height: height
  };
  return getClientRect(offset);
}
/**
 * Check if the given element is fixed or is inside a fixed parent
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {Element} customContainer
 * @returns {Boolean} answer to "isFixed?"
 */


function isFixed(element) {
  var nodeName = element.nodeName;

  if (nodeName === 'BODY' || nodeName === 'HTML') {
    return false;
  }

  if (getStyleComputedProperty(element, 'position') === 'fixed') {
    return true;
  }

  var parentNode = getParentNode(element);

  if (!parentNode) {
    return false;
  }

  return isFixed(parentNode);
}
/**
 * Finds the first parent of an element that has a transformed property defined
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} first transformed parent or documentElement
 */


function getFixedPositionOffsetParent(element) {
  // This check is needed to avoid errors in case one of the elements isn't defined for any reason
  if (!element || !element.parentElement || isIE()) {
    return document.documentElement;
  }

  var el = element.parentElement;

  while (el && getStyleComputedProperty(el, 'transform') === 'none') {
    el = el.parentElement;
  }

  return el || document.documentElement;
}
/**
 * Computed the boundaries limits and return them
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} popper
 * @param {HTMLElement} reference
 * @param {number} padding
 * @param {HTMLElement} boundariesElement - Element used to define the boundaries
 * @param {Boolean} fixedPosition - Is in fixed position mode
 * @returns {Object} Coordinates of the boundaries
 */


function getBoundaries(popper, reference, padding, boundariesElement) {
  var fixedPosition = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false; // NOTE: 1 DOM access here

  var boundaries = {
    top: 0,
    left: 0
  };
  var offsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, getReferenceNode(reference)); // Handle viewport case

  if (boundariesElement === 'viewport') {
    boundaries = getViewportOffsetRectRelativeToArtbitraryNode(offsetParent, fixedPosition);
  } else {
    // Handle other cases based on DOM element used as boundaries
    var boundariesNode = void 0;

    if (boundariesElement === 'scrollParent') {
      boundariesNode = getScrollParent(getParentNode(reference));

      if (boundariesNode.nodeName === 'BODY') {
        boundariesNode = popper.ownerDocument.documentElement;
      }
    } else if (boundariesElement === 'window') {
      boundariesNode = popper.ownerDocument.documentElement;
    } else {
      boundariesNode = boundariesElement;
    }

    var offsets = getOffsetRectRelativeToArbitraryNode(boundariesNode, offsetParent, fixedPosition); // In case of HTML, we need a different computation

    if (boundariesNode.nodeName === 'HTML' && !isFixed(offsetParent)) {
      var _getWindowSizes = getWindowSizes(popper.ownerDocument),
          height = _getWindowSizes.height,
          width = _getWindowSizes.width;

      boundaries.top += offsets.top - offsets.marginTop;
      boundaries.bottom = height + offsets.top;
      boundaries.left += offsets.left - offsets.marginLeft;
      boundaries.right = width + offsets.left;
    } else {
      // for all the other DOM elements, this one is good
      boundaries = offsets;
    }
  } // Add paddings


  padding = padding || 0;
  var isPaddingNumber = typeof padding === 'number';
  boundaries.left += isPaddingNumber ? padding : padding.left || 0;
  boundaries.top += isPaddingNumber ? padding : padding.top || 0;
  boundaries.right -= isPaddingNumber ? padding : padding.right || 0;
  boundaries.bottom -= isPaddingNumber ? padding : padding.bottom || 0;
  return boundaries;
}

function getArea(_ref) {
  var width = _ref.width,
      height = _ref.height;
  return width * height;
}
/**
 * Utility used to transform the `auto` placement to the placement with more
 * available space.
 * @method
 * @memberof Popper.Utils
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */


function computeAutoPlacement(placement, refRect, popper, reference, boundariesElement) {
  var padding = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;

  if (placement.indexOf('auto') === -1) {
    return placement;
  }

  var boundaries = getBoundaries(popper, reference, padding, boundariesElement);
  var rects = {
    top: {
      width: boundaries.width,
      height: refRect.top - boundaries.top
    },
    right: {
      width: boundaries.right - refRect.right,
      height: boundaries.height
    },
    bottom: {
      width: boundaries.width,
      height: boundaries.bottom - refRect.bottom
    },
    left: {
      width: refRect.left - boundaries.left,
      height: boundaries.height
    }
  };
  var sortedAreas = Object.keys(rects).map(function (key) {
    return _extends({
      key: key
    }, rects[key], {
      area: getArea(rects[key])
    });
  }).sort(function (a, b) {
    return b.area - a.area;
  });
  var filteredAreas = sortedAreas.filter(function (_ref2) {
    var width = _ref2.width,
        height = _ref2.height;
    return width >= popper.clientWidth && height >= popper.clientHeight;
  });
  var computedPlacement = filteredAreas.length > 0 ? filteredAreas[0].key : sortedAreas[0].key;
  var variation = placement.split('-')[1];
  return computedPlacement + (variation ? '-' + variation : '');
}
/**
 * Get offsets to the reference element
 * @method
 * @memberof Popper.Utils
 * @param {Object} state
 * @param {Element} popper - the popper element
 * @param {Element} reference - the reference element (the popper will be relative to this)
 * @param {Element} fixedPosition - is in fixed position mode
 * @returns {Object} An object containing the offsets which will be applied to the popper
 */


function getReferenceOffsets(state, popper, reference) {
  var fixedPosition = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
  var commonOffsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, getReferenceNode(reference));
  return getOffsetRectRelativeToArbitraryNode(reference, commonOffsetParent, fixedPosition);
}
/**
 * Get the outer sizes of the given element (offset size + margins)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Object} object containing width and height properties
 */


function getOuterSizes(element) {
  var window = element.ownerDocument.defaultView;
  var styles = window.getComputedStyle(element);
  var x = parseFloat(styles.marginTop || 0) + parseFloat(styles.marginBottom || 0);
  var y = parseFloat(styles.marginLeft || 0) + parseFloat(styles.marginRight || 0);
  var result = {
    width: element.offsetWidth + y,
    height: element.offsetHeight + x
  };
  return result;
}
/**
 * Get the opposite placement of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement
 * @returns {String} flipped placement
 */


function getOppositePlacement(placement) {
  var hash = {
    left: 'right',
    right: 'left',
    bottom: 'top',
    top: 'bottom'
  };
  return placement.replace(/left|right|bottom|top/g, function (matched) {
    return hash[matched];
  });
}
/**
 * Get offsets to the popper
 * @method
 * @memberof Popper.Utils
 * @param {Object} position - CSS position the Popper will get applied
 * @param {HTMLElement} popper - the popper element
 * @param {Object} referenceOffsets - the reference offsets (the popper will be relative to this)
 * @param {String} placement - one of the valid placement options
 * @returns {Object} popperOffsets - An object containing the offsets which will be applied to the popper
 */


function getPopperOffsets(popper, referenceOffsets, placement) {
  placement = placement.split('-')[0]; // Get popper node sizes

  var popperRect = getOuterSizes(popper); // Add position, width and height to our offsets object

  var popperOffsets = {
    width: popperRect.width,
    height: popperRect.height
  }; // depending by the popper placement we have to compute its offsets slightly differently

  var isHoriz = ['right', 'left'].indexOf(placement) !== -1;
  var mainSide = isHoriz ? 'top' : 'left';
  var secondarySide = isHoriz ? 'left' : 'top';
  var measurement = isHoriz ? 'height' : 'width';
  var secondaryMeasurement = !isHoriz ? 'height' : 'width';
  popperOffsets[mainSide] = referenceOffsets[mainSide] + referenceOffsets[measurement] / 2 - popperRect[measurement] / 2;

  if (placement === secondarySide) {
    popperOffsets[secondarySide] = referenceOffsets[secondarySide] - popperRect[secondaryMeasurement];
  } else {
    popperOffsets[secondarySide] = referenceOffsets[getOppositePlacement(secondarySide)];
  }

  return popperOffsets;
}
/**
 * Mimics the `find` method of Array
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */


function find(arr, check) {
  // use native find if supported
  if (Array.prototype.find) {
    return arr.find(check);
  } // use `filter` to obtain the same behavior of `find`


  return arr.filter(check)[0];
}
/**
 * Return the index of the matching object
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */


function findIndex(arr, prop, value) {
  // use native findIndex if supported
  if (Array.prototype.findIndex) {
    return arr.findIndex(function (cur) {
      return cur[prop] === value;
    });
  } // use `find` + `indexOf` if `findIndex` isn't supported


  var match = find(arr, function (obj) {
    return obj[prop] === value;
  });
  return arr.indexOf(match);
}
/**
 * Loop trough the list of modifiers and run them in order,
 * each of them will then edit the data object.
 * @method
 * @memberof Popper.Utils
 * @param {dataObject} data
 * @param {Array} modifiers
 * @param {String} ends - Optional modifier name used as stopper
 * @returns {dataObject}
 */


function runModifiers(modifiers, data, ends) {
  var modifiersToRun = ends === undefined ? modifiers : modifiers.slice(0, findIndex(modifiers, 'name', ends));
  modifiersToRun.forEach(function (modifier) {
    if (modifier['function']) {
      // eslint-disable-line dot-notation
      console.warn('`modifier.function` is deprecated, use `modifier.fn`!');
    }

    var fn = modifier['function'] || modifier.fn; // eslint-disable-line dot-notation

    if (modifier.enabled && isFunction(fn)) {
      // Add properties to offsets to make them a complete clientRect object
      // we do this before each modifier to make sure the previous one doesn't
      // mess with these values
      data.offsets.popper = getClientRect(data.offsets.popper);
      data.offsets.reference = getClientRect(data.offsets.reference);
      data = fn(data, modifier);
    }
  });
  return data;
}
/**
 * Updates the position of the popper, computing the new offsets and applying
 * the new style.<br />
 * Prefer `scheduleUpdate` over `update` because of performance reasons.
 * @method
 * @memberof Popper
 */


function update() {
  // if popper is destroyed, don't perform any further update
  if (this.state.isDestroyed) {
    return;
  }

  var data = {
    instance: this,
    styles: {},
    arrowStyles: {},
    attributes: {},
    flipped: false,
    offsets: {}
  }; // compute reference element offsets

  data.offsets.reference = getReferenceOffsets(this.state, this.popper, this.reference, this.options.positionFixed); // compute auto placement, store placement inside the data object,
  // modifiers will be able to edit `placement` if needed
  // and refer to originalPlacement to know the original value

  data.placement = computeAutoPlacement(this.options.placement, data.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding); // store the computed placement inside `originalPlacement`

  data.originalPlacement = data.placement;
  data.positionFixed = this.options.positionFixed; // compute the popper offsets

  data.offsets.popper = getPopperOffsets(this.popper, data.offsets.reference, data.placement);
  data.offsets.popper.position = this.options.positionFixed ? 'fixed' : 'absolute'; // run the modifiers

  data = runModifiers(this.modifiers, data); // the first `update` will call `onCreate` callback
  // the other ones will call `onUpdate` callback

  if (!this.state.isCreated) {
    this.state.isCreated = true;
    this.options.onCreate(data);
  } else {
    this.options.onUpdate(data);
  }
}
/**
 * Helper used to know if the given modifier is enabled.
 * @method
 * @memberof Popper.Utils
 * @returns {Boolean}
 */


function isModifierEnabled(modifiers, modifierName) {
  return modifiers.some(function (_ref) {
    var name = _ref.name,
        enabled = _ref.enabled;
    return enabled && name === modifierName;
  });
}
/**
 * Get the prefixed supported property name
 * @method
 * @memberof Popper.Utils
 * @argument {String} property (camelCase)
 * @returns {String} prefixed property (camelCase or PascalCase, depending on the vendor prefix)
 */


function getSupportedPropertyName(property) {
  var prefixes = [false, 'ms', 'Webkit', 'Moz', 'O'];
  var upperProp = property.charAt(0).toUpperCase() + property.slice(1);

  for (var i = 0; i < prefixes.length; i++) {
    var prefix = prefixes[i];
    var toCheck = prefix ? '' + prefix + upperProp : property;

    if (typeof document.body.style[toCheck] !== 'undefined') {
      return toCheck;
    }
  }

  return null;
}
/**
 * Destroys the popper.
 * @method
 * @memberof Popper
 */


function destroy() {
  this.state.isDestroyed = true; // touch DOM only if `applyStyle` modifier is enabled

  if (isModifierEnabled(this.modifiers, 'applyStyle')) {
    this.popper.removeAttribute('x-placement');
    this.popper.style.position = '';
    this.popper.style.top = '';
    this.popper.style.left = '';
    this.popper.style.right = '';
    this.popper.style.bottom = '';
    this.popper.style.willChange = '';
    this.popper.style[getSupportedPropertyName('transform')] = '';
  }

  this.disableEventListeners(); // remove the popper if user explicitly asked for the deletion on destroy
  // do not use `remove` because IE11 doesn't support it

  if (this.options.removeOnDestroy) {
    this.popper.parentNode.removeChild(this.popper);
  }

  return this;
}
/**
 * Get the window associated with the element
 * @argument {Element} element
 * @returns {Window}
 */


function getWindow(element) {
  var ownerDocument = element.ownerDocument;
  return ownerDocument ? ownerDocument.defaultView : window;
}

function attachToScrollParents(scrollParent, event, callback, scrollParents) {
  var isBody = scrollParent.nodeName === 'BODY';
  var target = isBody ? scrollParent.ownerDocument.defaultView : scrollParent;
  target.addEventListener(event, callback, {
    passive: true
  });

  if (!isBody) {
    attachToScrollParents(getScrollParent(target.parentNode), event, callback, scrollParents);
  }

  scrollParents.push(target);
}
/**
 * Setup needed event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */


function setupEventListeners(reference, options, state, updateBound) {
  // Resize event listener on window
  state.updateBound = updateBound;
  getWindow(reference).addEventListener('resize', state.updateBound, {
    passive: true
  }); // Scroll event listener on scroll parents

  var scrollElement = getScrollParent(reference);
  attachToScrollParents(scrollElement, 'scroll', state.updateBound, state.scrollParents);
  state.scrollElement = scrollElement;
  state.eventsEnabled = true;
  return state;
}
/**
 * It will add resize/scroll events and start recalculating
 * position of the popper element when they are triggered.
 * @method
 * @memberof Popper
 */


function enableEventListeners() {
  if (!this.state.eventsEnabled) {
    this.state = setupEventListeners(this.reference, this.options, this.state, this.scheduleUpdate);
  }
}
/**
 * Remove event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */


function removeEventListeners(reference, state) {
  // Remove resize event listener on window
  getWindow(reference).removeEventListener('resize', state.updateBound); // Remove scroll event listener on scroll parents

  state.scrollParents.forEach(function (target) {
    target.removeEventListener('scroll', state.updateBound);
  }); // Reset state

  state.updateBound = null;
  state.scrollParents = [];
  state.scrollElement = null;
  state.eventsEnabled = false;
  return state;
}
/**
 * It will remove resize/scroll events and won't recalculate popper position
 * when they are triggered. It also won't trigger `onUpdate` callback anymore,
 * unless you call `update` method manually.
 * @method
 * @memberof Popper
 */


function disableEventListeners() {
  if (this.state.eventsEnabled) {
    cancelAnimationFrame(this.scheduleUpdate);
    this.state = removeEventListeners(this.reference, this.state);
  }
}
/**
 * Tells if a given input is a number
 * @method
 * @memberof Popper.Utils
 * @param {*} input to check
 * @return {Boolean}
 */


function isNumeric(n) {
  return n !== '' && !isNaN(parseFloat(n)) && isFinite(n);
}
/**
 * Set the style to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the style to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */


function setStyles(element, styles) {
  Object.keys(styles).forEach(function (prop) {
    var unit = ''; // add unit if the value is numeric and is one of the following

    if (['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(prop) !== -1 && isNumeric(styles[prop])) {
      unit = 'px';
    }

    element.style[prop] = styles[prop] + unit;
  });
}
/**
 * Set the attributes to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the attributes to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */


function setAttributes(element, attributes) {
  Object.keys(attributes).forEach(function (prop) {
    var value = attributes[prop];

    if (value !== false) {
      element.setAttribute(prop, attributes[prop]);
    } else {
      element.removeAttribute(prop);
    }
  });
}
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} data.styles - List of style properties - values to apply to popper element
 * @argument {Object} data.attributes - List of attribute properties - values to apply to popper element
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The same data object
 */


function applyStyle(data) {
  // any property present in `data.styles` will be applied to the popper,
  // in this way we can make the 3rd party modifiers add custom styles to it
  // Be aware, modifiers could override the properties defined in the previous
  // lines of this modifier!
  setStyles(data.instance.popper, data.styles); // any property present in `data.attributes` will be applied to the popper,
  // they will be set as HTML attributes of the element

  setAttributes(data.instance.popper, data.attributes); // if arrowElement is defined and arrowStyles has some properties

  if (data.arrowElement && Object.keys(data.arrowStyles).length) {
    setStyles(data.arrowElement, data.arrowStyles);
  }

  return data;
}
/**
 * Set the x-placement attribute before everything else because it could be used
 * to add margins to the popper margins needs to be calculated to get the
 * correct popper offsets.
 * @method
 * @memberof Popper.modifiers
 * @param {HTMLElement} reference - The reference element used to position the popper
 * @param {HTMLElement} popper - The HTML element used as popper
 * @param {Object} options - Popper.js options
 */


function applyStyleOnLoad(reference, popper, options, modifierOptions, state) {
  // compute reference element offsets
  var referenceOffsets = getReferenceOffsets(state, popper, reference, options.positionFixed); // compute auto placement, store placement inside the data object,
  // modifiers will be able to edit `placement` if needed
  // and refer to originalPlacement to know the original value

  var placement = computeAutoPlacement(options.placement, referenceOffsets, popper, reference, options.modifiers.flip.boundariesElement, options.modifiers.flip.padding);
  popper.setAttribute('x-placement', placement); // Apply `position` to popper before anything else because
  // without the position applied we can't guarantee correct computations

  setStyles(popper, {
    position: options.positionFixed ? 'fixed' : 'absolute'
  });
  return options;
}
/**
 * @function
 * @memberof Popper.Utils
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Boolean} shouldRound - If the offsets should be rounded at all
 * @returns {Object} The popper's position offsets rounded
 *
 * The tale of pixel-perfect positioning. It's still not 100% perfect, but as
 * good as it can be within reason.
 * Discussion here: https://github.com/FezVrasta/popper.js/pull/715
 *
 * Low DPI screens cause a popper to be blurry if not using full pixels (Safari
 * as well on High DPI screens).
 *
 * Firefox prefers no rounding for positioning and does not have blurriness on
 * high DPI screens.
 *
 * Only horizontal placement and left/right values need to be considered.
 */


function getRoundedOffsets(data, shouldRound) {
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;
  var round = Math.round,
      floor = Math.floor;

  var noRound = function noRound(v) {
    return v;
  };

  var referenceWidth = round(reference.width);
  var popperWidth = round(popper.width);
  var isVertical = ['left', 'right'].indexOf(data.placement) !== -1;
  var isVariation = data.placement.indexOf('-') !== -1;
  var sameWidthParity = referenceWidth % 2 === popperWidth % 2;
  var bothOddWidth = referenceWidth % 2 === 1 && popperWidth % 2 === 1;
  var horizontalToInteger = !shouldRound ? noRound : isVertical || isVariation || sameWidthParity ? round : floor;
  var verticalToInteger = !shouldRound ? noRound : round;
  return {
    left: horizontalToInteger(bothOddWidth && !isVariation && shouldRound ? popper.left - 1 : popper.left),
    top: verticalToInteger(popper.top),
    bottom: verticalToInteger(popper.bottom),
    right: horizontalToInteger(popper.right)
  };
}

var isFirefox = isBrowser && /Firefox/i.test(navigator.userAgent);
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */

function computeStyle(data, options) {
  var x = options.x,
      y = options.y;
  var popper = data.offsets.popper; // Remove this legacy support in Popper.js v2

  var legacyGpuAccelerationOption = find(data.instance.modifiers, function (modifier) {
    return modifier.name === 'applyStyle';
  }).gpuAcceleration;

  if (legacyGpuAccelerationOption !== undefined) {
    console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');
  }

  var gpuAcceleration = legacyGpuAccelerationOption !== undefined ? legacyGpuAccelerationOption : options.gpuAcceleration;
  var offsetParent = getOffsetParent(data.instance.popper);
  var offsetParentRect = getBoundingClientRect(offsetParent); // Styles

  var styles = {
    position: popper.position
  };
  var offsets = getRoundedOffsets(data, window.devicePixelRatio < 2 || !isFirefox);
  var sideA = x === 'bottom' ? 'top' : 'bottom';
  var sideB = y === 'right' ? 'left' : 'right'; // if gpuAcceleration is set to `true` and transform is supported,
  //  we use `translate3d` to apply the position to the popper we
  // automatically use the supported prefixed version if needed

  var prefixedProperty = getSupportedPropertyName('transform'); // now, let's make a step back and look at this code closely (wtf?)
  // If the content of the popper grows once it's been positioned, it
  // may happen that the popper gets misplaced because of the new content
  // overflowing its reference element
  // To avoid this problem, we provide two options (x and y), which allow
  // the consumer to define the offset origin.
  // If we position a popper on top of a reference element, we can set
  // `x` to `top` to make the popper grow towards its top instead of
  // its bottom.

  var left = void 0,
      top = void 0;

  if (sideA === 'bottom') {
    // when offsetParent is <html> the positioning is relative to the bottom of the screen (excluding the scrollbar)
    // and not the bottom of the html element
    if (offsetParent.nodeName === 'HTML') {
      top = -offsetParent.clientHeight + offsets.bottom;
    } else {
      top = -offsetParentRect.height + offsets.bottom;
    }
  } else {
    top = offsets.top;
  }

  if (sideB === 'right') {
    if (offsetParent.nodeName === 'HTML') {
      left = -offsetParent.clientWidth + offsets.right;
    } else {
      left = -offsetParentRect.width + offsets.right;
    }
  } else {
    left = offsets.left;
  }

  if (gpuAcceleration && prefixedProperty) {
    styles[prefixedProperty] = 'translate3d(' + left + 'px, ' + top + 'px, 0)';
    styles[sideA] = 0;
    styles[sideB] = 0;
    styles.willChange = 'transform';
  } else {
    // othwerise, we use the standard `top`, `left`, `bottom` and `right` properties
    var invertTop = sideA === 'bottom' ? -1 : 1;
    var invertLeft = sideB === 'right' ? -1 : 1;
    styles[sideA] = top * invertTop;
    styles[sideB] = left * invertLeft;
    styles.willChange = sideA + ', ' + sideB;
  } // Attributes


  var attributes = {
    'x-placement': data.placement
  }; // Update `data` attributes, styles and arrowStyles

  data.attributes = _extends({}, attributes, data.attributes);
  data.styles = _extends({}, styles, data.styles);
  data.arrowStyles = _extends({}, data.offsets.arrow, data.arrowStyles);
  return data;
}
/**
 * Helper used to know if the given modifier depends from another one.<br />
 * It checks if the needed modifier is listed and enabled.
 * @method
 * @memberof Popper.Utils
 * @param {Array} modifiers - list of modifiers
 * @param {String} requestingName - name of requesting modifier
 * @param {String} requestedName - name of requested modifier
 * @returns {Boolean}
 */


function isModifierRequired(modifiers, requestingName, requestedName) {
  var requesting = find(modifiers, function (_ref) {
    var name = _ref.name;
    return name === requestingName;
  });
  var isRequired = !!requesting && modifiers.some(function (modifier) {
    return modifier.name === requestedName && modifier.enabled && modifier.order < requesting.order;
  });

  if (!isRequired) {
    var _requesting = '`' + requestingName + '`';

    var requested = '`' + requestedName + '`';
    console.warn(requested + ' modifier is required by ' + _requesting + ' modifier in order to work, be sure to include it before ' + _requesting + '!');
  }

  return isRequired;
}
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */


function arrow(data, options) {
  var _data$offsets$arrow; // arrow depends on keepTogether in order to work


  if (!isModifierRequired(data.instance.modifiers, 'arrow', 'keepTogether')) {
    return data;
  }

  var arrowElement = options.element; // if arrowElement is a string, suppose it's a CSS selector

  if (typeof arrowElement === 'string') {
    arrowElement = data.instance.popper.querySelector(arrowElement); // if arrowElement is not found, don't run the modifier

    if (!arrowElement) {
      return data;
    }
  } else {
    // if the arrowElement isn't a query selector we must check that the
    // provided DOM node is child of its popper node
    if (!data.instance.popper.contains(arrowElement)) {
      console.warn('WARNING: `arrow.element` must be child of its popper element!');
      return data;
    }
  }

  var placement = data.placement.split('-')[0];
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;
  var isVertical = ['left', 'right'].indexOf(placement) !== -1;
  var len = isVertical ? 'height' : 'width';
  var sideCapitalized = isVertical ? 'Top' : 'Left';
  var side = sideCapitalized.toLowerCase();
  var altSide = isVertical ? 'left' : 'top';
  var opSide = isVertical ? 'bottom' : 'right';
  var arrowElementSize = getOuterSizes(arrowElement)[len]; //
  // extends keepTogether behavior making sure the popper and its
  // reference have enough pixels in conjunction
  //
  // top/left side

  if (reference[opSide] - arrowElementSize < popper[side]) {
    data.offsets.popper[side] -= popper[side] - (reference[opSide] - arrowElementSize);
  } // bottom/right side


  if (reference[side] + arrowElementSize > popper[opSide]) {
    data.offsets.popper[side] += reference[side] + arrowElementSize - popper[opSide];
  }

  data.offsets.popper = getClientRect(data.offsets.popper); // compute center of the popper

  var center = reference[side] + reference[len] / 2 - arrowElementSize / 2; // Compute the sideValue using the updated popper offsets
  // take popper margin in account because we don't have this info available

  var css = getStyleComputedProperty(data.instance.popper);
  var popperMarginSide = parseFloat(css['margin' + sideCapitalized], 10);
  var popperBorderSide = parseFloat(css['border' + sideCapitalized + 'Width'], 10);
  var sideValue = center - data.offsets.popper[side] - popperMarginSide - popperBorderSide; // prevent arrowElement from being placed not contiguously to its popper

  sideValue = Math.max(Math.min(popper[len] - arrowElementSize, sideValue), 0);
  data.arrowElement = arrowElement;
  data.offsets.arrow = (_data$offsets$arrow = {}, defineProperty(_data$offsets$arrow, side, Math.round(sideValue)), defineProperty(_data$offsets$arrow, altSide, ''), _data$offsets$arrow);
  return data;
}
/**
 * Get the opposite placement variation of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement variation
 * @returns {String} flipped placement variation
 */


function getOppositeVariation(variation) {
  if (variation === 'end') {
    return 'start';
  } else if (variation === 'start') {
    return 'end';
  }

  return variation;
}
/**
 * List of accepted placements to use as values of the `placement` option.<br />
 * Valid placements are:
 * - `auto`
 * - `top`
 * - `right`
 * - `bottom`
 * - `left`
 *
 * Each placement can have a variation from this list:
 * - `-start`
 * - `-end`
 *
 * Variations are interpreted easily if you think of them as the left to right
 * written languages. Horizontally (`top` and `bottom`), `start` is left and `end`
 * is right.<br />
 * Vertically (`left` and `right`), `start` is top and `end` is bottom.
 *
 * Some valid examples are:
 * - `top-end` (on top of reference, right aligned)
 * - `right-start` (on right of reference, top aligned)
 * - `bottom` (on bottom, centered)
 * - `auto-end` (on the side with more space available, alignment depends by placement)
 *
 * @static
 * @type {Array}
 * @enum {String}
 * @readonly
 * @method placements
 * @memberof Popper
 */


var placements = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start']; // Get rid of `auto` `auto-start` and `auto-end`

var validPlacements = placements.slice(3);
/**
 * Given an initial placement, returns all the subsequent placements
 * clockwise (or counter-clockwise).
 *
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement - A valid placement (it accepts variations)
 * @argument {Boolean} counter - Set to true to walk the placements counterclockwise
 * @returns {Array} placements including their variations
 */

function clockwise(placement) {
  var counter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var index = validPlacements.indexOf(placement);
  var arr = validPlacements.slice(index + 1).concat(validPlacements.slice(0, index));
  return counter ? arr.reverse() : arr;
}

var BEHAVIORS = {
  FLIP: 'flip',
  CLOCKWISE: 'clockwise',
  COUNTERCLOCKWISE: 'counterclockwise'
};
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */

function flip(data, options) {
  // if `inner` modifier is enabled, we can't use the `flip` modifier
  if (isModifierEnabled(data.instance.modifiers, 'inner')) {
    return data;
  }

  if (data.flipped && data.placement === data.originalPlacement) {
    // seems like flip is trying to loop, probably there's not enough space on any of the flippable sides
    return data;
  }

  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, options.boundariesElement, data.positionFixed);
  var placement = data.placement.split('-')[0];
  var placementOpposite = getOppositePlacement(placement);
  var variation = data.placement.split('-')[1] || '';
  var flipOrder = [];

  switch (options.behavior) {
    case BEHAVIORS.FLIP:
      flipOrder = [placement, placementOpposite];
      break;

    case BEHAVIORS.CLOCKWISE:
      flipOrder = clockwise(placement);
      break;

    case BEHAVIORS.COUNTERCLOCKWISE:
      flipOrder = clockwise(placement, true);
      break;

    default:
      flipOrder = options.behavior;
  }

  flipOrder.forEach(function (step, index) {
    if (placement !== step || flipOrder.length === index + 1) {
      return data;
    }

    placement = data.placement.split('-')[0];
    placementOpposite = getOppositePlacement(placement);
    var popperOffsets = data.offsets.popper;
    var refOffsets = data.offsets.reference; // using floor because the reference offsets may contain decimals we are not going to consider here

    var floor = Math.floor;
    var overlapsRef = placement === 'left' && floor(popperOffsets.right) > floor(refOffsets.left) || placement === 'right' && floor(popperOffsets.left) < floor(refOffsets.right) || placement === 'top' && floor(popperOffsets.bottom) > floor(refOffsets.top) || placement === 'bottom' && floor(popperOffsets.top) < floor(refOffsets.bottom);
    var overflowsLeft = floor(popperOffsets.left) < floor(boundaries.left);
    var overflowsRight = floor(popperOffsets.right) > floor(boundaries.right);
    var overflowsTop = floor(popperOffsets.top) < floor(boundaries.top);
    var overflowsBottom = floor(popperOffsets.bottom) > floor(boundaries.bottom);
    var overflowsBoundaries = placement === 'left' && overflowsLeft || placement === 'right' && overflowsRight || placement === 'top' && overflowsTop || placement === 'bottom' && overflowsBottom; // flip the variation if required

    var isVertical = ['top', 'bottom'].indexOf(placement) !== -1; // flips variation if reference element overflows boundaries

    var flippedVariationByRef = !!options.flipVariations && (isVertical && variation === 'start' && overflowsLeft || isVertical && variation === 'end' && overflowsRight || !isVertical && variation === 'start' && overflowsTop || !isVertical && variation === 'end' && overflowsBottom); // flips variation if popper content overflows boundaries

    var flippedVariationByContent = !!options.flipVariationsByContent && (isVertical && variation === 'start' && overflowsRight || isVertical && variation === 'end' && overflowsLeft || !isVertical && variation === 'start' && overflowsBottom || !isVertical && variation === 'end' && overflowsTop);
    var flippedVariation = flippedVariationByRef || flippedVariationByContent;

    if (overlapsRef || overflowsBoundaries || flippedVariation) {
      // this boolean to detect any flip loop
      data.flipped = true;

      if (overlapsRef || overflowsBoundaries) {
        placement = flipOrder[index + 1];
      }

      if (flippedVariation) {
        variation = getOppositeVariation(variation);
      }

      data.placement = placement + (variation ? '-' + variation : ''); // this object contains `position`, we want to preserve it along with
      // any additional property we may add in the future

      data.offsets.popper = _extends({}, data.offsets.popper, getPopperOffsets(data.instance.popper, data.offsets.reference, data.placement));
      data = runModifiers(data.instance.modifiers, data, 'flip');
    }
  });
  return data;
}
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */


function keepTogether(data) {
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;
  var placement = data.placement.split('-')[0];
  var floor = Math.floor;
  var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
  var side = isVertical ? 'right' : 'bottom';
  var opSide = isVertical ? 'left' : 'top';
  var measurement = isVertical ? 'width' : 'height';

  if (popper[side] < floor(reference[opSide])) {
    data.offsets.popper[opSide] = floor(reference[opSide]) - popper[measurement];
  }

  if (popper[opSide] > floor(reference[side])) {
    data.offsets.popper[opSide] = floor(reference[side]);
  }

  return data;
}
/**
 * Converts a string containing value + unit into a px value number
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} str - Value + unit string
 * @argument {String} measurement - `height` or `width`
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @returns {Number|String}
 * Value in pixels, or original string if no values were extracted
 */


function toValue(str, measurement, popperOffsets, referenceOffsets) {
  // separate value from unit
  var split = str.match(/((?:\-|\+)?\d*\.?\d*)(.*)/);
  var value = +split[1];
  var unit = split[2]; // If it's not a number it's an operator, I guess

  if (!value) {
    return str;
  }

  if (unit.indexOf('%') === 0) {
    var element = void 0;

    switch (unit) {
      case '%p':
        element = popperOffsets;
        break;

      case '%':
      case '%r':
      default:
        element = referenceOffsets;
    }

    var rect = getClientRect(element);
    return rect[measurement] / 100 * value;
  } else if (unit === 'vh' || unit === 'vw') {
    // if is a vh or vw, we calculate the size based on the viewport
    var size = void 0;

    if (unit === 'vh') {
      size = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    } else {
      size = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    }

    return size / 100 * value;
  } else {
    // if is an explicit pixel unit, we get rid of the unit and keep the value
    // if is an implicit unit, it's px, and we return just the value
    return value;
  }
}
/**
 * Parse an `offset` string to extrapolate `x` and `y` numeric offsets.
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} offset
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @argument {String} basePlacement
 * @returns {Array} a two cells array with x and y offsets in numbers
 */


function parseOffset(offset, popperOffsets, referenceOffsets, basePlacement) {
  var offsets = [0, 0]; // Use height if placement is left or right and index is 0 otherwise use width
  // in this way the first offset will use an axis and the second one
  // will use the other one

  var useHeight = ['right', 'left'].indexOf(basePlacement) !== -1; // Split the offset string to obtain a list of values and operands
  // The regex addresses values with the plus or minus sign in front (+10, -20, etc)

  var fragments = offset.split(/(\+|\-)/).map(function (frag) {
    return frag.trim();
  }); // Detect if the offset string contains a pair of values or a single one
  // they could be separated by comma or space

  var divider = fragments.indexOf(find(fragments, function (frag) {
    return frag.search(/,|\s/) !== -1;
  }));

  if (fragments[divider] && fragments[divider].indexOf(',') === -1) {
    console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');
  } // If divider is found, we divide the list of values and operands to divide
  // them by ofset X and Y.


  var splitRegex = /\s*,\s*|\s+/;
  var ops = divider !== -1 ? [fragments.slice(0, divider).concat([fragments[divider].split(splitRegex)[0]]), [fragments[divider].split(splitRegex)[1]].concat(fragments.slice(divider + 1))] : [fragments]; // Convert the values with units to absolute pixels to allow our computations

  ops = ops.map(function (op, index) {
    // Most of the units rely on the orientation of the popper
    var measurement = (index === 1 ? !useHeight : useHeight) ? 'height' : 'width';
    var mergeWithPrevious = false;
    return op // This aggregates any `+` or `-` sign that aren't considered operators
    // e.g.: 10 + +5 => [10, +, +5]
    .reduce(function (a, b) {
      if (a[a.length - 1] === '' && ['+', '-'].indexOf(b) !== -1) {
        a[a.length - 1] = b;
        mergeWithPrevious = true;
        return a;
      } else if (mergeWithPrevious) {
        a[a.length - 1] += b;
        mergeWithPrevious = false;
        return a;
      } else {
        return a.concat(b);
      }
    }, []) // Here we convert the string values into number values (in px)
    .map(function (str) {
      return toValue(str, measurement, popperOffsets, referenceOffsets);
    });
  }); // Loop trough the offsets arrays and execute the operations

  ops.forEach(function (op, index) {
    op.forEach(function (frag, index2) {
      if (isNumeric(frag)) {
        offsets[index] += frag * (op[index2 - 1] === '-' ? -1 : 1);
      }
    });
  });
  return offsets;
}
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @argument {Number|String} options.offset=0
 * The offset value as described in the modifier description
 * @returns {Object} The data object, properly modified
 */


function offset(data, _ref) {
  var offset = _ref.offset;
  var placement = data.placement,
      _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;
  var basePlacement = placement.split('-')[0];
  var offsets = void 0;

  if (isNumeric(+offset)) {
    offsets = [+offset, 0];
  } else {
    offsets = parseOffset(offset, popper, reference, basePlacement);
  }

  if (basePlacement === 'left') {
    popper.top += offsets[0];
    popper.left -= offsets[1];
  } else if (basePlacement === 'right') {
    popper.top += offsets[0];
    popper.left += offsets[1];
  } else if (basePlacement === 'top') {
    popper.left += offsets[0];
    popper.top -= offsets[1];
  } else if (basePlacement === 'bottom') {
    popper.left += offsets[0];
    popper.top += offsets[1];
  }

  data.popper = popper;
  return data;
}
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */


function preventOverflow(data, options) {
  var boundariesElement = options.boundariesElement || getOffsetParent(data.instance.popper); // If offsetParent is the reference element, we really want to
  // go one step up and use the next offsetParent as reference to
  // avoid to make this modifier completely useless and look like broken

  if (data.instance.reference === boundariesElement) {
    boundariesElement = getOffsetParent(boundariesElement);
  } // NOTE: DOM access here
  // resets the popper's position so that the document size can be calculated excluding
  // the size of the popper element itself


  var transformProp = getSupportedPropertyName('transform');
  var popperStyles = data.instance.popper.style; // assignment to help minification

  var top = popperStyles.top,
      left = popperStyles.left,
      transform = popperStyles[transformProp];
  popperStyles.top = '';
  popperStyles.left = '';
  popperStyles[transformProp] = '';
  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, boundariesElement, data.positionFixed); // NOTE: DOM access here
  // restores the original style properties after the offsets have been computed

  popperStyles.top = top;
  popperStyles.left = left;
  popperStyles[transformProp] = transform;
  options.boundaries = boundaries;
  var order = options.priority;
  var popper = data.offsets.popper;
  var check = {
    primary: function primary(placement) {
      var value = popper[placement];

      if (popper[placement] < boundaries[placement] && !options.escapeWithReference) {
        value = Math.max(popper[placement], boundaries[placement]);
      }

      return defineProperty({}, placement, value);
    },
    secondary: function secondary(placement) {
      var mainSide = placement === 'right' ? 'left' : 'top';
      var value = popper[mainSide];

      if (popper[placement] > boundaries[placement] && !options.escapeWithReference) {
        value = Math.min(popper[mainSide], boundaries[placement] - (placement === 'right' ? popper.width : popper.height));
      }

      return defineProperty({}, mainSide, value);
    }
  };
  order.forEach(function (placement) {
    var side = ['left', 'top'].indexOf(placement) !== -1 ? 'primary' : 'secondary';
    popper = _extends({}, popper, check[side](placement));
  });
  data.offsets.popper = popper;
  return data;
}
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */


function shift(data) {
  var placement = data.placement;
  var basePlacement = placement.split('-')[0];
  var shiftvariation = placement.split('-')[1]; // if shift shiftvariation is specified, run the modifier

  if (shiftvariation) {
    var _data$offsets = data.offsets,
        reference = _data$offsets.reference,
        popper = _data$offsets.popper;
    var isVertical = ['bottom', 'top'].indexOf(basePlacement) !== -1;
    var side = isVertical ? 'left' : 'top';
    var measurement = isVertical ? 'width' : 'height';
    var shiftOffsets = {
      start: defineProperty({}, side, reference[side]),
      end: defineProperty({}, side, reference[side] + reference[measurement] - popper[measurement])
    };
    data.offsets.popper = _extends({}, popper, shiftOffsets[shiftvariation]);
  }

  return data;
}
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */


function hide(data) {
  if (!isModifierRequired(data.instance.modifiers, 'hide', 'preventOverflow')) {
    return data;
  }

  var refRect = data.offsets.reference;
  var bound = find(data.instance.modifiers, function (modifier) {
    return modifier.name === 'preventOverflow';
  }).boundaries;

  if (refRect.bottom < bound.top || refRect.left > bound.right || refRect.top > bound.bottom || refRect.right < bound.left) {
    // Avoid unnecessary DOM access if visibility hasn't changed
    if (data.hide === true) {
      return data;
    }

    data.hide = true;
    data.attributes['x-out-of-boundaries'] = '';
  } else {
    // Avoid unnecessary DOM access if visibility hasn't changed
    if (data.hide === false) {
      return data;
    }

    data.hide = false;
    data.attributes['x-out-of-boundaries'] = false;
  }

  return data;
}
/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */


function inner(data) {
  var placement = data.placement;
  var basePlacement = placement.split('-')[0];
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;
  var isHoriz = ['left', 'right'].indexOf(basePlacement) !== -1;
  var subtractLength = ['top', 'left'].indexOf(basePlacement) === -1;
  popper[isHoriz ? 'left' : 'top'] = reference[basePlacement] - (subtractLength ? popper[isHoriz ? 'width' : 'height'] : 0);
  data.placement = getOppositePlacement(placement);
  data.offsets.popper = getClientRect(popper);
  return data;
}
/**
 * Modifier function, each modifier can have a function of this type assigned
 * to its `fn` property.<br />
 * These functions will be called on each update, this means that you must
 * make sure they are performant enough to avoid performance bottlenecks.
 *
 * @function ModifierFn
 * @argument {dataObject} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {dataObject} The data object, properly modified
 */

/**
 * Modifiers are plugins used to alter the behavior of your poppers.<br />
 * Popper.js uses a set of 9 modifiers to provide all the basic functionalities
 * needed by the library.
 *
 * Usually you don't want to override the `order`, `fn` and `onLoad` props.
 * All the other properties are configurations that could be tweaked.
 * @namespace modifiers
 */


var modifiers = {
  /**
   * Modifier used to shift the popper on the start or end of its reference
   * element.<br />
   * It will read the variation of the `placement` property.<br />
   * It can be one either `-end` or `-start`.
   * @memberof modifiers
   * @inner
   */
  shift: {
    /** @prop {number} order=100 - Index used to define the order of execution */
    order: 100,

    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,

    /** @prop {ModifierFn} */
    fn: shift
  },

  /**
   * The `offset` modifier can shift your popper on both its axis.
   *
   * It accepts the following units:
   * - `px` or unit-less, interpreted as pixels
   * - `%` or `%r`, percentage relative to the length of the reference element
   * - `%p`, percentage relative to the length of the popper element
   * - `vw`, CSS viewport width unit
   * - `vh`, CSS viewport height unit
   *
   * For length is intended the main axis relative to the placement of the popper.<br />
   * This means that if the placement is `top` or `bottom`, the length will be the
   * `width`. In case of `left` or `right`, it will be the `height`.
   *
   * You can provide a single value (as `Number` or `String`), or a pair of values
   * as `String` divided by a comma or one (or more) white spaces.<br />
   * The latter is a deprecated method because it leads to confusion and will be
   * removed in v2.<br />
   * Additionally, it accepts additions and subtractions between different units.
   * Note that multiplications and divisions aren't supported.
   *
   * Valid examples are:
   * ```
   * 10
   * '10%'
   * '10, 10'
   * '10%, 10'
   * '10 + 10%'
   * '10 - 5vh + 3%'
   * '-10px + 5vh, 5px - 6%'
   * ```
   * > **NB**: If you desire to apply offsets to your poppers in a way that may make them overlap
   * > with their reference element, unfortunately, you will have to disable the `flip` modifier.
   * > You can read more on this at this [issue](https://github.com/FezVrasta/popper.js/issues/373).
   *
   * @memberof modifiers
   * @inner
   */
  offset: {
    /** @prop {number} order=200 - Index used to define the order of execution */
    order: 200,

    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,

    /** @prop {ModifierFn} */
    fn: offset,

    /** @prop {Number|String} offset=0
     * The offset value as described in the modifier description
     */
    offset: 0
  },

  /**
   * Modifier used to prevent the popper from being positioned outside the boundary.
   *
   * A scenario exists where the reference itself is not within the boundaries.<br />
   * We can say it has "escaped the boundaries" — or just "escaped".<br />
   * In this case we need to decide whether the popper should either:
   *
   * - detach from the reference and remain "trapped" in the boundaries, or
   * - if it should ignore the boundary and "escape with its reference"
   *
   * When `escapeWithReference` is set to`true` and reference is completely
   * outside its boundaries, the popper will overflow (or completely leave)
   * the boundaries in order to remain attached to the edge of the reference.
   *
   * @memberof modifiers
   * @inner
   */
  preventOverflow: {
    /** @prop {number} order=300 - Index used to define the order of execution */
    order: 300,

    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,

    /** @prop {ModifierFn} */
    fn: preventOverflow,

    /**
     * @prop {Array} [priority=['left','right','top','bottom']]
     * Popper will try to prevent overflow following these priorities by default,
     * then, it could overflow on the left and on top of the `boundariesElement`
     */
    priority: ['left', 'right', 'top', 'bottom'],

    /**
     * @prop {number} padding=5
     * Amount of pixel used to define a minimum distance between the boundaries
     * and the popper. This makes sure the popper always has a little padding
     * between the edges of its container
     */
    padding: 5,

    /**
     * @prop {String|HTMLElement} boundariesElement='scrollParent'
     * Boundaries used by the modifier. Can be `scrollParent`, `window`,
     * `viewport` or any DOM element.
     */
    boundariesElement: 'scrollParent'
  },

  /**
   * Modifier used to make sure the reference and its popper stay near each other
   * without leaving any gap between the two. Especially useful when the arrow is
   * enabled and you want to ensure that it points to its reference element.
   * It cares only about the first axis. You can still have poppers with margin
   * between the popper and its reference element.
   * @memberof modifiers
   * @inner
   */
  keepTogether: {
    /** @prop {number} order=400 - Index used to define the order of execution */
    order: 400,

    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,

    /** @prop {ModifierFn} */
    fn: keepTogether
  },

  /**
   * This modifier is used to move the `arrowElement` of the popper to make
   * sure it is positioned between the reference element and its popper element.
   * It will read the outer size of the `arrowElement` node to detect how many
   * pixels of conjunction are needed.
   *
   * It has no effect if no `arrowElement` is provided.
   * @memberof modifiers
   * @inner
   */
  arrow: {
    /** @prop {number} order=500 - Index used to define the order of execution */
    order: 500,

    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,

    /** @prop {ModifierFn} */
    fn: arrow,

    /** @prop {String|HTMLElement} element='[x-arrow]' - Selector or node used as arrow */
    element: '[x-arrow]'
  },

  /**
   * Modifier used to flip the popper's placement when it starts to overlap its
   * reference element.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   *
   * **NOTE:** this modifier will interrupt the current update cycle and will
   * restart it if it detects the need to flip the placement.
   * @memberof modifiers
   * @inner
   */
  flip: {
    /** @prop {number} order=600 - Index used to define the order of execution */
    order: 600,

    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,

    /** @prop {ModifierFn} */
    fn: flip,

    /**
     * @prop {String|Array} behavior='flip'
     * The behavior used to change the popper's placement. It can be one of
     * `flip`, `clockwise`, `counterclockwise` or an array with a list of valid
     * placements (with optional variations)
     */
    behavior: 'flip',

    /**
     * @prop {number} padding=5
     * The popper will flip if it hits the edges of the `boundariesElement`
     */
    padding: 5,

    /**
     * @prop {String|HTMLElement} boundariesElement='viewport'
     * The element which will define the boundaries of the popper position.
     * The popper will never be placed outside of the defined boundaries
     * (except if `keepTogether` is enabled)
     */
    boundariesElement: 'viewport',

    /**
     * @prop {Boolean} flipVariations=false
     * The popper will switch placement variation between `-start` and `-end` when
     * the reference element overlaps its boundaries.
     *
     * The original placement should have a set variation.
     */
    flipVariations: false,

    /**
     * @prop {Boolean} flipVariationsByContent=false
     * The popper will switch placement variation between `-start` and `-end` when
     * the popper element overlaps its reference boundaries.
     *
     * The original placement should have a set variation.
     */
    flipVariationsByContent: false
  },

  /**
   * Modifier used to make the popper flow toward the inner of the reference element.
   * By default, when this modifier is disabled, the popper will be placed outside
   * the reference element.
   * @memberof modifiers
   * @inner
   */
  inner: {
    /** @prop {number} order=700 - Index used to define the order of execution */
    order: 700,

    /** @prop {Boolean} enabled=false - Whether the modifier is enabled or not */
    enabled: false,

    /** @prop {ModifierFn} */
    fn: inner
  },

  /**
   * Modifier used to hide the popper when its reference element is outside of the
   * popper boundaries. It will set a `x-out-of-boundaries` attribute which can
   * be used to hide with a CSS selector the popper when its reference is
   * out of boundaries.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   * @memberof modifiers
   * @inner
   */
  hide: {
    /** @prop {number} order=800 - Index used to define the order of execution */
    order: 800,

    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,

    /** @prop {ModifierFn} */
    fn: hide
  },

  /**
   * Computes the style that will be applied to the popper element to gets
   * properly positioned.
   *
   * Note that this modifier will not touch the DOM, it just prepares the styles
   * so that `applyStyle` modifier can apply it. This separation is useful
   * in case you need to replace `applyStyle` with a custom implementation.
   *
   * This modifier has `850` as `order` value to maintain backward compatibility
   * with previous versions of Popper.js. Expect the modifiers ordering method
   * to change in future major versions of the library.
   *
   * @memberof modifiers
   * @inner
   */
  computeStyle: {
    /** @prop {number} order=850 - Index used to define the order of execution */
    order: 850,

    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,

    /** @prop {ModifierFn} */
    fn: computeStyle,

    /**
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3D transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties
     */
    gpuAcceleration: true,

    /**
     * @prop {string} [x='bottom']
     * Where to anchor the X axis (`bottom` or `top`). AKA X offset origin.
     * Change this if your popper should grow in a direction different from `bottom`
     */
    x: 'bottom',

    /**
     * @prop {string} [x='left']
     * Where to anchor the Y axis (`left` or `right`). AKA Y offset origin.
     * Change this if your popper should grow in a direction different from `right`
     */
    y: 'right'
  },

  /**
   * Applies the computed styles to the popper element.
   *
   * All the DOM manipulations are limited to this modifier. This is useful in case
   * you want to integrate Popper.js inside a framework or view library and you
   * want to delegate all the DOM manipulations to it.
   *
   * Note that if you disable this modifier, you must make sure the popper element
   * has its position set to `absolute` before Popper.js can do its work!
   *
   * Just disable this modifier and define your own to achieve the desired effect.
   *
   * @memberof modifiers
   * @inner
   */
  applyStyle: {
    /** @prop {number} order=900 - Index used to define the order of execution */
    order: 900,

    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,

    /** @prop {ModifierFn} */
    fn: applyStyle,

    /** @prop {Function} */
    onLoad: applyStyleOnLoad,

    /**
     * @deprecated since version 1.10.0, the property moved to `computeStyle` modifier
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3D transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties
     */
    gpuAcceleration: undefined
  }
};
/**
 * The `dataObject` is an object containing all the information used by Popper.js.
 * This object is passed to modifiers and to the `onCreate` and `onUpdate` callbacks.
 * @name dataObject
 * @property {Object} data.instance The Popper.js instance
 * @property {String} data.placement Placement applied to popper
 * @property {String} data.originalPlacement Placement originally defined on init
 * @property {Boolean} data.flipped True if popper has been flipped by flip modifier
 * @property {Boolean} data.hide True if the reference element is out of boundaries, useful to know when to hide the popper
 * @property {HTMLElement} data.arrowElement Node used as arrow by arrow modifier
 * @property {Object} data.styles Any CSS property defined here will be applied to the popper. It expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.arrowStyles Any CSS property defined here will be applied to the popper arrow. It expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.boundaries Offsets of the popper boundaries
 * @property {Object} data.offsets The measurements of popper, reference and arrow elements
 * @property {Object} data.offsets.popper `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.reference `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.arrow] `top` and `left` offsets, only one of them will be different from 0
 */

/**
 * Default options provided to Popper.js constructor.<br />
 * These can be overridden using the `options` argument of Popper.js.<br />
 * To override an option, simply pass an object with the same
 * structure of the `options` object, as the 3rd argument. For example:
 * ```
 * new Popper(ref, pop, {
 *   modifiers: {
 *     preventOverflow: { enabled: false }
 *   }
 * })
 * ```
 * @type {Object}
 * @static
 * @memberof Popper
 */

var Defaults = {
  /**
   * Popper's placement.
   * @prop {Popper.placements} placement='bottom'
   */
  placement: 'bottom',

  /**
   * Set this to true if you want popper to position it self in 'fixed' mode
   * @prop {Boolean} positionFixed=false
   */
  positionFixed: false,

  /**
   * Whether events (resize, scroll) are initially enabled.
   * @prop {Boolean} eventsEnabled=true
   */
  eventsEnabled: true,

  /**
   * Set to true if you want to automatically remove the popper when
   * you call the `destroy` method.
   * @prop {Boolean} removeOnDestroy=false
   */
  removeOnDestroy: false,

  /**
   * Callback called when the popper is created.<br />
   * By default, it is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onCreate}
   */
  onCreate: function onCreate() {},

  /**
   * Callback called when the popper is updated. This callback is not called
   * on the initialization/creation of the popper, but only on subsequent
   * updates.<br />
   * By default, it is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onUpdate}
   */
  onUpdate: function onUpdate() {},

  /**
   * List of modifiers used to modify the offsets before they are applied to the popper.
   * They provide most of the functionalities of Popper.js.
   * @prop {modifiers}
   */
  modifiers: modifiers
};
/**
 * @callback onCreate
 * @param {dataObject} data
 */

/**
 * @callback onUpdate
 * @param {dataObject} data
 */
// Utils
// Methods

var Popper = function () {
  /**
   * Creates a new Popper.js instance.
   * @class Popper
   * @param {Element|referenceObject} reference - The reference element used to position the popper
   * @param {Element} popper - The HTML / XML element used as the popper
   * @param {Object} options - Your custom options to override the ones defined in [Defaults](#defaults)
   * @return {Object} instance - The generated Popper.js instance
   */
  function Popper(reference, popper) {
    var _this = this;

    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    classCallCheck(this, Popper);

    this.scheduleUpdate = function () {
      return requestAnimationFrame(_this.update);
    }; // make update() debounced, so that it only runs at most once-per-tick


    this.update = debounce(this.update.bind(this)); // with {} we create a new object with the options inside it

    this.options = _extends({}, Popper.Defaults, options); // init state

    this.state = {
      isDestroyed: false,
      isCreated: false,
      scrollParents: []
    }; // get reference and popper elements (allow jQuery wrappers)

    this.reference = reference && reference.jquery ? reference[0] : reference;
    this.popper = popper && popper.jquery ? popper[0] : popper; // Deep merge modifiers options

    this.options.modifiers = {};
    Object.keys(_extends({}, Popper.Defaults.modifiers, options.modifiers)).forEach(function (name) {
      _this.options.modifiers[name] = _extends({}, Popper.Defaults.modifiers[name] || {}, options.modifiers ? options.modifiers[name] : {});
    }); // Refactoring modifiers' list (Object => Array)

    this.modifiers = Object.keys(this.options.modifiers).map(function (name) {
      return _extends({
        name: name
      }, _this.options.modifiers[name]);
    }) // sort the modifiers by order
    .sort(function (a, b) {
      return a.order - b.order;
    }); // modifiers have the ability to execute arbitrary code when Popper.js get inited
    // such code is executed in the same order of its modifier
    // they could add new properties to their options configuration
    // BE AWARE: don't add options to `options.modifiers.name` but to `modifierOptions`!

    this.modifiers.forEach(function (modifierOptions) {
      if (modifierOptions.enabled && isFunction(modifierOptions.onLoad)) {
        modifierOptions.onLoad(_this.reference, _this.popper, _this.options, modifierOptions, _this.state);
      }
    }); // fire the first update to position the popper in the right place

    this.update();
    var eventsEnabled = this.options.eventsEnabled;

    if (eventsEnabled) {
      // setup event listeners, they will take care of update the position in specific situations
      this.enableEventListeners();
    }

    this.state.eventsEnabled = eventsEnabled;
  } // We can't use class properties because they don't get listed in the
  // class prototype and break stuff like Sinon stubs


  createClass(Popper, [{
    key: 'update',
    value: function update$$1() {
      return update.call(this);
    }
  }, {
    key: 'destroy',
    value: function destroy$$1() {
      return destroy.call(this);
    }
  }, {
    key: 'enableEventListeners',
    value: function enableEventListeners$$1() {
      return enableEventListeners.call(this);
    }
  }, {
    key: 'disableEventListeners',
    value: function disableEventListeners$$1() {
      return disableEventListeners.call(this);
    }
    /**
     * Schedules an update. It will run on the next UI update available.
     * @method scheduleUpdate
     * @memberof Popper
     */

    /**
     * Collection of utilities useful when writing custom modifiers.
     * Starting from version 1.7, this method is available only if you
     * include `popper-utils.js` before `popper.js`.
     *
     * **DEPRECATION**: This way to access PopperUtils is deprecated
     * and will be removed in v2! Use the PopperUtils module directly instead.
     * Due to the high instability of the methods contained in Utils, we can't
     * guarantee them to follow semver. Use them at your own risk!
     * @static
     * @private
     * @type {Object}
     * @deprecated since version 1.8
     * @member Utils
     * @memberof Popper
     */

  }]);
  return Popper;
}();
/**
 * The `referenceObject` is an object that provides an interface compatible with Popper.js
 * and lets you use it as replacement of a real DOM node.<br />
 * You can use this method to position a popper relatively to a set of coordinates
 * in case you don't have a DOM node to use as reference.
 *
 * ```
 * new Popper(referenceObject, popperNode);
 * ```
 *
 * NB: This feature isn't supported in Internet Explorer 10.
 * @name referenceObject
 * @property {Function} data.getBoundingClientRect
 * A function that returns a set of coordinates compatible with the native `getBoundingClientRect` method.
 * @property {number} data.clientWidth
 * An ES6 getter that will return the width of the virtual reference element.
 * @property {number} data.clientHeight
 * An ES6 getter that will return the height of the virtual reference element.
 */


Popper.Utils = (typeof window !== 'undefined' ? window : global).PopperUtils;
Popper.placements = placements;
Popper.Defaults = Defaults;
/* harmony default export */ __webpack_exports__["default"] = (Popper);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../test/dummy/node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../../front/node_modules/stimulus/index.js":
/*!**************************************************************************************************!*\
  !*** /Users/gregoriogalante/Workspace/matilda/matilda-core/front/node_modules/stimulus/index.js ***!
  \**************************************************************************************************/
/*! exports provided: Application, Context, Controller, defaultSchema */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _stimulus_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @stimulus/core */ "../../front/node_modules/@stimulus/core/dist/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Application", function() { return _stimulus_core__WEBPACK_IMPORTED_MODULE_0__["Application"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Context", function() { return _stimulus_core__WEBPACK_IMPORTED_MODULE_0__["Context"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Controller", function() { return _stimulus_core__WEBPACK_IMPORTED_MODULE_0__["Controller"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "defaultSchema", function() { return _stimulus_core__WEBPACK_IMPORTED_MODULE_0__["defaultSchema"]; });



/***/ }),

/***/ "../../front/node_modules/tippy.js/dist/tippy.chunk.esm.js":
/*!*****************************************************************************************************************!*\
  !*** /Users/gregoriogalante/Workspace/matilda/matilda-core/front/node_modules/tippy.js/dist/tippy.chunk.esm.js ***!
  \*****************************************************************************************************************/
/*! exports provided: B, R, _, a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, r, s, t, u, w */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "B", function() { return BACKDROP_CLASS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "R", function() { return ROUND_ARROW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_", function() { return _extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return div; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return isUCBrowser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return isMouseEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return defaultProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return errorWhen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return currentInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getOwnerDocument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return closestCallback; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return includes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return getBasePlacement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return arrayFrom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return hideAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return createTippyWithPlugins; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return normalizeToArray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return isBrowser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return removeProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return setVisibilityState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return tippy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return useIfDefined; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return warnWhen; });
/* harmony import */ var popper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! popper.js */ "../../front/node_modules/popper.js/dist/esm/popper.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**!
* tippy.js v5.1.3
* (c) 2017-2019 atomiks
* MIT License
*/


function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

var version = "5.1.3";
/**
 * Triggers reflow
 */

function reflow(element) {
  void element.offsetHeight;
}
/**
 * Sets the innerHTML of an element
 */


function setInnerHTML(element, html) {
  element[innerHTML()] = html;
}
/**
 * Determines if the value is a reference element
 */


function isReferenceElement(value) {
  return !!(value && value._tippy && value._tippy.reference === value);
}
/**
 * Safe .hasOwnProperty check, for prototype-less objects
 */


function hasOwnProperty(obj, key) {
  return {}.hasOwnProperty.call(obj, key);
}
/**
 * Returns an array of elements based on the value
 */


function getArrayOfElements(value) {
  if (isElement(value)) {
    return [value];
  }

  if (isNodeList(value)) {
    return arrayFrom(value);
  }

  if (Array.isArray(value)) {
    return value;
  }

  return arrayFrom(document.querySelectorAll(value));
}
/**
 * Returns a value at a given index depending on if it's an array or number
 */


function getValueAtIndexOrReturn(value, index, defaultValue) {
  if (Array.isArray(value)) {
    var v = value[index];
    return v == null ? Array.isArray(defaultValue) ? defaultValue[index] : defaultValue : v;
  }

  return value;
}
/**
 * Prevents errors from being thrown while accessing nested modifier objects
 * in `popperOptions`
 */


function getModifier(obj, key) {
  return obj && obj.modifiers && obj.modifiers[key];
}
/**
 * Determines if the value is of type
 */


function isType(value, type) {
  var str = {}.toString.call(value);
  return str.indexOf('[object') === 0 && str.indexOf(type + "]") > -1;
}
/**
 * Determines if the value is of type Element
 */


function isElement(value) {
  return isType(value, 'Element');
}
/**
 * Determines if the value is of type NodeList
 */


function isNodeList(value) {
  return isType(value, 'NodeList');
}
/**
 * Determines if the value is of type MouseEvent
 */


function isMouseEvent(value) {
  return isType(value, 'MouseEvent');
}
/**
 * Firefox extensions don't allow setting .innerHTML directly, this will trick
 * it
 */


function innerHTML() {
  return 'innerHTML';
}
/**
 * Evaluates a function if one, or returns the value
 */


function invokeWithArgsOrReturn(value, args) {
  return typeof value === 'function' ? value.apply(void 0, args) : value;
}
/**
 * Sets a popperInstance modifier's property to a value
 */


function setModifierValue(modifiers, name, property, value) {
  modifiers.filter(function (m) {
    return m.name === name;
  })[0][property] = value;
}
/**
 * Returns a new `div` element
 */


function div() {
  return document.createElement('div');
}
/**
 * Applies a transition duration to a list of elements
 */


function setTransitionDuration(els, value) {
  els.forEach(function (el) {
    if (el) {
      el.style.transitionDuration = value + "ms";
    }
  });
}
/**
 * Sets the visibility state to elements so they can begin to transition
 */


function setVisibilityState(els, state) {
  els.forEach(function (el) {
    if (el) {
      el.setAttribute('data-state', state);
    }
  });
}
/**
 * Debounce utility. To avoid bloating bundle size, we're only passing 1
 * argument here, a more generic function would pass all arguments. Only
 * `onMouseMove` uses this which takes the event object for now.
 */


function debounce(fn, ms) {
  // Avoid wrapping in `setTimeout` if ms is 0 anyway
  if (ms === 0) {
    return fn;
  }

  var timeout;
  return function (arg) {
    clearTimeout(timeout);
    timeout = setTimeout(function () {
      fn(arg);
    }, ms);
  };
}
/**
 * Preserves the original function invocation when another function replaces it
 */


function preserveInvocation(originalFn, currentFn, args) {
  if (originalFn && originalFn !== currentFn) {
    originalFn.apply(void 0, args);
  }
}
/**
 * Deletes properties from an object (pure)
 */


function removeProperties(obj, keys) {
  var clone = _extends({}, obj);

  keys.forEach(function (key) {
    delete clone[key];
  });
  return clone;
}
/**
 * Ponyfill for Array.from - converts iterable values to an array
 */


function arrayFrom(value) {
  return [].slice.call(value);
}
/**
 * Works like Element.prototype.closest, but uses a callback instead
 */


function closestCallback(element, callback) {
  while (element) {
    if (callback(element)) {
      return element;
    }

    element = element.parentElement;
  }

  return null;
}
/**
 * Determines if an array or string includes a string
 */


function includes(a, b) {
  return a.indexOf(b) > -1;
}
/**
 * Creates an array from string of values separated by whitespace
 */


function splitBySpaces(value) {
  return value.split(/\s+/).filter(Boolean);
}
/**
 * Returns the `nextValue` if `nextValue` is not `undefined`, otherwise returns
 * `currentValue`
 */


function useIfDefined(nextValue, currentValue) {
  return nextValue !== undefined ? nextValue : currentValue;
}
/**
 * Converts a value that's an array or single value to an array
 */


function normalizeToArray(value) {
  return [].concat(value);
}
/**
 * Returns the ownerDocument of the first available element, otherwise global
 * document
 */


function getOwnerDocument(elementOrElements) {
  var _normalizeToArray = normalizeToArray(elementOrElements),
      element = _normalizeToArray[0];

  return element ? element.ownerDocument || document : document;
}
/**
 * Adds item to array if array does not contain it
 */


function pushIfUnique(arr, value) {
  if (arr.indexOf(value) === -1) {
    arr.push(value);
  }
}
/**
 * Adds `px` if value is a number, or returns it directly
 */


function appendPxIfNumber(value) {
  return typeof value === 'number' ? value + "px" : value;
}
/**
 * Filters out duplicate elements in an array
 */


function unique(arr) {
  return arr.filter(function (item, index) {
    return arr.indexOf(item) === index;
  });
}
/**
 * Returns number from number or CSS units string
 */


function getNumber(value) {
  return typeof value === 'number' ? value : parseFloat(value);
}
/**
 * Gets number or CSS string units in pixels (e.g. `1rem` -> 16)
 */


function getUnitsInPx(doc, value) {
  var isRem = typeof value === 'string' && includes(value, 'rem');
  var html = doc.documentElement;
  var rootFontSize = 16;

  if (html && isRem) {
    return parseFloat(getComputedStyle(html).fontSize || String(rootFontSize)) * getNumber(value);
  }

  return getNumber(value);
}
/**
 * Adds the `distancePx` value to the placement of a Popper.Padding object
 */


function getComputedPadding(basePlacement, padding, distancePx) {
  if (padding === void 0) {
    padding = 5;
  }

  var freshPaddingObject = {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
  var keys = Object.keys(freshPaddingObject);
  return keys.reduce(function (obj, key) {
    obj[key] = typeof padding === 'number' ? padding : padding[key];

    if (basePlacement === key) {
      obj[key] = typeof padding === 'number' ? padding + distancePx : padding[basePlacement] + distancePx;
    }

    return obj;
  }, freshPaddingObject);
}

function createMemoryLeakWarning(method) {
  var txt = method === 'destroy' ? 'n already-' : ' ';
  return "\n    " + method + "() was called on a" + txt + "destroyed instance. This is a no-op but\n    indicates a potential memory leak.\n  ";
}

function clean(value) {
  var spacesAndTabs = /[ \t]{2,}/g;
  var lineStartWithSpaces = /^[ \t]*/gm;
  return value.replace(spacesAndTabs, ' ').replace(lineStartWithSpaces, '').trim();
}

function getDevMessage(message) {
  return clean("\n  %ctippy.js\n\n  %c" + clean(message) + "\n\n  %c\uD83D\uDC77\u200D This is a development-only message. It will be removed in production.\n  ");
}

function getFormattedMessage(message) {
  return [getDevMessage(message), // title
  'color: #00C584; font-size: 1.3em; font-weight: bold;', // message
  'line-height: 1.5', // footer
  'color: #a6a095;'];
}
/**
 * Helpful wrapper around `console.warn()`.
 * TODO: Should we use a cache so it only warns a single time and not spam the
 * console? (Need to consider hot reloading and invalidation though). Chrome
 * already batches warnings as well.
 */


function warnWhen(condition, message) {
  if (condition) {
    var _console;

    (_console = console).warn.apply(_console, getFormattedMessage(message));
  }
}
/**
 * Helpful wrapper around `console.error()`
 */


function errorWhen(condition, message) {
  if (condition) {
    var _console2;

    (_console2 = console).error.apply(_console2, getFormattedMessage(message));
  }
}
/**
 * Validates the `targets` value passed to `tippy()`
 */


function validateTargets(targets) {
  var didPassFalsyValue = !targets;
  var didPassPlainObject = Object.prototype.toString.call(targets) === '[object Object]' && !targets.addEventListener;
  errorWhen(didPassFalsyValue, ['tippy() was passed', '`' + String(targets) + '`', 'as its targets (first) argument. Valid types are: String, Element, Element[],', 'or NodeList.'].join(' '));
  errorWhen(didPassPlainObject, ['tippy() was passed a plain object which is no longer supported as an argument.', 'See: https://atomiks.github.io/tippyjs/misc/#custom-position'].join(' '));
}

var pluginProps = {
  animateFill: false,
  followCursor: false,
  inlinePositioning: false,
  sticky: false
};

var defaultProps = _extends({
  allowHTML: true,
  animation: 'fade',
  appendTo: function appendTo() {
    return document.body;
  },
  aria: 'describedby',
  arrow: true,
  boundary: 'scrollParent',
  content: '',
  delay: 0,
  distance: 10,
  duration: [300, 250],
  flip: true,
  flipBehavior: 'flip',
  flipOnUpdate: false,
  hideOnClick: true,
  ignoreAttributes: false,
  inertia: false,
  interactive: false,
  interactiveBorder: 2,
  interactiveDebounce: 0,
  lazy: true,
  maxWidth: 350,
  multiple: false,
  offset: 0,
  onAfterUpdate: function onAfterUpdate() {},
  onBeforeUpdate: function onBeforeUpdate() {},
  onCreate: function onCreate() {},
  onDestroy: function onDestroy() {},
  onHidden: function onHidden() {},
  onHide: function onHide() {},
  onMount: function onMount() {},
  onShow: function onShow() {},
  onShown: function onShown() {},
  onTrigger: function onTrigger() {},
  onUntrigger: function onUntrigger() {},
  placement: 'top',
  plugins: [],
  popperOptions: {},
  role: 'tooltip',
  showOnCreate: false,
  theme: '',
  touch: true,
  trigger: 'mouseenter focus',
  triggerTarget: null,
  updateDuration: 0,
  zIndex: 9999
}, pluginProps);

var defaultKeys = Object.keys(defaultProps);
/**
 * If the setProps() method encounters one of these, the popperInstance must be
 * recreated
 */

var POPPER_INSTANCE_DEPENDENCIES = ['arrow', 'boundary', 'distance', 'flip', 'flipBehavior', 'flipOnUpdate', 'offset', 'placement', 'popperOptions'];
/**
 * Mutates the defaultProps object by setting the props specified
 */

var setDefaultProps = function setDefaultProps(partialProps) {
  if (true) {
    validateProps(partialProps, []);
  }

  var keys = Object.keys(partialProps);
  keys.forEach(function (key) {
    defaultProps[key] = partialProps[key];
  });
};
/**
 * Returns an extended props object including plugin props
 */


function getExtendedPassedProps(passedProps) {
  var plugins = passedProps.plugins || [];
  var pluginProps = plugins.reduce(function (acc, plugin) {
    var name = plugin.name,
        defaultValue = plugin.defaultValue;

    if (name) {
      acc[name] = passedProps[name] !== undefined ? passedProps[name] : defaultValue;
    }

    return acc;
  }, {});
  return _extends({}, passedProps, {}, pluginProps);
}
/**
 * Returns an object of optional props from data-tippy-* attributes
 */


function getDataAttributeProps(reference, plugins) {
  var propKeys = plugins ? Object.keys(getExtendedPassedProps(_extends({}, defaultProps, {
    plugins: plugins
  }))) : defaultKeys;
  var props = propKeys.reduce(function (acc, key) {
    var valueAsString = (reference.getAttribute("data-tippy-" + key) || '').trim();

    if (!valueAsString) {
      return acc;
    }

    if (key === 'content') {
      acc[key] = valueAsString;
    } else {
      try {
        acc[key] = JSON.parse(valueAsString);
      } catch (e) {
        acc[key] = valueAsString;
      }
    }

    return acc;
  }, {});
  return props;
}
/**
 * Evaluates the props object by merging data attributes and disabling
 * conflicting props where necessary
 */


function evaluateProps(reference, props) {
  var out = _extends({}, props, {
    content: invokeWithArgsOrReturn(props.content, [reference])
  }, props.ignoreAttributes ? {} : getDataAttributeProps(reference, props.plugins));

  if (out.interactive) {
    out.aria = null;
  }

  return out;
}
/**
 * Validates props with the valid `defaultProps` object
 */


function validateProps(partialProps, plugins) {
  if (partialProps === void 0) {
    partialProps = {};
  }

  if (plugins === void 0) {
    plugins = [];
  }

  var keys = Object.keys(partialProps);
  keys.forEach(function (prop) {
    var value = partialProps[prop];
    var didSpecifyPlacementInPopperOptions = prop === 'popperOptions' && value !== null && _typeof(value) === 'object' && hasOwnProperty(value, 'placement');
    var nonPluginProps = removeProperties(defaultProps, ['animateFill', 'followCursor', 'inlinePositioning', 'sticky']); // These props have custom warnings

    var customWarningProps = ['a11y', 'arrowType', 'showOnInit', 'size', 'target', 'touchHold'];
    var didPassUnknownProp = !hasOwnProperty(nonPluginProps, prop) && !includes(customWarningProps, prop); // Check if the prop exists in `plugins`

    if (didPassUnknownProp) {
      didPassUnknownProp = plugins.filter(function (plugin) {
        return plugin.name === prop;
      }).length === 0;
    }

    warnWhen(prop === 'target', ['The `target` prop was removed in v5 and replaced with the delegate() addon', 'in order to conserve bundle size.', 'See: https://atomiks.github.io/tippyjs/addons/#event-delegation'].join(' '));
    warnWhen(prop === 'a11y', ['The `a11y` prop was removed in v5. Make sure the element you are giving a', 'tippy to is natively focusable, such as <button> or <input>, not <div>', 'or <span>.'].join(' '));
    warnWhen(prop === 'showOnInit', 'The `showOnInit` prop was renamed to `showOnCreate` in v5.');
    warnWhen(prop === 'arrowType', ['The `arrowType` prop was removed in v5 in favor of overloading the `arrow`', 'prop.', '\n\n', '"round" string was replaced with importing the string from the package.', '\n\n', "* import {roundArrow} from 'tippy.js'; (ESM version)\n", '* const {roundArrow} = tippy; (IIFE CDN version)', '\n\n', 'Before: {arrow: true, arrowType: "round"}\n', 'After: {arrow: roundArrow}`'].join(' '));
    warnWhen(prop === 'touchHold', ['The `touchHold` prop was removed in v5 in favor of overloading the `touch`', 'prop.', '\n\n', 'Before: {touchHold: true}\n', 'After: {touch: "hold"}'].join(' '));
    warnWhen(prop === 'size', ['The `size` prop was removed in v5. Instead, use a theme that specifies', 'CSS padding and font-size properties.'].join(' '));
    warnWhen(prop === 'theme' && value === 'google', 'The included theme "google" was renamed to "material" in v5.');
    warnWhen(didSpecifyPlacementInPopperOptions, ['Specifying placement in `popperOptions` is not supported. Use the base-level', '`placement` prop instead.', '\n\n', 'Before: {popperOptions: {placement: "bottom"}}\n', 'After: {placement: "bottom"}'].join(' '));
    warnWhen(didPassUnknownProp, ["`" + prop + "`", "is not a valid prop. You may have spelled it incorrectly, or if it's a", 'plugin, forgot to pass it in an array as props.plugins.', '\n\n', 'In v5, the following props were turned into plugins:', '\n\n', '* animateFill\n', '* followCursor\n', '* sticky', '\n\n', 'All props: https://atomiks.github.io/tippyjs/all-props/\n', 'Plugins: https://atomiks.github.io/tippyjs/plugins/'].join(' '));
  });
}

var PASSIVE = {
  passive: true
};
var ROUND_ARROW = '<svg viewBox="0 0 18 7" xmlns="http://www.w3.org/2000/svg"><path d="M0 7s2.021-.015 5.253-4.218C6.584 1.051 7.797.007 9 0c1.203-.007 2.416 1.035 3.761 2.782C16.012 7.005 18 7 18 7H0z"/></svg>';
var IOS_CLASS = "tippy-iOS";
var POPPER_CLASS = "tippy-popper";
var TOOLTIP_CLASS = "tippy-tooltip";
var CONTENT_CLASS = "tippy-content";
var BACKDROP_CLASS = "tippy-backdrop";
var ARROW_CLASS = "tippy-arrow";
var SVG_ARROW_CLASS = "tippy-svg-arrow";
var POPPER_SELECTOR = "." + POPPER_CLASS;
var TOOLTIP_SELECTOR = "." + TOOLTIP_CLASS;
var CONTENT_SELECTOR = "." + CONTENT_CLASS;
var ARROW_SELECTOR = "." + ARROW_CLASS;
var SVG_ARROW_SELECTOR = "." + SVG_ARROW_CLASS;
var currentInput = {
  isTouch: false
};
var lastMouseMoveTime = 0;
/**
 * When a `touchstart` event is fired, it's assumed the user is using touch
 * input. We'll bind a `mousemove` event listener to listen for mouse input in
 * the future. This way, the `isTouch` property is fully dynamic and will handle
 * hybrid devices that use a mix of touch + mouse input.
 */

function onDocumentTouchStart() {
  if (currentInput.isTouch) {
    return;
  }

  currentInput.isTouch = true;

  if (window.performance) {
    document.addEventListener('mousemove', onDocumentMouseMove);
  }
}
/**
 * When two `mousemove` event are fired consecutively within 20ms, it's assumed
 * the user is using mouse input again. `mousemove` can fire on touch devices as
 * well, but very rarely that quickly.
 */


function onDocumentMouseMove() {
  var now = performance.now();

  if (now - lastMouseMoveTime < 20) {
    currentInput.isTouch = false;
    document.removeEventListener('mousemove', onDocumentMouseMove);
  }

  lastMouseMoveTime = now;
}
/**
 * When an element is in focus and has a tippy, leaving the tab/window and
 * returning causes it to show again. For mouse users this is unexpected, but
 * for keyboard use it makes sense.
 * TODO: find a better technique to solve this problem
 */


function onWindowBlur() {
  var activeElement = document.activeElement;

  if (isReferenceElement(activeElement)) {
    var instance = activeElement._tippy;

    if (activeElement.blur && !instance.state.isVisible) {
      activeElement.blur();
    }
  }
}
/**
 * Adds the needed global event listeners
 */


function bindGlobalEventListeners() {
  document.addEventListener('touchstart', onDocumentTouchStart, _extends({}, PASSIVE, {
    capture: true
  }));
  window.addEventListener('blur', onWindowBlur);
}

var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined';
var ua = isBrowser ? navigator.userAgent : '';
var isIE = /MSIE |Trident\//.test(ua);
var isUCBrowser = /UCBrowser\//.test(ua);
var isIOS = isBrowser && /iPhone|iPad|iPod/.test(navigator.platform);

function updateIOSClass(isAdd) {
  var shouldAdd = isAdd && isIOS && currentInput.isTouch;
  document.body.classList[shouldAdd ? 'add' : 'remove'](IOS_CLASS);
}
/**
 * Returns the popper's placement, ignoring shifting (top-start, etc)
 */


function getBasePlacement(placement) {
  return placement.split('-')[0];
}
/**
 * Adds `data-inertia` attribute
 */


function addInertia(tooltip) {
  tooltip.setAttribute('data-inertia', '');
}
/**
 * Removes `data-inertia` attribute
 */


function removeInertia(tooltip) {
  tooltip.removeAttribute('data-inertia');
}
/**
 * Adds interactive-related attributes
 */


function addInteractive(tooltip) {
  tooltip.setAttribute('data-interactive', '');
}
/**
 * Removes interactive-related attributes
 */


function removeInteractive(tooltip) {
  tooltip.removeAttribute('data-interactive');
}
/**
 * Sets the content of a tooltip
 */


function setContent(contentEl, props) {
  if (isElement(props.content)) {
    setInnerHTML(contentEl, '');
    contentEl.appendChild(props.content);
  } else if (typeof props.content !== 'function') {
    var key = props.allowHTML ? 'innerHTML' : 'textContent';
    contentEl[key] = props.content;
  }
}
/**
 * Returns the child elements of a popper element
 */


function getChildren(popper) {
  return {
    tooltip: popper.querySelector(TOOLTIP_SELECTOR),
    content: popper.querySelector(CONTENT_SELECTOR),
    arrow: popper.querySelector(ARROW_SELECTOR) || popper.querySelector(SVG_ARROW_SELECTOR)
  };
}
/**
 * Creates an arrow element and returns it
 */


function createArrowElement(arrow) {
  var arrowElement = div();

  if (arrow === true) {
    arrowElement.className = ARROW_CLASS;
  } else {
    arrowElement.className = SVG_ARROW_CLASS;

    if (isElement(arrow)) {
      arrowElement.appendChild(arrow);
    } else {
      setInnerHTML(arrowElement, arrow);
    }
  }

  return arrowElement;
}
/**
 * Constructs the popper element and returns it
 */


function createPopperElement(id, props) {
  var popper = div();
  popper.className = POPPER_CLASS;
  popper.style.position = 'absolute';
  popper.style.top = '0';
  popper.style.left = '0';
  var tooltip = div();
  tooltip.className = TOOLTIP_CLASS;
  tooltip.id = "tippy-" + id;
  tooltip.setAttribute('data-state', 'hidden');
  tooltip.setAttribute('tabindex', '-1');
  updateTheme(tooltip, 'add', props.theme);
  var content = div();
  content.className = CONTENT_CLASS;
  content.setAttribute('data-state', 'hidden');

  if (props.interactive) {
    addInteractive(tooltip);
  }

  if (props.arrow) {
    tooltip.setAttribute('data-arrow', '');
    tooltip.appendChild(createArrowElement(props.arrow));
  }

  if (props.inertia) {
    addInertia(tooltip);
  }

  setContent(content, props);
  tooltip.appendChild(content);
  popper.appendChild(tooltip);
  updatePopperElement(popper, props, props);
  return popper;
}
/**
 * Updates the popper element based on the new props
 */


function updatePopperElement(popper, prevProps, nextProps) {
  var _getChildren = getChildren(popper),
      tooltip = _getChildren.tooltip,
      content = _getChildren.content,
      arrow = _getChildren.arrow;

  popper.style.zIndex = '' + nextProps.zIndex;
  tooltip.setAttribute('data-animation', nextProps.animation);
  tooltip.style.maxWidth = appendPxIfNumber(nextProps.maxWidth);

  if (nextProps.role) {
    tooltip.setAttribute('role', nextProps.role);
  } else {
    tooltip.removeAttribute('role');
  }

  if (prevProps.content !== nextProps.content) {
    setContent(content, nextProps);
  } // arrow


  if (!prevProps.arrow && nextProps.arrow) {
    // false to true
    tooltip.appendChild(createArrowElement(nextProps.arrow));
    tooltip.setAttribute('data-arrow', '');
  } else if (prevProps.arrow && !nextProps.arrow) {
    // true to false
    tooltip.removeChild(arrow);
    tooltip.removeAttribute('data-arrow');
  } else if (prevProps.arrow !== nextProps.arrow) {
    // true to 'round' or vice-versa
    tooltip.removeChild(arrow);
    tooltip.appendChild(createArrowElement(nextProps.arrow));
  } // interactive


  if (!prevProps.interactive && nextProps.interactive) {
    addInteractive(tooltip);
  } else if (prevProps.interactive && !nextProps.interactive) {
    removeInteractive(tooltip);
  } // inertia


  if (!prevProps.inertia && nextProps.inertia) {
    addInertia(tooltip);
  } else if (prevProps.inertia && !nextProps.inertia) {
    removeInertia(tooltip);
  } // theme


  if (prevProps.theme !== nextProps.theme) {
    updateTheme(tooltip, 'remove', prevProps.theme);
    updateTheme(tooltip, 'add', nextProps.theme);
  }
}
/**
 * Add/remove transitionend listener from tooltip
 */


function updateTransitionEndListener(tooltip, action, listener) {
  var eventName = isUCBrowser && document.body.style.webkitTransition !== undefined ? 'webkitTransitionEnd' : 'transitionend';
  tooltip[action + 'EventListener'](eventName, listener);
}
/**
 * Adds/removes theme from tooltip's classList
 */


function updateTheme(tooltip, action, theme) {
  splitBySpaces(theme).forEach(function (name) {
    tooltip.classList[action](name + "-theme");
  });
}
/**
 * Determines if the mouse cursor is outside of the popper's interactive border
 * region
 */


function isCursorOutsideInteractiveBorder(popperTreeData, event) {
  var clientX = event.clientX,
      clientY = event.clientY;
  return popperTreeData.every(function (_ref) {
    var popperRect = _ref.popperRect,
        tooltipRect = _ref.tooltipRect,
        interactiveBorder = _ref.interactiveBorder; // Get min/max bounds of both the popper and tooltip rects due to
    // `distance` offset

    var mergedRect = {
      top: Math.min(popperRect.top, tooltipRect.top),
      right: Math.max(popperRect.right, tooltipRect.right),
      bottom: Math.max(popperRect.bottom, tooltipRect.bottom),
      left: Math.min(popperRect.left, tooltipRect.left)
    };
    var exceedsTop = mergedRect.top - clientY > interactiveBorder;
    var exceedsBottom = clientY - mergedRect.bottom > interactiveBorder;
    var exceedsLeft = mergedRect.left - clientX > interactiveBorder;
    var exceedsRight = clientX - mergedRect.right > interactiveBorder;
    return exceedsTop || exceedsBottom || exceedsLeft || exceedsRight;
  });
}

var idCounter = 1;
var mouseMoveListeners = [];
/**
 * Used by `hideAll()`
 */

var mountedInstances = [];
/**
 * Creates and returns a Tippy object. We're using a closure pattern instead of
 * a class so that the exposed object API is clean without private members
 * prefixed with `_`.
 */

function createTippy(reference, passedProps) {
  var props = evaluateProps(reference, _extends({}, defaultProps, {}, getExtendedPassedProps(passedProps))); // If the reference shouldn't have multiple tippys, return null early

  if (!props.multiple && reference._tippy) {
    return null;
  }
  /* ======================= 🔒 Private members 🔒 ======================= */


  var showTimeout;
  var hideTimeout;
  var scheduleHideAnimationFrame;
  var isBeingDestroyed = false;
  var isVisibleFromClick = false;
  var didHideDueToDocumentMouseDown = false;
  var popperUpdates = 0;
  var lastTriggerEvent;
  var currentMountCallback;
  var currentTransitionEndListener;
  var listeners = [];
  var debouncedOnMouseMove = debounce(onMouseMove, props.interactiveDebounce);
  var currentTarget; // Support iframe contexts
  // Static check that assumes any of the `triggerTarget` or `reference`
  // nodes will never change documents, even when they are updated

  var doc = getOwnerDocument(props.triggerTarget || reference);
  /* ======================= 🔑 Public members 🔑 ======================= */

  var id = idCounter++;
  var popper = createPopperElement(id, props);
  var popperChildren = getChildren(popper);
  var popperInstance = null;
  var plugins = unique(props.plugins); // These two elements are static

  var tooltip = popperChildren.tooltip,
      content = popperChildren.content;
  var transitionableElements = [tooltip, content];
  var state = {
    // The current real placement (`data-placement` attribute)
    currentPlacement: null,
    // Is the instance currently enabled?
    isEnabled: true,
    // Is the tippy currently showing and not transitioning out?
    isVisible: false,
    // Has the instance been destroyed?
    isDestroyed: false,
    // Is the tippy currently mounted to the DOM?
    isMounted: false,
    // Has the tippy finished transitioning in?
    isShown: false
  };
  var instance = {
    // properties
    id: id,
    reference: reference,
    popper: popper,
    popperChildren: popperChildren,
    popperInstance: popperInstance,
    props: props,
    state: state,
    plugins: plugins,
    // methods
    clearDelayTimeouts: clearDelayTimeouts,
    setProps: setProps,
    setContent: setContent,
    show: show,
    hide: hide,
    enable: enable,
    disable: disable,
    destroy: destroy
  };
  /* ==================== Initial instance mutations =================== */

  reference._tippy = instance;
  popper._tippy = instance;
  var pluginsHooks = plugins.map(function (plugin) {
    return plugin.fn(instance);
  });
  addListenersToTriggerTarget();
  handleAriaExpandedAttribute();

  if (!props.lazy) {
    createPopperInstance();
  }

  invokeHook('onCreate', [instance]);

  if (props.showOnCreate) {
    scheduleShow();
  } // Prevent a tippy with a delay from hiding if the cursor left then returned
  // before it started hiding


  popper.addEventListener('mouseenter', function () {
    if (instance.props.interactive && instance.state.isVisible) {
      instance.clearDelayTimeouts();
    }
  });
  popper.addEventListener('mouseleave', function () {
    if (instance.props.interactive && includes(instance.props.trigger, 'mouseenter')) {
      doc.addEventListener('mousemove', debouncedOnMouseMove);
    }
  });
  return instance;
  /* ======================= 🔒 Private methods 🔒 ======================= */

  function getNormalizedTouchSettings() {
    var touch = instance.props.touch;
    return Array.isArray(touch) ? touch : [touch, 0];
  }

  function getIsCustomTouchBehavior() {
    return getNormalizedTouchSettings()[0] === 'hold';
  }

  function getCurrentTarget() {
    return currentTarget || reference;
  }

  function getDelay(isShow) {
    // For touch or keyboard input, force `0` delay for UX reasons
    // Also if the instance is mounted but not visible (transitioning out),
    // ignore delay
    if (instance.state.isMounted && !instance.state.isVisible || currentInput.isTouch || lastTriggerEvent && lastTriggerEvent.type === 'focus') {
      return 0;
    }

    return getValueAtIndexOrReturn(instance.props.delay, isShow ? 0 : 1, defaultProps.delay);
  }

  function invokeHook(hook, args, shouldInvokePropsHook) {
    if (shouldInvokePropsHook === void 0) {
      shouldInvokePropsHook = true;
    }

    pluginsHooks.forEach(function (pluginHooks) {
      if (hasOwnProperty(pluginHooks, hook)) {
        // @ts-ignore
        pluginHooks[hook].apply(pluginHooks, args);
      }
    });

    if (shouldInvokePropsHook) {
      var _instance$props; // @ts-ignore


      (_instance$props = instance.props)[hook].apply(_instance$props, args);
    }
  }

  function handleAriaDescribedByAttribute() {
    var aria = instance.props.aria;

    if (!aria) {
      return;
    }

    var attr = "aria-" + aria;
    var id = tooltip.id;
    var nodes = normalizeToArray(instance.props.triggerTarget || reference);
    nodes.forEach(function (node) {
      var currentValue = node.getAttribute(attr);

      if (instance.state.isVisible) {
        node.setAttribute(attr, currentValue ? currentValue + " " + id : id);
      } else {
        var nextValue = currentValue && currentValue.replace(id, '').trim();

        if (nextValue) {
          node.setAttribute(attr, nextValue);
        } else {
          node.removeAttribute(attr);
        }
      }
    });
  }

  function handleAriaExpandedAttribute() {
    var nodes = normalizeToArray(instance.props.triggerTarget || reference);
    nodes.forEach(function (node) {
      if (instance.props.interactive) {
        node.setAttribute('aria-expanded', instance.state.isVisible && node === getCurrentTarget() ? 'true' : 'false');
      } else {
        node.removeAttribute('aria-expanded');
      }
    });
  }

  function cleanupInteractiveMouseListeners() {
    doc.body.removeEventListener('mouseleave', scheduleHide);
    doc.removeEventListener('mousemove', debouncedOnMouseMove);
    mouseMoveListeners = mouseMoveListeners.filter(function (listener) {
      return listener !== debouncedOnMouseMove;
    });
  }

  function onDocumentMouseDown(event) {
    // Clicked on interactive popper
    if (instance.props.interactive && popper.contains(event.target)) {
      return;
    } // Clicked on the event listeners target


    if (getCurrentTarget().contains(event.target)) {
      if (currentInput.isTouch) {
        return;
      }

      if (instance.state.isVisible && includes(instance.props.trigger, 'click')) {
        return;
      }
    }

    if (instance.props.hideOnClick === true) {
      isVisibleFromClick = false;
      instance.clearDelayTimeouts();
      instance.hide(); // `mousedown` event is fired right before `focus` if pressing the
      // currentTarget. This lets a tippy with `focus` trigger know that it
      // should not show

      didHideDueToDocumentMouseDown = true;
      setTimeout(function () {
        didHideDueToDocumentMouseDown = false;
      }); // The listener gets added in `scheduleShow()`, but this may be hiding it
      // before it shows, and hide()'s early bail-out behavior can prevent it
      // from being cleaned up

      if (!instance.state.isMounted) {
        removeDocumentMouseDownListener();
      }
    }
  }

  function addDocumentMouseDownListener() {
    doc.addEventListener('mousedown', onDocumentMouseDown, true);
  }

  function removeDocumentMouseDownListener() {
    doc.removeEventListener('mousedown', onDocumentMouseDown, true);
  }

  function onTransitionedOut(duration, callback) {
    onTransitionEnd(duration, function () {
      if (!instance.state.isVisible && popper.parentNode && popper.parentNode.contains(popper)) {
        callback();
      }
    });
  }

  function onTransitionedIn(duration, callback) {
    onTransitionEnd(duration, callback);
  }

  function onTransitionEnd(duration, callback) {
    function listener(event) {
      if (event.target === tooltip && event.propertyName === 'visibility') {
        updateTransitionEndListener(tooltip, 'remove', listener);
        callback();
      }
    } // Make callback synchronous if duration is 0
    // `transitionend` won't fire otherwise


    if (duration === 0) {
      return callback();
    }

    updateTransitionEndListener(tooltip, 'remove', currentTransitionEndListener);
    updateTransitionEndListener(tooltip, 'add', listener);
    currentTransitionEndListener = listener;
  }

  function on(eventType, handler, options) {
    if (options === void 0) {
      options = false;
    }

    var nodes = normalizeToArray(instance.props.triggerTarget || reference);
    nodes.forEach(function (node) {
      node.addEventListener(eventType, handler, options);
      listeners.push({
        node: node,
        eventType: eventType,
        handler: handler,
        options: options
      });
    });
  }

  function addListenersToTriggerTarget() {
    if (getIsCustomTouchBehavior()) {
      on('touchstart', onTrigger, PASSIVE);
      on('touchend', onMouseLeave, PASSIVE);
    }

    splitBySpaces(instance.props.trigger).forEach(function (eventType) {
      if (eventType === 'manual') {
        return;
      }

      on(eventType, onTrigger);

      switch (eventType) {
        case 'mouseenter':
          on('mouseleave', onMouseLeave);
          break;

        case 'focus':
          on(isIE ? 'focusout' : 'blur', onBlur);
          break;
      }
    });
  }

  function removeListenersFromTriggerTarget() {
    listeners.forEach(function (_ref) {
      var node = _ref.node,
          eventType = _ref.eventType,
          handler = _ref.handler,
          options = _ref.options;
      node.removeEventListener(eventType, handler, options);
    });
    listeners = [];
  }

  function onTrigger(event) {
    var shouldScheduleClickHide = false;

    if (!instance.state.isEnabled || isEventListenerStopped(event) || didHideDueToDocumentMouseDown) {
      return;
    }

    lastTriggerEvent = event;
    currentTarget = event.currentTarget;
    handleAriaExpandedAttribute();

    if (!instance.state.isVisible && isMouseEvent(event)) {
      // If scrolling, `mouseenter` events can be fired if the cursor lands
      // over a new target, but `mousemove` events don't get fired. This
      // causes interactive tooltips to get stuck open until the cursor is
      // moved
      mouseMoveListeners.forEach(function (listener) {
        return listener(event);
      });
    } // Toggle show/hide when clicking click-triggered tooltips


    if (event.type === 'click' && (!includes(instance.props.trigger, 'mouseenter') || isVisibleFromClick) && instance.props.hideOnClick !== false && instance.state.isVisible) {
      shouldScheduleClickHide = true;
    } else {
      var _getNormalizedTouchSe = getNormalizedTouchSettings(),
          value = _getNormalizedTouchSe[0],
          duration = _getNormalizedTouchSe[1];

      if (currentInput.isTouch && value === 'hold' && duration) {
        // We can hijack the show timeout here, it will be cleared by
        // `scheduleHide()` when necessary
        showTimeout = setTimeout(function () {
          scheduleShow(event);
        }, duration);
      } else {
        scheduleShow(event);
      }
    }

    if (event.type === 'click') {
      isVisibleFromClick = !shouldScheduleClickHide;
    }

    if (shouldScheduleClickHide) {
      scheduleHide(event);
    }
  }

  function onMouseMove(event) {
    var isCursorOverReferenceOrPopper = closestCallback(event.target, function (el) {
      return el === reference || el === popper;
    });

    if (isCursorOverReferenceOrPopper) {
      return;
    }

    var popperTreeData = arrayFrom(popper.querySelectorAll(POPPER_SELECTOR)).concat(popper).map(function (popper) {
      var instance = popper._tippy;
      var tooltip = instance.popperChildren.tooltip;
      var interactiveBorder = instance.props.interactiveBorder;
      return {
        popperRect: popper.getBoundingClientRect(),
        tooltipRect: tooltip.getBoundingClientRect(),
        interactiveBorder: interactiveBorder
      };
    });

    if (isCursorOutsideInteractiveBorder(popperTreeData, event)) {
      cleanupInteractiveMouseListeners();
      scheduleHide(event);
    }
  }

  function onMouseLeave(event) {
    if (isEventListenerStopped(event)) {
      return;
    }

    if (instance.props.interactive) {
      doc.body.addEventListener('mouseleave', scheduleHide);
      doc.addEventListener('mousemove', debouncedOnMouseMove);
      pushIfUnique(mouseMoveListeners, debouncedOnMouseMove);
      return;
    }

    if (includes(instance.props.trigger, 'click') && isVisibleFromClick) {
      return;
    }

    scheduleHide(event);
  }

  function onBlur(event) {
    if (event.target !== getCurrentTarget()) {
      return;
    } // If focus was moved to within the popper


    if (instance.props.interactive && event.relatedTarget && popper.contains(event.relatedTarget)) {
      return;
    }

    scheduleHide(event);
  }

  function isEventListenerStopped(event) {
    var supportsTouch = 'ontouchstart' in window;
    var isTouchEvent = includes(event.type, 'touch');
    var isCustomTouch = getIsCustomTouchBehavior();
    return supportsTouch && currentInput.isTouch && isCustomTouch && !isTouchEvent || currentInput.isTouch && !isCustomTouch && isTouchEvent;
  }

  function createPopperInstance() {
    var popperOptions = instance.props.popperOptions;
    var arrow = instance.popperChildren.arrow;
    var flipModifier = getModifier(popperOptions, 'flip');
    var preventOverflowModifier = getModifier(popperOptions, 'preventOverflow');
    var distancePx;

    function applyMutations(data) {
      var prevPlacement = instance.state.currentPlacement;
      instance.state.currentPlacement = data.placement;

      if (instance.props.flip && !instance.props.flipOnUpdate) {
        if (data.flipped) {
          instance.popperInstance.options.placement = data.placement;
        }

        setModifierValue(instance.popperInstance.modifiers, 'flip', 'enabled', false);
      }

      tooltip.setAttribute('data-placement', data.placement);

      if (data.attributes['x-out-of-boundaries'] !== false) {
        tooltip.setAttribute('data-out-of-boundaries', '');
      } else {
        tooltip.removeAttribute('data-out-of-boundaries');
      }

      var basePlacement = getBasePlacement(data.placement);
      var isVerticalPlacement = includes(['top', 'bottom'], basePlacement);
      var isSecondaryPlacement = includes(['bottom', 'right'], basePlacement); // Apply `distance` prop

      tooltip.style.top = '0';
      tooltip.style.left = '0';
      tooltip.style[isVerticalPlacement ? 'top' : 'left'] = (isSecondaryPlacement ? 1 : -1) * distancePx + 'px'; // Careful not to cause an infinite loop here
      // Fixes https://github.com/FezVrasta/popper.js/issues/784

      if (prevPlacement && prevPlacement !== data.placement) {
        instance.popperInstance.update();
      }
    }

    var config = _extends({
      eventsEnabled: false,
      placement: instance.props.placement
    }, popperOptions, {
      modifiers: _extends({}, popperOptions && popperOptions.modifiers, {
        // We can't use `padding` on the popper el because of these bugs when
        // flipping from a vertical to horizontal placement or vice-versa,
        // there is severe flickering.
        // https://github.com/FezVrasta/popper.js/issues/720
        // This workaround increases bundle size by 250B minzip unfortunately,
        // due to need to custom compute the distance (since Popper rect does
        // not get affected by the inner tooltip's distance offset)
        tippyDistance: {
          enabled: true,
          order: 0,
          fn: function fn(data) {
            // `html` fontSize may change while `popperInstance` is alive
            // e.g. on resize in media queries
            distancePx = getUnitsInPx(doc, instance.props.distance);
            var basePlacement = getBasePlacement(data.placement);
            var computedPreventOverflowPadding = getComputedPadding(basePlacement, preventOverflowModifier && preventOverflowModifier.padding, distancePx);
            var computedFlipPadding = getComputedPadding(basePlacement, flipModifier && flipModifier.padding, distancePx);
            var instanceModifiers = instance.popperInstance.modifiers;
            setModifierValue(instanceModifiers, 'preventOverflow', 'padding', computedPreventOverflowPadding);
            setModifierValue(instanceModifiers, 'flip', 'padding', computedFlipPadding);
            return data;
          }
        },
        preventOverflow: _extends({
          boundariesElement: instance.props.boundary
        }, preventOverflowModifier),
        flip: _extends({
          enabled: instance.props.flip,
          behavior: instance.props.flipBehavior
        }, flipModifier),
        arrow: _extends({
          element: arrow,
          enabled: !!arrow
        }, getModifier(popperOptions, 'arrow')),
        offset: _extends({
          offset: instance.props.offset
        }, getModifier(popperOptions, 'offset'))
      }),
      onCreate: function onCreate(data) {
        applyMutations(data);
        preserveInvocation(popperOptions && popperOptions.onCreate, config.onCreate, [data]);
        runMountCallback();
      },
      onUpdate: function onUpdate(data) {
        applyMutations(data);
        preserveInvocation(popperOptions && popperOptions.onUpdate, config.onUpdate, [data]);
        runMountCallback();
      }
    });

    instance.popperInstance = new popper_js__WEBPACK_IMPORTED_MODULE_0__["default"](reference, popper, config);
  }

  function runMountCallback() {
    // Only invoke currentMountCallback after 2 updates
    // This fixes some bugs in Popper.js (TODO: aim for only 1 update)
    if (popperUpdates === 0) {
      popperUpdates++; // 1

      instance.popperInstance.update();
    } else if (currentMountCallback && popperUpdates === 1) {
      popperUpdates++; // 2

      reflow(popper);
      currentMountCallback();
    }
  }

  function mount() {
    // The mounting callback (`currentMountCallback`) is only run due to a
    // popperInstance update/create
    popperUpdates = 0;
    var appendTo = instance.props.appendTo;
    var parentNode; // By default, we'll append the popper to the triggerTargets's parentNode so
    // it's directly after the reference element so the elements inside the
    // tippy can be tabbed to
    // If there are clipping issues, the user can specify a different appendTo
    // and ensure focus management is handled correctly manually

    var node = getCurrentTarget();

    if (instance.props.interactive && appendTo === defaultProps.appendTo || appendTo === 'parent') {
      parentNode = node.parentNode;
    } else {
      parentNode = invokeWithArgsOrReturn(appendTo, [node]);
    } // The popper element needs to exist on the DOM before its position can be
    // updated as Popper.js needs to read its dimensions


    if (!parentNode.contains(popper)) {
      parentNode.appendChild(popper);
    }

    if (true) {
      // Accessibility check
      warnWhen(instance.props.interactive && appendTo === defaultProps.appendTo && node.nextElementSibling !== popper, ['Interactive tippy element may not be accessible via keyboard navigation', 'because it is not directly after the reference element in the DOM source', 'order.', '\n\n', 'Using a wrapper <div> or <span> tag around the reference element solves', 'this by creating a new parentNode context.', '\n\n', 'Specifying `appendTo: document.body` silences this warning, but it', 'assumes you are using a focus management solution to handle keyboard', 'navigation.', '\n\n', 'See: https://atomiks.github.io/tippyjs/accessibility/#interactivity'].join(' '));
    }

    setModifierValue(instance.popperInstance.modifiers, 'flip', 'enabled', instance.props.flip);
    instance.popperInstance.enableEventListeners(); // Mounting callback invoked in `onUpdate`

    instance.popperInstance.update();
  }

  function scheduleShow(event) {
    instance.clearDelayTimeouts();

    if (!instance.popperInstance) {
      createPopperInstance();
    }

    if (event) {
      invokeHook('onTrigger', [instance, event]);
    }

    addDocumentMouseDownListener();
    var delay = getDelay(true);

    if (delay) {
      showTimeout = setTimeout(function () {
        instance.show();
      }, delay);
    } else {
      instance.show();
    }
  }

  function scheduleHide(event) {
    instance.clearDelayTimeouts();
    invokeHook('onUntrigger', [instance, event]);

    if (!instance.state.isVisible) {
      removeDocumentMouseDownListener();
      return;
    }

    var delay = getDelay(false);

    if (delay) {
      hideTimeout = setTimeout(function () {
        if (instance.state.isVisible) {
          instance.hide();
        }
      }, delay);
    } else {
      // Fixes a `transitionend` problem when it fires 1 frame too
      // late sometimes, we don't want hide() to be called.
      scheduleHideAnimationFrame = requestAnimationFrame(function () {
        instance.hide();
      });
    }
  }
  /* ======================= 🔑 Public methods 🔑 ======================= */


  function enable() {
    instance.state.isEnabled = true;
  }

  function disable() {
    // Disabling the instance should also hide it
    // https://github.com/atomiks/tippy.js-react/issues/106
    instance.hide();
    instance.state.isEnabled = false;
  }

  function clearDelayTimeouts() {
    clearTimeout(showTimeout);
    clearTimeout(hideTimeout);
    cancelAnimationFrame(scheduleHideAnimationFrame);
  }

  function setProps(partialProps) {
    if (true) {
      warnWhen(instance.state.isDestroyed, createMemoryLeakWarning('setProps'));
    }

    if (instance.state.isDestroyed) {
      return;
    }

    if (true) {
      validateProps(partialProps, plugins);
      warnWhen(partialProps.plugins ? partialProps.plugins.length !== plugins.length || plugins.some(function (p, i) {
        if (partialProps.plugins && partialProps.plugins[i]) {
          return p !== partialProps.plugins[i];
        } else {
          return true;
        }
      }) : false, "Cannot update plugins");
    }

    invokeHook('onBeforeUpdate', [instance, partialProps]);
    removeListenersFromTriggerTarget();
    var prevProps = instance.props;
    var nextProps = evaluateProps(reference, _extends({}, instance.props, {}, partialProps, {
      ignoreAttributes: true
    }));
    nextProps.ignoreAttributes = useIfDefined(partialProps.ignoreAttributes, prevProps.ignoreAttributes);
    instance.props = nextProps;
    addListenersToTriggerTarget();

    if (prevProps.interactiveDebounce !== nextProps.interactiveDebounce) {
      cleanupInteractiveMouseListeners();
      debouncedOnMouseMove = debounce(onMouseMove, nextProps.interactiveDebounce);
    }

    updatePopperElement(popper, prevProps, nextProps);
    instance.popperChildren = getChildren(popper); // Ensure stale aria-expanded attributes are removed

    if (prevProps.triggerTarget && !nextProps.triggerTarget) {
      normalizeToArray(prevProps.triggerTarget).forEach(function (node) {
        node.removeAttribute('aria-expanded');
      });
    } else if (nextProps.triggerTarget) {
      reference.removeAttribute('aria-expanded');
    }

    handleAriaExpandedAttribute();

    if (instance.popperInstance) {
      if (POPPER_INSTANCE_DEPENDENCIES.some(function (prop) {
        return hasOwnProperty(partialProps, prop) && partialProps[prop] !== prevProps[prop];
      })) {
        var currentReference = instance.popperInstance.reference;
        instance.popperInstance.destroy();
        createPopperInstance();
        instance.popperInstance.reference = currentReference;

        if (instance.state.isVisible) {
          instance.popperInstance.enableEventListeners();
        }
      } else {
        instance.popperInstance.update();
      }
    }

    invokeHook('onAfterUpdate', [instance, partialProps]);
  }

  function setContent(content) {
    instance.setProps({
      content: content
    });
  }

  function show(duration) {
    if (duration === void 0) {
      duration = getValueAtIndexOrReturn(instance.props.duration, 0, defaultProps.duration);
    }

    if (true) {
      warnWhen(instance.state.isDestroyed, createMemoryLeakWarning('show'));
    } // Early bail-out


    var isAlreadyVisible = instance.state.isVisible;
    var isDestroyed = instance.state.isDestroyed;
    var isDisabled = !instance.state.isEnabled;
    var isTouchAndTouchDisabled = currentInput.isTouch && !instance.props.touch;

    if (isAlreadyVisible || isDestroyed || isDisabled || isTouchAndTouchDisabled) {
      return;
    } // Normalize `disabled` behavior across browsers.
    // Firefox allows events on disabled elements, but Chrome doesn't.
    // Using a wrapper element (i.e. <span>) is recommended.


    if (getCurrentTarget().hasAttribute('disabled')) {
      return;
    }

    if (!instance.popperInstance) {
      createPopperInstance();
    }

    invokeHook('onShow', [instance], false);

    if (instance.props.onShow(instance) === false) {
      return;
    }

    addDocumentMouseDownListener();
    popper.style.visibility = 'visible';
    instance.state.isVisible = true; // Prevent a transition of the popper from its previous position and of the
    // elements at a different placement
    // Check if the tippy was fully unmounted before `show()` was called, to
    // allow for smooth transition for `createSingleton()`

    if (!instance.state.isMounted) {
      setTransitionDuration(transitionableElements.concat(popper), 0);
    }

    currentMountCallback = function currentMountCallback() {
      if (!instance.state.isVisible) {
        return;
      }

      setTransitionDuration([popper], instance.props.updateDuration);
      setTransitionDuration(transitionableElements, duration);
      setVisibilityState(transitionableElements, 'visible');
      handleAriaDescribedByAttribute();
      handleAriaExpandedAttribute();
      pushIfUnique(mountedInstances, instance);
      updateIOSClass(true);
      instance.state.isMounted = true;
      invokeHook('onMount', [instance]);
      onTransitionedIn(duration, function () {
        instance.state.isShown = true;
        invokeHook('onShown', [instance]);
      });
    };

    mount();
  }

  function hide(duration) {
    if (duration === void 0) {
      duration = getValueAtIndexOrReturn(instance.props.duration, 1, defaultProps.duration);
    }

    if (true) {
      warnWhen(instance.state.isDestroyed, createMemoryLeakWarning('hide'));
    } // Early bail-out


    var isAlreadyHidden = !instance.state.isVisible && !isBeingDestroyed;
    var isDestroyed = instance.state.isDestroyed;
    var isDisabled = !instance.state.isEnabled && !isBeingDestroyed;

    if (isAlreadyHidden || isDestroyed || isDisabled) {
      return;
    }

    invokeHook('onHide', [instance], false);

    if (instance.props.onHide(instance) === false && !isBeingDestroyed) {
      return;
    }

    removeDocumentMouseDownListener();
    popper.style.visibility = 'hidden';
    instance.state.isVisible = false;
    instance.state.isShown = false;
    setTransitionDuration(transitionableElements, duration);
    setVisibilityState(transitionableElements, 'hidden');
    handleAriaDescribedByAttribute();
    handleAriaExpandedAttribute();
    onTransitionedOut(duration, function () {
      instance.popperInstance.disableEventListeners();
      instance.popperInstance.options.placement = instance.props.placement;
      popper.parentNode.removeChild(popper);
      mountedInstances = mountedInstances.filter(function (i) {
        return i !== instance;
      });

      if (mountedInstances.length === 0) {
        updateIOSClass(false);
      }

      instance.state.isMounted = false;
      invokeHook('onHidden', [instance]);
    });
  }

  function destroy() {
    if (true) {
      warnWhen(instance.state.isDestroyed, createMemoryLeakWarning('destroy'));
    }

    if (instance.state.isDestroyed) {
      return;
    }

    isBeingDestroyed = true;
    instance.clearDelayTimeouts();
    instance.hide(0);
    removeListenersFromTriggerTarget();
    delete reference._tippy;

    if (instance.popperInstance) {
      instance.popperInstance.destroy();
    }

    isBeingDestroyed = false;
    instance.state.isDestroyed = true;
    invokeHook('onDestroy', [instance]);
  }
}

function tippy(targets, optionalProps,
/** @deprecated use Props.plugins */
plugins) {
  if (optionalProps === void 0) {
    optionalProps = {};
  }

  if (plugins === void 0) {
    plugins = [];
  }

  plugins = defaultProps.plugins.concat(optionalProps.plugins || plugins);

  if (true) {
    validateTargets(targets);
    validateProps(optionalProps, plugins);
  }

  bindGlobalEventListeners();

  var passedProps = _extends({}, optionalProps, {
    plugins: plugins
  });

  var elements = getArrayOfElements(targets);

  if (true) {
    var isSingleContentElement = isElement(passedProps.content);
    var isMoreThanOneReferenceElement = elements.length > 1;
    warnWhen(isSingleContentElement && isMoreThanOneReferenceElement, ['tippy() was passed an Element as the `content` prop, but more than one tippy', 'instance was created by this invocation. This means the content element will', 'only be appended to the last tippy instance.', '\n\n', 'Instead, pass the .innerHTML of the element, or use a function that returns a', 'cloned version of the element instead.', '\n\n', '1) content: element.innerHTML\n', '2) content: () => element.cloneNode(true)'].join(' '));
  }

  var instances = elements.reduce(function (acc, reference) {
    var instance = reference && createTippy(reference, passedProps);

    if (instance) {
      acc.push(instance);
    }

    return acc;
  }, []);
  return isElement(targets) ? instances[0] : instances;
}

tippy.version = version;
tippy.defaultProps = defaultProps;
tippy.setDefaultProps = setDefaultProps;
tippy.currentInput = currentInput;
/**
 * Hides all visible poppers on the document
 */

var hideAll = function hideAll(_temp) {
  var _ref = _temp === void 0 ? {} : _temp,
      excludedReferenceOrInstance = _ref.exclude,
      duration = _ref.duration;

  mountedInstances.forEach(function (instance) {
    var isExcluded = false;

    if (excludedReferenceOrInstance) {
      isExcluded = isReferenceElement(excludedReferenceOrInstance) ? instance.reference === excludedReferenceOrInstance : instance.popper === excludedReferenceOrInstance.popper;
    }

    if (!isExcluded) {
      instance.hide(duration);
    }
  });
};
/**
 * Returns a proxy wrapper function that passes the plugins
 * @deprecated use tippy.setDefaultProps({plugins: [...]});
 */


function createTippyWithPlugins(outerPlugins) {
  if (true) {
    warnWhen(true, ['createTippyWithPlugins([...]) has been deprecated.', '\n\n', 'Use tippy.setDefaultProps({plugins: [...]}) instead.'].join(' '));
  }

  var tippyPluginsWrapper = function tippyPluginsWrapper(targets, optionalProps, innerPlugins) {
    if (optionalProps === void 0) {
      optionalProps = {};
    }

    if (innerPlugins === void 0) {
      innerPlugins = [];
    }

    innerPlugins = optionalProps.plugins || innerPlugins;
    return tippy(targets, _extends({}, optionalProps, {
      plugins: [].concat(outerPlugins, innerPlugins)
    }));
  };

  tippyPluginsWrapper.version = version;
  tippyPluginsWrapper.defaultProps = defaultProps;
  tippyPluginsWrapper.setDefaultProps = setDefaultProps;
  tippyPluginsWrapper.currentInput = currentInput; // @ts-ignore

  return tippyPluginsWrapper;
}



/***/ }),

/***/ "../../front/node_modules/tippy.js/dist/tippy.css":
/*!********************************************************************************************************!*\
  !*** /Users/gregoriogalante/Workspace/matilda/matilda-core/front/node_modules/tippy.js/dist/tippy.css ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../../test/dummy/node_modules/css-loader/dist/cjs.js??ref--6-1!../../../../test/dummy/node_modules/postcss-loader/src??ref--6-2!./tippy.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!../../front/node_modules/tippy.js/dist/tippy.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../../../test/dummy/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ "../../front/node_modules/tippy.js/dist/tippy.esm.js":
/*!***********************************************************************************************************!*\
  !*** /Users/gregoriogalante/Workspace/matilda/matilda-core/front/node_modules/tippy.js/dist/tippy.esm.js ***!
  \***********************************************************************************************************/
/*! exports provided: createTippyWithPlugins, default, hideAll, roundArrow, animateFill, createSingleton, delegate, followCursor, inlinePositioning, sticky */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "animateFill", function() { return animateFill; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSingleton", function() { return createSingleton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "delegate", function() { return delegate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "followCursor", function() { return followCursor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inlinePositioning", function() { return inlinePositioning; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sticky", function() { return sticky; });
/* harmony import */ var _tippy_chunk_esm_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tippy.chunk.esm.js */ "../../front/node_modules/tippy.js/dist/tippy.chunk.esm.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createTippyWithPlugins", function() { return _tippy_chunk_esm_js__WEBPACK_IMPORTED_MODULE_0__["m"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _tippy_chunk_esm_js__WEBPACK_IMPORTED_MODULE_0__["t"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hideAll", function() { return _tippy_chunk_esm_js__WEBPACK_IMPORTED_MODULE_0__["l"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "roundArrow", function() { return _tippy_chunk_esm_js__WEBPACK_IMPORTED_MODULE_0__["R"]; });

/* harmony import */ var popper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! popper.js */ "../../front/node_modules/popper.js/dist/esm/popper.js");
/**!
* tippy.js v5.1.3
* (c) 2017-2019 atomiks
* MIT License
*/



/**
 * Re-uses a single tippy element for many different tippy instances.
 * Replaces v4's `tippy.group()`.
 */

var createSingleton = function createSingleton(tippyInstances, optionalProps,
/** @deprecated use Props.plugins */
plugins) {
  if (optionalProps === void 0) {
    optionalProps = {};
  }

  if (plugins === void 0) {
    plugins = [];
  }

  if (true) {
    Object(_tippy_chunk_esm_js__WEBPACK_IMPORTED_MODULE_0__["e"])(!Array.isArray(tippyInstances), ['The first argument passed to createSingleton() must be an array of tippy', 'instances. The passed value was', String(tippyInstances)].join(' '));
  }

  plugins = optionalProps.plugins || plugins;
  tippyInstances.forEach(function (instance) {
    instance.disable();
  });

  var userAria = Object(_tippy_chunk_esm_js__WEBPACK_IMPORTED_MODULE_0__["_"])({}, _tippy_chunk_esm_js__WEBPACK_IMPORTED_MODULE_0__["d"], {}, optionalProps).aria;

  var currentAria;
  var currentTarget;
  var shouldSkipUpdate = false;
  var references = tippyInstances.map(function (instance) {
    return instance.reference;
  });
  var singleton = {
    fn: function fn(instance) {
      function handleAriaDescribedByAttribute(isShow) {
        if (!currentAria) {
          return;
        }

        var attr = "aria-" + currentAria;

        if (isShow && !instance.props.interactive) {
          currentTarget.setAttribute(attr, instance.popperChildren.tooltip.id);
        } else {
          currentTarget.removeAttribute(attr);
        }
      }

      return {
        onAfterUpdate: function onAfterUpdate(_, _ref) {
          var aria = _ref.aria; // Ensure `aria` for the singleton instance stays `null`, while
          // changing the `userAria` value

          if (aria !== undefined && aria !== userAria) {
            if (!shouldSkipUpdate) {
              userAria = aria;
            } else {
              shouldSkipUpdate = true;
              instance.setProps({
                aria: null
              });
              shouldSkipUpdate = false;
            }
          }
        },
        onDestroy: function onDestroy() {
          tippyInstances.forEach(function (instance) {
            instance.enable();
          });
        },
        onMount: function onMount() {
          handleAriaDescribedByAttribute(true);
        },
        onUntrigger: function onUntrigger() {
          handleAriaDescribedByAttribute(false);
        },
        onTrigger: function onTrigger(_, event) {
          var target = event.currentTarget;
          var index = references.indexOf(target); // bail-out

          if (target === currentTarget) {
            return;
          }

          currentTarget = target;
          currentAria = userAria;

          if (instance.state.isVisible) {
            handleAriaDescribedByAttribute(true);
          }

          instance.popperInstance.reference = target;
          instance.setContent(tippyInstances[index].props.content);
        }
      };
    }
  };
  return Object(_tippy_chunk_esm_js__WEBPACK_IMPORTED_MODULE_0__["t"])(Object(_tippy_chunk_esm_js__WEBPACK_IMPORTED_MODULE_0__["a"])(), Object(_tippy_chunk_esm_js__WEBPACK_IMPORTED_MODULE_0__["_"])({}, optionalProps, {
    plugins: [singleton].concat(plugins),
    aria: null,
    triggerTarget: references
  }));
};

var BUBBLING_EVENTS_MAP = {
  mouseover: 'mouseenter',
  focusin: 'focus',
  click: 'click'
};
/**
 * Creates a delegate instance that controls the creation of tippy instances
 * for child elements (`target` CSS selector).
 */

function delegate(targets, props,
/** @deprecated use Props.plugins */
plugins) {
  if (plugins === void 0) {
    plugins = [];
  }

  if (true) {
    Object(_tippy_chunk_esm_js__WEBPACK_IMPORTED_MODULE_0__["e"])(!(props && props.target), ['You must specity a `target` prop indicating a CSS selector string matching', 'the target elements that should receive a tippy.'].join(' '));
  }

  plugins = props.plugins || plugins;
  var listeners = [];
  var childTippyInstances = [];
  var target = props.target;
  var nativeProps = Object(_tippy_chunk_esm_js__WEBPACK_IMPORTED_MODULE_0__["r"])(props, ['target']);

  var parentProps = Object(_tippy_chunk_esm_js__WEBPACK_IMPORTED_MODULE_0__["_"])({}, nativeProps, {
    plugins: plugins,
    trigger: 'manual'
  });

  var childProps = Object(_tippy_chunk_esm_js__WEBPACK_IMPORTED_MODULE_0__["_"])({}, nativeProps, {
    plugins: plugins,
    showOnCreate: true
  });

  var returnValue = Object(_tippy_chunk_esm_js__WEBPACK_IMPORTED_MODULE_0__["t"])(targets, parentProps);
  var normalizedReturnValue = Object(_tippy_chunk_esm_js__WEBPACK_IMPORTED_MODULE_0__["n"])(returnValue);

  function onTrigger(event) {
    if (!event.target) {
      return;
    }

    var targetNode = event.target.closest(target);

    if (!targetNode) {
      return;
    } // Get relevant trigger with fallbacks:
    // 1. Check `data-tippy-trigger` attribute on target node
    // 2. Fallback to `trigger` passed to `delegate()`
    // 3. Fallback to `defaultProps.trigger`


    var trigger = targetNode.getAttribute('data-tippy-trigger') || props.trigger || _tippy_chunk_esm_js__WEBPACK_IMPORTED_MODULE_0__["d"].trigger; // Only create the instance if the bubbling event matches the trigger type

    if (!Object(_tippy_chunk_esm_js__WEBPACK_IMPORTED_MODULE_0__["i"])(trigger, BUBBLING_EVENTS_MAP[event.type])) {
      return;
    }

    var instance = Object(_tippy_chunk_esm_js__WEBPACK_IMPORTED_MODULE_0__["t"])(targetNode, childProps);

    if (instance) {
      childTippyInstances = childTippyInstances.concat(instance);
    }
  }

  function on(node, eventType, handler, options) {
    if (options === void 0) {
      options = false;
    }

    node.addEventListener(eventType, handler, options);
    listeners.push({
      node: node,
      eventType: eventType,
      handler: handler,
      options: options
    });
  }

  function addEventListeners(instance) {
    var reference = instance.reference;
    on(reference, 'mouseover', onTrigger);
    on(reference, 'focusin', onTrigger);
    on(reference, 'click', onTrigger);
  }

  function removeEventListeners() {
    listeners.forEach(function (_ref) {
      var node = _ref.node,
          eventType = _ref.eventType,
          handler = _ref.handler,
          options = _ref.options;
      node.removeEventListener(eventType, handler, options);
    });
    listeners = [];
  }

  function applyMutations(instance) {
    var originalDestroy = instance.destroy;

    instance.destroy = function (shouldDestroyChildInstances) {
      if (shouldDestroyChildInstances === void 0) {
        shouldDestroyChildInstances = true;
      }

      if (shouldDestroyChildInstances) {
        childTippyInstances.forEach(function (instance) {
          instance.destroy();
        });
      }

      childTippyInstances = [];
      removeEventListeners();
      originalDestroy();
    };

    addEventListeners(instance);
  }

  normalizedReturnValue.forEach(applyMutations);
  return returnValue;
}

var animateFill = {
  name: 'animateFill',
  defaultValue: false,
  fn: function fn(instance) {
    var _instance$popperChild = instance.popperChildren,
        tooltip = _instance$popperChild.tooltip,
        content = _instance$popperChild.content;
    var backdrop = instance.props.animateFill && !_tippy_chunk_esm_js__WEBPACK_IMPORTED_MODULE_0__["b"] ? createBackdropElement() : null;

    function addBackdropToPopperChildren() {
      instance.popperChildren.backdrop = backdrop;
    }

    return {
      onCreate: function onCreate() {
        if (backdrop) {
          addBackdropToPopperChildren();
          tooltip.insertBefore(backdrop, tooltip.firstElementChild);
          tooltip.setAttribute('data-animatefill', '');
          tooltip.style.overflow = 'hidden';
          instance.setProps({
            animation: 'shift-away',
            arrow: false
          });
        }
      },
      onMount: function onMount() {
        if (backdrop) {
          var transitionDuration = tooltip.style.transitionDuration;
          var duration = Number(transitionDuration.replace('ms', '')); // The content should fade in after the backdrop has mostly filled the
          // tooltip element. `clip-path` is the other alternative but is not
          // well-supported and is buggy on some devices.

          content.style.transitionDelay = Math.round(duration / 10) + "ms";
          backdrop.style.transitionDuration = transitionDuration;
          Object(_tippy_chunk_esm_js__WEBPACK_IMPORTED_MODULE_0__["s"])([backdrop], 'visible'); // Warn if the stylesheets are not loaded

          if (true) {
            Object(_tippy_chunk_esm_js__WEBPACK_IMPORTED_MODULE_0__["w"])(getComputedStyle(backdrop).position !== 'absolute', "The `tippy.js/dist/backdrop.css` stylesheet has not been\n              imported!\n              \n              The `animateFill` plugin requires this stylesheet to work.");
            Object(_tippy_chunk_esm_js__WEBPACK_IMPORTED_MODULE_0__["w"])(getComputedStyle(tooltip).transform === 'none', "The `tippy.js/animations/shift-away.css` stylesheet has not\n              been imported!\n              \n              The `animateFill` plugin requires this stylesheet to work.");
          }
        }
      },
      onShow: function onShow() {
        if (backdrop) {
          backdrop.style.transitionDuration = '0ms';
        }
      },
      onHide: function onHide() {
        if (backdrop) {
          Object(_tippy_chunk_esm_js__WEBPACK_IMPORTED_MODULE_0__["s"])([backdrop], 'hidden');
        }
      },
      onAfterUpdate: function onAfterUpdate() {
        // With this type of prop, it's highly unlikely it will be changed
        // dynamically. We'll leave out the diff/update logic it to save bytes.
        // `popperChildren` is assigned a new object onAfterUpdate
        addBackdropToPopperChildren();
      }
    };
  }
};

function createBackdropElement() {
  var backdrop = Object(_tippy_chunk_esm_js__WEBPACK_IMPORTED_MODULE_0__["a"])();
  backdrop.className = _tippy_chunk_esm_js__WEBPACK_IMPORTED_MODULE_0__["B"];
  Object(_tippy_chunk_esm_js__WEBPACK_IMPORTED_MODULE_0__["s"])([backdrop], 'hidden');
  return backdrop;
}

var followCursor = {
  name: 'followCursor',
  defaultValue: false,
  fn: function fn(instance) {
    var reference = instance.reference,
        popper = instance.popper;
    var originalReference = null; // Support iframe contexts
    // Static check that assumes any of the `triggerTarget` or `reference`
    // nodes will never change documents, even when they are updated

    var doc = Object(_tippy_chunk_esm_js__WEBPACK_IMPORTED_MODULE_0__["g"])(instance.props.triggerTarget || reference); // Internal state

    var lastMouseMoveEvent;
    var mouseCoords = null;
    var isInternallySettingControlledProp = false; // These are controlled by this plugin, so we need to store the user's
    // original prop value

    var userProps = instance.props;

    function setUserProps(props) {
      var keys = Object.keys(props);
      keys.forEach(function (prop) {
        userProps[prop] = Object(_tippy_chunk_esm_js__WEBPACK_IMPORTED_MODULE_0__["u"])(props[prop], userProps[prop]);
      });
    }

    function getIsManual() {
      return instance.props.trigger.trim() === 'manual';
    }

    function getIsEnabled() {
      // #597
      var isValidMouseEvent = getIsManual() ? true : // Check if a keyboard "click"
      mouseCoords !== null && !(mouseCoords.clientX === 0 && mouseCoords.clientY === 0);
      return instance.props.followCursor && isValidMouseEvent;
    }

    function getIsInitialBehavior() {
      return _tippy_chunk_esm_js__WEBPACK_IMPORTED_MODULE_0__["f"].isTouch || instance.props.followCursor === 'initial' && instance.state.isVisible;
    }

    function resetReference() {
      if (instance.popperInstance && originalReference) {
        instance.popperInstance.reference = originalReference;
      }
    }

    function handlePlacement() {
      // Due to `getVirtualOffsets()`, we need to reverse the placement if it's
      // shifted (start -> end, and vice-versa)
      // Early bail-out
      if (!getIsEnabled() && instance.props.placement === userProps.placement) {
        return;
      }

      var placement = userProps.placement;
      var shift = placement.split('-')[1];
      isInternallySettingControlledProp = true;
      instance.setProps({
        placement: getIsEnabled() && shift ? placement.replace(shift, shift === 'start' ? 'end' : 'start') : placement
      });
      isInternallySettingControlledProp = false;
    }

    function handlePopperListeners() {
      if (!instance.popperInstance) {
        return;
      } // Popper's scroll listeners make sense for `true` only. TODO: work out
      // how to only listen horizontal scroll for "horizontal" and vertical
      // scroll for "vertical"


      if (getIsEnabled() && (getIsInitialBehavior() || instance.props.followCursor !== true)) {
        instance.popperInstance.disableEventListeners();
      }
    }

    function handleMouseMoveListener() {
      if (getIsEnabled()) {
        addListener();
      } else {
        resetReference();
      }
    }

    function triggerLastMouseMove() {
      if (getIsEnabled()) {
        onMouseMove(lastMouseMoveEvent);
      }
    }

    function addListener() {
      doc.addEventListener('mousemove', onMouseMove);
    }

    function removeListener() {
      doc.removeEventListener('mousemove', onMouseMove);
    }

    function onMouseMove(event) {
      var _lastMouseMoveEvent = lastMouseMoveEvent = event,
          clientX = _lastMouseMoveEvent.clientX,
          clientY = _lastMouseMoveEvent.clientY;

      if (!instance.popperInstance || !instance.state.currentPlacement) {
        return;
      } // If the instance is interactive, avoid updating the position unless it's
      // over the reference element


      var isCursorOverReference = Object(_tippy_chunk_esm_js__WEBPACK_IMPORTED_MODULE_0__["h"])(event.target, function (el) {
        return el === reference;
      });
      var rect = reference.getBoundingClientRect();
      var followCursor = instance.props.followCursor;
      var isHorizontal = followCursor === 'horizontal';
      var isVertical = followCursor === 'vertical';
      var isVerticalPlacement = Object(_tippy_chunk_esm_js__WEBPACK_IMPORTED_MODULE_0__["i"])(['top', 'bottom'], Object(_tippy_chunk_esm_js__WEBPACK_IMPORTED_MODULE_0__["j"])(instance.state.currentPlacement)); // The virtual reference needs some size to prevent itself from overflowing

      var _getVirtualOffsets = getVirtualOffsets(popper, isVerticalPlacement),
          size = _getVirtualOffsets.size,
          x = _getVirtualOffsets.x,
          y = _getVirtualOffsets.y;

      if (isCursorOverReference || !instance.props.interactive) {
        // Preserve custom position ReferenceObjects, which may not be the
        // original targets reference passed as an argument
        if (originalReference === null) {
          originalReference = instance.popperInstance.reference;
        }

        instance.popperInstance.reference = {
          referenceNode: reference,
          // These `client` values don't get used by Popper.js if they are 0
          clientWidth: 0,
          clientHeight: 0,
          getBoundingClientRect: function getBoundingClientRect() {
            return {
              width: isVerticalPlacement ? size : 0,
              height: isVerticalPlacement ? 0 : size,
              top: (isHorizontal ? rect.top : clientY) - y,
              bottom: (isHorizontal ? rect.bottom : clientY) + y,
              left: (isVertical ? rect.left : clientX) - x,
              right: (isVertical ? rect.right : clientX) + x
            };
          }
        };
        instance.popperInstance.update();
      }

      if (getIsInitialBehavior()) {
        removeListener();
      }
    }

    return {
      onAfterUpdate: function onAfterUpdate(_, partialProps) {
        if (!isInternallySettingControlledProp) {
          setUserProps(partialProps);

          if (partialProps.placement) {
            handlePlacement();
          }
        } // A new placement causes the popperInstance to be recreated


        if (partialProps.placement) {
          handlePopperListeners();
        } // Wait for `.update()` to set `instance.state.currentPlacement` to
        // the new placement


        requestAnimationFrame(triggerLastMouseMove);
      },
      onMount: function onMount() {
        triggerLastMouseMove();
        handlePopperListeners();
      },
      onShow: function onShow() {
        if (getIsManual()) {
          // Since there's no trigger event to use, we have to use these as
          // baseline coords
          mouseCoords = {
            clientX: 0,
            clientY: 0
          }; // Ensure `lastMouseMoveEvent` doesn't access any other properties
          // of a MouseEvent here

          lastMouseMoveEvent = mouseCoords;
          handlePlacement();
          handleMouseMoveListener();
        }
      },
      onTrigger: function onTrigger(_, event) {
        // Tapping on touch devices can trigger `mouseenter` then `focus`
        if (mouseCoords) {
          return;
        }

        if (Object(_tippy_chunk_esm_js__WEBPACK_IMPORTED_MODULE_0__["c"])(event)) {
          mouseCoords = {
            clientX: event.clientX,
            clientY: event.clientY
          };
          lastMouseMoveEvent = event;
        }

        handlePlacement();
        handleMouseMoveListener();
      },
      onUntrigger: function onUntrigger() {
        // If untriggered before showing (`onHidden` will never be invoked)
        if (!instance.state.isVisible) {
          removeListener();
          mouseCoords = null;
        }
      },
      onHidden: function onHidden() {
        removeListener();
        resetReference();
        mouseCoords = null;
      }
    };
  }
};

function getVirtualOffsets(popper, isVerticalPlacement) {
  var size = isVerticalPlacement ? popper.offsetWidth : popper.offsetHeight;
  return {
    size: size,
    x: isVerticalPlacement ? size : 0,
    y: isVerticalPlacement ? 0 : size
  };
} // position. This will require the `followCursor` plugin's fixes for overflow
// due to using event.clientX/Y values. (normalizedPlacement, getVirtualOffsets)


var inlinePositioning = {
  name: 'inlinePositioning',
  defaultValue: false,
  fn: function fn(instance) {
    var reference = instance.reference;

    function getIsEnabled() {
      return !!instance.props.inlinePositioning;
    }

    return {
      onHidden: function onHidden() {
        if (getIsEnabled()) {
          instance.popperInstance.reference = reference;
        }
      },
      onShow: function onShow() {
        if (!getIsEnabled()) {
          return;
        }

        instance.popperInstance.reference = {
          referenceNode: reference,
          // These `client` values don't get used by Popper.js if they are 0
          clientWidth: 0,
          clientHeight: 0,
          getBoundingClientRect: function getBoundingClientRect() {
            return getInlineBoundingClientRect(instance.state.currentPlacement && Object(_tippy_chunk_esm_js__WEBPACK_IMPORTED_MODULE_0__["j"])(instance.state.currentPlacement), reference.getBoundingClientRect(), Object(_tippy_chunk_esm_js__WEBPACK_IMPORTED_MODULE_0__["k"])(reference.getClientRects()));
          }
        };
      }
    };
  }
};

function getInlineBoundingClientRect(currentBasePlacement, boundingRect, clientRects) {
  // Not an inline element, or placement is not yet known
  if (clientRects.length < 2 || currentBasePlacement === null) {
    return boundingRect;
  }

  switch (currentBasePlacement) {
    case 'top':
    case 'bottom':
      {
        var firstRect = clientRects[0];
        var lastRect = clientRects[clientRects.length - 1];
        var isTop = currentBasePlacement === 'top';
        var top = firstRect.top;
        var bottom = lastRect.bottom;
        var left = isTop ? firstRect.left : lastRect.left;
        var right = isTop ? firstRect.right : lastRect.right;
        var width = right - left;
        var height = bottom - top;
        return {
          top: top,
          bottom: bottom,
          left: left,
          right: right,
          width: width,
          height: height
        };
      }

    case 'left':
    case 'right':
      {
        var minLeft = Math.min.apply(Math, clientRects.map(function (rects) {
          return rects.left;
        }));
        var maxRight = Math.max.apply(Math, clientRects.map(function (rects) {
          return rects.right;
        }));
        var measureRects = clientRects.filter(function (rect) {
          return currentBasePlacement === 'left' ? rect.left === minLeft : rect.right === maxRight;
        });
        var _top = measureRects[0].top;
        var _bottom = measureRects[measureRects.length - 1].bottom;
        var _left = minLeft;
        var _right = maxRight;

        var _width = _right - _left;

        var _height = _bottom - _top;

        return {
          top: _top,
          bottom: _bottom,
          left: _left,
          right: _right,
          width: _width,
          height: _height
        };
      }

    default:
      {
        return boundingRect;
      }
  }
}

var sticky = {
  name: 'sticky',
  defaultValue: false,
  fn: function fn(instance) {
    var reference = instance.reference,
        popper = instance.popper;

    function getReference() {
      return instance.popperInstance ? instance.popperInstance.reference : reference;
    }

    function shouldCheck(value) {
      return instance.props.sticky === true || instance.props.sticky === value;
    }

    var prevRefRect = null;
    var prevPopRect = null;

    function updatePosition() {
      var currentRefRect = shouldCheck('reference') ? getReference().getBoundingClientRect() : null;
      var currentPopRect = shouldCheck('popper') ? popper.getBoundingClientRect() : null;

      if (currentRefRect && areRectsDifferent(prevRefRect, currentRefRect) || currentPopRect && areRectsDifferent(prevPopRect, currentPopRect)) {
        instance.popperInstance.update();
      }

      prevRefRect = currentRefRect;
      prevPopRect = currentPopRect;

      if (instance.state.isMounted) {
        requestAnimationFrame(updatePosition);
      }
    }

    return {
      onMount: function onMount() {
        if (instance.props.sticky) {
          updatePosition();
        }
      }
    };
  }
};

function areRectsDifferent(rectA, rectB) {
  if (rectA && rectB) {
    return rectA.top !== rectB.top || rectA.right !== rectB.right || rectA.bottom !== rectB.bottom || rectA.left !== rectB.left;
  }

  return true;
}



/***/ }),

/***/ "../../front/scripts/app.js":
/*!**********************************************************************************!*\
  !*** /Users/gregoriogalante/Workspace/matilda/matilda-core/front/scripts/app.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var stimulus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! stimulus */ "../../front/node_modules/stimulus/index.js");

/* harmony default export */ __webpack_exports__["default"] = (stimulus__WEBPACK_IMPORTED_MODULE_0__["Application"].start());

/***/ }),

/***/ "../../front/scripts/controllers/FlashController.js":
/*!**********************************************************************************************************!*\
  !*** /Users/gregoriogalante/Workspace/matilda/matilda-core/front/scripts/controllers/FlashController.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var stimulus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! stimulus */ "../../front/node_modules/stimulus/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "../../front/scripts/utils.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var FlashController =
/*#__PURE__*/
function (_Controller) {
  _inherits(FlashController, _Controller);

  function FlashController() {
    _classCallCheck(this, FlashController);

    return _possibleConstructorReturn(this, _getPrototypeOf(FlashController).apply(this, arguments));
  }

  _createClass(FlashController, [{
    key: "connect",
    value: function connect() {
      var _this = this;

      // manage flash rendered from back-end
      this.messageTargets.forEach(function (message) {
        setTimeout(function () {
          return message.classList.add('is-active');
        }, 100);
        setTimeout(function () {
          return _this.closeMessage(message);
        }, 10000);
      });
    }
  }, {
    key: "closeMessage",
    value: function closeMessage(message) {
      var _this2 = this;

      if (!message) return;
      message.classList.remove('is-active');
      setTimeout(function () {
        try {
          _this2.element.removeChild(message);
        } catch (e) {}
      }, 300);
    }
  }, {
    key: "openMessage",
    value: function openMessage(messageContent) {
      var _this3 = this;

      var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'primary';
      var classes = "c-flash__message c-flash__message--".concat(type);
      var message = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["createElement"])('div', classes, messageContent);
      message.setAttribute('data-target', 'flash.message');
      this.element.appendChild(message);
      var close = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["createElement"])('span', 'c-flash__message-close', '');
      close.setAttribute('data-action', 'click->flash#close');
      message.appendChild(close);
      setTimeout(function () {
        return message.classList.add('is-active');
      }, 100);
      setTimeout(function () {
        return _this3.closeMessage(message);
      }, 10000);
    }
    /**
     * @function close
     */

  }, {
    key: "close",
    value: function close(e) {
      this.closeMessage(e.currentTarget.parentNode);
    }
  }]);

  return FlashController;
}(stimulus__WEBPACK_IMPORTED_MODULE_0__["Controller"]);

FlashController.targets = ['message'];
/* harmony default export */ __webpack_exports__["default"] = (FlashController);

/***/ }),

/***/ "../../front/scripts/controllers/FormController.js":
/*!*********************************************************************************************************!*\
  !*** /Users/gregoriogalante/Workspace/matilda/matilda-core/front/scripts/controllers/FormController.js ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var stimulus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! stimulus */ "../../front/node_modules/stimulus/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "../../front/scripts/utils.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var FormController =
/*#__PURE__*/
function (_Controller) {
  _inherits(FormController, _Controller);

  function FormController() {
    _classCallCheck(this, FormController);

    return _possibleConstructorReturn(this, _getPrototypeOf(FormController).apply(this, arguments));
  }

  _createClass(FormController, [{
    key: "connect",
    value: function connect() {
      var _this = this;

      this.fields = {}; // map fields and add listeners in case of errors classes

      Object(_utils__WEBPACK_IMPORTED_MODULE_1__["each"])(this.fieldTargets, function (field) {
        _this.fields[field.getAttribute('name')] = field;
        field.addEventListener('keyup', function () {
          return field.classList.remove('is-error');
        });
      }); // add submit listener to disable submit button

      this.element.addEventListener('submit', function (e) {
        _this.submitTarget.setAttribute('disabled', '');

        _this.submitTarget.classList.add('is-loading');
      }); // manage required inputs

      this.manageRequiredInputs();
    }
  }, {
    key: "manageRequiredInputs",
    value: function manageRequiredInputs() {
      var _this2 = this;

      this.fieldTargets.forEach(function (target) {
        if (!target.hasAttribute('required')) return;

        var label = _this2.element.querySelector("label[for=\"".concat(target.id, "\"]"));

        if (label && label.innerText.charAt(label.innerText.length - 1) !== '*') label.innerHTML = "".concat(label.innerHTML, " *");
      });
    }
    /**
     * @function validateResponse
     * @param {*} event 
     */

  }, {
    key: "validateResponse",
    value: function validateResponse(event) {
      var _this3 = this;

      var _event$detail = _slicedToArray(event.detail, 3),
          data = _event$detail[0],
          _status = _event$detail[1],
          _xhr = _event$detail[2];

      if (data.result) {
        var redirect = this.data.get('redirect');
        var reload = this.data.get('reload'); // manage redirect

        if (redirect) {
          window.location.replace(redirect);
          return;
        } // manage reload


        if (reload) {
          location.reload();
          return;
        }
      } else {
        var Flash = this.application.getControllerForElementAndIdentifier(document.getElementById('flash'), 'flash');
        Flash.openMessage(data.errors[0].message, 'orange');
        Object(_utils__WEBPACK_IMPORTED_MODULE_1__["each"])(data.errors, function (error) {
          if (!_this3.fields[error.code]) return;

          _this3.fields[error.code].classList.add('is-error');
        });
      }

      this.submitTarget.removeAttribute('disabled');
      this.submitTarget.classList.remove('is-loading');
    }
  }]);

  return FormController;
}(stimulus__WEBPACK_IMPORTED_MODULE_0__["Controller"]);

FormController.targets = ['field', 'submit'];
/* harmony default export */ __webpack_exports__["default"] = (FormController);

/***/ }),

/***/ "../../front/scripts/controllers/HeaderController.js":
/*!***********************************************************************************************************!*\
  !*** /Users/gregoriogalante/Workspace/matilda/matilda-core/front/scripts/controllers/HeaderController.js ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var stimulus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! stimulus */ "../../front/node_modules/stimulus/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "../../front/scripts/utils.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var HeaderController =
/*#__PURE__*/
function (_Controller) {
  _inherits(HeaderController, _Controller);

  function HeaderController() {
    _classCallCheck(this, HeaderController);

    return _possibleConstructorReturn(this, _getPrototypeOf(HeaderController).apply(this, arguments));
  }

  _createClass(HeaderController, [{
    key: "connect",
    value: function connect() {
      // set menu preference to close in case of mobile device
      if (Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getSreenSizes"])().width <= 768 && !document.body.classList.contains('is-menu-closed')) {
        document.body.classList.add('is-menu-closed');
        fetch(this.toggleMenuTarget.getAttribute('data-url') + "?value=0", {
          method: 'POST'
        }).then(function (_response) {});
      }
    }
    /**
     * @function toggleProfile
     */

  }, {
    key: "toggleProfile",
    value: function toggleProfile() {
      this.profileMenuTarget.classList.toggle('is-active');
    }
    /**
     * @function toggleLang
     */

  }, {
    key: "toggleLang",
    value: function toggleLang() {
      this.langMenuTarget.classList.toggle('is-active');
    }
    /**
     * @function toggleMenu
     */

  }, {
    key: "toggleMenu",
    value: function toggleMenu() {
      if (Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getSreenSizes"])().width > 768) {
        var preference = document.body.classList.contains('is-menu-closed') ? 1 : 0;
        fetch(this.toggleMenuTarget.getAttribute('data-url') + "?value=".concat(preference), {
          method: 'POST'
        }).then(function (_response) {});
      }

      if (document.body.classList.contains('is-menu-closed')) {
        document.body.classList.remove('is-menu-closed');

        if (Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getSreenSizes"])().width <= 768) {
          Object(_utils__WEBPACK_IMPORTED_MODULE_1__["disableScroll"])();
        }
      } else {
        document.body.classList.add('is-menu-closed');

        if (Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getSreenSizes"])().width <= 768) {
          Object(_utils__WEBPACK_IMPORTED_MODULE_1__["enableScroll"])();
        }
      }
    }
  }]);

  return HeaderController;
}(stimulus__WEBPACK_IMPORTED_MODULE_0__["Controller"]);

HeaderController.targets = ['profileMenu', 'langMenu', 'toggleMenu'];
/* harmony default export */ __webpack_exports__["default"] = (HeaderController);

/***/ }),

/***/ "../../front/scripts/controllers/LinkController.js":
/*!*********************************************************************************************************!*\
  !*** /Users/gregoriogalante/Workspace/matilda/matilda-core/front/scripts/controllers/LinkController.js ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var stimulus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! stimulus */ "../../front/node_modules/stimulus/index.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var LinkController =
/*#__PURE__*/
function (_Controller) {
  _inherits(LinkController, _Controller);

  function LinkController() {
    _classCallCheck(this, LinkController);

    return _possibleConstructorReturn(this, _getPrototypeOf(LinkController).apply(this, arguments));
  }

  _createClass(LinkController, [{
    key: "validateResponse",

    /**
     * @function validateResponse
     * @param {*} event 
     */
    value: function validateResponse(event) {
      var _event$detail = _slicedToArray(event.detail, 3),
          data = _event$detail[0],
          _status = _event$detail[1],
          _xhr = _event$detail[2];

      if (data.result) {
        var redirect = this.data.get('redirect');
        var reload = this.data.get('reload'); // manage redirect

        if (redirect) {
          window.location.replace(redirect);
          return;
        } // manage reload


        if (reload) {
          location.reload();
          return;
        }
      } else {
        var Flash = this.application.getControllerForElementAndIdentifier(document.getElementById('flash'), 'flash');
        Flash.openMessage(data.errors[0].message, 'orange');
      }
    }
  }]);

  return LinkController;
}(stimulus__WEBPACK_IMPORTED_MODULE_0__["Controller"]);

/* harmony default export */ __webpack_exports__["default"] = (LinkController);

/***/ }),

/***/ "../../front/scripts/controllers/ModalController.js":
/*!**********************************************************************************************************!*\
  !*** /Users/gregoriogalante/Workspace/matilda/matilda-core/front/scripts/controllers/ModalController.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var stimulus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! stimulus */ "../../front/node_modules/stimulus/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "../../front/scripts/utils.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var ModalController =
/*#__PURE__*/
function (_Controller) {
  _inherits(ModalController, _Controller);

  function ModalController() {
    _classCallCheck(this, ModalController);

    return _possibleConstructorReturn(this, _getPrototypeOf(ModalController).apply(this, arguments));
  }

  _createClass(ModalController, [{
    key: "connect",
    value: function connect() {
      var _this = this;

      var activators = document.querySelectorAll(".jss-modal-activator[href=\"#".concat(this.element.id, "\"]")); // listen activators to open the modal

      activators.forEach(function (activator) {
        activator.addEventListener('click', function (e) {
          e.preventDefault();

          _this.open();
        });
      });
    }
    /**
     * @function open
     */

  }, {
    key: "open",
    value: function open() {
      this.element.classList.add('is-active');
      Object(_utils__WEBPACK_IMPORTED_MODULE_1__["disableScroll"])();
    }
    /**
     * @function close
     */

  }, {
    key: "close",
    value: function close() {
      this.element.classList.remove('is-active');
      Object(_utils__WEBPACK_IMPORTED_MODULE_1__["enableScroll"])();
    }
  }]);

  return ModalController;
}(stimulus__WEBPACK_IMPORTED_MODULE_0__["Controller"]);

/* harmony default export */ __webpack_exports__["default"] = (ModalController);

/***/ }),

/***/ "../../front/scripts/controllers/TippyController.js":
/*!**********************************************************************************************************!*\
  !*** /Users/gregoriogalante/Workspace/matilda/matilda-core/front/scripts/controllers/TippyController.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var stimulus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! stimulus */ "../../front/node_modules/stimulus/index.js");
/* harmony import */ var tippy_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tippy.js */ "../../front/node_modules/tippy.js/dist/tippy.esm.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var TippyController =
/*#__PURE__*/
function (_Controller) {
  _inherits(TippyController, _Controller);

  function TippyController() {
    _classCallCheck(this, TippyController);

    return _possibleConstructorReturn(this, _getPrototypeOf(TippyController).apply(this, arguments));
  }

  _createClass(TippyController, [{
    key: "connect",
    value: function connect() {
      Object(tippy_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this.element, {
        arrow: true,
        arrowType: 'round',
        animation: 'fade'
      });
    }
  }]);

  return TippyController;
}(stimulus__WEBPACK_IMPORTED_MODULE_0__["Controller"]);

/* harmony default export */ __webpack_exports__["default"] = (TippyController);

/***/ }),

/***/ "../../front/scripts/main.js":
/*!***********************************************************************************!*\
  !*** /Users/gregoriogalante/Workspace/matilda/matilda-core/front/scripts/main.js ***!
  \***********************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _rails_ujs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @rails/ujs */ "../../front/node_modules/@rails/ujs/lib/assets/compiled/rails-ujs.js");
/* harmony import */ var _rails_ujs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_rails_ujs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app */ "../../front/scripts/app.js");
/* harmony import */ var _controllers_FormController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./controllers/FormController */ "../../front/scripts/controllers/FormController.js");
/* harmony import */ var _controllers_FlashController__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./controllers/FlashController */ "../../front/scripts/controllers/FlashController.js");
/* harmony import */ var _controllers_HeaderController__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./controllers/HeaderController */ "../../front/scripts/controllers/HeaderController.js");
/* harmony import */ var _controllers_LinkController__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./controllers/LinkController */ "../../front/scripts/controllers/LinkController.js");
/* harmony import */ var _controllers_ModalController__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./controllers/ModalController */ "../../front/scripts/controllers/ModalController.js");
/* harmony import */ var _controllers_TippyController__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./controllers/TippyController */ "../../front/scripts/controllers/TippyController.js");








_rails_ujs__WEBPACK_IMPORTED_MODULE_0___default.a.start();
_app__WEBPACK_IMPORTED_MODULE_1__["default"].register('form', _controllers_FormController__WEBPACK_IMPORTED_MODULE_2__["default"]);
_app__WEBPACK_IMPORTED_MODULE_1__["default"].register('flash', _controllers_FlashController__WEBPACK_IMPORTED_MODULE_3__["default"]);
_app__WEBPACK_IMPORTED_MODULE_1__["default"].register('header', _controllers_HeaderController__WEBPACK_IMPORTED_MODULE_4__["default"]);
_app__WEBPACK_IMPORTED_MODULE_1__["default"].register('link', _controllers_LinkController__WEBPACK_IMPORTED_MODULE_5__["default"]);
_app__WEBPACK_IMPORTED_MODULE_1__["default"].register('modal', _controllers_ModalController__WEBPACK_IMPORTED_MODULE_6__["default"]);
_app__WEBPACK_IMPORTED_MODULE_1__["default"].register('tippy', _controllers_TippyController__WEBPACK_IMPORTED_MODULE_7__["default"]);

/***/ }),

/***/ "../../front/scripts/utils.js":
/*!************************************************************************************!*\
  !*** /Users/gregoriogalante/Workspace/matilda/matilda-core/front/scripts/utils.js ***!
  \************************************************************************************/
/*! exports provided: addAuthTokenParamToFetchBody, each, disableScroll, enableScroll, debounce, getSreenSizes, createElement, stringToColour, getSelectOptions, createEelementFromString */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addAuthTokenParamToFetchBody", function() { return addAuthTokenParamToFetchBody; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "each", function() { return each; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "disableScroll", function() { return disableScroll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enableScroll", function() { return enableScroll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "debounce", function() { return debounce; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSreenSizes", function() { return getSreenSizes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return createElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stringToColour", function() { return stringToColour; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSelectOptions", function() { return getSelectOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createEelementFromString", function() { return createEelementFromString; });
/**
 * @function addAuthTokenParamToFetchBody
 * @param {*} body 
 */
function addAuthTokenParamToFetchBody(body) {
  body[$authtokenname] = $authtoken;
  return body;
}
/**
 * @function each
 * @param {*} array 
 * @param {*} callback 
 * @param {*} scope 
 */

function each(array, callback, scope) {
  for (var i = 0; i < array.length; i += 1) {
    callback.call(scope, array[i], i);
  }
}
/**
 * @function disableScroll
 */

function disableScroll() {
  var x = window.scrollX;
  var y = window.scrollY;

  window.onscroll = function () {
    return window.scrollTo(x, y);
  };
}
/**
 * @function enableScroll
 */

function enableScroll() {
  window.onscroll = function () {};
}
/**
 * @function debounce
 * @param {*} func 
 * @param {*} wait 
 * @param {*} immediate 
 */

function debounce(func, wait, immediate) {
  var timeout;
  return function () {
    var context = this;
    var args = arguments;

    var later = function later() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };

    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}
/**
 * @function getSreenSizes
 */

function getSreenSizes() {
  var w = window;
  var d = document;
  var e = d.documentElement;
  var g = d.getElementsByTagName('body')[0];
  return {
    width: w.innerWidth || e.clientWidth || g.clientWidth,
    height: w.innerHeight || e.clientHeight || g.clientHeight
  };
}
/**
 * @function createElement
 * @param {*} type 
 * @param {*} classes 
 * @param {*} content 
 */

function createElement(type) {
  var classes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var content = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var element = document.createElement(type);

  if (classes) {
    classes.split(' ').forEach(function (className) {
      element.classList.add(className);
    });
  }

  if (content) {
    element.innerHTML = content;
  }

  return element;
}
/**
 * @function stringToColour
 * @param {*} str 
 */

function stringToColour(str) {
  var hash = 0;

  for (var i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 2) - hash);
  }

  var colour = '#';

  for (var i = 0; i < 3; i++) {
    var value = hash >> i * 8 & 0xFF;
    colour += ('00' + value.toString(16)).substr(-2);
  }

  return colour;
}
/**
 * @function getSelectOptions
 * @param {*} select 
 */

function getSelectOptions(select) {
  var options = select.querySelectorAll('option');
  var result = [];
  options.forEach(function (option) {
    var singleResult = {};
    singleResult.value = option.getAttribute('value');
    singleResult.label = option.innerText;
    singleResult.customProperties = Object.assign({}, option.dataset);
    result.push(singleResult);
  });
  return result;
}
/**
 * @function createEelementFromString
 * @param {*} string
 */

function createEelementFromString(string) {
  var div = createElement('div');
  div.innerHTML = string;
  return div.firstChild;
}

/***/ }),

/***/ "../../front/style/main.scss":
/*!***********************************************************************************!*\
  !*** /Users/gregoriogalante/Workspace/matilda/matilda-core/front/style/main.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../test/dummy/node_modules/css-loader/dist/cjs.js??ref--7-1!../../test/dummy/node_modules/postcss-loader/src??ref--7-2!../../test/dummy/node_modules/sass-loader/dist/cjs.js??ref--7-3!./main.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!../../front/style/main.scss");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../test/dummy/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ "./app/javascript/packs/matilda.js":
/*!*****************************************!*\
  !*** ./app/javascript/packs/matilda.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _front_loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../front/loader */ "../../front/loader.js");


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!../../front/node_modules/@fortawesome/fontawesome-free/css/all.min.css":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/postcss-loader/src??ref--6-2!/Users/gregoriogalante/Workspace/matilda/matilda-core/front/node_modules/@fortawesome/fontawesome-free/css/all.min.css ***!
  \**************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../test/dummy/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Imports
var getUrl = __webpack_require__(/*! ../../../../../test/dummy/node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
var ___CSS_LOADER_URL___0___ = getUrl(__webpack_require__(/*! ../webfonts/fa-brands-400.eot */ "../../front/node_modules/@fortawesome/fontawesome-free/webfonts/fa-brands-400.eot"));
var ___CSS_LOADER_URL___1___ = getUrl(__webpack_require__(/*! ../webfonts/fa-brands-400.eot */ "../../front/node_modules/@fortawesome/fontawesome-free/webfonts/fa-brands-400.eot") + "?#iefix");
var ___CSS_LOADER_URL___2___ = getUrl(__webpack_require__(/*! ../webfonts/fa-brands-400.woff2 */ "../../front/node_modules/@fortawesome/fontawesome-free/webfonts/fa-brands-400.woff2"));
var ___CSS_LOADER_URL___3___ = getUrl(__webpack_require__(/*! ../webfonts/fa-brands-400.woff */ "../../front/node_modules/@fortawesome/fontawesome-free/webfonts/fa-brands-400.woff"));
var ___CSS_LOADER_URL___4___ = getUrl(__webpack_require__(/*! ../webfonts/fa-brands-400.ttf */ "../../front/node_modules/@fortawesome/fontawesome-free/webfonts/fa-brands-400.ttf"));
var ___CSS_LOADER_URL___5___ = getUrl(__webpack_require__(/*! ../webfonts/fa-brands-400.svg */ "../../front/node_modules/@fortawesome/fontawesome-free/webfonts/fa-brands-400.svg") + "#fontawesome");
var ___CSS_LOADER_URL___6___ = getUrl(__webpack_require__(/*! ../webfonts/fa-regular-400.eot */ "../../front/node_modules/@fortawesome/fontawesome-free/webfonts/fa-regular-400.eot"));
var ___CSS_LOADER_URL___7___ = getUrl(__webpack_require__(/*! ../webfonts/fa-regular-400.eot */ "../../front/node_modules/@fortawesome/fontawesome-free/webfonts/fa-regular-400.eot") + "?#iefix");
var ___CSS_LOADER_URL___8___ = getUrl(__webpack_require__(/*! ../webfonts/fa-regular-400.woff2 */ "../../front/node_modules/@fortawesome/fontawesome-free/webfonts/fa-regular-400.woff2"));
var ___CSS_LOADER_URL___9___ = getUrl(__webpack_require__(/*! ../webfonts/fa-regular-400.woff */ "../../front/node_modules/@fortawesome/fontawesome-free/webfonts/fa-regular-400.woff"));
var ___CSS_LOADER_URL___10___ = getUrl(__webpack_require__(/*! ../webfonts/fa-regular-400.ttf */ "../../front/node_modules/@fortawesome/fontawesome-free/webfonts/fa-regular-400.ttf"));
var ___CSS_LOADER_URL___11___ = getUrl(__webpack_require__(/*! ../webfonts/fa-regular-400.svg */ "../../front/node_modules/@fortawesome/fontawesome-free/webfonts/fa-regular-400.svg") + "#fontawesome");
var ___CSS_LOADER_URL___12___ = getUrl(__webpack_require__(/*! ../webfonts/fa-solid-900.eot */ "../../front/node_modules/@fortawesome/fontawesome-free/webfonts/fa-solid-900.eot"));
var ___CSS_LOADER_URL___13___ = getUrl(__webpack_require__(/*! ../webfonts/fa-solid-900.eot */ "../../front/node_modules/@fortawesome/fontawesome-free/webfonts/fa-solid-900.eot") + "?#iefix");
var ___CSS_LOADER_URL___14___ = getUrl(__webpack_require__(/*! ../webfonts/fa-solid-900.woff2 */ "../../front/node_modules/@fortawesome/fontawesome-free/webfonts/fa-solid-900.woff2"));
var ___CSS_LOADER_URL___15___ = getUrl(__webpack_require__(/*! ../webfonts/fa-solid-900.woff */ "../../front/node_modules/@fortawesome/fontawesome-free/webfonts/fa-solid-900.woff"));
var ___CSS_LOADER_URL___16___ = getUrl(__webpack_require__(/*! ../webfonts/fa-solid-900.ttf */ "../../front/node_modules/@fortawesome/fontawesome-free/webfonts/fa-solid-900.ttf"));
var ___CSS_LOADER_URL___17___ = getUrl(__webpack_require__(/*! ../webfonts/fa-solid-900.svg */ "../../front/node_modules/@fortawesome/fontawesome-free/webfonts/fa-solid-900.svg") + "#fontawesome");
// Module
exports.push([module.i, "/*!\n * Font Awesome Free 5.12.0 by @fontawesome - https://fontawesome.com\n * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)\n */\n.fa,.fab,.fad,.fal,.far,.fas{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:inline-block;font-style:normal;font-feature-settings:normal;font-variant:normal;text-rendering:auto;line-height:1}\n.fa-lg{font-size:1.33333em;line-height:.75em;vertical-align:-.0667em}\n.fa-xs{font-size:.75em}\n.fa-sm{font-size:.875em}\n.fa-1x{font-size:1em}\n.fa-2x{font-size:2em}\n.fa-3x{font-size:3em}\n.fa-4x{font-size:4em}\n.fa-5x{font-size:5em}\n.fa-6x{font-size:6em}\n.fa-7x{font-size:7em}\n.fa-8x{font-size:8em}\n.fa-9x{font-size:9em}\n.fa-10x{font-size:10em}\n.fa-fw{text-align:center;width:1.25em}\n.fa-ul{list-style-type:none;margin-left:2.5em;padding-left:0}\n.fa-ul>li{position:relative}\n.fa-li{left:-2em;position:absolute;text-align:center;width:2em;line-height:inherit}\n.fa-border{border:.08em solid #eee;border-radius:.1em;padding:.2em .25em .15em}\n.fa-pull-left{float:left}\n.fa-pull-right{float:right}\n.fa.fa-pull-left,.fab.fa-pull-left,.fal.fa-pull-left,.far.fa-pull-left,.fas.fa-pull-left{margin-right:.3em}\n.fa.fa-pull-right,.fab.fa-pull-right,.fal.fa-pull-right,.far.fa-pull-right,.fas.fa-pull-right{margin-left:.3em}\n.fa-spin{-webkit-animation:fa-spin 2s linear infinite;animation:fa-spin 2s linear infinite}\n.fa-pulse{-webkit-animation:fa-spin 1s steps(8) infinite;animation:fa-spin 1s steps(8) infinite}\n@-webkit-keyframes fa-spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}\n@keyframes fa-spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}\n.fa-rotate-90{-ms-filter:\"progid:DXImageTransform.Microsoft.BasicImage(rotation=1)\";-webkit-transform:rotate(90deg);transform:rotate(90deg)}\n.fa-rotate-180{-ms-filter:\"progid:DXImageTransform.Microsoft.BasicImage(rotation=2)\";-webkit-transform:rotate(180deg);transform:rotate(180deg)}\n.fa-rotate-270{-ms-filter:\"progid:DXImageTransform.Microsoft.BasicImage(rotation=3)\";-webkit-transform:rotate(270deg);transform:rotate(270deg)}\n.fa-flip-horizontal{-ms-filter:\"progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)\";-webkit-transform:scaleX(-1);transform:scaleX(-1)}\n.fa-flip-vertical{-webkit-transform:scaleY(-1);transform:scaleY(-1)}\n.fa-flip-both,.fa-flip-horizontal.fa-flip-vertical,.fa-flip-vertical{-ms-filter:\"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)\"}\n.fa-flip-both,.fa-flip-horizontal.fa-flip-vertical{-webkit-transform:scale(-1);transform:scale(-1)}\n:root .fa-flip-both,:root .fa-flip-horizontal,:root .fa-flip-vertical,:root .fa-rotate-90,:root .fa-rotate-180,:root .fa-rotate-270{-webkit-filter:none;filter:none}\n.fa-stack{display:inline-block;height:2em;line-height:2em;position:relative;vertical-align:middle;width:2.5em}\n.fa-stack-1x,.fa-stack-2x{left:0;position:absolute;text-align:center;width:100%}\n.fa-stack-1x{line-height:inherit}\n.fa-stack-2x{font-size:2em}\n.fa-inverse{color:#fff}\n.fa-500px:before{content:\"\\f26e\"}\n.fa-accessible-icon:before{content:\"\\f368\"}\n.fa-accusoft:before{content:\"\\f369\"}\n.fa-acquisitions-incorporated:before{content:\"\\f6af\"}\n.fa-ad:before{content:\"\\f641\"}\n.fa-address-book:before{content:\"\\f2b9\"}\n.fa-address-card:before{content:\"\\f2bb\"}\n.fa-adjust:before{content:\"\\f042\"}\n.fa-adn:before{content:\"\\f170\"}\n.fa-adobe:before{content:\"\\f778\"}\n.fa-adversal:before{content:\"\\f36a\"}\n.fa-affiliatetheme:before{content:\"\\f36b\"}\n.fa-air-freshener:before{content:\"\\f5d0\"}\n.fa-airbnb:before{content:\"\\f834\"}\n.fa-algolia:before{content:\"\\f36c\"}\n.fa-align-center:before{content:\"\\f037\"}\n.fa-align-justify:before{content:\"\\f039\"}\n.fa-align-left:before{content:\"\\f036\"}\n.fa-align-right:before{content:\"\\f038\"}\n.fa-alipay:before{content:\"\\f642\"}\n.fa-allergies:before{content:\"\\f461\"}\n.fa-amazon:before{content:\"\\f270\"}\n.fa-amazon-pay:before{content:\"\\f42c\"}\n.fa-ambulance:before{content:\"\\f0f9\"}\n.fa-american-sign-language-interpreting:before{content:\"\\f2a3\"}\n.fa-amilia:before{content:\"\\f36d\"}\n.fa-anchor:before{content:\"\\f13d\"}\n.fa-android:before{content:\"\\f17b\"}\n.fa-angellist:before{content:\"\\f209\"}\n.fa-angle-double-down:before{content:\"\\f103\"}\n.fa-angle-double-left:before{content:\"\\f100\"}\n.fa-angle-double-right:before{content:\"\\f101\"}\n.fa-angle-double-up:before{content:\"\\f102\"}\n.fa-angle-down:before{content:\"\\f107\"}\n.fa-angle-left:before{content:\"\\f104\"}\n.fa-angle-right:before{content:\"\\f105\"}\n.fa-angle-up:before{content:\"\\f106\"}\n.fa-angry:before{content:\"\\f556\"}\n.fa-angrycreative:before{content:\"\\f36e\"}\n.fa-angular:before{content:\"\\f420\"}\n.fa-ankh:before{content:\"\\f644\"}\n.fa-app-store:before{content:\"\\f36f\"}\n.fa-app-store-ios:before{content:\"\\f370\"}\n.fa-apper:before{content:\"\\f371\"}\n.fa-apple:before{content:\"\\f179\"}\n.fa-apple-alt:before{content:\"\\f5d1\"}\n.fa-apple-pay:before{content:\"\\f415\"}\n.fa-archive:before{content:\"\\f187\"}\n.fa-archway:before{content:\"\\f557\"}\n.fa-arrow-alt-circle-down:before{content:\"\\f358\"}\n.fa-arrow-alt-circle-left:before{content:\"\\f359\"}\n.fa-arrow-alt-circle-right:before{content:\"\\f35a\"}\n.fa-arrow-alt-circle-up:before{content:\"\\f35b\"}\n.fa-arrow-circle-down:before{content:\"\\f0ab\"}\n.fa-arrow-circle-left:before{content:\"\\f0a8\"}\n.fa-arrow-circle-right:before{content:\"\\f0a9\"}\n.fa-arrow-circle-up:before{content:\"\\f0aa\"}\n.fa-arrow-down:before{content:\"\\f063\"}\n.fa-arrow-left:before{content:\"\\f060\"}\n.fa-arrow-right:before{content:\"\\f061\"}\n.fa-arrow-up:before{content:\"\\f062\"}\n.fa-arrows-alt:before{content:\"\\f0b2\"}\n.fa-arrows-alt-h:before{content:\"\\f337\"}\n.fa-arrows-alt-v:before{content:\"\\f338\"}\n.fa-artstation:before{content:\"\\f77a\"}\n.fa-assistive-listening-systems:before{content:\"\\f2a2\"}\n.fa-asterisk:before{content:\"\\f069\"}\n.fa-asymmetrik:before{content:\"\\f372\"}\n.fa-at:before{content:\"\\f1fa\"}\n.fa-atlas:before{content:\"\\f558\"}\n.fa-atlassian:before{content:\"\\f77b\"}\n.fa-atom:before{content:\"\\f5d2\"}\n.fa-audible:before{content:\"\\f373\"}\n.fa-audio-description:before{content:\"\\f29e\"}\n.fa-autoprefixer:before{content:\"\\f41c\"}\n.fa-avianex:before{content:\"\\f374\"}\n.fa-aviato:before{content:\"\\f421\"}\n.fa-award:before{content:\"\\f559\"}\n.fa-aws:before{content:\"\\f375\"}\n.fa-baby:before{content:\"\\f77c\"}\n.fa-baby-carriage:before{content:\"\\f77d\"}\n.fa-backspace:before{content:\"\\f55a\"}\n.fa-backward:before{content:\"\\f04a\"}\n.fa-bacon:before{content:\"\\f7e5\"}\n.fa-bahai:before{content:\"\\f666\"}\n.fa-balance-scale:before{content:\"\\f24e\"}\n.fa-balance-scale-left:before{content:\"\\f515\"}\n.fa-balance-scale-right:before{content:\"\\f516\"}\n.fa-ban:before{content:\"\\f05e\"}\n.fa-band-aid:before{content:\"\\f462\"}\n.fa-bandcamp:before{content:\"\\f2d5\"}\n.fa-barcode:before{content:\"\\f02a\"}\n.fa-bars:before{content:\"\\f0c9\"}\n.fa-baseball-ball:before{content:\"\\f433\"}\n.fa-basketball-ball:before{content:\"\\f434\"}\n.fa-bath:before{content:\"\\f2cd\"}\n.fa-battery-empty:before{content:\"\\f244\"}\n.fa-battery-full:before{content:\"\\f240\"}\n.fa-battery-half:before{content:\"\\f242\"}\n.fa-battery-quarter:before{content:\"\\f243\"}\n.fa-battery-three-quarters:before{content:\"\\f241\"}\n.fa-battle-net:before{content:\"\\f835\"}\n.fa-bed:before{content:\"\\f236\"}\n.fa-beer:before{content:\"\\f0fc\"}\n.fa-behance:before{content:\"\\f1b4\"}\n.fa-behance-square:before{content:\"\\f1b5\"}\n.fa-bell:before{content:\"\\f0f3\"}\n.fa-bell-slash:before{content:\"\\f1f6\"}\n.fa-bezier-curve:before{content:\"\\f55b\"}\n.fa-bible:before{content:\"\\f647\"}\n.fa-bicycle:before{content:\"\\f206\"}\n.fa-biking:before{content:\"\\f84a\"}\n.fa-bimobject:before{content:\"\\f378\"}\n.fa-binoculars:before{content:\"\\f1e5\"}\n.fa-biohazard:before{content:\"\\f780\"}\n.fa-birthday-cake:before{content:\"\\f1fd\"}\n.fa-bitbucket:before{content:\"\\f171\"}\n.fa-bitcoin:before{content:\"\\f379\"}\n.fa-bity:before{content:\"\\f37a\"}\n.fa-black-tie:before{content:\"\\f27e\"}\n.fa-blackberry:before{content:\"\\f37b\"}\n.fa-blender:before{content:\"\\f517\"}\n.fa-blender-phone:before{content:\"\\f6b6\"}\n.fa-blind:before{content:\"\\f29d\"}\n.fa-blog:before{content:\"\\f781\"}\n.fa-blogger:before{content:\"\\f37c\"}\n.fa-blogger-b:before{content:\"\\f37d\"}\n.fa-bluetooth:before{content:\"\\f293\"}\n.fa-bluetooth-b:before{content:\"\\f294\"}\n.fa-bold:before{content:\"\\f032\"}\n.fa-bolt:before{content:\"\\f0e7\"}\n.fa-bomb:before{content:\"\\f1e2\"}\n.fa-bone:before{content:\"\\f5d7\"}\n.fa-bong:before{content:\"\\f55c\"}\n.fa-book:before{content:\"\\f02d\"}\n.fa-book-dead:before{content:\"\\f6b7\"}\n.fa-book-medical:before{content:\"\\f7e6\"}\n.fa-book-open:before{content:\"\\f518\"}\n.fa-book-reader:before{content:\"\\f5da\"}\n.fa-bookmark:before{content:\"\\f02e\"}\n.fa-bootstrap:before{content:\"\\f836\"}\n.fa-border-all:before{content:\"\\f84c\"}\n.fa-border-none:before{content:\"\\f850\"}\n.fa-border-style:before{content:\"\\f853\"}\n.fa-bowling-ball:before{content:\"\\f436\"}\n.fa-box:before{content:\"\\f466\"}\n.fa-box-open:before{content:\"\\f49e\"}\n.fa-boxes:before{content:\"\\f468\"}\n.fa-braille:before{content:\"\\f2a1\"}\n.fa-brain:before{content:\"\\f5dc\"}\n.fa-bread-slice:before{content:\"\\f7ec\"}\n.fa-briefcase:before{content:\"\\f0b1\"}\n.fa-briefcase-medical:before{content:\"\\f469\"}\n.fa-broadcast-tower:before{content:\"\\f519\"}\n.fa-broom:before{content:\"\\f51a\"}\n.fa-brush:before{content:\"\\f55d\"}\n.fa-btc:before{content:\"\\f15a\"}\n.fa-buffer:before{content:\"\\f837\"}\n.fa-bug:before{content:\"\\f188\"}\n.fa-building:before{content:\"\\f1ad\"}\n.fa-bullhorn:before{content:\"\\f0a1\"}\n.fa-bullseye:before{content:\"\\f140\"}\n.fa-burn:before{content:\"\\f46a\"}\n.fa-buromobelexperte:before{content:\"\\f37f\"}\n.fa-bus:before{content:\"\\f207\"}\n.fa-bus-alt:before{content:\"\\f55e\"}\n.fa-business-time:before{content:\"\\f64a\"}\n.fa-buy-n-large:before{content:\"\\f8a6\"}\n.fa-buysellads:before{content:\"\\f20d\"}\n.fa-calculator:before{content:\"\\f1ec\"}\n.fa-calendar:before{content:\"\\f133\"}\n.fa-calendar-alt:before{content:\"\\f073\"}\n.fa-calendar-check:before{content:\"\\f274\"}\n.fa-calendar-day:before{content:\"\\f783\"}\n.fa-calendar-minus:before{content:\"\\f272\"}\n.fa-calendar-plus:before{content:\"\\f271\"}\n.fa-calendar-times:before{content:\"\\f273\"}\n.fa-calendar-week:before{content:\"\\f784\"}\n.fa-camera:before{content:\"\\f030\"}\n.fa-camera-retro:before{content:\"\\f083\"}\n.fa-campground:before{content:\"\\f6bb\"}\n.fa-canadian-maple-leaf:before{content:\"\\f785\"}\n.fa-candy-cane:before{content:\"\\f786\"}\n.fa-cannabis:before{content:\"\\f55f\"}\n.fa-capsules:before{content:\"\\f46b\"}\n.fa-car:before{content:\"\\f1b9\"}\n.fa-car-alt:before{content:\"\\f5de\"}\n.fa-car-battery:before{content:\"\\f5df\"}\n.fa-car-crash:before{content:\"\\f5e1\"}\n.fa-car-side:before{content:\"\\f5e4\"}\n.fa-caravan:before{content:\"\\f8ff\"}\n.fa-caret-down:before{content:\"\\f0d7\"}\n.fa-caret-left:before{content:\"\\f0d9\"}\n.fa-caret-right:before{content:\"\\f0da\"}\n.fa-caret-square-down:before{content:\"\\f150\"}\n.fa-caret-square-left:before{content:\"\\f191\"}\n.fa-caret-square-right:before{content:\"\\f152\"}\n.fa-caret-square-up:before{content:\"\\f151\"}\n.fa-caret-up:before{content:\"\\f0d8\"}\n.fa-carrot:before{content:\"\\f787\"}\n.fa-cart-arrow-down:before{content:\"\\f218\"}\n.fa-cart-plus:before{content:\"\\f217\"}\n.fa-cash-register:before{content:\"\\f788\"}\n.fa-cat:before{content:\"\\f6be\"}\n.fa-cc-amazon-pay:before{content:\"\\f42d\"}\n.fa-cc-amex:before{content:\"\\f1f3\"}\n.fa-cc-apple-pay:before{content:\"\\f416\"}\n.fa-cc-diners-club:before{content:\"\\f24c\"}\n.fa-cc-discover:before{content:\"\\f1f2\"}\n.fa-cc-jcb:before{content:\"\\f24b\"}\n.fa-cc-mastercard:before{content:\"\\f1f1\"}\n.fa-cc-paypal:before{content:\"\\f1f4\"}\n.fa-cc-stripe:before{content:\"\\f1f5\"}\n.fa-cc-visa:before{content:\"\\f1f0\"}\n.fa-centercode:before{content:\"\\f380\"}\n.fa-centos:before{content:\"\\f789\"}\n.fa-certificate:before{content:\"\\f0a3\"}\n.fa-chair:before{content:\"\\f6c0\"}\n.fa-chalkboard:before{content:\"\\f51b\"}\n.fa-chalkboard-teacher:before{content:\"\\f51c\"}\n.fa-charging-station:before{content:\"\\f5e7\"}\n.fa-chart-area:before{content:\"\\f1fe\"}\n.fa-chart-bar:before{content:\"\\f080\"}\n.fa-chart-line:before{content:\"\\f201\"}\n.fa-chart-pie:before{content:\"\\f200\"}\n.fa-check:before{content:\"\\f00c\"}\n.fa-check-circle:before{content:\"\\f058\"}\n.fa-check-double:before{content:\"\\f560\"}\n.fa-check-square:before{content:\"\\f14a\"}\n.fa-cheese:before{content:\"\\f7ef\"}\n.fa-chess:before{content:\"\\f439\"}\n.fa-chess-bishop:before{content:\"\\f43a\"}\n.fa-chess-board:before{content:\"\\f43c\"}\n.fa-chess-king:before{content:\"\\f43f\"}\n.fa-chess-knight:before{content:\"\\f441\"}\n.fa-chess-pawn:before{content:\"\\f443\"}\n.fa-chess-queen:before{content:\"\\f445\"}\n.fa-chess-rook:before{content:\"\\f447\"}\n.fa-chevron-circle-down:before{content:\"\\f13a\"}\n.fa-chevron-circle-left:before{content:\"\\f137\"}\n.fa-chevron-circle-right:before{content:\"\\f138\"}\n.fa-chevron-circle-up:before{content:\"\\f139\"}\n.fa-chevron-down:before{content:\"\\f078\"}\n.fa-chevron-left:before{content:\"\\f053\"}\n.fa-chevron-right:before{content:\"\\f054\"}\n.fa-chevron-up:before{content:\"\\f077\"}\n.fa-child:before{content:\"\\f1ae\"}\n.fa-chrome:before{content:\"\\f268\"}\n.fa-chromecast:before{content:\"\\f838\"}\n.fa-church:before{content:\"\\f51d\"}\n.fa-circle:before{content:\"\\f111\"}\n.fa-circle-notch:before{content:\"\\f1ce\"}\n.fa-city:before{content:\"\\f64f\"}\n.fa-clinic-medical:before{content:\"\\f7f2\"}\n.fa-clipboard:before{content:\"\\f328\"}\n.fa-clipboard-check:before{content:\"\\f46c\"}\n.fa-clipboard-list:before{content:\"\\f46d\"}\n.fa-clock:before{content:\"\\f017\"}\n.fa-clone:before{content:\"\\f24d\"}\n.fa-closed-captioning:before{content:\"\\f20a\"}\n.fa-cloud:before{content:\"\\f0c2\"}\n.fa-cloud-download-alt:before{content:\"\\f381\"}\n.fa-cloud-meatball:before{content:\"\\f73b\"}\n.fa-cloud-moon:before{content:\"\\f6c3\"}\n.fa-cloud-moon-rain:before{content:\"\\f73c\"}\n.fa-cloud-rain:before{content:\"\\f73d\"}\n.fa-cloud-showers-heavy:before{content:\"\\f740\"}\n.fa-cloud-sun:before{content:\"\\f6c4\"}\n.fa-cloud-sun-rain:before{content:\"\\f743\"}\n.fa-cloud-upload-alt:before{content:\"\\f382\"}\n.fa-cloudscale:before{content:\"\\f383\"}\n.fa-cloudsmith:before{content:\"\\f384\"}\n.fa-cloudversify:before{content:\"\\f385\"}\n.fa-cocktail:before{content:\"\\f561\"}\n.fa-code:before{content:\"\\f121\"}\n.fa-code-branch:before{content:\"\\f126\"}\n.fa-codepen:before{content:\"\\f1cb\"}\n.fa-codiepie:before{content:\"\\f284\"}\n.fa-coffee:before{content:\"\\f0f4\"}\n.fa-cog:before{content:\"\\f013\"}\n.fa-cogs:before{content:\"\\f085\"}\n.fa-coins:before{content:\"\\f51e\"}\n.fa-columns:before{content:\"\\f0db\"}\n.fa-comment:before{content:\"\\f075\"}\n.fa-comment-alt:before{content:\"\\f27a\"}\n.fa-comment-dollar:before{content:\"\\f651\"}\n.fa-comment-dots:before{content:\"\\f4ad\"}\n.fa-comment-medical:before{content:\"\\f7f5\"}\n.fa-comment-slash:before{content:\"\\f4b3\"}\n.fa-comments:before{content:\"\\f086\"}\n.fa-comments-dollar:before{content:\"\\f653\"}\n.fa-compact-disc:before{content:\"\\f51f\"}\n.fa-compass:before{content:\"\\f14e\"}\n.fa-compress:before{content:\"\\f066\"}\n.fa-compress-alt:before{content:\"\\f422\"}\n.fa-compress-arrows-alt:before{content:\"\\f78c\"}\n.fa-concierge-bell:before{content:\"\\f562\"}\n.fa-confluence:before{content:\"\\f78d\"}\n.fa-connectdevelop:before{content:\"\\f20e\"}\n.fa-contao:before{content:\"\\f26d\"}\n.fa-cookie:before{content:\"\\f563\"}\n.fa-cookie-bite:before{content:\"\\f564\"}\n.fa-copy:before{content:\"\\f0c5\"}\n.fa-copyright:before{content:\"\\f1f9\"}\n.fa-cotton-bureau:before{content:\"\\f89e\"}\n.fa-couch:before{content:\"\\f4b8\"}\n.fa-cpanel:before{content:\"\\f388\"}\n.fa-creative-commons:before{content:\"\\f25e\"}\n.fa-creative-commons-by:before{content:\"\\f4e7\"}\n.fa-creative-commons-nc:before{content:\"\\f4e8\"}\n.fa-creative-commons-nc-eu:before{content:\"\\f4e9\"}\n.fa-creative-commons-nc-jp:before{content:\"\\f4ea\"}\n.fa-creative-commons-nd:before{content:\"\\f4eb\"}\n.fa-creative-commons-pd:before{content:\"\\f4ec\"}\n.fa-creative-commons-pd-alt:before{content:\"\\f4ed\"}\n.fa-creative-commons-remix:before{content:\"\\f4ee\"}\n.fa-creative-commons-sa:before{content:\"\\f4ef\"}\n.fa-creative-commons-sampling:before{content:\"\\f4f0\"}\n.fa-creative-commons-sampling-plus:before{content:\"\\f4f1\"}\n.fa-creative-commons-share:before{content:\"\\f4f2\"}\n.fa-creative-commons-zero:before{content:\"\\f4f3\"}\n.fa-credit-card:before{content:\"\\f09d\"}\n.fa-critical-role:before{content:\"\\f6c9\"}\n.fa-crop:before{content:\"\\f125\"}\n.fa-crop-alt:before{content:\"\\f565\"}\n.fa-cross:before{content:\"\\f654\"}\n.fa-crosshairs:before{content:\"\\f05b\"}\n.fa-crow:before{content:\"\\f520\"}\n.fa-crown:before{content:\"\\f521\"}\n.fa-crutch:before{content:\"\\f7f7\"}\n.fa-css3:before{content:\"\\f13c\"}\n.fa-css3-alt:before{content:\"\\f38b\"}\n.fa-cube:before{content:\"\\f1b2\"}\n.fa-cubes:before{content:\"\\f1b3\"}\n.fa-cut:before{content:\"\\f0c4\"}\n.fa-cuttlefish:before{content:\"\\f38c\"}\n.fa-d-and-d:before{content:\"\\f38d\"}\n.fa-d-and-d-beyond:before{content:\"\\f6ca\"}\n.fa-dashcube:before{content:\"\\f210\"}\n.fa-database:before{content:\"\\f1c0\"}\n.fa-deaf:before{content:\"\\f2a4\"}\n.fa-delicious:before{content:\"\\f1a5\"}\n.fa-democrat:before{content:\"\\f747\"}\n.fa-deploydog:before{content:\"\\f38e\"}\n.fa-deskpro:before{content:\"\\f38f\"}\n.fa-desktop:before{content:\"\\f108\"}\n.fa-dev:before{content:\"\\f6cc\"}\n.fa-deviantart:before{content:\"\\f1bd\"}\n.fa-dharmachakra:before{content:\"\\f655\"}\n.fa-dhl:before{content:\"\\f790\"}\n.fa-diagnoses:before{content:\"\\f470\"}\n.fa-diaspora:before{content:\"\\f791\"}\n.fa-dice:before{content:\"\\f522\"}\n.fa-dice-d20:before{content:\"\\f6cf\"}\n.fa-dice-d6:before{content:\"\\f6d1\"}\n.fa-dice-five:before{content:\"\\f523\"}\n.fa-dice-four:before{content:\"\\f524\"}\n.fa-dice-one:before{content:\"\\f525\"}\n.fa-dice-six:before{content:\"\\f526\"}\n.fa-dice-three:before{content:\"\\f527\"}\n.fa-dice-two:before{content:\"\\f528\"}\n.fa-digg:before{content:\"\\f1a6\"}\n.fa-digital-ocean:before{content:\"\\f391\"}\n.fa-digital-tachograph:before{content:\"\\f566\"}\n.fa-directions:before{content:\"\\f5eb\"}\n.fa-discord:before{content:\"\\f392\"}\n.fa-discourse:before{content:\"\\f393\"}\n.fa-divide:before{content:\"\\f529\"}\n.fa-dizzy:before{content:\"\\f567\"}\n.fa-dna:before{content:\"\\f471\"}\n.fa-dochub:before{content:\"\\f394\"}\n.fa-docker:before{content:\"\\f395\"}\n.fa-dog:before{content:\"\\f6d3\"}\n.fa-dollar-sign:before{content:\"\\f155\"}\n.fa-dolly:before{content:\"\\f472\"}\n.fa-dolly-flatbed:before{content:\"\\f474\"}\n.fa-donate:before{content:\"\\f4b9\"}\n.fa-door-closed:before{content:\"\\f52a\"}\n.fa-door-open:before{content:\"\\f52b\"}\n.fa-dot-circle:before{content:\"\\f192\"}\n.fa-dove:before{content:\"\\f4ba\"}\n.fa-download:before{content:\"\\f019\"}\n.fa-draft2digital:before{content:\"\\f396\"}\n.fa-drafting-compass:before{content:\"\\f568\"}\n.fa-dragon:before{content:\"\\f6d5\"}\n.fa-draw-polygon:before{content:\"\\f5ee\"}\n.fa-dribbble:before{content:\"\\f17d\"}\n.fa-dribbble-square:before{content:\"\\f397\"}\n.fa-dropbox:before{content:\"\\f16b\"}\n.fa-drum:before{content:\"\\f569\"}\n.fa-drum-steelpan:before{content:\"\\f56a\"}\n.fa-drumstick-bite:before{content:\"\\f6d7\"}\n.fa-drupal:before{content:\"\\f1a9\"}\n.fa-dumbbell:before{content:\"\\f44b\"}\n.fa-dumpster:before{content:\"\\f793\"}\n.fa-dumpster-fire:before{content:\"\\f794\"}\n.fa-dungeon:before{content:\"\\f6d9\"}\n.fa-dyalog:before{content:\"\\f399\"}\n.fa-earlybirds:before{content:\"\\f39a\"}\n.fa-ebay:before{content:\"\\f4f4\"}\n.fa-edge:before{content:\"\\f282\"}\n.fa-edit:before{content:\"\\f044\"}\n.fa-egg:before{content:\"\\f7fb\"}\n.fa-eject:before{content:\"\\f052\"}\n.fa-elementor:before{content:\"\\f430\"}\n.fa-ellipsis-h:before{content:\"\\f141\"}\n.fa-ellipsis-v:before{content:\"\\f142\"}\n.fa-ello:before{content:\"\\f5f1\"}\n.fa-ember:before{content:\"\\f423\"}\n.fa-empire:before{content:\"\\f1d1\"}\n.fa-envelope:before{content:\"\\f0e0\"}\n.fa-envelope-open:before{content:\"\\f2b6\"}\n.fa-envelope-open-text:before{content:\"\\f658\"}\n.fa-envelope-square:before{content:\"\\f199\"}\n.fa-envira:before{content:\"\\f299\"}\n.fa-equals:before{content:\"\\f52c\"}\n.fa-eraser:before{content:\"\\f12d\"}\n.fa-erlang:before{content:\"\\f39d\"}\n.fa-ethereum:before{content:\"\\f42e\"}\n.fa-ethernet:before{content:\"\\f796\"}\n.fa-etsy:before{content:\"\\f2d7\"}\n.fa-euro-sign:before{content:\"\\f153\"}\n.fa-evernote:before{content:\"\\f839\"}\n.fa-exchange-alt:before{content:\"\\f362\"}\n.fa-exclamation:before{content:\"\\f12a\"}\n.fa-exclamation-circle:before{content:\"\\f06a\"}\n.fa-exclamation-triangle:before{content:\"\\f071\"}\n.fa-expand:before{content:\"\\f065\"}\n.fa-expand-alt:before{content:\"\\f424\"}\n.fa-expand-arrows-alt:before{content:\"\\f31e\"}\n.fa-expeditedssl:before{content:\"\\f23e\"}\n.fa-external-link-alt:before{content:\"\\f35d\"}\n.fa-external-link-square-alt:before{content:\"\\f360\"}\n.fa-eye:before{content:\"\\f06e\"}\n.fa-eye-dropper:before{content:\"\\f1fb\"}\n.fa-eye-slash:before{content:\"\\f070\"}\n.fa-facebook:before{content:\"\\f09a\"}\n.fa-facebook-f:before{content:\"\\f39e\"}\n.fa-facebook-messenger:before{content:\"\\f39f\"}\n.fa-facebook-square:before{content:\"\\f082\"}\n.fa-fan:before{content:\"\\f863\"}\n.fa-fantasy-flight-games:before{content:\"\\f6dc\"}\n.fa-fast-backward:before{content:\"\\f049\"}\n.fa-fast-forward:before{content:\"\\f050\"}\n.fa-fax:before{content:\"\\f1ac\"}\n.fa-feather:before{content:\"\\f52d\"}\n.fa-feather-alt:before{content:\"\\f56b\"}\n.fa-fedex:before{content:\"\\f797\"}\n.fa-fedora:before{content:\"\\f798\"}\n.fa-female:before{content:\"\\f182\"}\n.fa-fighter-jet:before{content:\"\\f0fb\"}\n.fa-figma:before{content:\"\\f799\"}\n.fa-file:before{content:\"\\f15b\"}\n.fa-file-alt:before{content:\"\\f15c\"}\n.fa-file-archive:before{content:\"\\f1c6\"}\n.fa-file-audio:before{content:\"\\f1c7\"}\n.fa-file-code:before{content:\"\\f1c9\"}\n.fa-file-contract:before{content:\"\\f56c\"}\n.fa-file-csv:before{content:\"\\f6dd\"}\n.fa-file-download:before{content:\"\\f56d\"}\n.fa-file-excel:before{content:\"\\f1c3\"}\n.fa-file-export:before{content:\"\\f56e\"}\n.fa-file-image:before{content:\"\\f1c5\"}\n.fa-file-import:before{content:\"\\f56f\"}\n.fa-file-invoice:before{content:\"\\f570\"}\n.fa-file-invoice-dollar:before{content:\"\\f571\"}\n.fa-file-medical:before{content:\"\\f477\"}\n.fa-file-medical-alt:before{content:\"\\f478\"}\n.fa-file-pdf:before{content:\"\\f1c1\"}\n.fa-file-powerpoint:before{content:\"\\f1c4\"}\n.fa-file-prescription:before{content:\"\\f572\"}\n.fa-file-signature:before{content:\"\\f573\"}\n.fa-file-upload:before{content:\"\\f574\"}\n.fa-file-video:before{content:\"\\f1c8\"}\n.fa-file-word:before{content:\"\\f1c2\"}\n.fa-fill:before{content:\"\\f575\"}\n.fa-fill-drip:before{content:\"\\f576\"}\n.fa-film:before{content:\"\\f008\"}\n.fa-filter:before{content:\"\\f0b0\"}\n.fa-fingerprint:before{content:\"\\f577\"}\n.fa-fire:before{content:\"\\f06d\"}\n.fa-fire-alt:before{content:\"\\f7e4\"}\n.fa-fire-extinguisher:before{content:\"\\f134\"}\n.fa-firefox:before{content:\"\\f269\"}\n.fa-firefox-browser:before{content:\"\\f907\"}\n.fa-first-aid:before{content:\"\\f479\"}\n.fa-first-order:before{content:\"\\f2b0\"}\n.fa-first-order-alt:before{content:\"\\f50a\"}\n.fa-firstdraft:before{content:\"\\f3a1\"}\n.fa-fish:before{content:\"\\f578\"}\n.fa-fist-raised:before{content:\"\\f6de\"}\n.fa-flag:before{content:\"\\f024\"}\n.fa-flag-checkered:before{content:\"\\f11e\"}\n.fa-flag-usa:before{content:\"\\f74d\"}\n.fa-flask:before{content:\"\\f0c3\"}\n.fa-flickr:before{content:\"\\f16e\"}\n.fa-flipboard:before{content:\"\\f44d\"}\n.fa-flushed:before{content:\"\\f579\"}\n.fa-fly:before{content:\"\\f417\"}\n.fa-folder:before{content:\"\\f07b\"}\n.fa-folder-minus:before{content:\"\\f65d\"}\n.fa-folder-open:before{content:\"\\f07c\"}\n.fa-folder-plus:before{content:\"\\f65e\"}\n.fa-font:before{content:\"\\f031\"}\n.fa-font-awesome:before{content:\"\\f2b4\"}\n.fa-font-awesome-alt:before{content:\"\\f35c\"}\n.fa-font-awesome-flag:before{content:\"\\f425\"}\n.fa-font-awesome-logo-full:before{content:\"\\f4e6\"}\n.fa-fonticons:before{content:\"\\f280\"}\n.fa-fonticons-fi:before{content:\"\\f3a2\"}\n.fa-football-ball:before{content:\"\\f44e\"}\n.fa-fort-awesome:before{content:\"\\f286\"}\n.fa-fort-awesome-alt:before{content:\"\\f3a3\"}\n.fa-forumbee:before{content:\"\\f211\"}\n.fa-forward:before{content:\"\\f04e\"}\n.fa-foursquare:before{content:\"\\f180\"}\n.fa-free-code-camp:before{content:\"\\f2c5\"}\n.fa-freebsd:before{content:\"\\f3a4\"}\n.fa-frog:before{content:\"\\f52e\"}\n.fa-frown:before{content:\"\\f119\"}\n.fa-frown-open:before{content:\"\\f57a\"}\n.fa-fulcrum:before{content:\"\\f50b\"}\n.fa-funnel-dollar:before{content:\"\\f662\"}\n.fa-futbol:before{content:\"\\f1e3\"}\n.fa-galactic-republic:before{content:\"\\f50c\"}\n.fa-galactic-senate:before{content:\"\\f50d\"}\n.fa-gamepad:before{content:\"\\f11b\"}\n.fa-gas-pump:before{content:\"\\f52f\"}\n.fa-gavel:before{content:\"\\f0e3\"}\n.fa-gem:before{content:\"\\f3a5\"}\n.fa-genderless:before{content:\"\\f22d\"}\n.fa-get-pocket:before{content:\"\\f265\"}\n.fa-gg:before{content:\"\\f260\"}\n.fa-gg-circle:before{content:\"\\f261\"}\n.fa-ghost:before{content:\"\\f6e2\"}\n.fa-gift:before{content:\"\\f06b\"}\n.fa-gifts:before{content:\"\\f79c\"}\n.fa-git:before{content:\"\\f1d3\"}\n.fa-git-alt:before{content:\"\\f841\"}\n.fa-git-square:before{content:\"\\f1d2\"}\n.fa-github:before{content:\"\\f09b\"}\n.fa-github-alt:before{content:\"\\f113\"}\n.fa-github-square:before{content:\"\\f092\"}\n.fa-gitkraken:before{content:\"\\f3a6\"}\n.fa-gitlab:before{content:\"\\f296\"}\n.fa-gitter:before{content:\"\\f426\"}\n.fa-glass-cheers:before{content:\"\\f79f\"}\n.fa-glass-martini:before{content:\"\\f000\"}\n.fa-glass-martini-alt:before{content:\"\\f57b\"}\n.fa-glass-whiskey:before{content:\"\\f7a0\"}\n.fa-glasses:before{content:\"\\f530\"}\n.fa-glide:before{content:\"\\f2a5\"}\n.fa-glide-g:before{content:\"\\f2a6\"}\n.fa-globe:before{content:\"\\f0ac\"}\n.fa-globe-africa:before{content:\"\\f57c\"}\n.fa-globe-americas:before{content:\"\\f57d\"}\n.fa-globe-asia:before{content:\"\\f57e\"}\n.fa-globe-europe:before{content:\"\\f7a2\"}\n.fa-gofore:before{content:\"\\f3a7\"}\n.fa-golf-ball:before{content:\"\\f450\"}\n.fa-goodreads:before{content:\"\\f3a8\"}\n.fa-goodreads-g:before{content:\"\\f3a9\"}\n.fa-google:before{content:\"\\f1a0\"}\n.fa-google-drive:before{content:\"\\f3aa\"}\n.fa-google-play:before{content:\"\\f3ab\"}\n.fa-google-plus:before{content:\"\\f2b3\"}\n.fa-google-plus-g:before{content:\"\\f0d5\"}\n.fa-google-plus-square:before{content:\"\\f0d4\"}\n.fa-google-wallet:before{content:\"\\f1ee\"}\n.fa-gopuram:before{content:\"\\f664\"}\n.fa-graduation-cap:before{content:\"\\f19d\"}\n.fa-gratipay:before{content:\"\\f184\"}\n.fa-grav:before{content:\"\\f2d6\"}\n.fa-greater-than:before{content:\"\\f531\"}\n.fa-greater-than-equal:before{content:\"\\f532\"}\n.fa-grimace:before{content:\"\\f57f\"}\n.fa-grin:before{content:\"\\f580\"}\n.fa-grin-alt:before{content:\"\\f581\"}\n.fa-grin-beam:before{content:\"\\f582\"}\n.fa-grin-beam-sweat:before{content:\"\\f583\"}\n.fa-grin-hearts:before{content:\"\\f584\"}\n.fa-grin-squint:before{content:\"\\f585\"}\n.fa-grin-squint-tears:before{content:\"\\f586\"}\n.fa-grin-stars:before{content:\"\\f587\"}\n.fa-grin-tears:before{content:\"\\f588\"}\n.fa-grin-tongue:before{content:\"\\f589\"}\n.fa-grin-tongue-squint:before{content:\"\\f58a\"}\n.fa-grin-tongue-wink:before{content:\"\\f58b\"}\n.fa-grin-wink:before{content:\"\\f58c\"}\n.fa-grip-horizontal:before{content:\"\\f58d\"}\n.fa-grip-lines:before{content:\"\\f7a4\"}\n.fa-grip-lines-vertical:before{content:\"\\f7a5\"}\n.fa-grip-vertical:before{content:\"\\f58e\"}\n.fa-gripfire:before{content:\"\\f3ac\"}\n.fa-grunt:before{content:\"\\f3ad\"}\n.fa-guitar:before{content:\"\\f7a6\"}\n.fa-gulp:before{content:\"\\f3ae\"}\n.fa-h-square:before{content:\"\\f0fd\"}\n.fa-hacker-news:before{content:\"\\f1d4\"}\n.fa-hacker-news-square:before{content:\"\\f3af\"}\n.fa-hackerrank:before{content:\"\\f5f7\"}\n.fa-hamburger:before{content:\"\\f805\"}\n.fa-hammer:before{content:\"\\f6e3\"}\n.fa-hamsa:before{content:\"\\f665\"}\n.fa-hand-holding:before{content:\"\\f4bd\"}\n.fa-hand-holding-heart:before{content:\"\\f4be\"}\n.fa-hand-holding-usd:before{content:\"\\f4c0\"}\n.fa-hand-lizard:before{content:\"\\f258\"}\n.fa-hand-middle-finger:before{content:\"\\f806\"}\n.fa-hand-paper:before{content:\"\\f256\"}\n.fa-hand-peace:before{content:\"\\f25b\"}\n.fa-hand-point-down:before{content:\"\\f0a7\"}\n.fa-hand-point-left:before{content:\"\\f0a5\"}\n.fa-hand-point-right:before{content:\"\\f0a4\"}\n.fa-hand-point-up:before{content:\"\\f0a6\"}\n.fa-hand-pointer:before{content:\"\\f25a\"}\n.fa-hand-rock:before{content:\"\\f255\"}\n.fa-hand-scissors:before{content:\"\\f257\"}\n.fa-hand-spock:before{content:\"\\f259\"}\n.fa-hands:before{content:\"\\f4c2\"}\n.fa-hands-helping:before{content:\"\\f4c4\"}\n.fa-handshake:before{content:\"\\f2b5\"}\n.fa-hanukiah:before{content:\"\\f6e6\"}\n.fa-hard-hat:before{content:\"\\f807\"}\n.fa-hashtag:before{content:\"\\f292\"}\n.fa-hat-cowboy:before{content:\"\\f8c0\"}\n.fa-hat-cowboy-side:before{content:\"\\f8c1\"}\n.fa-hat-wizard:before{content:\"\\f6e8\"}\n.fa-hdd:before{content:\"\\f0a0\"}\n.fa-heading:before{content:\"\\f1dc\"}\n.fa-headphones:before{content:\"\\f025\"}\n.fa-headphones-alt:before{content:\"\\f58f\"}\n.fa-headset:before{content:\"\\f590\"}\n.fa-heart:before{content:\"\\f004\"}\n.fa-heart-broken:before{content:\"\\f7a9\"}\n.fa-heartbeat:before{content:\"\\f21e\"}\n.fa-helicopter:before{content:\"\\f533\"}\n.fa-highlighter:before{content:\"\\f591\"}\n.fa-hiking:before{content:\"\\f6ec\"}\n.fa-hippo:before{content:\"\\f6ed\"}\n.fa-hips:before{content:\"\\f452\"}\n.fa-hire-a-helper:before{content:\"\\f3b0\"}\n.fa-history:before{content:\"\\f1da\"}\n.fa-hockey-puck:before{content:\"\\f453\"}\n.fa-holly-berry:before{content:\"\\f7aa\"}\n.fa-home:before{content:\"\\f015\"}\n.fa-hooli:before{content:\"\\f427\"}\n.fa-hornbill:before{content:\"\\f592\"}\n.fa-horse:before{content:\"\\f6f0\"}\n.fa-horse-head:before{content:\"\\f7ab\"}\n.fa-hospital:before{content:\"\\f0f8\"}\n.fa-hospital-alt:before{content:\"\\f47d\"}\n.fa-hospital-symbol:before{content:\"\\f47e\"}\n.fa-hot-tub:before{content:\"\\f593\"}\n.fa-hotdog:before{content:\"\\f80f\"}\n.fa-hotel:before{content:\"\\f594\"}\n.fa-hotjar:before{content:\"\\f3b1\"}\n.fa-hourglass:before{content:\"\\f254\"}\n.fa-hourglass-end:before{content:\"\\f253\"}\n.fa-hourglass-half:before{content:\"\\f252\"}\n.fa-hourglass-start:before{content:\"\\f251\"}\n.fa-house-damage:before{content:\"\\f6f1\"}\n.fa-houzz:before{content:\"\\f27c\"}\n.fa-hryvnia:before{content:\"\\f6f2\"}\n.fa-html5:before{content:\"\\f13b\"}\n.fa-hubspot:before{content:\"\\f3b2\"}\n.fa-i-cursor:before{content:\"\\f246\"}\n.fa-ice-cream:before{content:\"\\f810\"}\n.fa-icicles:before{content:\"\\f7ad\"}\n.fa-icons:before{content:\"\\f86d\"}\n.fa-id-badge:before{content:\"\\f2c1\"}\n.fa-id-card:before{content:\"\\f2c2\"}\n.fa-id-card-alt:before{content:\"\\f47f\"}\n.fa-ideal:before{content:\"\\f913\"}\n.fa-igloo:before{content:\"\\f7ae\"}\n.fa-image:before{content:\"\\f03e\"}\n.fa-images:before{content:\"\\f302\"}\n.fa-imdb:before{content:\"\\f2d8\"}\n.fa-inbox:before{content:\"\\f01c\"}\n.fa-indent:before{content:\"\\f03c\"}\n.fa-industry:before{content:\"\\f275\"}\n.fa-infinity:before{content:\"\\f534\"}\n.fa-info:before{content:\"\\f129\"}\n.fa-info-circle:before{content:\"\\f05a\"}\n.fa-instagram:before{content:\"\\f16d\"}\n.fa-intercom:before{content:\"\\f7af\"}\n.fa-internet-explorer:before{content:\"\\f26b\"}\n.fa-invision:before{content:\"\\f7b0\"}\n.fa-ioxhost:before{content:\"\\f208\"}\n.fa-italic:before{content:\"\\f033\"}\n.fa-itch-io:before{content:\"\\f83a\"}\n.fa-itunes:before{content:\"\\f3b4\"}\n.fa-itunes-note:before{content:\"\\f3b5\"}\n.fa-java:before{content:\"\\f4e4\"}\n.fa-jedi:before{content:\"\\f669\"}\n.fa-jedi-order:before{content:\"\\f50e\"}\n.fa-jenkins:before{content:\"\\f3b6\"}\n.fa-jira:before{content:\"\\f7b1\"}\n.fa-joget:before{content:\"\\f3b7\"}\n.fa-joint:before{content:\"\\f595\"}\n.fa-joomla:before{content:\"\\f1aa\"}\n.fa-journal-whills:before{content:\"\\f66a\"}\n.fa-js:before{content:\"\\f3b8\"}\n.fa-js-square:before{content:\"\\f3b9\"}\n.fa-jsfiddle:before{content:\"\\f1cc\"}\n.fa-kaaba:before{content:\"\\f66b\"}\n.fa-kaggle:before{content:\"\\f5fa\"}\n.fa-key:before{content:\"\\f084\"}\n.fa-keybase:before{content:\"\\f4f5\"}\n.fa-keyboard:before{content:\"\\f11c\"}\n.fa-keycdn:before{content:\"\\f3ba\"}\n.fa-khanda:before{content:\"\\f66d\"}\n.fa-kickstarter:before{content:\"\\f3bb\"}\n.fa-kickstarter-k:before{content:\"\\f3bc\"}\n.fa-kiss:before{content:\"\\f596\"}\n.fa-kiss-beam:before{content:\"\\f597\"}\n.fa-kiss-wink-heart:before{content:\"\\f598\"}\n.fa-kiwi-bird:before{content:\"\\f535\"}\n.fa-korvue:before{content:\"\\f42f\"}\n.fa-landmark:before{content:\"\\f66f\"}\n.fa-language:before{content:\"\\f1ab\"}\n.fa-laptop:before{content:\"\\f109\"}\n.fa-laptop-code:before{content:\"\\f5fc\"}\n.fa-laptop-medical:before{content:\"\\f812\"}\n.fa-laravel:before{content:\"\\f3bd\"}\n.fa-lastfm:before{content:\"\\f202\"}\n.fa-lastfm-square:before{content:\"\\f203\"}\n.fa-laugh:before{content:\"\\f599\"}\n.fa-laugh-beam:before{content:\"\\f59a\"}\n.fa-laugh-squint:before{content:\"\\f59b\"}\n.fa-laugh-wink:before{content:\"\\f59c\"}\n.fa-layer-group:before{content:\"\\f5fd\"}\n.fa-leaf:before{content:\"\\f06c\"}\n.fa-leanpub:before{content:\"\\f212\"}\n.fa-lemon:before{content:\"\\f094\"}\n.fa-less:before{content:\"\\f41d\"}\n.fa-less-than:before{content:\"\\f536\"}\n.fa-less-than-equal:before{content:\"\\f537\"}\n.fa-level-down-alt:before{content:\"\\f3be\"}\n.fa-level-up-alt:before{content:\"\\f3bf\"}\n.fa-life-ring:before{content:\"\\f1cd\"}\n.fa-lightbulb:before{content:\"\\f0eb\"}\n.fa-line:before{content:\"\\f3c0\"}\n.fa-link:before{content:\"\\f0c1\"}\n.fa-linkedin:before{content:\"\\f08c\"}\n.fa-linkedin-in:before{content:\"\\f0e1\"}\n.fa-linode:before{content:\"\\f2b8\"}\n.fa-linux:before{content:\"\\f17c\"}\n.fa-lira-sign:before{content:\"\\f195\"}\n.fa-list:before{content:\"\\f03a\"}\n.fa-list-alt:before{content:\"\\f022\"}\n.fa-list-ol:before{content:\"\\f0cb\"}\n.fa-list-ul:before{content:\"\\f0ca\"}\n.fa-location-arrow:before{content:\"\\f124\"}\n.fa-lock:before{content:\"\\f023\"}\n.fa-lock-open:before{content:\"\\f3c1\"}\n.fa-long-arrow-alt-down:before{content:\"\\f309\"}\n.fa-long-arrow-alt-left:before{content:\"\\f30a\"}\n.fa-long-arrow-alt-right:before{content:\"\\f30b\"}\n.fa-long-arrow-alt-up:before{content:\"\\f30c\"}\n.fa-low-vision:before{content:\"\\f2a8\"}\n.fa-luggage-cart:before{content:\"\\f59d\"}\n.fa-lyft:before{content:\"\\f3c3\"}\n.fa-magento:before{content:\"\\f3c4\"}\n.fa-magic:before{content:\"\\f0d0\"}\n.fa-magnet:before{content:\"\\f076\"}\n.fa-mail-bulk:before{content:\"\\f674\"}\n.fa-mailchimp:before{content:\"\\f59e\"}\n.fa-male:before{content:\"\\f183\"}\n.fa-mandalorian:before{content:\"\\f50f\"}\n.fa-map:before{content:\"\\f279\"}\n.fa-map-marked:before{content:\"\\f59f\"}\n.fa-map-marked-alt:before{content:\"\\f5a0\"}\n.fa-map-marker:before{content:\"\\f041\"}\n.fa-map-marker-alt:before{content:\"\\f3c5\"}\n.fa-map-pin:before{content:\"\\f276\"}\n.fa-map-signs:before{content:\"\\f277\"}\n.fa-markdown:before{content:\"\\f60f\"}\n.fa-marker:before{content:\"\\f5a1\"}\n.fa-mars:before{content:\"\\f222\"}\n.fa-mars-double:before{content:\"\\f227\"}\n.fa-mars-stroke:before{content:\"\\f229\"}\n.fa-mars-stroke-h:before{content:\"\\f22b\"}\n.fa-mars-stroke-v:before{content:\"\\f22a\"}\n.fa-mask:before{content:\"\\f6fa\"}\n.fa-mastodon:before{content:\"\\f4f6\"}\n.fa-maxcdn:before{content:\"\\f136\"}\n.fa-mdb:before{content:\"\\f8ca\"}\n.fa-medal:before{content:\"\\f5a2\"}\n.fa-medapps:before{content:\"\\f3c6\"}\n.fa-medium:before{content:\"\\f23a\"}\n.fa-medium-m:before{content:\"\\f3c7\"}\n.fa-medkit:before{content:\"\\f0fa\"}\n.fa-medrt:before{content:\"\\f3c8\"}\n.fa-meetup:before{content:\"\\f2e0\"}\n.fa-megaport:before{content:\"\\f5a3\"}\n.fa-meh:before{content:\"\\f11a\"}\n.fa-meh-blank:before{content:\"\\f5a4\"}\n.fa-meh-rolling-eyes:before{content:\"\\f5a5\"}\n.fa-memory:before{content:\"\\f538\"}\n.fa-mendeley:before{content:\"\\f7b3\"}\n.fa-menorah:before{content:\"\\f676\"}\n.fa-mercury:before{content:\"\\f223\"}\n.fa-meteor:before{content:\"\\f753\"}\n.fa-microblog:before{content:\"\\f91a\"}\n.fa-microchip:before{content:\"\\f2db\"}\n.fa-microphone:before{content:\"\\f130\"}\n.fa-microphone-alt:before{content:\"\\f3c9\"}\n.fa-microphone-alt-slash:before{content:\"\\f539\"}\n.fa-microphone-slash:before{content:\"\\f131\"}\n.fa-microscope:before{content:\"\\f610\"}\n.fa-microsoft:before{content:\"\\f3ca\"}\n.fa-minus:before{content:\"\\f068\"}\n.fa-minus-circle:before{content:\"\\f056\"}\n.fa-minus-square:before{content:\"\\f146\"}\n.fa-mitten:before{content:\"\\f7b5\"}\n.fa-mix:before{content:\"\\f3cb\"}\n.fa-mixcloud:before{content:\"\\f289\"}\n.fa-mizuni:before{content:\"\\f3cc\"}\n.fa-mobile:before{content:\"\\f10b\"}\n.fa-mobile-alt:before{content:\"\\f3cd\"}\n.fa-modx:before{content:\"\\f285\"}\n.fa-monero:before{content:\"\\f3d0\"}\n.fa-money-bill:before{content:\"\\f0d6\"}\n.fa-money-bill-alt:before{content:\"\\f3d1\"}\n.fa-money-bill-wave:before{content:\"\\f53a\"}\n.fa-money-bill-wave-alt:before{content:\"\\f53b\"}\n.fa-money-check:before{content:\"\\f53c\"}\n.fa-money-check-alt:before{content:\"\\f53d\"}\n.fa-monument:before{content:\"\\f5a6\"}\n.fa-moon:before{content:\"\\f186\"}\n.fa-mortar-pestle:before{content:\"\\f5a7\"}\n.fa-mosque:before{content:\"\\f678\"}\n.fa-motorcycle:before{content:\"\\f21c\"}\n.fa-mountain:before{content:\"\\f6fc\"}\n.fa-mouse:before{content:\"\\f8cc\"}\n.fa-mouse-pointer:before{content:\"\\f245\"}\n.fa-mug-hot:before{content:\"\\f7b6\"}\n.fa-music:before{content:\"\\f001\"}\n.fa-napster:before{content:\"\\f3d2\"}\n.fa-neos:before{content:\"\\f612\"}\n.fa-network-wired:before{content:\"\\f6ff\"}\n.fa-neuter:before{content:\"\\f22c\"}\n.fa-newspaper:before{content:\"\\f1ea\"}\n.fa-nimblr:before{content:\"\\f5a8\"}\n.fa-node:before{content:\"\\f419\"}\n.fa-node-js:before{content:\"\\f3d3\"}\n.fa-not-equal:before{content:\"\\f53e\"}\n.fa-notes-medical:before{content:\"\\f481\"}\n.fa-npm:before{content:\"\\f3d4\"}\n.fa-ns8:before{content:\"\\f3d5\"}\n.fa-nutritionix:before{content:\"\\f3d6\"}\n.fa-object-group:before{content:\"\\f247\"}\n.fa-object-ungroup:before{content:\"\\f248\"}\n.fa-odnoklassniki:before{content:\"\\f263\"}\n.fa-odnoklassniki-square:before{content:\"\\f264\"}\n.fa-oil-can:before{content:\"\\f613\"}\n.fa-old-republic:before{content:\"\\f510\"}\n.fa-om:before{content:\"\\f679\"}\n.fa-opencart:before{content:\"\\f23d\"}\n.fa-openid:before{content:\"\\f19b\"}\n.fa-opera:before{content:\"\\f26a\"}\n.fa-optin-monster:before{content:\"\\f23c\"}\n.fa-orcid:before{content:\"\\f8d2\"}\n.fa-osi:before{content:\"\\f41a\"}\n.fa-otter:before{content:\"\\f700\"}\n.fa-outdent:before{content:\"\\f03b\"}\n.fa-page4:before{content:\"\\f3d7\"}\n.fa-pagelines:before{content:\"\\f18c\"}\n.fa-pager:before{content:\"\\f815\"}\n.fa-paint-brush:before{content:\"\\f1fc\"}\n.fa-paint-roller:before{content:\"\\f5aa\"}\n.fa-palette:before{content:\"\\f53f\"}\n.fa-palfed:before{content:\"\\f3d8\"}\n.fa-pallet:before{content:\"\\f482\"}\n.fa-paper-plane:before{content:\"\\f1d8\"}\n.fa-paperclip:before{content:\"\\f0c6\"}\n.fa-parachute-box:before{content:\"\\f4cd\"}\n.fa-paragraph:before{content:\"\\f1dd\"}\n.fa-parking:before{content:\"\\f540\"}\n.fa-passport:before{content:\"\\f5ab\"}\n.fa-pastafarianism:before{content:\"\\f67b\"}\n.fa-paste:before{content:\"\\f0ea\"}\n.fa-patreon:before{content:\"\\f3d9\"}\n.fa-pause:before{content:\"\\f04c\"}\n.fa-pause-circle:before{content:\"\\f28b\"}\n.fa-paw:before{content:\"\\f1b0\"}\n.fa-paypal:before{content:\"\\f1ed\"}\n.fa-peace:before{content:\"\\f67c\"}\n.fa-pen:before{content:\"\\f304\"}\n.fa-pen-alt:before{content:\"\\f305\"}\n.fa-pen-fancy:before{content:\"\\f5ac\"}\n.fa-pen-nib:before{content:\"\\f5ad\"}\n.fa-pen-square:before{content:\"\\f14b\"}\n.fa-pencil-alt:before{content:\"\\f303\"}\n.fa-pencil-ruler:before{content:\"\\f5ae\"}\n.fa-penny-arcade:before{content:\"\\f704\"}\n.fa-people-carry:before{content:\"\\f4ce\"}\n.fa-pepper-hot:before{content:\"\\f816\"}\n.fa-percent:before{content:\"\\f295\"}\n.fa-percentage:before{content:\"\\f541\"}\n.fa-periscope:before{content:\"\\f3da\"}\n.fa-person-booth:before{content:\"\\f756\"}\n.fa-phabricator:before{content:\"\\f3db\"}\n.fa-phoenix-framework:before{content:\"\\f3dc\"}\n.fa-phoenix-squadron:before{content:\"\\f511\"}\n.fa-phone:before{content:\"\\f095\"}\n.fa-phone-alt:before{content:\"\\f879\"}\n.fa-phone-slash:before{content:\"\\f3dd\"}\n.fa-phone-square:before{content:\"\\f098\"}\n.fa-phone-square-alt:before{content:\"\\f87b\"}\n.fa-phone-volume:before{content:\"\\f2a0\"}\n.fa-photo-video:before{content:\"\\f87c\"}\n.fa-php:before{content:\"\\f457\"}\n.fa-pied-piper:before{content:\"\\f2ae\"}\n.fa-pied-piper-alt:before{content:\"\\f1a8\"}\n.fa-pied-piper-hat:before{content:\"\\f4e5\"}\n.fa-pied-piper-pp:before{content:\"\\f1a7\"}\n.fa-pied-piper-square:before{content:\"\\f91e\"}\n.fa-piggy-bank:before{content:\"\\f4d3\"}\n.fa-pills:before{content:\"\\f484\"}\n.fa-pinterest:before{content:\"\\f0d2\"}\n.fa-pinterest-p:before{content:\"\\f231\"}\n.fa-pinterest-square:before{content:\"\\f0d3\"}\n.fa-pizza-slice:before{content:\"\\f818\"}\n.fa-place-of-worship:before{content:\"\\f67f\"}\n.fa-plane:before{content:\"\\f072\"}\n.fa-plane-arrival:before{content:\"\\f5af\"}\n.fa-plane-departure:before{content:\"\\f5b0\"}\n.fa-play:before{content:\"\\f04b\"}\n.fa-play-circle:before{content:\"\\f144\"}\n.fa-playstation:before{content:\"\\f3df\"}\n.fa-plug:before{content:\"\\f1e6\"}\n.fa-plus:before{content:\"\\f067\"}\n.fa-plus-circle:before{content:\"\\f055\"}\n.fa-plus-square:before{content:\"\\f0fe\"}\n.fa-podcast:before{content:\"\\f2ce\"}\n.fa-poll:before{content:\"\\f681\"}\n.fa-poll-h:before{content:\"\\f682\"}\n.fa-poo:before{content:\"\\f2fe\"}\n.fa-poo-storm:before{content:\"\\f75a\"}\n.fa-poop:before{content:\"\\f619\"}\n.fa-portrait:before{content:\"\\f3e0\"}\n.fa-pound-sign:before{content:\"\\f154\"}\n.fa-power-off:before{content:\"\\f011\"}\n.fa-pray:before{content:\"\\f683\"}\n.fa-praying-hands:before{content:\"\\f684\"}\n.fa-prescription:before{content:\"\\f5b1\"}\n.fa-prescription-bottle:before{content:\"\\f485\"}\n.fa-prescription-bottle-alt:before{content:\"\\f486\"}\n.fa-print:before{content:\"\\f02f\"}\n.fa-procedures:before{content:\"\\f487\"}\n.fa-product-hunt:before{content:\"\\f288\"}\n.fa-project-diagram:before{content:\"\\f542\"}\n.fa-pushed:before{content:\"\\f3e1\"}\n.fa-puzzle-piece:before{content:\"\\f12e\"}\n.fa-python:before{content:\"\\f3e2\"}\n.fa-qq:before{content:\"\\f1d6\"}\n.fa-qrcode:before{content:\"\\f029\"}\n.fa-question:before{content:\"\\f128\"}\n.fa-question-circle:before{content:\"\\f059\"}\n.fa-quidditch:before{content:\"\\f458\"}\n.fa-quinscape:before{content:\"\\f459\"}\n.fa-quora:before{content:\"\\f2c4\"}\n.fa-quote-left:before{content:\"\\f10d\"}\n.fa-quote-right:before{content:\"\\f10e\"}\n.fa-quran:before{content:\"\\f687\"}\n.fa-r-project:before{content:\"\\f4f7\"}\n.fa-radiation:before{content:\"\\f7b9\"}\n.fa-radiation-alt:before{content:\"\\f7ba\"}\n.fa-rainbow:before{content:\"\\f75b\"}\n.fa-random:before{content:\"\\f074\"}\n.fa-raspberry-pi:before{content:\"\\f7bb\"}\n.fa-ravelry:before{content:\"\\f2d9\"}\n.fa-react:before{content:\"\\f41b\"}\n.fa-reacteurope:before{content:\"\\f75d\"}\n.fa-readme:before{content:\"\\f4d5\"}\n.fa-rebel:before{content:\"\\f1d0\"}\n.fa-receipt:before{content:\"\\f543\"}\n.fa-record-vinyl:before{content:\"\\f8d9\"}\n.fa-recycle:before{content:\"\\f1b8\"}\n.fa-red-river:before{content:\"\\f3e3\"}\n.fa-reddit:before{content:\"\\f1a1\"}\n.fa-reddit-alien:before{content:\"\\f281\"}\n.fa-reddit-square:before{content:\"\\f1a2\"}\n.fa-redhat:before{content:\"\\f7bc\"}\n.fa-redo:before{content:\"\\f01e\"}\n.fa-redo-alt:before{content:\"\\f2f9\"}\n.fa-registered:before{content:\"\\f25d\"}\n.fa-remove-format:before{content:\"\\f87d\"}\n.fa-renren:before{content:\"\\f18b\"}\n.fa-reply:before{content:\"\\f3e5\"}\n.fa-reply-all:before{content:\"\\f122\"}\n.fa-replyd:before{content:\"\\f3e6\"}\n.fa-republican:before{content:\"\\f75e\"}\n.fa-researchgate:before{content:\"\\f4f8\"}\n.fa-resolving:before{content:\"\\f3e7\"}\n.fa-restroom:before{content:\"\\f7bd\"}\n.fa-retweet:before{content:\"\\f079\"}\n.fa-rev:before{content:\"\\f5b2\"}\n.fa-ribbon:before{content:\"\\f4d6\"}\n.fa-ring:before{content:\"\\f70b\"}\n.fa-road:before{content:\"\\f018\"}\n.fa-robot:before{content:\"\\f544\"}\n.fa-rocket:before{content:\"\\f135\"}\n.fa-rocketchat:before{content:\"\\f3e8\"}\n.fa-rockrms:before{content:\"\\f3e9\"}\n.fa-route:before{content:\"\\f4d7\"}\n.fa-rss:before{content:\"\\f09e\"}\n.fa-rss-square:before{content:\"\\f143\"}\n.fa-ruble-sign:before{content:\"\\f158\"}\n.fa-ruler:before{content:\"\\f545\"}\n.fa-ruler-combined:before{content:\"\\f546\"}\n.fa-ruler-horizontal:before{content:\"\\f547\"}\n.fa-ruler-vertical:before{content:\"\\f548\"}\n.fa-running:before{content:\"\\f70c\"}\n.fa-rupee-sign:before{content:\"\\f156\"}\n.fa-sad-cry:before{content:\"\\f5b3\"}\n.fa-sad-tear:before{content:\"\\f5b4\"}\n.fa-safari:before{content:\"\\f267\"}\n.fa-salesforce:before{content:\"\\f83b\"}\n.fa-sass:before{content:\"\\f41e\"}\n.fa-satellite:before{content:\"\\f7bf\"}\n.fa-satellite-dish:before{content:\"\\f7c0\"}\n.fa-save:before{content:\"\\f0c7\"}\n.fa-schlix:before{content:\"\\f3ea\"}\n.fa-school:before{content:\"\\f549\"}\n.fa-screwdriver:before{content:\"\\f54a\"}\n.fa-scribd:before{content:\"\\f28a\"}\n.fa-scroll:before{content:\"\\f70e\"}\n.fa-sd-card:before{content:\"\\f7c2\"}\n.fa-search:before{content:\"\\f002\"}\n.fa-search-dollar:before{content:\"\\f688\"}\n.fa-search-location:before{content:\"\\f689\"}\n.fa-search-minus:before{content:\"\\f010\"}\n.fa-search-plus:before{content:\"\\f00e\"}\n.fa-searchengin:before{content:\"\\f3eb\"}\n.fa-seedling:before{content:\"\\f4d8\"}\n.fa-sellcast:before{content:\"\\f2da\"}\n.fa-sellsy:before{content:\"\\f213\"}\n.fa-server:before{content:\"\\f233\"}\n.fa-servicestack:before{content:\"\\f3ec\"}\n.fa-shapes:before{content:\"\\f61f\"}\n.fa-share:before{content:\"\\f064\"}\n.fa-share-alt:before{content:\"\\f1e0\"}\n.fa-share-alt-square:before{content:\"\\f1e1\"}\n.fa-share-square:before{content:\"\\f14d\"}\n.fa-shekel-sign:before{content:\"\\f20b\"}\n.fa-shield-alt:before{content:\"\\f3ed\"}\n.fa-ship:before{content:\"\\f21a\"}\n.fa-shipping-fast:before{content:\"\\f48b\"}\n.fa-shirtsinbulk:before{content:\"\\f214\"}\n.fa-shoe-prints:before{content:\"\\f54b\"}\n.fa-shopping-bag:before{content:\"\\f290\"}\n.fa-shopping-basket:before{content:\"\\f291\"}\n.fa-shopping-cart:before{content:\"\\f07a\"}\n.fa-shopware:before{content:\"\\f5b5\"}\n.fa-shower:before{content:\"\\f2cc\"}\n.fa-shuttle-van:before{content:\"\\f5b6\"}\n.fa-sign:before{content:\"\\f4d9\"}\n.fa-sign-in-alt:before{content:\"\\f2f6\"}\n.fa-sign-language:before{content:\"\\f2a7\"}\n.fa-sign-out-alt:before{content:\"\\f2f5\"}\n.fa-signal:before{content:\"\\f012\"}\n.fa-signature:before{content:\"\\f5b7\"}\n.fa-sim-card:before{content:\"\\f7c4\"}\n.fa-simplybuilt:before{content:\"\\f215\"}\n.fa-sistrix:before{content:\"\\f3ee\"}\n.fa-sitemap:before{content:\"\\f0e8\"}\n.fa-sith:before{content:\"\\f512\"}\n.fa-skating:before{content:\"\\f7c5\"}\n.fa-sketch:before{content:\"\\f7c6\"}\n.fa-skiing:before{content:\"\\f7c9\"}\n.fa-skiing-nordic:before{content:\"\\f7ca\"}\n.fa-skull:before{content:\"\\f54c\"}\n.fa-skull-crossbones:before{content:\"\\f714\"}\n.fa-skyatlas:before{content:\"\\f216\"}\n.fa-skype:before{content:\"\\f17e\"}\n.fa-slack:before{content:\"\\f198\"}\n.fa-slack-hash:before{content:\"\\f3ef\"}\n.fa-slash:before{content:\"\\f715\"}\n.fa-sleigh:before{content:\"\\f7cc\"}\n.fa-sliders-h:before{content:\"\\f1de\"}\n.fa-slideshare:before{content:\"\\f1e7\"}\n.fa-smile:before{content:\"\\f118\"}\n.fa-smile-beam:before{content:\"\\f5b8\"}\n.fa-smile-wink:before{content:\"\\f4da\"}\n.fa-smog:before{content:\"\\f75f\"}\n.fa-smoking:before{content:\"\\f48d\"}\n.fa-smoking-ban:before{content:\"\\f54d\"}\n.fa-sms:before{content:\"\\f7cd\"}\n.fa-snapchat:before{content:\"\\f2ab\"}\n.fa-snapchat-ghost:before{content:\"\\f2ac\"}\n.fa-snapchat-square:before{content:\"\\f2ad\"}\n.fa-snowboarding:before{content:\"\\f7ce\"}\n.fa-snowflake:before{content:\"\\f2dc\"}\n.fa-snowman:before{content:\"\\f7d0\"}\n.fa-snowplow:before{content:\"\\f7d2\"}\n.fa-socks:before{content:\"\\f696\"}\n.fa-solar-panel:before{content:\"\\f5ba\"}\n.fa-sort:before{content:\"\\f0dc\"}\n.fa-sort-alpha-down:before{content:\"\\f15d\"}\n.fa-sort-alpha-down-alt:before{content:\"\\f881\"}\n.fa-sort-alpha-up:before{content:\"\\f15e\"}\n.fa-sort-alpha-up-alt:before{content:\"\\f882\"}\n.fa-sort-amount-down:before{content:\"\\f160\"}\n.fa-sort-amount-down-alt:before{content:\"\\f884\"}\n.fa-sort-amount-up:before{content:\"\\f161\"}\n.fa-sort-amount-up-alt:before{content:\"\\f885\"}\n.fa-sort-down:before{content:\"\\f0dd\"}\n.fa-sort-numeric-down:before{content:\"\\f162\"}\n.fa-sort-numeric-down-alt:before{content:\"\\f886\"}\n.fa-sort-numeric-up:before{content:\"\\f163\"}\n.fa-sort-numeric-up-alt:before{content:\"\\f887\"}\n.fa-sort-up:before{content:\"\\f0de\"}\n.fa-soundcloud:before{content:\"\\f1be\"}\n.fa-sourcetree:before{content:\"\\f7d3\"}\n.fa-spa:before{content:\"\\f5bb\"}\n.fa-space-shuttle:before{content:\"\\f197\"}\n.fa-speakap:before{content:\"\\f3f3\"}\n.fa-speaker-deck:before{content:\"\\f83c\"}\n.fa-spell-check:before{content:\"\\f891\"}\n.fa-spider:before{content:\"\\f717\"}\n.fa-spinner:before{content:\"\\f110\"}\n.fa-splotch:before{content:\"\\f5bc\"}\n.fa-spotify:before{content:\"\\f1bc\"}\n.fa-spray-can:before{content:\"\\f5bd\"}\n.fa-square:before{content:\"\\f0c8\"}\n.fa-square-full:before{content:\"\\f45c\"}\n.fa-square-root-alt:before{content:\"\\f698\"}\n.fa-squarespace:before{content:\"\\f5be\"}\n.fa-stack-exchange:before{content:\"\\f18d\"}\n.fa-stack-overflow:before{content:\"\\f16c\"}\n.fa-stackpath:before{content:\"\\f842\"}\n.fa-stamp:before{content:\"\\f5bf\"}\n.fa-star:before{content:\"\\f005\"}\n.fa-star-and-crescent:before{content:\"\\f699\"}\n.fa-star-half:before{content:\"\\f089\"}\n.fa-star-half-alt:before{content:\"\\f5c0\"}\n.fa-star-of-david:before{content:\"\\f69a\"}\n.fa-star-of-life:before{content:\"\\f621\"}\n.fa-staylinked:before{content:\"\\f3f5\"}\n.fa-steam:before{content:\"\\f1b6\"}\n.fa-steam-square:before{content:\"\\f1b7\"}\n.fa-steam-symbol:before{content:\"\\f3f6\"}\n.fa-step-backward:before{content:\"\\f048\"}\n.fa-step-forward:before{content:\"\\f051\"}\n.fa-stethoscope:before{content:\"\\f0f1\"}\n.fa-sticker-mule:before{content:\"\\f3f7\"}\n.fa-sticky-note:before{content:\"\\f249\"}\n.fa-stop:before{content:\"\\f04d\"}\n.fa-stop-circle:before{content:\"\\f28d\"}\n.fa-stopwatch:before{content:\"\\f2f2\"}\n.fa-store:before{content:\"\\f54e\"}\n.fa-store-alt:before{content:\"\\f54f\"}\n.fa-strava:before{content:\"\\f428\"}\n.fa-stream:before{content:\"\\f550\"}\n.fa-street-view:before{content:\"\\f21d\"}\n.fa-strikethrough:before{content:\"\\f0cc\"}\n.fa-stripe:before{content:\"\\f429\"}\n.fa-stripe-s:before{content:\"\\f42a\"}\n.fa-stroopwafel:before{content:\"\\f551\"}\n.fa-studiovinari:before{content:\"\\f3f8\"}\n.fa-stumbleupon:before{content:\"\\f1a4\"}\n.fa-stumbleupon-circle:before{content:\"\\f1a3\"}\n.fa-subscript:before{content:\"\\f12c\"}\n.fa-subway:before{content:\"\\f239\"}\n.fa-suitcase:before{content:\"\\f0f2\"}\n.fa-suitcase-rolling:before{content:\"\\f5c1\"}\n.fa-sun:before{content:\"\\f185\"}\n.fa-superpowers:before{content:\"\\f2dd\"}\n.fa-superscript:before{content:\"\\f12b\"}\n.fa-supple:before{content:\"\\f3f9\"}\n.fa-surprise:before{content:\"\\f5c2\"}\n.fa-suse:before{content:\"\\f7d6\"}\n.fa-swatchbook:before{content:\"\\f5c3\"}\n.fa-swift:before{content:\"\\f8e1\"}\n.fa-swimmer:before{content:\"\\f5c4\"}\n.fa-swimming-pool:before{content:\"\\f5c5\"}\n.fa-symfony:before{content:\"\\f83d\"}\n.fa-synagogue:before{content:\"\\f69b\"}\n.fa-sync:before{content:\"\\f021\"}\n.fa-sync-alt:before{content:\"\\f2f1\"}\n.fa-syringe:before{content:\"\\f48e\"}\n.fa-table:before{content:\"\\f0ce\"}\n.fa-table-tennis:before{content:\"\\f45d\"}\n.fa-tablet:before{content:\"\\f10a\"}\n.fa-tablet-alt:before{content:\"\\f3fa\"}\n.fa-tablets:before{content:\"\\f490\"}\n.fa-tachometer-alt:before{content:\"\\f3fd\"}\n.fa-tag:before{content:\"\\f02b\"}\n.fa-tags:before{content:\"\\f02c\"}\n.fa-tape:before{content:\"\\f4db\"}\n.fa-tasks:before{content:\"\\f0ae\"}\n.fa-taxi:before{content:\"\\f1ba\"}\n.fa-teamspeak:before{content:\"\\f4f9\"}\n.fa-teeth:before{content:\"\\f62e\"}\n.fa-teeth-open:before{content:\"\\f62f\"}\n.fa-telegram:before{content:\"\\f2c6\"}\n.fa-telegram-plane:before{content:\"\\f3fe\"}\n.fa-temperature-high:before{content:\"\\f769\"}\n.fa-temperature-low:before{content:\"\\f76b\"}\n.fa-tencent-weibo:before{content:\"\\f1d5\"}\n.fa-tenge:before{content:\"\\f7d7\"}\n.fa-terminal:before{content:\"\\f120\"}\n.fa-text-height:before{content:\"\\f034\"}\n.fa-text-width:before{content:\"\\f035\"}\n.fa-th:before{content:\"\\f00a\"}\n.fa-th-large:before{content:\"\\f009\"}\n.fa-th-list:before{content:\"\\f00b\"}\n.fa-the-red-yeti:before{content:\"\\f69d\"}\n.fa-theater-masks:before{content:\"\\f630\"}\n.fa-themeco:before{content:\"\\f5c6\"}\n.fa-themeisle:before{content:\"\\f2b2\"}\n.fa-thermometer:before{content:\"\\f491\"}\n.fa-thermometer-empty:before{content:\"\\f2cb\"}\n.fa-thermometer-full:before{content:\"\\f2c7\"}\n.fa-thermometer-half:before{content:\"\\f2c9\"}\n.fa-thermometer-quarter:before{content:\"\\f2ca\"}\n.fa-thermometer-three-quarters:before{content:\"\\f2c8\"}\n.fa-think-peaks:before{content:\"\\f731\"}\n.fa-thumbs-down:before{content:\"\\f165\"}\n.fa-thumbs-up:before{content:\"\\f164\"}\n.fa-thumbtack:before{content:\"\\f08d\"}\n.fa-ticket-alt:before{content:\"\\f3ff\"}\n.fa-times:before{content:\"\\f00d\"}\n.fa-times-circle:before{content:\"\\f057\"}\n.fa-tint:before{content:\"\\f043\"}\n.fa-tint-slash:before{content:\"\\f5c7\"}\n.fa-tired:before{content:\"\\f5c8\"}\n.fa-toggle-off:before{content:\"\\f204\"}\n.fa-toggle-on:before{content:\"\\f205\"}\n.fa-toilet:before{content:\"\\f7d8\"}\n.fa-toilet-paper:before{content:\"\\f71e\"}\n.fa-toolbox:before{content:\"\\f552\"}\n.fa-tools:before{content:\"\\f7d9\"}\n.fa-tooth:before{content:\"\\f5c9\"}\n.fa-torah:before{content:\"\\f6a0\"}\n.fa-torii-gate:before{content:\"\\f6a1\"}\n.fa-tractor:before{content:\"\\f722\"}\n.fa-trade-federation:before{content:\"\\f513\"}\n.fa-trademark:before{content:\"\\f25c\"}\n.fa-traffic-light:before{content:\"\\f637\"}\n.fa-trailer:before{content:\"\\f941\"}\n.fa-train:before{content:\"\\f238\"}\n.fa-tram:before{content:\"\\f7da\"}\n.fa-transgender:before{content:\"\\f224\"}\n.fa-transgender-alt:before{content:\"\\f225\"}\n.fa-trash:before{content:\"\\f1f8\"}\n.fa-trash-alt:before{content:\"\\f2ed\"}\n.fa-trash-restore:before{content:\"\\f829\"}\n.fa-trash-restore-alt:before{content:\"\\f82a\"}\n.fa-tree:before{content:\"\\f1bb\"}\n.fa-trello:before{content:\"\\f181\"}\n.fa-tripadvisor:before{content:\"\\f262\"}\n.fa-trophy:before{content:\"\\f091\"}\n.fa-truck:before{content:\"\\f0d1\"}\n.fa-truck-loading:before{content:\"\\f4de\"}\n.fa-truck-monster:before{content:\"\\f63b\"}\n.fa-truck-moving:before{content:\"\\f4df\"}\n.fa-truck-pickup:before{content:\"\\f63c\"}\n.fa-tshirt:before{content:\"\\f553\"}\n.fa-tty:before{content:\"\\f1e4\"}\n.fa-tumblr:before{content:\"\\f173\"}\n.fa-tumblr-square:before{content:\"\\f174\"}\n.fa-tv:before{content:\"\\f26c\"}\n.fa-twitch:before{content:\"\\f1e8\"}\n.fa-twitter:before{content:\"\\f099\"}\n.fa-twitter-square:before{content:\"\\f081\"}\n.fa-typo3:before{content:\"\\f42b\"}\n.fa-uber:before{content:\"\\f402\"}\n.fa-ubuntu:before{content:\"\\f7df\"}\n.fa-uikit:before{content:\"\\f403\"}\n.fa-umbraco:before{content:\"\\f8e8\"}\n.fa-umbrella:before{content:\"\\f0e9\"}\n.fa-umbrella-beach:before{content:\"\\f5ca\"}\n.fa-underline:before{content:\"\\f0cd\"}\n.fa-undo:before{content:\"\\f0e2\"}\n.fa-undo-alt:before{content:\"\\f2ea\"}\n.fa-uniregistry:before{content:\"\\f404\"}\n.fa-unity:before{content:\"\\f949\"}\n.fa-universal-access:before{content:\"\\f29a\"}\n.fa-university:before{content:\"\\f19c\"}\n.fa-unlink:before{content:\"\\f127\"}\n.fa-unlock:before{content:\"\\f09c\"}\n.fa-unlock-alt:before{content:\"\\f13e\"}\n.fa-untappd:before{content:\"\\f405\"}\n.fa-upload:before{content:\"\\f093\"}\n.fa-ups:before{content:\"\\f7e0\"}\n.fa-usb:before{content:\"\\f287\"}\n.fa-user:before{content:\"\\f007\"}\n.fa-user-alt:before{content:\"\\f406\"}\n.fa-user-alt-slash:before{content:\"\\f4fa\"}\n.fa-user-astronaut:before{content:\"\\f4fb\"}\n.fa-user-check:before{content:\"\\f4fc\"}\n.fa-user-circle:before{content:\"\\f2bd\"}\n.fa-user-clock:before{content:\"\\f4fd\"}\n.fa-user-cog:before{content:\"\\f4fe\"}\n.fa-user-edit:before{content:\"\\f4ff\"}\n.fa-user-friends:before{content:\"\\f500\"}\n.fa-user-graduate:before{content:\"\\f501\"}\n.fa-user-injured:before{content:\"\\f728\"}\n.fa-user-lock:before{content:\"\\f502\"}\n.fa-user-md:before{content:\"\\f0f0\"}\n.fa-user-minus:before{content:\"\\f503\"}\n.fa-user-ninja:before{content:\"\\f504\"}\n.fa-user-nurse:before{content:\"\\f82f\"}\n.fa-user-plus:before{content:\"\\f234\"}\n.fa-user-secret:before{content:\"\\f21b\"}\n.fa-user-shield:before{content:\"\\f505\"}\n.fa-user-slash:before{content:\"\\f506\"}\n.fa-user-tag:before{content:\"\\f507\"}\n.fa-user-tie:before{content:\"\\f508\"}\n.fa-user-times:before{content:\"\\f235\"}\n.fa-users:before{content:\"\\f0c0\"}\n.fa-users-cog:before{content:\"\\f509\"}\n.fa-usps:before{content:\"\\f7e1\"}\n.fa-ussunnah:before{content:\"\\f407\"}\n.fa-utensil-spoon:before{content:\"\\f2e5\"}\n.fa-utensils:before{content:\"\\f2e7\"}\n.fa-vaadin:before{content:\"\\f408\"}\n.fa-vector-square:before{content:\"\\f5cb\"}\n.fa-venus:before{content:\"\\f221\"}\n.fa-venus-double:before{content:\"\\f226\"}\n.fa-venus-mars:before{content:\"\\f228\"}\n.fa-viacoin:before{content:\"\\f237\"}\n.fa-viadeo:before{content:\"\\f2a9\"}\n.fa-viadeo-square:before{content:\"\\f2aa\"}\n.fa-vial:before{content:\"\\f492\"}\n.fa-vials:before{content:\"\\f493\"}\n.fa-viber:before{content:\"\\f409\"}\n.fa-video:before{content:\"\\f03d\"}\n.fa-video-slash:before{content:\"\\f4e2\"}\n.fa-vihara:before{content:\"\\f6a7\"}\n.fa-vimeo:before{content:\"\\f40a\"}\n.fa-vimeo-square:before{content:\"\\f194\"}\n.fa-vimeo-v:before{content:\"\\f27d\"}\n.fa-vine:before{content:\"\\f1ca\"}\n.fa-vk:before{content:\"\\f189\"}\n.fa-vnv:before{content:\"\\f40b\"}\n.fa-voicemail:before{content:\"\\f897\"}\n.fa-volleyball-ball:before{content:\"\\f45f\"}\n.fa-volume-down:before{content:\"\\f027\"}\n.fa-volume-mute:before{content:\"\\f6a9\"}\n.fa-volume-off:before{content:\"\\f026\"}\n.fa-volume-up:before{content:\"\\f028\"}\n.fa-vote-yea:before{content:\"\\f772\"}\n.fa-vr-cardboard:before{content:\"\\f729\"}\n.fa-vuejs:before{content:\"\\f41f\"}\n.fa-walking:before{content:\"\\f554\"}\n.fa-wallet:before{content:\"\\f555\"}\n.fa-warehouse:before{content:\"\\f494\"}\n.fa-water:before{content:\"\\f773\"}\n.fa-wave-square:before{content:\"\\f83e\"}\n.fa-waze:before{content:\"\\f83f\"}\n.fa-weebly:before{content:\"\\f5cc\"}\n.fa-weibo:before{content:\"\\f18a\"}\n.fa-weight:before{content:\"\\f496\"}\n.fa-weight-hanging:before{content:\"\\f5cd\"}\n.fa-weixin:before{content:\"\\f1d7\"}\n.fa-whatsapp:before{content:\"\\f232\"}\n.fa-whatsapp-square:before{content:\"\\f40c\"}\n.fa-wheelchair:before{content:\"\\f193\"}\n.fa-whmcs:before{content:\"\\f40d\"}\n.fa-wifi:before{content:\"\\f1eb\"}\n.fa-wikipedia-w:before{content:\"\\f266\"}\n.fa-wind:before{content:\"\\f72e\"}\n.fa-window-close:before{content:\"\\f410\"}\n.fa-window-maximize:before{content:\"\\f2d0\"}\n.fa-window-minimize:before{content:\"\\f2d1\"}\n.fa-window-restore:before{content:\"\\f2d2\"}\n.fa-windows:before{content:\"\\f17a\"}\n.fa-wine-bottle:before{content:\"\\f72f\"}\n.fa-wine-glass:before{content:\"\\f4e3\"}\n.fa-wine-glass-alt:before{content:\"\\f5ce\"}\n.fa-wix:before{content:\"\\f5cf\"}\n.fa-wizards-of-the-coast:before{content:\"\\f730\"}\n.fa-wolf-pack-battalion:before{content:\"\\f514\"}\n.fa-won-sign:before{content:\"\\f159\"}\n.fa-wordpress:before{content:\"\\f19a\"}\n.fa-wordpress-simple:before{content:\"\\f411\"}\n.fa-wpbeginner:before{content:\"\\f297\"}\n.fa-wpexplorer:before{content:\"\\f2de\"}\n.fa-wpforms:before{content:\"\\f298\"}\n.fa-wpressr:before{content:\"\\f3e4\"}\n.fa-wrench:before{content:\"\\f0ad\"}\n.fa-x-ray:before{content:\"\\f497\"}\n.fa-xbox:before{content:\"\\f412\"}\n.fa-xing:before{content:\"\\f168\"}\n.fa-xing-square:before{content:\"\\f169\"}\n.fa-y-combinator:before{content:\"\\f23b\"}\n.fa-yahoo:before{content:\"\\f19e\"}\n.fa-yammer:before{content:\"\\f840\"}\n.fa-yandex:before{content:\"\\f413\"}\n.fa-yandex-international:before{content:\"\\f414\"}\n.fa-yarn:before{content:\"\\f7e3\"}\n.fa-yelp:before{content:\"\\f1e9\"}\n.fa-yen-sign:before{content:\"\\f157\"}\n.fa-yin-yang:before{content:\"\\f6ad\"}\n.fa-yoast:before{content:\"\\f2b1\"}\n.fa-youtube:before{content:\"\\f167\"}\n.fa-youtube-square:before{content:\"\\f431\"}\n.fa-zhihu:before{content:\"\\f63f\"}\n.sr-only{border:0;clip:rect(0,0,0,0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}\n.sr-only-focusable:active,.sr-only-focusable:focus{clip:auto;height:auto;margin:0;overflow:visible;position:static;width:auto}\n@font-face{font-family:\"Font Awesome 5 Brands\";font-style:normal;font-weight:normal;font-display:auto;src:url(" + ___CSS_LOADER_URL___0___ + ");src:url(" + ___CSS_LOADER_URL___1___ + ") format(\"embedded-opentype\"),url(" + ___CSS_LOADER_URL___2___ + ") format(\"woff2\"),url(" + ___CSS_LOADER_URL___3___ + ") format(\"woff\"),url(" + ___CSS_LOADER_URL___4___ + ") format(\"truetype\"),url(" + ___CSS_LOADER_URL___5___ + ") format(\"svg\")}\n.fab{font-family:\"Font Awesome 5 Brands\"}\n@font-face{font-family:\"Font Awesome 5 Free\";font-style:normal;font-weight:400;font-display:auto;src:url(" + ___CSS_LOADER_URL___6___ + ");src:url(" + ___CSS_LOADER_URL___7___ + ") format(\"embedded-opentype\"),url(" + ___CSS_LOADER_URL___8___ + ") format(\"woff2\"),url(" + ___CSS_LOADER_URL___9___ + ") format(\"woff\"),url(" + ___CSS_LOADER_URL___10___ + ") format(\"truetype\"),url(" + ___CSS_LOADER_URL___11___ + ") format(\"svg\")}\n.far{font-weight:400}\n@font-face{font-family:\"Font Awesome 5 Free\";font-style:normal;font-weight:900;font-display:auto;src:url(" + ___CSS_LOADER_URL___12___ + ");src:url(" + ___CSS_LOADER_URL___13___ + ") format(\"embedded-opentype\"),url(" + ___CSS_LOADER_URL___14___ + ") format(\"woff2\"),url(" + ___CSS_LOADER_URL___15___ + ") format(\"woff\"),url(" + ___CSS_LOADER_URL___16___ + ") format(\"truetype\"),url(" + ___CSS_LOADER_URL___17___ + ") format(\"svg\")}\n.fa,.far,.fas{font-family:\"Font Awesome 5 Free\"}\n.fa,.fas{font-weight:900}", "",{"version":3,"sources":["all.min.css"],"names":[],"mappings":"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","file":"all.min.css","sourcesContent":["/*!\n * Font Awesome Free 5.12.0 by @fontawesome - https://fontawesome.com\n * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)\n */\n.fa,.fab,.fad,.fal,.far,.fas{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:inline-block;font-style:normal;font-variant:normal;text-rendering:auto;line-height:1}.fa-lg{font-size:1.33333em;line-height:.75em;vertical-align:-.0667em}.fa-xs{font-size:.75em}.fa-sm{font-size:.875em}.fa-1x{font-size:1em}.fa-2x{font-size:2em}.fa-3x{font-size:3em}.fa-4x{font-size:4em}.fa-5x{font-size:5em}.fa-6x{font-size:6em}.fa-7x{font-size:7em}.fa-8x{font-size:8em}.fa-9x{font-size:9em}.fa-10x{font-size:10em}.fa-fw{text-align:center;width:1.25em}.fa-ul{list-style-type:none;margin-left:2.5em;padding-left:0}.fa-ul>li{position:relative}.fa-li{left:-2em;position:absolute;text-align:center;width:2em;line-height:inherit}.fa-border{border:.08em solid #eee;border-radius:.1em;padding:.2em .25em .15em}.fa-pull-left{float:left}.fa-pull-right{float:right}.fa.fa-pull-left,.fab.fa-pull-left,.fal.fa-pull-left,.far.fa-pull-left,.fas.fa-pull-left{margin-right:.3em}.fa.fa-pull-right,.fab.fa-pull-right,.fal.fa-pull-right,.far.fa-pull-right,.fas.fa-pull-right{margin-left:.3em}.fa-spin{-webkit-animation:fa-spin 2s linear infinite;animation:fa-spin 2s linear infinite}.fa-pulse{-webkit-animation:fa-spin 1s steps(8) infinite;animation:fa-spin 1s steps(8) infinite}@-webkit-keyframes fa-spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes fa-spin{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.fa-rotate-90{-ms-filter:\"progid:DXImageTransform.Microsoft.BasicImage(rotation=1)\";-webkit-transform:rotate(90deg);transform:rotate(90deg)}.fa-rotate-180{-ms-filter:\"progid:DXImageTransform.Microsoft.BasicImage(rotation=2)\";-webkit-transform:rotate(180deg);transform:rotate(180deg)}.fa-rotate-270{-ms-filter:\"progid:DXImageTransform.Microsoft.BasicImage(rotation=3)\";-webkit-transform:rotate(270deg);transform:rotate(270deg)}.fa-flip-horizontal{-ms-filter:\"progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)\";-webkit-transform:scaleX(-1);transform:scaleX(-1)}.fa-flip-vertical{-webkit-transform:scaleY(-1);transform:scaleY(-1)}.fa-flip-both,.fa-flip-horizontal.fa-flip-vertical,.fa-flip-vertical{-ms-filter:\"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)\"}.fa-flip-both,.fa-flip-horizontal.fa-flip-vertical{-webkit-transform:scale(-1);transform:scale(-1)}:root .fa-flip-both,:root .fa-flip-horizontal,:root .fa-flip-vertical,:root .fa-rotate-90,:root .fa-rotate-180,:root .fa-rotate-270{-webkit-filter:none;filter:none}.fa-stack{display:inline-block;height:2em;line-height:2em;position:relative;vertical-align:middle;width:2.5em}.fa-stack-1x,.fa-stack-2x{left:0;position:absolute;text-align:center;width:100%}.fa-stack-1x{line-height:inherit}.fa-stack-2x{font-size:2em}.fa-inverse{color:#fff}.fa-500px:before{content:\"\\f26e\"}.fa-accessible-icon:before{content:\"\\f368\"}.fa-accusoft:before{content:\"\\f369\"}.fa-acquisitions-incorporated:before{content:\"\\f6af\"}.fa-ad:before{content:\"\\f641\"}.fa-address-book:before{content:\"\\f2b9\"}.fa-address-card:before{content:\"\\f2bb\"}.fa-adjust:before{content:\"\\f042\"}.fa-adn:before{content:\"\\f170\"}.fa-adobe:before{content:\"\\f778\"}.fa-adversal:before{content:\"\\f36a\"}.fa-affiliatetheme:before{content:\"\\f36b\"}.fa-air-freshener:before{content:\"\\f5d0\"}.fa-airbnb:before{content:\"\\f834\"}.fa-algolia:before{content:\"\\f36c\"}.fa-align-center:before{content:\"\\f037\"}.fa-align-justify:before{content:\"\\f039\"}.fa-align-left:before{content:\"\\f036\"}.fa-align-right:before{content:\"\\f038\"}.fa-alipay:before{content:\"\\f642\"}.fa-allergies:before{content:\"\\f461\"}.fa-amazon:before{content:\"\\f270\"}.fa-amazon-pay:before{content:\"\\f42c\"}.fa-ambulance:before{content:\"\\f0f9\"}.fa-american-sign-language-interpreting:before{content:\"\\f2a3\"}.fa-amilia:before{content:\"\\f36d\"}.fa-anchor:before{content:\"\\f13d\"}.fa-android:before{content:\"\\f17b\"}.fa-angellist:before{content:\"\\f209\"}.fa-angle-double-down:before{content:\"\\f103\"}.fa-angle-double-left:before{content:\"\\f100\"}.fa-angle-double-right:before{content:\"\\f101\"}.fa-angle-double-up:before{content:\"\\f102\"}.fa-angle-down:before{content:\"\\f107\"}.fa-angle-left:before{content:\"\\f104\"}.fa-angle-right:before{content:\"\\f105\"}.fa-angle-up:before{content:\"\\f106\"}.fa-angry:before{content:\"\\f556\"}.fa-angrycreative:before{content:\"\\f36e\"}.fa-angular:before{content:\"\\f420\"}.fa-ankh:before{content:\"\\f644\"}.fa-app-store:before{content:\"\\f36f\"}.fa-app-store-ios:before{content:\"\\f370\"}.fa-apper:before{content:\"\\f371\"}.fa-apple:before{content:\"\\f179\"}.fa-apple-alt:before{content:\"\\f5d1\"}.fa-apple-pay:before{content:\"\\f415\"}.fa-archive:before{content:\"\\f187\"}.fa-archway:before{content:\"\\f557\"}.fa-arrow-alt-circle-down:before{content:\"\\f358\"}.fa-arrow-alt-circle-left:before{content:\"\\f359\"}.fa-arrow-alt-circle-right:before{content:\"\\f35a\"}.fa-arrow-alt-circle-up:before{content:\"\\f35b\"}.fa-arrow-circle-down:before{content:\"\\f0ab\"}.fa-arrow-circle-left:before{content:\"\\f0a8\"}.fa-arrow-circle-right:before{content:\"\\f0a9\"}.fa-arrow-circle-up:before{content:\"\\f0aa\"}.fa-arrow-down:before{content:\"\\f063\"}.fa-arrow-left:before{content:\"\\f060\"}.fa-arrow-right:before{content:\"\\f061\"}.fa-arrow-up:before{content:\"\\f062\"}.fa-arrows-alt:before{content:\"\\f0b2\"}.fa-arrows-alt-h:before{content:\"\\f337\"}.fa-arrows-alt-v:before{content:\"\\f338\"}.fa-artstation:before{content:\"\\f77a\"}.fa-assistive-listening-systems:before{content:\"\\f2a2\"}.fa-asterisk:before{content:\"\\f069\"}.fa-asymmetrik:before{content:\"\\f372\"}.fa-at:before{content:\"\\f1fa\"}.fa-atlas:before{content:\"\\f558\"}.fa-atlassian:before{content:\"\\f77b\"}.fa-atom:before{content:\"\\f5d2\"}.fa-audible:before{content:\"\\f373\"}.fa-audio-description:before{content:\"\\f29e\"}.fa-autoprefixer:before{content:\"\\f41c\"}.fa-avianex:before{content:\"\\f374\"}.fa-aviato:before{content:\"\\f421\"}.fa-award:before{content:\"\\f559\"}.fa-aws:before{content:\"\\f375\"}.fa-baby:before{content:\"\\f77c\"}.fa-baby-carriage:before{content:\"\\f77d\"}.fa-backspace:before{content:\"\\f55a\"}.fa-backward:before{content:\"\\f04a\"}.fa-bacon:before{content:\"\\f7e5\"}.fa-bahai:before{content:\"\\f666\"}.fa-balance-scale:before{content:\"\\f24e\"}.fa-balance-scale-left:before{content:\"\\f515\"}.fa-balance-scale-right:before{content:\"\\f516\"}.fa-ban:before{content:\"\\f05e\"}.fa-band-aid:before{content:\"\\f462\"}.fa-bandcamp:before{content:\"\\f2d5\"}.fa-barcode:before{content:\"\\f02a\"}.fa-bars:before{content:\"\\f0c9\"}.fa-baseball-ball:before{content:\"\\f433\"}.fa-basketball-ball:before{content:\"\\f434\"}.fa-bath:before{content:\"\\f2cd\"}.fa-battery-empty:before{content:\"\\f244\"}.fa-battery-full:before{content:\"\\f240\"}.fa-battery-half:before{content:\"\\f242\"}.fa-battery-quarter:before{content:\"\\f243\"}.fa-battery-three-quarters:before{content:\"\\f241\"}.fa-battle-net:before{content:\"\\f835\"}.fa-bed:before{content:\"\\f236\"}.fa-beer:before{content:\"\\f0fc\"}.fa-behance:before{content:\"\\f1b4\"}.fa-behance-square:before{content:\"\\f1b5\"}.fa-bell:before{content:\"\\f0f3\"}.fa-bell-slash:before{content:\"\\f1f6\"}.fa-bezier-curve:before{content:\"\\f55b\"}.fa-bible:before{content:\"\\f647\"}.fa-bicycle:before{content:\"\\f206\"}.fa-biking:before{content:\"\\f84a\"}.fa-bimobject:before{content:\"\\f378\"}.fa-binoculars:before{content:\"\\f1e5\"}.fa-biohazard:before{content:\"\\f780\"}.fa-birthday-cake:before{content:\"\\f1fd\"}.fa-bitbucket:before{content:\"\\f171\"}.fa-bitcoin:before{content:\"\\f379\"}.fa-bity:before{content:\"\\f37a\"}.fa-black-tie:before{content:\"\\f27e\"}.fa-blackberry:before{content:\"\\f37b\"}.fa-blender:before{content:\"\\f517\"}.fa-blender-phone:before{content:\"\\f6b6\"}.fa-blind:before{content:\"\\f29d\"}.fa-blog:before{content:\"\\f781\"}.fa-blogger:before{content:\"\\f37c\"}.fa-blogger-b:before{content:\"\\f37d\"}.fa-bluetooth:before{content:\"\\f293\"}.fa-bluetooth-b:before{content:\"\\f294\"}.fa-bold:before{content:\"\\f032\"}.fa-bolt:before{content:\"\\f0e7\"}.fa-bomb:before{content:\"\\f1e2\"}.fa-bone:before{content:\"\\f5d7\"}.fa-bong:before{content:\"\\f55c\"}.fa-book:before{content:\"\\f02d\"}.fa-book-dead:before{content:\"\\f6b7\"}.fa-book-medical:before{content:\"\\f7e6\"}.fa-book-open:before{content:\"\\f518\"}.fa-book-reader:before{content:\"\\f5da\"}.fa-bookmark:before{content:\"\\f02e\"}.fa-bootstrap:before{content:\"\\f836\"}.fa-border-all:before{content:\"\\f84c\"}.fa-border-none:before{content:\"\\f850\"}.fa-border-style:before{content:\"\\f853\"}.fa-bowling-ball:before{content:\"\\f436\"}.fa-box:before{content:\"\\f466\"}.fa-box-open:before{content:\"\\f49e\"}.fa-boxes:before{content:\"\\f468\"}.fa-braille:before{content:\"\\f2a1\"}.fa-brain:before{content:\"\\f5dc\"}.fa-bread-slice:before{content:\"\\f7ec\"}.fa-briefcase:before{content:\"\\f0b1\"}.fa-briefcase-medical:before{content:\"\\f469\"}.fa-broadcast-tower:before{content:\"\\f519\"}.fa-broom:before{content:\"\\f51a\"}.fa-brush:before{content:\"\\f55d\"}.fa-btc:before{content:\"\\f15a\"}.fa-buffer:before{content:\"\\f837\"}.fa-bug:before{content:\"\\f188\"}.fa-building:before{content:\"\\f1ad\"}.fa-bullhorn:before{content:\"\\f0a1\"}.fa-bullseye:before{content:\"\\f140\"}.fa-burn:before{content:\"\\f46a\"}.fa-buromobelexperte:before{content:\"\\f37f\"}.fa-bus:before{content:\"\\f207\"}.fa-bus-alt:before{content:\"\\f55e\"}.fa-business-time:before{content:\"\\f64a\"}.fa-buy-n-large:before{content:\"\\f8a6\"}.fa-buysellads:before{content:\"\\f20d\"}.fa-calculator:before{content:\"\\f1ec\"}.fa-calendar:before{content:\"\\f133\"}.fa-calendar-alt:before{content:\"\\f073\"}.fa-calendar-check:before{content:\"\\f274\"}.fa-calendar-day:before{content:\"\\f783\"}.fa-calendar-minus:before{content:\"\\f272\"}.fa-calendar-plus:before{content:\"\\f271\"}.fa-calendar-times:before{content:\"\\f273\"}.fa-calendar-week:before{content:\"\\f784\"}.fa-camera:before{content:\"\\f030\"}.fa-camera-retro:before{content:\"\\f083\"}.fa-campground:before{content:\"\\f6bb\"}.fa-canadian-maple-leaf:before{content:\"\\f785\"}.fa-candy-cane:before{content:\"\\f786\"}.fa-cannabis:before{content:\"\\f55f\"}.fa-capsules:before{content:\"\\f46b\"}.fa-car:before{content:\"\\f1b9\"}.fa-car-alt:before{content:\"\\f5de\"}.fa-car-battery:before{content:\"\\f5df\"}.fa-car-crash:before{content:\"\\f5e1\"}.fa-car-side:before{content:\"\\f5e4\"}.fa-caravan:before{content:\"\\f8ff\"}.fa-caret-down:before{content:\"\\f0d7\"}.fa-caret-left:before{content:\"\\f0d9\"}.fa-caret-right:before{content:\"\\f0da\"}.fa-caret-square-down:before{content:\"\\f150\"}.fa-caret-square-left:before{content:\"\\f191\"}.fa-caret-square-right:before{content:\"\\f152\"}.fa-caret-square-up:before{content:\"\\f151\"}.fa-caret-up:before{content:\"\\f0d8\"}.fa-carrot:before{content:\"\\f787\"}.fa-cart-arrow-down:before{content:\"\\f218\"}.fa-cart-plus:before{content:\"\\f217\"}.fa-cash-register:before{content:\"\\f788\"}.fa-cat:before{content:\"\\f6be\"}.fa-cc-amazon-pay:before{content:\"\\f42d\"}.fa-cc-amex:before{content:\"\\f1f3\"}.fa-cc-apple-pay:before{content:\"\\f416\"}.fa-cc-diners-club:before{content:\"\\f24c\"}.fa-cc-discover:before{content:\"\\f1f2\"}.fa-cc-jcb:before{content:\"\\f24b\"}.fa-cc-mastercard:before{content:\"\\f1f1\"}.fa-cc-paypal:before{content:\"\\f1f4\"}.fa-cc-stripe:before{content:\"\\f1f5\"}.fa-cc-visa:before{content:\"\\f1f0\"}.fa-centercode:before{content:\"\\f380\"}.fa-centos:before{content:\"\\f789\"}.fa-certificate:before{content:\"\\f0a3\"}.fa-chair:before{content:\"\\f6c0\"}.fa-chalkboard:before{content:\"\\f51b\"}.fa-chalkboard-teacher:before{content:\"\\f51c\"}.fa-charging-station:before{content:\"\\f5e7\"}.fa-chart-area:before{content:\"\\f1fe\"}.fa-chart-bar:before{content:\"\\f080\"}.fa-chart-line:before{content:\"\\f201\"}.fa-chart-pie:before{content:\"\\f200\"}.fa-check:before{content:\"\\f00c\"}.fa-check-circle:before{content:\"\\f058\"}.fa-check-double:before{content:\"\\f560\"}.fa-check-square:before{content:\"\\f14a\"}.fa-cheese:before{content:\"\\f7ef\"}.fa-chess:before{content:\"\\f439\"}.fa-chess-bishop:before{content:\"\\f43a\"}.fa-chess-board:before{content:\"\\f43c\"}.fa-chess-king:before{content:\"\\f43f\"}.fa-chess-knight:before{content:\"\\f441\"}.fa-chess-pawn:before{content:\"\\f443\"}.fa-chess-queen:before{content:\"\\f445\"}.fa-chess-rook:before{content:\"\\f447\"}.fa-chevron-circle-down:before{content:\"\\f13a\"}.fa-chevron-circle-left:before{content:\"\\f137\"}.fa-chevron-circle-right:before{content:\"\\f138\"}.fa-chevron-circle-up:before{content:\"\\f139\"}.fa-chevron-down:before{content:\"\\f078\"}.fa-chevron-left:before{content:\"\\f053\"}.fa-chevron-right:before{content:\"\\f054\"}.fa-chevron-up:before{content:\"\\f077\"}.fa-child:before{content:\"\\f1ae\"}.fa-chrome:before{content:\"\\f268\"}.fa-chromecast:before{content:\"\\f838\"}.fa-church:before{content:\"\\f51d\"}.fa-circle:before{content:\"\\f111\"}.fa-circle-notch:before{content:\"\\f1ce\"}.fa-city:before{content:\"\\f64f\"}.fa-clinic-medical:before{content:\"\\f7f2\"}.fa-clipboard:before{content:\"\\f328\"}.fa-clipboard-check:before{content:\"\\f46c\"}.fa-clipboard-list:before{content:\"\\f46d\"}.fa-clock:before{content:\"\\f017\"}.fa-clone:before{content:\"\\f24d\"}.fa-closed-captioning:before{content:\"\\f20a\"}.fa-cloud:before{content:\"\\f0c2\"}.fa-cloud-download-alt:before{content:\"\\f381\"}.fa-cloud-meatball:before{content:\"\\f73b\"}.fa-cloud-moon:before{content:\"\\f6c3\"}.fa-cloud-moon-rain:before{content:\"\\f73c\"}.fa-cloud-rain:before{content:\"\\f73d\"}.fa-cloud-showers-heavy:before{content:\"\\f740\"}.fa-cloud-sun:before{content:\"\\f6c4\"}.fa-cloud-sun-rain:before{content:\"\\f743\"}.fa-cloud-upload-alt:before{content:\"\\f382\"}.fa-cloudscale:before{content:\"\\f383\"}.fa-cloudsmith:before{content:\"\\f384\"}.fa-cloudversify:before{content:\"\\f385\"}.fa-cocktail:before{content:\"\\f561\"}.fa-code:before{content:\"\\f121\"}.fa-code-branch:before{content:\"\\f126\"}.fa-codepen:before{content:\"\\f1cb\"}.fa-codiepie:before{content:\"\\f284\"}.fa-coffee:before{content:\"\\f0f4\"}.fa-cog:before{content:\"\\f013\"}.fa-cogs:before{content:\"\\f085\"}.fa-coins:before{content:\"\\f51e\"}.fa-columns:before{content:\"\\f0db\"}.fa-comment:before{content:\"\\f075\"}.fa-comment-alt:before{content:\"\\f27a\"}.fa-comment-dollar:before{content:\"\\f651\"}.fa-comment-dots:before{content:\"\\f4ad\"}.fa-comment-medical:before{content:\"\\f7f5\"}.fa-comment-slash:before{content:\"\\f4b3\"}.fa-comments:before{content:\"\\f086\"}.fa-comments-dollar:before{content:\"\\f653\"}.fa-compact-disc:before{content:\"\\f51f\"}.fa-compass:before{content:\"\\f14e\"}.fa-compress:before{content:\"\\f066\"}.fa-compress-alt:before{content:\"\\f422\"}.fa-compress-arrows-alt:before{content:\"\\f78c\"}.fa-concierge-bell:before{content:\"\\f562\"}.fa-confluence:before{content:\"\\f78d\"}.fa-connectdevelop:before{content:\"\\f20e\"}.fa-contao:before{content:\"\\f26d\"}.fa-cookie:before{content:\"\\f563\"}.fa-cookie-bite:before{content:\"\\f564\"}.fa-copy:before{content:\"\\f0c5\"}.fa-copyright:before{content:\"\\f1f9\"}.fa-cotton-bureau:before{content:\"\\f89e\"}.fa-couch:before{content:\"\\f4b8\"}.fa-cpanel:before{content:\"\\f388\"}.fa-creative-commons:before{content:\"\\f25e\"}.fa-creative-commons-by:before{content:\"\\f4e7\"}.fa-creative-commons-nc:before{content:\"\\f4e8\"}.fa-creative-commons-nc-eu:before{content:\"\\f4e9\"}.fa-creative-commons-nc-jp:before{content:\"\\f4ea\"}.fa-creative-commons-nd:before{content:\"\\f4eb\"}.fa-creative-commons-pd:before{content:\"\\f4ec\"}.fa-creative-commons-pd-alt:before{content:\"\\f4ed\"}.fa-creative-commons-remix:before{content:\"\\f4ee\"}.fa-creative-commons-sa:before{content:\"\\f4ef\"}.fa-creative-commons-sampling:before{content:\"\\f4f0\"}.fa-creative-commons-sampling-plus:before{content:\"\\f4f1\"}.fa-creative-commons-share:before{content:\"\\f4f2\"}.fa-creative-commons-zero:before{content:\"\\f4f3\"}.fa-credit-card:before{content:\"\\f09d\"}.fa-critical-role:before{content:\"\\f6c9\"}.fa-crop:before{content:\"\\f125\"}.fa-crop-alt:before{content:\"\\f565\"}.fa-cross:before{content:\"\\f654\"}.fa-crosshairs:before{content:\"\\f05b\"}.fa-crow:before{content:\"\\f520\"}.fa-crown:before{content:\"\\f521\"}.fa-crutch:before{content:\"\\f7f7\"}.fa-css3:before{content:\"\\f13c\"}.fa-css3-alt:before{content:\"\\f38b\"}.fa-cube:before{content:\"\\f1b2\"}.fa-cubes:before{content:\"\\f1b3\"}.fa-cut:before{content:\"\\f0c4\"}.fa-cuttlefish:before{content:\"\\f38c\"}.fa-d-and-d:before{content:\"\\f38d\"}.fa-d-and-d-beyond:before{content:\"\\f6ca\"}.fa-dashcube:before{content:\"\\f210\"}.fa-database:before{content:\"\\f1c0\"}.fa-deaf:before{content:\"\\f2a4\"}.fa-delicious:before{content:\"\\f1a5\"}.fa-democrat:before{content:\"\\f747\"}.fa-deploydog:before{content:\"\\f38e\"}.fa-deskpro:before{content:\"\\f38f\"}.fa-desktop:before{content:\"\\f108\"}.fa-dev:before{content:\"\\f6cc\"}.fa-deviantart:before{content:\"\\f1bd\"}.fa-dharmachakra:before{content:\"\\f655\"}.fa-dhl:before{content:\"\\f790\"}.fa-diagnoses:before{content:\"\\f470\"}.fa-diaspora:before{content:\"\\f791\"}.fa-dice:before{content:\"\\f522\"}.fa-dice-d20:before{content:\"\\f6cf\"}.fa-dice-d6:before{content:\"\\f6d1\"}.fa-dice-five:before{content:\"\\f523\"}.fa-dice-four:before{content:\"\\f524\"}.fa-dice-one:before{content:\"\\f525\"}.fa-dice-six:before{content:\"\\f526\"}.fa-dice-three:before{content:\"\\f527\"}.fa-dice-two:before{content:\"\\f528\"}.fa-digg:before{content:\"\\f1a6\"}.fa-digital-ocean:before{content:\"\\f391\"}.fa-digital-tachograph:before{content:\"\\f566\"}.fa-directions:before{content:\"\\f5eb\"}.fa-discord:before{content:\"\\f392\"}.fa-discourse:before{content:\"\\f393\"}.fa-divide:before{content:\"\\f529\"}.fa-dizzy:before{content:\"\\f567\"}.fa-dna:before{content:\"\\f471\"}.fa-dochub:before{content:\"\\f394\"}.fa-docker:before{content:\"\\f395\"}.fa-dog:before{content:\"\\f6d3\"}.fa-dollar-sign:before{content:\"\\f155\"}.fa-dolly:before{content:\"\\f472\"}.fa-dolly-flatbed:before{content:\"\\f474\"}.fa-donate:before{content:\"\\f4b9\"}.fa-door-closed:before{content:\"\\f52a\"}.fa-door-open:before{content:\"\\f52b\"}.fa-dot-circle:before{content:\"\\f192\"}.fa-dove:before{content:\"\\f4ba\"}.fa-download:before{content:\"\\f019\"}.fa-draft2digital:before{content:\"\\f396\"}.fa-drafting-compass:before{content:\"\\f568\"}.fa-dragon:before{content:\"\\f6d5\"}.fa-draw-polygon:before{content:\"\\f5ee\"}.fa-dribbble:before{content:\"\\f17d\"}.fa-dribbble-square:before{content:\"\\f397\"}.fa-dropbox:before{content:\"\\f16b\"}.fa-drum:before{content:\"\\f569\"}.fa-drum-steelpan:before{content:\"\\f56a\"}.fa-drumstick-bite:before{content:\"\\f6d7\"}.fa-drupal:before{content:\"\\f1a9\"}.fa-dumbbell:before{content:\"\\f44b\"}.fa-dumpster:before{content:\"\\f793\"}.fa-dumpster-fire:before{content:\"\\f794\"}.fa-dungeon:before{content:\"\\f6d9\"}.fa-dyalog:before{content:\"\\f399\"}.fa-earlybirds:before{content:\"\\f39a\"}.fa-ebay:before{content:\"\\f4f4\"}.fa-edge:before{content:\"\\f282\"}.fa-edit:before{content:\"\\f044\"}.fa-egg:before{content:\"\\f7fb\"}.fa-eject:before{content:\"\\f052\"}.fa-elementor:before{content:\"\\f430\"}.fa-ellipsis-h:before{content:\"\\f141\"}.fa-ellipsis-v:before{content:\"\\f142\"}.fa-ello:before{content:\"\\f5f1\"}.fa-ember:before{content:\"\\f423\"}.fa-empire:before{content:\"\\f1d1\"}.fa-envelope:before{content:\"\\f0e0\"}.fa-envelope-open:before{content:\"\\f2b6\"}.fa-envelope-open-text:before{content:\"\\f658\"}.fa-envelope-square:before{content:\"\\f199\"}.fa-envira:before{content:\"\\f299\"}.fa-equals:before{content:\"\\f52c\"}.fa-eraser:before{content:\"\\f12d\"}.fa-erlang:before{content:\"\\f39d\"}.fa-ethereum:before{content:\"\\f42e\"}.fa-ethernet:before{content:\"\\f796\"}.fa-etsy:before{content:\"\\f2d7\"}.fa-euro-sign:before{content:\"\\f153\"}.fa-evernote:before{content:\"\\f839\"}.fa-exchange-alt:before{content:\"\\f362\"}.fa-exclamation:before{content:\"\\f12a\"}.fa-exclamation-circle:before{content:\"\\f06a\"}.fa-exclamation-triangle:before{content:\"\\f071\"}.fa-expand:before{content:\"\\f065\"}.fa-expand-alt:before{content:\"\\f424\"}.fa-expand-arrows-alt:before{content:\"\\f31e\"}.fa-expeditedssl:before{content:\"\\f23e\"}.fa-external-link-alt:before{content:\"\\f35d\"}.fa-external-link-square-alt:before{content:\"\\f360\"}.fa-eye:before{content:\"\\f06e\"}.fa-eye-dropper:before{content:\"\\f1fb\"}.fa-eye-slash:before{content:\"\\f070\"}.fa-facebook:before{content:\"\\f09a\"}.fa-facebook-f:before{content:\"\\f39e\"}.fa-facebook-messenger:before{content:\"\\f39f\"}.fa-facebook-square:before{content:\"\\f082\"}.fa-fan:before{content:\"\\f863\"}.fa-fantasy-flight-games:before{content:\"\\f6dc\"}.fa-fast-backward:before{content:\"\\f049\"}.fa-fast-forward:before{content:\"\\f050\"}.fa-fax:before{content:\"\\f1ac\"}.fa-feather:before{content:\"\\f52d\"}.fa-feather-alt:before{content:\"\\f56b\"}.fa-fedex:before{content:\"\\f797\"}.fa-fedora:before{content:\"\\f798\"}.fa-female:before{content:\"\\f182\"}.fa-fighter-jet:before{content:\"\\f0fb\"}.fa-figma:before{content:\"\\f799\"}.fa-file:before{content:\"\\f15b\"}.fa-file-alt:before{content:\"\\f15c\"}.fa-file-archive:before{content:\"\\f1c6\"}.fa-file-audio:before{content:\"\\f1c7\"}.fa-file-code:before{content:\"\\f1c9\"}.fa-file-contract:before{content:\"\\f56c\"}.fa-file-csv:before{content:\"\\f6dd\"}.fa-file-download:before{content:\"\\f56d\"}.fa-file-excel:before{content:\"\\f1c3\"}.fa-file-export:before{content:\"\\f56e\"}.fa-file-image:before{content:\"\\f1c5\"}.fa-file-import:before{content:\"\\f56f\"}.fa-file-invoice:before{content:\"\\f570\"}.fa-file-invoice-dollar:before{content:\"\\f571\"}.fa-file-medical:before{content:\"\\f477\"}.fa-file-medical-alt:before{content:\"\\f478\"}.fa-file-pdf:before{content:\"\\f1c1\"}.fa-file-powerpoint:before{content:\"\\f1c4\"}.fa-file-prescription:before{content:\"\\f572\"}.fa-file-signature:before{content:\"\\f573\"}.fa-file-upload:before{content:\"\\f574\"}.fa-file-video:before{content:\"\\f1c8\"}.fa-file-word:before{content:\"\\f1c2\"}.fa-fill:before{content:\"\\f575\"}.fa-fill-drip:before{content:\"\\f576\"}.fa-film:before{content:\"\\f008\"}.fa-filter:before{content:\"\\f0b0\"}.fa-fingerprint:before{content:\"\\f577\"}.fa-fire:before{content:\"\\f06d\"}.fa-fire-alt:before{content:\"\\f7e4\"}.fa-fire-extinguisher:before{content:\"\\f134\"}.fa-firefox:before{content:\"\\f269\"}.fa-firefox-browser:before{content:\"\\f907\"}.fa-first-aid:before{content:\"\\f479\"}.fa-first-order:before{content:\"\\f2b0\"}.fa-first-order-alt:before{content:\"\\f50a\"}.fa-firstdraft:before{content:\"\\f3a1\"}.fa-fish:before{content:\"\\f578\"}.fa-fist-raised:before{content:\"\\f6de\"}.fa-flag:before{content:\"\\f024\"}.fa-flag-checkered:before{content:\"\\f11e\"}.fa-flag-usa:before{content:\"\\f74d\"}.fa-flask:before{content:\"\\f0c3\"}.fa-flickr:before{content:\"\\f16e\"}.fa-flipboard:before{content:\"\\f44d\"}.fa-flushed:before{content:\"\\f579\"}.fa-fly:before{content:\"\\f417\"}.fa-folder:before{content:\"\\f07b\"}.fa-folder-minus:before{content:\"\\f65d\"}.fa-folder-open:before{content:\"\\f07c\"}.fa-folder-plus:before{content:\"\\f65e\"}.fa-font:before{content:\"\\f031\"}.fa-font-awesome:before{content:\"\\f2b4\"}.fa-font-awesome-alt:before{content:\"\\f35c\"}.fa-font-awesome-flag:before{content:\"\\f425\"}.fa-font-awesome-logo-full:before{content:\"\\f4e6\"}.fa-fonticons:before{content:\"\\f280\"}.fa-fonticons-fi:before{content:\"\\f3a2\"}.fa-football-ball:before{content:\"\\f44e\"}.fa-fort-awesome:before{content:\"\\f286\"}.fa-fort-awesome-alt:before{content:\"\\f3a3\"}.fa-forumbee:before{content:\"\\f211\"}.fa-forward:before{content:\"\\f04e\"}.fa-foursquare:before{content:\"\\f180\"}.fa-free-code-camp:before{content:\"\\f2c5\"}.fa-freebsd:before{content:\"\\f3a4\"}.fa-frog:before{content:\"\\f52e\"}.fa-frown:before{content:\"\\f119\"}.fa-frown-open:before{content:\"\\f57a\"}.fa-fulcrum:before{content:\"\\f50b\"}.fa-funnel-dollar:before{content:\"\\f662\"}.fa-futbol:before{content:\"\\f1e3\"}.fa-galactic-republic:before{content:\"\\f50c\"}.fa-galactic-senate:before{content:\"\\f50d\"}.fa-gamepad:before{content:\"\\f11b\"}.fa-gas-pump:before{content:\"\\f52f\"}.fa-gavel:before{content:\"\\f0e3\"}.fa-gem:before{content:\"\\f3a5\"}.fa-genderless:before{content:\"\\f22d\"}.fa-get-pocket:before{content:\"\\f265\"}.fa-gg:before{content:\"\\f260\"}.fa-gg-circle:before{content:\"\\f261\"}.fa-ghost:before{content:\"\\f6e2\"}.fa-gift:before{content:\"\\f06b\"}.fa-gifts:before{content:\"\\f79c\"}.fa-git:before{content:\"\\f1d3\"}.fa-git-alt:before{content:\"\\f841\"}.fa-git-square:before{content:\"\\f1d2\"}.fa-github:before{content:\"\\f09b\"}.fa-github-alt:before{content:\"\\f113\"}.fa-github-square:before{content:\"\\f092\"}.fa-gitkraken:before{content:\"\\f3a6\"}.fa-gitlab:before{content:\"\\f296\"}.fa-gitter:before{content:\"\\f426\"}.fa-glass-cheers:before{content:\"\\f79f\"}.fa-glass-martini:before{content:\"\\f000\"}.fa-glass-martini-alt:before{content:\"\\f57b\"}.fa-glass-whiskey:before{content:\"\\f7a0\"}.fa-glasses:before{content:\"\\f530\"}.fa-glide:before{content:\"\\f2a5\"}.fa-glide-g:before{content:\"\\f2a6\"}.fa-globe:before{content:\"\\f0ac\"}.fa-globe-africa:before{content:\"\\f57c\"}.fa-globe-americas:before{content:\"\\f57d\"}.fa-globe-asia:before{content:\"\\f57e\"}.fa-globe-europe:before{content:\"\\f7a2\"}.fa-gofore:before{content:\"\\f3a7\"}.fa-golf-ball:before{content:\"\\f450\"}.fa-goodreads:before{content:\"\\f3a8\"}.fa-goodreads-g:before{content:\"\\f3a9\"}.fa-google:before{content:\"\\f1a0\"}.fa-google-drive:before{content:\"\\f3aa\"}.fa-google-play:before{content:\"\\f3ab\"}.fa-google-plus:before{content:\"\\f2b3\"}.fa-google-plus-g:before{content:\"\\f0d5\"}.fa-google-plus-square:before{content:\"\\f0d4\"}.fa-google-wallet:before{content:\"\\f1ee\"}.fa-gopuram:before{content:\"\\f664\"}.fa-graduation-cap:before{content:\"\\f19d\"}.fa-gratipay:before{content:\"\\f184\"}.fa-grav:before{content:\"\\f2d6\"}.fa-greater-than:before{content:\"\\f531\"}.fa-greater-than-equal:before{content:\"\\f532\"}.fa-grimace:before{content:\"\\f57f\"}.fa-grin:before{content:\"\\f580\"}.fa-grin-alt:before{content:\"\\f581\"}.fa-grin-beam:before{content:\"\\f582\"}.fa-grin-beam-sweat:before{content:\"\\f583\"}.fa-grin-hearts:before{content:\"\\f584\"}.fa-grin-squint:before{content:\"\\f585\"}.fa-grin-squint-tears:before{content:\"\\f586\"}.fa-grin-stars:before{content:\"\\f587\"}.fa-grin-tears:before{content:\"\\f588\"}.fa-grin-tongue:before{content:\"\\f589\"}.fa-grin-tongue-squint:before{content:\"\\f58a\"}.fa-grin-tongue-wink:before{content:\"\\f58b\"}.fa-grin-wink:before{content:\"\\f58c\"}.fa-grip-horizontal:before{content:\"\\f58d\"}.fa-grip-lines:before{content:\"\\f7a4\"}.fa-grip-lines-vertical:before{content:\"\\f7a5\"}.fa-grip-vertical:before{content:\"\\f58e\"}.fa-gripfire:before{content:\"\\f3ac\"}.fa-grunt:before{content:\"\\f3ad\"}.fa-guitar:before{content:\"\\f7a6\"}.fa-gulp:before{content:\"\\f3ae\"}.fa-h-square:before{content:\"\\f0fd\"}.fa-hacker-news:before{content:\"\\f1d4\"}.fa-hacker-news-square:before{content:\"\\f3af\"}.fa-hackerrank:before{content:\"\\f5f7\"}.fa-hamburger:before{content:\"\\f805\"}.fa-hammer:before{content:\"\\f6e3\"}.fa-hamsa:before{content:\"\\f665\"}.fa-hand-holding:before{content:\"\\f4bd\"}.fa-hand-holding-heart:before{content:\"\\f4be\"}.fa-hand-holding-usd:before{content:\"\\f4c0\"}.fa-hand-lizard:before{content:\"\\f258\"}.fa-hand-middle-finger:before{content:\"\\f806\"}.fa-hand-paper:before{content:\"\\f256\"}.fa-hand-peace:before{content:\"\\f25b\"}.fa-hand-point-down:before{content:\"\\f0a7\"}.fa-hand-point-left:before{content:\"\\f0a5\"}.fa-hand-point-right:before{content:\"\\f0a4\"}.fa-hand-point-up:before{content:\"\\f0a6\"}.fa-hand-pointer:before{content:\"\\f25a\"}.fa-hand-rock:before{content:\"\\f255\"}.fa-hand-scissors:before{content:\"\\f257\"}.fa-hand-spock:before{content:\"\\f259\"}.fa-hands:before{content:\"\\f4c2\"}.fa-hands-helping:before{content:\"\\f4c4\"}.fa-handshake:before{content:\"\\f2b5\"}.fa-hanukiah:before{content:\"\\f6e6\"}.fa-hard-hat:before{content:\"\\f807\"}.fa-hashtag:before{content:\"\\f292\"}.fa-hat-cowboy:before{content:\"\\f8c0\"}.fa-hat-cowboy-side:before{content:\"\\f8c1\"}.fa-hat-wizard:before{content:\"\\f6e8\"}.fa-hdd:before{content:\"\\f0a0\"}.fa-heading:before{content:\"\\f1dc\"}.fa-headphones:before{content:\"\\f025\"}.fa-headphones-alt:before{content:\"\\f58f\"}.fa-headset:before{content:\"\\f590\"}.fa-heart:before{content:\"\\f004\"}.fa-heart-broken:before{content:\"\\f7a9\"}.fa-heartbeat:before{content:\"\\f21e\"}.fa-helicopter:before{content:\"\\f533\"}.fa-highlighter:before{content:\"\\f591\"}.fa-hiking:before{content:\"\\f6ec\"}.fa-hippo:before{content:\"\\f6ed\"}.fa-hips:before{content:\"\\f452\"}.fa-hire-a-helper:before{content:\"\\f3b0\"}.fa-history:before{content:\"\\f1da\"}.fa-hockey-puck:before{content:\"\\f453\"}.fa-holly-berry:before{content:\"\\f7aa\"}.fa-home:before{content:\"\\f015\"}.fa-hooli:before{content:\"\\f427\"}.fa-hornbill:before{content:\"\\f592\"}.fa-horse:before{content:\"\\f6f0\"}.fa-horse-head:before{content:\"\\f7ab\"}.fa-hospital:before{content:\"\\f0f8\"}.fa-hospital-alt:before{content:\"\\f47d\"}.fa-hospital-symbol:before{content:\"\\f47e\"}.fa-hot-tub:before{content:\"\\f593\"}.fa-hotdog:before{content:\"\\f80f\"}.fa-hotel:before{content:\"\\f594\"}.fa-hotjar:before{content:\"\\f3b1\"}.fa-hourglass:before{content:\"\\f254\"}.fa-hourglass-end:before{content:\"\\f253\"}.fa-hourglass-half:before{content:\"\\f252\"}.fa-hourglass-start:before{content:\"\\f251\"}.fa-house-damage:before{content:\"\\f6f1\"}.fa-houzz:before{content:\"\\f27c\"}.fa-hryvnia:before{content:\"\\f6f2\"}.fa-html5:before{content:\"\\f13b\"}.fa-hubspot:before{content:\"\\f3b2\"}.fa-i-cursor:before{content:\"\\f246\"}.fa-ice-cream:before{content:\"\\f810\"}.fa-icicles:before{content:\"\\f7ad\"}.fa-icons:before{content:\"\\f86d\"}.fa-id-badge:before{content:\"\\f2c1\"}.fa-id-card:before{content:\"\\f2c2\"}.fa-id-card-alt:before{content:\"\\f47f\"}.fa-ideal:before{content:\"\\f913\"}.fa-igloo:before{content:\"\\f7ae\"}.fa-image:before{content:\"\\f03e\"}.fa-images:before{content:\"\\f302\"}.fa-imdb:before{content:\"\\f2d8\"}.fa-inbox:before{content:\"\\f01c\"}.fa-indent:before{content:\"\\f03c\"}.fa-industry:before{content:\"\\f275\"}.fa-infinity:before{content:\"\\f534\"}.fa-info:before{content:\"\\f129\"}.fa-info-circle:before{content:\"\\f05a\"}.fa-instagram:before{content:\"\\f16d\"}.fa-intercom:before{content:\"\\f7af\"}.fa-internet-explorer:before{content:\"\\f26b\"}.fa-invision:before{content:\"\\f7b0\"}.fa-ioxhost:before{content:\"\\f208\"}.fa-italic:before{content:\"\\f033\"}.fa-itch-io:before{content:\"\\f83a\"}.fa-itunes:before{content:\"\\f3b4\"}.fa-itunes-note:before{content:\"\\f3b5\"}.fa-java:before{content:\"\\f4e4\"}.fa-jedi:before{content:\"\\f669\"}.fa-jedi-order:before{content:\"\\f50e\"}.fa-jenkins:before{content:\"\\f3b6\"}.fa-jira:before{content:\"\\f7b1\"}.fa-joget:before{content:\"\\f3b7\"}.fa-joint:before{content:\"\\f595\"}.fa-joomla:before{content:\"\\f1aa\"}.fa-journal-whills:before{content:\"\\f66a\"}.fa-js:before{content:\"\\f3b8\"}.fa-js-square:before{content:\"\\f3b9\"}.fa-jsfiddle:before{content:\"\\f1cc\"}.fa-kaaba:before{content:\"\\f66b\"}.fa-kaggle:before{content:\"\\f5fa\"}.fa-key:before{content:\"\\f084\"}.fa-keybase:before{content:\"\\f4f5\"}.fa-keyboard:before{content:\"\\f11c\"}.fa-keycdn:before{content:\"\\f3ba\"}.fa-khanda:before{content:\"\\f66d\"}.fa-kickstarter:before{content:\"\\f3bb\"}.fa-kickstarter-k:before{content:\"\\f3bc\"}.fa-kiss:before{content:\"\\f596\"}.fa-kiss-beam:before{content:\"\\f597\"}.fa-kiss-wink-heart:before{content:\"\\f598\"}.fa-kiwi-bird:before{content:\"\\f535\"}.fa-korvue:before{content:\"\\f42f\"}.fa-landmark:before{content:\"\\f66f\"}.fa-language:before{content:\"\\f1ab\"}.fa-laptop:before{content:\"\\f109\"}.fa-laptop-code:before{content:\"\\f5fc\"}.fa-laptop-medical:before{content:\"\\f812\"}.fa-laravel:before{content:\"\\f3bd\"}.fa-lastfm:before{content:\"\\f202\"}.fa-lastfm-square:before{content:\"\\f203\"}.fa-laugh:before{content:\"\\f599\"}.fa-laugh-beam:before{content:\"\\f59a\"}.fa-laugh-squint:before{content:\"\\f59b\"}.fa-laugh-wink:before{content:\"\\f59c\"}.fa-layer-group:before{content:\"\\f5fd\"}.fa-leaf:before{content:\"\\f06c\"}.fa-leanpub:before{content:\"\\f212\"}.fa-lemon:before{content:\"\\f094\"}.fa-less:before{content:\"\\f41d\"}.fa-less-than:before{content:\"\\f536\"}.fa-less-than-equal:before{content:\"\\f537\"}.fa-level-down-alt:before{content:\"\\f3be\"}.fa-level-up-alt:before{content:\"\\f3bf\"}.fa-life-ring:before{content:\"\\f1cd\"}.fa-lightbulb:before{content:\"\\f0eb\"}.fa-line:before{content:\"\\f3c0\"}.fa-link:before{content:\"\\f0c1\"}.fa-linkedin:before{content:\"\\f08c\"}.fa-linkedin-in:before{content:\"\\f0e1\"}.fa-linode:before{content:\"\\f2b8\"}.fa-linux:before{content:\"\\f17c\"}.fa-lira-sign:before{content:\"\\f195\"}.fa-list:before{content:\"\\f03a\"}.fa-list-alt:before{content:\"\\f022\"}.fa-list-ol:before{content:\"\\f0cb\"}.fa-list-ul:before{content:\"\\f0ca\"}.fa-location-arrow:before{content:\"\\f124\"}.fa-lock:before{content:\"\\f023\"}.fa-lock-open:before{content:\"\\f3c1\"}.fa-long-arrow-alt-down:before{content:\"\\f309\"}.fa-long-arrow-alt-left:before{content:\"\\f30a\"}.fa-long-arrow-alt-right:before{content:\"\\f30b\"}.fa-long-arrow-alt-up:before{content:\"\\f30c\"}.fa-low-vision:before{content:\"\\f2a8\"}.fa-luggage-cart:before{content:\"\\f59d\"}.fa-lyft:before{content:\"\\f3c3\"}.fa-magento:before{content:\"\\f3c4\"}.fa-magic:before{content:\"\\f0d0\"}.fa-magnet:before{content:\"\\f076\"}.fa-mail-bulk:before{content:\"\\f674\"}.fa-mailchimp:before{content:\"\\f59e\"}.fa-male:before{content:\"\\f183\"}.fa-mandalorian:before{content:\"\\f50f\"}.fa-map:before{content:\"\\f279\"}.fa-map-marked:before{content:\"\\f59f\"}.fa-map-marked-alt:before{content:\"\\f5a0\"}.fa-map-marker:before{content:\"\\f041\"}.fa-map-marker-alt:before{content:\"\\f3c5\"}.fa-map-pin:before{content:\"\\f276\"}.fa-map-signs:before{content:\"\\f277\"}.fa-markdown:before{content:\"\\f60f\"}.fa-marker:before{content:\"\\f5a1\"}.fa-mars:before{content:\"\\f222\"}.fa-mars-double:before{content:\"\\f227\"}.fa-mars-stroke:before{content:\"\\f229\"}.fa-mars-stroke-h:before{content:\"\\f22b\"}.fa-mars-stroke-v:before{content:\"\\f22a\"}.fa-mask:before{content:\"\\f6fa\"}.fa-mastodon:before{content:\"\\f4f6\"}.fa-maxcdn:before{content:\"\\f136\"}.fa-mdb:before{content:\"\\f8ca\"}.fa-medal:before{content:\"\\f5a2\"}.fa-medapps:before{content:\"\\f3c6\"}.fa-medium:before{content:\"\\f23a\"}.fa-medium-m:before{content:\"\\f3c7\"}.fa-medkit:before{content:\"\\f0fa\"}.fa-medrt:before{content:\"\\f3c8\"}.fa-meetup:before{content:\"\\f2e0\"}.fa-megaport:before{content:\"\\f5a3\"}.fa-meh:before{content:\"\\f11a\"}.fa-meh-blank:before{content:\"\\f5a4\"}.fa-meh-rolling-eyes:before{content:\"\\f5a5\"}.fa-memory:before{content:\"\\f538\"}.fa-mendeley:before{content:\"\\f7b3\"}.fa-menorah:before{content:\"\\f676\"}.fa-mercury:before{content:\"\\f223\"}.fa-meteor:before{content:\"\\f753\"}.fa-microblog:before{content:\"\\f91a\"}.fa-microchip:before{content:\"\\f2db\"}.fa-microphone:before{content:\"\\f130\"}.fa-microphone-alt:before{content:\"\\f3c9\"}.fa-microphone-alt-slash:before{content:\"\\f539\"}.fa-microphone-slash:before{content:\"\\f131\"}.fa-microscope:before{content:\"\\f610\"}.fa-microsoft:before{content:\"\\f3ca\"}.fa-minus:before{content:\"\\f068\"}.fa-minus-circle:before{content:\"\\f056\"}.fa-minus-square:before{content:\"\\f146\"}.fa-mitten:before{content:\"\\f7b5\"}.fa-mix:before{content:\"\\f3cb\"}.fa-mixcloud:before{content:\"\\f289\"}.fa-mizuni:before{content:\"\\f3cc\"}.fa-mobile:before{content:\"\\f10b\"}.fa-mobile-alt:before{content:\"\\f3cd\"}.fa-modx:before{content:\"\\f285\"}.fa-monero:before{content:\"\\f3d0\"}.fa-money-bill:before{content:\"\\f0d6\"}.fa-money-bill-alt:before{content:\"\\f3d1\"}.fa-money-bill-wave:before{content:\"\\f53a\"}.fa-money-bill-wave-alt:before{content:\"\\f53b\"}.fa-money-check:before{content:\"\\f53c\"}.fa-money-check-alt:before{content:\"\\f53d\"}.fa-monument:before{content:\"\\f5a6\"}.fa-moon:before{content:\"\\f186\"}.fa-mortar-pestle:before{content:\"\\f5a7\"}.fa-mosque:before{content:\"\\f678\"}.fa-motorcycle:before{content:\"\\f21c\"}.fa-mountain:before{content:\"\\f6fc\"}.fa-mouse:before{content:\"\\f8cc\"}.fa-mouse-pointer:before{content:\"\\f245\"}.fa-mug-hot:before{content:\"\\f7b6\"}.fa-music:before{content:\"\\f001\"}.fa-napster:before{content:\"\\f3d2\"}.fa-neos:before{content:\"\\f612\"}.fa-network-wired:before{content:\"\\f6ff\"}.fa-neuter:before{content:\"\\f22c\"}.fa-newspaper:before{content:\"\\f1ea\"}.fa-nimblr:before{content:\"\\f5a8\"}.fa-node:before{content:\"\\f419\"}.fa-node-js:before{content:\"\\f3d3\"}.fa-not-equal:before{content:\"\\f53e\"}.fa-notes-medical:before{content:\"\\f481\"}.fa-npm:before{content:\"\\f3d4\"}.fa-ns8:before{content:\"\\f3d5\"}.fa-nutritionix:before{content:\"\\f3d6\"}.fa-object-group:before{content:\"\\f247\"}.fa-object-ungroup:before{content:\"\\f248\"}.fa-odnoklassniki:before{content:\"\\f263\"}.fa-odnoklassniki-square:before{content:\"\\f264\"}.fa-oil-can:before{content:\"\\f613\"}.fa-old-republic:before{content:\"\\f510\"}.fa-om:before{content:\"\\f679\"}.fa-opencart:before{content:\"\\f23d\"}.fa-openid:before{content:\"\\f19b\"}.fa-opera:before{content:\"\\f26a\"}.fa-optin-monster:before{content:\"\\f23c\"}.fa-orcid:before{content:\"\\f8d2\"}.fa-osi:before{content:\"\\f41a\"}.fa-otter:before{content:\"\\f700\"}.fa-outdent:before{content:\"\\f03b\"}.fa-page4:before{content:\"\\f3d7\"}.fa-pagelines:before{content:\"\\f18c\"}.fa-pager:before{content:\"\\f815\"}.fa-paint-brush:before{content:\"\\f1fc\"}.fa-paint-roller:before{content:\"\\f5aa\"}.fa-palette:before{content:\"\\f53f\"}.fa-palfed:before{content:\"\\f3d8\"}.fa-pallet:before{content:\"\\f482\"}.fa-paper-plane:before{content:\"\\f1d8\"}.fa-paperclip:before{content:\"\\f0c6\"}.fa-parachute-box:before{content:\"\\f4cd\"}.fa-paragraph:before{content:\"\\f1dd\"}.fa-parking:before{content:\"\\f540\"}.fa-passport:before{content:\"\\f5ab\"}.fa-pastafarianism:before{content:\"\\f67b\"}.fa-paste:before{content:\"\\f0ea\"}.fa-patreon:before{content:\"\\f3d9\"}.fa-pause:before{content:\"\\f04c\"}.fa-pause-circle:before{content:\"\\f28b\"}.fa-paw:before{content:\"\\f1b0\"}.fa-paypal:before{content:\"\\f1ed\"}.fa-peace:before{content:\"\\f67c\"}.fa-pen:before{content:\"\\f304\"}.fa-pen-alt:before{content:\"\\f305\"}.fa-pen-fancy:before{content:\"\\f5ac\"}.fa-pen-nib:before{content:\"\\f5ad\"}.fa-pen-square:before{content:\"\\f14b\"}.fa-pencil-alt:before{content:\"\\f303\"}.fa-pencil-ruler:before{content:\"\\f5ae\"}.fa-penny-arcade:before{content:\"\\f704\"}.fa-people-carry:before{content:\"\\f4ce\"}.fa-pepper-hot:before{content:\"\\f816\"}.fa-percent:before{content:\"\\f295\"}.fa-percentage:before{content:\"\\f541\"}.fa-periscope:before{content:\"\\f3da\"}.fa-person-booth:before{content:\"\\f756\"}.fa-phabricator:before{content:\"\\f3db\"}.fa-phoenix-framework:before{content:\"\\f3dc\"}.fa-phoenix-squadron:before{content:\"\\f511\"}.fa-phone:before{content:\"\\f095\"}.fa-phone-alt:before{content:\"\\f879\"}.fa-phone-slash:before{content:\"\\f3dd\"}.fa-phone-square:before{content:\"\\f098\"}.fa-phone-square-alt:before{content:\"\\f87b\"}.fa-phone-volume:before{content:\"\\f2a0\"}.fa-photo-video:before{content:\"\\f87c\"}.fa-php:before{content:\"\\f457\"}.fa-pied-piper:before{content:\"\\f2ae\"}.fa-pied-piper-alt:before{content:\"\\f1a8\"}.fa-pied-piper-hat:before{content:\"\\f4e5\"}.fa-pied-piper-pp:before{content:\"\\f1a7\"}.fa-pied-piper-square:before{content:\"\\f91e\"}.fa-piggy-bank:before{content:\"\\f4d3\"}.fa-pills:before{content:\"\\f484\"}.fa-pinterest:before{content:\"\\f0d2\"}.fa-pinterest-p:before{content:\"\\f231\"}.fa-pinterest-square:before{content:\"\\f0d3\"}.fa-pizza-slice:before{content:\"\\f818\"}.fa-place-of-worship:before{content:\"\\f67f\"}.fa-plane:before{content:\"\\f072\"}.fa-plane-arrival:before{content:\"\\f5af\"}.fa-plane-departure:before{content:\"\\f5b0\"}.fa-play:before{content:\"\\f04b\"}.fa-play-circle:before{content:\"\\f144\"}.fa-playstation:before{content:\"\\f3df\"}.fa-plug:before{content:\"\\f1e6\"}.fa-plus:before{content:\"\\f067\"}.fa-plus-circle:before{content:\"\\f055\"}.fa-plus-square:before{content:\"\\f0fe\"}.fa-podcast:before{content:\"\\f2ce\"}.fa-poll:before{content:\"\\f681\"}.fa-poll-h:before{content:\"\\f682\"}.fa-poo:before{content:\"\\f2fe\"}.fa-poo-storm:before{content:\"\\f75a\"}.fa-poop:before{content:\"\\f619\"}.fa-portrait:before{content:\"\\f3e0\"}.fa-pound-sign:before{content:\"\\f154\"}.fa-power-off:before{content:\"\\f011\"}.fa-pray:before{content:\"\\f683\"}.fa-praying-hands:before{content:\"\\f684\"}.fa-prescription:before{content:\"\\f5b1\"}.fa-prescription-bottle:before{content:\"\\f485\"}.fa-prescription-bottle-alt:before{content:\"\\f486\"}.fa-print:before{content:\"\\f02f\"}.fa-procedures:before{content:\"\\f487\"}.fa-product-hunt:before{content:\"\\f288\"}.fa-project-diagram:before{content:\"\\f542\"}.fa-pushed:before{content:\"\\f3e1\"}.fa-puzzle-piece:before{content:\"\\f12e\"}.fa-python:before{content:\"\\f3e2\"}.fa-qq:before{content:\"\\f1d6\"}.fa-qrcode:before{content:\"\\f029\"}.fa-question:before{content:\"\\f128\"}.fa-question-circle:before{content:\"\\f059\"}.fa-quidditch:before{content:\"\\f458\"}.fa-quinscape:before{content:\"\\f459\"}.fa-quora:before{content:\"\\f2c4\"}.fa-quote-left:before{content:\"\\f10d\"}.fa-quote-right:before{content:\"\\f10e\"}.fa-quran:before{content:\"\\f687\"}.fa-r-project:before{content:\"\\f4f7\"}.fa-radiation:before{content:\"\\f7b9\"}.fa-radiation-alt:before{content:\"\\f7ba\"}.fa-rainbow:before{content:\"\\f75b\"}.fa-random:before{content:\"\\f074\"}.fa-raspberry-pi:before{content:\"\\f7bb\"}.fa-ravelry:before{content:\"\\f2d9\"}.fa-react:before{content:\"\\f41b\"}.fa-reacteurope:before{content:\"\\f75d\"}.fa-readme:before{content:\"\\f4d5\"}.fa-rebel:before{content:\"\\f1d0\"}.fa-receipt:before{content:\"\\f543\"}.fa-record-vinyl:before{content:\"\\f8d9\"}.fa-recycle:before{content:\"\\f1b8\"}.fa-red-river:before{content:\"\\f3e3\"}.fa-reddit:before{content:\"\\f1a1\"}.fa-reddit-alien:before{content:\"\\f281\"}.fa-reddit-square:before{content:\"\\f1a2\"}.fa-redhat:before{content:\"\\f7bc\"}.fa-redo:before{content:\"\\f01e\"}.fa-redo-alt:before{content:\"\\f2f9\"}.fa-registered:before{content:\"\\f25d\"}.fa-remove-format:before{content:\"\\f87d\"}.fa-renren:before{content:\"\\f18b\"}.fa-reply:before{content:\"\\f3e5\"}.fa-reply-all:before{content:\"\\f122\"}.fa-replyd:before{content:\"\\f3e6\"}.fa-republican:before{content:\"\\f75e\"}.fa-researchgate:before{content:\"\\f4f8\"}.fa-resolving:before{content:\"\\f3e7\"}.fa-restroom:before{content:\"\\f7bd\"}.fa-retweet:before{content:\"\\f079\"}.fa-rev:before{content:\"\\f5b2\"}.fa-ribbon:before{content:\"\\f4d6\"}.fa-ring:before{content:\"\\f70b\"}.fa-road:before{content:\"\\f018\"}.fa-robot:before{content:\"\\f544\"}.fa-rocket:before{content:\"\\f135\"}.fa-rocketchat:before{content:\"\\f3e8\"}.fa-rockrms:before{content:\"\\f3e9\"}.fa-route:before{content:\"\\f4d7\"}.fa-rss:before{content:\"\\f09e\"}.fa-rss-square:before{content:\"\\f143\"}.fa-ruble-sign:before{content:\"\\f158\"}.fa-ruler:before{content:\"\\f545\"}.fa-ruler-combined:before{content:\"\\f546\"}.fa-ruler-horizontal:before{content:\"\\f547\"}.fa-ruler-vertical:before{content:\"\\f548\"}.fa-running:before{content:\"\\f70c\"}.fa-rupee-sign:before{content:\"\\f156\"}.fa-sad-cry:before{content:\"\\f5b3\"}.fa-sad-tear:before{content:\"\\f5b4\"}.fa-safari:before{content:\"\\f267\"}.fa-salesforce:before{content:\"\\f83b\"}.fa-sass:before{content:\"\\f41e\"}.fa-satellite:before{content:\"\\f7bf\"}.fa-satellite-dish:before{content:\"\\f7c0\"}.fa-save:before{content:\"\\f0c7\"}.fa-schlix:before{content:\"\\f3ea\"}.fa-school:before{content:\"\\f549\"}.fa-screwdriver:before{content:\"\\f54a\"}.fa-scribd:before{content:\"\\f28a\"}.fa-scroll:before{content:\"\\f70e\"}.fa-sd-card:before{content:\"\\f7c2\"}.fa-search:before{content:\"\\f002\"}.fa-search-dollar:before{content:\"\\f688\"}.fa-search-location:before{content:\"\\f689\"}.fa-search-minus:before{content:\"\\f010\"}.fa-search-plus:before{content:\"\\f00e\"}.fa-searchengin:before{content:\"\\f3eb\"}.fa-seedling:before{content:\"\\f4d8\"}.fa-sellcast:before{content:\"\\f2da\"}.fa-sellsy:before{content:\"\\f213\"}.fa-server:before{content:\"\\f233\"}.fa-servicestack:before{content:\"\\f3ec\"}.fa-shapes:before{content:\"\\f61f\"}.fa-share:before{content:\"\\f064\"}.fa-share-alt:before{content:\"\\f1e0\"}.fa-share-alt-square:before{content:\"\\f1e1\"}.fa-share-square:before{content:\"\\f14d\"}.fa-shekel-sign:before{content:\"\\f20b\"}.fa-shield-alt:before{content:\"\\f3ed\"}.fa-ship:before{content:\"\\f21a\"}.fa-shipping-fast:before{content:\"\\f48b\"}.fa-shirtsinbulk:before{content:\"\\f214\"}.fa-shoe-prints:before{content:\"\\f54b\"}.fa-shopping-bag:before{content:\"\\f290\"}.fa-shopping-basket:before{content:\"\\f291\"}.fa-shopping-cart:before{content:\"\\f07a\"}.fa-shopware:before{content:\"\\f5b5\"}.fa-shower:before{content:\"\\f2cc\"}.fa-shuttle-van:before{content:\"\\f5b6\"}.fa-sign:before{content:\"\\f4d9\"}.fa-sign-in-alt:before{content:\"\\f2f6\"}.fa-sign-language:before{content:\"\\f2a7\"}.fa-sign-out-alt:before{content:\"\\f2f5\"}.fa-signal:before{content:\"\\f012\"}.fa-signature:before{content:\"\\f5b7\"}.fa-sim-card:before{content:\"\\f7c4\"}.fa-simplybuilt:before{content:\"\\f215\"}.fa-sistrix:before{content:\"\\f3ee\"}.fa-sitemap:before{content:\"\\f0e8\"}.fa-sith:before{content:\"\\f512\"}.fa-skating:before{content:\"\\f7c5\"}.fa-sketch:before{content:\"\\f7c6\"}.fa-skiing:before{content:\"\\f7c9\"}.fa-skiing-nordic:before{content:\"\\f7ca\"}.fa-skull:before{content:\"\\f54c\"}.fa-skull-crossbones:before{content:\"\\f714\"}.fa-skyatlas:before{content:\"\\f216\"}.fa-skype:before{content:\"\\f17e\"}.fa-slack:before{content:\"\\f198\"}.fa-slack-hash:before{content:\"\\f3ef\"}.fa-slash:before{content:\"\\f715\"}.fa-sleigh:before{content:\"\\f7cc\"}.fa-sliders-h:before{content:\"\\f1de\"}.fa-slideshare:before{content:\"\\f1e7\"}.fa-smile:before{content:\"\\f118\"}.fa-smile-beam:before{content:\"\\f5b8\"}.fa-smile-wink:before{content:\"\\f4da\"}.fa-smog:before{content:\"\\f75f\"}.fa-smoking:before{content:\"\\f48d\"}.fa-smoking-ban:before{content:\"\\f54d\"}.fa-sms:before{content:\"\\f7cd\"}.fa-snapchat:before{content:\"\\f2ab\"}.fa-snapchat-ghost:before{content:\"\\f2ac\"}.fa-snapchat-square:before{content:\"\\f2ad\"}.fa-snowboarding:before{content:\"\\f7ce\"}.fa-snowflake:before{content:\"\\f2dc\"}.fa-snowman:before{content:\"\\f7d0\"}.fa-snowplow:before{content:\"\\f7d2\"}.fa-socks:before{content:\"\\f696\"}.fa-solar-panel:before{content:\"\\f5ba\"}.fa-sort:before{content:\"\\f0dc\"}.fa-sort-alpha-down:before{content:\"\\f15d\"}.fa-sort-alpha-down-alt:before{content:\"\\f881\"}.fa-sort-alpha-up:before{content:\"\\f15e\"}.fa-sort-alpha-up-alt:before{content:\"\\f882\"}.fa-sort-amount-down:before{content:\"\\f160\"}.fa-sort-amount-down-alt:before{content:\"\\f884\"}.fa-sort-amount-up:before{content:\"\\f161\"}.fa-sort-amount-up-alt:before{content:\"\\f885\"}.fa-sort-down:before{content:\"\\f0dd\"}.fa-sort-numeric-down:before{content:\"\\f162\"}.fa-sort-numeric-down-alt:before{content:\"\\f886\"}.fa-sort-numeric-up:before{content:\"\\f163\"}.fa-sort-numeric-up-alt:before{content:\"\\f887\"}.fa-sort-up:before{content:\"\\f0de\"}.fa-soundcloud:before{content:\"\\f1be\"}.fa-sourcetree:before{content:\"\\f7d3\"}.fa-spa:before{content:\"\\f5bb\"}.fa-space-shuttle:before{content:\"\\f197\"}.fa-speakap:before{content:\"\\f3f3\"}.fa-speaker-deck:before{content:\"\\f83c\"}.fa-spell-check:before{content:\"\\f891\"}.fa-spider:before{content:\"\\f717\"}.fa-spinner:before{content:\"\\f110\"}.fa-splotch:before{content:\"\\f5bc\"}.fa-spotify:before{content:\"\\f1bc\"}.fa-spray-can:before{content:\"\\f5bd\"}.fa-square:before{content:\"\\f0c8\"}.fa-square-full:before{content:\"\\f45c\"}.fa-square-root-alt:before{content:\"\\f698\"}.fa-squarespace:before{content:\"\\f5be\"}.fa-stack-exchange:before{content:\"\\f18d\"}.fa-stack-overflow:before{content:\"\\f16c\"}.fa-stackpath:before{content:\"\\f842\"}.fa-stamp:before{content:\"\\f5bf\"}.fa-star:before{content:\"\\f005\"}.fa-star-and-crescent:before{content:\"\\f699\"}.fa-star-half:before{content:\"\\f089\"}.fa-star-half-alt:before{content:\"\\f5c0\"}.fa-star-of-david:before{content:\"\\f69a\"}.fa-star-of-life:before{content:\"\\f621\"}.fa-staylinked:before{content:\"\\f3f5\"}.fa-steam:before{content:\"\\f1b6\"}.fa-steam-square:before{content:\"\\f1b7\"}.fa-steam-symbol:before{content:\"\\f3f6\"}.fa-step-backward:before{content:\"\\f048\"}.fa-step-forward:before{content:\"\\f051\"}.fa-stethoscope:before{content:\"\\f0f1\"}.fa-sticker-mule:before{content:\"\\f3f7\"}.fa-sticky-note:before{content:\"\\f249\"}.fa-stop:before{content:\"\\f04d\"}.fa-stop-circle:before{content:\"\\f28d\"}.fa-stopwatch:before{content:\"\\f2f2\"}.fa-store:before{content:\"\\f54e\"}.fa-store-alt:before{content:\"\\f54f\"}.fa-strava:before{content:\"\\f428\"}.fa-stream:before{content:\"\\f550\"}.fa-street-view:before{content:\"\\f21d\"}.fa-strikethrough:before{content:\"\\f0cc\"}.fa-stripe:before{content:\"\\f429\"}.fa-stripe-s:before{content:\"\\f42a\"}.fa-stroopwafel:before{content:\"\\f551\"}.fa-studiovinari:before{content:\"\\f3f8\"}.fa-stumbleupon:before{content:\"\\f1a4\"}.fa-stumbleupon-circle:before{content:\"\\f1a3\"}.fa-subscript:before{content:\"\\f12c\"}.fa-subway:before{content:\"\\f239\"}.fa-suitcase:before{content:\"\\f0f2\"}.fa-suitcase-rolling:before{content:\"\\f5c1\"}.fa-sun:before{content:\"\\f185\"}.fa-superpowers:before{content:\"\\f2dd\"}.fa-superscript:before{content:\"\\f12b\"}.fa-supple:before{content:\"\\f3f9\"}.fa-surprise:before{content:\"\\f5c2\"}.fa-suse:before{content:\"\\f7d6\"}.fa-swatchbook:before{content:\"\\f5c3\"}.fa-swift:before{content:\"\\f8e1\"}.fa-swimmer:before{content:\"\\f5c4\"}.fa-swimming-pool:before{content:\"\\f5c5\"}.fa-symfony:before{content:\"\\f83d\"}.fa-synagogue:before{content:\"\\f69b\"}.fa-sync:before{content:\"\\f021\"}.fa-sync-alt:before{content:\"\\f2f1\"}.fa-syringe:before{content:\"\\f48e\"}.fa-table:before{content:\"\\f0ce\"}.fa-table-tennis:before{content:\"\\f45d\"}.fa-tablet:before{content:\"\\f10a\"}.fa-tablet-alt:before{content:\"\\f3fa\"}.fa-tablets:before{content:\"\\f490\"}.fa-tachometer-alt:before{content:\"\\f3fd\"}.fa-tag:before{content:\"\\f02b\"}.fa-tags:before{content:\"\\f02c\"}.fa-tape:before{content:\"\\f4db\"}.fa-tasks:before{content:\"\\f0ae\"}.fa-taxi:before{content:\"\\f1ba\"}.fa-teamspeak:before{content:\"\\f4f9\"}.fa-teeth:before{content:\"\\f62e\"}.fa-teeth-open:before{content:\"\\f62f\"}.fa-telegram:before{content:\"\\f2c6\"}.fa-telegram-plane:before{content:\"\\f3fe\"}.fa-temperature-high:before{content:\"\\f769\"}.fa-temperature-low:before{content:\"\\f76b\"}.fa-tencent-weibo:before{content:\"\\f1d5\"}.fa-tenge:before{content:\"\\f7d7\"}.fa-terminal:before{content:\"\\f120\"}.fa-text-height:before{content:\"\\f034\"}.fa-text-width:before{content:\"\\f035\"}.fa-th:before{content:\"\\f00a\"}.fa-th-large:before{content:\"\\f009\"}.fa-th-list:before{content:\"\\f00b\"}.fa-the-red-yeti:before{content:\"\\f69d\"}.fa-theater-masks:before{content:\"\\f630\"}.fa-themeco:before{content:\"\\f5c6\"}.fa-themeisle:before{content:\"\\f2b2\"}.fa-thermometer:before{content:\"\\f491\"}.fa-thermometer-empty:before{content:\"\\f2cb\"}.fa-thermometer-full:before{content:\"\\f2c7\"}.fa-thermometer-half:before{content:\"\\f2c9\"}.fa-thermometer-quarter:before{content:\"\\f2ca\"}.fa-thermometer-three-quarters:before{content:\"\\f2c8\"}.fa-think-peaks:before{content:\"\\f731\"}.fa-thumbs-down:before{content:\"\\f165\"}.fa-thumbs-up:before{content:\"\\f164\"}.fa-thumbtack:before{content:\"\\f08d\"}.fa-ticket-alt:before{content:\"\\f3ff\"}.fa-times:before{content:\"\\f00d\"}.fa-times-circle:before{content:\"\\f057\"}.fa-tint:before{content:\"\\f043\"}.fa-tint-slash:before{content:\"\\f5c7\"}.fa-tired:before{content:\"\\f5c8\"}.fa-toggle-off:before{content:\"\\f204\"}.fa-toggle-on:before{content:\"\\f205\"}.fa-toilet:before{content:\"\\f7d8\"}.fa-toilet-paper:before{content:\"\\f71e\"}.fa-toolbox:before{content:\"\\f552\"}.fa-tools:before{content:\"\\f7d9\"}.fa-tooth:before{content:\"\\f5c9\"}.fa-torah:before{content:\"\\f6a0\"}.fa-torii-gate:before{content:\"\\f6a1\"}.fa-tractor:before{content:\"\\f722\"}.fa-trade-federation:before{content:\"\\f513\"}.fa-trademark:before{content:\"\\f25c\"}.fa-traffic-light:before{content:\"\\f637\"}.fa-trailer:before{content:\"\\f941\"}.fa-train:before{content:\"\\f238\"}.fa-tram:before{content:\"\\f7da\"}.fa-transgender:before{content:\"\\f224\"}.fa-transgender-alt:before{content:\"\\f225\"}.fa-trash:before{content:\"\\f1f8\"}.fa-trash-alt:before{content:\"\\f2ed\"}.fa-trash-restore:before{content:\"\\f829\"}.fa-trash-restore-alt:before{content:\"\\f82a\"}.fa-tree:before{content:\"\\f1bb\"}.fa-trello:before{content:\"\\f181\"}.fa-tripadvisor:before{content:\"\\f262\"}.fa-trophy:before{content:\"\\f091\"}.fa-truck:before{content:\"\\f0d1\"}.fa-truck-loading:before{content:\"\\f4de\"}.fa-truck-monster:before{content:\"\\f63b\"}.fa-truck-moving:before{content:\"\\f4df\"}.fa-truck-pickup:before{content:\"\\f63c\"}.fa-tshirt:before{content:\"\\f553\"}.fa-tty:before{content:\"\\f1e4\"}.fa-tumblr:before{content:\"\\f173\"}.fa-tumblr-square:before{content:\"\\f174\"}.fa-tv:before{content:\"\\f26c\"}.fa-twitch:before{content:\"\\f1e8\"}.fa-twitter:before{content:\"\\f099\"}.fa-twitter-square:before{content:\"\\f081\"}.fa-typo3:before{content:\"\\f42b\"}.fa-uber:before{content:\"\\f402\"}.fa-ubuntu:before{content:\"\\f7df\"}.fa-uikit:before{content:\"\\f403\"}.fa-umbraco:before{content:\"\\f8e8\"}.fa-umbrella:before{content:\"\\f0e9\"}.fa-umbrella-beach:before{content:\"\\f5ca\"}.fa-underline:before{content:\"\\f0cd\"}.fa-undo:before{content:\"\\f0e2\"}.fa-undo-alt:before{content:\"\\f2ea\"}.fa-uniregistry:before{content:\"\\f404\"}.fa-unity:before{content:\"\\f949\"}.fa-universal-access:before{content:\"\\f29a\"}.fa-university:before{content:\"\\f19c\"}.fa-unlink:before{content:\"\\f127\"}.fa-unlock:before{content:\"\\f09c\"}.fa-unlock-alt:before{content:\"\\f13e\"}.fa-untappd:before{content:\"\\f405\"}.fa-upload:before{content:\"\\f093\"}.fa-ups:before{content:\"\\f7e0\"}.fa-usb:before{content:\"\\f287\"}.fa-user:before{content:\"\\f007\"}.fa-user-alt:before{content:\"\\f406\"}.fa-user-alt-slash:before{content:\"\\f4fa\"}.fa-user-astronaut:before{content:\"\\f4fb\"}.fa-user-check:before{content:\"\\f4fc\"}.fa-user-circle:before{content:\"\\f2bd\"}.fa-user-clock:before{content:\"\\f4fd\"}.fa-user-cog:before{content:\"\\f4fe\"}.fa-user-edit:before{content:\"\\f4ff\"}.fa-user-friends:before{content:\"\\f500\"}.fa-user-graduate:before{content:\"\\f501\"}.fa-user-injured:before{content:\"\\f728\"}.fa-user-lock:before{content:\"\\f502\"}.fa-user-md:before{content:\"\\f0f0\"}.fa-user-minus:before{content:\"\\f503\"}.fa-user-ninja:before{content:\"\\f504\"}.fa-user-nurse:before{content:\"\\f82f\"}.fa-user-plus:before{content:\"\\f234\"}.fa-user-secret:before{content:\"\\f21b\"}.fa-user-shield:before{content:\"\\f505\"}.fa-user-slash:before{content:\"\\f506\"}.fa-user-tag:before{content:\"\\f507\"}.fa-user-tie:before{content:\"\\f508\"}.fa-user-times:before{content:\"\\f235\"}.fa-users:before{content:\"\\f0c0\"}.fa-users-cog:before{content:\"\\f509\"}.fa-usps:before{content:\"\\f7e1\"}.fa-ussunnah:before{content:\"\\f407\"}.fa-utensil-spoon:before{content:\"\\f2e5\"}.fa-utensils:before{content:\"\\f2e7\"}.fa-vaadin:before{content:\"\\f408\"}.fa-vector-square:before{content:\"\\f5cb\"}.fa-venus:before{content:\"\\f221\"}.fa-venus-double:before{content:\"\\f226\"}.fa-venus-mars:before{content:\"\\f228\"}.fa-viacoin:before{content:\"\\f237\"}.fa-viadeo:before{content:\"\\f2a9\"}.fa-viadeo-square:before{content:\"\\f2aa\"}.fa-vial:before{content:\"\\f492\"}.fa-vials:before{content:\"\\f493\"}.fa-viber:before{content:\"\\f409\"}.fa-video:before{content:\"\\f03d\"}.fa-video-slash:before{content:\"\\f4e2\"}.fa-vihara:before{content:\"\\f6a7\"}.fa-vimeo:before{content:\"\\f40a\"}.fa-vimeo-square:before{content:\"\\f194\"}.fa-vimeo-v:before{content:\"\\f27d\"}.fa-vine:before{content:\"\\f1ca\"}.fa-vk:before{content:\"\\f189\"}.fa-vnv:before{content:\"\\f40b\"}.fa-voicemail:before{content:\"\\f897\"}.fa-volleyball-ball:before{content:\"\\f45f\"}.fa-volume-down:before{content:\"\\f027\"}.fa-volume-mute:before{content:\"\\f6a9\"}.fa-volume-off:before{content:\"\\f026\"}.fa-volume-up:before{content:\"\\f028\"}.fa-vote-yea:before{content:\"\\f772\"}.fa-vr-cardboard:before{content:\"\\f729\"}.fa-vuejs:before{content:\"\\f41f\"}.fa-walking:before{content:\"\\f554\"}.fa-wallet:before{content:\"\\f555\"}.fa-warehouse:before{content:\"\\f494\"}.fa-water:before{content:\"\\f773\"}.fa-wave-square:before{content:\"\\f83e\"}.fa-waze:before{content:\"\\f83f\"}.fa-weebly:before{content:\"\\f5cc\"}.fa-weibo:before{content:\"\\f18a\"}.fa-weight:before{content:\"\\f496\"}.fa-weight-hanging:before{content:\"\\f5cd\"}.fa-weixin:before{content:\"\\f1d7\"}.fa-whatsapp:before{content:\"\\f232\"}.fa-whatsapp-square:before{content:\"\\f40c\"}.fa-wheelchair:before{content:\"\\f193\"}.fa-whmcs:before{content:\"\\f40d\"}.fa-wifi:before{content:\"\\f1eb\"}.fa-wikipedia-w:before{content:\"\\f266\"}.fa-wind:before{content:\"\\f72e\"}.fa-window-close:before{content:\"\\f410\"}.fa-window-maximize:before{content:\"\\f2d0\"}.fa-window-minimize:before{content:\"\\f2d1\"}.fa-window-restore:before{content:\"\\f2d2\"}.fa-windows:before{content:\"\\f17a\"}.fa-wine-bottle:before{content:\"\\f72f\"}.fa-wine-glass:before{content:\"\\f4e3\"}.fa-wine-glass-alt:before{content:\"\\f5ce\"}.fa-wix:before{content:\"\\f5cf\"}.fa-wizards-of-the-coast:before{content:\"\\f730\"}.fa-wolf-pack-battalion:before{content:\"\\f514\"}.fa-won-sign:before{content:\"\\f159\"}.fa-wordpress:before{content:\"\\f19a\"}.fa-wordpress-simple:before{content:\"\\f411\"}.fa-wpbeginner:before{content:\"\\f297\"}.fa-wpexplorer:before{content:\"\\f2de\"}.fa-wpforms:before{content:\"\\f298\"}.fa-wpressr:before{content:\"\\f3e4\"}.fa-wrench:before{content:\"\\f0ad\"}.fa-x-ray:before{content:\"\\f497\"}.fa-xbox:before{content:\"\\f412\"}.fa-xing:before{content:\"\\f168\"}.fa-xing-square:before{content:\"\\f169\"}.fa-y-combinator:before{content:\"\\f23b\"}.fa-yahoo:before{content:\"\\f19e\"}.fa-yammer:before{content:\"\\f840\"}.fa-yandex:before{content:\"\\f413\"}.fa-yandex-international:before{content:\"\\f414\"}.fa-yarn:before{content:\"\\f7e3\"}.fa-yelp:before{content:\"\\f1e9\"}.fa-yen-sign:before{content:\"\\f157\"}.fa-yin-yang:before{content:\"\\f6ad\"}.fa-yoast:before{content:\"\\f2b1\"}.fa-youtube:before{content:\"\\f167\"}.fa-youtube-square:before{content:\"\\f431\"}.fa-zhihu:before{content:\"\\f63f\"}.sr-only{border:0;clip:rect(0,0,0,0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}.sr-only-focusable:active,.sr-only-focusable:focus{clip:auto;height:auto;margin:0;overflow:visible;position:static;width:auto}@font-face{font-family:\"Font Awesome 5 Brands\";font-style:normal;font-weight:normal;font-display:auto;src:url(../webfonts/fa-brands-400.eot);src:url(../webfonts/fa-brands-400.eot?#iefix) format(\"embedded-opentype\"),url(../webfonts/fa-brands-400.woff2) format(\"woff2\"),url(../webfonts/fa-brands-400.woff) format(\"woff\"),url(../webfonts/fa-brands-400.ttf) format(\"truetype\"),url(../webfonts/fa-brands-400.svg#fontawesome) format(\"svg\")}.fab{font-family:\"Font Awesome 5 Brands\"}@font-face{font-family:\"Font Awesome 5 Free\";font-style:normal;font-weight:400;font-display:auto;src:url(../webfonts/fa-regular-400.eot);src:url(../webfonts/fa-regular-400.eot?#iefix) format(\"embedded-opentype\"),url(../webfonts/fa-regular-400.woff2) format(\"woff2\"),url(../webfonts/fa-regular-400.woff) format(\"woff\"),url(../webfonts/fa-regular-400.ttf) format(\"truetype\"),url(../webfonts/fa-regular-400.svg#fontawesome) format(\"svg\")}.far{font-weight:400}@font-face{font-family:\"Font Awesome 5 Free\";font-style:normal;font-weight:900;font-display:auto;src:url(../webfonts/fa-solid-900.eot);src:url(../webfonts/fa-solid-900.eot?#iefix) format(\"embedded-opentype\"),url(../webfonts/fa-solid-900.woff2) format(\"woff2\"),url(../webfonts/fa-solid-900.woff) format(\"woff\"),url(../webfonts/fa-solid-900.ttf) format(\"truetype\"),url(../webfonts/fa-solid-900.svg#fontawesome) format(\"svg\")}.fa,.far,.fas{font-family:\"Font Awesome 5 Free\"}.fa,.fas{font-weight:900}"]}]);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!../../front/node_modules/tippy.js/dist/tippy.css":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-1!./node_modules/postcss-loader/src??ref--6-2!/Users/gregoriogalante/Workspace/matilda/matilda-core/front/node_modules/tippy.js/dist/tippy.css ***!
  \****************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../test/dummy/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Module
exports.push([module.i, ".tippy-tooltip[data-animation=fade][data-state=hidden]{opacity:0}.tippy-iOS{cursor:pointer!important;-webkit-tap-highlight-color:transparent}.tippy-popper{pointer-events:none;max-width:calc(100vw - 10px);transition-timing-function:cubic-bezier(.165,.84,.44,1);transition-property:transform}.tippy-tooltip{position:relative;color:#fff;border-radius:4px;font-size:14px;line-height:1.4;background-color:#333;transition-property:visibility,opacity,transform;outline:0}.tippy-tooltip[data-placement^=top]>.tippy-arrow{border-width:8px 8px 0;border-top-color:#333;margin:0 3px;transform-origin:50% 0;bottom:-7px}.tippy-tooltip[data-placement^=bottom]>.tippy-arrow{border-width:0 8px 8px;border-bottom-color:#333;margin:0 3px;transform-origin:50% 7px;top:-7px}.tippy-tooltip[data-placement^=left]>.tippy-arrow{border-width:8px 0 8px 8px;border-left-color:#333;margin:3px 0;transform-origin:0 50%;right:-7px}.tippy-tooltip[data-placement^=right]>.tippy-arrow{border-width:8px 8px 8px 0;border-right-color:#333;margin:3px 0;transform-origin:7px 50%;left:-7px}.tippy-tooltip[data-interactive][data-state=visible]{pointer-events:auto}.tippy-tooltip[data-inertia][data-state=visible]{transition-timing-function:cubic-bezier(.54,1.5,.38,1.11)}.tippy-arrow{position:absolute;border-color:transparent;border-style:solid}.tippy-content{padding:5px 9px}", "",{"version":3,"sources":["tippy.css"],"names":[],"mappings":"AAAA,uDAAuD,SAAS,CAAC,WAAW,wBAAwB,CAAC,uCAAuC,CAAC,cAAc,mBAAmB,CAAC,4BAA4B,CAAC,uDAAuD,CAAC,6BAA6B,CAAC,eAAe,iBAAiB,CAAC,UAAU,CAAC,iBAAiB,CAAC,cAAc,CAAC,eAAe,CAAC,qBAAqB,CAAC,gDAAgD,CAAC,SAAS,CAAC,iDAAiD,sBAAsB,CAAC,qBAAqB,CAAC,YAAY,CAAC,sBAAsB,CAAC,WAAW,CAAC,oDAAoD,sBAAsB,CAAC,wBAAwB,CAAC,YAAY,CAAC,wBAAwB,CAAC,QAAQ,CAAC,kDAAkD,0BAA0B,CAAC,sBAAsB,CAAC,YAAY,CAAC,sBAAsB,CAAC,UAAU,CAAC,mDAAmD,0BAA0B,CAAC,uBAAuB,CAAC,YAAY,CAAC,wBAAwB,CAAC,SAAS,CAAC,qDAAqD,mBAAmB,CAAC,iDAAiD,yDAAyD,CAAC,aAAa,iBAAiB,CAAC,wBAAwB,CAAC,kBAAkB,CAAC,eAAe,eAAe","file":"tippy.css","sourcesContent":[".tippy-tooltip[data-animation=fade][data-state=hidden]{opacity:0}.tippy-iOS{cursor:pointer!important;-webkit-tap-highlight-color:transparent}.tippy-popper{pointer-events:none;max-width:calc(100vw - 10px);transition-timing-function:cubic-bezier(.165,.84,.44,1);transition-property:transform}.tippy-tooltip{position:relative;color:#fff;border-radius:4px;font-size:14px;line-height:1.4;background-color:#333;transition-property:visibility,opacity,transform;outline:0}.tippy-tooltip[data-placement^=top]>.tippy-arrow{border-width:8px 8px 0;border-top-color:#333;margin:0 3px;transform-origin:50% 0;bottom:-7px}.tippy-tooltip[data-placement^=bottom]>.tippy-arrow{border-width:0 8px 8px;border-bottom-color:#333;margin:0 3px;transform-origin:50% 7px;top:-7px}.tippy-tooltip[data-placement^=left]>.tippy-arrow{border-width:8px 0 8px 8px;border-left-color:#333;margin:3px 0;transform-origin:0 50%;right:-7px}.tippy-tooltip[data-placement^=right]>.tippy-arrow{border-width:8px 8px 8px 0;border-right-color:#333;margin:3px 0;transform-origin:7px 50%;left:-7px}.tippy-tooltip[data-interactive][data-state=visible]{pointer-events:auto}.tippy-tooltip[data-inertia][data-state=visible]{transition-timing-function:cubic-bezier(.54,1.5,.38,1.11)}.tippy-arrow{position:absolute;border-color:transparent;border-style:solid}.tippy-content{padding:5px 9px}"]}]);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!../../front/style/main.scss":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--7-1!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!/Users/gregoriogalante/Workspace/matilda/matilda-core/front/style/main.scss ***!
  \********************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../test/dummy/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(true);
// Imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Alata);", ""]);
// Module
exports.push([module.i, "/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n/* Document\n   ========================================================================== */\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\nhtml {\n  line-height: 1.15;\n  /* 1 */\n  -webkit-text-size-adjust: 100%;\n  /* 2 */ }\n/* Sections\n   ========================================================================== */\n/**\n * Remove the margin in all browsers.\n */\nbody {\n  margin: 0; }\n/**\n * Render the `main` element consistently in IE.\n */\nmain {\n  display: block; }\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0; }\n/* Grouping content\n   ========================================================================== */\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\nhr {\n  box-sizing: content-box;\n  /* 1 */\n  height: 0;\n  /* 1 */\n  overflow: visible;\n  /* 2 */ }\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\npre {\n  font-family: monospace, monospace;\n  /* 1 */\n  font-size: 1em;\n  /* 2 */ }\n/* Text-level semantics\n   ========================================================================== */\n/**\n * Remove the gray background on active links in IE 10.\n */\na {\n  background-color: transparent; }\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\nabbr[title] {\n  border-bottom: none;\n  /* 1 */\n  text-decoration: underline;\n  /* 2 */\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n  /* 2 */ }\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\nb,\nstrong {\n  font-weight: bolder; }\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace;\n  /* 1 */\n  font-size: 1em;\n  /* 2 */ }\n/**\n * Add the correct font size in all browsers.\n */\nsmall {\n  font-size: 80%; }\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline; }\nsub {\n  bottom: -0.25em; }\nsup {\n  top: -0.5em; }\n/* Embedded content\n   ========================================================================== */\n/**\n * Remove the border on images inside links in IE 10.\n */\nimg {\n  border-style: none; }\n/* Forms\n   ========================================================================== */\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit;\n  /* 1 */\n  font-size: 100%;\n  /* 1 */\n  line-height: 1.15;\n  /* 1 */\n  margin: 0;\n  /* 2 */ }\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\nbutton,\ninput {\n  /* 1 */\n  overflow: visible; }\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\nbutton,\nselect {\n  /* 1 */\n  text-transform: none; }\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\nbutton,\n[type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button; }\n/**\n * Remove the inner border and padding in Firefox.\n */\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0; }\n/**\n * Restore the focus styles unset by the previous rule.\n */\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText; }\n/**\n * Correct the padding in Firefox.\n */\nfieldset {\n  padding: 0.35em 0.75em 0.625em; }\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\nlegend {\n  box-sizing: border-box;\n  /* 1 */\n  color: inherit;\n  /* 2 */\n  display: table;\n  /* 1 */\n  max-width: 100%;\n  /* 1 */\n  padding: 0;\n  /* 3 */\n  white-space: normal;\n  /* 1 */ }\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\nprogress {\n  vertical-align: baseline; }\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\ntextarea {\n  overflow: auto; }\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box;\n  /* 1 */\n  padding: 0;\n  /* 2 */ }\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto; }\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n[type=\"search\"] {\n  -webkit-appearance: textfield;\n  /* 1 */\n  outline-offset: -2px;\n  /* 2 */ }\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none; }\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n::-webkit-file-upload-button {\n  -webkit-appearance: button;\n  /* 1 */\n  font: inherit;\n  /* 2 */ }\n/* Interactive\n   ========================================================================== */\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\ndetails {\n  display: block; }\n/*\n * Add the correct display in all browsers.\n */\nsummary {\n  display: list-item; }\n/* Misc\n   ========================================================================== */\n/**\n * Add the correct display in IE 10+.\n */\ntemplate {\n  display: none; }\n/**\n * Add the correct display in IE 10.\n */\n[hidden] {\n  display: none; }\n.u-clearfix:before, .u-clearfix:after {\n  content: \" \";\n  display: table; }\n.u-clearfix:after {\n  clear: both; }\n.u-float-right {\n  float: right !important; }\n.u-float-left {\n  float: left !important; }\n.u-mt-15 {\n  margin-top: 15px !important; }\n.u-mb-15 {\n  margin-bottom: 15px !important; }\n.u-mt-30 {\n  margin-top: 30px !important; }\n.u-mb-30 {\n  margin-bottom: 30px !important; }\n.u-only-sm {\n  display: none !important; }\n@media (max-width: 768px) {\n  .u-only-sm {\n    display: block !important; } }\n* {\n  box-sizing: border-box; }\nbody {\n  font-family: \"Alata\", sans-serif;\n  background-color: #e8ebf1;\n  color: #353b48; }\nmain {\n  position: relative;\n  margin-top: 50px; }\na {\n  color: #273c75; }\nimg {\n  max-width: 100%; }\n.c-grid__container, .c-grid__container-spaced {\n  margin: auto;\n  box-sizing: border-box; }\n.c-grid__container:before, .c-grid__container:after, .c-grid__container-spaced:before, .c-grid__container-spaced:after {\n    content: \" \";\n    display: table; }\n.c-grid__container:after, .c-grid__container-spaced:after {\n    clear: both; }\n.c-grid__col {\n  float: left;\n  box-sizing: border-box;\n  width: 100%; }\n.c-grid__col--1 {\n  width: 4.16667%; }\n.c-grid__col--2 {\n  width: 8.33333%; }\n.c-grid__col--3 {\n  width: 12.5%; }\n.c-grid__col--4 {\n  width: 16.66667%; }\n.c-grid__col--5 {\n  width: 20.83333%; }\n.c-grid__col--6 {\n  width: 25%; }\n.c-grid__col--7 {\n  width: 29.16667%; }\n.c-grid__col--8 {\n  width: 33.33333%; }\n.c-grid__col--9 {\n  width: 37.5%; }\n.c-grid__col--10 {\n  width: 41.66667%; }\n.c-grid__col--11 {\n  width: 45.83333%; }\n.c-grid__col--12 {\n  width: 50%; }\n.c-grid__col--13 {\n  width: 54.16667%; }\n.c-grid__col--14 {\n  width: 58.33333%; }\n.c-grid__col--15 {\n  width: 62.5%; }\n.c-grid__col--16 {\n  width: 66.66667%; }\n.c-grid__col--17 {\n  width: 70.83333%; }\n.c-grid__col--18 {\n  width: 75%; }\n.c-grid__col--19 {\n  width: 79.16667%; }\n.c-grid__col--20 {\n  width: 83.33333%; }\n.c-grid__col--21 {\n  width: 87.5%; }\n.c-grid__col--22 {\n  width: 91.66667%; }\n.c-grid__col--23 {\n  width: 95.83333%; }\n.c-grid__col--24 {\n  width: 100%; }\n@media screen and (min-width: 581px) {\n  .c-grid__col--xs-1 {\n    width: 4.16667%; }\n  .c-grid__col--xs-2 {\n    width: 8.33333%; }\n  .c-grid__col--xs-3 {\n    width: 12.5%; }\n  .c-grid__col--xs-4 {\n    width: 16.66667%; }\n  .c-grid__col--xs-5 {\n    width: 20.83333%; }\n  .c-grid__col--xs-6 {\n    width: 25%; }\n  .c-grid__col--xs-7 {\n    width: 29.16667%; }\n  .c-grid__col--xs-8 {\n    width: 33.33333%; }\n  .c-grid__col--xs-9 {\n    width: 37.5%; }\n  .c-grid__col--xs-10 {\n    width: 41.66667%; }\n  .c-grid__col--xs-11 {\n    width: 45.83333%; }\n  .c-grid__col--xs-12 {\n    width: 50%; }\n  .c-grid__col--xs-13 {\n    width: 54.16667%; }\n  .c-grid__col--xs-14 {\n    width: 58.33333%; }\n  .c-grid__col--xs-15 {\n    width: 62.5%; }\n  .c-grid__col--xs-16 {\n    width: 66.66667%; }\n  .c-grid__col--xs-17 {\n    width: 70.83333%; }\n  .c-grid__col--xs-18 {\n    width: 75%; }\n  .c-grid__col--xs-19 {\n    width: 79.16667%; }\n  .c-grid__col--xs-20 {\n    width: 83.33333%; }\n  .c-grid__col--xs-21 {\n    width: 87.5%; }\n  .c-grid__col--xs-22 {\n    width: 91.66667%; }\n  .c-grid__col--xs-23 {\n    width: 95.83333%; }\n  .c-grid__col--xs-24 {\n    width: 100%; } }\n@media screen and (min-width: 769px) {\n  .c-grid__col--sm-1 {\n    width: 4.16667%; }\n  .c-grid__col--sm-2 {\n    width: 8.33333%; }\n  .c-grid__col--sm-3 {\n    width: 12.5%; }\n  .c-grid__col--sm-4 {\n    width: 16.66667%; }\n  .c-grid__col--sm-5 {\n    width: 20.83333%; }\n  .c-grid__col--sm-6 {\n    width: 25%; }\n  .c-grid__col--sm-7 {\n    width: 29.16667%; }\n  .c-grid__col--sm-8 {\n    width: 33.33333%; }\n  .c-grid__col--sm-9 {\n    width: 37.5%; }\n  .c-grid__col--sm-10 {\n    width: 41.66667%; }\n  .c-grid__col--sm-11 {\n    width: 45.83333%; }\n  .c-grid__col--sm-12 {\n    width: 50%; }\n  .c-grid__col--sm-13 {\n    width: 54.16667%; }\n  .c-grid__col--sm-14 {\n    width: 58.33333%; }\n  .c-grid__col--sm-15 {\n    width: 62.5%; }\n  .c-grid__col--sm-16 {\n    width: 66.66667%; }\n  .c-grid__col--sm-17 {\n    width: 70.83333%; }\n  .c-grid__col--sm-18 {\n    width: 75%; }\n  .c-grid__col--sm-19 {\n    width: 79.16667%; }\n  .c-grid__col--sm-20 {\n    width: 83.33333%; }\n  .c-grid__col--sm-21 {\n    width: 87.5%; }\n  .c-grid__col--sm-22 {\n    width: 91.66667%; }\n  .c-grid__col--sm-23 {\n    width: 95.83333%; }\n  .c-grid__col--sm-24 {\n    width: 100%; } }\n@media screen and (min-width: 1025px) {\n  .c-grid__col--md-1 {\n    width: 4.16667%; }\n  .c-grid__col--md-2 {\n    width: 8.33333%; }\n  .c-grid__col--md-3 {\n    width: 12.5%; }\n  .c-grid__col--md-4 {\n    width: 16.66667%; }\n  .c-grid__col--md-5 {\n    width: 20.83333%; }\n  .c-grid__col--md-6 {\n    width: 25%; }\n  .c-grid__col--md-7 {\n    width: 29.16667%; }\n  .c-grid__col--md-8 {\n    width: 33.33333%; }\n  .c-grid__col--md-9 {\n    width: 37.5%; }\n  .c-grid__col--md-10 {\n    width: 41.66667%; }\n  .c-grid__col--md-11 {\n    width: 45.83333%; }\n  .c-grid__col--md-12 {\n    width: 50%; }\n  .c-grid__col--md-13 {\n    width: 54.16667%; }\n  .c-grid__col--md-14 {\n    width: 58.33333%; }\n  .c-grid__col--md-15 {\n    width: 62.5%; }\n  .c-grid__col--md-16 {\n    width: 66.66667%; }\n  .c-grid__col--md-17 {\n    width: 70.83333%; }\n  .c-grid__col--md-18 {\n    width: 75%; }\n  .c-grid__col--md-19 {\n    width: 79.16667%; }\n  .c-grid__col--md-20 {\n    width: 83.33333%; }\n  .c-grid__col--md-21 {\n    width: 87.5%; }\n  .c-grid__col--md-22 {\n    width: 91.66667%; }\n  .c-grid__col--md-23 {\n    width: 95.83333%; }\n  .c-grid__col--md-24 {\n    width: 100%; } }\n@media screen and (min-width: 1282px) {\n  .c-grid__col--lg-1 {\n    width: 4.16667%; }\n  .c-grid__col--lg-2 {\n    width: 8.33333%; }\n  .c-grid__col--lg-3 {\n    width: 12.5%; }\n  .c-grid__col--lg-4 {\n    width: 16.66667%; }\n  .c-grid__col--lg-5 {\n    width: 20.83333%; }\n  .c-grid__col--lg-6 {\n    width: 25%; }\n  .c-grid__col--lg-7 {\n    width: 29.16667%; }\n  .c-grid__col--lg-8 {\n    width: 33.33333%; }\n  .c-grid__col--lg-9 {\n    width: 37.5%; }\n  .c-grid__col--lg-10 {\n    width: 41.66667%; }\n  .c-grid__col--lg-11 {\n    width: 45.83333%; }\n  .c-grid__col--lg-12 {\n    width: 50%; }\n  .c-grid__col--lg-13 {\n    width: 54.16667%; }\n  .c-grid__col--lg-14 {\n    width: 58.33333%; }\n  .c-grid__col--lg-15 {\n    width: 62.5%; }\n  .c-grid__col--lg-16 {\n    width: 66.66667%; }\n  .c-grid__col--lg-17 {\n    width: 70.83333%; }\n  .c-grid__col--lg-18 {\n    width: 75%; }\n  .c-grid__col--lg-19 {\n    width: 79.16667%; }\n  .c-grid__col--lg-20 {\n    width: 83.33333%; }\n  .c-grid__col--lg-21 {\n    width: 87.5%; }\n  .c-grid__col--lg-22 {\n    width: 91.66667%; }\n  .c-grid__col--lg-23 {\n    width: 95.83333%; }\n  .c-grid__col--lg-24 {\n    width: 100%; } }\n.c-grid__container-spaced {\n  margin-left: -7.5px;\n  margin-right: -7.5px; }\n.c-grid__container-spaced > .c-grid__col {\n    margin-left: 7.5px;\n    margin-right: 7.5px; }\n.c-grid__container-spaced > .c-grid__col--1 {\n    width: calc(4.16667% - 15px); }\n.c-grid__container-spaced > .c-grid__col--2 {\n    width: calc(8.33333% - 15px); }\n.c-grid__container-spaced > .c-grid__col--3 {\n    width: calc(12.5% - 15px); }\n.c-grid__container-spaced > .c-grid__col--4 {\n    width: calc(16.66667% - 15px); }\n.c-grid__container-spaced > .c-grid__col--5 {\n    width: calc(20.83333% - 15px); }\n.c-grid__container-spaced > .c-grid__col--6 {\n    width: calc(25% - 15px); }\n.c-grid__container-spaced > .c-grid__col--7 {\n    width: calc(29.16667% - 15px); }\n.c-grid__container-spaced > .c-grid__col--8 {\n    width: calc(33.33333% - 15px); }\n.c-grid__container-spaced > .c-grid__col--9 {\n    width: calc(37.5% - 15px); }\n.c-grid__container-spaced > .c-grid__col--10 {\n    width: calc(41.66667% - 15px); }\n.c-grid__container-spaced > .c-grid__col--11 {\n    width: calc(45.83333% - 15px); }\n.c-grid__container-spaced > .c-grid__col--12 {\n    width: calc(50% - 15px); }\n.c-grid__container-spaced > .c-grid__col--13 {\n    width: calc(54.16667% - 15px); }\n.c-grid__container-spaced > .c-grid__col--14 {\n    width: calc(58.33333% - 15px); }\n.c-grid__container-spaced > .c-grid__col--15 {\n    width: calc(62.5% - 15px); }\n.c-grid__container-spaced > .c-grid__col--16 {\n    width: calc(66.66667% - 15px); }\n.c-grid__container-spaced > .c-grid__col--17 {\n    width: calc(70.83333% - 15px); }\n.c-grid__container-spaced > .c-grid__col--18 {\n    width: calc(75% - 15px); }\n.c-grid__container-spaced > .c-grid__col--19 {\n    width: calc(79.16667% - 15px); }\n.c-grid__container-spaced > .c-grid__col--20 {\n    width: calc(83.33333% - 15px); }\n.c-grid__container-spaced > .c-grid__col--21 {\n    width: calc(87.5% - 15px); }\n.c-grid__container-spaced > .c-grid__col--22 {\n    width: calc(91.66667% - 15px); }\n.c-grid__container-spaced > .c-grid__col--23 {\n    width: calc(95.83333% - 15px); }\n.c-grid__container-spaced > .c-grid__col--24 {\n    width: calc(100% - 15px); }\n@media screen and (min-width: 581px) {\n    .c-grid__container-spaced > .c-grid__col--xs-1 {\n      width: calc(4.16667% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--xs-2 {\n      width: calc(8.33333% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--xs-3 {\n      width: calc(12.5% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--xs-4 {\n      width: calc(16.66667% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--xs-5 {\n      width: calc(20.83333% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--xs-6 {\n      width: calc(25% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--xs-7 {\n      width: calc(29.16667% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--xs-8 {\n      width: calc(33.33333% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--xs-9 {\n      width: calc(37.5% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--xs-10 {\n      width: calc(41.66667% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--xs-11 {\n      width: calc(45.83333% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--xs-12 {\n      width: calc(50% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--xs-13 {\n      width: calc(54.16667% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--xs-14 {\n      width: calc(58.33333% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--xs-15 {\n      width: calc(62.5% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--xs-16 {\n      width: calc(66.66667% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--xs-17 {\n      width: calc(70.83333% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--xs-18 {\n      width: calc(75% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--xs-19 {\n      width: calc(79.16667% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--xs-20 {\n      width: calc(83.33333% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--xs-21 {\n      width: calc(87.5% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--xs-22 {\n      width: calc(91.66667% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--xs-23 {\n      width: calc(95.83333% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--xs-24 {\n      width: calc(100% - 15px); } }\n@media screen and (min-width: 769px) {\n    .c-grid__container-spaced > .c-grid__col--sm-1 {\n      width: calc(4.16667% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--sm-2 {\n      width: calc(8.33333% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--sm-3 {\n      width: calc(12.5% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--sm-4 {\n      width: calc(16.66667% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--sm-5 {\n      width: calc(20.83333% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--sm-6 {\n      width: calc(25% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--sm-7 {\n      width: calc(29.16667% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--sm-8 {\n      width: calc(33.33333% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--sm-9 {\n      width: calc(37.5% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--sm-10 {\n      width: calc(41.66667% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--sm-11 {\n      width: calc(45.83333% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--sm-12 {\n      width: calc(50% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--sm-13 {\n      width: calc(54.16667% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--sm-14 {\n      width: calc(58.33333% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--sm-15 {\n      width: calc(62.5% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--sm-16 {\n      width: calc(66.66667% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--sm-17 {\n      width: calc(70.83333% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--sm-18 {\n      width: calc(75% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--sm-19 {\n      width: calc(79.16667% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--sm-20 {\n      width: calc(83.33333% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--sm-21 {\n      width: calc(87.5% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--sm-22 {\n      width: calc(91.66667% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--sm-23 {\n      width: calc(95.83333% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--sm-24 {\n      width: calc(100% - 15px); } }\n@media screen and (min-width: 1025px) {\n    .c-grid__container-spaced > .c-grid__col--md-1 {\n      width: calc(4.16667% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--md-2 {\n      width: calc(8.33333% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--md-3 {\n      width: calc(12.5% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--md-4 {\n      width: calc(16.66667% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--md-5 {\n      width: calc(20.83333% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--md-6 {\n      width: calc(25% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--md-7 {\n      width: calc(29.16667% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--md-8 {\n      width: calc(33.33333% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--md-9 {\n      width: calc(37.5% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--md-10 {\n      width: calc(41.66667% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--md-11 {\n      width: calc(45.83333% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--md-12 {\n      width: calc(50% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--md-13 {\n      width: calc(54.16667% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--md-14 {\n      width: calc(58.33333% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--md-15 {\n      width: calc(62.5% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--md-16 {\n      width: calc(66.66667% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--md-17 {\n      width: calc(70.83333% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--md-18 {\n      width: calc(75% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--md-19 {\n      width: calc(79.16667% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--md-20 {\n      width: calc(83.33333% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--md-21 {\n      width: calc(87.5% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--md-22 {\n      width: calc(91.66667% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--md-23 {\n      width: calc(95.83333% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--md-24 {\n      width: calc(100% - 15px); } }\n@media screen and (min-width: 1282px) {\n    .c-grid__container-spaced > .c-grid__col--lg-1 {\n      width: calc(4.16667% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--lg-2 {\n      width: calc(8.33333% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--lg-3 {\n      width: calc(12.5% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--lg-4 {\n      width: calc(16.66667% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--lg-5 {\n      width: calc(20.83333% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--lg-6 {\n      width: calc(25% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--lg-7 {\n      width: calc(29.16667% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--lg-8 {\n      width: calc(33.33333% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--lg-9 {\n      width: calc(37.5% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--lg-10 {\n      width: calc(41.66667% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--lg-11 {\n      width: calc(45.83333% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--lg-12 {\n      width: calc(50% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--lg-13 {\n      width: calc(54.16667% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--lg-14 {\n      width: calc(58.33333% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--lg-15 {\n      width: calc(62.5% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--lg-16 {\n      width: calc(66.66667% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--lg-17 {\n      width: calc(70.83333% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--lg-18 {\n      width: calc(75% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--lg-19 {\n      width: calc(79.16667% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--lg-20 {\n      width: calc(83.33333% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--lg-21 {\n      width: calc(87.5% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--lg-22 {\n      width: calc(91.66667% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--lg-23 {\n      width: calc(95.83333% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--lg-24 {\n      width: calc(100% - 15px); } }\n.c-section {\n  width: calc(100% - 200px);\n  min-height: calc(100vh - 50px);\n  margin-left: 200px;\n  padding: 15px;\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s;\n  position: relative;\n  padding-top: 65px; }\n.c-section--full {\n    width: 100%;\n    margin-left: 0; }\n.c-section__head {\n  border-bottom: solid 1px #d8dde7;\n  padding-bottom: 5px; }\n.c-section__head-title {\n  display: inline-block;\n  margin: 0;\n  font-size: 30px;\n  color: #353b48; }\n.c-section__head-breadcrumb {\n  padding-top: 13px;\n  float: right; }\n.c-section__head-breadcrumb-link {\n  font-size: 14px;\n  color: #353b48;\n  font-weight: bold;\n  text-decoration: none; }\n.c-section__head-breadcrumb-link:after {\n    color: #a9b4ca;\n    content: ' - '; }\n.c-section__head-breadcrumb-link:last-child:after {\n    display: none; }\n.c-section__head-breadcrumb-link[href] {\n    color: #a9b4ca;\n    font-weight: normal; }\n.c-section__head-breadcrumb-link[href]:hover {\n      color: #273c75; }\n.c-section__head-breadcrumb-link[href]:hover:after {\n        color: #a9b4ca; }\n.c-section__content {\n  margin-top: 15px; }\n.c-section__content--cols {\n    display: flex;\n    /* [1] */\n    flex-wrap: nowrap;\n    /* [1] */\n    overflow-x: auto;\n    /* [1] */\n    -webkit-overflow-scrolling: touch;\n    /* [4] */\n    -ms-overflow-style: -ms-autohiding-scrollbar;\n    /* [5] */ }\n.c-section__content-block {\n  margin-bottom: 15px; }\n.c-section__content-block--col {\n    flex: 0 0 auto;\n    width: 325px;\n    margin-right: 15px; }\n.c-section__content-block--col > .c-card .c-card__body {\n      height: calc(100vh - 200px); }\n.is-menu-closed .c-section {\n  width: 100%;\n  margin-left: 0; }\n@media (max-width: 768px) {\n  .c-section {\n    width: 100%;\n    margin-left: 0;\n    padding: 0;\n    padding-top: 50px; }\n    .c-section--full {\n      width: 100%;\n      margin-left: 0; }\n  .c-section__head {\n    padding-left: 15px;\n    padding-right: 15px;\n    padding-top: 15px; }\n  .c-section__head-title {\n    font-size: 24px; }\n  .c-section__head-breadcrumb {\n    padding-top: 0;\n    float: none; }\n  .c-section__head-breadcrumb-link {\n    font-size: 10px; }\n  .c-section__content {\n    margin-left: 0 !important;\n    margin-right: 0 !important; }\n  .c-section__content-block {\n    margin-left: 0 !important;\n    margin-right: 0 !important;\n    width: 100% !important; }\n    .c-section__content-block--col {\n      width: 100%; }\n      .c-section__content-block--col > .c-card .c-card__body {\n        overflow-y: auto !important; } }\n.c-header {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 50px;\n  background-color: #273c75;\n  z-index: 6;\n  padding: 0 15px;\n  border-bottom: solid 1px #d8dde7;\n  display: flex;\n  justify-content: space-between; }\n.c-header__logo {\n  color: #ffffff;\n  text-decoration: none;\n  height: 50px;\n  padding: 10px 0;\n  display: flex;\n  align-items: center;\n  width: auto; }\n.c-header__logo-title {\n  display: inline-block;\n  font-size: 20px;\n  line-height: 20px;\n  font-weight: normal;\n  text-transform: uppercase;\n  position: relative;\n  margin-left: 5px;\n  bottom: 3px; }\n.c-header__logo-img {\n  max-height: 100%; }\n.c-header__nav {\n  display: flex;\n  flex-direction: flex-end; }\n.c-header__nav-item {\n  position: relative; }\n.c-header__nav-item-action {\n  display: inline-block;\n  border: none;\n  background-color: transparent;\n  padding: 5px 15px;\n  color: #ffffff;\n  font-size: 14px;\n  height: 49px;\n  cursor: pointer;\n  -webkit-transition: background-color 0.3s;\n  transition: background-color 0.3s;\n  outline: 0;\n  text-transform: uppercase; }\n.c-header__nav-item-action:hover, .c-header__nav-item-action:focus {\n    background-color: #213262;\n    color: #ffffff; }\n.c-header__nav-item-locale {\n  width: 25px;\n  height: 25px; }\n.c-header__nav-menu {\n  position: absolute;\n  top: 57px;\n  right: 0px;\n  width: 200px;\n  max-height: 60vh;\n  background-color: #ffffff;\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.1);\n  border-radius: 10px;\n  overflow: hidden;\n  -webkit-transform: translateY(30px);\n          transform: translateY(30px);\n  visibility: hidden;\n  overflow-y: auto;\n  opacity: 0;\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s; }\n.c-header__nav-menu.is-active {\n    -webkit-transform: translateY(0);\n            transform: translateY(0);\n    visibility: visible;\n    opacity: 1; }\n.c-header__nav-menu--large {\n    width: 400px; }\n.c-header__nav-menu--locales {\n    text-align: right;\n    padding: 5px;\n    width: auto;\n    max-width: 200px;\n    display: flex;\n    flex-direction: row; }\n.c-header__nav-menu-locale {\n  display: inline-block;\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  background-color: #e8ebf1;\n  -webkit-transition: all 0.3s ease;\n  transition: all 0.3s ease;\n  border: solid 2px #e8ebf1;\n  margin: 0 5px; }\n.c-header__nav-menu-locale img {\n    width: 100%; }\n.c-header__nav-menu-locale--active {\n    background-color: #273c75;\n    border-color: #273c75; }\n.c-header__nav-menu-locale:hover {\n    border-color: #273c75; }\n.c-header__nav-menu-list {\n  list-style: none;\n  margin: 0;\n  padding: 0; }\n.c-header__nav-menu-list-item {\n  width: 100%;\n  border-bottom: solid 1px #d8dde7; }\n.c-header__nav-menu-list-item:last-child {\n    border-bottom: none; }\n.c-header__nav-menu-list-item-link {\n  display: block;\n  padding: 15px;\n  color: #353b48;\n  font-size: 14px;\n  cursor: pointer;\n  -webkit-transition: background-color 0.3s;\n  transition: background-color 0.3s;\n  text-decoration: none; }\n.c-header__nav-menu-list-item-link:hover {\n    background-color: #e8ebf1; }\n@media (max-width: 768px) {\n  .c-header__nav-menu {\n    position: fixed;\n    width: calc(100% - 30px);\n    right: 15px;\n    max-height: calc(100% - 50px - 20px); } }\n.c-footer {\n  width: calc(100% - 200px);\n  height: 50px;\n  margin-left: 200px;\n  padding: 0 15px;\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s; }\n.c-footer--full {\n    width: 100%;\n    margin-left: 0; }\n.c-footer__content {\n  padding: 15px 0;\n  font-size: 12px;\n  color: #353b48;\n  border-top: solid 1px #d8dde7; }\n.c-footer__content a {\n    color: #353b48; }\n.is-menu-closed .c-footer {\n  width: 100%;\n  margin-left: 0; }\n.is-primary .c-footer__content {\n  color: #ffffff; }\n.is-primary .c-footer__content a {\n    color: #ffffff; }\n@media (max-width: 768px) {\n  .c-footer {\n    width: 100%;\n    margin-left: 0; }\n    .c-footer--full {\n      width: 100%;\n      margin-left: 0; } }\n.c-sidebar {\n  position: fixed;\n  top: 50px;\n  left: 0;\n  width: 200px;\n  height: calc(100% - 50px);\n  background-color: #ffffff;\n  z-index: 3;\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.05);\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s;\n  overflow-y: auto; }\n.c-sidebar__list {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  margin-top: 15px; }\n.c-sidebar__list-item {\n  position: relative; }\n.c-sidebar__list-item:before {\n    content: '';\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 5px;\n    height: 100%;\n    background-color: #c8cfde; }\n.c-sidebar__list-item[data-disabled] {\n    pointer-events: none; }\n.c-sidebar__list-item[data-disabled] .c-sidebar__list-link {\n      color: rgba(53, 59, 72, 0.4); }\n.c-sidebar__list-item[data-active] i {\n    color: #ffffff; }\n.c-sidebar__list-item[data-active]:before {\n    background-color: #273c75; }\n.c-sidebar__list-item[data-active] .c-sidebar__list-link {\n    color: #ffffff;\n    background-color: #273c75;\n    border-bottom-color: #273c75; }\n.c-sidebar__list-item:hover:before {\n    background-color: #273c75; }\n.c-sidebar__list-link {\n  display: block;\n  padding: 17px 15px;\n  border-bottom: solid 1px #d8dde7;\n  color: #353b48;\n  text-decoration: none;\n  font-size: 16px;\n  font-weight: normal;\n  -webkit-transition: background-color 0.3s;\n  transition: background-color 0.3s; }\n.c-sidebar__list-link:hover {\n    background-color: #e8ebf1; }\n.c-sidebar__list-link i {\n    width: 25px;\n    color: #a9b4ca;\n    text-align: center; }\n.c-sidebar__list-link span {\n    display: inline-block;\n    margin-left: 5px; }\n.is-menu-closed .c-sidebar {\n  -webkit-transform: translateX(-100%);\n          transform: translateX(-100%);\n  box-shadow: none; }\n@media (max-width: 768px) {\n  .c-sidebar {\n    width: 80%;\n    box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.1); } }\n.c-flash {\n  position: fixed;\n  top: 65px;\n  right: 0;\n  width: 300px;\n  z-index: 5; }\n.c-flash__message {\n  width: 100%;\n  background-color: #273c75;\n  color: #ffffff;\n  font-size: 14px;\n  text-align: left;\n  padding: 15px;\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s;\n  -webkit-transform: translateX(100%);\n          transform: translateX(100%);\n  border-radius: 15px;\n  margin-bottom: 5px;\n  position: relative;\n  box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.05); }\n.c-flash__message.is-active {\n    -webkit-transform: translateX(-15px);\n            transform: translateX(-15px); }\n.c-flash__message--green {\n    background-color: #44bd32; }\n.c-flash__message--green .c-flash__message-close {\n      border-color: #44bd32; }\n.c-flash__message--orange {\n    background-color: #c23616 !important; }\n.c-flash__message--orange .c-flash__message-close {\n      border-color: #c23616; }\n.c-flash__message--blue {\n    background-color: #0097e6; }\n.c-flash__message--blue .c-flash__message-close {\n      border-color: #0097e6; }\n.c-flash__message--yellow {\n    background-color: #e1b12c; }\n.c-flash__message--yellow .c-flash__message-close {\n      border-color: #e1b12c; }\n.c-flash__message-close {\n  display: block;\n  width: 20px;\n  height: 20px;\n  position: absolute;\n  top: -5px;\n  left: -5px;\n  background-color: #ffffff;\n  border-radius: 50%;\n  border: solid 2px #273c75;\n  cursor: pointer; }\n.c-flash__message-close:hover {\n    background-color: #f2f2f2; }\n.c-flash__message-close:before, .c-flash__message-close:after {\n    content: '';\n    display: block;\n    width: 2px;\n    height: 10px;\n    background-color: #8998b7;\n    position: absolute;\n    top: calc(50% - 5px);\n    left: calc(50% - 1px); }\n.c-flash__message-close:before {\n    -webkit-transform: rotate(45deg);\n            transform: rotate(45deg); }\n.c-flash__message-close:after {\n    -webkit-transform: rotate(-45deg);\n            transform: rotate(-45deg); }\n.c-card {\n  background-color: #ffffff;\n  border-radius: 10px;\n  overflow: hidden;\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.05);\n  -webkit-transition: box-shadow 0.25s linear;\n  transition: box-shadow 0.25s linear; }\n.c-card--centerpage {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%);\n    width: 600px; }\n.c-card--centerpage-large {\n    width: 900px; }\n.c-card--unhidden {\n    overflow: visible; }\n.c-card--hasnext {\n    margin-bottom: 15px; }\n.c-card--viewported.is-fixed {\n    position: fixed;\n    top: 0;\n    left: 0;\n    z-index: 9999;\n    width: 100%;\n    height: 100vh;\n    border-radius: 0;\n    overflow: auto; }\n.c-card--viewported.is-fixed .c-card__header {\n      border-radius: 0; }\n.c-card--viewported.is-fixed .c-card__body--scrollable {\n      max-height: calc(100vh - 50px); }\n.c-card:hover {\n    box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.05); }\n.c-card__header {\n  background-color: #ffffff;\n  color: #353b48;\n  border-bottom: solid 1px #d8dde7;\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px; }\n.c-card__header:before, .c-card__header:after {\n    content: \" \";\n    display: table; }\n.c-card__header:after {\n    clear: both; }\n.c-card__header-title {\n  display: inline-block;\n  font-size: 18px;\n  font-weight: bold;\n  padding: 15px; }\n.c-card__header-actions {\n  list-style: none;\n  margin: 0;\n  padding: 7px 15px;\n  float: right; }\n.c-card__header-actions:before, .c-card__header-actions:after {\n    content: \" \";\n    display: table; }\n.c-card__header-actions:after {\n    clear: both; }\n.c-card__header-actions--full {\n    float: none;\n    width: 100%; }\n.c-card__header-action {\n  display: inline-block;\n  margin-right: 5px; }\n.c-card__header-action--full {\n    display: block;\n    width: 100%; }\n.c-card__header-action:last-child {\n    margin-right: 0; }\n.c-card__header-action .c-button {\n    padding: 8px 20px; }\n.c-card__header-action .c-input-action {\n    margin: 2px 0;\n    font-size: 14px; }\n.c-card__header-action .c-input-action .c-input__field, .c-card__header-action .c-input-action .c-input-action__field {\n      padding: 7px 10px; }\n.c-card__header-action .c-input-action .c-input-action__button {\n      padding: 7px 0; }\n.c-card__header-action-text {\n  font-size: 12px;\n  display: inline-block;\n  margin-top: 10px; }\n.c-card__body {\n  padding: 15px;\n  border-bottom-left-radius: 10px;\n  border-bottom-right-radius: 10px; }\n.c-card__body--list {\n    padding: 0;\n    margin: 0;\n    list-style: none; }\n.c-card__body--scrollable {\n    max-height: calc(100vh - 200px);\n    overflow-y: auto; }\n.c-card__body-list-item {\n  border-bottom: solid 1px #d8dde7;\n  color: #353b48; }\n.c-card__body-list-item:last-child {\n    border-bottom: none; }\n.c-card__body-list-item--padding {\n    padding: 15px; }\n.c-card__body-list-item.is-active {\n    background-color: rgba(39, 60, 117, 0.1); }\n.c-card__body-list-item-link {\n  display: block;\n  padding: 15px;\n  color: #353b48;\n  text-decoration: none; }\n.c-card__body-list-item-link:hover {\n    background-color: #e8ebf1;\n    text-decoration: none; }\n.c-card__body-list-item-link.is-active {\n    background-color: rgba(39, 60, 117, 0.1); }\n.c-card__body-list-item-content {\n  display: inline-block;\n  padding-right: 90px; }\n.c-card__body-list-item-action {\n  position: absolute;\n  top: 15px;\n  right: 15px;\n  font-size: 14px;\n  color: #273c75; }\n@media (max-width: 1024px) {\n  .c-card--centerpage-large {\n    width: calc(100% - 30px); } }\n@media (max-width: 768px) {\n  .c-card {\n    background-color: #ffffff;\n    border-radius: 0;\n    overflow: hidden; }\n    .c-card--centerpage {\n      position: relative;\n      top: 0;\n      left: 0;\n      -webkit-transform: none;\n              transform: none;\n      width: calc(100% - 30px);\n      margin: auto;\n      border-radius: 15px;\n      margin-top: 65px;\n      margin-bottom: 15px; }\n    .c-card--centerpage-large {\n      width: calc(100% - 30px); }\n  .c-card__header {\n    border-radius: 0; }\n  .c-card__header-title {\n    display: block;\n    text-align: center;\n    font-size: 20px; }\n  .c-card__header-actions {\n    text-align: center;\n    float: none;\n    padding-top: 0;\n    margin-top: -10px; }\n    .c-card__header-actions--full {\n      margin-top: 0;\n      padding-top: 7px; }\n  .c-card__header-actions--group {\n    display: flex; }\n  .c-card__header-action {\n    float: none;\n    width: 100%; }\n    .c-card__header-action .c-button {\n      display: block;\n      text-align: center;\n      width: 100%; }\n  .c-card__body {\n    border-bottom-left-radius: 0;\n    border-bottom-right-radius: 0; }\n    .c-card__body--scrollable {\n      max-height: none;\n      overflow-y: hidden; } }\n@media (max-width: 768px) {\n  .c-card--mobile-fixed-section {\n    margin: 0 !important; }\n  .c-card--mobile-fixed {\n    position: fixed;\n    top: 50px;\n    left: 0;\n    width: 100%;\n    height: calc(100% - 50px);\n    -webkit-transform: translateX(100%);\n            transform: translateX(100%);\n    -webkit-transition: -webkit-transform 0.3s;\n    transition: -webkit-transform 0.3s;\n    transition: transform 0.3s;\n    transition: transform 0.3s, -webkit-transform 0.3s;\n    overflow-y: auto;\n    z-index: 1; }\n    .c-card--mobile-fixed.is-open {\n      -webkit-transform: translateX(0);\n              transform: translateX(0); }\n    .c-card--mobile-fixed .c-card__header-actions {\n      margin-top: 0;\n      padding-top: 7px; }\n    .c-card--mobile-fixed .c-card__body--scrollable {\n      max-height: none;\n      overflow-y: hidden; }\n  .c-card__header-title--mobile-fixed {\n    position: fixed;\n    bottom: 15px;\n    right: 15px;\n    background-color: #273c75;\n    color: #ffffff;\n    border-radius: 10px;\n    font-size: 12px;\n    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.1);\n    z-index: 2; } }\n@-webkit-keyframes c-button-is-loading {\n  0% {\n    -webkit-transform: translateX(-100%);\n            transform: translateX(-100%); }\n  100% {\n    -webkit-transform: translateX(200%);\n            transform: translateX(200%); } }\n@keyframes c-button-is-loading {\n  0% {\n    -webkit-transform: translateX(-100%);\n            transform: translateX(-100%); }\n  100% {\n    -webkit-transform: translateX(200%);\n            transform: translateX(200%); } }\n.c-button {\n  display: inline-block;\n  padding: 10px 20px;\n  margin: 2px 0;\n  cursor: pointer;\n  border-radius: 5px;\n  font-size: 14px;\n  background-color: #273c75;\n  color: #ffffff;\n  text-decoration: none;\n  border: none;\n  -webkit-transition: all 0.15s;\n  transition: all 0.15s;\n  outline: 0;\n  position: relative; }\n.c-button[disabled] {\n    background-color: rgba(53, 59, 72, 0.65); }\n.c-button[disabled]:hover {\n      background-color: rgba(53, 59, 72, 0.65);\n      box-shadow: none; }\n.c-button.is-loading {\n    color: rgba(255, 255, 255, 0.5);\n    overflow: hidden; }\n.c-button.is-loading:before {\n      content: '';\n      display: block;\n      width: 70%;\n      height: 2px;\n      background-color: rgba(255, 255, 255, 0.8);\n      position: absolute;\n      bottom: 0;\n      left: 0;\n      -webkit-animation: c-button-is-loading 1s infinite;\n              animation: c-button-is-loading 1s infinite; }\n.c-button:hover {\n    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05), 0 4px 10px rgba(39, 60, 117, 0.25);\n    background-color: #213262; }\n.c-button:active, .c-button:focus {\n    background-color: #1a284f; }\n.c-button--green {\n    background-color: #44bd32; }\n.c-button--green:hover {\n      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05), 0 4px 10px rgba(68, 189, 50, 0.25);\n      background-color: #3da92d; }\n.c-button--green:active, .c-button--green:focus {\n      background-color: #359527; }\n.c-button--blue {\n    background-color: #0097e6; }\n.c-button--blue:hover {\n      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05), 0 4px 10px rgba(0, 151, 230, 0.25);\n      background-color: #0086cd; }\n.c-button--blue:active, .c-button--blue:focus {\n      background-color: #0076b3; }\n.c-button--yellow {\n    background-color: #e1b12c; }\n.c-button--yellow:hover {\n      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05), 0 4px 10px rgba(225, 177, 44, 0.25);\n      background-color: #d5a51e; }\n.c-button--yellow:active, .c-button--yellow:focus {\n      background-color: #bf931b; }\n.c-button--orange {\n    background-color: #c23616; }\n.c-button--orange:hover {\n      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05), 0 4px 10px rgba(194, 54, 22, 0.25);\n      background-color: #ab3013; }\n.c-button--orange:active, .c-button--orange:focus {\n      background-color: #942911; }\n.c-button--black {\n    background-color: #353b48; }\n.c-button--black:hover {\n      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05), 0 4px 10px rgba(53, 59, 72, 0.25);\n      background-color: #2a2f39; }\n.c-button--black:active, .c-button--black:focus {\n      background-color: #1f232b; }\n.c-button--cenere {\n    background-color: #e8ebf1;\n    color: #353b48; }\n.c-button--cenere:hover {\n      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05), 0 4px 10px rgba(232, 235, 241, 0.25);\n      background-color: #d8dde7; }\n.c-button--cenere:active, .c-button--cenere:focus {\n      background-color: #c8cfde; }\n.c-button--transparent {\n    background-color: transparent;\n    color: #353b48; }\n.c-button--transparent:hover {\n      background-color: transparent;\n      box-shadow: none;\n      text-decoration: underline; }\n.c-button--transparent:active, .c-button--transparent:focus {\n      background-color: transparent;\n      box-shadow: none;\n      text-decoration: underline; }\n.c-button--block {\n    display: block;\n    text-align: center; }\n@media (max-width: 768px) {\n  .c-button {\n    padding: 15px 20px; } }\n.c-form {\n  padding-bottom: 15px; }\n.c-form:before, .c-form:after {\n    content: \" \";\n    display: table; }\n.c-form:after {\n    clear: both; }\n.c-form__actions {\n  margin-bottom: -15px;\n  text-align: right; }\n.c-form__actions .c-button {\n    margin-left: 15px; }\n.c-form__actions .c-button:first-child {\n      margin-left: 0; }\n.c-form__title {\n  font-weight: bold;\n  font-size: 18px;\n  color: #353b48;\n  border-bottom: solid 1px #e8ebf1;\n  padding-bottom: 5px;\n  margin-bottom: 15px; }\n.c-input {\n  margin-bottom: 15px; }\n.c-input__label {\n  font-size: 14px;\n  color: #353b48;\n  display: block;\n  margin-bottom: 4px;\n  margin-left: 4px; }\n.c-input__label-subtitle {\n  font-size: 12px;\n  color: #a9b4ca;\n  margin-bottom: 4px;\n  margin-left: 4px;\n  display: block; }\n.c-input__field {\n  display: block;\n  border: solid 1px #c8cfde;\n  border-radius: 5px;\n  background-color: #ffffff;\n  color: #353b48;\n  padding: 10px;\n  outline: none;\n  width: 100%;\n  -webkit-transition: all 0.15s;\n  transition: all 0.15s;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none; }\n.c-input__field:active, .c-input__field:focus {\n    border-color: #4264c0;\n    box-shadow: 0 2px 5px #c8cfde; }\n.c-input__field[disabled] {\n    background-color: #fafafa; }\n.c-input__field[disabled]:active, .c-input__field[disabled]:focus {\n      border-color: #c8cfde;\n      box-shadow: none; }\n.c-input__field.is-error {\n    border-color: #c23616; }\ntextarea.c-input__field {\n  min-height: 100px; }\ninput[type=\"date\"].c-input__field {\n  padding: 7px 10px;\n  padding-top: 8px; }\n.c-input-action__field {\n  display: inline-block;\n  border: solid 1px #d8dde7;\n  border-right: none;\n  border-top-left-radius: 5px;\n  border-bottom-left-radius: 5px;\n  background-color: #ffffff;\n  color: #353b48;\n  padding: 10px;\n  outline: none;\n  width: calc(100% - 60px);\n  -webkit-transition: all 0.15s;\n  transition: all 0.15s; }\n.c-input-action__field:active, .c-input-action__field:focus {\n    border-color: #4264c0;\n    box-shadow: 0 2px 5px #c8cfde; }\n.c-input-action__field.is-error {\n    border-color: #c23616; }\n.c-input-action__button {\n  cursor: pointer;\n  display: inline-block;\n  border: solid 1px #273c75;\n  border-top-right-radius: 5px;\n  border-bottom-right-radius: 5px;\n  background-color: #273c75;\n  color: #ffffff;\n  padding: 10px 0;\n  outline: none;\n  width: 60px;\n  float: right;\n  -webkit-transition: all 0.15s;\n  transition: all 0.15s; }\n.c-input-action__button:hover {\n    background-color: #213262; }\n.c-input-action__button[disabled] {\n    background-color: #353b48;\n    border-color: #353b48; }\n.c-input-action__button[disabled]:hover {\n      background-color: #353b48; }\n.c-input-checkbox {\n  position: relative;\n  margin-bottom: 15px; }\n.c-input-checkbox__label {\n  display: inline-block;\n  font-size: 14px;\n  color: #353b48;\n  padding-left: 25px;\n  cursor: pointer;\n  position: relative; }\n.c-input-checkbox__label:before {\n    content: '';\n    display: inline-block;\n    height: 15px;\n    width: 15px;\n    border: solid 2px #d8dde7;\n    background-color: #ffffff;\n    position: absolute;\n    left: 0;\n    top: 0;\n    border-radius: 5px;\n    -webkit-transition: all 0.3s ease;\n    transition: all 0.3s ease; }\n.c-input-checkbox__label:hover:before {\n    background-color: #d8dde7; }\n.c-input-checkbox__label:after {\n    content: '';\n    display: inline-block;\n    height: 15px;\n    width: 15px;\n    background-color: #273c75;\n    position: absolute;\n    left: 2px;\n    top: 2px;\n    border-radius: 4px; }\n.c-input-checkbox__field {\n  position: absolute;\n  top: 0;\n  left: 0;\n  opacity: 0; }\n.c-input-checkbox .c-input-checkbox__field + .c-input-checkbox__label::after {\n  content: none; }\n.c-input-checkbox .c-input-checkbox__field:checked + .c-input-checkbox__label::after {\n  content: ''; }\n@media (max-width: 768px) {\n  .c-form__actions {\n    text-align: center; }\n    .c-form__actions .c-button {\n      display: block;\n      width: 100%;\n      margin-left: 0; } }\n.c-input-selector__head {\n  margin-bottom: 15px; }\n.c-input-selector__content {\n  border: solid 1px #c8cfde;\n  height: 200px;\n  overflow-y: auto;\n  margin: 0;\n  padding: 0;\n  list-style: none; }\n.choices.is-focused .choices__inner {\n  border-color: #4264c0;\n  box-shadow: 0 2px 5px #c8cfde; }\n.choices.is-disabled .choices__inner {\n  background-color: #fafafa; }\n.choices.is-disabled .choices__input {\n  background-color: #fafafa;\n  cursor: auto;\n  cursor: initial; }\n.choices .choices__inner {\n  background-color: #ffffff;\n  border-radius: 5px;\n  border-color: #c8cfde;\n  min-height: 40px;\n  padding-left: 10px;\n  padding-right: 10px;\n  padding-top: 7px;\n  padding-bottom: 2px; }\n.choices .choices__input {\n  background-color: #ffffff; }\n.choices .choices__list--dropdown {\n  border-radius: 5px;\n  border-color: #c8cfde;\n  top: calc(100% + 2px); }\n.choices .choices__list--dropdown.is-active {\n    min-height: 150px; }\n.choices .choices__list--dropdown .choices__list {\n    max-height: 150px; }\n.choices .choices__list--multiple .choices__item {\n  background-color: #273c75;\n  border-color: #273c75; }\n.choices .choices__list--multiple .choices__item.is-highlighted {\n  background-color: #273c75;\n  border-color: #273c75; }\n.c-message {\n  padding: 30px 15px; }\n.c-message--bordered {\n    border: solid 1px #e8ebf1; }\n.c-message__title {\n  display: block;\n  text-align: center;\n  color: #353b48;\n  font-size: 30px;\n  margin-bottom: 15px; }\n.c-message__content {\n  display: block;\n  text-align: center;\n  color: #353b48;\n  font-size: 20px; }\n.c-message__content--small {\n    max-width: 400px;\n    margin-left: auto;\n    margin-right: auto; }\n.c-modal {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 6;\n  visibility: hidden;\n  opacity: 0;\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s; }\n.c-modal.is-active {\n    visibility: visible;\n    opacity: 1; }\n.c-modal.is-active .c-modal__box {\n      opacity: 1;\n      -webkit-transform: translate(-50%, -50%);\n              transform: translate(-50%, -50%); }\n.c-modal__overlay {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(53, 59, 72, 0.6); }\n.c-modal__box {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 600px;\n  -webkit-transition: all 0.3s ease-out 0.1s;\n  transition: all 0.3s ease-out 0.1s;\n  opacity: 0;\n  -webkit-transform: translate(-50%, 50%);\n          transform: translate(-50%, 50%); }\n.c-modal__box--large {\n    width: 900px; }\n.c-modal__box > .c-card .c-card__body {\n    max-height: 70vh;\n    overflow-y: auto; }\n@media (max-width: 1024px) {\n  .c-modal__box--large {\n    width: calc(100% - 30px); } }\n@media (max-width: 768px) {\n  .c-modal {\n    opacity: 1; }\n    .c-modal.is-active .c-modal__box {\n      -webkit-transform: translate(0);\n              transform: translate(0); }\n  .c-modal__overlay {\n    display: none; }\n  .c-modal__box {\n    width: 100%;\n    top: 50px;\n    left: 0;\n    -webkit-transform: translate(0, 100%);\n            transform: translate(0, 100%);\n    padding: 0;\n    opacity: 1; }\n    .c-modal__box > .c-card {\n      height: calc(100vh - 50px);\n      overflow-y: auto; }\n      .c-modal__box > .c-card .c-card__body {\n        max-height: none;\n        max-height: initial;\n        overflow-y: hidden; } }\n.c-table {\n  width: 100%;\n  border-collapse: collapse;\n  border: solid 1px #e8ebf1;\n  font-size: 14px; }\n.c-table thead {\n    background-color: #f2f3f7; }\n.c-table tr:nth-child(2n) {\n    background-color: #f8f9fb; }\n.c-table th, .c-table td {\n    padding: 10px 15px;\n    border: solid 1px #e8ebf1;\n    text-align: left; }\n.c-table__actions {\n  text-align: center !important;\n  width: auto; }\n.c-table__actions .c-button {\n    padding: 5px 10px; }\n.c-table__responsive {\n  overflow-y: auto; }\n@media (max-width: 768px) {\n  .c-table__col-not-imp {\n    display: none; } }\n.c-pagination .pagination {\n  padding-top: 15px;\n  text-align: center; }\n.c-pagination .pagination a, .c-pagination .pagination .current {\n    border-radius: 15px;\n    display: inline-block;\n    padding: 5px 15px;\n    background-color: #e8ebf1;\n    text-decoration: none;\n    -webkit-transition: all 0.3s ease;\n    transition: all 0.3s ease;\n    text-transform: uppercase; }\n.c-pagination .pagination a:hover, .c-pagination .pagination .current:hover {\n      background-color: #d8dde7; }\n.c-pagination .page.current {\n  background-color: #273c75;\n  color: #ffffff; }\n.c-pagination .page.current:hover {\n    background-color: #273c75; }\n.c-tag {\n  display: inline-block;\n  background-color: #ffffff;\n  color: #273c75;\n  border: solid 1px #273c75;\n  padding: 0.4em;\n  border-radius: 5px;\n  text-decoration: none;\n  margin: 2px; }\n.c-tag--green {\n    border-color: #44bd32;\n    color: #44bd32; }\n.c-tag--blue {\n    border-color: #0097e6;\n    color: #0097e6; }\n.c-tag--yellow {\n    border-color: #e1b12c;\n    color: #e1b12c; }\n.c-tag--orange {\n    border-color: #c23616;\n    color: #c23616; }\n.c-tag--black {\n    border-color: #353b48;\n    color: #353b48; }\n.c-tag--cenere {\n    border-color: #e8ebf1;\n    color: #353b48; }\n.c-tag--bold {\n    font-weight: bold; }\n.c-tile {\n  display: block;\n  background-color: #ffffff;\n  border-radius: 10px;\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.05);\n  -webkit-transition: box-shadow 0.25s linear;\n  transition: box-shadow 0.25s linear;\n  padding: 15px;\n  text-align: center;\n  text-decoration: none;\n  color: #353b48; }\n.c-tile:hover {\n    box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.05);\n    color: #273c75; }\n.c-tile__label {\n  font-size: 18px;\n  font-weight: bold; }\n.c-tile__icon {\n  font-size: 45px;\n  margin-bottom: 15px; }\n@media (max-width: 768px) {\n  .c-tile {\n    margin: 0 15px; } }\n", "",{"version":3,"sources":["/Users/gregoriogalante/Workspace/matilda/matilda-core/front/style/settings/_normalize.scss","main.scss","/Users/gregoriogalante/Workspace/matilda/matilda-core/front/style/settings/_mixin.scss","/Users/gregoriogalante/Workspace/matilda/matilda-core/front/style/settings/_helpers.scss","/Users/gregoriogalante/Workspace/matilda/matilda-core/front/style/settings/_base.scss","/Users/gregoriogalante/Workspace/matilda/matilda-core/front/style/_variables.scss","/Users/gregoriogalante/Workspace/matilda/matilda-core/front/style/components/_grid.scss","/Users/gregoriogalante/Workspace/matilda/matilda-core/front/style/components/_section.scss","/Users/gregoriogalante/Workspace/matilda/matilda-core/front/style/components/_header.scss","/Users/gregoriogalante/Workspace/matilda/matilda-core/front/style/components/_footer.scss","/Users/gregoriogalante/Workspace/matilda/matilda-core/front/style/components/_sidebar.scss","/Users/gregoriogalante/Workspace/matilda/matilda-core/front/style/components/_flash.scss","/Users/gregoriogalante/Workspace/matilda/matilda-core/front/style/components/_card.scss","/Users/gregoriogalante/Workspace/matilda/matilda-core/front/style/components/_button.scss","/Users/gregoriogalante/Workspace/matilda/matilda-core/front/style/components/_input.scss","/Users/gregoriogalante/Workspace/matilda/matilda-core/front/style/components/_message.scss","/Users/gregoriogalante/Workspace/matilda/matilda-core/front/style/components/_modal.scss","/Users/gregoriogalante/Workspace/matilda/matilda-core/front/style/components/_table.scss","/Users/gregoriogalante/Workspace/matilda/matilda-core/front/style/components/_pagination.scss","/Users/gregoriogalante/Workspace/matilda/matilda-core/front/style/components/_tag.scss","/Users/gregoriogalante/Workspace/matilda/matilda-core/front/style/components/_tile.scss"],"names":[],"mappings":"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","file":"main.scss","sourcesContent":["/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\n html {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers.\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\n\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Remove the gray background on active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10.\n */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\n[type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\n\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10+.\n */\n\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n\n[hidden] {\n  display: none;\n}\n","@import url(\"https://fonts.googleapis.com/css?family=Alata\");\n/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n/* Document\n   ========================================================================== */\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\nhtml {\n  line-height: 1.15;\n  /* 1 */\n  -webkit-text-size-adjust: 100%;\n  /* 2 */ }\n\n/* Sections\n   ========================================================================== */\n/**\n * Remove the margin in all browsers.\n */\nbody {\n  margin: 0; }\n\n/**\n * Render the `main` element consistently in IE.\n */\nmain {\n  display: block; }\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0; }\n\n/* Grouping content\n   ========================================================================== */\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\nhr {\n  box-sizing: content-box;\n  /* 1 */\n  height: 0;\n  /* 1 */\n  overflow: visible;\n  /* 2 */ }\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\npre {\n  font-family: monospace, monospace;\n  /* 1 */\n  font-size: 1em;\n  /* 2 */ }\n\n/* Text-level semantics\n   ========================================================================== */\n/**\n * Remove the gray background on active links in IE 10.\n */\na {\n  background-color: transparent; }\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\nabbr[title] {\n  border-bottom: none;\n  /* 1 */\n  text-decoration: underline;\n  /* 2 */\n  text-decoration: underline dotted;\n  /* 2 */ }\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\nb,\nstrong {\n  font-weight: bolder; }\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace;\n  /* 1 */\n  font-size: 1em;\n  /* 2 */ }\n\n/**\n * Add the correct font size in all browsers.\n */\nsmall {\n  font-size: 80%; }\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline; }\n\nsub {\n  bottom: -0.25em; }\n\nsup {\n  top: -0.5em; }\n\n/* Embedded content\n   ========================================================================== */\n/**\n * Remove the border on images inside links in IE 10.\n */\nimg {\n  border-style: none; }\n\n/* Forms\n   ========================================================================== */\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit;\n  /* 1 */\n  font-size: 100%;\n  /* 1 */\n  line-height: 1.15;\n  /* 1 */\n  margin: 0;\n  /* 2 */ }\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\nbutton,\ninput {\n  /* 1 */\n  overflow: visible; }\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\nbutton,\nselect {\n  /* 1 */\n  text-transform: none; }\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\nbutton,\n[type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button; }\n\n/**\n * Remove the inner border and padding in Firefox.\n */\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0; }\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText; }\n\n/**\n * Correct the padding in Firefox.\n */\nfieldset {\n  padding: 0.35em 0.75em 0.625em; }\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\nlegend {\n  box-sizing: border-box;\n  /* 1 */\n  color: inherit;\n  /* 2 */\n  display: table;\n  /* 1 */\n  max-width: 100%;\n  /* 1 */\n  padding: 0;\n  /* 3 */\n  white-space: normal;\n  /* 1 */ }\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\nprogress {\n  vertical-align: baseline; }\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\ntextarea {\n  overflow: auto; }\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box;\n  /* 1 */\n  padding: 0;\n  /* 2 */ }\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto; }\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n[type=\"search\"] {\n  -webkit-appearance: textfield;\n  /* 1 */\n  outline-offset: -2px;\n  /* 2 */ }\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none; }\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n::-webkit-file-upload-button {\n  -webkit-appearance: button;\n  /* 1 */\n  font: inherit;\n  /* 2 */ }\n\n/* Interactive\n   ========================================================================== */\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\ndetails {\n  display: block; }\n\n/*\n * Add the correct display in all browsers.\n */\nsummary {\n  display: list-item; }\n\n/* Misc\n   ========================================================================== */\n/**\n * Add the correct display in IE 10+.\n */\ntemplate {\n  display: none; }\n\n/**\n * Add the correct display in IE 10.\n */\n[hidden] {\n  display: none; }\n\n.u-clearfix:before, .u-clearfix:after {\n  content: \" \";\n  display: table; }\n\n.u-clearfix:after {\n  clear: both; }\n\n.u-float-right {\n  float: right !important; }\n\n.u-float-left {\n  float: left !important; }\n\n.u-mt-15 {\n  margin-top: 15px !important; }\n\n.u-mb-15 {\n  margin-bottom: 15px !important; }\n\n.u-mt-30 {\n  margin-top: 30px !important; }\n\n.u-mb-30 {\n  margin-bottom: 30px !important; }\n\n.u-only-sm {\n  display: none !important; }\n\n@media (max-width: 768px) {\n  .u-only-sm {\n    display: block !important; } }\n\n* {\n  box-sizing: border-box; }\n\nbody {\n  font-family: \"Alata\", sans-serif;\n  background-color: #e8ebf1;\n  color: #353b48; }\n\nmain {\n  position: relative;\n  margin-top: 50px; }\n\na {\n  color: #273c75; }\n\nimg {\n  max-width: 100%; }\n\n.c-grid__container, .c-grid__container-spaced {\n  margin: auto;\n  box-sizing: border-box; }\n  .c-grid__container:before, .c-grid__container:after, .c-grid__container-spaced:before, .c-grid__container-spaced:after {\n    content: \" \";\n    display: table; }\n  .c-grid__container:after, .c-grid__container-spaced:after {\n    clear: both; }\n\n.c-grid__col {\n  float: left;\n  box-sizing: border-box;\n  width: 100%; }\n\n.c-grid__col--1 {\n  width: 4.16667%; }\n\n.c-grid__col--2 {\n  width: 8.33333%; }\n\n.c-grid__col--3 {\n  width: 12.5%; }\n\n.c-grid__col--4 {\n  width: 16.66667%; }\n\n.c-grid__col--5 {\n  width: 20.83333%; }\n\n.c-grid__col--6 {\n  width: 25%; }\n\n.c-grid__col--7 {\n  width: 29.16667%; }\n\n.c-grid__col--8 {\n  width: 33.33333%; }\n\n.c-grid__col--9 {\n  width: 37.5%; }\n\n.c-grid__col--10 {\n  width: 41.66667%; }\n\n.c-grid__col--11 {\n  width: 45.83333%; }\n\n.c-grid__col--12 {\n  width: 50%; }\n\n.c-grid__col--13 {\n  width: 54.16667%; }\n\n.c-grid__col--14 {\n  width: 58.33333%; }\n\n.c-grid__col--15 {\n  width: 62.5%; }\n\n.c-grid__col--16 {\n  width: 66.66667%; }\n\n.c-grid__col--17 {\n  width: 70.83333%; }\n\n.c-grid__col--18 {\n  width: 75%; }\n\n.c-grid__col--19 {\n  width: 79.16667%; }\n\n.c-grid__col--20 {\n  width: 83.33333%; }\n\n.c-grid__col--21 {\n  width: 87.5%; }\n\n.c-grid__col--22 {\n  width: 91.66667%; }\n\n.c-grid__col--23 {\n  width: 95.83333%; }\n\n.c-grid__col--24 {\n  width: 100%; }\n\n@media screen and (min-width: 581px) {\n  .c-grid__col--xs-1 {\n    width: 4.16667%; }\n  .c-grid__col--xs-2 {\n    width: 8.33333%; }\n  .c-grid__col--xs-3 {\n    width: 12.5%; }\n  .c-grid__col--xs-4 {\n    width: 16.66667%; }\n  .c-grid__col--xs-5 {\n    width: 20.83333%; }\n  .c-grid__col--xs-6 {\n    width: 25%; }\n  .c-grid__col--xs-7 {\n    width: 29.16667%; }\n  .c-grid__col--xs-8 {\n    width: 33.33333%; }\n  .c-grid__col--xs-9 {\n    width: 37.5%; }\n  .c-grid__col--xs-10 {\n    width: 41.66667%; }\n  .c-grid__col--xs-11 {\n    width: 45.83333%; }\n  .c-grid__col--xs-12 {\n    width: 50%; }\n  .c-grid__col--xs-13 {\n    width: 54.16667%; }\n  .c-grid__col--xs-14 {\n    width: 58.33333%; }\n  .c-grid__col--xs-15 {\n    width: 62.5%; }\n  .c-grid__col--xs-16 {\n    width: 66.66667%; }\n  .c-grid__col--xs-17 {\n    width: 70.83333%; }\n  .c-grid__col--xs-18 {\n    width: 75%; }\n  .c-grid__col--xs-19 {\n    width: 79.16667%; }\n  .c-grid__col--xs-20 {\n    width: 83.33333%; }\n  .c-grid__col--xs-21 {\n    width: 87.5%; }\n  .c-grid__col--xs-22 {\n    width: 91.66667%; }\n  .c-grid__col--xs-23 {\n    width: 95.83333%; }\n  .c-grid__col--xs-24 {\n    width: 100%; } }\n\n@media screen and (min-width: 769px) {\n  .c-grid__col--sm-1 {\n    width: 4.16667%; }\n  .c-grid__col--sm-2 {\n    width: 8.33333%; }\n  .c-grid__col--sm-3 {\n    width: 12.5%; }\n  .c-grid__col--sm-4 {\n    width: 16.66667%; }\n  .c-grid__col--sm-5 {\n    width: 20.83333%; }\n  .c-grid__col--sm-6 {\n    width: 25%; }\n  .c-grid__col--sm-7 {\n    width: 29.16667%; }\n  .c-grid__col--sm-8 {\n    width: 33.33333%; }\n  .c-grid__col--sm-9 {\n    width: 37.5%; }\n  .c-grid__col--sm-10 {\n    width: 41.66667%; }\n  .c-grid__col--sm-11 {\n    width: 45.83333%; }\n  .c-grid__col--sm-12 {\n    width: 50%; }\n  .c-grid__col--sm-13 {\n    width: 54.16667%; }\n  .c-grid__col--sm-14 {\n    width: 58.33333%; }\n  .c-grid__col--sm-15 {\n    width: 62.5%; }\n  .c-grid__col--sm-16 {\n    width: 66.66667%; }\n  .c-grid__col--sm-17 {\n    width: 70.83333%; }\n  .c-grid__col--sm-18 {\n    width: 75%; }\n  .c-grid__col--sm-19 {\n    width: 79.16667%; }\n  .c-grid__col--sm-20 {\n    width: 83.33333%; }\n  .c-grid__col--sm-21 {\n    width: 87.5%; }\n  .c-grid__col--sm-22 {\n    width: 91.66667%; }\n  .c-grid__col--sm-23 {\n    width: 95.83333%; }\n  .c-grid__col--sm-24 {\n    width: 100%; } }\n\n@media screen and (min-width: 1025px) {\n  .c-grid__col--md-1 {\n    width: 4.16667%; }\n  .c-grid__col--md-2 {\n    width: 8.33333%; }\n  .c-grid__col--md-3 {\n    width: 12.5%; }\n  .c-grid__col--md-4 {\n    width: 16.66667%; }\n  .c-grid__col--md-5 {\n    width: 20.83333%; }\n  .c-grid__col--md-6 {\n    width: 25%; }\n  .c-grid__col--md-7 {\n    width: 29.16667%; }\n  .c-grid__col--md-8 {\n    width: 33.33333%; }\n  .c-grid__col--md-9 {\n    width: 37.5%; }\n  .c-grid__col--md-10 {\n    width: 41.66667%; }\n  .c-grid__col--md-11 {\n    width: 45.83333%; }\n  .c-grid__col--md-12 {\n    width: 50%; }\n  .c-grid__col--md-13 {\n    width: 54.16667%; }\n  .c-grid__col--md-14 {\n    width: 58.33333%; }\n  .c-grid__col--md-15 {\n    width: 62.5%; }\n  .c-grid__col--md-16 {\n    width: 66.66667%; }\n  .c-grid__col--md-17 {\n    width: 70.83333%; }\n  .c-grid__col--md-18 {\n    width: 75%; }\n  .c-grid__col--md-19 {\n    width: 79.16667%; }\n  .c-grid__col--md-20 {\n    width: 83.33333%; }\n  .c-grid__col--md-21 {\n    width: 87.5%; }\n  .c-grid__col--md-22 {\n    width: 91.66667%; }\n  .c-grid__col--md-23 {\n    width: 95.83333%; }\n  .c-grid__col--md-24 {\n    width: 100%; } }\n\n@media screen and (min-width: 1282px) {\n  .c-grid__col--lg-1 {\n    width: 4.16667%; }\n  .c-grid__col--lg-2 {\n    width: 8.33333%; }\n  .c-grid__col--lg-3 {\n    width: 12.5%; }\n  .c-grid__col--lg-4 {\n    width: 16.66667%; }\n  .c-grid__col--lg-5 {\n    width: 20.83333%; }\n  .c-grid__col--lg-6 {\n    width: 25%; }\n  .c-grid__col--lg-7 {\n    width: 29.16667%; }\n  .c-grid__col--lg-8 {\n    width: 33.33333%; }\n  .c-grid__col--lg-9 {\n    width: 37.5%; }\n  .c-grid__col--lg-10 {\n    width: 41.66667%; }\n  .c-grid__col--lg-11 {\n    width: 45.83333%; }\n  .c-grid__col--lg-12 {\n    width: 50%; }\n  .c-grid__col--lg-13 {\n    width: 54.16667%; }\n  .c-grid__col--lg-14 {\n    width: 58.33333%; }\n  .c-grid__col--lg-15 {\n    width: 62.5%; }\n  .c-grid__col--lg-16 {\n    width: 66.66667%; }\n  .c-grid__col--lg-17 {\n    width: 70.83333%; }\n  .c-grid__col--lg-18 {\n    width: 75%; }\n  .c-grid__col--lg-19 {\n    width: 79.16667%; }\n  .c-grid__col--lg-20 {\n    width: 83.33333%; }\n  .c-grid__col--lg-21 {\n    width: 87.5%; }\n  .c-grid__col--lg-22 {\n    width: 91.66667%; }\n  .c-grid__col--lg-23 {\n    width: 95.83333%; }\n  .c-grid__col--lg-24 {\n    width: 100%; } }\n\n.c-grid__container-spaced {\n  margin-left: -7.5px;\n  margin-right: -7.5px; }\n  .c-grid__container-spaced > .c-grid__col {\n    margin-left: 7.5px;\n    margin-right: 7.5px; }\n  .c-grid__container-spaced > .c-grid__col--1 {\n    width: calc(4.16667% - 15px); }\n  .c-grid__container-spaced > .c-grid__col--2 {\n    width: calc(8.33333% - 15px); }\n  .c-grid__container-spaced > .c-grid__col--3 {\n    width: calc(12.5% - 15px); }\n  .c-grid__container-spaced > .c-grid__col--4 {\n    width: calc(16.66667% - 15px); }\n  .c-grid__container-spaced > .c-grid__col--5 {\n    width: calc(20.83333% - 15px); }\n  .c-grid__container-spaced > .c-grid__col--6 {\n    width: calc(25% - 15px); }\n  .c-grid__container-spaced > .c-grid__col--7 {\n    width: calc(29.16667% - 15px); }\n  .c-grid__container-spaced > .c-grid__col--8 {\n    width: calc(33.33333% - 15px); }\n  .c-grid__container-spaced > .c-grid__col--9 {\n    width: calc(37.5% - 15px); }\n  .c-grid__container-spaced > .c-grid__col--10 {\n    width: calc(41.66667% - 15px); }\n  .c-grid__container-spaced > .c-grid__col--11 {\n    width: calc(45.83333% - 15px); }\n  .c-grid__container-spaced > .c-grid__col--12 {\n    width: calc(50% - 15px); }\n  .c-grid__container-spaced > .c-grid__col--13 {\n    width: calc(54.16667% - 15px); }\n  .c-grid__container-spaced > .c-grid__col--14 {\n    width: calc(58.33333% - 15px); }\n  .c-grid__container-spaced > .c-grid__col--15 {\n    width: calc(62.5% - 15px); }\n  .c-grid__container-spaced > .c-grid__col--16 {\n    width: calc(66.66667% - 15px); }\n  .c-grid__container-spaced > .c-grid__col--17 {\n    width: calc(70.83333% - 15px); }\n  .c-grid__container-spaced > .c-grid__col--18 {\n    width: calc(75% - 15px); }\n  .c-grid__container-spaced > .c-grid__col--19 {\n    width: calc(79.16667% - 15px); }\n  .c-grid__container-spaced > .c-grid__col--20 {\n    width: calc(83.33333% - 15px); }\n  .c-grid__container-spaced > .c-grid__col--21 {\n    width: calc(87.5% - 15px); }\n  .c-grid__container-spaced > .c-grid__col--22 {\n    width: calc(91.66667% - 15px); }\n  .c-grid__container-spaced > .c-grid__col--23 {\n    width: calc(95.83333% - 15px); }\n  .c-grid__container-spaced > .c-grid__col--24 {\n    width: calc(100% - 15px); }\n  @media screen and (min-width: 581px) {\n    .c-grid__container-spaced > .c-grid__col--xs-1 {\n      width: calc(4.16667% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--xs-2 {\n      width: calc(8.33333% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--xs-3 {\n      width: calc(12.5% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--xs-4 {\n      width: calc(16.66667% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--xs-5 {\n      width: calc(20.83333% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--xs-6 {\n      width: calc(25% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--xs-7 {\n      width: calc(29.16667% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--xs-8 {\n      width: calc(33.33333% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--xs-9 {\n      width: calc(37.5% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--xs-10 {\n      width: calc(41.66667% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--xs-11 {\n      width: calc(45.83333% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--xs-12 {\n      width: calc(50% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--xs-13 {\n      width: calc(54.16667% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--xs-14 {\n      width: calc(58.33333% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--xs-15 {\n      width: calc(62.5% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--xs-16 {\n      width: calc(66.66667% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--xs-17 {\n      width: calc(70.83333% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--xs-18 {\n      width: calc(75% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--xs-19 {\n      width: calc(79.16667% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--xs-20 {\n      width: calc(83.33333% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--xs-21 {\n      width: calc(87.5% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--xs-22 {\n      width: calc(91.66667% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--xs-23 {\n      width: calc(95.83333% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--xs-24 {\n      width: calc(100% - 15px); } }\n  @media screen and (min-width: 769px) {\n    .c-grid__container-spaced > .c-grid__col--sm-1 {\n      width: calc(4.16667% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--sm-2 {\n      width: calc(8.33333% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--sm-3 {\n      width: calc(12.5% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--sm-4 {\n      width: calc(16.66667% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--sm-5 {\n      width: calc(20.83333% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--sm-6 {\n      width: calc(25% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--sm-7 {\n      width: calc(29.16667% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--sm-8 {\n      width: calc(33.33333% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--sm-9 {\n      width: calc(37.5% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--sm-10 {\n      width: calc(41.66667% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--sm-11 {\n      width: calc(45.83333% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--sm-12 {\n      width: calc(50% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--sm-13 {\n      width: calc(54.16667% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--sm-14 {\n      width: calc(58.33333% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--sm-15 {\n      width: calc(62.5% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--sm-16 {\n      width: calc(66.66667% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--sm-17 {\n      width: calc(70.83333% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--sm-18 {\n      width: calc(75% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--sm-19 {\n      width: calc(79.16667% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--sm-20 {\n      width: calc(83.33333% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--sm-21 {\n      width: calc(87.5% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--sm-22 {\n      width: calc(91.66667% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--sm-23 {\n      width: calc(95.83333% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--sm-24 {\n      width: calc(100% - 15px); } }\n  @media screen and (min-width: 1025px) {\n    .c-grid__container-spaced > .c-grid__col--md-1 {\n      width: calc(4.16667% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--md-2 {\n      width: calc(8.33333% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--md-3 {\n      width: calc(12.5% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--md-4 {\n      width: calc(16.66667% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--md-5 {\n      width: calc(20.83333% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--md-6 {\n      width: calc(25% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--md-7 {\n      width: calc(29.16667% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--md-8 {\n      width: calc(33.33333% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--md-9 {\n      width: calc(37.5% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--md-10 {\n      width: calc(41.66667% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--md-11 {\n      width: calc(45.83333% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--md-12 {\n      width: calc(50% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--md-13 {\n      width: calc(54.16667% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--md-14 {\n      width: calc(58.33333% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--md-15 {\n      width: calc(62.5% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--md-16 {\n      width: calc(66.66667% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--md-17 {\n      width: calc(70.83333% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--md-18 {\n      width: calc(75% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--md-19 {\n      width: calc(79.16667% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--md-20 {\n      width: calc(83.33333% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--md-21 {\n      width: calc(87.5% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--md-22 {\n      width: calc(91.66667% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--md-23 {\n      width: calc(95.83333% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--md-24 {\n      width: calc(100% - 15px); } }\n  @media screen and (min-width: 1282px) {\n    .c-grid__container-spaced > .c-grid__col--lg-1 {\n      width: calc(4.16667% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--lg-2 {\n      width: calc(8.33333% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--lg-3 {\n      width: calc(12.5% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--lg-4 {\n      width: calc(16.66667% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--lg-5 {\n      width: calc(20.83333% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--lg-6 {\n      width: calc(25% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--lg-7 {\n      width: calc(29.16667% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--lg-8 {\n      width: calc(33.33333% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--lg-9 {\n      width: calc(37.5% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--lg-10 {\n      width: calc(41.66667% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--lg-11 {\n      width: calc(45.83333% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--lg-12 {\n      width: calc(50% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--lg-13 {\n      width: calc(54.16667% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--lg-14 {\n      width: calc(58.33333% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--lg-15 {\n      width: calc(62.5% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--lg-16 {\n      width: calc(66.66667% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--lg-17 {\n      width: calc(70.83333% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--lg-18 {\n      width: calc(75% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--lg-19 {\n      width: calc(79.16667% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--lg-20 {\n      width: calc(83.33333% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--lg-21 {\n      width: calc(87.5% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--lg-22 {\n      width: calc(91.66667% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--lg-23 {\n      width: calc(95.83333% - 15px); }\n    .c-grid__container-spaced > .c-grid__col--lg-24 {\n      width: calc(100% - 15px); } }\n\n.c-section {\n  width: calc(100% - 200px);\n  min-height: calc(100vh - 50px);\n  margin-left: 200px;\n  padding: 15px;\n  transition: all 0.3s;\n  position: relative;\n  padding-top: 65px; }\n  .c-section--full {\n    width: 100%;\n    margin-left: 0; }\n\n.c-section__head {\n  border-bottom: solid 1px #d8dde7;\n  padding-bottom: 5px; }\n\n.c-section__head-title {\n  display: inline-block;\n  margin: 0;\n  font-size: 30px;\n  color: #353b48; }\n\n.c-section__head-breadcrumb {\n  padding-top: 13px;\n  float: right; }\n\n.c-section__head-breadcrumb-link {\n  font-size: 14px;\n  color: #353b48;\n  font-weight: bold;\n  text-decoration: none; }\n  .c-section__head-breadcrumb-link:after {\n    color: #a9b4ca;\n    content: ' - '; }\n  .c-section__head-breadcrumb-link:last-child:after {\n    display: none; }\n  .c-section__head-breadcrumb-link[href] {\n    color: #a9b4ca;\n    font-weight: normal; }\n    .c-section__head-breadcrumb-link[href]:hover {\n      color: #273c75; }\n      .c-section__head-breadcrumb-link[href]:hover:after {\n        color: #a9b4ca; }\n\n.c-section__content {\n  margin-top: 15px; }\n  .c-section__content--cols {\n    display: flex;\n    /* [1] */\n    flex-wrap: nowrap;\n    /* [1] */\n    overflow-x: auto;\n    /* [1] */\n    -webkit-overflow-scrolling: touch;\n    /* [4] */\n    -ms-overflow-style: -ms-autohiding-scrollbar;\n    /* [5] */ }\n\n.c-section__content-block {\n  margin-bottom: 15px; }\n  .c-section__content-block--col {\n    flex: 0 0 auto;\n    width: 325px;\n    margin-right: 15px; }\n    .c-section__content-block--col > .c-card .c-card__body {\n      height: calc(100vh - 200px); }\n\n.is-menu-closed .c-section {\n  width: 100%;\n  margin-left: 0; }\n\n@media (max-width: 768px) {\n  .c-section {\n    width: 100%;\n    margin-left: 0;\n    padding: 0;\n    padding-top: 50px; }\n    .c-section--full {\n      width: 100%;\n      margin-left: 0; }\n  .c-section__head {\n    padding-left: 15px;\n    padding-right: 15px;\n    padding-top: 15px; }\n  .c-section__head-title {\n    font-size: 24px; }\n  .c-section__head-breadcrumb {\n    padding-top: 0;\n    float: none; }\n  .c-section__head-breadcrumb-link {\n    font-size: 10px; }\n  .c-section__content {\n    margin-left: 0 !important;\n    margin-right: 0 !important; }\n  .c-section__content-block {\n    margin-left: 0 !important;\n    margin-right: 0 !important;\n    width: 100% !important; }\n    .c-section__content-block--col {\n      width: 100%; }\n      .c-section__content-block--col > .c-card .c-card__body {\n        overflow-y: auto !important; } }\n\n.c-header {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 50px;\n  background-color: #273c75;\n  z-index: 6;\n  padding: 0 15px;\n  border-bottom: solid 1px #d8dde7;\n  display: flex;\n  justify-content: space-between; }\n\n.c-header__logo {\n  color: #ffffff;\n  text-decoration: none;\n  height: 50px;\n  padding: 10px 0;\n  display: flex;\n  align-items: center;\n  width: auto; }\n\n.c-header__logo-title {\n  display: inline-block;\n  font-size: 20px;\n  line-height: 20px;\n  font-weight: normal;\n  text-transform: uppercase;\n  position: relative;\n  margin-left: 5px;\n  bottom: 3px; }\n\n.c-header__logo-img {\n  max-height: 100%; }\n\n.c-header__nav {\n  display: flex;\n  flex-direction: flex-end; }\n\n.c-header__nav-item {\n  position: relative; }\n\n.c-header__nav-item-action {\n  display: inline-block;\n  border: none;\n  background-color: transparent;\n  padding: 5px 15px;\n  color: #ffffff;\n  font-size: 14px;\n  height: 49px;\n  cursor: pointer;\n  transition: background-color 0.3s;\n  outline: 0;\n  text-transform: uppercase; }\n  .c-header__nav-item-action:hover, .c-header__nav-item-action:focus {\n    background-color: #213262;\n    color: #ffffff; }\n\n.c-header__nav-item-locale {\n  width: 25px;\n  height: 25px; }\n\n.c-header__nav-menu {\n  position: absolute;\n  top: 57px;\n  right: 0px;\n  width: 200px;\n  max-height: 60vh;\n  background-color: #ffffff;\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.1);\n  border-radius: 10px;\n  overflow: hidden;\n  transform: translateY(30px);\n  visibility: hidden;\n  overflow-y: auto;\n  opacity: 0;\n  transition: all 0.3s; }\n  .c-header__nav-menu.is-active {\n    transform: translateY(0);\n    visibility: visible;\n    opacity: 1; }\n  .c-header__nav-menu--large {\n    width: 400px; }\n  .c-header__nav-menu--locales {\n    text-align: right;\n    padding: 5px;\n    width: auto;\n    max-width: 200px;\n    display: flex;\n    flex-direction: row; }\n\n.c-header__nav-menu-locale {\n  display: inline-block;\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  background-color: #e8ebf1;\n  transition: all 0.3s ease;\n  border: solid 2px #e8ebf1;\n  margin: 0 5px; }\n  .c-header__nav-menu-locale img {\n    width: 100%; }\n  .c-header__nav-menu-locale--active {\n    background-color: #273c75;\n    border-color: #273c75; }\n  .c-header__nav-menu-locale:hover {\n    border-color: #273c75; }\n\n.c-header__nav-menu-list {\n  list-style: none;\n  margin: 0;\n  padding: 0; }\n\n.c-header__nav-menu-list-item {\n  width: 100%;\n  border-bottom: solid 1px #d8dde7; }\n  .c-header__nav-menu-list-item:last-child {\n    border-bottom: none; }\n\n.c-header__nav-menu-list-item-link {\n  display: block;\n  padding: 15px;\n  color: #353b48;\n  font-size: 14px;\n  cursor: pointer;\n  transition: background-color 0.3s;\n  text-decoration: none; }\n  .c-header__nav-menu-list-item-link:hover {\n    background-color: #e8ebf1; }\n\n@media (max-width: 768px) {\n  .c-header__nav-menu {\n    position: fixed;\n    width: calc(100% - 30px);\n    right: 15px;\n    max-height: calc(100% - 50px - 20px); } }\n\n.c-footer {\n  width: calc(100% - 200px);\n  height: 50px;\n  margin-left: 200px;\n  padding: 0 15px;\n  transition: all 0.3s; }\n  .c-footer--full {\n    width: 100%;\n    margin-left: 0; }\n\n.c-footer__content {\n  padding: 15px 0;\n  font-size: 12px;\n  color: #353b48;\n  border-top: solid 1px #d8dde7; }\n  .c-footer__content a {\n    color: #353b48; }\n\n.is-menu-closed .c-footer {\n  width: 100%;\n  margin-left: 0; }\n\n.is-primary .c-footer__content {\n  color: #ffffff; }\n  .is-primary .c-footer__content a {\n    color: #ffffff; }\n\n@media (max-width: 768px) {\n  .c-footer {\n    width: 100%;\n    margin-left: 0; }\n    .c-footer--full {\n      width: 100%;\n      margin-left: 0; } }\n\n.c-sidebar {\n  position: fixed;\n  top: 50px;\n  left: 0;\n  width: 200px;\n  height: calc(100% - 50px);\n  background-color: #ffffff;\n  z-index: 3;\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.05);\n  transition: all 0.3s;\n  overflow-y: auto; }\n\n.c-sidebar__list {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  margin-top: 15px; }\n\n.c-sidebar__list-item {\n  position: relative; }\n  .c-sidebar__list-item:before {\n    content: '';\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 5px;\n    height: 100%;\n    background-color: #c8cfde; }\n  .c-sidebar__list-item[data-disabled] {\n    pointer-events: none; }\n    .c-sidebar__list-item[data-disabled] .c-sidebar__list-link {\n      color: rgba(53, 59, 72, 0.4); }\n  .c-sidebar__list-item[data-active] i {\n    color: #ffffff; }\n  .c-sidebar__list-item[data-active]:before {\n    background-color: #273c75; }\n  .c-sidebar__list-item[data-active] .c-sidebar__list-link {\n    color: #ffffff;\n    background-color: #273c75;\n    border-bottom-color: #273c75; }\n  .c-sidebar__list-item:hover:before {\n    background-color: #273c75; }\n\n.c-sidebar__list-link {\n  display: block;\n  padding: 17px 15px;\n  border-bottom: solid 1px #d8dde7;\n  color: #353b48;\n  text-decoration: none;\n  font-size: 16px;\n  font-weight: normal;\n  transition: background-color 0.3s; }\n  .c-sidebar__list-link:hover {\n    background-color: #e8ebf1; }\n  .c-sidebar__list-link i {\n    width: 25px;\n    color: #a9b4ca;\n    text-align: center; }\n  .c-sidebar__list-link span {\n    display: inline-block;\n    margin-left: 5px; }\n\n.is-menu-closed .c-sidebar {\n  transform: translateX(-100%);\n  box-shadow: none; }\n\n@media (max-width: 768px) {\n  .c-sidebar {\n    width: 80%;\n    box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.1); } }\n\n.c-flash {\n  position: fixed;\n  top: 65px;\n  right: 0;\n  width: 300px;\n  z-index: 5; }\n\n.c-flash__message {\n  width: 100%;\n  background-color: #273c75;\n  color: #ffffff;\n  font-size: 14px;\n  text-align: left;\n  padding: 15px;\n  transition: all 0.3s;\n  transform: translateX(100%);\n  border-radius: 15px;\n  margin-bottom: 5px;\n  position: relative;\n  box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.05); }\n  .c-flash__message.is-active {\n    transform: translateX(-15px); }\n  .c-flash__message--green {\n    background-color: #44bd32; }\n    .c-flash__message--green .c-flash__message-close {\n      border-color: #44bd32; }\n  .c-flash__message--orange {\n    background-color: #c23616 !important; }\n    .c-flash__message--orange .c-flash__message-close {\n      border-color: #c23616; }\n  .c-flash__message--blue {\n    background-color: #0097e6; }\n    .c-flash__message--blue .c-flash__message-close {\n      border-color: #0097e6; }\n  .c-flash__message--yellow {\n    background-color: #e1b12c; }\n    .c-flash__message--yellow .c-flash__message-close {\n      border-color: #e1b12c; }\n\n.c-flash__message-close {\n  display: block;\n  width: 20px;\n  height: 20px;\n  position: absolute;\n  top: -5px;\n  left: -5px;\n  background-color: #ffffff;\n  border-radius: 50%;\n  border: solid 2px #273c75;\n  cursor: pointer; }\n  .c-flash__message-close:hover {\n    background-color: #f2f2f2; }\n  .c-flash__message-close:before, .c-flash__message-close:after {\n    content: '';\n    display: block;\n    width: 2px;\n    height: 10px;\n    background-color: #8998b7;\n    position: absolute;\n    top: calc(50% - 5px);\n    left: calc(50% - 1px); }\n  .c-flash__message-close:before {\n    transform: rotate(45deg); }\n  .c-flash__message-close:after {\n    transform: rotate(-45deg); }\n\n.c-card {\n  background-color: #ffffff;\n  border-radius: 10px;\n  overflow: hidden;\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.05);\n  transition: box-shadow 0.25s linear; }\n  .c-card--centerpage {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    width: 600px; }\n  .c-card--centerpage-large {\n    width: 900px; }\n  .c-card--unhidden {\n    overflow: visible; }\n  .c-card--hasnext {\n    margin-bottom: 15px; }\n  .c-card--viewported.is-fixed {\n    position: fixed;\n    top: 0;\n    left: 0;\n    z-index: 9999;\n    width: 100%;\n    height: 100vh;\n    border-radius: 0;\n    overflow: auto; }\n    .c-card--viewported.is-fixed .c-card__header {\n      border-radius: 0; }\n    .c-card--viewported.is-fixed .c-card__body--scrollable {\n      max-height: calc(100vh - 50px); }\n  .c-card:hover {\n    box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.05); }\n\n.c-card__header {\n  background-color: #ffffff;\n  color: #353b48;\n  border-bottom: solid 1px #d8dde7;\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px; }\n  .c-card__header:before, .c-card__header:after {\n    content: \" \";\n    display: table; }\n  .c-card__header:after {\n    clear: both; }\n\n.c-card__header-title {\n  display: inline-block;\n  font-size: 18px;\n  font-weight: bold;\n  padding: 15px; }\n\n.c-card__header-actions {\n  list-style: none;\n  margin: 0;\n  padding: 7px 15px;\n  float: right; }\n  .c-card__header-actions:before, .c-card__header-actions:after {\n    content: \" \";\n    display: table; }\n  .c-card__header-actions:after {\n    clear: both; }\n  .c-card__header-actions--full {\n    float: none;\n    width: 100%; }\n\n.c-card__header-action {\n  display: inline-block;\n  margin-right: 5px; }\n  .c-card__header-action--full {\n    display: block;\n    width: 100%; }\n  .c-card__header-action:last-child {\n    margin-right: 0; }\n  .c-card__header-action .c-button {\n    padding: 8px 20px; }\n  .c-card__header-action .c-input-action {\n    margin: 2px 0;\n    font-size: 14px; }\n    .c-card__header-action .c-input-action .c-input__field, .c-card__header-action .c-input-action .c-input-action__field {\n      padding: 7px 10px; }\n    .c-card__header-action .c-input-action .c-input-action__button {\n      padding: 7px 0; }\n\n.c-card__header-action-text {\n  font-size: 12px;\n  display: inline-block;\n  margin-top: 10px; }\n\n.c-card__body {\n  padding: 15px;\n  border-bottom-left-radius: 10px;\n  border-bottom-right-radius: 10px; }\n  .c-card__body--list {\n    padding: 0;\n    margin: 0;\n    list-style: none; }\n  .c-card__body--scrollable {\n    max-height: calc(100vh - 200px);\n    overflow-y: auto; }\n\n.c-card__body-list-item {\n  border-bottom: solid 1px #d8dde7;\n  color: #353b48; }\n  .c-card__body-list-item:last-child {\n    border-bottom: none; }\n  .c-card__body-list-item--padding {\n    padding: 15px; }\n  .c-card__body-list-item.is-active {\n    background-color: rgba(39, 60, 117, 0.1); }\n\n.c-card__body-list-item-link {\n  display: block;\n  padding: 15px;\n  color: #353b48;\n  text-decoration: none; }\n  .c-card__body-list-item-link:hover {\n    background-color: #e8ebf1;\n    text-decoration: none; }\n  .c-card__body-list-item-link.is-active {\n    background-color: rgba(39, 60, 117, 0.1); }\n\n.c-card__body-list-item-content {\n  display: inline-block;\n  padding-right: 90px; }\n\n.c-card__body-list-item-action {\n  position: absolute;\n  top: 15px;\n  right: 15px;\n  font-size: 14px;\n  color: #273c75; }\n\n@media (max-width: 1024px) {\n  .c-card--centerpage-large {\n    width: calc(100% - 30px); } }\n\n@media (max-width: 768px) {\n  .c-card {\n    background-color: #ffffff;\n    border-radius: 0;\n    overflow: hidden; }\n    .c-card--centerpage {\n      position: relative;\n      top: 0;\n      left: 0;\n      transform: none;\n      width: calc(100% - 30px);\n      margin: auto;\n      border-radius: 15px;\n      margin-top: 65px;\n      margin-bottom: 15px; }\n    .c-card--centerpage-large {\n      width: calc(100% - 30px); }\n  .c-card__header {\n    border-radius: 0; }\n  .c-card__header-title {\n    display: block;\n    text-align: center;\n    font-size: 20px; }\n  .c-card__header-actions {\n    text-align: center;\n    float: none;\n    padding-top: 0;\n    margin-top: -10px; }\n    .c-card__header-actions--full {\n      margin-top: 0;\n      padding-top: 7px; }\n  .c-card__header-actions--group {\n    display: flex; }\n  .c-card__header-action {\n    float: none;\n    width: 100%; }\n    .c-card__header-action .c-button {\n      display: block;\n      text-align: center;\n      width: 100%; }\n  .c-card__body {\n    border-bottom-left-radius: 0;\n    border-bottom-right-radius: 0; }\n    .c-card__body--scrollable {\n      max-height: none;\n      overflow-y: hidden; } }\n\n@media (max-width: 768px) {\n  .c-card--mobile-fixed-section {\n    margin: 0 !important; }\n  .c-card--mobile-fixed {\n    position: fixed;\n    top: 50px;\n    left: 0;\n    width: 100%;\n    height: calc(100% - 50px);\n    transform: translateX(100%);\n    transition: transform 0.3s;\n    overflow-y: auto;\n    z-index: 1; }\n    .c-card--mobile-fixed.is-open {\n      transform: translateX(0); }\n    .c-card--mobile-fixed .c-card__header-actions {\n      margin-top: 0;\n      padding-top: 7px; }\n    .c-card--mobile-fixed .c-card__body--scrollable {\n      max-height: none;\n      overflow-y: hidden; }\n  .c-card__header-title--mobile-fixed {\n    position: fixed;\n    bottom: 15px;\n    right: 15px;\n    background-color: #273c75;\n    color: #ffffff;\n    border-radius: 10px;\n    font-size: 12px;\n    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.1);\n    z-index: 2; } }\n\n@keyframes c-button-is-loading {\n  0% {\n    transform: translateX(-100%); }\n  100% {\n    transform: translateX(200%); } }\n\n.c-button {\n  display: inline-block;\n  padding: 10px 20px;\n  margin: 2px 0;\n  cursor: pointer;\n  border-radius: 5px;\n  font-size: 14px;\n  background-color: #273c75;\n  color: #ffffff;\n  text-decoration: none;\n  border: none;\n  transition: all 0.15s;\n  outline: 0;\n  position: relative; }\n  .c-button[disabled] {\n    background-color: rgba(53, 59, 72, 0.65); }\n    .c-button[disabled]:hover {\n      background-color: rgba(53, 59, 72, 0.65);\n      box-shadow: none; }\n  .c-button.is-loading {\n    color: rgba(255, 255, 255, 0.5);\n    overflow: hidden; }\n    .c-button.is-loading:before {\n      content: '';\n      display: block;\n      width: 70%;\n      height: 2px;\n      background-color: rgba(255, 255, 255, 0.8);\n      position: absolute;\n      bottom: 0;\n      left: 0;\n      animation: c-button-is-loading 1s infinite; }\n  .c-button:hover {\n    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05), 0 4px 10px rgba(39, 60, 117, 0.25);\n    background-color: #213262; }\n  .c-button:active, .c-button:focus {\n    background-color: #1a284f; }\n  .c-button--green {\n    background-color: #44bd32; }\n    .c-button--green:hover {\n      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05), 0 4px 10px rgba(68, 189, 50, 0.25);\n      background-color: #3da92d; }\n    .c-button--green:active, .c-button--green:focus {\n      background-color: #359527; }\n  .c-button--blue {\n    background-color: #0097e6; }\n    .c-button--blue:hover {\n      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05), 0 4px 10px rgba(0, 151, 230, 0.25);\n      background-color: #0086cd; }\n    .c-button--blue:active, .c-button--blue:focus {\n      background-color: #0076b3; }\n  .c-button--yellow {\n    background-color: #e1b12c; }\n    .c-button--yellow:hover {\n      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05), 0 4px 10px rgba(225, 177, 44, 0.25);\n      background-color: #d5a51e; }\n    .c-button--yellow:active, .c-button--yellow:focus {\n      background-color: #bf931b; }\n  .c-button--orange {\n    background-color: #c23616; }\n    .c-button--orange:hover {\n      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05), 0 4px 10px rgba(194, 54, 22, 0.25);\n      background-color: #ab3013; }\n    .c-button--orange:active, .c-button--orange:focus {\n      background-color: #942911; }\n  .c-button--black {\n    background-color: #353b48; }\n    .c-button--black:hover {\n      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05), 0 4px 10px rgba(53, 59, 72, 0.25);\n      background-color: #2a2f39; }\n    .c-button--black:active, .c-button--black:focus {\n      background-color: #1f232b; }\n  .c-button--cenere {\n    background-color: #e8ebf1;\n    color: #353b48; }\n    .c-button--cenere:hover {\n      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05), 0 4px 10px rgba(232, 235, 241, 0.25);\n      background-color: #d8dde7; }\n    .c-button--cenere:active, .c-button--cenere:focus {\n      background-color: #c8cfde; }\n  .c-button--transparent {\n    background-color: transparent;\n    color: #353b48; }\n    .c-button--transparent:hover {\n      background-color: transparent;\n      box-shadow: none;\n      text-decoration: underline; }\n    .c-button--transparent:active, .c-button--transparent:focus {\n      background-color: transparent;\n      box-shadow: none;\n      text-decoration: underline; }\n  .c-button--block {\n    display: block;\n    text-align: center; }\n\n@media (max-width: 768px) {\n  .c-button {\n    padding: 15px 20px; } }\n\n.c-form {\n  padding-bottom: 15px; }\n  .c-form:before, .c-form:after {\n    content: \" \";\n    display: table; }\n  .c-form:after {\n    clear: both; }\n\n.c-form__actions {\n  margin-bottom: -15px;\n  text-align: right; }\n  .c-form__actions .c-button {\n    margin-left: 15px; }\n    .c-form__actions .c-button:first-child {\n      margin-left: 0; }\n\n.c-form__title {\n  font-weight: bold;\n  font-size: 18px;\n  color: #353b48;\n  border-bottom: solid 1px #e8ebf1;\n  padding-bottom: 5px;\n  margin-bottom: 15px; }\n\n.c-input {\n  margin-bottom: 15px; }\n\n.c-input__label {\n  font-size: 14px;\n  color: #353b48;\n  display: block;\n  margin-bottom: 4px;\n  margin-left: 4px; }\n\n.c-input__label-subtitle {\n  font-size: 12px;\n  color: #a9b4ca;\n  margin-bottom: 4px;\n  margin-left: 4px;\n  display: block; }\n\n.c-input__field {\n  display: block;\n  border: solid 1px #c8cfde;\n  border-radius: 5px;\n  background-color: #ffffff;\n  color: #353b48;\n  padding: 10px;\n  outline: none;\n  width: 100%;\n  transition: all 0.15s;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none; }\n  .c-input__field:active, .c-input__field:focus {\n    border-color: #4264c0;\n    box-shadow: 0 2px 5px #c8cfde; }\n  .c-input__field[disabled] {\n    background-color: #fafafa; }\n    .c-input__field[disabled]:active, .c-input__field[disabled]:focus {\n      border-color: #c8cfde;\n      box-shadow: none; }\n  .c-input__field.is-error {\n    border-color: #c23616; }\n\ntextarea.c-input__field {\n  min-height: 100px; }\n\ninput[type=\"date\"].c-input__field {\n  padding: 7px 10px;\n  padding-top: 8px; }\n\n.c-input-action__field {\n  display: inline-block;\n  border: solid 1px #d8dde7;\n  border-right: none;\n  border-top-left-radius: 5px;\n  border-bottom-left-radius: 5px;\n  background-color: #ffffff;\n  color: #353b48;\n  padding: 10px;\n  outline: none;\n  width: calc(100% - 60px);\n  transition: all 0.15s; }\n  .c-input-action__field:active, .c-input-action__field:focus {\n    border-color: #4264c0;\n    box-shadow: 0 2px 5px #c8cfde; }\n  .c-input-action__field.is-error {\n    border-color: #c23616; }\n\n.c-input-action__button {\n  cursor: pointer;\n  display: inline-block;\n  border: solid 1px #273c75;\n  border-top-right-radius: 5px;\n  border-bottom-right-radius: 5px;\n  background-color: #273c75;\n  color: #ffffff;\n  padding: 10px 0;\n  outline: none;\n  width: 60px;\n  float: right;\n  transition: all 0.15s; }\n  .c-input-action__button:hover {\n    background-color: #213262; }\n  .c-input-action__button[disabled] {\n    background-color: #353b48;\n    border-color: #353b48; }\n    .c-input-action__button[disabled]:hover {\n      background-color: #353b48; }\n\n.c-input-checkbox {\n  position: relative;\n  margin-bottom: 15px; }\n\n.c-input-checkbox__label {\n  display: inline-block;\n  font-size: 14px;\n  color: #353b48;\n  padding-left: 25px;\n  cursor: pointer;\n  position: relative; }\n  .c-input-checkbox__label:before {\n    content: '';\n    display: inline-block;\n    height: 15px;\n    width: 15px;\n    border: solid 2px #d8dde7;\n    background-color: #ffffff;\n    position: absolute;\n    left: 0;\n    top: 0;\n    border-radius: 5px;\n    transition: all 0.3s ease; }\n  .c-input-checkbox__label:hover:before {\n    background-color: #d8dde7; }\n  .c-input-checkbox__label:after {\n    content: '';\n    display: inline-block;\n    height: 15px;\n    width: 15px;\n    background-color: #273c75;\n    position: absolute;\n    left: 2px;\n    top: 2px;\n    border-radius: 4px; }\n\n.c-input-checkbox__field {\n  position: absolute;\n  top: 0;\n  left: 0;\n  opacity: 0; }\n\n.c-input-checkbox .c-input-checkbox__field + .c-input-checkbox__label::after {\n  content: none; }\n\n.c-input-checkbox .c-input-checkbox__field:checked + .c-input-checkbox__label::after {\n  content: ''; }\n\n@media (max-width: 768px) {\n  .c-form__actions {\n    text-align: center; }\n    .c-form__actions .c-button {\n      display: block;\n      width: 100%;\n      margin-left: 0; } }\n\n.c-input-selector__head {\n  margin-bottom: 15px; }\n\n.c-input-selector__content {\n  border: solid 1px #c8cfde;\n  height: 200px;\n  overflow-y: auto;\n  margin: 0;\n  padding: 0;\n  list-style: none; }\n\n.choices.is-focused .choices__inner {\n  border-color: #4264c0;\n  box-shadow: 0 2px 5px #c8cfde; }\n\n.choices.is-disabled .choices__inner {\n  background-color: #fafafa; }\n\n.choices.is-disabled .choices__input {\n  background-color: #fafafa;\n  cursor: initial; }\n\n.choices .choices__inner {\n  background-color: #ffffff;\n  border-radius: 5px;\n  border-color: #c8cfde;\n  min-height: 40px;\n  padding-left: 10px;\n  padding-right: 10px;\n  padding-top: 7px;\n  padding-bottom: 2px; }\n\n.choices .choices__input {\n  background-color: #ffffff; }\n\n.choices .choices__list--dropdown {\n  border-radius: 5px;\n  border-color: #c8cfde;\n  top: calc(100% + 2px); }\n  .choices .choices__list--dropdown.is-active {\n    min-height: 150px; }\n  .choices .choices__list--dropdown .choices__list {\n    max-height: 150px; }\n\n.choices .choices__list--multiple .choices__item {\n  background-color: #273c75;\n  border-color: #273c75; }\n\n.choices .choices__list--multiple .choices__item.is-highlighted {\n  background-color: #273c75;\n  border-color: #273c75; }\n\n.c-message {\n  padding: 30px 15px; }\n  .c-message--bordered {\n    border: solid 1px #e8ebf1; }\n\n.c-message__title {\n  display: block;\n  text-align: center;\n  color: #353b48;\n  font-size: 30px;\n  margin-bottom: 15px; }\n\n.c-message__content {\n  display: block;\n  text-align: center;\n  color: #353b48;\n  font-size: 20px; }\n  .c-message__content--small {\n    max-width: 400px;\n    margin-left: auto;\n    margin-right: auto; }\n\n.c-modal {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 6;\n  visibility: hidden;\n  opacity: 0;\n  transition: all 0.3s; }\n  .c-modal.is-active {\n    visibility: visible;\n    opacity: 1; }\n    .c-modal.is-active .c-modal__box {\n      opacity: 1;\n      transform: translate(-50%, -50%); }\n\n.c-modal__overlay {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(53, 59, 72, 0.6); }\n\n.c-modal__box {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 600px;\n  transition: all 0.3s ease-out 0.1s;\n  opacity: 0;\n  transform: translate(-50%, 50%); }\n  .c-modal__box--large {\n    width: 900px; }\n  .c-modal__box > .c-card .c-card__body {\n    max-height: 70vh;\n    overflow-y: auto; }\n\n@media (max-width: 1024px) {\n  .c-modal__box--large {\n    width: calc(100% - 30px); } }\n\n@media (max-width: 768px) {\n  .c-modal {\n    opacity: 1; }\n    .c-modal.is-active .c-modal__box {\n      transform: translate(0); }\n  .c-modal__overlay {\n    display: none; }\n  .c-modal__box {\n    width: 100%;\n    top: 50px;\n    left: 0;\n    transform: translate(0, 100%);\n    padding: 0;\n    opacity: 1; }\n    .c-modal__box > .c-card {\n      height: calc(100vh - 50px);\n      overflow-y: auto; }\n      .c-modal__box > .c-card .c-card__body {\n        max-height: initial;\n        overflow-y: hidden; } }\n\n.c-table {\n  width: 100%;\n  border-collapse: collapse;\n  border: solid 1px #e8ebf1;\n  font-size: 14px; }\n  .c-table thead {\n    background-color: #f2f3f7; }\n  .c-table tr:nth-child(2n) {\n    background-color: #f8f9fb; }\n  .c-table th, .c-table td {\n    padding: 10px 15px;\n    border: solid 1px #e8ebf1;\n    text-align: left; }\n\n.c-table__actions {\n  text-align: center !important;\n  width: auto; }\n  .c-table__actions .c-button {\n    padding: 5px 10px; }\n\n.c-table__responsive {\n  overflow-y: auto; }\n\n@media (max-width: 768px) {\n  .c-table__col-not-imp {\n    display: none; } }\n\n.c-pagination .pagination {\n  padding-top: 15px;\n  text-align: center; }\n  .c-pagination .pagination a, .c-pagination .pagination .current {\n    border-radius: 15px;\n    display: inline-block;\n    padding: 5px 15px;\n    background-color: #e8ebf1;\n    text-decoration: none;\n    transition: all 0.3s ease;\n    text-transform: uppercase; }\n    .c-pagination .pagination a:hover, .c-pagination .pagination .current:hover {\n      background-color: #d8dde7; }\n\n.c-pagination .page.current {\n  background-color: #273c75;\n  color: #ffffff; }\n  .c-pagination .page.current:hover {\n    background-color: #273c75; }\n\n.c-tag {\n  display: inline-block;\n  background-color: #ffffff;\n  color: #273c75;\n  border: solid 1px #273c75;\n  padding: 0.4em;\n  border-radius: 5px;\n  text-decoration: none;\n  margin: 2px; }\n  .c-tag--green {\n    border-color: #44bd32;\n    color: #44bd32; }\n  .c-tag--blue {\n    border-color: #0097e6;\n    color: #0097e6; }\n  .c-tag--yellow {\n    border-color: #e1b12c;\n    color: #e1b12c; }\n  .c-tag--orange {\n    border-color: #c23616;\n    color: #c23616; }\n  .c-tag--black {\n    border-color: #353b48;\n    color: #353b48; }\n  .c-tag--cenere {\n    border-color: #e8ebf1;\n    color: #353b48; }\n  .c-tag--bold {\n    font-weight: bold; }\n\n.c-tile {\n  display: block;\n  background-color: #ffffff;\n  border-radius: 10px;\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.05);\n  transition: box-shadow 0.25s linear;\n  padding: 15px;\n  text-align: center;\n  text-decoration: none;\n  color: #353b48; }\n  .c-tile:hover {\n    box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.05);\n    color: #273c75; }\n\n.c-tile__label {\n  font-size: 18px;\n  font-weight: bold; }\n\n.c-tile__icon {\n  font-size: 45px;\n  margin-bottom: 15px; }\n\n@media (max-width: 768px) {\n  .c-tile {\n    margin: 0 15px; } }\n","@mixin clearfix {\n  &:before, &:after {\n    content: \" \";\n    display: table;\n  }\n  &:after {\n    clear: both;\n  }\n}\n\n@mixin isPrimaryBodyBg {\n  background: linear-gradient(270deg, $color_primary, $color_primary, $color_primary);\n  background-size: 600% 600%;\n  animation: BodyPrimaryBg 15s ease infinite;\n\n  @keyframes BodyPrimaryBg { \n    0%{background-position:0% 50%}\n    50%{background-position:100% 50%}\n    100%{background-position:0% 50%}\n  }\n}\n",".u-clearfix {\n  @include clearfix;\n}\n\n.u-float-right {\n  float: right !important;\n}\n\n.u-float-left {\n  float: left !important;\n}\n\n.u-mt-15 {\n  margin-top: 15px !important;\n}\n\n.u-mb-15 {\n  margin-bottom: 15px !important;\n}\n\n.u-mt-30 {\n  margin-top: 30px !important;\n}\n\n.u-mb-30 {\n  margin-bottom: 30px !important;\n}\n\n.u-only-sm {\n  display: none !important;\n}\n\n@media (max-width: $breakpoint_sm) {\n  .u-only-sm {\n    display: block !important;\n  }\n}\n","* {\n  box-sizing: border-box;\n}\n\nbody {\n  font-family: $font_default, sans-serif;\n  background-color: $color_cenere;\n  color: $color_black;\n}\n\nmain {\n  position: relative;\n  margin-top: $size_header_height;\n}\n\na {\n  color: $color_primary;\n}\n\nimg {\n  max-width: 100%;\n}\n\n","// Fonts\n// //////////////////////////////////////////\n\n@import url('https://fonts.googleapis.com/css?family=Alata');\n\n$font_default: 'Alata';\n\n// Breakpoints\n// //////////////////////////////////////////\n\n$breakpoint_xs: 580px;\n$breakpoint_sm: 768px;\n$breakpoint_md: 1024px;\n$breakpoint_lg: 1281px;\n\n// Colors\n// //////////////////////////////////////////\n\n$color_white: #ffffff;\n$color_black: #353b48;\n$color_cenere: #e8ebf1;\n$color_primary: #273c75;\n$color_blue: #0097e6;\n$color_green: #44bd32;\n$color_yellow: #e1b12c;\n$color_orange: #c23616;\n\n// Sizes\n// //////////////////////////////////////////\n\n$size_header_height: 50px;\n$size_sidebar_width: 200px;\n","// Configuration\n// *********************************************************************\n\n$grid: (\n  columns: 24,\n  space: 7.5px,\n  breakpoints: (\n    xs: 581px,\n    sm: 769px,\n    md: 1025px,\n    lg: 1282px\n  )\n);\n\n// Style\n// *********************************************************************\n\n.c-grid__container, .c-grid__container-spaced {\n  margin: auto;\n  box-sizing: border-box;\n  @include clearfix;\n}\n\n.c-grid__col {\n  float: left;\n  box-sizing: border-box;\n  width: 100%;\n}\n\n// Basic grid\n// *********************************************************************\n\n@for $i from 1 through map-get($grid, 'columns') {\n  $width: percentage(1 / (map-get($grid, 'columns') / $i));\n\n  .c-grid__col--#{$i} {\n    width: $width;\n  }\n}\n\n@each $name, $pixels in map-get($grid, 'breakpoints') {\n  @media screen and (min-width: $pixels) {\n    @for $i from 1 through map-get($grid, 'columns') {\n      $width: percentage(1 / (map-get($grid, 'columns') / $i));\n    \n      .c-grid__col--#{$name}-#{$i} {\n        width: $width;\n      }\n    }\n  }\n}\n\n// Spaced grid\n// *********************************************************************\n\n.c-grid__container-spaced {\n  margin-left: - map-get($grid, 'space');\n  margin-right:  - map-get($grid, 'space');\n\n  > .c-grid__col {\n    margin-left: map-get($grid, 'space');\n    margin-right: map-get($grid, 'space');\n  }\n\n  @for $i from 1 through map-get($grid, 'columns') {\n    $width: percentage(1 / (map-get($grid, 'columns') / $i));\n  \n    > .c-grid__col--#{$i} {\n      width: calc(#{$width} - #{map-get($grid, 'space') * 2});\n    }\n  }\n  \n  @each $name, $pixels in map-get($grid, 'breakpoints') {\n    @media screen and (min-width: $pixels) {\n      @for $i from 1 through map-get($grid, 'columns') {\n        $width: percentage(1 / (map-get($grid, 'columns') / $i));\n      \n        > .c-grid__col--#{$name}-#{$i} {\n          width: calc(#{$width} - #{map-get($grid, 'space') * 2});\n        }\n      }\n    }\n  }\n}",".c-section {\n  width: calc(100% - #{$size_sidebar_width});\n  min-height: calc(100vh - 50px);\n  margin-left: $size_sidebar_width;\n  padding: 15px;\n  transition: all 0.3s;\n  position: relative;\n  padding-top: 65px;\n\n  &--full {\n    width: 100%;\n    margin-left: 0;\n  }\n}\n\n.c-section__head {\n  border-bottom: solid 1px darken($color_cenere, 5%);\n  padding-bottom: 5px;\n}\n\n.c-section__head-title {\n  display: inline-block;\n  margin: 0;\n  font-size: 30px;\n  color: $color_black;\n}\n\n.c-section__head-breadcrumb {\n  padding-top: 13px;\n  float: right;\n}\n\n.c-section__head-breadcrumb-link {\n  font-size: 14px;\n  color: $color_black;\n  font-weight: bold;\n  text-decoration: none;\n\n  &:after {\n    color: darken($color_cenere, 20%);\n    content: ' - ';\n  }\n\n  &:last-child {\n    &:after { display: none; }\n  }\n\n  &[href] {\n    color: darken($color_cenere, 20%);\n    font-weight: normal;\n\n    &:hover {\n      color: $color_primary;\n\n      &:after {\n        color: darken($color_cenere, 20%);\n      }\n    }\n  }\n}\n\n.c-section__content {\n  margin-top: 15px;\n\n  &--cols {\n    display: flex; /* [1] */\n    flex-wrap: nowrap; /* [1] */\n    overflow-x: auto; /* [1] */\n    -webkit-overflow-scrolling: touch; /* [4] */\n    -ms-overflow-style: -ms-autohiding-scrollbar; /* [5] */\n  }\n}\n\n.c-section__content-block {\n  margin-bottom: 15px;\n\n  &--col {\n    flex: 0 0 auto;\n    width: 325px;\n    margin-right: 15px;\n\n    > .c-card {\n      .c-card__body {\n        height: calc(100vh - 200px);\n      }\n    }\n  }\n}\n\n.is-menu-closed {\n  .c-section {\n    width: 100%;\n    margin-left: 0;\n  }\n}\n\n@media (max-width: $breakpoint_sm) {\n  .c-section {\n    width: 100%;\n    margin-left: 0;\n    padding: 0;\n    padding-top: 50px;\n\n    &--full {\n      width: 100%;\n      margin-left: 0;\n    }\n  }\n\n  .c-section__head {\n    padding-left: 15px;\n    padding-right: 15px;\n    padding-top: 15px;\n  }\n\n  .c-section__head-title {\n    font-size: 24px;\n  }\n\n  .c-section__head-breadcrumb {\n    padding-top: 0;\n    float: none;\n  }\n\n  .c-section__head-breadcrumb-link {\n    font-size: 10px;\n  }\n\n  .c-section__content {\n    margin-left: 0 !important;\n    margin-right: 0 !important;\n  }\n\n  .c-section__content-block {\n    margin-left: 0 !important;\n    margin-right: 0 !important;\n    width: 100% !important;\n\n    &--col {\n      width: 100%;\n\n      > .c-card {\n        .c-card__body {\n          overflow-y: auto !important;\n        }\n      }\n    }\n  }\n}",".c-header {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: $size_header_height;\n  background-color: $color_primary;\n  z-index: 6;\n  padding: 0 15px;\n  border-bottom: solid 1px darken($color_cenere, 5%);\n  display: flex;\n  justify-content: space-between;\n}\n\n// Logo\n// //////////////////////////////////////////\n\n.c-header__logo {\n  color: $color_white;\n  text-decoration: none;\n  height: $size_header_height;\n  padding: 10px 0;\n  display: flex;\n  align-items: center;\n  width: auto;\n}\n\n.c-header__logo-title {\n  display: inline-block;\n  font-size: 20px;\n  line-height: 20px;\n  font-weight: normal;\n  text-transform: uppercase;\n  position: relative;\n  margin-left: 5px;\n  bottom: 3px;\n}\n\n.c-header__logo-img {\n  max-height: 100%;\n}\n\n// Nav\n// //////////////////////////////////////////\n\n.c-header__nav {\n  display: flex;\n  flex-direction: flex-end;\n}\n\n.c-header__nav-item {\n  position: relative;\n}\n\n.c-header__nav-item-action {\n  display: inline-block;\n  border: none;\n  background-color: transparent;\n  padding: 5px 15px;\n  color: $color_white;\n  font-size: 14px;\n  height: $size_header_height - 1px;\n  cursor: pointer;\n  transition: background-color 0.3s;\n  outline: 0;\n  text-transform: uppercase;\n\n  &:hover, &:focus {\n    background-color: darken($color_primary, 5%);\n    color: $color_white;\n  }\n}\n\n.c-header__nav-item-locale {\n  width: 25px;\n  height: 25px;\n}\n\n.c-header__nav-menu {\n  position: absolute;\n  top: $size_header_height + 7px;\n  right: 0px;\n  width: 200px;\n  max-height: 60vh;\n  background-color: $color_white;\n  box-shadow: 0 2px 5px 0 rgba(0,0,0,0.10);\n  border-radius: 10px;\n  overflow: hidden;\n  transform: translateY(30px);\n  visibility: hidden;\n  overflow-y: auto;\n  \n  opacity: 0;\n  transition: all 0.3s;\n\n  &.is-active {\n    transform: translateY(0);\n    visibility: visible;\n    opacity: 1\n  }\n  \n  &--large {\n    width: 400px;\n  }\n\n  &--locales {\n    text-align: right;\n    padding: 5px;\n    width: auto;\n    max-width: 200px;\n    display: flex;\n    flex-direction: row;\n  }\n}\n\n.c-header__nav-menu-locale {\n  display: inline-block;\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  background-color: $color_cenere;\n  transition: all 0.3s ease;\n  border: solid 2px $color_cenere;\n  margin: 0 5px;\n\n  img {\n    width: 100%;\n  }\n\n  &--active {\n    background-color: $color_primary;\n    border-color: $color_primary;\n  }\n\n  &:hover {\n    border-color: $color_primary;\n  }\n}\n\n.c-header__nav-menu-list {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n.c-header__nav-menu-list-item {\n  width: 100%;\n  border-bottom: solid 1px darken($color_cenere, 5%);\n\n  &:last-child {\n    border-bottom: none;\n  }\n}\n\n.c-header__nav-menu-list-item-link {\n  display: block;\n  padding: 15px;\n  color: $color_black;\n  font-size: 14px;\n  cursor: pointer;\n  transition: background-color 0.3s;\n  text-decoration: none;\n\n  &:hover {\n    background-color: $color_cenere;\n  }\n}\n\n@media (max-width: $breakpoint_sm) {\n  .c-header__nav-menu {\n    position: fixed;\n    width: calc(100% - 30px);\n    right: 15px;\n    max-height: calc(100% - #{$size_header_height} - 20px);\n  }\n}\n",".c-footer {\n  width: calc(100% - #{$size_sidebar_width});\n  height: 50px;\n  margin-left: $size_sidebar_width;\n  padding: 0 15px;\n  transition: all 0.3s;\n\n  &--full {\n    width: 100%;\n    margin-left: 0;\n  }\n}\n\n.c-footer__content {\n  padding: 15px 0;\n  font-size: 12px;\n  color: $color_black;\n  border-top: solid 1px darken($color_cenere, 5%);\n\n  a {\n    color: $color_black;\n  }\n}\n\n.is-menu-closed {\n  .c-footer {\n    width: 100%;\n    margin-left: 0;\n  }\n}\n\n.is-primary {\n  .c-footer__content {\n    color: $color_white;\n\n    a {\n      color: $color_white;\n    }\n  }\n}\n\n@media (max-width: $breakpoint_sm) {\n  .c-footer {\n    width: 100%;\n    margin-left: 0;\n\n    &--full {\n      width: 100%;\n      margin-left: 0;\n    }\n  }\n}",".c-sidebar {\n  position: fixed;\n  top: 50px;\n  left: 0;\n  width: $size_sidebar_width;\n  height: calc(100% - #{$size_header_height});\n  background-color: $color_white;\n  z-index: 3;\n  box-shadow: 0 2px 5px 0 rgba(0,0,0,0.05);\n  transition: all 0.3s;\n  overflow-y: auto;\n}\n\n.c-sidebar__list {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  margin-top: 15px;\n}\n\n.c-sidebar__list-item {\n  position: relative;\n\n  &:before {\n    content: '';\n    display: block;\n    position: absolute;\n    top: 0; left: 0;\n    width: 5px;\n    height: 100%;\n    background-color: darken($color_cenere, 10%);\n  }\n\n  &[data-disabled] {\n    pointer-events: none;\n    \n    .c-sidebar__list-link {\n      color: rgba($color_black, 0.4);\n    }\n  }\n\n  &[data-active] {\n    i {\n      color: $color_white;\n    }\n\n    &:before {\n      background-color: $color_primary;\n    }\n\n    .c-sidebar__list-link {\n      color: $color_white;\n      background-color: $color_primary;\n      border-bottom-color: $color_primary;\n    }\n  }\n\n  &:hover {\n    &:before {\n      background-color: $color_primary;\n    }\n  }\n}\n\n.c-sidebar__list-link {\n  display: block;\n  padding: 17px 15px;\n  border-bottom: solid 1px darken($color_cenere, 5%);\n  color: $color_black;\n  text-decoration: none;\n  font-size: 16px;\n  font-weight: normal;\n  transition: background-color 0.3s;\n\n  &:hover {\n    background-color: $color_cenere;\n  }\n\n  i {\n    width: 25px;\n    color: darken($color_cenere, 20%);\n    text-align: center;\n  }\n\n  span {\n    display: inline-block;\n    margin-left: 5px;\n  }\n}\n\n.is-menu-closed {\n  .c-sidebar {\n    transform: translateX(-100%);\n    box-shadow: none;\n  }\n}\n\n@media (max-width: $breakpoint_sm) {\n  .c-sidebar {\n    width: 80%;\n    box-shadow: 0 5px 15px 0 rgba(0,0,0,0.1);\n  }\n}\n",".c-flash {\n  position: fixed;\n  top: $size_header_height + 15px;\n  right: 0;\n  width: 300px;\n  z-index: 5;\n}\n\n.c-flash__message {\n  width: 100%;\n  background-color: $color_primary;\n  color: $color_white;\n  font-size: 14px;\n  text-align: left;\n  padding: 15px;\n  transition: all 0.3s;\n  transform: translateX(100%);\n  border-radius: 15px;\n  margin-bottom: 5px;\n  position: relative;\n  box-shadow: 0 5px 5px 0 rgba(0,0,0,0.05);\n\n  &.is-active {\n    transform: translateX(-15px);\n  }\n\n  &--green {\n    background-color: $color_green;\n\n    .c-flash__message-close { border-color: $color_green; }\n  }\n\n  &--orange {\n    background-color: $color_orange !important;\n\n    .c-flash__message-close { border-color: $color_orange; }\n  }\n\n  &--blue {\n    background-color: $color_blue;\n\n    .c-flash__message-close { border-color: $color_blue; }\n  }\n\n  &--yellow {\n    background-color: $color_yellow;\n\n    .c-flash__message-close { border-color: $color_yellow; }\n  }\n}\n\n.c-flash__message-close {\n  display: block;\n  width: 20px;\n  height: 20px;\n  position: absolute;\n  top: -5px;\n  left: -5px;\n  background-color: $color_white;\n  border-radius: 50%;\n  border: solid 2px $color_primary;\n  cursor: pointer;\n\n  &:hover {\n    background-color: darken($color_white, 5%);\n  }\n\n  &:before, &:after {\n    content: '';\n    display: block;\n    width: 2px;\n    height: 10px;\n    background-color: darken($color_cenere, 30%);\n    position: absolute;\n    top: calc(50% - 5px);\n    left: calc(50% - 1px);\n  }\n\n  &:before {\n    transform: rotate(45deg);\n  }\n\n  &:after {\n    transform: rotate(-45deg);\n  }\n}\n",".c-card {\n  background-color: $color_white;\n  border-radius: 10px;\n  overflow: hidden;\n  box-shadow: 0 2px 5px 0 rgba(0,0,0,0.05);\n  transition: box-shadow 0.25s linear;\n\n  &--centerpage { // center the card on the page\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    width: 600px;\n  }\n\n  &--centerpage-large { // center the card on the page with a large size\n    width: 900px;\n  }\n\n  &--unhidden { // permit overflow on card\n    overflow: visible;\n  }\n\n  &--hasnext { // add a margin for the next card\n    margin-bottom: 15px;\n  }\n\n  &--viewported { // add viewported support for viewport view\n    &.is-fixed {\n      position: fixed;\n      top: 0;\n      left: 0;\n      z-index: 9999;\n      width: 100%;\n      height: 100vh;\n      border-radius: 0;\n      overflow: auto;\n\n      .c-card__header {\n        border-radius: 0;\n      }\n\n      .c-card__body--scrollable {\n        max-height: calc(100vh - 50px);\n      }\n    }\n  }\n\n  &:hover {\n    box-shadow: 0 5px 5px 0 rgba(0,0,0,0.05);\n  }\n}\n\n.c-card__header {\n  background-color: $color_white;\n  color: $color_black;\n  border-bottom: solid 1px darken($color_cenere, 5%);\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n  @include clearfix;\n}\n\n.c-card__header-title {\n  display: inline-block;\n  font-size: 18px;\n  font-weight: bold;\n  padding: 15px;\n}\n\n.c-card__header-actions {\n  list-style: none;\n  margin: 0;\n  padding: 7px 15px;\n  float: right;\n  @include clearfix;\n\n  &--full {\n    float: none;\n    width: 100%;\n  }\n}\n\n.c-card__header-action {\n  display: inline-block;\n  margin-right: 5px;\n\n  &--full {\n    display: block;\n    width: 100%;\n  }\n\n  &:last-child {\n    margin-right: 0;\n  }\n\n  .c-button {\n    padding: 8px 20px;\n  }\n\n  .c-input-action {\n    margin: 2px 0;\n    font-size: 14px;\n\n    .c-input__field, .c-input-action__field {\n      padding: 7px 10px;\n    }\n    .c-input-action__button {\n      padding: 7px 0;\n    }\n  }\n}\n\n.c-card__header-action-text {\n  font-size: 12px;\n  display: inline-block;\n  margin-top: 10px;\n}\n\n.c-card__body {\n  padding: 15px;\n  border-bottom-left-radius: 10px;\n  border-bottom-right-radius: 10px;\n\n  &--list { // manage style for ul attribute\n    padding: 0;\n    margin: 0;\n    list-style: none;\n  }\n\n  &--scrollable { // permit scroll of content\n    max-height: calc(100vh - 200px);\n    overflow-y: auto;\n  }\n}\n\n.c-card__body-list-item {\n  border-bottom: solid 1px darken($color_cenere, 5%);\n  color: $color_black;\n\n  &:last-child {\n    border-bottom: none;\n  }\n\n  &--padding { // Use it when link or content is not present\n    padding: 15px;\n  }\n\n  &.is-active {\n    background-color: rgba($color_primary, 0.1);\n  }\n}\n\n.c-card__body-list-item-link {\n  display: block;\n  padding: 15px;\n  color: $color_black;\n  text-decoration: none;\n\n  &:hover {\n    background-color: $color_cenere;\n    text-decoration: none;\n  }\n\n  &.is-active {\n    background-color: rgba($color_primary, 0.1);\n  }\n}\n\n.c-card__body-list-item-content {\n  display: inline-block;\n  padding-right: 90px;\n}\n\n.c-card__body-list-item-action {\n  position: absolute;\n  top: 15px;\n  right: 15px;\n  font-size: 14px;\n  color: $color_primary;\n}\n\n@media (max-width: $breakpoint_md) {\n  .c-card {\n    &--centerpage-large {\n      width: calc(100% - 30px);\n    }\n  }\n}\n\n@media (max-width: $breakpoint_sm) {\n  .c-card {\n    background-color: $color_white;\n    border-radius: 0;\n    overflow: hidden;\n\n    &--centerpage {\n      position: relative;\n      top: 0;\n      left: 0;\n      transform: none;\n      width: calc(100% - 30px);\n      margin: auto;\n      border-radius: 15px;\n      margin-top: $size_header_height + 15px;\n      margin-bottom: 15px;\n    }\n\n    &--centerpage-large {\n      width: calc(100% - 30px);\n    }\n  }\n\n  .c-card__header {\n    border-radius: 0;\n  }\n\n  .c-card__header-title {\n    display: block;\n    text-align: center;\n    font-size: 20px;\n  }\n\n  .c-card__header-actions {\n    text-align: center;\n    float: none;\n    padding-top: 0;\n    margin-top: -10px;\n\n    &--full {\n      margin-top: 0;\n      padding-top: 7px;\n    }\n  }\n\n  .c-card__header-actions--group {\n    display: flex;\n  }\n\n  .c-card__header-action {\n    float: none;\n    width: 100%;\n\n    .c-button {\n      display: block;\n      text-align: center;\n      width: 100%;\n    }\n  }\n\n  .c-card__body {\n    border-bottom-left-radius: 0;\n    border-bottom-right-radius: 0;\n\n    &--scrollable {\n      max-height: none;\n      overflow-y: hidden;\n    }\n  }\n}\n\n@media (max-width: $breakpoint_sm) {\n  .c-card--mobile-fixed-section { // use it on sections that contains only a card mobile fixed\n    margin: 0 !important;\n  }\n  .c-card--mobile-fixed {\n    position: fixed;\n    top: $size_header_height;\n    left: 0;\n    width: 100%;\n    height: calc(100% - #{$size_header_height});\n    transform: translateX(100%);\n    transition: transform 0.3s;\n    overflow-y: auto;\n    z-index: 1;\n\n    &.is-open {\n      transform: translateX(0);\n    }\n\n    .c-card__header-actions {\n      margin-top: 0;\n      padding-top: 7px;\n    }\n\n    .c-card__body {\n      &--scrollable {\n        max-height: none;\n        overflow-y: hidden;\n      }\n    }\n  }\n\n  .c-card__header-title--mobile-fixed {\n    position: fixed;\n    bottom: 15px;\n    right: 15px;\n    background-color: $color_primary;\n    color: $color_white;\n    border-radius: 10px;\n    font-size: 12px;\n    box-shadow: 0 2px 5px 0 rgba(0,0,0,0.10);\n    z-index: 2;\n  }\n}","@keyframes c-button-is-loading {\n  0%   { transform: translateX(-100%); }\n  100% { transform: translateX(200%); }\n}\n\n.c-button {\n  display: inline-block;\n  padding: 10px 20px;\n  margin: 2px 0;\n  cursor: pointer;\n  border-radius: 5px;\n  font-size: 14px;\n  background-color: $color_primary;\n  color: $color_white;\n  text-decoration: none;\n  border: none;\n  transition: all 0.15s;\n  outline: 0;\n  position: relative;\n\n  &[disabled] {\n    background-color: rgba($color_black, 0.65);\n\n    &:hover {\n      background-color: rgba($color_black, 0.65);\n      box-shadow: none;\n    }\n  }\n\n  &.is-loading {\n    color: rgba($color_white, 0.5);\n    overflow: hidden;\n\n    &:before {\n      content: '';\n      display: block;\n      width: 70%;\n      height: 2px;\n      background-color: rgba($color_white, 0.8);\n      position: absolute;\n      bottom: 0;\n      left: 0;\n      animation: c-button-is-loading 1s infinite;\n    }\n  }\n\n  &:hover {\n    box-shadow: 0 5px 15px rgba(0,0,0,.05), 0 4px 10px rgba($color_primary,.25);\n    background-color: darken($color_primary, 5%);\n  }\n\n  &:active, &:focus {\n    background-color: darken($color_primary, 10%);\n  }\n\n  &--green {\n    background-color: $color_green;\n\n    &:hover {\n      box-shadow: 0 5px 15px rgba(0,0,0,.05), 0 4px 10px rgba($color_green,.25);\n      background-color: darken($color_green, 5%);\n    }\n  \n    &:active, &:focus {\n      background-color: darken($color_green, 10%);\n    }\n  }\n\n  &--blue {\n    background-color: $color_blue;\n\n    &:hover {\n      box-shadow: 0 5px 15px rgba(0,0,0,.05), 0 4px 10px rgba($color_blue,.25);\n      background-color: darken($color_blue, 5%);\n    }\n  \n    &:active, &:focus {\n      background-color: darken($color_blue, 10%);\n    }\n  }\n\n  &--yellow {\n    background-color: $color_yellow;\n\n    &:hover {\n      box-shadow: 0 5px 15px rgba(0,0,0,.05), 0 4px 10px rgba($color_yellow,.25);\n      background-color: darken($color_yellow, 5%);\n    }\n  \n    &:active, &:focus {\n      background-color: darken($color_yellow, 10%);\n    }\n  }\n\n  &--orange {\n    background-color: $color_orange;\n\n    &:hover {\n      box-shadow: 0 5px 15px rgba(0,0,0,.05), 0 4px 10px rgba($color_orange,.25);\n      background-color: darken($color_orange, 5%);\n    }\n  \n    &:active, &:focus {\n      background-color: darken($color_orange, 10%);\n    }\n  }\n\n  &--black {\n    background-color: $color_black;\n\n    &:hover {\n      box-shadow: 0 5px 15px rgba(0,0,0,.05), 0 4px 10px rgba($color_black,.25);\n      background-color: darken($color_black, 5%);\n    }\n  \n    &:active, &:focus {\n      background-color: darken($color_black, 10%);\n    }\n  }\n  \n  &--cenere {\n    background-color: $color_cenere;\n    color: $color_black;\n\n    &:hover {\n      box-shadow: 0 5px 15px rgba(0,0,0,.05), 0 4px 10px rgba($color_cenere,.25);\n      background-color: darken($color_cenere, 5%);\n    }\n  \n    &:active, &:focus {\n      background-color: darken($color_cenere, 10%);\n    }\n  }\n\n  &--transparent {\n    background-color: transparent;\n    color: $color_black;\n\n    &:hover {\n      background-color: transparent;\n      box-shadow: none;\n      text-decoration: underline;\n    }\n  \n    &:active, &:focus {\n      background-color: transparent;\n      box-shadow: none;\n      text-decoration: underline;\n    }\n  }\n\n  &--block {\n    display: block;\n    text-align: center;\n  }\n}\n\n@media (max-width: $breakpoint_sm) {\n\n  .c-button {\n    padding: 15px 20px;\n  }\n\n}","// Form\n// *********************************************************************\n\n.c-form {\n  padding-bottom: 15px;\n  @include clearfix;\n}\n\n.c-form__actions {\n  margin-bottom: -15px;\n  text-align: right;\n\n  .c-button {\n    margin-left: 15px;\n\n    &:first-child {\n      margin-left: 0;\n    }\n  }\n}\n\n.c-form__title {\n  font-weight: bold;\n  font-size: 18px;\n  color: $color_black;\n  border-bottom: solid 1px $color_cenere;\n  padding-bottom: 5px;\n  margin-bottom: 15px;\n}\n\n// Input normal\n// *********************************************************************\n\n.c-input {\n  margin-bottom: 15px;\n}\n\n.c-input__label {\n  font-size: 14px;\n  color: $color_black;\n  display: block;\n  margin-bottom: 4px;\n  margin-left: 4px;\n}\n\n.c-input__label-subtitle {\n  font-size: 12px;\n  color: darken($color_cenere, 20%);\n  margin-bottom: 4px;\n  margin-left: 4px; \n  display: block;\n}\n\n.c-input__field {\n  display: block;\n  border: solid 1px darken($color_cenere, 10%);\n  border-radius: 5px;\n  background-color: $color_white;\n  color: $color_black;\n  padding: 10px;\n  outline: none;\n  width: 100%;\n  transition: all 0.15s;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n\n  &:active, &:focus {\n    border-color: lighten($color_primary, 20%);\n    box-shadow: 0 2px 5px darken($color_cenere, 10%);\n  }\n\n  &[disabled] {\n    background-color: darken($color_white, 2%);\n\n    &:active, &:focus {\n      border-color: darken($color_cenere, 10%);\n      box-shadow: none;\n    }\n  }\n\n  &[required] {\n    // TODO\n  }\n\n  &.is-error {\n    border-color: $color_orange;\n  }\n}\n\ntextarea.c-input__field {\n  min-height: 100px;\n}\n\ninput[type=\"date\"].c-input__field {\n  padding: 7px 10px;\n  padding-top: 8px;\n}\n\n// Input action\n// *********************************************************************\n\n.c-input-action {\n\n}\n\n.c-input-action__field {\n  display: inline-block;\n  border: solid 1px darken($color_cenere, 5%);\n  border-right: none;\n  border-top-left-radius: 5px;\n  border-bottom-left-radius: 5px;\n  background-color: $color_white;\n  color: $color_black;\n  padding: 10px;\n  outline: none;\n  width: calc(100% - 60px);\n  transition: all 0.15s;\n\n  &:active, &:focus {\n    border-color: lighten($color_primary, 20%);\n    box-shadow: 0 2px 5px darken($color_cenere, 10%);\n  }\n\n  &.is-error {\n    border-color: $color_orange;\n  }\n}\n\n.c-input-action__button {\n  cursor: pointer;\n  display: inline-block;\n  border: solid 1px $color_primary;\n  border-top-right-radius: 5px;\n  border-bottom-right-radius: 5px;\n  background-color: $color_primary;\n  color: $color_white;\n  padding: 10px 0;\n  outline: none;\n  width: 60px;\n  float: right;\n  transition: all 0.15s;\n\n  &:hover {\n    background-color: darken($color_primary, 5%);\n  }\n\n  &[disabled] {\n    background-color: $color_black;\n    border-color: $color_black;\n\n    &:hover {\n      background-color: $color_black;\n    }\n  }\n}\n\n// Input checkbox\n// *********************************************************************\n\n.c-input-checkbox {\n  position: relative;\n  margin-bottom: 15px;\n}\n\n.c-input-checkbox__label {\n  display: inline-block;\n  font-size: 14px;\n  color: $color_black;\n  padding-left: 25px;\n  cursor: pointer;\n  position: relative;\n\n  &:before{\n    content: '';\n    display: inline-block;\n    height: 15px;\n    width: 15px; \n    border: solid 2px darken($color_cenere, 5%);\n    background-color: $color_white;\n    position: absolute; \n    left: 0;\n    top: 0;\n    border-radius: 5px;\n    transition: all 0.3s ease;\n  }\n\n  &:hover {\n    &:before{\n      background-color: darken($color_cenere, 5%);\n    }\n  }\n\n  &:after {\n    content: '';\n    display: inline-block;\n    height: 15px;\n    width: 15px;\n    background-color: $color_primary;\n    position: absolute;\n    left: 2px;\n    top: 2px;\n    border-radius: 4px;\n  }\n}\n\n.c-input-checkbox__field {\n  position: absolute;\n  top: 0; left: 0;\n  opacity: 0;\n}\n\n.c-input-checkbox .c-input-checkbox__field + .c-input-checkbox__label::after {\n  content: none;\n}\n\n.c-input-checkbox .c-input-checkbox__field:checked + .c-input-checkbox__label::after {\n  content: '';\n}\n\n.c-input-checkbox .c-input-checkbox__field[required] + .c-input-checkbox__label::before {\n  // Custom style for required checkbox\n}\n\n@media (max-width: $breakpoint_sm) {\n  .c-form__actions {\n    text-align: center;\n\n    .c-button {\n      display: block;\n      width: 100%;\n      margin-left: 0;\n    }\n  }\n}\n\n// Input selector\n// *********************************************************************\n\n.c-input-selector {\n\n}\n\n.c-input-selector__head {\n  margin-bottom: 15px;\n}\n\n.c-input-selector__content {\n  border: solid 1px darken($color_cenere, 10%);\n  height: 200px;\n  overflow-y: auto;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n\n// Dependency Choices\n// *********************************************************************\n\n.choices {\n  &.is-focused {\n    .choices__inner {\n      border-color: lighten($color_primary, 20%);\n      box-shadow: 0 2px 5px darken($color_cenere, 10%);\n    }\n  }\n\n  &.is-disabled {\n    .choices__inner {\n      background-color: darken($color_white, 2%);\n    }\n\n    .choices__input {\n      background-color: darken($color_white, 2%);\n      cursor: initial;\n    }\n  }\n\n  .choices__inner {\n    background-color: $color_white;\n    border-radius: 5px;\n    border-color: darken($color_cenere, 10%);\n    min-height: 40px;\n    padding-left: 10px;\n    padding-right: 10px;\n    padding-top: 7px;\n    padding-bottom: 2px;\n  }\n\n  .choices__input {\n    background-color: $color_white;\n  }\n\n  .choices__list--dropdown {\n    border-radius: 5px;\n    border-color: darken($color_cenere, 10%);\n    top: calc(100% + 2px);\n\n    &.is-active {\n      min-height: 150px;\n    }\n\n    .choices__list {\n      max-height: 150px;\n    }\n  }\n\n  .choices__list--multiple .choices__item {\n    background-color: $color_primary;\n    border-color: $color_primary;\n  }\n\n  .choices__list--multiple .choices__item.is-highlighted {\n      background-color: $color_primary;\n      border-color: $color_primary;\n  }\n}\n",".c-message {\n  padding: 30px 15px;\n\n  &--bordered {\n    border: solid 1px $color_cenere;\n  }\n}\n\n.c-message__title {\n  display: block;\n  text-align: center;\n  color: $color_black;\n  font-size: 30px;\n  margin-bottom: 15px;\n}\n\n.c-message__content {\n  display: block;\n  text-align: center;\n  color: $color_black;\n  font-size: 20px;\n\n  &--small {\n    max-width: 400px;\n    margin-left: auto;\n    margin-right: auto;\n  }\n}\n",".c-modal {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 6;\n  visibility: hidden;\n  opacity: 0;\n  transition: all 0.3s;\n\n  &.is-active {\n    visibility: visible;\n    opacity: 1;\n\n    .c-modal__box {\n      opacity: 1;\n      transform: translate(-50%, -50%);\n    }\n  }\n}\n\n.c-modal__overlay {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba($color_black, 0.6);\n}\n\n.c-modal__box {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 600px;\n  transition: all 0.3s ease-out 0.1s;\n  opacity: 0;\n  transform: translate(-50%, 50%);\n\n  &--large {\n    width: 900px;\n  }\n\n  > .c-card {\n    .c-card__body {\n      max-height: 70vh;\n      overflow-y: auto;\n    }\n  }\n}\n\n@media (max-width: $breakpoint_md) {\n  .c-modal__box {\n    &--large {\n      width: calc(100% - 30px);\n    }\n  }\n}\n\n@media (max-width: $breakpoint_sm) {\n  .c-modal {\n    opacity: 1;\n\n    &.is-active {\n      .c-modal__box {\n        transform: translate(0);\n      }\n    }\n  }\n\n  .c-modal__overlay {\n    display: none;\n  }\n\n  .c-modal__box {\n    width: 100%;\n    top: $size_header_height;\n    left: 0;\n    transform: translate(0, 100%);\n    padding: 0;\n    opacity: 1;\n\n    > .c-card {\n      height: calc(100vh - #{$size_header_height});\n      overflow-y: auto;\n\n      .c-card__body {\n        max-height: initial;\n        overflow-y: hidden;\n      }\n    }\n  }\n}",".c-table {\n  width: 100%;\n  border-collapse: collapse;\n  border: solid 1px $color_cenere;\n  font-size: 14px;\n\n  thead {\n    background-color: lighten($color_cenere, 3%);\n  }\n\n  tr {\n    &:nth-child(2n) {\n      background-color: lighten($color_cenere, 5%);\n    }\n  }\n\n  th, td {\n    padding: 10px 15px;\n    border: solid 1px $color_cenere;\n    text-align: left;\n  }\n}\n\n.c-table__actions {\n  text-align: center !important;\n  width: auto;\n\n  .c-button {\n    padding: 5px 10px;\n  }\n}\n\n.c-table__responsive {\n  overflow-y: auto;\n}\n\n@media (max-width: $breakpoint_sm) {\n  .c-table__col-not-imp {\n    display: none;\n  }\n}",".c-pagination {\n  .pagination {\n    padding-top: 15px;\n    text-align: center;\n\n    a, .current {\n      border-radius: 15px;\n      display: inline-block;\n      padding: 5px 15px;\n      background-color: $color_cenere;\n      text-decoration: none;\n      transition: all 0.3s ease;\n      text-transform: uppercase;\n\n      &:hover {\n        background-color: darken($color_cenere, 5%);\n      }\n    }\n  }\n\n  .page {\n    &.current {\n      background-color: $color_primary;\n      color: $color_white;\n\n      &:hover {\n        background-color: $color_primary;\n      }\n    }\n  }\n}",".c-tag {\n  display: inline-block;\n  background-color: $color_white;\n  color: $color_primary;\n  border: solid 1px $color_primary;\n  padding: 0.4em;\n  border-radius: 5px;\n  text-decoration: none;\n  margin: 2px;\n\n  &--green {\n    border-color: $color_green;\n    color: $color_green;\n  }\n\n  &--blue {\n    border-color: $color_blue;\n    color: $color_blue;\n  }\n\n  &--yellow {\n    border-color: $color_yellow;\n    color: $color_yellow;\n  }\n\n  &--orange {\n    border-color: $color_orange;\n    color: $color_orange;\n  }\n\n  &--black {\n    border-color: $color_black;\n    color: $color_black;\n  }\n\n  &--cenere {\n    border-color: $color_cenere;\n    color: $color_black;\n  }\n\n  &--bold {\n    font-weight: bold;\n  }\n}\n",".c-tile {\n  display: block;\n  background-color: $color_white;\n  border-radius: 10px;\n  box-shadow: 0 2px 5px 0 rgba(0,0,0,0.05);\n  transition: box-shadow 0.25s linear;\n  padding: 15px;\n  text-align: center;\n  text-decoration: none;\n  color: $color_black;\n\n  &:hover {\n    box-shadow: 0 5px 5px 0 rgba(0,0,0,0.05);\n    color: $color_primary;\n  }\n}\n\n.c-tile__label {\n  font-size: 18px;\n  font-weight: bold;\n}\n\n.c-tile__icon {\n  font-size: 45px;\n  margin-bottom: 15px;\n}\n\n@media (max-width: $breakpoint_sm) {\n  .c-tile {\n    margin: 0 15px;\n  }\n}"]}]);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names

module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], "{").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      // eslint-disable-next-line prefer-destructuring
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = modules[_i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = "(".concat(item[2], ") and (").concat(mediaQuery, ")");
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot).concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (url, needQuotes) {
  // eslint-disable-next-line no-underscore-dangle, no-param-reassign
  url = url.__esModule ? url["default"] : url;

  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, '\\n'), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stylesInDom = {};

var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

function listToStyles(list, options) {
  var styles = [];
  var newStyles = {};

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = {
      css: css,
      media: media,
      sourceMap: sourceMap
    };

    if (!newStyles[id]) {
      styles.push(newStyles[id] = {
        id: id,
        parts: [part]
      });
    } else {
      newStyles[id].parts.push(part);
    }
  }

  return styles;
}

function addStylesToDom(styles, options) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i];
    var domStyle = stylesInDom[item.id];
    var j = 0;

    if (domStyle) {
      domStyle.refs++;

      for (; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j]);
      }

      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j], options));
      }
    } else {
      var parts = [];

      for (; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j], options));
      }

      stylesInDom[item.id] = {
        id: item.id,
        refs: 1,
        parts: parts
      };
    }
  }
}

function insertStyleElement(options) {
  var style = document.createElement('style');

  if (typeof options.attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      options.attributes.nonce = nonce;
    }
  }

  Object.keys(options.attributes).forEach(function (key) {
    style.setAttribute(key, options.attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  var styles = listToStyles(list, options);
  addStylesToDom(styles, options);
  return function update(newList) {
    var mayRemove = [];

    for (var i = 0; i < styles.length; i++) {
      var item = styles[i];
      var domStyle = stylesInDom[item.id];

      if (domStyle) {
        domStyle.refs--;
        mayRemove.push(domStyle);
      }
    }

    if (newList) {
      var newStyles = listToStyles(newList, options);
      addStylesToDom(newStyles, options);
    }

    for (var _i = 0; _i < mayRemove.length; _i++) {
      var _domStyle = mayRemove[_i];

      if (_domStyle.refs === 0) {
        for (var j = 0; j < _domStyle.parts.length; j++) {
          _domStyle.parts[j]();
        }

        delete stylesInDom[_domStyle.id];
      }
    }
  };
};

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var g; // This works in non-strict mode

g = function () {
  return this;
}();

try {
  // This works if eval is allowed (see CSP)
  g = g || new Function("return this")();
} catch (e) {
  // This works if the window reference is available
  if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === "object") g = window;
} // g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}


module.exports = g;

/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (module) {
  if (!module.webpackPolyfill) {
    module.deprecate = function () {};

    module.paths = []; // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ })

/******/ });
//# sourceMappingURL=matilda-3a1fd9679284f50befc7.js.map