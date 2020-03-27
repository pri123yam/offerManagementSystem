import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Brand } from '../model/Brand/brand';
import { Model } from '../model/Model/model';
import { Bike } from '../model/Bike/bike';
import { HttpHeaders } from '@angular/common/http';
// import { Geo } from '../model/Geo/geo';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'Basic ' + btoa('pratik:pwd')
  })
};

@Injectable({
  providedIn: 'root'
})
export class BrandServiceService {

  bikeurl: string="http://localhost:8080/api/brandSelection";
  get_Bike():Observable<Bike[]>
  {
    return this.http.get<Bike[]>(this.bikeurl,httpOptions);
  }

  geourl: string="http://localhost:8080/api/geoSelection";
  get_Geo():Observable<Object[]>
  {
    return this.http.get<Object[]>(this.geourl,httpOptions);
  }
  
 
  constructor(private http: HttpClient) { }
}
