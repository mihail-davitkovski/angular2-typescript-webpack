import { Observable } from 'rxjs/Observable';
import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { LoginDataService } from "../login/services/login.data.service";

@Injectable()
export class LoginRouteGuard implements CanActivate {

  private _canActivate: boolean = false;
  constructor(private loginService: LoginDataService, private router: Router) {
      loginService.isUserLoggedIn().subscribe(value=>{
          if(!value)
          {
              this._canActivate = false;
              this.router.navigate(['/login']);
              
          }
          else
          {
              this._canActivate = true;
          }
      })
  }

  canActivate() {
     return this._canActivate;
  }
}