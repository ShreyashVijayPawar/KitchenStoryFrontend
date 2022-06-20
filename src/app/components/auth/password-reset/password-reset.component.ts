import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ErrorEnum } from 'src/app/model/error-enum';
import { UserModel } from 'src/app/model/user-model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.css'],
})
export class PasswordResetComponent implements OnInit {
  passwordResetForm!: FormGroup;
  userResp: any[];

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    sessionStorage.removeItem('userId');
    sessionStorage.removeItem('password');
    sessionStorage.removeItem('userRole');

    this.passwordResetForm = new FormGroup({
      userId: new FormControl('', Validators.required),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(16),
      ]),
    });
  }
  
  onSubmit() {
    let userModel = new UserModel(
      this.passwordResetForm.value.userId,
      this.passwordResetForm.value.password
    );
    this.userService.signingInUser(userModel).subscribe(
      (res) => {
        this.userResp = res;
        if (this.userResp.length != 0) {
          userModel.id = this.userResp[0].id;
          userModel.userRole = this.userResp[0].userRole;

          this.userService.resetPassowrd(userModel).subscribe(
            (res) => {
              alert(ErrorEnum.PASSWORD_RESET_SUCCESS);
              this.router.navigate(['/']);
            },
            (error) => {
              alert(ErrorEnum.JSON_CONNECTION_FAILED);
            }
          );
        } else {
          this.passwordResetForm.reset();
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
