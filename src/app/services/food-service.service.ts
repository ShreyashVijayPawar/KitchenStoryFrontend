import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { FoodModel } from '../model/food-model';
import * as uuid from 'uuid';


@Injectable({
  providedIn: 'root',
})
export class FoodServiceService {
  private apiHost = environment.apiHost;
  foodByCategory:FoodModel[] = [];

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
              // console.log("Before| Category: "+ category);
              // this.logValues(this.foodByCategory);

    this.foodByCategory = [];

              // console.log("After");
              // this.logValues(this.foodByCategory);

    for (let food of this.AllFoodItems) {
      if (food.foodCategory.toLowerCase().search(category.toLowerCase().trim()) === 0) {
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
  generateOrderId () {
    return uuid.v4();
  };

// Data ------------------------------------------------------------------
  AllFoodItems: FoodModel[] = [
    {
      id: 1,
      image: './assets/Burgers/Veg_Burger.jpg',
      foodName: 'Veg_Burger',
      foodCategory: 'Burgers',
      price: 100,
    },
    {
      id: 2,
      image: './assets/Burgers/Chicken_Loaded_Burger.jpg',
      foodName: 'Chicken_Loaded_Burger',
      foodCategory: 'Burgers',
      price: 200,
    },
    {
      id: 3,
      image: './assets/Burgers/Double_Dekker_Burger.jpg',
      foodName: 'Double_Dekker_Burger',
      foodCategory: 'Burgers',
      price: 300,
    },
    {
      id: 4,
      image: './assets/Pastas/Pink_Sauce_Pasta.jpg',
      foodName: 'Pink_Sauce_Pasta',
      foodCategory: 'Pastas',
      price: 250,
    },
    {
      id: 5,
      image: './assets/Noodles/Spaghetti.jpg',
      foodName: 'Spaghetti',
      foodCategory: 'Pastas',
      price: 450,
    },
    {
      id: 6,
      image: './assets/Noodles/Beef_Noodle_Soup.jpg',
      foodName: 'Beef_Noodle_Soup',
      foodCategory: 'Noodles',
      price: 175,
    },
  ];
}
