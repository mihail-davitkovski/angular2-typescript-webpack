import { enableProdMode, Component, OnInit } from "@angular/core";

import { ProductsListComponent } from "./products-list.component";

import { Product } from "./model/product.model";
import { InventoryDataService } from "./services/inventory.data.service";
import { InventoryActionsService } from "./services/inventory-actions.service";

/**
 * @InventoryApp: the top-level component for our application
 */
@Component({
  //When accessing properties in template
  //and invoking methods from template there is no need 
  // to call it with this keyword
  template: `
  <div class="inventory-app">
    <products-list 
      [productList]="products" 
      (onProductSelected)="productWasSelected($event)">
    </products-list>
  </div>
  `,
  providers: [InventoryDataService, InventoryActionsService]
})
export class InventoryBoxComponent implements OnInit {
  products: Product[];

  constructor(private inventoryDataService: InventoryDataService, 
  private inventoryActionsService: InventoryActionsService) {
    this.inventoryDataService.getProducts().subscribe(
      products => {
        this.products = products
      }
    );
  }

  ngOnInit() {
    this.inventoryActionsService.getAllProducts();
  }

  productWasSelected(product: Product): void {
    console.log('Product clicked: ', product);
  }
}