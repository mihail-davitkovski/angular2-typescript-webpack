
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { InventoryRoutingModule } from "./inventory-routing.module";

import { InventoryBoxComponent } from "./inventory-box.component";
import { ProductsListComponent } from "./products-list.component";
import { PriceDisplayComponent } from "./price-display.component";
import { ProductImageComponent } from "./product-image.component";
import { ProductDepartmentComponent } from "./product-department.component";
import { ProductRowComponent } from "./product-row.component";

@NgModule({
  //View classes that are defined in imports section 
  // can be used within templates
  //in this module, actually in the classes specified 
  //in the declaration
  imports: [
    CommonModule,
    InventoryRoutingModule
  ],
  //The View classes are defined here: There are three,
  //Components, Directives and Pipes. They have private access by default
  // and can be used only in this module, otherwise they should be exported, i.e
  //to be placed in the exports array, exports:[]
  declarations: [
    InventoryBoxComponent,
    ProductImageComponent,
    ProductDepartmentComponent,
    PriceDisplayComponent,
    ProductRowComponent,
    ProductsListComponent
  ]
})
export class InventoryModule { }