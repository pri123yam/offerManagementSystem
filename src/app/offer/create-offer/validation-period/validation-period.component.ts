import { Component, OnInit, Input } from '@angular/core';
import { ValDate } from 'src/app/model/Vdate/valDate';
import {Location} from '@angular/common';


@Component({
  selector: 'app-validation-period',
  templateUrl: './validation-period.component.html',
  styleUrls: ['./validation-period.component.css']
})
export class ValidationPeriodComponent implements OnInit {

  valid : ValDate =new ValDate();

  

  constructor(private loc : Location) { }

  ngOnInit() {
  }

  check()
  {
    console.warn(this.valid);
    
  }
  goBack(){
    this.loc.back();
  }

}
