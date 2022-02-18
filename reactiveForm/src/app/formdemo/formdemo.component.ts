import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ValidationService } from '../validation.service';

@Component({
  selector: 'app-formdemo',
  templateUrl: './formdemo.component.html',
  styleUrls: ['./formdemo.component.css']
})
export class FormdemoComponent implements OnInit {
  public supportCenterForm : any;
  constructor(private formBuilder:FormBuilder) { 
    this.supportCenterForm = this.formBuilder.group({
      firstname: ['',Validators.required],
      lastname: ['',Validators.required],
      email : ['',Validators.required,ValidationService.validateEmail],
      phone : ['',Validators.required],
      address : ['',Validators.required]
    })
  }

  ngOnInit(): void {
  }

  saveUser(){
    console.log('data from form');
  }

}
