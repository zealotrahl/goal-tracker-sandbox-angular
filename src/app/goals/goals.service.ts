import { Injectable } from '@angular/core';
import { Goal } from './goal.interface';

@Injectable({
  providedIn: 'root'
})
export class GoalsService {

  constructor() { }

  async getGoalsByUserId(userId: number): Promise<Goal[]> {
    return [
      {
        id: 1,
        title: 'Learn angular js',
        description: 'what should I learn about angular js',
        userId: 1
      },
      {
        id: 1,
        title: 'Learn angular js 2',
        description: 'what should I learn about angular js',
        userId: 1
      }
    ]
  }
}
