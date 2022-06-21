import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ErrorEnum } from 'src/app/model/error-enum';
import { FoodModel } from 'src/app/model/food-model';
import { FoodServiceService } from 'src/app/services/food-service.service';

@Component({
  selector: 'app-add-new-food',
  templateUrl: './add-new-food.component.html',
  styleUrls: ['./add-new-food.component.css'],
})
export class AddNewFoodComponent implements OnInit {
  foodDetailsForm!: FormGroup;

  constructor(
    private foodService: FoodServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.foodDetailsForm = new FormGroup({
      foodName: new FormControl('', Validators.required),
      foodCategory: new FormControl('', Validators.required),
      price: new FormControl('', [Validators.required, Validators.min(0)]),
      imageUrl: new FormControl('./assets/', Validators.required),
    });
  }

  onSubmit() {
    let foodItem = new FoodModel(
      this.foodDetailsForm.value.imageUrl,
      this.foodDetailsForm.value.foodName,
      this.foodDetailsForm.value.foodCategory,
      this.foodDetailsForm.value.price
    );
    console.log(foodItem);
    this.foodService.addFoodItem(foodItem).subscribe(
      (res) => {
        this.router.navigate(['/api']);
      },
      (error) => {
        alert(ErrorEnum.JSON_CONNECTION_FAILED);
      }
    );
  }
}
