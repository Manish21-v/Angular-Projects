import { Component, Input, OnInit, Output ,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() public parentData : number;
  @Input() public countlenght : number;
  @Output() public myEvent = new EventEmitter();
  public name: string = "";
  constructor() { }

  ngOnInit() {
  }
  sendName(){
    this.myEvent.emit(this.name);
  }
}
