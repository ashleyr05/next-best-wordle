import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WordleService {

  constructor(
    private http:HttpClient
  ) { }

  getRequest():Observable<any> {
    return this.http.get("http://localhost:8080/next-best-wordle/wordle_api.php");
  }
}