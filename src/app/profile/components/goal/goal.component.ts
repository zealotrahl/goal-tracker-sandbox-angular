import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Goal } from 'src/app/goals/goal.interface';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.scss']
})
export class GoalComponent {
  constructor(public dialogRef: MatDialogRef<GoalComponent>, @Inject(MAT_DIALOG_DATA) public data: { goal: Goal }) {}
}
