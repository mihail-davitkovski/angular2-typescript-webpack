import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  templateUrl: "app/login/signup.component.html",
})
export class SignupComponent {
    
  registerUser(form: NgForm) {
    console.log(form.value);
    // {email: '...', password: '...'}
    // ...
  }
}