import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TacticService {

  tacticurl : string = "http://localhost:8080/api/getTactics";
  getAllTactics():Observable<Object[]>
  {
    return this.http.get<Object[]>(this.tacticurl);
  }

  constructor(private http : HttpClient) { }
}
