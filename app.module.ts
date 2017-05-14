import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { routing } from './app.routing';
import { InventoryModule } from './app/inventory/inventory.module';
import { AppComponent } from "./app.component";

@NgModule({
    //Other  modules whose exported classes are needed 
    //by component templates declared in this module
    imports: [
        BrowserModule,
        routing,
        InventoryModule
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