
import { Routes, RouterModule } from '@angular/router';  
import { InventoryBoxComponent } from "./inventory-box.component";

const inventoryRoutes: Routes = [  
  { path: 'inventory', component: InventoryBoxComponent }
];

export const routing = RouterModule.forChild(inventoryRoutes);