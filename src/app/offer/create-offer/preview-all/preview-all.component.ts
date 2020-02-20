import { Component, OnInit } from '@angular/core';
import { InteractionService } from 'src/app/interaction.service';
import { Model_Geo } from 'src/app/model/Model-Geo/mod_geo';
import { CreateOfferDataService } from 'src/app/all_Services/create-offer-data.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-preview-all',
  templateUrl: './preview-all.component.html',
  styleUrls: ['./preview-all.component.css']
})


export class PreviewAllComponent implements OnInit {

  allModelGeo : any;
  lease: any;
  tactic: any;
  validDate: any;
  isLease:any;
  isTactic: any;

  constructor(private dataservice: CreateOfferDataService,private loc:Location) { 
    
    
  }

  ngOnInit() {

        this.isLease=0;
        this.isTactic=0;
        this.allModelGeo=this.dataservice.getBrandGeoData();
        this.lease=this.dataservice.getLeaseData();
        this.tactic=this.dataservice.getTacticData();
        this.validDate=this.dataservice.getValDate();

        console.log(this.allModelGeo);
        console.log(this.lease);
        console.log(this.tactic);
        console.log(this.validDate);

        // obj && (Object.keys(obj).length
        if(this.lease && (Object.keys(this.lease).length!=0))
        {
          console.log("lease not Empty");
          this.isLease=1;
        }
        if(this.tactic && (Object.keys(this.tactic).length!=0))
        {
          console.log("tactic not empty");
          this.isTactic=1;
        }

  }

  goBack(){
    this.loc.back();
  }

  showDetails()
  {
        alert(this.allModelGeo);
        alert(this.lease);
        alert(this.tactic);
        alert(this.validDate);
  }

}
