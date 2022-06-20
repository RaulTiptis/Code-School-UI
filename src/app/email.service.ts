import {Injectable} from "@angular/core";
import {environment} from "../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Registration} from "./email";
import {Progress} from './progress';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  apiServerUrl = environment.apiServerUrl;

  constructor(private http: HttpClient) {}

  public register(registration: Registration, progress: Progress): Observable<Registration>{
    registration.progress = progress;
    return this.http.post<Registration>(`${this.apiServerUrl}/api/v1/registration`, registration);
  }

  public confirm(token: string): Observable<void>{
    return this.http.get<void>(`${this.apiServerUrl}/api/v1/registration/confirm?token=${token}`);
  }

  public getUsers(): Observable<Registration[]>{
    return this.http.get<Registration[]>(`${this.apiServerUrl}/api/v1/registration/all`);
  }

  public login(email:string, password:string){
    const headers=new HttpHeaders({Authorization: 'Basic '+email+":"+password});
    return this.http.get(`${this.apiServerUrl}/api/v1/registration/login`,{headers,responseType:'text' as 'json'});
  }
}
