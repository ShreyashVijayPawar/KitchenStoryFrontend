import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './components/auth/auth.component';
import { SignInComponent } from './components/auth/sign-in/sign-in.component';
import { SignUpComponent } from './components/auth/sign-up/sign-up.component';
import { PasswordResetComponent } from './components/auth/password-reset/password-reset.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FoodServiceService } from './services/food-service.service';
import { ApiComponent } from './components/api/api.component';
import { HeaderComponent } from './components/api/header/header.component';
import { SearchComponent } from './components/api/others/search/search.component';
import { FoodItemsComponent } from './components/api/others/food-items/food-items.component';
import { OrderSummaryComponent } from './components/api/others/order-summary/order-summary.component';
import { OrderPlacedComponent } from './components/api/others/order-placed/order-placed.component';
import { AllFoodItemsComponent } from './components/api/others/all-food-items/all-food-items.component';
import { AddNewFoodComponent } from './components/api/others/add-new-food/add-new-food.component';
import { HomeComponent } from './components/api/others/home/home.component';
import { FooterComponent } from './components/api/footer/footer.component';

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
    ApiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [FoodServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
