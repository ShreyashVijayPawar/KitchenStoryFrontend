import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ErrorEnum } from '../model/error-enum';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuard implements CanActivate {
  
  constructor(private authService:AuthService, private router : Router){  }

  canActivate() {
    if(this.authService.isAdmin){
      return true;
    }
    alert(ErrorEnum.NOT_AUTHORIZED);
    return false;
  }
}
