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
  }

  onChange()
  {
    console.log(this.lease.amount);
  }
  check()
  {
    console.log(this.lease);
  }

}
