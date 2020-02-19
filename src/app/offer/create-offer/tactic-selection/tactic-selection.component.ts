import { Component, OnInit, Output } from '@angular/core';
import { STactic } from 'src/app/model/Tactic/select_tactic';
import { TacticService } from 'src/app/all_Services/tactic.service';
import { InteractionService } from 'src/app/interaction.service';

@Component({
  selector: 'app-tactic-selection',
  templateUrl: './tactic-selection.component.html',
  styleUrls: ['./tactic-selection.component.css']
})
export class TacticSelectionComponent implements OnInit {

  alltactic=[];
  stactic : STactic=new STactic();

  //include Interactin Service for checking
  constructor(private tac:TacticService, private iservice : InteractionService) { }

  ngOnInit() {

    this.stactic.tactic="";

    this.tac.getAllTactics().subscribe(data=>
      {this.alltactic=data;
       console.log(data)
          
     } )

     
  }

  check()
  {
    console.log(this.stactic);
  }
}
