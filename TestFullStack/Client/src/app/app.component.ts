import { Component } from '@angular/core';
import { TestService } from './test.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Client';

  public pincodeDetails : any;
  
  constructor(private _test_service: TestService )
  {

  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this._test_service.GetPincodeDetails()
    .subscribe((data:any)  => {
      this.pincodeDetails = data.body[0].PostOffice
      console.log(this.pincodeDetails);

    });
  }
}
