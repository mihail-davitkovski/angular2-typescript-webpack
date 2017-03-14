import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule, routingComponents } from './app.routing';
import { InventoryAppModule } from "./app/inventory/inventory.module";
import { AppComponent } from "./app.component";

@NgModule({
    imports: [
        BrowserModule,
        //InventoryAppModule,
        AppRoutingModule
        ],
    declarations: [
        AppComponent
    ],
    providers: [

    ],
    //this is only set by the root module
    bootstrap: [AppComponent],
})
export class AppModule { }  