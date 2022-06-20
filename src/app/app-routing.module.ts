import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApiComponent } from './components/api/api.component';
import { AddNewFoodComponent } from './components/api/others/add-new-food/add-new-food.component';
import { AllFoodItemsComponent } from './components/api/others/all-food-items/all-food-items.component';
import { FoodItemsComponent } from './components/api/others/food-items/food-items.component';
import { HomeComponent } from './components/api/others/home/home.component';
import { OrderPlacedComponent } from './components/api/others/order-placed/order-placed.component';
import { OrderSummaryComponent } from './components/api/others/order-summary/order-summary.component';
import { SearchComponent } from './components/api/others/search/search.component';
import { AuthComponent } from './components/auth/auth.component';
import { PasswordResetComponent } from './components/auth/password-reset/password-reset.component';
import { SignInComponent } from './components/auth/sign-in/sign-in.component';
import { SignUpComponent } from './components/auth/sign-up/sign-up.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AdminAuthGuard } from './guard/admin-auth.guard';
import { AuthenticationGuard } from './guard/authentication.guard';
import { UserAuthGuard } from './guard/user-auth.guard';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      { path: '', component: SignInComponent },
      { path: 'sign-up', component: SignUpComponent },
      { path: 'log-out', component: AuthComponent },
      { path: 'password-reset', component: PasswordResetComponent },
    ],
  },
  {
    path: 'api',
    component: ApiComponent,
    children: [
      { path: '', component: HomeComponent, canActivate:[AuthenticationGuard]},
      { path: 'all-food-items', component: AllFoodItemsComponent, canActivate:[AuthenticationGuard, AdminAuthGuard]},
      { path: 'add-new-food', component: AddNewFoodComponent, canActivate:[AuthenticationGuard, AdminAuthGuard]},
      { path: 'search', component: SearchComponent, canActivate:[AuthenticationGuard, UserAuthGuard]},
      { path: 'food-items', component: FoodItemsComponent, canActivate:[AuthenticationGuard, UserAuthGuard] },
      { path: 'food-items/food-item/:id', component: OrderPlacedComponent, canActivate:[AuthenticationGuard, UserAuthGuard] },
      { path: 'order-summary/:id', component: OrderSummaryComponent, canActivate:[AuthenticationGuard, UserAuthGuard]},
    ], 
    canActivate:[AuthenticationGuard]
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
