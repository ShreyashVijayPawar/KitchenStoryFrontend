import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ErrorEnum } from 'src/app/model/error-enum';
import { FoodModel } from 'src/app/model/food-model';
import { FoodServiceService } from 'src/app/services/food-service.service';

@Component({
  selector: 'app-order-placed',
  templateUrl: './order-placed.component.html',
  styleUrls: ['./order-placed.component.css'],
})
export class OrderPlacedComponent implements OnInit {
  foodItem: FoodModel;
  renderPage:Boolean = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private foodService: FoodServiceService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      let foodId = +params['id'];
      this.foodService.getFoodById(foodId).subscribe(
        (res) => {
          this.foodItem = res;
          this.renderPage = true;
        },
        (error) => {
          alert(ErrorEnum.JSON_CONNECTION_FAILED);
        }
      );
    });
  }
    
}
