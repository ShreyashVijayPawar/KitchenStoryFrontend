import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/main/header/header.component';
import { AuthComponent } from './components/auth/auth.component';
import { SignInComponent } from './components/auth/sign-in/sign-in.component';
import { SignUpComponent } from './components/auth/sign-up/sign-up.component';
import { PasswordResetComponent } from './components/auth/password-reset/password-reset.component';
import { AddNewFoodComponent } from './components/main/header/add-new-food/add-new-food.component';
import { AllFoodItemsComponent } from './components/main/header/all-food-items/all-food-items.component';
import { OrderPlacedComponent } from './components/main/header/food-items/order-placed/order-placed.component';
import { OrderSummaryComponent } from './components/main/header/food-items/order-summary/order-summary.component';
import { FoodItemsComponent } from './components/main/header/food-items/food-items.component';
import { SearchComponent } from './components/main/header/search/search.component';
import { HomeComponent } from './components/main/header/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './components/main/footer/footer.component';

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
    AddNewFoodComponent,
    HomeComponent,
    PageNotFoundComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
