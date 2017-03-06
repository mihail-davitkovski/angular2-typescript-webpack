
import { enableProdMode, Component } from "@angular/core";

import { ProductsListComponent } from "./products-list.component";

import { Product } from "./model/product.model";
/**
 * @InventoryApp: the top-level component for our application
 */
@Component({
  selector: 'content',
  template: `
  <div class="inventory-app">
    <products-list 
      [productList]="products" 
      (onProductSelected)="productWasSelected($event)">
    </products-list>
  </div>
  `
})
export class InventoryBoxComponent {
  products: Product[];

  constructor() {
    this.products = [
      new Product(
        'MYSHOES', 'Black Running Shoes',
        '/resources/images/products/black-shoes.jpg',
        ['Men', 'Shoes', 'Running Shoes'],
        109.99),
      new Product(
        'NEATOJACKET', 'Blue Jacket',
        '/resources/images/products/blue-jacket.jpg',
        ['Women', 'Apparel', 'Jackets & Vests'],
        238.99),
      new Product(
        'NICEHAT', 'A Nice Black Hat',
        '/resources/images/products/black-hat.jpg',
        ['Men', 'Accessories', 'Hats'],
        29.99)
      ];
  }

  productWasSelected(product: Product): void {
    console.log('Product clicked: ', product);
  }
}