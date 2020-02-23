import { Component, OnInit, Output } from '@angular/core';
import { STactic } from 'src/app/model/Tactic/select_tactic';
import { TacticService } from 'src/app/all_Services/tactic.service';
import { CreateOfferDataService } from 'src/app/all_Services/create-offer-data.service';
import { Lease } from 'src/app/model/Lease/lease';

@Component({
  selector: 'app-tactic-selection',
  templateUrl: './tactic-selection.component.html',
  styleUrls: ['./tactic-selection.component.css']
})
export class TacticSelectionComponent implements OnInit {

  alltactic = [];
  stactic: STactic = new STactic();
  lea : Lease=new Lease();
  // isChecked:any;
  constructor(private tac: TacticService, private dataService: CreateOfferDataService) { }

  ngOnInit() {
    // this.dataService.setLeaseData(null);
    console.log(this.stactic);
    console.log(this.dataService.getTacticData());
    this.tac.getAllTactics().subscribe(data => {
      this.alltactic = data;
    })
    this.stactic = this.dataService.getTacticData();
  }
  onCheck(id: string) {
    console.log(event);
 
    if (typeof this.stactic.tactic === 'undefined')
      this.stactic.tactic = [id];
    else
      this.stactic.tactic.push(id);
    console.log(this.stactic.tactic);
  }
  tacticSubmission() {
    this.dataService.setLeaseData(this.lea);
    this.dataService.setTacticData(this.stactic);
    console.log(this.stactic);
  }
}