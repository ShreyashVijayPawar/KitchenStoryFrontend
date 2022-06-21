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
  private url: string;

  constructor(private httpClient: HttpClient) {}

  signingInUser(userModel: UserModel): Observable<UserModel[]> {
    this.url = `${this.apiHost}/subscribers?userId=${userModel.userId}`;
    return this.httpClient.get<UserModel[]>(this.url);
  }

  registerUser(userModel: UserModel): Observable<UserModel> {
    this.url = `${this.apiHost}/subscribers`;
    return this.httpClient.post<UserModel>(this.url, userModel);
  }

  resetPassowrd(userModel: UserModel): Observable<UserModel> {
    this.url = `${this.apiHost}/subscribers/${userModel.id}`;
    return this.httpClient.put<UserModel>(this.url,userModel);
  }
}
