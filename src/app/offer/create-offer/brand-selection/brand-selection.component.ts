import { Component, OnInit } from '@angular/core';
import { BrandServiceService } from 'src/app/all_Services/brand-service.service'
import { Brand } from 'src/app/model/Brand/brand';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Bike } from 'src/app/model/Bike/bike';
import { Model_Geo } from 'src/app/model/Model-Geo/mod_geo';
import { InteractionService } from 'src/app/interaction.service';

@Component({
  selector: 'app-brand-selection',
  templateUrl: './brand-selection.component.html',
  styleUrls: ['./brand-selection.component.css']
})
export class BrandSelectionComponent implements OnInit {

  // brand: Brand[] ;
  placeHolder="Select Value";
  brand=[];
  // model=[];
  bikeinfo=[];
  sortedBrand=[];
  model=[];
  sortedModel=[];
  bodymodel=[];
  sortedBodyModel=[];
  

  //this is geography data
  geoinfo=[];

  state=[];
  sortedState=[];
  // selectedState:string;

  district=[];
  sortedDistrict=[];
  // selectedDistrict: string;

  city=[];
  sortedCity=[];
  // selectedCity:string;

  selectedModelGeo : Model_Geo=new Model_Geo();

  flag=0;

  constcity =[];
  constdist=[];
  conststate=[];
  
  constructor(private iservice : InteractionService,private brnd: BrandServiceService) { }

  ngOnInit() {
    
    //  if(this.flag===0)
    //  {
        // this.selectedModelGeo.brand="";
        // this.selectedModelGeo.model="";
        // this.selectedModelGeo.bodyModel="";
        // this.selectedModelGeo.state="";
        // this.selectedModelGeo.district="";
        // this.selectedModelGeo.city="";
    //  }
    

      //# Data Read And Brand Sorted Display
       this.brnd.get_Bike().subscribe(data=>
       {this.bikeinfo=data;
        //console.log(data)
        //this.nbike = Array.from(new Set(this.bike));
        for(var i=0;i<this.bikeinfo.length;i++)
        {
          this.brand.push(this.bikeinfo[i].brandName);
          
        }
        this.sortedBrand = Array.from(new Set(this.brand));
           
      } )

      //geography details
      this.brnd.get_Geo().subscribe(data=>
        {this.geoinfo=data;
         console.log(data)
        
         for(var i=0;i<this.geoinfo.length;i++)
         {
           this.state.push(this.geoinfo[i].state.stateName);
           //added later
           this.district.push(this.geoinfo[i].district.districtName);
           this.city.push(this.geoinfo[i].city.cityName);
           
         }
         this.sortedState = Array.from(new Set(this.state));
         //added later
         this.sortedDistrict = Array.from(new Set(this.district));
         this.sortedCity = Array.from(new Set(this.city));
        
         this.constcity=this.sortedCity;
         this.constdist=this.sortedDistrict;
         this.conststate=this.sortedState;
     
        //  console.log("city copy");
        //  console.log(this.constcity);   

       } )

       
       
    
        
    }
  

  onSelectBrand(event: Event)
  {
    //console.table(event);
    this.model=[];
    this.sortedModel=[];
    this.sortedBodyModel=null;

    console.info(this.selectedModelGeo.brand);
    for(var i=0;i<this.bikeinfo.length;i++)
      {
          
          if(this.bikeinfo[i].brandName==this.selectedModelGeo.brand)
          {
             //console.log(this.bikeinfo[i].brandName);
             this.model.push(this.bikeinfo[i].modelName);
          }
         // console.log(i);
      }
        this.sortedModel = Array.from(new Set(this.model));
  }

  onSelectModel()
  {
    this.bodymodel=[];
    this.sortedBodyModel=[];
    console.log(this.selectedModelGeo.model);
    for(var i=0;i<this.bikeinfo.length;i++)
      {
          
          if(this.bikeinfo[i].modelName==this.selectedModelGeo.model)
          {
             //console.log(this.bikeinfo[i].brandName);
             this.bodymodel.push(this.bikeinfo[i].bodyModelName);
          }
         // console.log(i);
      }
        this.sortedBodyModel = Array.from(new Set(this.bodymodel));
  }

  onSelectBodyModel()
  {
    console.log(this.selectedModelGeo.bodyModel);
  }

  // onSelectBike()
  // {
  //    if(this.selectedBrand==null || this.selectedModel==null || this.sortedBodyModel==null)
  //    {
  //       this.flag=true;
  //    }
  // }

  //geography functions

  onSelectState()
  {

    if(this.selectedModelGeo.state=="")
    {
      this.sortedDistrict=this.constdist;
      this.sortedCity=this.constcity;
    }


    else
    {
    console.info(this.selectedModelGeo.state);
    this.district=[];
    this.sortedDistrict=[];
    this.city=[];
    this.sortedCity=[];
    //console.log(this.sortedDistrict);

    // if(this.district.length>0 && this.district.length!=null)
    // {
    //   this.district=null;
    //   this.sortedDistrict=null;
    // }
    
    for(var i=0;i<this.geoinfo.length;i++)
      {
          
        for(var j=0;j<this.selectedModelGeo.state.length;j++)
        {
          if(this.geoinfo[i].state.stateName==this.selectedModelGeo.state[j])
          {
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

  onSelectDistrict()
  {
    console.warn(this.selectedModelGeo.district);
    

    if(this.selectedModelGeo.district==""){

      console.log("blank district");
      this.sortedCity = this.constcity;

    }
    else
    {
    this.city=[];
    this.sortedCity=[];
    
    for(var i=0;i<this.geoinfo.length;i++)
      {
          
         //changed
         for(var j=0;j<this.selectedModelGeo.district.length;j++)
         { 
          if(this.geoinfo[i].district.districtName==this.selectedModelGeo.district[j])
          {
             //console.log(this.bikeinfo[i].brandName);
             this.city.push(this.geoinfo[i].city.cityName);
          }
         // console.log(i);
        }
      }
        this.sortedCity = Array.from(new Set(this.city));
    }
    
  }

  onSelectCity()
  {
    console.log(this.selectedModelGeo.city);
   
  }

  finalJson()
  {
    console.warn("Inside Model-Geo Final Json");
    console.warn(this.selectedModelGeo);
    this.iservice.sendModelGeo(this.selectedModelGeo);
  }
  
  

}
