import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import 'hammerjs';
import {AppRoutingModule} from './app-routing.module';

import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { HeaderComponent } from './components/header/header.component';
import { DayComponent } from './components/day/day.component';
import { DayListComponent } from './components/day-list/day-list.component';
import { IngredientDetailedComponent } from './components/ingredient-detailed/ingredient-detailed.component';
import { IngredientFormComponent } from './components/ingredient-form/ingredient-form.component';
import { LunchComponent } from './components/lunch/lunch.component';
import { RecipeDetailedComponent } from './components/recipe-detailed/recipe-detailed.component';
import { RecipeListComponent } from './components/recipe-list/recipe-list.component';
import { SearcherComponent } from './components/searcher/searcher.component';
import { StepDetailedComponent } from './components/step-detailed/step-detailed.component';
import { StepListComponent } from './components/step-list/step-list.component';
import { StepFormComponent } from './components/step-form/step-form.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HeaderComponent,
    DayComponent,
    DayListComponent,
    HeaderComponent,
    IngredientDetailedComponent,
    IngredientFormComponent,
    LunchComponent,
    MenuComponent,
    RecipeDetailedComponent,
    RecipeListComponent,
    SearcherComponent,
    StepDetailedComponent,
    StepListComponent,
    StepFormComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
