import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users/users.service';
import { User } from '../users/user.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { GoalsService } from '../goals/goals.service';
import { Goal } from '../goals/goal.interface';
import { MatDialog } from '@angular/material/dialog';
import { GoalComponent } from './components/goal/goal.component';
import { Comment } from '../comments/comment.interface';
import { CommentsService } from '../comments/comments.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  user: User | null = null;
  private username: string | null = null;
  goals: Goal[] = [];
  comments: Comment[] = [];

  constructor(
    private usersService: UsersService,
    route: ActivatedRoute,
    private router: Router,
    private goalsService: GoalsService,
    public dialog: MatDialog,
    private commentsService: CommentsService,
  ) {
    const param = route.snapshot.paramMap.get('username');
    if (param) {
      this.username = param;
    }
  }

  openDialog(goal: Goal): void {
    this.dialog.open(GoalComponent, {
      width: '450px',
      data: {
        goal,
      }
    });
  }

  async ngOnInit(): Promise<void> {
    if (this.username == null) {
      this.router.navigate(['/']);
      return;
    }

    this.user = await this.usersService.getOne(this.username);

    if (!this.user) {
      this.router.navigate(['/']);
      return;
    }

    this.goals = await this.goalsService.getGoalsByUserId(this.user.id);
    this.comments = await this.commentsService.getCommentsByProfile(this.user.id);
  }
}