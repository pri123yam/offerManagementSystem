import { Component, OnInit } from '@angular/core';
import { InteractionService } from 'src/app/interaction.service';
import { Model_Geo } from 'src/app/model/Model-Geo/mod_geo';

@Component({
  selector: 'app-preview-all',
  templateUrl: './preview-all.component.html',
  styleUrls: ['./preview-all.component.css']
})


export class PreviewAllComponent implements OnInit {

  allModelGeo : Model_Geo;
  brand : any;

  constructor(private iservice : InteractionService) { 
    
    
  }

  ngOnInit() {

    //retrive the data from ModelGeo
    this.iservice.modelgeo$.subscribe(
      message=>{
        this.allModelGeo=message;
        this.brand=this.allModelGeo.brand;
        console.log("inside preview");
        console.log(message);
      } );


  }

  showDetails()
  {
    alert(this.allModelGeo.brand);
  }

}
