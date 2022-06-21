import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { FoodModel } from '../model/food-model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { UserModel } from '../model/user-model';

@Injectable({
  providedIn: 'root',
})
export class FoodServiceService {
  private apiHost = environment.apiHost;
  private url: string;

  constructor(private httpClient: HttpClient) {}

  // Service Methods - AllFoodItemsComponent ------------------------------------------------------------------
  getAllFoodItems(): Observable<FoodModel[]> {
    this.url = `${this.apiHost}/foods`;
    return this.httpClient.get<FoodModel[]>(this.url);
  }

  deleteFoodItem(id: number): Observable<FoodModel> {
    this.url = `${this.apiHost}/foods/${id}`;
    return this.httpClient.delete<FoodModel>(this.url);
  }

  // Service Methods - AddFoodItemsComponent ------------------------------------------------------------------
  addFoodItem(foodItem: FoodModel): Observable<FoodModel> {
    this.url = `${this.apiHost}/foods`;
    return this.httpClient.post<FoodModel>(this.url, foodItem);
  }

  // Service Methods - FoodItemsComponent ------------------------------------------------------------------
  getFoodsByCategory(category: string): Observable<FoodModel[]> {
    this.url = `${this.apiHost}/foods?foodCategory=${category}`;
    return this.httpClient.get<FoodModel[]>(this.url);
  }

  // Service Methods ------------------------------------------------------------------
  getFoodById(id: number): Observable<FoodModel> {
    let foodItem: FoodModel;
    this.url = `${this.apiHost}/foods/${id}`;
    return this.httpClient.get<FoodModel>(this.url);
  }
}
