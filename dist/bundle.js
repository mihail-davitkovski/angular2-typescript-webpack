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
	var inventoryApp_1 = __webpack_require__(236);
	browser_1.bootstrap(inventoryApp_1.InventoryApp);


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
	var productsList_1 = __webpack_require__(237);
	/**
	 * Provides a `Product` object
	 */
	var Product = (function () {
	    function Product(sku, name, imageUrl, department, price) {
	        this.sku = sku;
	        this.name = name;
	        this.imageUrl = imageUrl;
	        this.department = department;
	        this.price = price;
	    }
	    return Product;
	}());
	exports.Product = Product;
	/**
	 * @InventoryApp: the top-level component for our application
	 */
	var InventoryApp = (function () {
	    function InventoryApp() {
	        this.products = [
	            new Product('MYSHOES', 'Black Running Shoes', '/resources/images/products/black-shoes.jpg', ['Men', 'Shoes', 'Running Shoes'], 109.99),
	            new Product('NEATOJACKET', 'Blue Jacket', '/resources/images/products/blue-jacket.jpg', ['Women', 'Apparel', 'Jackets & Vests'], 238.99),
	            new Product('NICEHAT', 'A Nice Black Hat', '/resources/images/products/black-hat.jpg', ['Men', 'Accessories', 'Hats'], 29.99)
	        ];
	    }
	    InventoryApp.prototype.productWasSelected = function (product) {
	        console.log('Product clicked: ', product);
	    };
	    InventoryApp = __decorate([
	        core_1.Component({
	            selector: 'inventory-app',
	            directives: [productsList_1.ProductsList],
	            template: "\n  <div class=\"inventory-app\">\n    <products-list \n      [productList]=\"products\" \n      (onProductSelected)=\"productWasSelected($event)\">\n    </products-list>\n  </div>\n  "
	        }), 
	        __metadata('design:paramtypes', [])
	    ], InventoryApp);
	    return InventoryApp;
	}());
	exports.InventoryApp = InventoryApp;


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
	var core_1 = __webpack_require__(26);
	var productRow_1 = __webpack_require__(238);
	/**
	 * @ProductsList: A component for rendering all ProductRows and
	 * storing the currently selected Product
	 */
	var ProductsList = (function () {
	    function ProductsList() {
	        this.onProductSelected = new core_1.EventEmitter();
	    }
	    ProductsList.prototype.clicked = function (product) {
	        this.currentProduct = product;
	        this.onProductSelected.emit(product);
	    };
	    ProductsList.prototype.isSelected = function (product) {
	        if (!product || !this.currentProduct) {
	            return false;
	        }
	        return product.sku === this.currentProduct.sku;
	    };
	    ProductsList = __decorate([
	        core_1.Component({
	            selector: 'products-list',
	            directives: [productRow_1.ProductRow],
	            inputs: ['productList'],
	            outputs: ['onProductSelected'],
	            template: "\n  <div class=\"ui items\">\n    <product-row \n      *ngFor=\"let myProduct of productList\" \n      [product]=\"myProduct\" \n      (click)='clicked(myProduct)'\n      [class.selected]=\"isSelected(myProduct)\">\n    </product-row>\n  </div>\n  "
	        }), 
	        __metadata('design:paramtypes', [])
	    ], ProductsList);
	    return ProductsList;
	}());
	exports.ProductsList = ProductsList;


/***/ },

/***/ 238:
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
	var productImage_1 = __webpack_require__(239);
	var productDepartment_1 = __webpack_require__(240);
	var priceDisplay_1 = __webpack_require__(241);
	/**
	 * @ProductRow: A component for the view of single Product
	 */
	var ProductRow = (function () {
	    function ProductRow() {
	    }
	    ProductRow = __decorate([
	        core_1.Component({
	            selector: 'product-row',
	            inputs: ['product'],
	            host: { 'class': 'item' },
	            directives: [productImage_1.ProductImage, productDepartment_1.ProductDepartment, priceDisplay_1.PriceDisplay],
	            template: "\n  <product-image [product]=\"product\"></product-image>\n  <div class=\"content\">\n    <div class=\"header\">{{ product.name }}</div>\n    <div class=\"meta\">\n      <div class=\"product-sku\">SKU #{{ product.sku }}</div>\n    </div>\n    <div class=\"description\">\n      <product-department [product]=\"product\"></product-department>\n    </div>\n  </div>\n  <price-display [price]=\"product.price\"></price-display>\n  "
	        }), 
	        __metadata('design:paramtypes', [])
	    ], ProductRow);
	    return ProductRow;
	}());
	exports.ProductRow = ProductRow;


/***/ },

/***/ 239:
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
	/**
	 * @ProductImage: A component to show a single Product's image
	 */
	var ProductImage = (function () {
	    function ProductImage() {
	    }
	    ProductImage = __decorate([
	        core_1.Component({
	            selector: 'product-image',
	            host: { class: 'ui small image' },
	            inputs: ['product'],
	            template: "\n  <img class=\"product-image\" [src]=\"product.imageUrl\">\n  "
	        }), 
	        __metadata('design:paramtypes', [])
	    ], ProductImage);
	    return ProductImage;
	}());
	exports.ProductImage = ProductImage;


/***/ },

/***/ 240:
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
	/**
	 * @ProductDepartment: A component to show the breadcrumbs to a
	 * Product's department
	 */
	var ProductDepartment = (function () {
	    function ProductDepartment() {
	    }
	    ProductDepartment = __decorate([
	        core_1.Component({
	            selector: 'product-department',
	            inputs: ['product'],
	            template: "\n  <div class=\"product-department\">\n    <span *ngFor=\"let name of product.department; let i=index\">\n      <a href=\"#\">{{ name }}</a>\n      <span>{{i < (product.department.length-1) ? '>' : ''}}</span>\n    </span>\n  </div>\n  "
	        }), 
	        __metadata('design:paramtypes', [])
	    ], ProductDepartment);
	    return ProductDepartment;
	}());
	exports.ProductDepartment = ProductDepartment;


/***/ },

/***/ 241:
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
	/**

	/**
	 * @PriceDisplay: A component to show the price of a
	 * Product
	 */
	var PriceDisplay = (function () {
	    function PriceDisplay() {
	    }
	    PriceDisplay = __decorate([
	        core_1.Component({
	            selector: 'price-display',
	            inputs: ['price'],
	            template: "\n  <div class=\"price-display\">${{ price }}</div>\n  "
	        }), 
	        __metadata('design:paramtypes', [])
	    ], PriceDisplay);
	    return PriceDisplay;
	}());
	exports.PriceDisplay = PriceDisplay;


/***/ }

});