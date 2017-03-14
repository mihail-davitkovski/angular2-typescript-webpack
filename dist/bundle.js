webpackJsonp([0],{

/***/ 268:
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var product_model_1 = __webpack_require__(399);
/**
 * @InventoryApp: the top-level component for our application
 */
var InventoryBoxComponent = (function () {
    function InventoryBoxComponent() {
        this.products = [
            new product_model_1.Product('MYSHOES', 'Black Running Shoes', '/resources/images/products/black-shoes.jpg', ['Men', 'Shoes', 'Running Shoes'], 109.99),
            new product_model_1.Product('NEATOJACKET', 'Blue Jacket', '/resources/images/products/blue-jacket.jpg', ['Women', 'Apparel', 'Jackets & Vests'], 238.99),
            new product_model_1.Product('NICEHAT', 'A Nice Black Hat', '/resources/images/products/black-hat.jpg', ['Men', 'Accessories', 'Hats'], 29.99)
        ];
    }
    InventoryBoxComponent.prototype.productWasSelected = function (product) {
        console.log('Product clicked: ', product);
    };
    return InventoryBoxComponent;
}());
InventoryBoxComponent = __decorate([
    core_1.Component({
        template: "\n  <div class=\"inventory-app\">\n    <products-list \n      [productList]=\"products\" \n      (onProductSelected)=\"productWasSelected($event)\">\n    </products-list>\n  </div>\n  "
    }),
    __metadata("design:paramtypes", [])
], InventoryBoxComponent);
exports.InventoryBoxComponent = InventoryBoxComponent;


/***/ }),

/***/ 270:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var app_module_1 = __webpack_require__(396);
var platform_browser_dynamic_1 = __webpack_require__(169);
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);


/***/ }),

/***/ 395:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'main-content',
        template: "<router-outlet></router-outlet>"
    })
], AppComponent);
exports.AppComponent = AppComponent;


/***/ }),

/***/ 396:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var platform_browser_1 = __webpack_require__(52);
var app_routing_1 = __webpack_require__(397);
var app_component_1 = __webpack_require__(395);
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            //InventoryAppModule,
            app_routing_1.AppRoutingModule
        ],
        declarations: [
            app_component_1.AppComponent
        ],
        providers: [],
        //this is only set by the root module
        bootstrap: [app_component_1.AppComponent],
    })
], AppModule);
exports.AppModule = AppModule;


/***/ }),

/***/ 397:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var router_1 = __webpack_require__(170);
var inventory_module_1 = __webpack_require__(398);
var inventory_box_component_1 = __webpack_require__(268);
var routes = [
    { path: '', pathMatch: 'full', redirectTo: 'inventory' },
    { path: 'inventory', component: inventory_box_component_1.InventoryBoxComponent }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forRoot(routes), inventory_module_1.InventoryAppModule],
        exports: [router_1.RouterModule],
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
exports.routingComponents = [inventory_box_component_1.InventoryBoxComponent];


/***/ }),

/***/ 398:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
var platform_browser_1 = __webpack_require__(52);
var inventory_box_component_1 = __webpack_require__(268);
var products_list_component_1 = __webpack_require__(404);
var price_display_component_1 = __webpack_require__(400);
var product_image_component_1 = __webpack_require__(402);
var product_department_component_1 = __webpack_require__(401);
var product_row_component_1 = __webpack_require__(403);
var InventoryAppModule = (function () {
    function InventoryAppModule() {
    }
    return InventoryAppModule;
}());
InventoryAppModule = __decorate([
    core_1.NgModule({
        declarations: [
            inventory_box_component_1.InventoryBoxComponent,
            product_image_component_1.ProductImageComponent,
            product_department_component_1.ProductDepartmentComponent,
            price_display_component_1.PriceDisplayComponent,
            product_row_component_1.ProductRowComponent,
            products_list_component_1.ProductsListComponent
        ],
        imports: [platform_browser_1.BrowserModule],
    })
], InventoryAppModule);
exports.InventoryAppModule = InventoryAppModule;


/***/ }),

/***/ 399:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
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


/***/ }),

/***/ 400:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
/**

/**
 * @PriceDisplay: A component to show the price of a
 * Product
 */
var PriceDisplayComponent = (function () {
    function PriceDisplayComponent() {
    }
    return PriceDisplayComponent;
}());
PriceDisplayComponent = __decorate([
    core_1.Component({
        selector: 'price-display',
        inputs: ['price'],
        template: "\n  <div class=\"price-display\">${{ price }}</div>\n  "
    })
], PriceDisplayComponent);
exports.PriceDisplayComponent = PriceDisplayComponent;


/***/ }),

/***/ 401:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
/**
 * @ProductDepartment: A component to show the breadcrumbs to a
 * Product's department
 */
var ProductDepartmentComponent = (function () {
    function ProductDepartmentComponent() {
    }
    return ProductDepartmentComponent;
}());
ProductDepartmentComponent = __decorate([
    core_1.Component({
        selector: 'product-department',
        inputs: ['product'],
        template: "\n  <div class=\"product-department\">\n    <span *ngFor=\"let name of product.department; let i=index\">\n      <a href=\"#\">{{ name }}</a>\n      <span>{{i < (product.department.length-1) ? '>' : ''}}</span>\n    </span>\n  </div>\n  "
    })
], ProductDepartmentComponent);
exports.ProductDepartmentComponent = ProductDepartmentComponent;


/***/ }),

/***/ 402:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
/**
 * @ProductImage: A component to show a single Product's image
 */
var ProductImageComponent = (function () {
    function ProductImageComponent() {
    }
    return ProductImageComponent;
}());
ProductImageComponent = __decorate([
    core_1.Component({
        selector: 'product-image',
        host: { class: 'ui small image' },
        inputs: ['product'],
        template: "\n  <img class=\"product-image\" [src]=\"product.imageUrl\">\n  "
    })
], ProductImageComponent);
exports.ProductImageComponent = ProductImageComponent;


/***/ }),

/***/ 403:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
/**
 * @ProductRow: A component for the view of single Product
 */
var ProductRowComponent = (function () {
    function ProductRowComponent() {
    }
    return ProductRowComponent;
}());
ProductRowComponent = __decorate([
    core_1.Component({
        selector: 'product-row',
        inputs: ['product'],
        host: { 'class': 'item' },
        template: "\n  <product-image [product]=\"product\"></product-image>\n  <div class=\"content\">\n    <div class=\"header\">{{ product.name }}</div>\n    <div class=\"meta\">\n      <div class=\"product-sku\">SKU #{{ product.sku }}</div>\n    </div>\n    <div class=\"description\">\n      <product-department [product]=\"product\"></product-department>\n    </div>\n  </div>\n  <price-display [price]=\"product.price\"></price-display>\n  "
    })
], ProductRowComponent);
exports.ProductRowComponent = ProductRowComponent;


/***/ }),

/***/ 404:
/***/ (function(module, exports, __webpack_require__) {

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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(0);
/**
 * @ProductsList: A component for rendering all ProductRows and
 * storing the currently selected Product
 */
var ProductsListComponent = (function () {
    function ProductsListComponent() {
        this.onProductSelected = new core_1.EventEmitter();
    }
    ProductsListComponent.prototype.clicked = function (product) {
        this.currentProduct = product;
        this.onProductSelected.emit(product);
    };
    ProductsListComponent.prototype.isSelected = function (product) {
        if (!product || !this.currentProduct) {
            return false;
        }
        return product.sku === this.currentProduct.sku;
    };
    return ProductsListComponent;
}());
ProductsListComponent = __decorate([
    core_1.Component({
        selector: 'products-list',
        inputs: ['productList'],
        outputs: ['onProductSelected'],
        template: "\n  <div class=\"ui items\">\n    <product-row \n      *ngFor=\"let myProduct of productList\" \n      [product]=\"myProduct\" \n      (click)='clicked(myProduct)'\n      [class.selected]=\"isSelected(myProduct)\">\n    </product-row>\n  </div>\n  "
    }),
    __metadata("design:paramtypes", [])
], ProductsListComponent);
exports.ProductsListComponent = ProductsListComponent;


/***/ }),

/***/ 405:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(270);


/***/ })

},[405]);