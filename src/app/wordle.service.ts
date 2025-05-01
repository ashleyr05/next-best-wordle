import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WordleService {

  constructor(
    private http:HttpClient
  ) { }

  getRequest():Observable<any> {
    return this.http.get("https://cs4640.cs.virginia.edu/zwu6su/hw9/wordle_api.php");
  }
}