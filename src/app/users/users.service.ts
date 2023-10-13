import { Injectable } from '@angular/core';
import axios, { AxiosResponse } from 'axios';
import { User } from './user.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }

  async fetchUsers(): Promise<User[]> {
    return [
      {
        id: 1,
        firstName: 'John',
        lastName: 'Smith',
        username: 'johnsm',
        desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
      }
    ];
  }

  async searchUsers(searchValue: string): Promise<User[]> {
    return axios.get<AxiosResponse<User[]>>(environment.apiUrl + '/users/search', {
      params: {
        q: searchValue
      }
    }).then((result) => {
      return result.data as any as User[];
    })
  }

  async getOne(username: string): Promise<User> {
    return axios.get<AxiosResponse<User>>(environment.apiUrl + '/users/by-username/' + username).then((result) => {
      return result.data as any as User;
    })
  }
}
