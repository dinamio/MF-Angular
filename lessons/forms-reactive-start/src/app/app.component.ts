import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators,FormArray} from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  genders = ['male', 'female'];
  forbiddenName = ['Bob', 'Anna'];
  signupForm : FormGroup;
  ngOnInit() {
    this.signupForm = new FormGroup({
      "username" : new FormControl(null, [Validators.required,this.forbiddenValidator.bind(this)]),
      "email" : new FormControl(null, [Validators.required,Validators.email]),
      "gender": new FormControl('female'),
      "hobbies": new FormArray([])
    });
  }
  onSubmit() {
    console.log(this.signupForm);
  }
  forbiddenValidator(control: FormControl) : {[s: string] : boolean} {
    if (this.forbiddenName.indexOf(control.value) !== -1) {
      return {"Name is forbidden" : true};
    }
    return null;
  }

  onHobbyAdd() {
    let hobbyControl = new FormControl(null);
    (<FormArray>this.signupForm.get("hobbies")).push(hobbyControl);

  }
}
