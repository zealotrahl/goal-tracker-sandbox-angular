import { Injectable } from '@angular/core';
import { Comment } from './comment.interface';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor() { }

  async getCommentsByProfile(userId: number): Promise<Comment[]> {
    return [
      {
        id: 1,
        userId: 1,
        text: "Hello world",
        user: {
          id: 1,
          firstName: 'John',
          lastName: 'Green',
          username: 'john',
          desc: 'my',
        }
      },
      {
        id: 1,
        userId: 1,
        text: "Hello world",
        user: {
          id: 1,
          firstName: 'John',
          lastName: 'Green',
          username: 'john',
          desc: 'my',
        }
      }
    ]
  }
}
