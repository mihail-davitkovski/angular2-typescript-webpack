
import { Routes, RouterModule } from '@angular/router';  
import { InventoryBoxComponent } from "./inventory-box.component";
import { LoginRouteGuard } from "../core/login-route-guard";

const inventoryRoutes: Routes = [
  { path: 'inventory', component: InventoryBoxComponent, canActivate: [LoginRouteGuard] }
];

export const routing = RouterModule.forChild(inventoryRoutes);