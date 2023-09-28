import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.scss'],
})
export class AddComment {
  addCommentForm = new FormGroup({
    text: new FormControl('', [Validators.required])
  })

  onSubmit() {
    if (!this.addCommentForm.valid) {
      return;
    }

    console.log(this.addCommentForm.value);
  }
}