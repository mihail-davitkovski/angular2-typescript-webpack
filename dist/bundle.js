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
	            template: "\n  <div class=\"ui items\">\n    <product-row \n      *ngFor=\"#myProduct of productList\" \n      [product]=\"myProduct\" \n      (click)='clicked(myProduct)'\n      [class.selected]=\"isSelected(myProduct)\">\n    </product-row>\n  </div>\n  "
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
	            //directives: [ProductImage, ProductDepartment, PriceDisplay],
	            template: "\n  <product-image [product]=\"product\"></product-image>\n  <div class=\"content\">\n    <div class=\"header\">{{ product.name }}</div>\n    <div class=\"meta\">\n      <div class=\"product-sku\">SKU #{{ product.sku }}</div>\n    </div>\n    <div class=\"description\">\n      <product-department [product]=\"product\"></product-department>\n    </div>\n  </div>\n  <price-display [price]=\"product.price\"></price-display>\n  "
	        }), 
	        __metadata('design:paramtypes', [])
	    ], ProductRow);
	    return ProductRow;
	}());
	exports.ProductRow = ProductRow;


/***/ }

});