import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BrandServiceService } from 'src/app/all_Services/brand-service.service'
import { Brand } from 'src/app/model/Brand/brand';
import { analyzeAndValidateNgModules, CompileShallowModuleMetadata } from '@angular/compiler';
import { Bike } from 'src/app/model/Bike/bike';
import { Model_Geo } from 'src/app/model/Model-Geo/mod_geo';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { CreateOfferDataService } from 'src/app/all_Services/create-offer-data.service';
import { Vehicle } from 'src/app/model/offer/vehicle';
import { Geo } from 'src/app/model/offer/geo';

@Component({
  selector: 'app-brand-selection',
  templateUrl: './brand-selection.component.html',
  styleUrls: ['./brand-selection.component.css']
})
export class BrandSelectionComponent implements OnInit {

  $sendBrandGeoData = new EventEmitter();
  // brand: Brand[] ;
  placeHolder = "Select Value";
  brand = [];
  // model=[];
  bikeinfo = [];
  sortedBrand = [];
  model = [];
  sortedModel = [];
  bodymodel = [];
  sortedBodyModel = [];


  //this is geography data
  geoinfo = [];

  state = [];
  sid= [];
  sortedState = [];
  // selectedState:string;

  district = [];
  did=[];
  sortedDistrict = [];
  // selectedDistrict: string;

  city = [];
  cid=[];
  sortedCity = [];
  // selectedCity:string;

 //offer JSON
  vehicle=new Vehicle();
  geo=new Geo();

  selectedModelGeo: Model_Geo = new Model_Geo();

  @Input() flag: number;

  constcity = [];
  constdist = [];
  conststate = [];

  // dropdownSettings = {};

  constructor( private brnd: BrandServiceService, private dataService: CreateOfferDataService) { }

  ngOnInit() {

    console.log(this.dataService.getBrandGeoData());
    
    
    
    this.selectedModelGeo.brand = "";
    this.selectedModelGeo.model = "";
    this.selectedModelGeo.bodyModel = "";
    this.selectedModelGeo.state = [];
    this.selectedModelGeo.district = [];
    this.selectedModelGeo.city = [];

    //# Data Read And Brand Sorted Display
    this.brnd.get_Bike().subscribe(data => {
    this.bikeinfo = data;
      for (var i = 0; i < this.bikeinfo.length; i++) {
        this.brand.push(this.bikeinfo[i].brandName);

      }
      this.sortedBrand = Array.from(new Set(this.brand));
      if (this.dataService.getBrandGeoData().brand ) {
        this.selectedModelGeo = this.dataService.getBrandGeoData();
        this.vehicle=this.dataService.getVehicle();
        this.geo=this.dataService.getGeo();
        this.onSelectBrand();
      }
    })
    //geography details
    this.brnd.get_Geo().subscribe(data => {
    this.geoinfo = data;

      for (var i = 0; i < this.geoinfo.length; i++) {
        this.state.push(this.geoinfo[i].state.stateName);
        //added later
        this.district.push(this.geoinfo[i].district.districtName);
        this.city.push(this.geoinfo[i].city.cityName);

      }
      this.sortedState = Array.from(new Set(this.state));
      //added later
      this.sortedDistrict = Array.from(new Set(this.district));
      this.sortedCity = Array.from(new Set(this.city));

      this.constcity = this.sortedCity;
      this.constdist = this.sortedDistrict;
      this.conststate = this.sortedState;

    });
  }


  onSelectBrand() {
    this.model = [];
    this.sortedModel = [];
    this.sortedBodyModel = null;


    console.info(this.selectedModelGeo.brand);
    this.vehicle.brandName=this.selectedModelGeo.brand;
    for (var i = 0; i < this.bikeinfo.length; i++) {
      let f=0;
      if(f==0 && this.bikeinfo[i].brandName==this.vehicle.brandName)
        {
              this.vehicle.brandId=this.bikeinfo[i].brandId;
              f=1;
        }
      if (this.bikeinfo[i].brandName == this.selectedModelGeo.brand) {
        
        this.model.push(this.bikeinfo[i].modelName);
      }
    }
    
    this.sortedModel = Array.from(new Set(this.model));
    if (this.selectedModelGeo.model) {
      console.log(this.selectedModelGeo.model)
      console.log(this.model)
      this.onSelectModel();
    }
  }

  onSelectModel() {
    this.bodymodel = [];
    this.sortedBodyModel = [];
    this.vehicle.modelName=this.selectedModelGeo.model;
    console.log(this.selectedModelGeo.model);
    for (var i = 0; i < this.bikeinfo.length; i++) {

      let f=0;
      if(f==0 && this.bikeinfo[i].modelName==this.vehicle.modelName)
        {
              this.vehicle.modelId=this.bikeinfo[i].modelId;
              f=1;
        }
      if (this.bikeinfo[i].modelName == this.selectedModelGeo.model) {
        this.bodymodel.push(this.bikeinfo[i].bodyModelName);
      }
    }
    this.sortedBodyModel = Array.from(new Set(this.bodymodel));
  }

  onSelectBodyModel() {
    console.log(this.selectedModelGeo.bodyModel);
    this.vehicle.bodyModelName=this.selectedModelGeo.bodyModel;
    for (var i = 0; i < this.bikeinfo.length; i++) {

      let f=0;
      if(f==0 && this.bikeinfo[i].bodyModelName==this.vehicle.bodyModelName)
        {
              this.vehicle.bodyModelId=this.bikeinfo[i].bodyModelId;
              f=1;
              break;
        }
      
    }
    
  }

  onSelectState() {
    
    // var temp: any[];
    console.warn("inside state");
    
    console.log(this.selectedModelGeo.state.length);
    
    if (!this.selectedModelGeo.state.length) {
      this.sortedDistrict = this.constdist;
      this.sortedCity = this.constcity;

      
    }


    else {
      // this.geo.state=[];
      console.info(this.selectedModelGeo.state);
      this.district = [];
      this.sortedDistrict = [];
      this.city = [];
      this.sortedCity = [];
     

      for (var i = 0; i < this.geoinfo.length; i++) {

        for (var j = 0; j < this.selectedModelGeo.state.length; j++) {
          if (this.geoinfo[i].state.stateName == this.selectedModelGeo.state[j]) {
            //console.log(this.bikeinfo[i].brandName);
            //this.geo.state.push(this.geoinfo[i].state.stateId);
            this.sid.push(this.geoinfo[i].state.stateId);
            this.district.push(this.geoinfo[i].district.districtName);
            this.city.push(this.geoinfo[i].city.cityName);

          }
          // console.log(i);
        }

      }
      

      this.sortedDistrict = Array.from(new Set(this.district));
      this.sortedCity = Array.from(new Set(this.city));
      this.geo.state= Array.from(new Set(this.sid));
      //console.log(this.sortedCity);
    }

     
  }

  onSelectDistrict() {
    
    console.warn(this.selectedModelGeo.district);


    if (!this.selectedModelGeo.district.length) {

      console.log("blank district");
      this.sortedCity = this.constcity;

    }
    else {
      this.city = [];
      this.sortedCity = [];

      for (var i = 0; i < this.geoinfo.length; i++) {

        //changed
        for (var j = 0; j < this.selectedModelGeo.district.length; j++) {
          if (this.geoinfo[i].district.districtName == this.selectedModelGeo.district[j]) {
            //console.log(this.bikeinfo[i].brandName);
            this.did.push(this.geoinfo[i].district.districtId);
            this.city.push(this.geoinfo[i].city.cityName);
          }
          // console.log(i);
        }
      }
      this.sortedCity = Array.from(new Set(this.city));
      this.geo.district=Array.from(new Set(this.did));
    }
    

  }

  onSelectCity() {
    console.log(this.selectedModelGeo.city);
    for (var i = 0; i < this.geoinfo.length; i++) {
      for (var j = 0; j < this.selectedModelGeo.city.length; j++) {
        if (this.geoinfo[i].city.cityName == this.selectedModelGeo.city[j]) {
          this.cid.push(this.geoinfo[i].city.cityId);
          //this.geo.city.push(this.geoinfo[i].city.cityId);
        }
        // console.log(i);
      }
    }
    this.geo.city=Array.from(new Set(this.cid));

    

  }

  finalJson() {
    // this.iservice.sendModelGeo(this.selectedModelGeo);
    this.$sendBrandGeoData.emit(this.selectedModelGeo);
    this.dataService.setBrandGeoData(this.selectedModelGeo);
    this.dataService.setVehicle(this.vehicle);
    this.dataService.setGeo(this.geo);
    console.log(this.vehicle);
    console.log(this.geo);
  }



}

