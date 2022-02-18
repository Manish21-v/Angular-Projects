import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms'


@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {
  public userForm : any;
  constructor(private formBuilder : FormBuilder) {
    this.userForm = this.formBuilder.group({
      firstname : ['',Validators.required],
      lastname : ['',[Validators.maxLength(10),Validators.required]],
      userLocation : this.formBuilder.group({
        landmark : ['',],
        area : ['',Validators.required],
        pincode : ['',Validators.pattern['[0-9]*']]
      })
    })
   }

  ngOnInit(): void {
    console.log(this.userForm.controls.firstname);
  }

  saveDetails(){
    console.log(this.userForm.get('userLocation'))
    console.log('details',this.userForm.get('firstname').value);
  }

}
