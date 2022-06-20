import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { UserModel } from '../model/user-model';
import * as uuid from 'uuid';
import { map, Observable } from 'rxjs';
import { ResponseModel } from '../model/response-model';
import { ErrorEnum } from '../model/error-enum';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiHost = environment.apiHost;
  private userResponse: UserModel[];
  private url: string;

  constructor(private httpClient: HttpClient) {}

  signingInUser(userModel: UserModel): Observable<UserModel[]> {
    this.url = `${this.apiHost}/users?userId=${userModel.userId}`;
    return this.httpClient.get<UserModel[]>(this.url);
  }

  registerUser(userModel: UserModel): Observable<UserModel> {
    this.url = `${this.apiHost}/users`;
    return this.httpClient.post<UserModel>(this.url, userModel);
  }

  resetPassowrd(userModel: UserModel): Observable<UserModel> {
    console.log("Inside Forgot Password" + userModel);
      return this.httpClient.put<UserModel>(`${this.apiHost}/users/${userModel.id}`,userModel);
  }

  allUsers: UserModel[] = [
    {
      id: 1,
      userId: 's1',
      password: '232063',
      userRole: 'Admin',
    },
    {
      id: 2,
      userId: 's2',
      password: '232063',
      userRole: 'User',
    },
    {
      id: 3,
      userId: 's3',
      password: '232063',
      userRole: 'User',
    },
    {
      id: 4,
      userId: 's4',
      password: '232063',
      userRole: 'User',
    },
    {
      id: 5,
      userId: 's5',
      password: '232063',
      userRole: 'User',
    },
    {
      id: 6,
      userId: 's6',
      password: '232063',
      userRole: 'User',
    },
  ];
}
