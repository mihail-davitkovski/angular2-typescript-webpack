
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { InventoryBoxComponent } from "./inventory-box.component";
import { ProductsListComponent } from "./products-list.component";
import { PriceDisplayComponent } from "./price-display.component";
import { ProductImageComponent } from "./product-image.component";
import { ProductDepartmentComponent } from "./product-department.component";
import { ProductRowComponent } from "./product-row.component";

@NgModule({
  declarations: [ 
    InventoryBoxComponent,
    ProductImageComponent, 
    ProductDepartmentComponent, 
    PriceDisplayComponent,
    ProductRowComponent,
    ProductsListComponent
  ],
  imports: [ BrowserModule ],
  bootstrap: [ InventoryBoxComponent ]
})
export class InventoryAppModule {}