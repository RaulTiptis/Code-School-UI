import { Component, OnInit } from '@angular/core';
import {Registration} from '../email';
import {RegistrationService} from '../email.service';
import {Router} from '@angular/router';
import {HttpErrorResponse} from '@angular/common/http';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  email:string;
  password:string;
  incorrectCredentials = false;
  public users: Registration[];
  public currentUser: Registration;

  constructor(private registrationService: RegistrationService, private router: Router) { }

  ngOnInit(): void {
    this.getUsers();
  }

  public getUsers(): void {
    this.registrationService.getUsers().subscribe(
      (registrationResponse: Registration[]) => {
        this.users = registrationResponse;
        console.log(registrationResponse);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }


  doLogin(loginForm: NgForm): void{
    for(let i=0;i < this.users.length;i++){
      if(this.users[i].email == loginForm.value.email){
        this.currentUser = this.users[i];
        this.incorrectCredentials = false;
        this.saveState();
        this.router.navigate(['./main-menu']);
      }else{
        this.incorrectCredentials = true;
      }
    }
  }

  saveState(){
    localStorage.setItem('currentUser', JSON.stringify(this.currentUser));
  }

}
