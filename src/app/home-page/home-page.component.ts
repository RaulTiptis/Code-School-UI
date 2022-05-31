import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Registration } from '../email';
import {RegistrationService} from '../email.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  public users: Registration[];

  constructor(private registrationService: RegistrationService, private router: Router) { }

  ngOnInit(): void {
    this.getUsers();
  }

  public addAccount(userForm: NgForm): void{
    this.registrationService.register(userForm.value).subscribe(
      (response: Registration) => {
        console.log(response);
        userForm.reset();
      },
      (error: HttpErrorResponse) => {
        console.log(error.message);
        console.log(error);
      }
    );
    this.router.navigate(['./register-success']);
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

}



