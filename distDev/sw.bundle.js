webpackJsonp([5],{

/***/ 133:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _serviceWorker = __webpack_require__(134);

var _serviceWorker2 = _interopRequireDefault(_serviceWorker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _serviceWorker2.default)();

/***/ }),

/***/ 134:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var serviceworkerInit = function serviceworkerInit() {
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', function () {
            navigator.serviceWorker.register('./service_worker.js').then(function (registration) {
                console.log('SW registered: ', registration);
            }).catch(function (registrationError) {
                console.log('SW registration failed: ', registrationError);
            });
        });
    }
};
exports.default = serviceworkerInit;

/***/ })

},[133]);
//# sourceMappingURL=sw.bundle.js.map