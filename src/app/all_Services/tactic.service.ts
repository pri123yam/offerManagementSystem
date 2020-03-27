import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'Basic ' + btoa('pratik:pwd')
  })
};

@Injectable({
  providedIn: 'root'
})
export class TacticService {

  tacticurl : string = "http://localhost:8080/api/getTactics";
  getAllTactics():Observable<Object[]>
  {
    return this.http.get<Object[]>(this.tacticurl,httpOptions);
  }

  constructor(private http : HttpClient) { }
}
