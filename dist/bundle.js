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
	var demo_form_with_custom_validations_component_1 = __webpack_require__(237);
	browser_1.bootstrap(demo_form_with_custom_validations_component_1.DemoFormWithCustomValidationsComponent);


/***/ },

/***/ 237:
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
	/* tslint:disable:no-string-literal */
	var core_1 = __webpack_require__(26);
	var common_1 = __webpack_require__(95);
	/**
	 * Our custom validator
	 *
	 * A validator:
	 * - Takes a `Control` as it's input and
	 * - Returns a `StringMap<string, boolean>` where the key is "error code" and
	 *   the value is `true` if it fails
	 */
	function skuValidator(control) {
	    if (!control.value.match(/^123/)) {
	        return { invalidSku: true };
	    }
	}
	var DemoFormWithCustomValidationsComponent = (function () {
	    function DemoFormWithCustomValidationsComponent(fb) {
	        this.myForm = fb.group({
	            'sku': ['', common_1.Validators.compose([
	                    common_1.Validators.required, skuValidator])]
	        });
	        this.sku = this.myForm.controls['sku'];
	    }
	    DemoFormWithCustomValidationsComponent.prototype.onSubmit = function (value) {
	        console.log('you submitted value: ', value);
	    };
	    DemoFormWithCustomValidationsComponent = __decorate([
	        core_1.Component({
	            selector: 'content',
	            directives: [common_1.FORM_DIRECTIVES],
	            template: "\n  <div class=\"ui raised segment\">\n    <h2 class=\"ui header\">Demo Form: with custom validations</h2>\n    <form [ngFormModel]=\"myForm\" \n          (ngSubmit)=\"onSubmit(myForm.value)\"\n          class=\"ui form\">\n\n      <div class=\"field\"\n          [class.error]=\"!sku.valid && sku.touched\">\n        <label for=\"skuInput\">SKU</label>\n        <input type=\"text\" \n               id=\"skuInput\" \n               placeholder=\"SKU\"\n               [ngFormControl]=\"sku\">\n         <div *ngIf=\"!sku.valid\" \n           class=\"ui error message\">SKU is invalid</div>\n         <div *ngIf=\"sku.hasError('required')\"\n           class=\"ui error message\">SKU is required</div>\n         <div *ngIf=\"sku.hasError('invalidSku')\"\n           class=\"ui error message\">SKU must begin with <tt>123</tt></div>\n      </div>\n\n      <div *ngIf=\"!myForm.valid\"\n        class=\"ui error message\">Form is invalid</div>\n      <button type=\"submit\" class=\"ui button\">Submit</button>\n    </form>\n  </div>\n  "
	        }), 
	        __metadata('design:paramtypes', [common_1.FormBuilder])
	    ], DemoFormWithCustomValidationsComponent);
	    return DemoFormWithCustomValidationsComponent;
	}());
	exports.DemoFormWithCustomValidationsComponent = DemoFormWithCustomValidationsComponent;


/***/ }

});