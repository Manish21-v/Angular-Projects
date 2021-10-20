import { Component, ElementRef, EventEmitter, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angularmaterial';
  @ViewChild('parentInput') parentInput : ElementRef
  public greeting = "Hello Child Component";
  public parentEmitter = new EventEmitter();
  public childMessage = "" ;
  public message = "";
  constructor() {

  }

  sendData() {
    this.message = this.parentInput.nativeElement.value;
    console.log('this.message',this.message);
    this.parentEmitter.emit(this.message);
  }
}
