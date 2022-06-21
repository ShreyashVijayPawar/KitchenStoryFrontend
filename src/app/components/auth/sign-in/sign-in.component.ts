import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ErrorEnum } from 'src/app/model/error-enum';
import { UserModel } from 'src/app/model/user-model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent implements OnInit {
  SignInForm!: FormGroup;
  userResp: any[];

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    sessionStorage.removeItem('userId');
    sessionStorage.removeItem('password');
    sessionStorage.removeItem('userRole');

    this.SignInForm = new FormGroup({
      userId: new FormControl('', Validators.required),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(16)
      ]),
    });
  }
  onSubmit() {
    let userModel = new UserModel(
      this.SignInForm.value.userId,
      this.SignInForm.value.password
    );
    this.userService.signingInUser(userModel).subscribe(
      (res) => {
        this.userResp = res;
        if (this.userResp.length != 0) {
          if (this.userResp[0].password !== userModel.password) {
            this.SignInForm.reset();
            alert(ErrorEnum.INVALID_PASSWORD);
            return;
          }

          sessionStorage.setItem('userId', this.userResp[0].userId);
          sessionStorage.setItem('password', this.userResp[0].password);
          sessionStorage.setItem('userRole', this.userResp[0].userRole);
          
          // alert(ErrorEnum.SIGN_IN_SUCCESS);
          this.router.navigate(['/api']);
        } else {
          this.SignInForm.reset();
          alert(ErrorEnum.INVALID_USER_ID);
          return;
        }
      },
      (error) => {
        alert(ErrorEnum.JSON_CONNECTION_FAILED);
      }
    );
  }
}
