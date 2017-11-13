import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ILoginActionsService, LoginActionsService } from "../services/login.actions.service";
import { LoginDataService } from "../services/login.data.service";

@Component({
  templateUrl: "app/login/model-driven/templates/login.component.html",
  //styleUrls: ['./login.component.css']
  providers: [{provide:ILoginActionsService, useClass: LoginActionsService }, LoginDataService]
})
export class LoginComponent {
  message: string;
  isFormSubmitted: boolean;

  email = new FormControl('', [
    Validators.required
  ]);

  password = new FormControl('', [
    Validators.required,
    Validators.minLength(5)
  ]);

  loginForm: FormGroup = this.builder.group({
    email: this.email,
    password: this.password
  });

  constructor(private loginActionService: ILoginActionsService,
    private loginDataService: LoginDataService, private builder: FormBuilder) {
    loginDataService.isUserLoggedIn().subscribe(value => {

    })
  }

  login() {
    this.isFormSubmitted = true;
    if (this.loginForm.valid) {
      this.loginActionService.login(this.loginForm.value);
    }
  }

  logout() {
    this.loginActionService.logout();
  }

}
