import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  constructor() { }

  static validateName(control) {
    if(control.value.match()) {
      return null;
    }
    else {
      return {'invalidName':true};
    }
  }
  
  static validateEmail(control:FormControl){
    if (control.value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)) 
      {
        return null;
      } 
      else 
      {
        return { 'invalidEmailAddress': true };
      }
  }

  static validatePhone(control) {
    if(control.value.match()) {
      return null;
    }
    else {
      return {'invalidPhoneNumber':true};
    }
  }
}
