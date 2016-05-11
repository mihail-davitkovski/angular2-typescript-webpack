import { enableProdMode, Component } from "angular2/core";

import {Product} from "./inventoryApp";

import {ProductImage} from "./productImage";

import {ProductDepartment} from "./productDepartment";

import {PriceDisplay} from "./priceDisplay";

/**
 * @ProductRow: A component for the view of single Product
 */
@Component({
  selector: 'product-row',
  inputs: ['product'],
  host: {'class': 'item'},
  directives: [ProductImage, ProductDepartment, PriceDisplay],
  template: `
  <product-image [product]="product"></product-image>
  <div class="content">
    <div class="header">{{ product.name }}</div>
    <div class="meta">
      <div class="product-sku">SKU #{{ product.sku }}</div>
    </div>
    <div class="description">
      <product-department [product]="product"></product-department>
    </div>
  </div>
  <price-display [price]="product.price"></price-display>
  `
})
export class ProductRow {
  product: Product;
}