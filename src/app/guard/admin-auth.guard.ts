import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { ErrorEnum } from '../model/error-enum';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuard implements CanActivate {
  
  constructor(private authService:AuthService, private router : Router){  }

  canActivate() {
    if(this.authService.isAdmin()){
      return true;
    }
    alert(ErrorEnum.NOT_AUTHORIZED);
    this.router.navigate(['/api']);
    return false;
  }
}
