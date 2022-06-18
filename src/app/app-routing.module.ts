import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './components/auth/auth.component';
import { PasswordResetComponent } from './components/auth/password-reset/password-reset.component';
import { SignInComponent } from './components/auth/sign-in/sign-in.component';
import { SignUpComponent } from './components/auth/sign-up/sign-up.component';
import { MainComponent } from './components/main/main.component';
import { AddNewFoodComponent } from './components/main/others/add-new-food/add-new-food.component';
import { AllFoodItemsComponent } from './components/main/others/all-food-items/all-food-items.component';
import { FoodItemsComponent } from './components/main/others/food-items/food-items.component';
import { HomeComponent } from './components/main/others/home/home.component';
import { OrderPlacedComponent } from './components/main/others/order-placed/order-placed.component';
import { OrderSummaryComponent } from './components/main/others/order-summary/order-summary.component';
import { SearchComponent } from './components/main/others/search/search.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', component: AuthComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'sign-in', component: SignInComponent },
  { path: 'log-out', component: AuthComponent },
  { path: 'password-reset', component: PasswordResetComponent },
  
  { path: 'main', component: MainComponent, 
    children: [
      { path: 'welcome', component: HomeComponent },
      { path: 'all-food-items', component: AllFoodItemsComponent },
      { path: 'add-new-food', component: AddNewFoodComponent },
      { path: 'search', component: SearchComponent },
      { path: 'food-items', component: FoodItemsComponent },
      { path: 'food-items/food-item/:id', component: OrderPlacedComponent },
      { path: 'order-summary/:id', component: OrderSummaryComponent },
    ]
  },
  {
    path: 'page-not-found',
    component: PageNotFoundComponent,
    data: { message: 'Page Not Found' },
  },
  { path: '**', redirectTo: 'page-not-found' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
