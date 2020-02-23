import { Component, OnInit, Input } from '@angular/core';
import { Lease } from 'src/app/model/Lease/lease';
import { Model_Geo } from 'src/app/model/Model-Geo/mod_geo';
import { CreateOfferDataService } from 'src/app/all_Services/create-offer-data.service';
import { Tactic } from 'src/app/model/Tactic/tactic';

@Component({
  selector: 'app-lease-selection',
  templateUrl: './lease-selection.component.html',
  styleUrls: ['./lease-selection.component.css']
})
export class LeaseSelectionComponent implements OnInit {
  lease: Lease = new Lease();
  tac:Tactic=new Tactic();
  constructor(private dataService: CreateOfferDataService) {
    
   }
  ngOnInit() {
    // this.lease.term="";
    // this.lease.rate=0;
    // this.lease.bank="";
    // this.lease.amount=0;
    
    this.lease = this.dataService.getLeaseData();
  }
  leaseSubmission() {
       
    this.dataService.setTacticData(this.tac);
    

    if(this.lease.amount==null || this.lease.downpayment==null || this.lease.remainingAmount==null ||
      this.lease.term=="" || this.lease.rate==null || this.lease.bank=="")
    {
         alert("Fill All The Fields");
    }
    else
    {
    
        this.dataService.setLeaseData(this.lease);
    }
  }
}
