import { NgModule } from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatOptionModule } from '@angular/material/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FindGoalerComponent } from './components/find-goaler/find-goaler.component';
import { ActionsGroupComponent } from './components/actions-group/actions-group.component';
import { MatButtonModule } from '@angular/material/button'


export const homeRoutes: Routes = [{ path: '', component: HomeComponent }];

@NgModule({
  declarations: [HomeComponent, FindGoalerComponent, ActionsGroupComponent],
  imports: [
    RouterModule.forChild(homeRoutes),
    CommonModule,
    MatOptionModule,
    MatAutocompleteModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    AsyncPipe,
    MatButtonModule,
  ],
})
export class HomeModule {}
