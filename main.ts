
import {
    RouterModule,
    Routes
} from '@angular/router';

import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

import { InventoryAppModule } from "./app/inventory/inventory.module";

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: InventoryAppModule }
];

platformBrowserDynamic().bootstrapModule(InventoryAppModule);