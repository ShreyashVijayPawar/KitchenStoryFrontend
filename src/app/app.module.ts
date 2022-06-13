import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/main/header/header.component';
import { AuthComponent } from './components/auth/auth.component';
import { SignInComponent } from './components/auth/sign-in/sign-in.component';
import { SignUpComponent } from './components/auth/sign-up/sign-up.component';
import { PasswordResetComponent } from './components/auth/password-reset/password-reset.component';
import { SearchComponent } from './components/main/search/search.component';
import { FoodItemsComponent } from './components/main/food-items/food-items.component';
import { OrderSummaryComponent } from './components/main/food-items/order-summary/order-summary.component';
import { OrderPlacedComponent } from './components/main/food-items/order-placed/order-placed.component';
import { AllFoodItemsComponent } from './components/main/all-food-items/all-food-items.component';
import { AddNewFoodComponent } from './components/main/add-new-food/add-new-food.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AuthComponent,
    SignInComponent,
    SignUpComponent,
    PasswordResetComponent,
    SearchComponent,
    FoodItemsComponent,
    OrderSummaryComponent,
    OrderPlacedComponent,
    AllFoodItemsComponent,
    AddNewFoodComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
