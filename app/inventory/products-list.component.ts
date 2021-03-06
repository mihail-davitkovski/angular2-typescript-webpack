import { enableProdMode, Component, EventEmitter } from "@angular/core";
import { Router } from '@angular/router'; 
import {Product} from "./model/product.model";

import { ProductRowComponent } from "./product-row.component";

/**
 * @ProductsList: A component for rendering all ProductRows and 
 * storing the currently selected Product
 */
@Component({
  selector: 'products-list',
  inputs: ['productList'],
  outputs: ['onProductSelected'],
  template: `
  <div class="ui items">
    <product-row 
      *ngFor="let myProduct of productList" 
      [product]="myProduct" 
      (click)='clicked(myProduct)'
      [class.selected]="isSelected(myProduct)">
    </product-row>
  </div>
  `
})
export class ProductsListComponent {
  /**
   * @input productList - the Product[] passed to us
   */
  productList: Product[];

  /**
   * @ouput onProductSelected - outputs the current 
   *          Product whenever a new Product is selected
   */
  onProductSelected: EventEmitter<Product>;

  /**
   * @property currentProduct - local state containing 
   *             the currently selected `Product`
   */
  currentProduct: Product;

  constructor(private router: Router) {
    this.onProductSelected = new EventEmitter<Product>();
  }
  

  clicked(product: Product): void {
    this.currentProduct = product;
    this.onProductSelected.emit(product);
    this.router.navigate(['/product', product.sku]);
  }

  isSelected(product: Product): boolean {
    if (!product || !this.currentProduct) {
      return false;
    }
    return product.sku === this.currentProduct.sku;
  }

}