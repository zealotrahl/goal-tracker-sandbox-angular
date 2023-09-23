import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent {
  signinForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.maxLength(6)]),
    password: new FormControl('', [Validators.maxLength(8)]),
  })

  onSubmit() {
    if (!this.signinForm.valid) {
      return;
    }

    console.log(this.signinForm.value);
  }
}
