import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {RegistrationService} from '../email.service';
import {Progress} from '../progress';
import {Registration} from '../email';
import {ProgressService} from '../progress.service';

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
  constructor(private progressService: ProgressService, private registrationService: RegistrationService, private router: Router) { }

  ngOnInit(): void {
    document.getElementById('main').className = "active";
    this.loadState();
  }

  java(){
    document.getElementById('javaButton').className = "active";
    document.getElementById('main').className = "";
    document.getElementById('pythonButton').className = "";
    document.getElementById('cButton').className = "";
    document.getElementById('achievementButton').className = "";
    this.javaModuleSelected = true;
    this.defaultMessage = false;
    this.pythonModuleSelected = false;
    this.cModuleSelected = false;
    this.achievementModuleSelected = false;
    this.progressService.updateProgress(this.login.progress).subscribe();
    localStorage.setItem('currentUser', JSON.stringify(this.login));
  }

  python(){
    document.getElementById('javaButton').className = "";
    document.getElementById('main').className = "";
    document.getElementById('pythonButton').className = "active";
    document.getElementById('cButton').className = "";
    document.getElementById('achievementButton').className = "";
    this.pythonModuleSelected = true;
    this.defaultMessage = false;
    this.javaModuleSelected = false;
    this.cModuleSelected = false;
    this.achievementModuleSelected = false;
    this.progressService.updateProgress(this.login.progress).subscribe();
    localStorage.setItem('currentUser', JSON.stringify(this.login));
  }

  c(){
    document.getElementById('javaButton').className = "";
    document.getElementById('main').className = "";
    document.getElementById('pythonButton').className = "";
    document.getElementById('cButton').className = "active";
    document.getElementById('achievementButton').className = "";
    this.pythonModuleSelected = false;
    this.defaultMessage = false;
    this.javaModuleSelected = false;
    this.cModuleSelected = true;
    this.achievementModuleSelected = false;
    this.progressService.updateProgress(this.login.progress).subscribe();
    localStorage.setItem('currentUser', JSON.stringify(this.login));
  }

  achievements(){
    document.getElementById('achievementButton').className = "active";
    document.getElementById('javaButton').className = "";
    document.getElementById('main').className = "";
    document.getElementById('pythonButton').className = "";
    document.getElementById('cButton').className = "";
    this.pythonModuleSelected = false;
    this.defaultMessage = false;
    this.javaModuleSelected = false;
    this.cModuleSelected = false;
    this.achievementModuleSelected = true;
    this.progressService.updateProgress(this.login.progress).subscribe();
    localStorage.setItem('currentUser', JSON.stringify(this.login));
  }

  main(){
    document.getElementById('achievementButton').className = "";
    document.getElementById('javaButton').className = "";
    document.getElementById('main').className = "active";
    document.getElementById('pythonButton').className = "";
    document.getElementById('cButton').className = "";
    this.pythonModuleSelected = false;
    this.defaultMessage = true;
    this.javaModuleSelected = false;
    this.cModuleSelected = false;
    this.achievementModuleSelected = false;
    this.progressService.updateProgress(this.login.progress).subscribe();
    localStorage.setItem('currentUser', JSON.stringify(this.login));

  }

  loadState(){
    this.login = JSON.parse(localStorage.getItem('currentUser'));
  }
}
