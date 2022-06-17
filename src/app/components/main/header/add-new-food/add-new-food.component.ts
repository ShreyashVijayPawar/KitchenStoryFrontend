import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FoodModel } from 'src/app/model/food-model';
import { FoodServiceService } from 'src/app/services/food-service.service';

@Component({
  selector: 'app-add-new-food',
  templateUrl: './add-new-food.component.html',
  styleUrls: ['./add-new-food.component.css']
})
export class AddNewFoodComponent implements OnInit {
  foodDetailsForm!: FormGroup;

  constructor(
    private foodService: FoodServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.foodDetailsForm = new FormGroup({
      foodName: new FormControl('Fruit_Salad', Validators.required),
      foodCategory: new FormControl('Salads', Validators.required),
      price: new FormControl('90', [Validators.required, Validators.min(0)]),
      imageUrl: new FormControl('./assets/Salads/Fruit_Salad.jpg', Validators.required),
    });
  }

  onSubmit() {
    let foodItem = new FoodModel(
      this.foodDetailsForm.value.imageUrl,
      this.foodDetailsForm.value.foodName,
      this.foodDetailsForm.value.foodCategory,
      this.foodDetailsForm.value.price,
    );

    // foodItem.foodName = this.foodDetailsForm.value.foodName;
    // foodItem.foodCategory = this.foodDetailsForm.value.foodCategory;
    // foodItem.price = this.foodDetailsForm.value.price;
    // foodItem.image = this.foodDetailsForm.value.imageUrl;
    console.log(foodItem)
    this.foodService.addFoodItem(foodItem);
    this.router.navigate(['/']);
  }
}
