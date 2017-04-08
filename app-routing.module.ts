import { NgModule } from '@angular/core';  
import { Routes, RouterModule } from '@angular/router';  
import { InventoryModule } from "./app/inventory/inventory.module";
import { InventoryBoxComponent } from "./app/inventory/inventory-box.component";

const routes: Routes = [  
  { path: '', pathMatch: 'full', redirectTo: 'inventory' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), InventoryModule],
  exports: [RouterModule],
})
export class AppRoutingModule { }