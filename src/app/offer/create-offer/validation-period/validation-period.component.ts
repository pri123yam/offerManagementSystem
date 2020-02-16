import { Component, OnInit, Input } from '@angular/core';
import { ValDate } from 'src/app/model/Vdate/valDate';


@Component({
  selector: 'app-validation-period',
  templateUrl: './validation-period.component.html',
  styleUrls: ['./validation-period.component.css']
})
export class ValidationPeriodComponent implements OnInit {

  valid : ValDate =new ValDate();

  

  constructor() { }

  ngOnInit() {
  }

  check()
  {
    console.warn(this.valid);
    
  }

}
