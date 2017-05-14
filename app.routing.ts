
import { Routes, RouterModule } from '@angular/router';  

const routes: Routes = [  
  { path: '', pathMatch: 'full', redirectTo: 'inventory' }
];

export const routing = RouterModule.forRoot(routes);