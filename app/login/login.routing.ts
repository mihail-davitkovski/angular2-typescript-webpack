
import { Routes, RouterModule } from '@angular/router';  
import { LoginComponent } from "./model-driven/login.component";

const signupRoutes: Routes = [
  { path: "login", component: LoginComponent }
];

export const routing = RouterModule.forChild(signupRoutes);