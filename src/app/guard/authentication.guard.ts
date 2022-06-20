import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { ErrorEnum } from '../model/error-enum';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {

  constructor(private authService:AuthService, private router : Router){  }

  canActivate() {
    if(this.authService.isUserLoggedIn()){
      return true;
    }
    alert(ErrorEnum.NOT_AUTHENTICATED);
    this.router.navigate(['/']);
    return false;
  }
  
}
