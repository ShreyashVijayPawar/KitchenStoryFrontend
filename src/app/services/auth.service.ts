import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  isUserLoggedIn(): Boolean {
    if (
      sessionStorage.getItem('userId') != null &&
      sessionStorage.getItem('userId') != ''
    ) {
      return true;
    }
    return false;
  }

  isAdmin(): Boolean {
    if (
      sessionStorage.getItem('userRole') != null &&
      sessionStorage.getItem('userRole') != ''
    ) {
      if (sessionStorage.getItem('userRole') == 'Admin') {
        return true;
      }
    }
    return false;
  }

  isUser(): Boolean {
    if (
      sessionStorage.getItem('userRole') != null &&
      sessionStorage.getItem('userRole') != ''
    ) {
      if (sessionStorage.getItem('userRole') == 'User') {
        return true;
      }
    }
    return false;
  }
}
