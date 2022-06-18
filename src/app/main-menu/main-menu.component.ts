import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {RegistrationService} from '../email.service';
import {Registration} from '../email';
import {HttpErrorResponse} from '@angular/common/http';
import {LoginComponent} from '../login/login.component';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {

  login: Registration;
  defaultMessage = true;
  javaModuleSelected = false;
  pythonModuleSelected = false;
  cModuleSelected = false;
  achievementModuleSelected = false;
  testString = '';

  constructor(private registrationService: RegistrationService, private router: Router) { }

  ngOnInit(): void {
    this.testString = 'xd\nlol';
    this.loadState();
    console.log("login",this.login)
  }

  java(){
    this.javaModuleSelected = true;
    this.defaultMessage = false;
    this.pythonModuleSelected = false;
    this.cModuleSelected = false;
    this.achievementModuleSelected = false;
  }

  python(){
    this.pythonModuleSelected = true;
    this.defaultMessage = false;
    this.javaModuleSelected = false;
    this.cModuleSelected = false;
    this.achievementModuleSelected = false;
  }

  c(){
    this.pythonModuleSelected = false;
    this.defaultMessage = false;
    this.javaModuleSelected = false;
    this.cModuleSelected = true;
    this.achievementModuleSelected = false;
  }

  achievements(){
    this.pythonModuleSelected = false;
    this.defaultMessage = false;
    this.javaModuleSelected = false;
    this.cModuleSelected = false;
    this.achievementModuleSelected = true;
  }

  loadState(){
    this.login = JSON.parse(localStorage.getItem('currentUser'));
  }
}
