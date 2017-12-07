import { Component,ViewChild,OnInit } from '@angular/core';
import { NgForm} from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild("f") submitForm: NgForm;
  answer = '';
  genders = ['male','female'];


  suggestUserName() {
    const suggestedName = 'Superuser';
    this.submitForm.form.patchValue({
      "userData" : {
        "username" : suggestedName
      }
    });
    this.submitForm.reset();
  }

  onSubmit() {
    console.log(this.submitForm);
  }
}
