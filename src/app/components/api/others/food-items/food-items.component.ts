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
  filteredFoodItems: FoodModel[];
  isCtgryListEmpty:Boolean = false;

  constructor(
    private foodService: FoodServiceService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    let category: string;
    category = this.activatedRoute.snapshot.queryParamMap.get('category');
    this.foodService.getFoodsByCategory(category).subscribe(
      (res)=>{
        console.log(res);
        this.filteredFoodItems = res;
        if (this.filteredFoodItems.length === 0) {
          this.isCtgryListEmpty = true;
        } else {
          this.isCtgryListEmpty = false;
        }
        alert("Data fetched successfully. List is Empty " + this.isCtgryListEmpty );
      },(error)=>{
        console.log(error);
        alert("Not bale to connect JSON server while searching based on category");
      }
    );
  }
}
