import { Injectable } from '@angular/core';
import { User } from './user.interface';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }

  async fetchUsers(): Promise<User[]> {
    return [
      {
        firstName: 'John',
        lastName: 'Smith',
        username: 'johnsm',
      }
    ];
  }

  async searchUsers(searchValue: string): Promise<User[]> {
    return [
      {
        firstName: 'John',
        lastName: 'Smith',
        username: 'johnsm',
      }
    ];
  }
}
