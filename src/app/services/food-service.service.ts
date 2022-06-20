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

    // for (let food of this.AllFoodItems) {
    //   if (food.id === id) {
    //     foodItem = food;
    //     break;
    //   }
    // }
    // return foodItem;
  }

  // Service Method 3 ------------------------------------------------------------------

  // Data ------------------------------------------------------------------
  AllFoodItems: FoodModel[] = [
    {
      id: 1,
      image: './assets/Burgers/Veg_Burger.jpg',
      foodName: 'Veg_Burger',
      foodCategory: 'Burger',
      price: 100,
    },
    {
      id: 2,
      image: './assets/Burgers/Chicken_Loaded_Burger.jpg',
      foodName: 'Chicken_Loaded_Burger',
      foodCategory: 'Burger',
      price: 200,
    },
    {
      id: 3,
      image: './assets/Burgers/Double_Dekker_Burger.jpg',
      foodName: 'Double_Dekker_Burger',
      foodCategory: 'Burger',
      price: 300,
    },
    {
      id: 4,
      image: './assets/Pastas/Pink_Sauce_Pasta.jpg',
      foodName: 'Pink_Sauce_Pasta',
      foodCategory: 'Pasta',
      price: 250,
    },
    {
      id: 5,
      image: './assets/Pastas/Spaghetti.jpg',
      foodName: 'Spaghetti',
      foodCategory: 'Pasta',
      price: 450,
    },
    {
      id: 6,
      image: './assets/Noodles/Beef_Noodle_Soup.jpg',
      foodName: 'Beef_Noodle_Soup',
      foodCategory: 'Noodle',
      price: 175,
    },
  ];
}
