import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
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
    private foodService: FoodServiceService,
    private router:Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      const foodId = +params['id'];
      // this.foodItem = this.foodService.getFoodById(foodId);

      this.foodService.getFoodById(foodId).subscribe(
        (res) => {
          console.log(res);
          this.foodItem = res;
          alert('Processing your order');
          this.renderPage = true;
        },
        (error) => {
          console.log(error);
          alert('Not able to connect to JSON server while processing order.');
        }
      );
      // this.foodService.getFoodById(id).subscribe((server: ServerModel) => {
      //   this.server = server;
      // });
    });
  }
    
}
