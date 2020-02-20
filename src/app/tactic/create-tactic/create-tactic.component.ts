import { Component, OnInit } from '@angular/core';
import { Tactic } from 'src/app/model/Tactic/tactic';
import * as moment from 'moment';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-create-tactic',
  templateUrl: './create-tactic.component.html',
  styleUrls: ['./create-tactic.component.css']
})
export class CreateTacticComponent implements OnInit {

  tactic: Tactic = new Tactic();
  message: any;

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
  }
  submit() {
    this.tactic.tacticCreationTime = moment();
    console.log(this.tactic);
    let response = this.http.post("http://localhost:8080/api/createTactic", this.tactic, { responseType: 'text' as 'json' });
    response.subscribe(data => {
      this.message = data;
      console.log(this.message);
    })
  }
}