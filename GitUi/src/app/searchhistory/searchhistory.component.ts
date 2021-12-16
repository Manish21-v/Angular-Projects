import { Component, OnInit } from '@angular/core';
import { GithubserviceService } from '../githubservice.service';

@Component({
  selector: 'app-searchhistory',
  templateUrl: './searchhistory.component.html',
  styleUrls: ['./searchhistory.component.css']
})
export class SearchhistoryComponent implements OnInit {
  public usersList ; 
  public url = "https://github.com/"
  constructor(private service:GithubserviceService) { }

  ngOnInit(): void {
    this.usersList = this.service.getHistoryDetails();
  }

  clearSearchHistory() {
    this.service.clearHistory();
    this.usersList = {};
  }

}
