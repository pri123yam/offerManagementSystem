// import { Component, OnInit,EventEmitter,Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
// import { from } from 'rxjs';
@Component({
  selector: 'app-side-navigation',
  templateUrl: './side-navigation.component.html',
  styleUrls: ['./side-navigation.component.css']
})
export class SideNavigationComponent implements OnInit {

  // @Output() selected=new EventEmitter<string>();
  // onSelect(item: string)
  // {
  //   // console.log(item);
  //   this.selected.emit(item);
  // }

  constructor() { }

  ngOnInit() {
  }

}
