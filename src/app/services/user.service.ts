import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { UserModel } from '../model/user-model';
import { map, Observable } from 'rxjs';

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
}
