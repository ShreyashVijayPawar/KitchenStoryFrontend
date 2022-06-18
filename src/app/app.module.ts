import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/main/header/header.component';
import { AuthComponent } from './components/auth/auth.component';
import { SignInComponent } from './components/auth/sign-in/sign-in.component';
import { SignUpComponent } from './components/auth/sign-up/sign-up.component';
import { PasswordResetComponent } from './components/auth/password-reset/password-reset.component';
import { SearchComponent } from './components/main/others/search/search.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './components/main/footer/footer.component';
import { MainComponent } from './components/main/main.component';
import { FoodItemsComponent } from './components/main/others/food-items/food-items.component';
import { OrderPlacedComponent } from './components/main/others/order-placed/order-placed.component';
import { AllFoodItemsComponent } from './components/main/others/all-food-items/all-food-items.component';
import { AddNewFoodComponent } from './components/main/others/add-new-food/add-new-food.component';
import { HomeComponent } from './components/main/others/home/home.component';
import { FoodServiceService } from './services/food-service.service';
import { OrderSummaryComponent } from './components/main/others/order-summary/order-summary.component';

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
    MainComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [FoodServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
