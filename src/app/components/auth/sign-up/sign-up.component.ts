import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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

    this.userService.signingInUser(userModel).subscribe((res) => {
      this.userResp = res;
      if (this.userResp.length == 0) {
        userModel.userRole = this.SignUpForm.value.userRole;

        this.userService.registerUser(userModel).subscribe((res) => {
          console.log(res);
          alert('User Added Successfully...');
          this.router.navigate(['/']);
        },(error)=>{
          alert("Not able to connect to JSON Server while adding user");
        });
      } else {
        this.SignUpForm.reset();
        alert('User Id Already Exists. Please try again with different user Id...');
        return;
      }
    },(error)=>{
      alert("Not able to connect to JSON Server while fetching user for validating while signing up user");
    });

    
  }
}
