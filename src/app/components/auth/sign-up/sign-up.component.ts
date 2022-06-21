import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ErrorEnum } from 'src/app/model/error-enum';
import { UserModel } from 'src/app/model/user-model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  SignUpForm!: FormGroup;
  userResp: any[];

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    sessionStorage.removeItem('userId');
    sessionStorage.removeItem('password');
    sessionStorage.removeItem('userRole');

    this.SignUpForm = new FormGroup({
      userId: new FormControl('', Validators.required),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(16),
      ]),
      userRole: new FormControl('', Validators.required),
    });
  }

  onSubmit() {
    let userModel = new UserModel(
      this.SignUpForm.value.userId,
      this.SignUpForm.value.password
    );

    this.userService.signingInUser(userModel).subscribe(
      (res) => {
        this.userResp = res;
        if (this.userResp.length == 0) {
          userModel.userRole = this.SignUpForm.value.userRole;

          this.userService.registerUser(userModel).subscribe(
            (res) => {
              // alert(ErrorEnum.REGISTRATION_SUCCESS);
              this.router.navigate(['/']);
            },
            (error) => {
              alert(ErrorEnum.JSON_CONNECTION_FAILED);
            }
          );
        } else {
          this.SignUpForm.reset();
          alert(ErrorEnum.USER_ALREADY_EXISTS);
          return;
        }
      },
      (error) => {
        alert(ErrorEnum.JSON_CONNECTION_FAILED);
      }
    );
  }
}
