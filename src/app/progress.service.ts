import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from "../environments/environment";
import {Progress} from './progress';

@Injectable({
  providedIn: 'root'
})
export class ProgressService {
  apiServerUrl = environment.apiServerUrl;

  constructor(private http: HttpClient) { }

  public addProgress(){
    return this.http.post(`${this.apiServerUrl}/progress/add`, null);
  }

  public updateProgress(progress: Progress): Observable<Progress>{
    return this.http.put<Progress>(`${this.apiServerUrl}/progress/update`, progress);
  }

  public deleteProgress(progressId: number): Observable<void>{
    return this.http.delete<void>(`${this.apiServerUrl}/progress/delete/${progressId}`);
  }
}
