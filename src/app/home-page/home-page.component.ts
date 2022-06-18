import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Registration } from '../email';
import {RegistrationService} from '../email.service';
import {ProgressService} from '../progress.service';
import {Progress} from '../progress';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  public users: Registration[];
  public progress: Progress;

  constructor(private registrationService: RegistrationService,private progressService: ProgressService, private router: Router) { }

  ngOnInit(): void {
    this.addProgress();
    this.getUsers();
  }

  public addAccount(userForm: NgForm): void{
    console.log("id",this.progress.id)
    console.log(userForm.value)
    this.registrationService.register(userForm.value).subscribe(
      (response: Registration) => {
        console.log(response);
        userForm.reset();
        this.router.navigate(['./register-success']);
      },
      (error: HttpErrorResponse) => {
        console.log(error.message);
        console.log(error);
      });
  }

  public addProgress(): void{
    this.progressService.addProgress().subscribe(
      (progress: Progress) => {
        console.log(progress)
        this.progress = progress;
      },
      (error: HttpErrorResponse) => {
        console.log(error.message);
        console.log(error);
      });
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



