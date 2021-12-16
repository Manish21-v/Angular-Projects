import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GithubserviceService {

  private url = "https://api.github.com/";
  public userList = { "validUser" : "", "invalidUser" : ""}; 

  public validNameHistory : string[] = [];
  public invalidNameHistory : string[] = [];

  constructor(private http: HttpClient) { }

  getUserProfile(name:string):Observable<any> {
    return this.http.get(`${this.url}users/${name}`);
  }

  setValidUsername(userName){
    this.validNameHistory.push(userName);
    localStorage.setItem('validUserName',JSON.stringify(this.validNameHistory));
  }

  setInvalidUsername(userName){
    this.invalidNameHistory.push(userName);
    localStorage.setItem('invalidUserName',JSON.stringify(this.invalidNameHistory));
  }

  getHistoryDetails () {  
   this.userList.validUser = localStorage.getItem('validUserName') ? JSON.parse(localStorage.getItem('validUserName')) : [];
   this.userList.invalidUser = localStorage.getItem('invalidUserName') ? JSON.parse(localStorage.getItem('invalidUserName')) : [];
    return this.userList;
  }

  clearHistory() {
    localStorage.clear();
  }

}
