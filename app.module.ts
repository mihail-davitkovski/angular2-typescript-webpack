import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { StoreModule } from '@ngrx/store';
import { HttpClientModule  } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { routing } from './app.routing';
import { CoreModule } from "./app/core/core.module";
import { InventoryModule } from './app/inventory/inventory.module';
import { rootReducer } from './app/redux/root.reducer';
import { AppComponent } from "./app.component";
import { LoginModule } from "./app/login/login.module";
import { InMemoryDataService } from "./app/in-memory-data.service";


@NgModule({
    //Other  modules whose exported classes are needed 
    //by component templates declared in this module
    imports: [
        BrowserModule,
        HttpClientModule,
        routing,
        CoreModule,
        StoreModule.forRoot(rootReducer),
        InventoryModule,
        LoginModule,
        HttpClientInMemoryWebApiModule.forRoot(
            InMemoryDataService, { dataEncapsulation: false }
          )
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