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

  constructor(
    private foodService: FoodServiceService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    let category: string;
    category = this.activatedRoute.snapshot.queryParamMap.get('category');
    this.filteredFoodItems = this.foodService.getFoodByCategory(category);
  }
}
