import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodModel } from 'src/app/model/food-model';
import { FoodServiceService } from 'src/app/services/food-service.service';

@Component({
  selector: 'app-food-items',
  templateUrl: './food-items.component.html',
  styleUrls: ['./food-items.component.css'],
})
export class FoodItemsComponent implements OnInit {
  allFoodItems: FoodModel[];

  constructor(
    private foodService: FoodServiceService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.allFoodItems = this.foodService.foodItems;
  }

  // buyProduct(food:FoodModel) {
  //   console.log(food.id);
  //   let url:string = "food-items/" + food.id;

  //   this.router.navigate([url]);
  // }
}
