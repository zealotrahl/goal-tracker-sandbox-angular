import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import { RouterModule, Routes } from '@angular/router';
import { GoalComponent } from './components/goal/goal.component';
import {MatDialog, MatDialogRef, MatDialogModule} from '@angular/material/dialog';


export const profileRoutes: Routes = [{ path: ':username', component: ProfileComponent }];

@NgModule({
  declarations: [
    ProfileComponent,
    GoalComponent
  ],
  imports: [
    RouterModule.forChild(profileRoutes),
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatDividerModule,
    MatListModule,
    MatDialogModule
  ]
})
export class ProfileModule { }
