import { Component, OnInit } from '@angular/core';
import { TacticService }  from 'src/app/all_Services/tactic.service';
@Component({
  selector: 'app-view-tactic',
  templateUrl: './view-tactic.component.html',
  styleUrls: ['./view-tactic.component.css']
})
export class ViewTacticComponent implements OnInit {

  constructor(private tacticService : TacticService) { }
  tactics = [];
  ngOnInit() {
    this.tacticService.getAllTactics().subscribe(res =>{
      this.tactics = res;
      console.log(this.tactics);
    })
  }
}
