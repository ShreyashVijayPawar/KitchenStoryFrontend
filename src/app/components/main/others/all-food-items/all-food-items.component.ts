import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodModel } from 'src/app/model/food-model';
import { FoodServiceService } from 'src/app/services/food-service.service';

@Component({
  selector: 'app-all-food-items',
  templateUrl: './all-food-items.component.html',
  styleUrls: ['./all-food-items.component.css']
})
export class AllFoodItemsComponent implements OnInit {

  allFoodItems: FoodModel[];

  constructor(
    private foodService: FoodServiceService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.allFoodItems = this.foodService.getAllFoodItems();
  }

  deleteFood(id){
    this.foodService.deleteFoodItem(id);

  }

}
