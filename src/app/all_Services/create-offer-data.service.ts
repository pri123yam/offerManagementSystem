import { Injectable } from '@angular/core';
import { EventEmitter } from 'protractor';
import { Lease } from '../model/Lease/lease';
import { Model_Geo } from '../model/Model-Geo/mod_geo';
import { Tactic } from '../model/Tactic/tactic';
import { STactic } from '../model/Tactic/select_tactic';
import { ValDate } from '../model/Vdate/valDate';

@Injectable({
  providedIn: 'root'
})
export class CreateOfferDataService {
  private selectedBrandGeoData = new Model_Geo();
  private leaseData = new Lease();
  private tacticData = new STactic();
  private validDate =new ValDate();
  setBrandGeoData(val : any){
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