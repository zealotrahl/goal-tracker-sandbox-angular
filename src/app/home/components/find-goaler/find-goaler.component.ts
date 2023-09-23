import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, from, map, mergeAll, mergeMap, startWith } from 'rxjs';
import { User } from 'src/app/users/user.interface';
import { UsersService } from 'src/app/users/users.service';


interface IOption {
  searchText: string;
  isDisabled: boolean;
  value: User | null;
}

@Component({
  selector: 'app-find-goaler',
  templateUrl: './find-goaler.component.html',
  styleUrls: ['./find-goaler.component.scss']
})
export class FindGoalerComponent implements OnInit {
  goalerControl = new FormControl('');
  users: User[] = [];
  filteredOptions: Observable<IOption[]> = new Observable();

  constructor(private usersService: UsersService) {}

  async ngOnInit() {
    this.filteredOptions = this.goalerControl.valueChanges.pipe(
      startWith(''),
      map(async (value) => await this.filterUsers(value || '')),
      mergeMap((observable) => observable),
    );
  }

  async filterUsers(value: string): Promise<IOption[]> {
    const result: IOption[] = (await this.usersService.searchUsers(value)).map((user: User) => {
      return {
        searchText: user.firstName + user.lastName + user.username,
        value: user,
        isDisabled: false,
      }
    })

    if (result.length == 0) {
      result.push({
        searchText: 'No data to show',
        value: null,
        isDisabled: true,
      })
    }

    return result;
  }
}
