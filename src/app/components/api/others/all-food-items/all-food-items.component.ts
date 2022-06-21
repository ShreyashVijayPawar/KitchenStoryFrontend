import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ErrorEnum } from 'src/app/model/error-enum';
import { FoodModel } from 'src/app/model/food-model';
import { FoodServiceService } from 'src/app/services/food-service.service';

@Component({
  selector: 'app-all-food-items',
  templateUrl: './all-food-items.component.html',
  styleUrls: ['./all-food-items.component.css'],
})
export class AllFoodItemsComponent implements OnInit {
  allFoodItems: FoodModel[];
  isListEmpty: Boolean = false;

  constructor(
    private foodService: FoodServiceService
  ) {}

  ngOnInit(): void {
    this.fetchAllFoodItems();
  }

  fetchAllFoodItems() {
    this.foodService.getAllFoodItems().subscribe(
      (res) => {
        this.allFoodItems = res;
        if (this.allFoodItems.length === 0) {
          this.isListEmpty = true;
        } else {
          this.isListEmpty = false;
        }
      },
      (error) => {
        alert(ErrorEnum.JSON_CONNECTION_FAILED);
      }
    );
  }

  deleteFood(id: number) {
    this.foodService.deleteFoodItem(id).subscribe(
      (res) => {
        alert(ErrorEnum.FOOD_DELETION_SUCCESS);
      },
      (error) => {
        alert(ErrorEnum.JSON_CONNECTION_FAILED);
      }
    );
    this.refresh();
  }

  refresh(): void {
    window.location.reload();
  }
}
