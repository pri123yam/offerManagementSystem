import { Component, OnInit } from '@angular/core';
import { CreateOfferDataService } from 'src/app/all_Services/create-offer-data.service';
import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-preview-all',
  templateUrl: './preview-all.component.html',
  styleUrls: ['./preview-all.component.css']
})


export class PreviewAllComponent implements OnInit {

  allModelGeo: any;
  lease: any;
  tactic: any;
  validDate: any;
  isLease: any;
  isTactic: any;

  constructor(private dataservice: CreateOfferDataService, private loc: Location,private http : HttpClient) { }

  ngOnInit() {
    this.isLease = 0;
    this.isTactic = 0;
    this.allModelGeo = this.dataservice.getBrandGeoData();
    this.lease = this.dataservice.getLeaseData();
    this.tactic = this.dataservice.getTacticData();
    this.validDate = this.dataservice.getValDate();
  }
  goBack() {
    this.loc.back();
  }
  showDetails() {
    alert(this.allModelGeo);
    alert(this.lease);
    alert(this.tactic);
    alert(this.validDate);
  }
  createOffer(){
    Swal.fire('success','Your Offer Created','success');
    // let response = this.http.
  }
}