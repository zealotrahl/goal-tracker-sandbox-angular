import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.scss']
})
export class GoalComponent {
  constructor(public dialogRef: MatDialogRef<GoalComponent>) {}
}
