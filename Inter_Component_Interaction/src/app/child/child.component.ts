import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() public parentData;
  @Output() public myEvent = new EventEmitter();
  @Input() public parentMessage = ""; //Get the message from parent dynamically even after child component is already rendered

  public message: String = ""
  constructor() { }

  ngOnInit(): void {
  }
  sendName() {
    this.myEvent.emit(this.message);
    console.log(this.message);
  }
}
