import { Component, Input } from '@angular/core';
import { Comment } from 'src/app/comments/comment.interface';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent {
  @Input() comments: Comment[] = [];
}
