import { Component, OnInit, Input } from '@angular/core';
import { ValDate } from 'src/app/model/Vdate/valDate';
import {Location} from '@angular/common';
import { CreateOfferDataService } from 'src/app/all_Services/create-offer-data.service';


@Component({
  selector: 'app-validation-period',
  templateUrl: './validation-period.component.html',
  styleUrls: ['./validation-period.component.css']
})
export class ValidationPeriodComponent implements OnInit {

  valid : ValDate =new ValDate();
  date:any;
  

  constructor(private loc : Location,private dataService : CreateOfferDataService) { }

  ngOnInit() {

      this.date=new Date();
      this.valid=this.dataService.getValDate();
  }

  check()
  {
    console.warn(this.valid);
    this.dataService.setValidDate(this.valid);
    
  }
  goBack(){
    this.loc.back();
  }

}