import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ErrorEnum } from 'src/app/model/error-enum';
import { FoodModel } from 'src/app/model/food-model';
import { FoodServiceService } from 'src/app/services/food-service.service';

@Component({
  selector: 'app-food-items',
  templateUrl: './food-items.component.html',
  styleUrls: ['./food-items.component.css'],
})
export class FoodItemsComponent implements OnInit {
  filteredFoodItems: FoodModel[];
  isCtgryListEmpty:Boolean = false;

  constructor(
    private foodService: FoodServiceService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    let category: string;
    category = this.activatedRoute.snapshot.queryParamMap.get('category');
    this.foodService.getFoodsByCategory(category).subscribe(
      (res)=>{
        this.filteredFoodItems = res;
        if (this.filteredFoodItems.length === 0) {
          this.isCtgryListEmpty = true;
        } else {
          this.isCtgryListEmpty = false;
        }
      },(error)=>{
        alert(ErrorEnum.JSON_CONNECTION_FAILED);
      }
    );
  }
}
