import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BrandServiceService } from 'src/app/all_Services/brand-service.service'
import { Brand } from 'src/app/model/Brand/brand';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Bike } from 'src/app/model/Bike/bike';
import { Model_Geo } from 'src/app/model/Model-Geo/mod_geo';
import { InteractionService } from 'src/app/interaction.service';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { CreateOfferDataService } from 'src/app/all_Services/create-offer-data.service';

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
  sortedState = [];
  // selectedState:string;

  district = [];
  sortedDistrict = [];
  // selectedDistrict: string;

  city = [];
  sortedCity = [];
  // selectedCity:string;

  selectedModelGeo: Model_Geo = new Model_Geo();

  @Input() flag: number;

  constcity = [];
  constdist = [];
  conststate = [];

  // dropdownSettings = {};

  constructor(private iservice: InteractionService, private brnd: BrandServiceService, private dataService: CreateOfferDataService) { }

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
    for (var i = 0; i < this.bikeinfo.length; i++) {

      if (this.bikeinfo[i].brandName == this.selectedModelGeo.brand) {
        this.model.push(this.bikeinfo[i].modelName);
      }
    }
    console.log(this.model);
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
    console.log(this.selectedModelGeo.model);
    for (var i = 0; i < this.bikeinfo.length; i++) {
      if (this.bikeinfo[i].modelName == this.selectedModelGeo.model) {
        this.bodymodel.push(this.bikeinfo[i].bodyModelName);
      }
    }
    this.sortedBodyModel = Array.from(new Set(this.bodymodel));
  }

  onSelectBodyModel() {
    console.log(this.selectedModelGeo.bodyModel);
  }

  onSelectState() {
    console.warn("inside state");
    console.log(this.selectedModelGeo.state.length);
    if (!this.selectedModelGeo.state.length) {
      this.sortedDistrict = this.constdist;
      this.sortedCity = this.constcity;
    }


    else {
      console.info(this.selectedModelGeo.state);
      this.district = [];
      this.sortedDistrict = [];
      this.city = [];
      this.sortedCity = [];
      //console.log(this.sortedDistrict);

      // if(this.district.length>0 && this.district.length!=null)
      // {
      //   this.district=null;
      //   this.sortedDistrict=null;
      // }

      for (var i = 0; i < this.geoinfo.length; i++) {

        for (var j = 0; j < this.selectedModelGeo.state.length; j++) {
          if (this.geoinfo[i].state.stateName == this.selectedModelGeo.state[j]) {
            //console.log(this.bikeinfo[i].brandName);
            this.district.push(this.geoinfo[i].district.districtName);
            this.city.push(this.geoinfo[i].city.cityName);

          }
          // console.log(i);
        }

      }
      this.sortedDistrict = Array.from(new Set(this.district));
      this.sortedCity = Array.from(new Set(this.city));
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
            this.city.push(this.geoinfo[i].city.cityName);
          }
          // console.log(i);
        }
      }
      this.sortedCity = Array.from(new Set(this.city));
    }

  }

  onSelectCity() {
    console.log(this.selectedModelGeo.city);

  }

  finalJson() {
    this.iservice.sendModelGeo(this.selectedModelGeo);
    this.$sendBrandGeoData.emit(this.selectedModelGeo);
    this.dataService.setBrandGeoData(this.selectedModelGeo);
  }



}

// import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
// import { BrandServiceService } from 'src/app/all_Services/brand-service.service'
// import { Brand } from 'src/app/model/Brand/brand';
// import { analyzeAndValidateNgModules } from '@angular/compiler';
// import { Bike } from 'src/app/model/Bike/bike';
// import { Model_Geo } from 'src/app/model/Model-Geo/mod_geo';
// import { InteractionService } from 'src/app/interaction.service';
// import { LeaseSelectionComponent } from '../lease-selection/lease-selection.component';
// import { DashboardComponent } from 'src/app/dashboard/dashboard.component';

// @Component({
//   selector: 'app-brand-selection',
//   templateUrl: './brand-selection.component.html',
//   styleUrls: ['./brand-selection.component.css']
// })
// export class BrandSelectionComponent implements OnInit {
//   // brand: Brand[] ;

//   @Input() flag: number;
//   placeHolder = "Select Value";
//   brand = [];
//   // model=[];
//   bikeinfo = [];
//   sortedBrand = [];
//   model = [];
//   sortedModel = [];
//   bodymodel = [];
//   sortedBodyModel = [];


//   //this is geography data
//   geoinfo = [];

//   state = [];
//   sortedState = [];
//   // selectedState:string;

//   district = [];
//   sortedDistrict = [];
//   // selectedDistrict: string;

//   city = [];
//   sortedCity = [];
//   // selectedCity:string;

//   selectedModelGeo: Model_Geo = new Model_Geo();



//   constcity = [];
//   constdist = [];
//   conststate = [];

//   constructor(private iservice: InteractionService, private brnd: BrandServiceService) { }

//   ngOnInit() {
//     //   if (localStorage.key(modelGeoData)) {
//     //     const savedData = JSON.parse(localStorage.getItem('modelGeoData'));
//     //     for (const element of formElements) {
//     //       if (element.name in savedData) {
//     //         element.value = savedData[element.name];
//     //       }
//     //     }
//     // }
//     console.log(this.selectedModelGeo);
//     console.log(this.flag)
//     if (this.flag === 1)
//     {
//       // localStorage.removeItem('modelGeoData');
//     }

//     // var clickEvent = new MouseEvent('click', {
//     //   view: window,
//     //   bubbles: true,
//     //   cancelable: true
//     // });
//     for (let key in localStorage) {
//       if (key === 'modelGeoData') {
//         this.selectedModelGeo = JSON.parse(localStorage.getItem('modelGeoData'));
//       }
//     }
//     console.log(this.selectedModelGeo);


//     //  if(this.flag===0)
//     //  {
//     // this.selectedModelGeo.brand="";
//     // this.selectedModelGeo.model="";
//     // this.selectedModelGeo.bodyModel="";
//     // this.selectedModelGeo.state="";
//     // this.selectedModelGeo.district="";
//     // this.selectedModelGeo.city="";
//     //  }

//     //# Data Read And Brand Sorted Display
//     this.brnd.get_Bike().subscribe(data => {
//       this.bikeinfo = data;
//       //this.nbike = Array.from(new Set(this.bike));
//       for (var i = 0; i < this.bikeinfo.length; i++) {
//         this.brand.push(this.bikeinfo[i].brandName);

//       }
//       this.sortedBrand = Array.from(new Set(this.brand));

//     })

//     //geography details
//     this.brnd.get_Geo().subscribe(data => {
//       this.geoinfo = data;

//       for (var i = 0; i < this.geoinfo.length; i++) {
//         this.state.push(this.geoinfo[i].state.stateName);
//         //added later
//         this.district.push(this.geoinfo[i].district.districtName);
//         this.city.push(this.geoinfo[i].city.cityName);

//       }
//       this.sortedState = Array.from(new Set(this.state));
//       //added later
//       this.sortedDistrict = Array.from(new Set(this.district));
//       this.sortedCity = Array.from(new Set(this.city));

//       this.constcity = this.sortedCity;
//       this.constdist = this.sortedDistrict;
//       this.conststate = this.sortedState;

//       //  console.log("city copy");
//       //  console.log(this.constcity);   

//     })
//   }


//   onSelectBrand(event: Event) {
//     //console.table(event);
//     this.model = [];
//     this.sortedModel = [];
//     this.sortedBodyModel = null;

//     console.info(this.selectedModelGeo.brand);
//     for (var i = 0; i < this.bikeinfo.length; i++) {

//       if (this.bikeinfo[i].brandName == this.selectedModelGeo.brand) {
//         //console.log(this.bikeinfo[i].brandName);
//         this.model.push(this.bikeinfo[i].modelName);
//       }
//       // console.log(i);
//     }
//     this.sortedModel = Array.from(new Set(this.model));
//   }

//   onSelectModel() {
//     this.bodymodel = [];
//     this.sortedBodyModel = [];
//     console.log(this.selectedModelGeo.model);
//     for (var i = 0; i < this.bikeinfo.length; i++) {

//       if (this.bikeinfo[i].modelName == this.selectedModelGeo.model) {
//         //console.log(this.bikeinfo[i].brandName);
//         this.bodymodel.push(this.bikeinfo[i].bodyModelName);
//       }
//       // console.log(i);
//     }
//     this.sortedBodyModel = Array.from(new Set(this.bodymodel));
//   }

//   onSelectBodyModel() {
//     console.log(this.selectedModelGeo.bodyModel);
//   }

//   // onSelectBike()
//   // {
//   //    if(this.selectedBrand==null || this.selectedModel==null || this.sortedBodyModel==null)
//   //    {
//   //       this.flag=true;
//   //    }
//   // }

//   //geography functions

//   onSelectState() {

//     if (this.selectedModelGeo.state.length === 0) {
//       this.sortedDistrict = this.constdist;
//       this.sortedCity = this.constcity;
//     }


//     else {
//       console.info(this.selectedModelGeo.state);
//       this.district = [];
//       this.sortedDistrict = [];
//       this.city = [];
//       this.sortedCity = [];
//       //console.log(this.sortedDistrict);

//       // if(this.district.length>0 && this.district.length!=null)
//       // {
//       //   this.district=null;
//       //   this.sortedDistrict=null;
//       // }

//       for (var i = 0; i < this.geoinfo.length; i++) {

//         for (var j = 0; j < this.selectedModelGeo.state.length; j++) {
//           if (this.geoinfo[i].state.stateName == this.selectedModelGeo.state[j]) {
//             //console.log(this.bikeinfo[i].brandName);
//             this.district.push(this.geoinfo[i].district.districtName);
//             this.city.push(this.geoinfo[i].city.cityName);

//           }
//           // console.log(i);
//         }

//       }
//       this.sortedDistrict = Array.from(new Set(this.district));
//       this.sortedCity = Array.from(new Set(this.city));
//       //console.log(this.sortedCity);
//     }
//   }
//   onSelectDistrict() {


//     if (this.selectedModelGeo.district.length === 0) {

//       console.log("blank district");
//       this.sortedCity = this.constcity;

//     }
//     else {
//       this.city = [];
//       this.sortedCity = [];

//       for (var i = 0; i < this.geoinfo.length; i++) {

//         //changed
//         for (var j = 0; j < this.selectedModelGeo.district.length; j++) {
//           if (this.geoinfo[i].district.districtName == this.selectedModelGeo.district[j]) {
//             //console.log(this.bikeinfo[i].brandName);
//             this.city.push(this.geoinfo[i].city.cityName);
//           }
//           // console.log(i);
//         }
//       }
//       this.sortedCity = Array.from(new Set(this.city));
//     }

//   }

//   onSelectCity() {
//     console.log(this.selectedModelGeo.city);

//   }

//   finalJson() {
//     console.log("Inside Model-Geo Final Json");
//     console.log(this.selectedModelGeo);
//     this.flag = 0;
//     this.iservice.sendModelGeo(this.selectedModelGeo);
//     localStorage.setItem('modelGeoData', JSON.stringify(this.selectedModelGeo));
//   }



// }