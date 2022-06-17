import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FoodModel } from 'src/app/model/food-model';
import { FoodServiceService } from 'src/app/services/food-service.service';

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.css']
})
export class OrderSummaryComponent implements OnInit {
  foodItem:FoodModel;
  orderId:string;

  constructor(private activatedRoute:ActivatedRoute, private foodService:FoodServiceService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      const foodId = +params['id'];
      this.foodItem = this.foodService.getFoodById(foodId);
      this.orderId = this.foodService.generateOrderId();
    });
  }
}
