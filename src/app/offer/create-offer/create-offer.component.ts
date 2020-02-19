import { Component, OnInit } from '@angular/core';
import { Model_Geo } from 'src/app/model/Model-Geo/mod_geo';

@Component({
  selector: 'app-create-offer',
  templateUrl: './create-offer.component.html',
  styleUrls: ['./create-offer.component.css']
})
export class CreateOfferComponent implements OnInit {

  // alreadySelectedModelGeo : Model_Geo;
  constructor() { }

  ngOnInit() {
  }
  // receiveSelectedModelGeo($event){
  //   this.alreadySelectedModelGeo = $event;
  //   console.log(this.alreadySelectedModelGeo);
  // }
}
