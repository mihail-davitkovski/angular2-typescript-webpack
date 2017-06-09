import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginActionsService } from "../services/login.actions.service";
import { LoginDataService } from "../services/login.data.service";

@Component({
  templateUrl: "app/login/template-driven/templates/login.component.html",
  //styleUrls: ['./login.component.css']
  providers: [LoginActionsService, LoginDataService]
})
export class LoginComponent {
  message: string;
  isFormSubmitted: boolean;

  constructor(private loginActionService: LoginActionsService, 
  private loginDataService: LoginDataService) {
    loginDataService.isUserLoggedIn().subscribe(value=>{
      
    })
  }

  login(form: NgForm) {
    this.isFormSubmitted = true;
    if (form.valid) {
      this.loginActionService.login(form.value);
    }
  }

  logout() {
    this.loginActionService.logout();
  }

}
