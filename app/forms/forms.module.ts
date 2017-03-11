
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import {
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';

import { DemoFormSkuComponent } from "./demo-form-sku.component";
import { FormsBox } from "./forms-box.component";

@NgModule({
  declarations: [
      FormsBox,
    DemoFormSkuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  bootstrap: [ FormsBox ]
})
export class FormsAppModule {}