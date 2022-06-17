import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { FoodModel } from '../model/food-model';
import * as uuid from 'uuid';

@Injectable({
  providedIn: 'root',
})
export class FoodServiceService {
  private apiHost = environment.apiHost;
  foodByCategory: FoodModel[] = [];

  constructor() {}

  // Service Method 0 ------------------------------------------------------------------
  getAllFoodItems(): FoodModel[] {
    return this.AllFoodItems;
  }
  // // To Be uncommented after creating backend
  // getFoodItems(category :string): Observable<FoodModel[]> {
  //   let url: string = `${this.apiHost}/foodItems/${category}`;
  //   return this.httpClient.get<FoodModel[]>(url);
  // }

  // Service Method 1 ------------------------------------------------------------------
  getFoodByCategory(category: string): FoodModel[] {
    this.foodByCategory = [];

    for (let food of this.AllFoodItems) {
      if (food.foodCategory === category) {
        this.foodByCategory.push(food);
      }
    }

    return this.foodByCategory;
  }

  // logValues(array:FoodModel[]){
  //   for (let food of array) {
  //     console.log(food);
  //   }
  //   console.log();
  // }

  // // To Be uncommented after creating backend
  // getFoodItems(category :string): Observable<FoodModel[]> {
  //   let url: string = `${this.apiHost}/foodItems/${category}`;
  //   return this.httpClient.get<FoodModel[]>(url);
  // }

  // Service Method 2 ------------------------------------------------------------------
  getFoodById(id: number): FoodModel {
    let foodItem: FoodModel;
    for (let food of this.AllFoodItems) {
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

  // Service Method 3 ------------------------------------------------------------------
  generateOrderId() {
    return uuid.v4();
  }

  // Service Method 4 ------------------------------------------------------------------
  deleteFoodItem(id: number) {
    console.log('Food ' + id + ' deleted successfully...');
  }

  addFoodItem(foodItem) {
    console.log(foodItem);
    let id = this.AllFoodItems.length;
    foodItem.id = id + 1;
    this.AllFoodItems.push(foodItem);
    console.log(this.AllFoodItems);
  }

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
