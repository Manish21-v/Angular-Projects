import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { GithubserviceService } from '../githubservice.service';

@Component({
  selector: 'app-searchprofile',
  templateUrl: './searchprofile.component.html',
  styleUrls: ['./searchprofile.component.css']
})
export class SearchprofileComponent implements OnInit {
  public userDetails ;
  searchUser = this.fbobj.group({
    username : '',
  });

  constructor(private fbobj: FormBuilder,private service:GithubserviceService,) { }

  ngOnInit(): void {
  }
  
  getUserProfile() {
    let username = this.searchUser.get('username').value;
    this.service.getUserProfile(username)
    .subscribe(data => {
      console.log('data',data);
      this.userDetails = data;
      this.service.setValidUsername(username); 
    },err => {
      console.log('err',err);
      this.service.setInvalidUsername(username);
    });
  }

}
