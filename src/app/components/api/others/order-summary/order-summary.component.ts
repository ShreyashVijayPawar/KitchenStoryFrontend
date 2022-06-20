import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FoodModel } from 'src/app/model/food-model';
import { FoodServiceService } from 'src/app/services/food-service.service';
import * as uuid from 'uuid';

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.css'],
})
export class OrderSummaryComponent implements OnInit {
  foodItem: FoodModel;
  orderId: string;
  renderPage:Boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private foodService: FoodServiceService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      const foodId = +params['id'];
      this.foodService.getFoodById(foodId).subscribe(
        (res) => {
          console.log(res);
          this.foodItem = res;
          this.orderId = this.generateOrderId();
          alert('Order Placed. Your Order Id is ' + this.orderId);
          this.renderPage = true;
        },
        (error) => {
          console.log(error);
          alert('Not able to connect to JSON server while placing order.');
        }
      );
    });
  }

  generateOrderId() {
    return uuid.v4();
  }
}
