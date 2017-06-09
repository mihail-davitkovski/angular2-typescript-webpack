
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LoginComponent } from "./model-driven/login.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { routing } from "./login.routing";
import { LoginDataService } from "./services/login.data.service";

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    routing
  ],
  providers:[LoginDataService]
})
export class LoginModule { }