import { Injectable } from '@angular/core';
import {environment} from '../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Suggestion} from './suggestion';

@Injectable({
  providedIn: 'root'
})
export class SuggestionService {

  apiServerUrl = environment.apiServerUrl;

  constructor(private http: HttpClient) { }

  public addSuggestion(suggestion: string): Observable<Suggestion>{
    return this.http.post<Suggestion>(`${this.apiServerUrl}/suggestion/add`, suggestion);
  }

}
