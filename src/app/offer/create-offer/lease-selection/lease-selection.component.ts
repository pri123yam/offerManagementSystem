import { Component, OnInit, Input } from '@angular/core';
import { Lease } from 'src/app/model/Lease/lease';
import { Model_Geo } from 'src/app/model/Model-Geo/mod_geo';
import { CreateOfferDataService } from 'src/app/all_Services/create-offer-data.service';

@Component({
  selector: 'app-lease-selection',
  templateUrl: './lease-selection.component.html',
  styleUrls: ['./lease-selection.component.css']
})
export class LeaseSelectionComponent implements OnInit {
  lease: Lease = new Lease();
  constructor(private dataService: CreateOfferDataService) { }
  ngOnInit() {
    this.lease = this.dataService.getLeaseData();
  }
  leaseSubmission() {
    this.dataService.setLeaseData(this.lease);
  }
}
