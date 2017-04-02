import { NgModule } from '@angular/core';  
import { Routes, RouterModule } from '@angular/router';  
import { InventoryAppModule } from "./app/inventory/inventory.module";
import { InventoryBoxComponent } from "./app/inventory/inventory-box.component";

const routes: Routes = [  
  { path: '', pathMatch: 'full', redirectTo: 'inventory' },
  { path: 'inventory', component: InventoryBoxComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), InventoryAppModule],
  exports: [RouterModule],
})
export class AppRoutingModule { }