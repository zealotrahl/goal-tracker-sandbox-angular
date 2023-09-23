import { AbstractControl } from "@angular/forms";

export function repeatPasswordValidator(control: AbstractControl) {
  return control.value === control.root.get('password')?.value ? null : {
    repeatPasswordError: {
      value: control.value
    }
  }
}