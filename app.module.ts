import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { StoreModule } from '@ngrx/store';

import { routing } from './app.routing';
import { InventoryModule } from './app/inventory/inventory.module';
import { rootReducer } from './app/redux/root.reducer';
import { AppComponent } from "./app.component";
import { HttpModule } from '@angular/http';

@NgModule({
    //Other  modules whose exported classes are needed 
    //by component templates declared in this module
    imports: [
        BrowserModule,
        HttpModule,
        routing,
        InventoryModule,
        StoreModule.provideStore(rootReducer)
    ],
    declarations: [
        AppComponent
    ],
    providers: [

    ],
    //this is only set by the root module
    //The main appllication view called the root component,
    //that hosts all other app views.
    bootstrap: [AppComponent],
})
export class AppModule { }  