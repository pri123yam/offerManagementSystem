import { Component, OnInit } from '@angular/core';
import { Lease } from 'src/app/model/Lease/lease';

@Component({
  selector: 'app-lease-selection',
  templateUrl: './lease-selection.component.html',
  styleUrls: ['./lease-selection.component.css']
})
export class LeaseSelectionComponent implements OnInit {

  Amount: number;
  lease : Lease=new Lease();
  constructor() { }

  ngOnInit() {

       this.lease.bank="";
       this.lease.term="";
       this.lease.rate=0;
  }

  onChangeBank()
  {
    console.log(this.lease.bank);
  }
  check()
  {
    console.log(this.lease);
  }

}
