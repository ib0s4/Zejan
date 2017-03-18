import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
const routes: Routes = [    
    { path: 'day', component: DayComponent},
    { path: 'dayList', component: DayListComponent},
    { path: 'ingredientDetailed', component: IngredientDetailedComponent},
    { path: 'ingredientForm', component: IngredientFormComponent},
    { path: 'recipeList', component: RecipeListComponent},
    { path: 'search', component: SearcherComponent},
    { path: 'day', component: DayComponent},
    { path: '', pathMatch: 'full', redirectTo:'/search'},
    { path: '**', component: PageNotFoundComponent}
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}