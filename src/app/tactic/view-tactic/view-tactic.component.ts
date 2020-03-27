import { Component, OnInit, SystemJsNgModuleLoader } from '@angular/core';
import { TacticService }  from 'src/app/all_Services/tactic.service';
export interface Transaction {
  item: string;
  cost: number;
}
@Component({
  selector: 'app-view-tactic',
  templateUrl: './view-tactic.component.html',
  styleUrls: ['./view-tactic.component.css']
})

export class ViewTacticComponent implements OnInit {

  constructor(private tacticService : TacticService) { }
  tactics = [];
  searchText="";
  displayedColumns = ['item', 'cost'];
  transactions: Transaction[] = [
    {item: 'Beach ball', cost: 4},
    {item: 'Towel', cost: 5},
    {item: 'Frisbee', cost: 2},
    {item: 'Sunscreen', cost: 4},
    {item: 'Cooler', cost: 25},
    {item: 'Swim suit', cost: 15},
  ];

  /** Gets the total cost of all transactions. */
  getTotalCost() {
    return this.transactions.map(t => t.cost).reduce((acc, value) => acc + value, 0);
  }
  ngOnInit() {
    this.tacticService.getAllTactics().subscribe(res =>{
      this.tactics = res;
      console.log(this.tactics);
    })
  }

  myFunction()
  {
    // var x=document.getElementById("myInput");
    // console.log(x);
    console.log(this.searchText);
  }
}