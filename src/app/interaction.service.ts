import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Model_Geo } from './model/Model-Geo/mod_geo';

@Injectable({
  providedIn: 'root'
})
export class InteractionService {

  private modelgeosource =new Subject<Model_Geo>();
  modelgeo$=this.modelgeosource.asObservable();

  constructor() { }

  sendModelGeo(message : Model_Geo){

    console.log(this.modelgeo$);
    this.modelgeosource.next(message);
  }
}
