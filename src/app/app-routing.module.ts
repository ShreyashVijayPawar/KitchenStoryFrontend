import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './components/auth/auth.component';
import { AddNewFoodComponent } from './components/main/header/add-new-food/add-new-food.component';
import { AllFoodItemsComponent } from './components/main/header/all-food-items/all-food-items.component';
import { FoodItemsComponent } from './components/main/header/food-items/food-items.component';
import { OrderPlacedComponent } from './components/main/header/food-items/order-placed/order-placed.component';
import { OrderSummaryComponent } from './components/main/header/food-items/order-summary/order-summary.component';
import { HeaderComponent } from './components/main/header/header.component';
import { HomeComponent } from './components/main/header/home/home.component';
import { SearchComponent } from './components/main/header/search/search.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'search', component: SearchComponent },
  { path: 'all-food-items', component: AllFoodItemsComponent },
  { path: 'add-new-food', component: AddNewFoodComponent },
  { path: 'search', component: SearchComponent },
  { path: 'food-items/food-item/:id', component: OrderPlacedComponent },
  { path: 'food-items/food-item/order-summary/:id', component: OrderSummaryComponent },
  // { path: 'order-summary', component: OrderSummaryComponent },
  { path: 'log-out', component: AuthComponent },
  { path: 'header', component: HeaderComponent },
  {
    path: 'food-items',
    component: FoodItemsComponent,
    // children: [
    //   { path: 'food-item/:id', component: OrderPlacedComponent },
    // ],
  },
  {
    path: 'page-not-found',
    component: PageNotFoundComponent,
    data: { message: 'Page Not Found' },
  },
  { path: '**', redirectTo: 'page-not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
