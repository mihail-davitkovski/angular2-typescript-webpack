webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },

/***/ 1:
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="./node_modules/angular2/typings/browser.d.ts" />
	"use strict";
	var browser_1 = __webpack_require__(2);
	var hello_1 = __webpack_require__(236);
	browser_1.bootstrap(hello_1.HelloWorld);


/***/ },

/***/ 236:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(26);
	var HelloWorld = (function () {
	    function HelloWorld() {
	        this.name = 'Mihail Davitkovski';
	    }
	    HelloWorld = __decorate([
	        core_1.Component({
	            selector: 'hello-world',
	            template: "\n      <div>\n        {{name}}\n      </div>"
	        }), 
	        __metadata('design:paramtypes', [])
	    ], HelloWorld);
	    return HelloWorld;
	}());
	exports.HelloWorld = HelloWorld;


/***/ }

});