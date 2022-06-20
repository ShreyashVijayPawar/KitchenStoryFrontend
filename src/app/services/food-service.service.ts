import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { FoodModel } from '../model/food-model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class FoodServiceService {
  private apiHost = environment.apiHost;
  private url: string;
  foodByCategory: FoodModel[] = [];

  constructor(private httpClient: HttpClient) {}

  // Service Methods - AllFoodItemsComponent ------------------------------------------------------------------
  getAllFoodItems(): Observable<FoodModel[]> {
    this.url = `${this.apiHost}/foods`;
    return this.httpClient.get<FoodModel[]>(this.url);
  }

  deleteFoodItem(id: number): Observable<any> {
    this.url = `${this.apiHost}/foods/${id}`;
    return this.httpClient.delete<any>(this.url);
  }

  // Service Methods - ADDFoodItemsComponent ------------------------------------------------------------------
  addFoodItem(foodItem: FoodModel): Observable<FoodModel> {
    this.url = `${this.apiHost}/foods`;
    return this.httpClient.post<FoodModel>(this.url, foodItem);
  }

  // Service Methods - FoodItemsComponent ------------------------------------------------------------------
  getFoodsByCategory(category: string): Observable<FoodModel[]> {
    this.url = `${this.apiHost}/foods?foodCategory=${category}`;
    return this.httpClient.get<FoodModel[]>(this.url);
  }

  // Service Method 2 ------------------------------------------------------------------
  getFoodById(id: number): Observable<FoodModel> {
    let foodItem: FoodModel;
    this.url = `${this.apiHost}/foods/${id}`;
    return this.httpClient.get<FoodModel>(this.url);
  }
}
