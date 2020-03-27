import { Injectable } from '@angular/core';
import { EventEmitter } from 'protractor';
import { Lease } from '../model/Lease/lease';
import { Model_Geo } from '../model/Model-Geo/mod_geo';
import { Tactic } from '../model/Tactic/tactic';
import { STactic } from '../model/Tactic/select_tactic';
import { ValDate } from '../model/Vdate/valDate';
import { Offer } from '../model/offer/offer';
import { Vehicle } from '../model/offer/vehicle';
import { Geo } from '../model/offer/geo';
import { Offer_new } from '../model/offer/offer_new';


@Injectable({
  providedIn: 'root'
})
export class CreateOfferDataService {
  private selectedBrandGeoData = new Model_Geo();
  private leaseData = new Lease();
  private tacticData = new STactic();
  private validDate =new ValDate();
  private offer=new Offer();
  private newOffer=new Offer_new();

  //offer Json

  private vehicle=new Vehicle();
  private geo=new Geo();

  setVehicle(val : any)
  {
    this.vehicle=val;
  }
  getVehicle(){
    return this.vehicle;
  }
  setGeo(val: any)
  {
    this.geo=val;
  }
  getGeo()
  {
    return this.geo;
  }

  getOffer(){
    this.offer.allModelGeo=this.getBrandGeoData();
    this.offer.lease=this.getLeaseData();
    this.offer.tactic=this.getTacticData();
    this.offer.validDate=this.getValDate();

    return this.offer;
  }

  getnewOffer(){

    this.newOffer.vehicle=this.getVehicle();
    this.newOffer.geo=this.getGeo();
    this.newOffer.lease=this.getLeaseData();
    this.newOffer.tactic=this.getTacticData();
    this.newOffer.validation=this.getValDate();

    return this.newOffer;
  }

  setBrandGeoData(val : any){
    console.log(val)
    this.selectedBrandGeoData = val;
  }
  getBrandGeoData(){
    return this.selectedBrandGeoData;
  }
  getLeaseData(){
    return this.leaseData;
  }
  setLeaseData(val : any){
    this.leaseData = val;
  }
  setTacticData(val : any){
    this.tacticData = val;
  }
  getTacticData(){
    return this.tacticData;
  }
  setValidDate(val : any)
  {
    this.validDate=val;
  }
  getValDate()
  {
    return this.validDate;
  }
}