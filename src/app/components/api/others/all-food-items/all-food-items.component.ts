import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
    private foodService: FoodServiceService,
    private router: Router,
    private activatedRoute: ActivatedRoute
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
        console.log(error);
        alert(
          'Not able to connect to JSON server while fetching all food items'
        );
      }
    );
  }

  deleteFood(id: number) {
    this.foodService.deleteFoodItem(id).subscribe(
      (res) => {
        alert('Food Item deleted successfully');
      },
      (error) => {
        console.log(error);
        alert('Not able to connect to JSON server while deleting food item');
      }
    );
    this.refresh();
  }

  refresh(): void {
    window.location.reload();
  }
}
