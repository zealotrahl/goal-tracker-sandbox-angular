import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import { RouterModule, Routes } from '@angular/router';
import { GoalComponent } from './components/goal/goal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { CommentsComponent } from './components/comments/comments.component';
import { AddComment } from './components/comments/add-comment.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


export const profileRoutes: Routes = [{ path: ':username', component: ProfileComponent }];

@NgModule({
  declarations: [
    ProfileComponent,
    GoalComponent,
    CommentsComponent,
    AddComment
  ],
  imports: [
    RouterModule.forChild(profileRoutes),
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatDividerModule,
    MatListModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
  ]
})
export class ProfileModule { }
