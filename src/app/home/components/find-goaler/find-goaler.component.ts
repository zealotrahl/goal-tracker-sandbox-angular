import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Router } from '@angular/router';
import { Observable, debounceTime, map, mergeMap, startWith } from 'rxjs';
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

  constructor(private usersService: UsersService, private router: Router) {}

  async ngOnInit() {
    this.filteredOptions = this.goalerControl.valueChanges.pipe(
      startWith(''),
      debounceTime(300),
      map(async (value) => await this.filterUsers(value || '')),
      mergeMap((observable) => observable),
    );
  }

  async filterUsers(value: string): Promise<IOption[]> {
    if (value == '')
      return [];

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

  goalerSelected($event: MatAutocompleteSelectedEvent) {
    this.router.navigate([`profile/${$event.option.value}`]);
  }
}
