import { Component } from "@angular/core";

import {Product} from "./model/product.model";
/**
 * @ProductDepartment: A component to show the breadcrumbs to a 
 * Product's department
 */
@Component({
  selector: 'product-department',
  inputs: ['product'],
  template: `
  <div class="product-department">
    <span *ngFor="let name of product.department; let i=index">
      <a href="#">{{ name }}</a>
      <span>{{i < (product.department.length-1) ? '>' : ''}}</span>
    </span>
  </div>
  `
})
export class ProductDepartmentComponent {
  product: Product;
}