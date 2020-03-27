import { Component, OnInit } from '@angular/core';
import { CreateOfferDataService } from 'src/app/all_Services/create-offer-data.service';
import { Location } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import Swal from 'sweetalert2';
import { Offer } from 'src/app/model/offer/offer';
import { ThrowStmt } from '@angular/compiler';
import { Offer_new } from 'src/app/model/offer/offer_new';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'Basic ' + btoa('pratik:pwd')
  })
};

@Component({
  selector: 'app-preview-all',
  templateUrl: './preview-all.component.html',
  styleUrls: ['./preview-all.component.css']
})


export class PreviewAllComponent implements OnInit {

  offer: Offer;
  new_offer: Offer_new;
  allModelGeo: any;
  lease: any;
  tactic: any;
  validDate: any;
  isLease: any;
  isTactic: any;
  message:any;

  constructor(private dataservice: CreateOfferDataService, private loc: Location,private http : HttpClient) { }

  ngOnInit() {
    this.isLease = 0;
    this.isTactic = 0;
   this.allModelGeo = this.dataservice.getBrandGeoData();
    console.warn(this.dataservice.getBrandGeoData());
    this.lease = this.dataservice.getLeaseData();
    this.tactic = this.dataservice.getTacticData();
    this.validDate = this.dataservice.getValDate();
    //model creation
    // this.offer.allModelGeo.brand=this.allModelGeo.brand;
    // console.log(this.offer.allModelGeo.brand);
    // this.offer.tactic=this.tactic;
    // this.offer.lease=this.lease;
    // this.offer.validDate=this.validDate;
    // this.offer=this.dataservice.getOffer();
    this.new_offer=this.dataservice.getnewOffer();

    // console.log("offer Brand: "+this.offer.allModelGeo.brand)
    console.log(this.new_offer)
  }
  goBack() {
    this.loc.back();
  }
  // showDetails() {
  //   alert(this.allModelGeo);
  //   alert(this.lease);
  //   alert(this.tactic);
  //   alert(this.validDate);
  // }
  createOffer(){
    
    Swal.fire('success','Your Offer Created','success');
    // let response = this.http.
    let response =  this.http.post("http://localhost:8080/api/createOffer",httpOptions);
    response.subscribe(data => {
      this.message = data;
      if(this.message === "Succesful")
         Swal.fire('success','Offer- Created','success');
      else
      Swal.fire('failure','Offer could not be Created','error');
      console.log(this.message);
    })
  }
}