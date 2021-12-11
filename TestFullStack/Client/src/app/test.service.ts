import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private http:HttpClient) { }

  private _url:string = "http://localhost:3003/api/get_pincode_details";

  GetPincodeDetails () {
    return this.http.post(this._url,{"pincode":"110001"});
  }

}
