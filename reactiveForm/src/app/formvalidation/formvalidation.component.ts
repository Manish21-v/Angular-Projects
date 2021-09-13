import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-formvalidation',
  templateUrl: './formvalidation.component.html',
  styleUrls: ['./formvalidation.component.css']
})
export class FormvalidationComponent implements OnInit {
@Input() control: FormControl;
  constructor() { }

  ngOnInit(): void {
  }

}
