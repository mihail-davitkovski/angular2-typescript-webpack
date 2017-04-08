import { NgModule } from '@angular/core';  
import { Routes, RouterModule } from '@angular/router';  
import { InventoryBoxComponent } from "./inventory-box.component";
import { ProductRowComponent } from "./product-row.component";


const inventoryRoutes: Routes = [  
  { path: 'inventory', component: InventoryBoxComponent },
  { path: 'product/:id', component: ProductRowComponent }
];

@NgModule({
  imports: [RouterModule.forChild(inventoryRoutes)],
  exports: [
    //RouterModule
  ]
})
export class InventoryRoutingModule { }