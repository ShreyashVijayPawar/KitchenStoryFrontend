import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FoodModel } from 'src/app/model/food-model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  searchForm!: FormGroup;
  foodItems: FoodModel[];
  foodCategory:string;

  constructor(
    private router: Router
  ) {}

  ngOnInit(): void {
    this.searchForm = new FormGroup({
      foodCategory: new FormControl('', Validators.required),
    });
  }

  onSubmit() {
    this.foodCategory = this.searchForm.value.foodCategory;    
    this.router.navigate(['/api/food-items'],{queryParams:{category: this.foodCategory}});
  }
}
