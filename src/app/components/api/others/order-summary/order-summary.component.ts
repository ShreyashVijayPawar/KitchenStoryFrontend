import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ErrorEnum } from 'src/app/model/error-enum';
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
          alert(ErrorEnum.ORDER_PLACED_SUCCESS);
          this.renderPage = true;
        },
        (error) => {
          console.log(error);
          alert(ErrorEnum.JSON_CONNECTION_FAILED);
        }
      );
    });
  }

  generateOrderId() {
    return uuid.v4();
  }
}
