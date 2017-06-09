//oughout the application in the CoreModule (e.g. ExceptionService and LoggerService).

 //Import it once (in the AppModule) when the app starts and never import it anywhere else. (e.g. NavComponent and SpinnerComponent).

 //Avoid importing the CoreModule anywhere except in the AppModule.

 //Only the root AppModule should import the CoreModule.
 
import { LoginRouteGuard } from './login-route-guard';
import { NgModule } from "@angular/core";

@NgModule({
  providers:[LoginRouteGuard]
  
})
export class CoreModule { }