import { Component, OnInit, Output } from '@angular/core';
import { STactic } from 'src/app/model/Tactic/select_tactic';
import { TacticService } from 'src/app/all_Services/tactic.service';
import { InteractionService } from 'src/app/interaction.service';
import { CreateOfferDataService } from 'src/app/all_Services/create-offer-data.service';

@Component({
  selector: 'app-tactic-selection',
  templateUrl: './tactic-selection.component.html',
  styleUrls: ['./tactic-selection.component.css']
})
export class TacticSelectionComponent implements OnInit {

  alltactic = [];
  stactic: STactic = new STactic();

  //include Interactin Service for checking
  constructor(private tac: TacticService, private iservice: InteractionService, private dataService: CreateOfferDataService) { }

  ngOnInit() {

    console.log(this.dataService.getTacticData());
    this.tac.getAllTactics().subscribe(data => {
      this.alltactic = data;
    })
    this.stactic = this.dataService.getTacticData();
  }
  tacticSubmission() {
    this.dataService.setTacticData(this.stactic);
  }
}
