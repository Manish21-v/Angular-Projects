import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public childNameLength: number = 0;
  public message: string = "";
  public strlength = new EventEmitter();
  
  countlength() {
    this.childNameLength = this.message.length;
    this.strlength.emit(this.childNameLength);
  }

}
