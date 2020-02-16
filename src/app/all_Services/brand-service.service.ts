import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Brand } from '../model/Brand/brand';
import { Model } from '../model/Model/model';
import { Bike } from '../model/Bike/bike';
// import { Geo } from '../model/Geo/geo';

@Injectable({
  providedIn: 'root'
})
export class BrandServiceService {

   
  // brandurl : string="http://localhost:8080/brand/allbrand"
  // //getAllDataUrl : string="assets/brand.json";

  // get_Brand() : Observable<Brand[]>
  // {
  //   console.log("inside service brand",);
  //   return this.http.get<Brand[]>(this.brandurl);
    
  // }

  // //model http  end point call
  // modelurl : string="http://localhost:8080/model/allmodel"
 
  // get_Model() : Observable<Model[]>
  // {
  //   console.log("inside service model");
  //   return this.http.get<Model[]>(this.modelurl);
    
  // }


  bikeurl: string="http://localhost:8080/api/brandSelection";
  get_Bike():Observable<Bike[]>
  {
    return this.http.get<Bike[]>(this.bikeurl);
  }

  geourl: string="http://localhost:8080/api/geoSelection";
  get_Geo():Observable<Object[]>
  {
    return this.http.get<Object[]>(this.geourl);
  }
  
 
  constructor(private http: HttpClient) { }
}
