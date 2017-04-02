import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from "./app.component";

@NgModule({
    imports: [
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