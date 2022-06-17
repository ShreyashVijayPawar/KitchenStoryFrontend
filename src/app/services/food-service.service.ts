import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { FoodModel } from '../model/food-model';

@Injectable({
  providedIn: 'root',
})
export class FoodServiceService {
  private apiHost = environment.apiHost;

  foodItems: FoodModel[] = [
    {
      id: 1,
      image: './assets/Assets/Burger/Veg_Burger.jpeg',
      foodName: 'Veg_Burger',
      foodCategory: 'Burger',
      price: 100,
      quantityAvailable: 27,
    },
    {
      id: 2,
      image: './assets/Assets/Burger/Chicken_Loaded_Burger.jpg',
      foodName: 'Chicken_Loaded_Burger',
      foodCategory: 'Burger',
      price: 200,
      quantityAvailable: 23,
    },
    {
      id: 3,
      image: './assets/Assets/Burger/Double_Dekker_Burger.jpg',
      foodName: 'Double_Dekker_Burger',
      foodCategory: 'Burger',
      price: 300,
      quantityAvailable: 32,
    },
    {
      id: 4,
      image: './assets/Assets/Noodles/Beef_Noodle_Soup.jpg',
      foodName: 'Beef_Noodle_Soup',
      foodCategory: 'Noodles',
      price: 250,
      quantityAvailable: 12,
    },
  ];

  constructor() {}

  // Service Method 1 ------------------------------------------------------------------
  getFoodItems(category: string): FoodModel[] {
    console.log(category);
    console.log(this.foodItems);
    return this.foodItems;
  }
  // // To Be uncommented after creating backend
  // getFoodItems(category :string): Observable<FoodModel[]> {
  //   let url: string = `${this.apiHost}/foodItems/${category}`;
  //   return this.httpClient.get<FoodModel[]>(url);
  // }

  // Service Method 2 ------------------------------------------------------------------
  getFoodById(id: number): FoodModel {
    let foodItem: FoodModel;
    console.log(id);
    for (let food of this.foodItems) {
      if (food.id === id) {
        foodItem = food;
        break;
      }
    }
    return foodItem;
  }
  // // To Be uncommented after creating backend
  // getFoodItems(id :number): Observable<FoodModel> {
  //   let url: string = `${this.apiHost}/foodItems/${id}`;
  //   return this.httpClient.get<FoodModel>(url);
  // }
}
