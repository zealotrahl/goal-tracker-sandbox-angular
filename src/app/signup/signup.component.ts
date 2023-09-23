import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { repeatPasswordValidator } from './validators';




@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  signupForm = new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.maxLength(10)]),
    lastName: new FormControl('', [Validators.required, Validators.maxLength(10)]),
    username: new FormControl('', [Validators.required, Validators.maxLength(6)]),
    password: new FormControl('', [Validators.required, Validators.maxLength(8)]),
    repeatPassword: new FormControl('', [repeatPasswordValidator])
  })

  onSubmit() {
    this.signupForm.get('repeatPassword')?.updateValueAndValidity()

    if (!this.signupForm.valid) {
      return;
    }


    console.log(this.signupForm.value);
  }
}
